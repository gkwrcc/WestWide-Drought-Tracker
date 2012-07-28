import os
import numpy as np
from datetime import datetime

from scipy.io import netcdf as netcdf
from settings import WWDTNETCDF_DIR

def Index(array, userInput):
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

def getAll(lat, lon, variable):
    
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
    closestLat = Index(dataJan.variables['latitude'], lat)
    closestLon = Index(dataJan.variables['longitude'], lon)

    # Set Current date variable
    currentYear = datetime.now().year
    currentDay = datetime.now().day
    currentMonth = datetime.now().month    

    # Set year (currentYear-1 = prior year and only current year data is opened if month has passed)
    years = np.arange(1895, currentYear, 1)

    # Open currentYear data, else append -9999
    if currentMonth > 1 and currentDay > 2:
        dataJan = np.array(dataJan.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJan = ((dataJan* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJan = dataJan/25.4
    else:
        dataJan = np.array(dataJan.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJan = ((dataJan* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJan = dataJan/25.4
        dataJan = np.append(dataJan,-9999)

    if currentMonth > 2 and currentDay > 2:
        dataFeb = np.array(dataFeb.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataFeb = ((dataFeb* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataFeb = dataFeb/25.4
    else:
        dataFeb = np.array(dataFeb.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataFeb = ((dataFeb* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataFeb = dataFeb/25.4
        dataFeb = np.append(dataFeb,-9999)

    if currentMonth > 3 and currentDay > 2:
        dataMar = np.array(dataMar.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataMar = ((dataMar* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataMar = dataMar/25.4
    else:
        dataMar = np.array(dataMar.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataMar = ((dataMar* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataMar = dataMar/25.4
        dataMar = np.append(dataMar,-9999)

    if currentMonth > 4 and currentDay > 2:
        dataApr = np.array(dataApr.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataApr = ((dataApr* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataApr = dataApr/25.4
    else:
        dataApr = np.array(dataApr.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataApr = ((dataApr* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataApr = dataApr/25.4
        dataApr = np.append(dataApr,-9999)

    if currentMonth > 5 and currentDay > 2:
        dataMay = np.array(dataMay.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataMay = ((dataMay* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataMay = dataMay/25.4
    else:
        dataMay = np.array(dataMay.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataMay = ((dataMay* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataMay = dataMay/25.4
        dataMay = np.append(dataMay,-9999)

    if currentMonth > 6 and currentDay > 2:
        dataJun = np.array(dataJun.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJun = ((dataJun* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJun = dataJun/25.4
    else:
        dataJun = np.array(dataJun.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJun = ((dataJun* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJun = dataJun/25.4
        dataJun = np.append(dataJun,-9999)

    if currentMonth > 7 and currentDay > 2:
        dataJul = np.array(dataJul.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJul = ((dataJul* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJul = dataJul/25.4
    else:
        dataJul = np.array(dataJul.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataJul = ((dataJul* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataJul = dataJul/25.4
        dataJul = np.append(dataJul,-9999)

    if currentMonth > 8 and currentDay > 2:
        dataAug = np.array(dataAug.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataAug = ((dataAug* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataAug = dataAug/25.4
    else:
        dataAug = np.array(dataAug.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataAug = ((dataAug* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataAug = dataAug/25.4
        dataAug = np.append(dataAug,-9999)

    if currentMonth > 9 and currentDay > 2:
        dataSep = np.array(dataSep.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataSep = ((dataSep* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataSep = dataSep/25.4
    else:
        dataSep = np.array(dataSep.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataSep = ((dataSep* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataSep = dataSep/25.4
        dataSep = np.append(dataSep,-9999)

    if currentMonth > 10 and currentDay > 2:
        dataOct = np.array(dataOct.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataOct = ((dataOct* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataOct = dataOct/25.4
    else:
        dataOct = np.array(dataOct.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataOct = ((dataOct* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataOct = dataOct/25.4
        dataOct = np.append(dataOct,-9999)

    if currentMonth > 11 and currentDay > 2:
        dataNov = np.array(dataNov.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataNov = ((dataNov* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataNov = dataNov/25.4
    else:
        dataNov = np.array(dataNov.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataNov = ((dataNov* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataNov = dataNov/25.4
        dataNov = np.append(dataNov,-9999)

    if currentMonth > 12 and currentDay > 2:
        dataDec = np.array(dataDec.variables['data'][:len(years)+1,closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataDec = ((dataDec* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataDec = dataDec/25.4
    else:
        dataDec = np.array(dataDec.variables['data'][:len(years),closestLat,closestLon])
        # Data conversions
        # Convert C to F
        if variable == 'mdn':
            dataDec = ((dataDec* 9.0/5) + 32)
        # Devide Precip by 100
        if variable == 'pon':
            dataDec = dataDec/25.4
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

    #print dataList
    return dataList

#getAll(lat=40, lon=-100, variable='pdsi')
