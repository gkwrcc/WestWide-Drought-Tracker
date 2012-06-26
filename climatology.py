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

from settings import WWDTNETCDF_DIR, ELEVATION_DATA


class Climatology:

    def __init__(self, lat, lon, variable, monthSpan):
        '''Collect and Assign Parameters '''
        self.lat = lat
        self.lon = lon
        self.variable = variable
        self.monthSpan = monthSpan



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

        # Select Pixle data
        closestLat = self.Index(dataJan.variables['latitude'], self.lat)
        closestLon = self.Index(dataJan.variables['longitude'], self.lon)

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
            dataJan = np.array(dataJan.variables['data'][:currentYear,closestLat,closestLon]) 

        else:
            dataJan = np.array(dataJan.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 2 and currentDay > 2:
            dataFeb = np.array(dataFeb.variables['data'][:currentYear,closestLat,closestLon]) 
        else:
            dataFeb = np.array(dataFeb.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 3 and currentDay > 2:
            dataMar = np.array(dataMar.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataMar = np.array(dataMar.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 4 and currentDay > 2:
            dataApr = np.array(dataApr.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataApr = np.array(dataApr.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 5 and currentDay > 2:
            dataMay = np.array(dataMay.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataMay = np.array(dataMay.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 6 and currentDay > 2:
            dataJun = np.array(dataJun.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataJun = np.array(dataJun.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 7 and currentDay > 2:
            dataJul = np.array(dataJul.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataJul = np.array(dataJul.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 8 and currentDay > 2:
            dataAug = np.array(dataAug.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataAug = np.array(dataAug.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 9 and currentDay > 2:
            dataSep = np.array(dataSep.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataSep = np.array(dataSep.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 10 and currentDay > 2:
            dataOct = np.array(dataOct.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataOct = np.array(dataOct.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 11 and currentDay > 2:
            dataNov = np.array(dataNov.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataNov = np.array(dataNov.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 12 and currentDay > 2:
            dataDec = np.array(dataDec.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataDec = np.array(dataDec.variables['data'][:(currentYear-1),closestLat,closestLon])

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
            dataJan = dataJan/100.
            dataFeb = dataFeb/100.
            dataMar = dataMar/100.
            dataApr = dataApr/100.
            dataMay = dataMay/100.
            dataJun = dataJun/100.
            dataJul = dataJul/100.
            dataAug = dataAug/100.
            dataSep = dataSep/100.
            dataOct = dataOct/100.
            dataNov = dataNov/100.
            dataDec = dataDec/100.
 

        
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
        oneMonth = today.month
        oneYear = today.year
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



            closestLat = self.Index(dataFile.variables['latitude'], self.lat)
            closestLon = self.Index(dataFile.variables['longitude'], self.lon)


            data = np.array(dataFile.variables['data'][startDate.year-1895:startDate.year-1894 ,closestLat,closestLon])
            for value in data:
                # Convert C to F
                if self.variable == 'mdn':
                    value = ((value* 9.0/5) + 32)
                # Convert Precip to inches
                if self.variable == 'pon':
                    value = value/100.
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
        startDate = (datetime.date.today() - datetime.timedelta(xMonth*365/12))
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
        ax.fill_between(x, percLine, perc2Line, facecolor=perc_colors[0], edgecolor='w')
        ax.fill_between(x, perc2Line, perc3Line, facecolor=perc_colors[1], edgecolor='w')
        ax.fill_between(x, perc3Line, perc4Line, facecolor=perc_colors[2], edgecolor='w')
        ax.fill_between(x, perc4Line, perc5Line, facecolor=perc_colors[2], edgecolor='w')
        ax.fill_between(x, perc5Line, perc6Line, facecolor=perc_colors[1], edgecolor='w')
        ax.fill_between(x, perc6Line, perc7Line, facecolor=perc_colors[0], edgecolor='w')

        # Set x-axis labels
        ax.set_xticks(np.arange(span))
        ax.set_xticklabels(xLabelList)

        # Set title
        #ax.set_title('%s Last %s-Months'%(self.variable,span))

        # Used to set month name in plots based on month index
        monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        # Setup plots based on Variable    
        if self.variable == 'pdsi':
            ax.set_title(u'Palmer Drought Severity Index, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))
            ax.set_ylabel("PDSI")

        if self.variable == 'scpdsi':
            ax.set_title(u' Self Calibrated Palmer Drought Severity Index, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))
            ax.set_ylabel("SCPDSI")
 
        if self.variable == 'pzi':
            ax.set_title(u' Palmer Z-Index, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))
            ax.set_ylabel("PZI")   
            
        if self.variable == 'mdn':
            ax.set_title(u'Mean Temperature, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))  
            ax.set_ylabel(u"Temperature \u00b0F")
            
        if self.variable == 'spi':
            ax.set_title(u'Standardized Precipitation Index, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))
            ax.set_ylabel(u"SPI")
            
        if self.variable == 'pon':
            ax.set_title(u'Precipitation, %s-Months Prior to %s \n %4.2f\u00b0N, %4.2f\u00b0W' % (span, monthList[oneMonth-1], self.lat, abs(self.lon)))
            ax.set_ylabel("Inches")


        # Set axes
        #ax.set_ylabel('%s'%self.variable) 
        ax.set_xlabel('From %s-%s - %s-%s'%(startDate.month, startDate.year, today.month, today.year))   
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

        canvas = FigureCanvas(plt.figure(1)) 
        return canvas

    def getText(self):
        '''Open and plot the data '''
    
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

        # Select Pixle data
        closestLat = self.Index(dataJan.variables['latitude'], self.lat)
        closestLon = self.Index(dataJan.variables['longitude'], self.lon)

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
            dataJan = np.array(dataJan.variables['data'][:currentYear,closestLat,closestLon]) 

        else:
            dataJan = np.array(dataJan.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 2 and currentDay > 2:
            dataFeb = np.array(dataFeb.variables['data'][:currentYear,closestLat,closestLon]) 
        else:
            dataFeb = np.array(dataFeb.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 3 and currentDay > 2:
            dataMar = np.array(dataMar.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataMar = np.array(dataMar.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 4 and currentDay > 2:
            dataApr = np.array(dataApr.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataApr = np.array(dataApr.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 5 and currentDay > 2:
            dataMay = np.array(dataMay.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataMay = np.array(dataMay.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 6 and currentDay > 2:
            dataJun = np.array(dataJun.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataJun = np.array(dataJun.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 7 and currentDay > 2:
            dataJul = np.array(dataJul.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataJul = np.array(dataJul.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 8 and currentDay > 2:
            dataAug = np.array(dataAug.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataAug = np.array(dataAug.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 9 and currentDay > 2:
            dataSep = np.array(dataSep.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataSep = np.array(dataSep.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 10 and currentDay > 2:
            dataOct = np.array(dataOct.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataOct = np.array(dataOct.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 11 and currentDay > 2:
            dataNov = np.array(dataNov.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataNov = np.array(dataNov.variables['data'][:(currentYear-1),closestLat,closestLon])
        if currentMonth > 12 and currentDay > 2:
            dataDec = np.array(dataDec.variables['data'][:currentYear,closestLat,closestLon])
        else:
            dataDec = np.array(dataDec.variables['data'][:(currentYear-1),closestLat,closestLon])

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
            dataJan = dataJan/100.
            dataFeb = dataFeb/100.
            dataMar = dataMar/100.
            dataApr = dataApr/100.
            dataMay = dataMay/100.
            dataJun = dataJun/100.
            dataJul = dataJul/100.
            dataAug = dataAug/100.
            dataSep = dataSep/100.
            dataOct = dataOct/100.
            dataNov = dataNov/100.
            dataDec = dataDec/100.
 

        
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
        oneMonth = today.month
        oneYear = today.year
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



            closestLat = self.Index(dataFile.variables['latitude'], self.lat)
            closestLon = self.Index(dataFile.variables['longitude'], self.lon)


            data = np.array(dataFile.variables['data'][startDate.year-1895:startDate.year-1894 ,closestLat,closestLon])
            for value in data:
                # Convert C to F
                if self.variable == 'mdn':
                    value = ((value* 9.0/5) + 32)
                # Convert Precip to inches
                if self.variable == 'pon':
                    value = value/100.
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
        startDate = (datetime.date.today() - datetime.timedelta(xMonth*365/12))
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


        # Start a list to send to Django template
        newList = ['Month,Year,Value,Mean,5th,95th,10th,90th,25th,75th']

        # Loop through data and send it to screen in a csv format
        zeroValue =0
        while zeroValue < len(monthDates):  
            newList.append(monthDates[zeroValue]+','+yearDates[zeroValue]+','+'%4.2f'%lastMonthY[zeroValue]+','+'%4.2f'%meanLine[zeroValue]+','+'%4.2f'%percLine[zeroValue]+','+'%4.2f'%perc7Line[zeroValue]+','+'%4.2f'%perc2Line[zeroValue]+','+'%4.2f'%perc6Line[zeroValue]+','+'%4.2f'%perc3Line[zeroValue]+','+'%4.2f'%perc4Line[zeroValue])
            zeroValue+=1    
        return newList
