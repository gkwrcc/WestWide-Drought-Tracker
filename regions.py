import os
import matplotlib.pyplot as plt
import numpy as np
import datetime

from dateutil.relativedelta import relativedelta
from matplotlib.pyplot import figure, show
from matplotlib.patches import Rectangle
from matplotlib.mlab import find, prctile
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.mlab import movavg
from scipy.io import netcdf

from settings import WWDTNETCDF_DIR, WWDTNETCDF_DIR2, WWDTNETCDF_DIR3, ELEVATION_DATA
from regionDicts import *

WWDTNETCDF_DIR = WWDTNETCDF_DIR2



#from datetime import datetime
from matplotlib.font_manager import FontProperties
from matplotlib.ticker import ScalarFormatter


from matplotlib.ticker import MultipleLocator




class Climatology:

    def __init__(self, region, variable, monthSpan, month, year):
        '''Collect and Assign Parameters '''
        self.variable = variable
        self.monthSpan = monthSpan
        self.region = region
        self.month = month
        self.year = year
        
       # print self.region, self.variable, self.monthSpan



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

    def getData(self):
        '''Open and plot the data '''
    
        # Set station directory if needed
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
        else:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR2
    
        # Open NetCDF Files
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
	    dataJan = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 1))
            dataFeb = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 2))
            dataMar = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 3))
            dataApr = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 4))
            dataMay = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 5))
            dataJun = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 6))
            dataJul = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 7))
            dataAug = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 8))
            dataSep = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 9))
            dataOct = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 10))
            dataNov = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 11))
            dataDec = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 12))

        else:
            dataJan = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 1))
            dataFeb = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 2))
            dataMar = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 3))
            dataApr = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 4))
            dataMay = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 5))
            dataJun = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 6))
            dataJul = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 7))
            dataAug = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 8))
            dataSep = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 9))
            dataOct = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 10))
            dataNov = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 11))
            dataDec = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 12))
            #print dataJan, dataFeb, dataMar, dataApr, dataMay, dataJun, dataJul, dataAug, dataSep, dataOct, dataNov, dataDec

        # Open the netcdf files
        dataJan = netcdf.netcdf_file(dataJan, 'r')
        dataFeb = netcdf.netcdf_file(dataFeb, 'r')
        dataMar = netcdf.netcdf_file(dataMar, 'r')
        dataApr = netcdf.netcdf_file(dataApr, 'r')
        dataMay = netcdf.netcdf_file(dataMay, 'r')
        dataJun = netcdf.netcdf_file(dataJun, 'r')
        dataJul = netcdf.netcdf_file(dataJul, 'r')
        dataAug = netcdf.netcdf_file(dataAug, 'r')
        dataSep = netcdf.netcdf_file(dataSep, 'r')
        dataOct = netcdf.netcdf_file(dataOct, 'r')
        dataNov = netcdf.netcdf_file(dataNov, 'r')
        dataDec = netcdf.netcdf_file(dataDec, 'r')


        # Get closest Lat/Lon      
        if int(self.region) in stationDict:
            closestRegion = self.Index(dataJan.variables['station_ID'], self.region)
        else:
            closestRegion = self.Index(dataJan.variables['polygon'], self.region)



        # Set up time features
        today = datetime.datetime.today()
        currentMonth = today.month
        currentDay = today.day

        # Set len of index for current year
        currentYear = today.year
        currentYear = range(1895, currentYear+1, 1)
        currentYear = len(currentYear)
        
        # Select all data that exists
        if currentMonth > 1 and currentDay > 2:
            dataJan = np.array(dataJan.variables['data'][:currentYear,closestRegion]) 

        else:
            dataJan = np.array(dataJan.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 2 and currentDay > 2:
            dataFeb = np.array(dataFeb.variables['data'][:currentYear,closestRegion]) 
        else:
            dataFeb = np.array(dataFeb.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 3 and currentDay > 2:
            dataMar = np.array(dataMar.variables['data'][:currentYear,closestRegion])
        else:
            dataMar = np.array(dataMar.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 4 and currentDay > 2:
            dataApr = np.array(dataApr.variables['data'][:currentYear,closestRegion])
        else:
            dataApr = np.array(dataApr.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 5 and currentDay > 2:
            dataMay = np.array(dataMay.variables['data'][:currentYear,closestRegion])
        else:
            dataMay = np.array(dataMay.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 6 and currentDay > 2:
            dataJun = np.array(dataJun.variables['data'][:currentYear,closestRegion])
        else:
            dataJun = np.array(dataJun.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 7 and currentDay > 2:
            dataJul = np.array(dataJul.variables['data'][:currentYear,closestRegion])
        else:
            dataJul = np.array(dataJul.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 8 and currentDay > 2:
            dataAug = np.array(dataAug.variables['data'][:currentYear,closestRegion])
        else:
            dataAug = np.array(dataAug.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 9 and currentDay > 2:
            dataSep = np.array(dataSep.variables['data'][:currentYear,closestRegion])
        else:
            dataSep = np.array(dataSep.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 10 and currentDay > 2:
            dataOct = np.array(dataOct.variables['data'][:currentYear,closestRegion])
        else:
            dataOct = np.array(dataOct.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 11 and currentDay > 2:
            dataNov = np.array(dataNov.variables['data'][:currentYear,closestRegion])
        else:
            dataNov = np.array(dataNov.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 12 and currentDay > 2:
            dataDec = np.array(dataDec.variables['data'][:currentYear,closestRegion])
        else:
            dataDec = np.array(dataDec.variables['data'][:(currentYear-1),closestRegion])

        # Convert C to F
        if self.variable == 'mdn':
            dataJan = ((dataJan* 9.0/5) + 32)
            dataFeb = ((dataFeb* 9.0/5) + 32)
            dataMar = ((dataMar* 9.0/5) + 32)
            dataApr = ((dataApr* 9.0/5) + 32)
            dataMay = ((dataMay* 9.0/5) + 32)
            dataJun = ((dataJun* 9.0/5) + 32)
            dataJul = ((dataJul* 9.0/5) + 32)
            dataAug = ((dataAug* 9.0/5) + 32)
            dataSep = ((dataSep* 9.0/5) + 32)
            dataOct = ((dataOct* 9.0/5) + 32)
            dataNov = ((dataNov* 9.0/5) + 32)
            dataDec = ((dataDec* 9.0/5) + 32)

        # Convert Precip to inches
        if self.variable == 'pon':
            dataJan = dataJan/24.5
            dataFeb = dataFeb/24.5
            dataMar = dataMar/24.5
            dataApr = dataApr/24.5
            dataMay = dataMay/24.5
            dataJun = dataJun/24.5
            dataJul = dataJul/24.5
            dataAug = dataAug/24.5
            dataSep = dataSep/24.5
            dataOct = dataOct/24.5
            dataNov = dataNov/24.5
            dataDec = dataDec/24.5
 

        
        # Pull in the monthly percentages
        DATA = np.array([dataJan,
        dataFeb,
        dataMar,
        dataApr,
        dataMay, 
        dataJun,
        dataJul,
        dataAug,
        dataSep,
        dataOct,
        dataNov,
        dataDec], dtype=object)

        # Pull out means for each month
        meanJan = sum(DATA[0])/len(DATA[0])
        meanFeb = sum(DATA[1])/len(DATA[1])
        meanMar = sum(DATA[2])/len(DATA[2])
        meanApr = sum(DATA[3])/len(DATA[3])
        meanMay = sum(DATA[4])/len(DATA[4])
        meanJun = sum(DATA[5])/len(DATA[5])
        meanJul = sum(DATA[6])/len(DATA[6])
        meanAug = sum(DATA[7])/len(DATA[7])
        meanSep = sum(DATA[8])/len(DATA[8])
        meanOct = sum(DATA[9])/len(DATA[9])
        meanNov = sum(DATA[10])/len(DATA[10])
        meanDec = sum(DATA[11])/len(DATA[11])

        #print meanJan
        #print len(DATA[0]), len(DATA[11])

        # Colors for fill between, median and months legend colors
        perc_colors = ( [.85, .99, .99], [.7, .99, .99], [.5, .99, .99], [0, 0, 0], [1, 0, 0] )
        plevels = [5., 10., 25., 50., 75., 90., 95.]

        # Get percentages for months e.g. perc = Jan percentages
        perc = prctile(DATA[0], plevels[:])
        perc2 = prctile(DATA[1], plevels[:])
        perc3 = prctile(DATA[2], plevels[:])
        perc4 = prctile(DATA[3], plevels[:])
        perc5 = prctile(DATA[4], plevels[:])
        perc6 = prctile(DATA[5], plevels[:])
        perc7 = prctile(DATA[6], plevels[:])
        perc8 = prctile(DATA[7], plevels[:])
        perc9 = prctile(DATA[8], plevels[:])
        perc10 = prctile(DATA[9], plevels[:])
        perc11 = prctile(DATA[10], plevels[:])
        perc12 = prctile(DATA[11], plevels[:])


        # Set number of months to go back
        xMonth = self.monthSpan

        # Set the span to the x-month span
        span = xMonth

        ## Date format for red line 
        oneDay = 1
        oneMonth = self.month
        oneYear = self.year
        endDate =  datetime.datetime(oneYear,oneMonth,oneDay)
        startDate = endDate + relativedelta(months =- self.monthSpan)
        delta = relativedelta(months=+1)
        #print 'startDate: ', startDate
        #print 'endDate: ', endDate



        # Get months from start date to end date
        monthSpanListData = [] 

        # Create list for months, years
        monthDates = []
        yearDates = [] 

        while startDate <= endDate:
            #print 'Month: ', startDate.month, startDate.year
  
            if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
                dataFile = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, startDate.month))
                #print dataFile
                dataFile = netcdf.netcdf_file(dataFile, 'r')
                #dataFile = netcdf.netcdf_file('/media/drought/WWDTNETCDF/PRISM/%s/%s_%s_PRISM.nc'%(self.variable, self.variable, startDate.month), 'r')
               #print ('/media/drought/WWDTNETCDF/PRISM/%s/%s_%s_PRISM.nc'%(self.variable, self.variable, startDate.month), 'r')

            else:
                dataFile = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, startDate.month))
                
                dataFile = netcdf.netcdf_file(dataFile, 'r')



            #closestRegion = self.Index(dataFile.variables['station_ID'], self.region)
            # Get closest Lat/Lon      
            #if int(self.region) in stationDict:
            #    closestRegion = self.Index(dataJan.variables['station_ID'], self.region)
            #else:
            #    closestRegion = self.Index(dataJan.variables['polygon'], self.region)
            


            data = np.array(dataFile.variables['data'][startDate.year-1895:startDate.year-1894 ,closestRegion])
            for value in data:
                # Convert C to F
                if self.variable == 'mdn':
                    value = ((value* 9.0/5) + 32)
                # Convert Precip to inches
                if self.variable == 'pon':
                    value = value/24.5
                monthSpanListData.append(value)

                # Create value to append for date to return through django
                monthString = '%2.0f' % startDate.month
                yearString  = '%4.0f' % startDate.year
              
                monthDates.append(monthString)
                yearDates.append(yearString)

                
            startDate += delta





        # Add y-axis data
        # Use y = monthSpanListData[:-1] when all data present
        lastMonthY = monthSpanListData[:-1]


        

        # Set back a month if data has not been made for last month
        if today.day < 2:
            xMonth = xMonth + 1


        

        # Set the starting month
        startDate = (datetime.date(oneYear, oneMonth, 25) - datetime.timedelta(xMonth*365/12))
        startMonth = startDate.month
        

        # print startDate

        # Create label for x axis
        xLabelCombiner = ['J','F','M','A','M','J','J','A','S','O','N','D']
        xLabelList = []

        # List to hold the month span
        spanList = []

        # Grab months in order
        while len(spanList) < span:
            if startMonth < 13:
                #print startMonth, xLabelCombiner[startMonth-1]
                spanList.append(startMonth)
                xLabelList.append(xLabelCombiner[startMonth-1])
            else:
                startMonth=0
            startMonth+=1

        # Combine the spanlist with the percentage lines
        combiner = [perc,perc2,perc3,perc4,perc5,perc6,perc7,perc8,perc9,perc10,perc11,perc12]
        meanCombiner = [meanJan, meanFeb, meanMar, meanApr, meanMay, meanJun, meanJul, meanAug, meanSep, meanOct, meanNov, meanDec]

        # Create empty lists to fill lines
        meanLine = []
        percLine = []
        perc2Line = []
        perc3Line = []
        perc4Line = []
        perc5Line = []
        perc6Line = []
        perc7Line = []

        # Collect for all 7 lines
        for x in spanList:
            index = x-1
            adder = combiner[index]
            meanAdder = meanCombiner[index]
            meanLine.append(meanAdder)
            percLine.append(adder[0])
            perc2Line.append(adder[1])
            perc3Line.append(adder[2])
            perc4Line.append(adder[3])
            perc5Line.append(adder[4])
            perc6Line.append(adder[5])
            perc7Line.append(adder[6])
            
        # Set range for months x-axis
        x = range(0,span, 1)

        #plevels = [5., 10., 25., 50., 75., 90., 95.]
        #Date,Value,Median,5th,95th,10th,90th,25th,75th
        #stringValue = len(monthDates)
        #zeroValue = 0
         
        #while zeroValue < stringValue:
        #    print monthDates[zeroValue],yearDates[zeroValue],lastMonthY[zeroValue],meanLine[zeroValue],percLine[zeroValue],perc7Line[zeroValue],perc2Line[zeroValue],perc6Line[zeroValue],perc3Line[zeroValue],perc4Line[zeroValue]
        #    zeroValue+=1

        # Create Figure
        fig = plt.figure(figsize=(10,7), facecolor='w')
        ax = fig.add_axes([0.08, 0.15, .70, 0.78])
        


        # Plot mean line
        meanLine = ax.plot(meanLine, 'k', linewidth=1)

        # Plot the x's and the lastXmonth line 
        #
        # Check here to make sure red line is correct
        #
        #print len(lastMonthY)
        lastXLine = ax.plot(lastMonthY, 'r-', linewidth=2)
        lastX = ax.plot(lastMonthY, 'rx', linewidth=2, markersize=18)

        # Plot percentage lines
        ax.plot(x, percLine, color='white')
        ax.plot(x, perc2Line, color='white')
        ax.plot(x, perc3Line, color='white')
        ax.plot(x, perc4Line, color='white')
        ax.plot(x, perc5Line, color='white')
        ax.plot(x, perc6Line, color='white')
        ax.plot(x, perc7Line, color='white')

        # Fill in between percentage lines
        ax.fill_between(x, percLine, perc2Line, facecolor=perc_colors[0], edgecolor='w', interpolate=True)
        ax.fill_between(x, perc2Line, perc3Line, facecolor=perc_colors[1], edgecolor='w', interpolate=True)
        ax.fill_between(x, perc3Line, perc4Line, facecolor=perc_colors[2], edgecolor='w', interpolate=True)
        ax.fill_between(x, perc4Line, perc5Line, facecolor=perc_colors[2], edgecolor='w', interpolate=True)
        ax.fill_between(x, perc5Line, perc6Line, facecolor=perc_colors[1], edgecolor='w', interpolate=True)
        ax.fill_between(x, perc6Line, perc7Line, facecolor=perc_colors[0], edgecolor='w', interpolate=True)

        # Set x-axis labels
        ax.set_xticks(np.arange(span))
        ax.set_xticklabels(xLabelList)

        # Set title
        #ax.set_title('%s Last %s-Months'%(self.variable,span))
        # Used to set month name in plots based on month index
        monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


        # Set name from region dictionary
        #regionName = stateDict[self.region]
        regionName = allRegionDict[int(self.region)]
        
        # Setup plots based on Variable    
        if self.variable == 'pdsi':
            ax.set_title(u'Palmer Drought Severity Index, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel("PDSI")

        if self.variable == 'scpdsi':
            ax.set_title(u' Self Calibrated Palmer Drought Severity Index, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel("SCPDSI")
 
        if self.variable == 'pzi':
            ax.set_title(u' Palmer Z-Index, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel("PZI")   
            
        if self.variable == 'mdn':
            ax.set_title(u'Mean Temperature, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel(u"Temperature \u00b0F")
            
        if self.variable == 'spi':
            ax.set_title(u'Standardized Precipitation Index, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel(u"SPI")
            
        if self.variable == 'pon':
            ax.set_title(u'Precipitation, %s-Months Ending in %s,%4.0f \n %s' % (span, monthList[(oneMonth-1)-1], oneYear, regionName))
            ax.set_ylabel("Inches")

        # Set axes
        #ax.set_ylabel('%s'%self.variable) 
        #ax.set_xlabel('From %s-%s - %s-%s'%(startDate.month, startDate.year, self.month, oneYear))   
        ax.autoscale_view(tight=False) 

        # Set text
        #ax.text(1.1, 01.10, "Western Regional\nClimate Center\nUniversity of Idaho",{'size':"x-small", 'family':"monospace"}, color='black')#, ha='right', va='top', alpha=0.9)

        # Set legend
        labels = ( r"$5-95^{th}$", r"$10-90^{th}$", r"$25-75^{th}$", r"$Median$", r"$Months$")

        # Set legend outside of plot axes
        ax.legend([Rectangle((0,0),1,1, facecolor=c, edgecolor='w') for c in perc_colors ], labels, bbox_to_anchor=(1.05, 1.), loc=2, borderaxespad=0., shadow=True)


        # Mock x,y for testing
        #x = range(0,10,1)
        #y = range(0,10,1)
        #ax.plot(x,y)
        #show()
        
        canvas = FigureCanvas(plt.figure(1)) 
        return canvas

    def getText(self):
        '''Open and plot the data '''

        # Set station directory if needed
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
        else:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR2
    
    
        # Open NetCDF Files
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
            dataJan = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 1))
            dataFeb = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 2))
            dataMar = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 3))
            dataApr = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 4))
            dataMay = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 5))
            dataJun = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 6))
            dataJul = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 7))
            dataAug = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 8))
            dataSep = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 9))
            dataOct = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 10))
            dataNov = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 11))
            dataDec = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, 12))

        else:
            dataJan = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 1))
            dataFeb = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 2))
            dataMar = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 3))
            dataApr = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 4))
            dataMay = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 5))
            dataJun = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 6))
            dataJul = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 7))
            dataAug = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 8))
            dataSep = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 9))
            dataOct = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 10))
            dataNov = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 11))
            dataDec = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, 12))
            #print dataJan, dataFeb, dataMar, dataApr, dataMay, dataJun, dataJul, dataAug, dataSep, dataOct, dataNov, dataDec

        # Open the netcdf files
        dataJan = netcdf.netcdf_file(dataJan, 'r')
        dataFeb = netcdf.netcdf_file(dataFeb, 'r')
        dataMar = netcdf.netcdf_file(dataMar, 'r')
        dataApr = netcdf.netcdf_file(dataApr, 'r')
        dataMay = netcdf.netcdf_file(dataMay, 'r')
        dataJun = netcdf.netcdf_file(dataJun, 'r')
        dataJul = netcdf.netcdf_file(dataJul, 'r')
        dataAug = netcdf.netcdf_file(dataAug, 'r')
        dataSep = netcdf.netcdf_file(dataSep, 'r')
        dataOct = netcdf.netcdf_file(dataOct, 'r')
        dataNov = netcdf.netcdf_file(dataNov, 'r')
        dataDec = netcdf.netcdf_file(dataDec, 'r')

        # Get closest Lat/Lon      
        if int(self.region) in stationDict:
            closestRegion = self.Index(dataJan.variables['station_ID'], self.region)
        else:
            closestRegion = self.Index(dataJan.variables['polygon'], self.region)

        # Set up time features
        today = datetime.datetime.today()
        currentMonth = today.month
        currentDay = today.day

        # Set len of index for current year
        currentYear = today.year
        currentYear = range(1895, currentYear+1, 1)
        currentYear = len(currentYear)
        
        # Select all data that exists
        if currentMonth > 1 and currentDay > 2:
            dataJan = np.array(dataJan.variables['data'][:currentYear,closestRegion]) 

        else:
            dataJan = np.array(dataJan.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 2 and currentDay > 2:
            dataFeb = np.array(dataFeb.variables['data'][:currentYear,closestRegion]) 
        else:
            dataFeb = np.array(dataFeb.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 3 and currentDay > 2:
            dataMar = np.array(dataMar.variables['data'][:currentYear,closestRegion])
        else:
            dataMar = np.array(dataMar.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 4 and currentDay > 2:
            dataApr = np.array(dataApr.variables['data'][:currentYear,closestRegion])
        else:
            dataApr = np.array(dataApr.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 5 and currentDay > 2:
            dataMay = np.array(dataMay.variables['data'][:currentYear,closestRegion])
        else:
            dataMay = np.array(dataMay.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 6 and currentDay > 2:
            dataJun = np.array(dataJun.variables['data'][:currentYear,closestRegion])
        else:
            dataJun = np.array(dataJun.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 7 and currentDay > 2:
            dataJul = np.array(dataJul.variables['data'][:currentYear,closestRegion])
        else:
            dataJul = np.array(dataJul.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 8 and currentDay > 2:
            dataAug = np.array(dataAug.variables['data'][:currentYear,closestRegion])
        else:
            dataAug = np.array(dataAug.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 9 and currentDay > 2:
            dataSep = np.array(dataSep.variables['data'][:currentYear,closestRegion])
        else:
            dataSep = np.array(dataSep.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 10 and currentDay > 2:
            dataOct = np.array(dataOct.variables['data'][:currentYear,closestRegion])
        else:
            dataOct = np.array(dataOct.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 11 and currentDay > 2:
            dataNov = np.array(dataNov.variables['data'][:currentYear,closestRegion])
        else:
            dataNov = np.array(dataNov.variables['data'][:(currentYear-1),closestRegion])
        if currentMonth > 12 and currentDay > 2:
            dataDec = np.array(dataDec.variables['data'][:currentYear,closestRegion])
        else:
            dataDec = np.array(dataDec.variables['data'][:(currentYear-1),closestRegion])

        # Convert C to F
        if self.variable == 'mdn':
            dataJan = ((dataJan* 9.0/5) + 32)
            dataFeb = ((dataFeb* 9.0/5) + 32)
            dataMar = ((dataMar* 9.0/5) + 32)
            dataApr = ((dataApr* 9.0/5) + 32)
            dataMay = ((dataMay* 9.0/5) + 32)
            dataJun = ((dataJun* 9.0/5) + 32)
            dataJul = ((dataJul* 9.0/5) + 32)
            dataAug = ((dataAug* 9.0/5) + 32)
            dataSep = ((dataSep* 9.0/5) + 32)
            dataOct = ((dataOct* 9.0/5) + 32)
            dataNov = ((dataNov* 9.0/5) + 32)
            dataDec = ((dataDec* 9.0/5) + 32)

        # Convert Precip to inches
        if self.variable == 'pon':
            dataJan = dataJan/24.5
            dataFeb = dataFeb/24.5
            dataMar = dataMar/24.5
            dataApr = dataApr/24.5
            dataMay = dataMay/24.5
            dataJun = dataJun/24.5
            dataJul = dataJul/24.5
            dataAug = dataAug/24.5
            dataSep = dataSep/24.5
            dataOct = dataOct/24.5
            dataNov = dataNov/24.5
            dataDec = dataDec/24.5
 

        
        # Pull in the monthly percentages
        DATA = np.array([dataJan,
        dataFeb,
        dataMar,
        dataApr,
        dataMay, 
        dataJun,
        dataJul,
        dataAug,
        dataSep,
        dataOct,
        dataNov,
        dataDec], dtype=object)

        # Pull out means for each month
        meanJan = sum(DATA[0])/len(DATA[0])
        meanFeb = sum(DATA[1])/len(DATA[1])
        meanMar = sum(DATA[2])/len(DATA[2])
        meanApr = sum(DATA[3])/len(DATA[3])
        meanMay = sum(DATA[4])/len(DATA[4])
        meanJun = sum(DATA[5])/len(DATA[5])
        meanJul = sum(DATA[6])/len(DATA[6])
        meanAug = sum(DATA[7])/len(DATA[7])
        meanSep = sum(DATA[8])/len(DATA[8])
        meanOct = sum(DATA[9])/len(DATA[9])
        meanNov = sum(DATA[10])/len(DATA[10])
        meanDec = sum(DATA[11])/len(DATA[11])

        #print meanJan
        #print len(DATA[0]), len(DATA[11])

        # Colors for fill between, median and months legend colors
        perc_colors = ( [.85, .99, .99], [.7, .99, .99], [.5, .99, .99], [0, 0, 0], [1, 0, 0] )
        plevels = [5., 10., 25., 50., 75., 90., 95.]

        # Get percentages for months e.g. perc = Jan percentages
        perc = prctile(DATA[0], plevels[:])
        perc2 = prctile(DATA[1], plevels[:])
        perc3 = prctile(DATA[2], plevels[:])
        perc4 = prctile(DATA[3], plevels[:])
        perc5 = prctile(DATA[4], plevels[:])
        perc6 = prctile(DATA[5], plevels[:])
        perc7 = prctile(DATA[6], plevels[:])
        perc8 = prctile(DATA[7], plevels[:])
        perc9 = prctile(DATA[8], plevels[:])
        perc10 = prctile(DATA[9], plevels[:])
        perc11 = prctile(DATA[10], plevels[:])
        perc12 = prctile(DATA[11], plevels[:])


        # Set number of months to go back
        xMonth = self.monthSpan

        # Set the span to the x-month span
        span = xMonth

        ## Date format for red line 
        oneDay = 1
        oneMonth = self.month
        oneYear = self.year
        endDate =  datetime.datetime(oneYear,oneMonth,oneDay)
        startDate = endDate + relativedelta(months =- self.monthSpan)
        delta = relativedelta(months=+1)
        #print 'startDate: ', startDate
        #print 'endDate: ', endDate



        # Get months from start date to end date
        monthSpanListData = [] 

        # Create list for months, years
        monthDates = []
        yearDates = [] 

        while startDate <= endDate:
            #print 'Month: ', startDate.month, startDate.year
  
            if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
                dataFile = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, startDate.month))
                #print dataFile
                dataFile = netcdf.netcdf_file(dataFile, 'r')
                #dataFile = netcdf.netcdf_file('/media/drought/WWDTNETCDF/PRISM/%s/%s_%s_PRISM.nc'%(self.variable, self.variable, startDate.month), 'r')
               #print ('/media/drought/WWDTNETCDF/PRISM/%s/%s_%s_PRISM.nc'%(self.variable, self.variable, startDate.month), 'r')

            else:
                dataFile = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, 1), '%s%s_%s_PRISM.nc' % (self.variable, 1, startDate.month))
                
                dataFile = netcdf.netcdf_file(dataFile, 'r')



            #closestRegion = self.Index(dataFile.variables['polygon'], self.region)

            


            data = np.array(dataFile.variables['data'][startDate.year-1895:startDate.year-1894 ,closestRegion])
            for value in data:
                # Convert C to F
                if self.variable == 'mdn':
                    value = ((value* 9.0/5) + 32)
                # Convert Precip to inches
                if self.variable == 'pon':
                    value = value/24.5
                monthSpanListData.append(value)

                # Create value to append for date to return through django
                monthString = '%2.0f' % startDate.month
                yearString  = '%4.0f' % startDate.year
              
                monthDates.append(monthString)
                yearDates.append(yearString)

                
            startDate += delta





        # Add y-axis data
        # Use y = monthSpanListData[:-1] when all data present
        lastMonthY = monthSpanListData[:]


        

        # Set back a month if data has not been made for last month
        if today.day < 2:
            xMonth = xMonth + 1

        # Set the starting month
        startDate = (datetime.date(oneYear, oneMonth, 25) - datetime.timedelta(xMonth*365/12))
        startMonth = startDate.month
        

        # print startDate

        # Create label for x axis
        xLabelCombiner = ['J','F','M','A','M','J','J','A','S','O','N','D']
        xLabelList = []

        # List to hold the month span
        spanList = []

        # Grab months in order
        while len(spanList) < span:
            if startMonth < 13:
                #print startMonth, xLabelCombiner[startMonth-1]
                spanList.append(startMonth)
                xLabelList.append(xLabelCombiner[startMonth-1])
            else:
                startMonth=0
            startMonth+=1

        # Combine the spanlist with the percentage lines
        combiner = [perc,perc2,perc3,perc4,perc5,perc6,perc7,perc8,perc9,perc10,perc11,perc12]
        meanCombiner = [meanJan, meanFeb, meanMar, meanApr, meanMay, meanJun, meanJul, meanAug, meanSep, meanOct, meanNov, meanDec]

        # Create empty lists to fill lines
        meanLine = []
        percLine = []
        perc2Line = []
        perc3Line = []
        perc4Line = []
        perc5Line = []
        perc6Line = []
        perc7Line = []

        # Collect for all 7 lines
        for x in spanList:
            index = x-1
            adder = combiner[index]
            meanAdder = meanCombiner[index]
            meanLine.append(meanAdder)
            percLine.append(adder[0])
            perc2Line.append(adder[1])
            perc3Line.append(adder[2])
            perc4Line.append(adder[3])
            perc5Line.append(adder[4])
            perc6Line.append(adder[5])
            perc7Line.append(adder[6])


        # Start a list to send to Django template
        newList = ['Month,Year,Value,Mean,5th,95th,10th,90th,25th,75th']

        # Loop through data and send it to screen in a csv format
        zeroValue =0
        while zeroValue < len(meanLine):  
            #print monthDates[zeroValue], yearDates[zeroValue], lastMonthY[zeroValue], meanLine[zeroValue]
            newList.append(monthDates[zeroValue]+','+yearDates[zeroValue]+','+'%4.2f'%lastMonthY[zeroValue]+','+'%4.2f'%meanLine[zeroValue]+','+'%4.2f'%percLine[zeroValue]+','+'%4.2f'%perc7Line[zeroValue]+','+'%4.2f'%perc2Line[zeroValue]+','+'%4.2f'%perc6Line[zeroValue]+','+'%4.2f'%perc3Line[zeroValue]+','+'%4.2f'%perc4Line[zeroValue])
            zeroValue+=1    
        
        return newList



#run = Climatology(region=131170803712, variable='pdsi', monthSpan=6)
#run.getData()
#run.getText()



























































class Plot():
    '''This class accesses and delineates climate data '''
  
    def __init__(self, region, startYear, endYear, variable, month, span, runavg, data=None):
        '''Collect and Assign Parameters '''
        self.region = region
        self.startYear = startYear
        self.endYear = endYear
        self.variable = variable
        self.month = month
        self.span = span
        self.runavg = runavg


        #print self.region, self.startYear, self.endYear,self.variable,self.month ,self.span ,self.runavg, 
  
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

        # Set station directory if needed
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
        else:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR2

        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
	    filename = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, self.month))
        else:
            filename = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, self.span), '%s%s_%s_PRISM.nc' % (self.variable, self.span, self.month))

	dataFile = netcdf.netcdf_file(filename, 'r')

        # Get closest Lat/Lon      
        if int(self.region) in stationDict:
            closestRegion = self.Index(dataFile.variables['station_ID'], self.region)
        else:
            closestRegion = self.Index(dataFile.variables['polygon'], self.region)

        # Set Current Dates
        currentYear = datetime.datetime.now().year
        currentDay = datetime.datetime.now().day
        currentMonth = datetime.datetime.now().month

        # Updated list sequencing index
        years = np.arange(self.startYear, self.endYear+1, 1)
        data = np.array(dataFile.variables['data'][self.startYear-1895:(self.endYear-1894),closestRegion])

        # Convert Precip to inches
        if self.variable == 'pon':
            data = data/24.5

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

        #if data.mean() == -9999.00:
        #    data = ''

        # Select earliest possible year/value based on user input  
        v = 0
        for value in data:
            if data[v] == -9999.0:
                v+=1
            else:
                years = np.arange(self.startYear+v, self.endYear+1, 1)
                data = np.array(dataFile.variables['data'][(self.startYear-1895)+v:(self.endYear-1894),closestRegion])
            value+=1
    

        # Force - 9999 to nan
        for i in range(0, data.size):
            #print data[i]
            if data[i] == -9999.0:
                #print i
                data[i] = np.nan
    
        # Convert C to F
        if self.variable == 'mdn':
            data = ((data* 9.0/5) + 32)
   
        # Divide inches of (precip*100)/100
        if self.variable == 'pon':
            data = data/24.5


        #Uncomment to show the data that will be plotted.

        # Set notmal period 1891-2010
        normal_range = np.array(dataFile.variables['data'][86:116,closestRegion])
        normal = normal_range.mean() 
        if normal == -9999.0:
            normal = np.nan

        if self.variable == 'pon':
            normal = normal/24.5

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


        # Set station directory if needed
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
        else:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR2
            


        #print 'opening data...'
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi':
	    filename = os.path.join(WWDTNETCDF_DIR, self.variable, '%s_%s_PRISM.nc' % (self.variable, self.month))
        else:
            filename = os.path.join(WWDTNETCDF_DIR, '%s%s' % (self.variable, self.span), '%s%s_%s_PRISM.nc' % (self.variable, self.span, self.month))

        # Open netcdf for data and elevation
	dataFile = netcdf.netcdf_file(filename, 'r')
	



        # Get closest Lat/Lon      
        if int(self.region) in stationDict:
            closestRegion = self.Index(dataFile.variables['station_ID'], self.region)
        else:
            closestRegion = self.Index(dataFile.variables['polygon'], self.region)




        

        # Set Current dates
        currentYear = datetime.datetime.now().year
        
        #currentYear = 2011
        currentDay = datetime.datetime.now().day
        currentMonth = datetime.datetime.now().month



        # Open data
        years = np.arange(self.startYear, self.endYear+1, 1)


        data = np.array(dataFile.variables['data'][self.startYear-1895:(self.endYear-1894),closestRegion])
   

        # Convert Precip to if there are any -9999.00 values to exclude if data selection is for all years
        if self.variable == 'pon':
            data = data/24.5
       





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

        #if data.mean() == -9999.00:
        #    data = ''

        # Select earliest possible year/value based on user input  
        v = 0
        for value in data:
            if data[v] == -9999.0:
                v+=1
            else:
                years = np.arange(self.startYear+v, self.endYear+1, 1)
                data = np.array(dataFile.variables['data'][(self.startYear-1895)+v:(self.endYear-1894),closestRegion])
            value+=1




        # Convert C to F
        if self.variable == 'mdn':
            data = ((data* 9.0/5) + 32)

        # Convert Precip to inches
        if self.variable == 'pon':
            data = data/24.5
 


        #print data[:]

        # Force - 9999 to nan
        for i in range(0, data.size):
            #print data[i]
            if data[i] == -9999.0:
                #print i
                data[i] = np.nan
                


        # Set normal range 1981-2010
        normal_range = np.array(dataFile.variables['data'][86:116,closestRegion])
        normal = normal_range.mean() 



        #print normal
        # Convert precip to correct format
        if self.variable == 'pon':
            normal = normal/24.5

        # Convert temperature from C to F
        if self.variable == 'mdn':
            normal = ((normal* 9.0/5) + 32)

        # Raise error if data is all -9999.0
        if normal == -9999.0:
            normal = np.nan

        nanList = []
        # set nan values to the normal on bar graphs so they do not show values
        # Leave the values as nan for precip charts
        if self.variable == 'pon':
            for i in range(0, data.size):
                #print i
                if np.isnan(data[i]):
                    data[i] = 0
                    nanList.append(i)

        if not self.variable == 'pon':
            for i in range(0, data.size):
                #print i
                if np.isnan(data[i]):
                    data[i] = normal
                    nanList.append(i)
                    #print 'nan'
                #item = normal
        #print data[:]
        #print nanList[:]
       
        # No time scale is needed for drought indices
        if self.variable == 'pdsi' or self.variable == 'scpdsi' or self.variable == 'pzi' or self.variable == 'spi':
            normal = 0

        # Set distance from normal variable
        inv_data = data - normal    

        # Create a figure for plots
        fig = plt.figure(figsize=(10,7), facecolor='w')
        ax = fig.add_axes([0.08, 0.15, .90, 0.78])
    

        regionName = allRegionDict[int(self.region)]


        # Used to set month name in plots based on month index
        monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        # Setup plots based on Variable    
        if self.variable == 'pdsi':
            self.span = 1
            ax.set_title(u'Palmer Drought Severity Index, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
            ax.set_ylabel("PDSI")
            topColor, bottomColor = 'green', 'gold'

        if self.variable == 'scpdsi':
            self.span = 1
            ax.set_title(u' Self Calibrated Palmer Drought Severity Index, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
            ax.set_ylabel("SCPDSI")
            topColor, bottomColor = 'green', 'gold'
 
        if self.variable == 'pzi':
            self.span = 1
            ax.set_title(u' Palmer Z-Index, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
            ax.set_ylabel("PZI")
            topColor, bottomColor = 'green', 'gold'    
            
        if self.variable == 'mdn':
            if self.span == 1:
                ax.set_title(u'Mean Temperature, %s \n %s ' % ( monthList[self.month-1], regionName ))
            else:
                ax.set_title(u'Mean Temperature, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
            ax.set_ylabel(u"Temperature \u00b0F")
            topColor, bottomColor = 'red', 'blue'
   
        if self.variable == 'spi':
            if self.span == 1:
                ax.set_title(u'Standardized Precipitation Index, %s \n %s ' % ( monthList[self.month-1], regionName ))
            else:
                ax.set_title(u'Standardized Precipitation Index, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
            ax.set_ylabel(u"SPI")
            topColor, bottomColor = 'blue', 'red'
          
        if self.variable == 'pon':
            if self.span == 1:
                ax.set_title(u'Precipitation, %s \n %s ' % ( monthList[self.month-1], regionName ))
            else:
                ax.set_title(u'Precipitation, %s-Months Ending in %s \n %s ' % (self.span, monthList[self.month-1], regionName ))
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


            if nanList:
                if len(nanList) <=1:
                    for i in nanList:
                        ax.bar(years[i],max(data), color='lightgrey', label='No Record')
                if len(nanList)> 1:
                    ax.bar(years[0],max(data),color='lightgrey',label = "No Record")
                    for i in nanList:
                        ax.bar(years[i], max(data),color='lightgrey')
            ax.axis('tight')

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



        # Denote missing data on plots

            if nanList:
                if len(nanList) <=1:
                    for i in nanList:
                        ax.bar(years[i],y_max, color='lightgrey', label='No Record')
                        ax.bar(years[i],y_min, color='lightgrey')
                if len(nanList)> 1:
                    ax.bar(years[0], normal, color='lightgrey',label = "No Record")
                    for i in nanList:
                        ax.bar(years[i],y_max, color='lightgrey')
                        ax.bar(years[i],y_min, color='lightgrey')

                
            # Uncrowd y-axis is span is more than 13 - set for all variable - indent 4 spaces to make apply only to mdn
            if y_max-y_min >= 13:
                ax.yaxis.set_major_locator(MultipleLocator(2))
                ax.yaxis.set_minor_locator(MultipleLocator(.5))

            if y_max-y_min >= 26:
                ax.yaxis.set_major_locator(MultipleLocator(4))
                ax.yaxis.set_minor_locator(MultipleLocator(1))

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

















class AllData:

    def __init__(self, region, variable):
        '''Collect and Assign Parameters '''
        self.variable = variable
        self.region = region
        

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


    def getAll(self):
        region = int(self.region)
        variable = self.variable

        # Set station directory if needed
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
        else:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR2

        # Set files names for all 12 months
        if variable == 'pdsi' or variable == 'scpdsi' or variable == 'pzi':
	    fileJan = os.path.join(WWDTNETCDF_DIR, variable, '%s_1_PRISM.nc' % (variable))
	    fileFeb = os.path.join(WWDTNETCDF_DIR, variable, '%s_2_PRISM.nc' % (variable))
	    fileMar = os.path.join(WWDTNETCDF_DIR, variable, '%s_3_PRISM.nc' % (variable))
	    fileApr = os.path.join(WWDTNETCDF_DIR, variable, '%s_4_PRISM.nc' % (variable))
	    fileMay = os.path.join(WWDTNETCDF_DIR, variable, '%s_5_PRISM.nc' % (variable))
	    fileJun = os.path.join(WWDTNETCDF_DIR, variable, '%s_6_PRISM.nc' % (variable))
	    fileJul = os.path.join(WWDTNETCDF_DIR, variable, '%s_7_PRISM.nc' % (variable))
	    fileAug = os.path.join(WWDTNETCDF_DIR, variable, '%s_8_PRISM.nc' % (variable))
	    fileSep = os.path.join(WWDTNETCDF_DIR, variable, '%s_9_PRISM.nc' % (variable))
	    fileOct = os.path.join(WWDTNETCDF_DIR, variable, '%s_10_PRISM.nc' % (variable))
	    fileNov = os.path.join(WWDTNETCDF_DIR, variable, '%s_11_PRISM.nc' % (variable))
	    fileDec = os.path.join(WWDTNETCDF_DIR, variable, '%s_12_PRISM.nc' % (variable))
        else:
       	    fileJan = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_1_PRISM.nc' % (variable, variable))
	    fileFeb = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_2_PRISM.nc' % (variable, variable))
	    fileMar = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_3_PRISM.nc' % (variable, variable))
	    fileApr = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_4_PRISM.nc' % (variable, variable))
	    fileMay = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_5_PRISM.nc' % (variable, variable))
	    fileJun = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_6_PRISM.nc' % (variable, variable))
	    fileJul = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_7_PRISM.nc' % (variable, variable))
	    fileAug = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_8_PRISM.nc' % (variable, variable))
	    fileSep = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_9_PRISM.nc' % (variable, variable))
	    fileOct = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_10_PRISM.nc' % (variable, variable))
	    fileNov = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_11_PRISM.nc' % (variable, variable))
	    fileDec = os.path.join(WWDTNETCDF_DIR, '%s1/%s1_12_PRISM.nc' % (variable, variable))

        # Open netcdf files for all 12 months
        dataJan = netcdf.netcdf_file(fileJan, 'r')
        dataFeb = netcdf.netcdf_file(fileFeb, 'r')
        dataMar = netcdf.netcdf_file(fileMar, 'r')
        dataApr = netcdf.netcdf_file(fileApr, 'r')
        dataMay = netcdf.netcdf_file(fileMay, 'r')
        dataJun = netcdf.netcdf_file(fileJun, 'r')
        dataJul = netcdf.netcdf_file(fileJul, 'r')
        dataAug = netcdf.netcdf_file(fileAug, 'r')
        dataSep = netcdf.netcdf_file(fileSep, 'r')
        dataOct = netcdf.netcdf_file(fileOct, 'r')
        dataNov = netcdf.netcdf_file(fileNov, 'r')
        dataDec = netcdf.netcdf_file(fileDec, 'r')

        # Get closest Lat/Lon      
        if int(self.region) in stationDict:
            WWDTNETCDF_DIR = WWDTNETCDF_DIR3
            closestRegion = self.Index(dataJan.variables['station_ID'], self.region)
        else:
            closestRegion = self.Index(dataJan.variables['polygon'], self.region)
    

        # Set Current date variable
        currentYear = datetime.datetime.now().year
        currentDay = datetime.datetime.now().day
        currentMonth = datetime.datetime.now().month    

        # Set year (currentYear-1 = prior year and only current year data is opened if month has passed)
        years = np.arange(1895, currentYear, 1)

        # Open currentYear data, else append -9999
        if currentMonth > 1 and currentDay > 2:
            dataJan = np.array(dataJan.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataJan = ((dataJan* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataJan = dataJan/24.5
        else:
            dataJan = np.array(dataJan.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataJan = ((dataJan* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataJan = dataJan/24.5
            dataJan = np.append(dataJan,-9999)

        if currentMonth > 2 and currentDay > 2:
            dataFeb = np.array(dataFeb.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataFeb = ((dataFeb* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataFeb = dataFeb/24.5
        else:
            dataFeb = np.array(dataFeb.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataFeb = ((dataFeb* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataFeb = dataFeb/24.5
            dataFeb = np.append(dataFeb,-9999)

        if currentMonth > 3 and currentDay > 2:
            dataMar = np.array(dataMar.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataMar = ((dataMar* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataMar = dataMar/24.5
        else:
            dataMar = np.array(dataMar.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataMar = ((dataMar* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataMar = dataMar/24.5
            dataMar = np.append(dataMar,-9999)

        if currentMonth > 4 and currentDay > 2:
            dataApr = np.array(dataApr.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataApr = ((dataApr* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataApr = dataApr/24.5
        else:
            dataApr = np.array(dataApr.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataApr = ((dataApr* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataApr = dataApr/24.5
            dataApr = np.append(dataApr,-9999)

        if currentMonth > 5 and currentDay > 2:
            dataMay = np.array(dataMay.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataMay = ((dataMay* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataMay = dataMay/24.5
        else:
            dataMay = np.array(dataMay.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataMay = ((dataMay* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
               dataMay = dataMay/24.5
            dataMay = np.append(dataMay,-9999)

        if currentMonth > 6 and currentDay > 2:
            dataJun = np.array(dataJun.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataJun = ((dataJun* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataJun = dataJun/24.5
        else:
            dataJun = np.array(dataJun.variables['data'][:len(years),closestRegion])
            # Data conversions
  	      # Convert C to F
        if variable == 'mdn':
            dataJun = ((dataJun* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJun = dataJun/24.5
            dataJun = np.append(dataJun,-9999)

        if currentMonth > 7 and currentDay > 2:
            dataJul = np.array(dataJul.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataJul = ((dataJul* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataJul = dataJul/24.5
        else:
            dataJul = np.array(dataJul.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataJul = ((dataJul* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataJul = dataJul/24.5
            dataJul = np.append(dataJul,-9999)

        if currentMonth > 8 and currentDay > 2:
            dataAug = np.array(dataAug.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataAug = ((dataAug* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataAug = dataAug/24.5
        else:
            dataAug = np.array(dataAug.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataAug = ((dataAug* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataAug = dataAug/24.5
            dataAug = np.append(dataAug,-9999)

        if currentMonth > 9 and currentDay > 2:
            dataSep = np.array(dataSep.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataSep = ((dataSep* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataSep = dataSep/24.5
        else:
            dataSep = np.array(dataSep.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataSep = ((dataSep* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataSep = dataSep/24.5
            dataSep = np.append(dataSep,-9999)

        if currentMonth > 10 and currentDay > 2:
            dataOct = np.array(dataOct.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataOct = ((dataOct* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataOct = dataOct/24.5
        else:
            dataOct = np.array(dataOct.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataOct = ((dataOct* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataOct = dataOct/24.5
            dataOct = np.append(dataOct,-9999)

        if currentMonth > 11 and currentDay > 2:
            dataNov = np.array(dataNov.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataNov = ((dataNov* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataNov = dataNov/24.5
        else:
            dataNov = np.array(dataNov.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataNov = ((dataNov* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataNov = dataNov/24.5
            dataNov = np.append(dataNov,-9999)

        if currentMonth > 12 and currentDay > 2:
            dataDec = np.array(dataDec.variables['data'][:len(years)+1,closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataDec = ((dataDec* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataDec = dataDec/24.5
        else:
            dataDec = np.array(dataDec.variables['data'][:len(years),closestRegion])
            # Data conversions
            # Convert C to F
            if variable == 'mdn':
                dataDec = ((dataDec* 9.0/5) + 32)
            # Devide Precip by 100
            if variable == 'pon':
                dataDec = dataDec/24.5
            dataDec = np.append(dataDec,-9999)





        #Set year to current year
        years = np.arange(1895, currentYear+1, 1)


        # Print out index of years and all months - should all be the same
        #print len(years),len(dataJan),len(dataFeb),len(dataMar),len(dataApr),len(dataMay),len(dataJun),len(dataJul),len(dataAug),len(dataSep),len(dataOct),len(dataNov),len(dataDec)

        # Make a list of Data to return to the screen
        dataList = []
        v = 0
        while v < len(dataJan):
            dataString = []
            dataString.append(years[v])
            dataString.append(dataJan[v])
            dataString.append(dataFeb[v])
            dataString.append(dataMar[v])
            dataString.append(dataApr[v])
            dataString.append(dataMay[v])
            dataString.append(dataJun[v])
            dataString.append(dataJul[v])
            dataString.append(dataAug[v])
            dataString.append(dataSep[v])
            dataString.append(dataOct[v])
            dataString.append(dataNov[v])
            dataString.append(dataDec[v])
            dataList.append(dataString)
            v+=1

        return dataList

