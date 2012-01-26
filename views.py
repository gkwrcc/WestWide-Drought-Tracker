import os
import random
import datetime
import matplotlib.pyplot as plt

from django.template import RequestContext
from django.shortcuts import render_to_response
from django.http import HttpResponse
from Plot import Plot as Plot

from django import template


def testing(request):
    errors = []
    return render_to_response('main.html',
        {'errors': errors,})

def bargraph_panel(request):
    try:
        data = [1,2,3,4,5]
        variableList = ["", "mdn","pon","spi","pdsi","pzi", "scpdsi"]
        if 'run_avg' in request.GET:
            run_avg = request.GET['run_avg']
            if not run_avg:
                runAvg = 0
            else:
                runAvg = int(run_avg)

        if 'lat' in request.GET:
            lat = request.GET['lat']
            if not lat:
                lat = 40
            else:
                lat = float(lat)

        if 'lon' in request.GET:
            lon = request.GET['lon']
            if not lon:
                lon = -100
            else:
                lon = float(lon)

        if 'start_year' in request.GET:
            startYear = request.GET['start_year']
            if startYear < 1895:
                startYear = 1895
            else:
                startYear = int(startYear)

        if 'end_year' in request.GET:
            endYear = request.GET['end_year']
            if endYear > datetime.datetime.now().year:
                endYear = (datetime.datetime.now().year -1)
            else:
                endYear = int(endYear)

        #if 'variable' in request.GET:
        #    variable = int(request.GET['variable'])
        #    variable = variableList[variable]

      
        variable = int(request.GET['variable'])
        variable = variableList[variable]
        month = int(request.GET['month'])
        span = int(request.GET['span'])
   
        # Print PNG to page
        try:
            canvas = Plot(lat=lat, lon=lon, startYear=startYear, endYear=endYear, variable=variable, month=month, span=span, runavg=runAvg, data=None).getData()
            response=HttpResponse(content_type='image/png')
            canvas.print_png(response)
            plt.close()
            return response
        except:
            print "invalid plot"
    except:
        print "invalid parameters"

def bargraph_text(request):
    variableList = ["", "mdn","pon","spi","pdsi","pzi", "scpdsi"]
    if 'run_avg' in request.GET:
        run_avg = request.GET['run_avg']
        if not run_avg:
            runAvg = 0
        else:
            runAvg = int(run_avg)
  
    lat = float(request.GET['lat'])
    lon = float(request.GET['lon'])
    endYear = int(request.GET['end_year'])
    startYear = int(request.GET['start_year'])

    variable = int(request.GET['variable'])
    variable = variableList[variable]
    month = int(request.GET['month'])
    span = int(request.GET['span'])
    text = Plot(lat=lat, lon=lon, startYear=startYear, endYear=endYear, variable=variable, month=month, span=span, runavg=runAvg, data=None).getText()
    data = []
    for value in text:
        data.append(value)
    return render_to_response('print.html', {'data': data})#, {'year': data}, {'mean': data})
    

