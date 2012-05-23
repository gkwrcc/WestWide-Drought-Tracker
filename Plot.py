import os
import matplotlib.pyplot as plt
import numpy as np

from datetime import datetime
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.font_manager import FontProperties
from matplotlib.ticker import ScalarFormatter

from matplotlib.mlab import movavg
from matplotlib.ticker import MultipleLocator
from scipy.io import netcdf as netcdf

from settings import WWDTNETCDF_DIR, ELEVATION_DATA

class Plot():
    '''This class accesses and delineates climate data '''
  
    def __init__(self, lat, lon, startYear, endYear, variable, month, span, runavg, data=None):
        '''Collect and Assign Parameters '''
        self.lat = lat
        self.lon = lon
        self.startYear = startYear
        self.endYear = endYear
        self.variable = variable
        self.month = month
        self.span = span
        self.runavg = runavg
  
    def Index(self, array, userInput):
        '''Function to find the index value of an array value closest to user input value '''     

        # Convert array to list and find the value with the smallest difference between the array and user input.
        userInput = float(userInput)
        newList =  [abs(userInput - i) for i in array]
        originalList = [i for i in array]
        newList.sort()
        smallestDifference = newList[0]
   
        # Return to index of the closest value to the original
        index = userInput + smallestDifference
        if index in originalList:
            pass
        else:
            index = userInput - smallestDifference
        closestIndex = originalList.index(index)
        return closestIndex

    def getText(self):
        ''' Finds and processes data to send text values to screen '''

        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
	    filename = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, self.month))
        else:
            filename = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, self.span), '%s%s_%s_PRISM.nc' % (self.variable, self.span, self.month))

	dataFile = netcdf.netcdf_file(filename, 'r')

        # Get closest Lat/Lon      
        closestLat = self.Index(dataFile.variables['latitude'], self.lat)
        closestLon = self.Index(dataFile.variables['longitude'], self.lon)

        # Set Current Dates
        currentYear = datetime.now().year
        currentDay = datetime.now().day
        currentMonth = datetime.now().month

        # Determine what year the data ends in and set year
        #if self.endYear == currentYear:
        #    data = np.array(dataFile.variables['data'][self.startYear-1895: ,closestLat,closestLon])
        #    print data[:]
               
        #else:
        #    data = np.array(dataFile.variables['data'][self.startYear-1895:-(currentYear-self.endYear),closestLat,closestLon])
        #    print data[:]
        #years = np.arange(self.startYear, self.endYear+1, 1)
      

        # Updated list sequencing index
        #
        years = np.arange(self.startYear, self.endYear+1, 1)
        data = np.array(dataFile.variables['data'][self.startYear-1895:len(years),closestLat,closestLon])

        # Convert Precip to inches
        if self.variable == 'pon':
            data = data/100.

        # Force data values of -9999.0 for nonexistent data
        if self.month - self.span < 0:
            noData = (abs(self.month - self.span)/12)
            noYear = 0
            if noData == 0:
                data[0] = -9999.0
            else:
                while noYear < noData:
                    data[noYear] = -9999.00
                    noYear+=1

        if data.mean() == -9999.00:
            data = ''

        # Select earliest possible year/value based on user input  
        v = 0
        for value in data:
            if data[v] == -9999.0:
                v+=1
            else:
                years = np.arange(self.startYear+v, self.endYear+1, 1)
                data = np.array(dataFile.variables['data'][self.startYear-1895:len(years),closestLat,closestLon])
            value+=1
        
        # Convert C to F
        if self.variable == 'mdn':
            data = ((data* 9.0/5) + 32)
   
        # Divide inches of (precip*100)/100
        if self.variable == 'pon':
            data = data/100.


        #Uncomment to show the data that will be plotted.
        #print data[:]

        # Set notmal period 1891-2010
        normal_range = np.array(dataFile.variables['data'][86:116,closestLat,closestLon])
        normal = normal_range.mean() 
        if normal == -9999.0:
            normal = ''

        if self.variable == 'pon':
            normal = normal/100.

        if self.variable == 'mdn':
            normal = ((normal* 9.0/5) + 32)

        # Drought indices do not have a normal period
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi':
            normal = 0

        # Set distance from normal 1981-2010
        inv_data = data - normal 

        # Start a list to send to Django template
        newList = []

        # Assign data column attributes
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi':
            newList.append("Year,Data")
        elif self.variable == 'pon':
            newList.append("Year,Precipitation (Inches),Percent of Normal")
        elif self.variable == 'mdn':
            newList.append("Year,Temperature (Degrees F),Departure from Normal")

        # Loop through data and send it to screen in a csv format
        start_point = 0
        if self.variable == 'pon':
            for item in years:
                newList.append('%4s,%4.2f,%4.2f'%(item, data[start_point], data[start_point]/normal*100))
                start_point+=1    
        elif self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi': 
            for item in years:
                newList.append('%4s,%4.2f'%(item, data[start_point]))
                start_point+=1
        elif self.variable == 'mdn':
            for item in years:
                newList.append('%4s,%4.2f,%4.2f'%(item, data[start_point], inv_data[start_point]))
                start_point+=1

        dataFile.close()
        return newList


    def getData(self):
        '''Finds and processes data returning plot'''

        #print 'opening data...'
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
	    filename = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, self.month))
        else:
            filename = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, self.span), '%s%s_%s_PRISM.nc' % (self.variable, self.span, self.month))

        # Open netcdf for data and elevation
	dataFile = netcdf.netcdf_file(filename, 'r')
	elevationFile = netcdf.netcdf_file(ELEVATION_DATA, 'r')


        # Get closest Lat/Lon      
        closestLat = self.Index(dataFile.variables['latitude'], self.lat)
        closestLon = self.Index(dataFile.variables['longitude'], self.lon)
        
        # Get closest Lat/Lon for elevation
        eclosestLat = self.Index(elevationFile.variables['lat'], self.lat)
        eclosestLon = self.Index(elevationFile.variables['lon'], self.lon)

        # Set elevation based on coordinates
        elevationData =  elevationFile.variables['elevation']
        elevation = elevationData[eclosestLat, eclosestLon]
        elevationFile.close()

        
        

        # Set Current dates
        currentYear = datetime.now().year
        
        #currentYear = 2011
        currentDay = datetime.now().day
        currentMonth = datetime.now().month


        #
        # Start here when selecting len of arrary
        #

        years = np.arange(self.startYear, self.endYear+1, 1)
        data = np.array(dataFile.variables['data'][self.startYear-1895:len(years),closestLat,closestLon])
        
 
        # Convert Precip to if there are any -9999.00 values to exclude if data selection is for all years
        if self.variable == 'pon':
            data = data/100.
       
        # Force data values of -9999.0 for nonexistent data
        if self.month - self.span < 0:
            noData = (abs(self.month - self.span)/12)
            noYear = 0
            if noData == 0:
                data[0] = -9999.0
            else:
                while noYear < noData:
                    data[noYear] = -9999.00
                    noYear+=1

        if data.mean() == -9999.00:
            data = ''

        # Select earliest possible year/value based on user input  
        v = 0
        for value in data:
            if data[v] == -9999.0:
                v+=1
            else:
                if self.endYear == currentYear:
                    years = np.arange(self.startYear+v, self.endYear+1, 1)
                    data = np.array(dataFile.variables['data'][self.startYear-1895+v:len(years),closestLat,closestLon])

                else:
                    data = np.array(dataFile.variables['data'][(self.startYear-1895)+v:len(years),closestLat,closestLon])
                    years = np.arange(self.startYear+v, self.endYear+1, 1) 
                    if self.month >= currentMonth:
                        data = np.array(dataFile.variables['data'][(self.startYear-1895)+v:len(years),closestLat,closestLon])   
            value+=1

        

        # Convert C to F
        if self.variable == 'mdn':
            data = ((data* 9.0/5) + 32)

        # Convert Precip to inches
        if self.variable == 'pon':
            data = data/100.
 
        # Prints Data
        #print data[:]


        # Set normal range 1981-2010
        normal_range = np.array(dataFile.variables['data'][86:116,closestLat,closestLon])
        normal = normal_range.mean() 

        #print normal
        # Convert precip to correct format
        if self.variable == 'pon':
            normal = normal/100.

        # Convert temperature from C to F
        if self.variable == 'mdn':
            normal = ((normal* 9.0/5) + 32)

        # Raise error if data is all -9999.0
        if normal == -9999.0:
            normal = ''

        # No time scale is needed for drought indices
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi':
            normal = 0

        # Set distance from normal variable
        inv_data = data - normal    

        # Create a figure for plots
        fig = plt.figure(figsize=(10,7), facecolor='w')
        ax = fig.add_axes([0.08, 0.15, .90, 0.78])
    
        # Used to set month name in plots based on month index
        monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        # Setup plots based on Variable    
        if self.variable == 'pdsi':
            self.span = 1
            ax.set_title(u'Palmer Drought Severity Index, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            ax.set_ylabel("PDSI")
            topColor, bottomColor = 'green', 'gold'

        if self.variable == 'scpdsi':
            self.span = 1
            ax.set_title(u' Self Calibrated Palmer Drought Severity Index, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            ax.set_ylabel("SCPDSI")
            topColor, bottomColor = 'green', 'gold'
 
        if self.variable == 'pzi':
            self.span = 1
            ax.set_title(u' Palmer Z-Index, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            ax.set_ylabel("PZI")
            topColor, bottomColor = 'green', 'gold'    
            
        if self.variable == 'mdn':
            if self.span == 1:
                ax.set_title(u'Mean Temperature, %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (monthList[self.month-1], self.lat, abs(self.lon), elevation))    
            else:
                ax.set_title(u'Mean Temperature, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            ax.set_ylabel(u"Temperature \u00b0F")
            topColor, bottomColor = 'red', 'blue'
   
        if self.variable == 'spi':
            if self.span == 1:
                ax.set_title(u'Standardized Precipitation Index, %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (monthList[self.month-1], self.lat, abs(self.lon), elevation)) 
            else:
                ax.set_title(u'Standardized Precipitation Index, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            ax.set_ylabel(u"SPI")
            topColor, bottomColor = 'blue', 'red'
          
        if self.variable == 'pon':
            if self.span == 1:
                ax.set_title(u'Precipitation, %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (monthList[self.month-1], self.lat, abs(self.lon), elevation)) 
            else:
                ax.set_title(u'Precipitation, %s-Months Ending in %s \n %4.2f\u00b0N, %4.2f\u00b0W, Elevation: %4.2f Meters' % (self.span, monthList[self.month-1], self.lat, abs(self.lon), elevation))
            #ax.set_title(u'Precipitation at %4.2f\u00b0N, %4.2f\u00b0W, Elevation:(%4.2f Meters) - %s-Months Ending in %s' % (self.lat, self.lon, elevation, self.span, monthList[self.month-1]), fontsize=9)
            ax.set_ylabel("Inches")
            ax.set_ybound(max(data))
            ax.axhline(y=normal, color="black", label='Normal Period: 1981-2010') 
            if max(data) <= 10:
                ax.yaxis.set_major_locator(MultipleLocator(1))
                ax.yaxis.set_minor_locator(MultipleLocator(.1))
            else:
                ax.yaxis.set_major_locator(MultipleLocator(10))
                ax.yaxis.set_minor_locator(MultipleLocator(1))                
            ax.xaxis.set_major_locator(MultipleLocator(10))
            ax.xaxis.set_minor_locator(MultipleLocator(1))
            ax.bar(years, data, color='green', align="center")     
            if self.runavg==False:
                pass
            elif (self.runavg%2==0):
                ma = movavg(data, self.runavg)
                ma.shape
                ax.plot(years[(self.runavg/2-1):-(self.runavg/2)], ma, color='#FF9900', linewidth=2, label="%d Year Average"% self.runavg)
            else:
                ma = movavg(data, self.runavg)
                ma.shape
                ax.plot(years[self.runavg/2:-(self.runavg/2)], ma, color='#FF9900', linewidth=2, label="%d Year Average"% self.runavg)

        # Set up plot for non Percent of Normal Plots
        if not self.variable == 'pon':  
        
            # Determines if normal period should be added to plot - drought indices are exempt.
            if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi':
                ax.axhline(y=normal, color="black") 
            else:
	        ax.axhline(y=normal, color="black", label='Normal Period: 1981-2010')
            ax.yaxis.set_major_locator(MultipleLocator(1))
            ax.yaxis.set_minor_locator(MultipleLocator(.1))
            ax.xaxis.set_major_locator(MultipleLocator(10))
            ax.xaxis.set_minor_locator(MultipleLocator(1))

            # Plot stacked graphs
            ax.bar(years[data < normal], inv_data[data < normal], color=bottomColor, align="center", bottom=normal)
            ax.bar(years[data >= normal], inv_data[data >= normal], color=topColor, align="center", bottom=normal)

            # Set running average
            if not self.variable == 'mdn':
                if self.runavg==False:
                    pass 
                elif (self.runavg%2==0):
                    ma = movavg(inv_data, self.runavg)
                    ma.shape
                    ax.plot(years[(self.runavg/2-1):-(self.runavg/2)], ma, color='black', linewidth=2, label="%d Year Average"% self.runavg)
                else:
                    ma = movavg(inv_data, self.runavg)
                    ma.shape
                    ax.plot(years[self.runavg/2:-(self.runavg/2)], ma, color='black', linewidth=2, label="%d Year Average"% self.runavg)

            # Add normal to place running average correctly for temperature data
            else:
                if self.runavg==False:
                    pass 
                elif (self.runavg%2==0):
                    ma = movavg(inv_data+normal, self.runavg)
                    ma.shape
                    ax.plot(years[(self.runavg/2-1):-(self.runavg/2)], ma, color='black', linewidth=2, label="%d Year Average"% self.runavg)
                else:
                    ma = movavg(inv_data+normal, self.runavg)
                    ma.shape
                    ax.plot(years[self.runavg/2:-(self.runavg/2)], ma, color='black', linewidth=2, label="%d Year Average"% self.runavg)
                    
	    # Determine y-axis
            if abs(max(inv_data[:])) >= abs(max(data)):
                y_limit = max(abs(inv_data[:]))
            else:
                y_limit = max(abs(data[:]))

            # Complete setting of y-axis
            if not self.variable == 'mdn':
                y_min, y_max = (-(y_limit), y_limit)            
            else:
                y_min, y_max = (normal- max(abs(inv_data)), normal+ max(abs(inv_data)))
                
            # Uncrowd y-axis is span is more than 13 - set for all variable - indent 4 spaces to make apply only to mdn
            if y_max-y_min >= 13:
                ax.yaxis.set_major_locator(MultipleLocator(2))
                ax.yaxis.set_minor_locator(MultipleLocator(.5))

            ax.set_ybound(y_min, y_max)
       
        # Rescale x-axis if less than ten year span
        if self.endYear-self.startYear <=10:
            ax.xaxis.set_major_formatter(ScalarFormatter(useOffset=False))
            ax.xaxis.set_major_locator(MultipleLocator(1))
            
	else:
            ax.xaxis.grid()


        # Set font properties for the legend(s)
        fontProperties = FontProperties()
        fontProperties.set_size('small')
        ax.legend(loc=(0, -0.150), fancybox=True, prop=fontProperties)
        
        # Set branding
        if currentDay < 10:
	    currentDay = "0"+str(currentDay)
        ax.set_xlabel("Data Source: WRCC/UI, Created: %s-%s-%s" % (currentMonth,currentDay,currentYear))
        ax.xaxis.set_label_coords(0.78, -.122, transform=None)

        # Set scale for x-axis
        ax.set_autoscale_on(False)
        ax.set_xbound((years[0]-1, years[-1]+1))


        # Add figure to canvas
        canvas = FigureCanvas(plt.figure(1))      
        #canvas.close()
        dataFile.close()
        return canvas
        
     

if __name__ == '__main__':
    lat = 40
    lon = -100
    startYear = 1895 
    endYear = 2011
    variable = 'pon'
    month = 1
    span = 1
    runavg = 5

