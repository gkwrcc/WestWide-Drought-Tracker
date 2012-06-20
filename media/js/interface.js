Ext.onReady(function () {

    if ( /wrcc.dri.edu/.test(window.location) ) {
    	    URL = window.location.href; // include trailing slash
    } else {
	    URL = "http://127.0.0.1:8000";
    }

    var spanStore = [
        ['1', "1-Month"],
        ['2', "2-Month"],
        ['3', "3-Month"],
        ['4', "4-Month"],
        ['5', "5-Month"],
        ['6', "6-Month"],
        ['7', "7-Month"],
        ['8', "8-Month"],
        ['9', "9-Month"],
        ['10', "10-Month"],
        ['11', "11-Month"],
        ['12', "12-Month"], ]

    var spiSpanStore = [
        ['1', "1-Month"],
        ['2', "2-Month"],
        ['3', "3-Month"],
        ['4', "4-Month"],
        ['5', "5-Month"],
        ['6', "6-Month"],
        ['7', "7-Month"],
        ['8', "8-Month"],
        ['9', "9-Month"],
        ['10', "10-Month"],
        ['11', "11-Month"],
        ['12', "12-Month"],
        ['15', "15-Month"],
        ['18', "18-Month"],
        ['24', "24-Month"],
        ['30', "30-Month"],
        ['36', "36-Month"],
        ['48', "48-Month"],
        ['60', "60-Month"],
        ['72', "72-Month"], ]



    formInput = Ext.extend(Ext.form.Field, {});

    variableSelect = Ext.extend(Ext.form.ComboBox, {
        forceSelection: true,
        triggerAction: 'all',
        listeners: {
            change: function () {
                var myCombo = Ext.getCmp('span_select');

                if (Ext.getCmp('variable_select').getValue() == 3) {
                    // If SPI is chosen more month spans are populated
                    myCombo.store.loadData(spiSpanStore);
                } else {
                    // Reload original 12 month span
                    myCombo.store.loadData(spanStore);
                }
            }
        },
        store: [
            ['1', "Temperature"],
            ['2', "Precipitation"],
            ['3', "SPI"],
            ['4', "PDSI"],
            ['5', "Palmer Z-Index"],
            ['6', "Self Calibrated PDSI"], ]
    });

    monthSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all',
        store: [
            ['1', "January"],
            ['2', "February"],
            ['3', "March"],
            ['4', "April"],
            ['5', "May"],
            ['6', "June"],
            ['7', "July"],
            ['8', "August"],
            ['9', "September"],
            ['10', "October"],
            ['11', "November"],
            ['12', "December"], ]
    });

    spanSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all',
        store: spanStore,
    });

    yearSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all',
        store: [
            [1895, "1895"],
            [1896, "1896"],
            [1897, "1897"],
            [1898, "1898"],
            [1899, "1899"],
            [1900, "1900"],
            [1901, "1901"],
            [1902, "1902"],
            [1903, "1903"],
            [1904, "1904"],
            [1905, "1905"],
            [1906, "1906"],
            [1907, "1907"],
            [1908, "1908"],
            [1909, "1909"],
            [1910, "1910"],
            [1911, "1911"],
            [1912, "1912"],
            [1913, "1913"],
            [1914, "1914"],
            [1915, "1915"],
            [1916, "1916"],
            [1917, "1917"],
            [1918, "1918"],
            [1919, "1919"],
            [1920, "1920"],
            [1921, "1921"],
            [1922, "1922"],
            [1923, "1923"],
            [1924, "1924"],
            [1925, "1925"],
            [1926, "1926"],
            [1927, "1927"],
            [1928, "1928"],
            [1929, "1929"],
            [1930, "1930"],
            [1931, "1931"],
            [1932, "1932"],
            [1933, "1933"],
            [1934, "1934"],
            [1935, "1935"],
            [1936, "1936"],
            [1937, "1937"],
            [1938, "1938"],
            [1939, "1939"],
            [1940, "1940"],
            [1941, "1941"],
            [1942, "1942"],
            [1943, "1943"],
            [1944, "1944"],
            [1945, "1945"],
            [1946, "1946"],
            [1947, "1947"],
            [1948, "1948"],
            [1949, "1949"],
            [1950, "1950"],
            [1951, "1951"],
            [1952, "1952"],
            [1953, "1953"],
            [1954, "1954"],
            [1955, "1955"],
            [1956, "1956"],
            [1957, "1957"],
            [1958, "1958"],
            [1959, "1959"],
            [1960, "1960"],
            [1961, "1961"],
            [1962, "1962"],
            [1963, "1963"],
            [1964, "1964"],
            [1965, "1965"],
            [1966, "1966"],
            [1967, "1967"],
            [1968, "1968"],
            [1969, "1969"],
            [1970, "1970"],
            [1971, "1971"],
            [1972, "1972"],
            [1973, "1973"],
            [1974, "1974"],
            [1975, "1975"],
            [1976, "1976"],
            [1977, "1977"],
            [1978, "1978"],
            [1979, "1979"],
            [1980, "1980"],
            [1981, "1981"],
            [1982, "1982"],
            [1983, "1983"],
            [1984, "1984"],
            [1985, "1985"],
            [1986, "1986"],
            [1987, "1987"],
            [1988, "1988"],
            [1989, "1989"],
            [1990, "1990"],
            [1991, "1991"],
            [1992, "1992"],
            [1993, "1993"],
            [1994, "1994"],
            [1995, "1995"],
            [1996, "1996"],
            [1997, "1997"],
            [1998, "1998"],
            [1999, "1999"],
            [2000, "2000"],
            [2001, "2001"],
            [2002, "2002"],
            [2003, "2003"],
            [2004, "2004"],
            [2005, "2005"],
            [2006, "2006"],
            [2007, "2007"],
            [2008, "2008"],
            [2009, "2009"],
            [2010, "2010"],
            [2011, "2011"],
            [2012, "2012"]
        ]
    });

    // Process when Submit button is pressed
    dataSubmit = Ext.extend(Ext.Button, {
        handler: function () {

            // Grab current month and year and day
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth();
            var currentDate = new Date().getDate();

            // Latitude Form Checker
            if (Ext.getCmp('map_lat').getValue() < 24.0625 || Ext.getCmp('map_lat').getValue() > 49.89659882) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lat').getValue() + ' out of bounds.');
                LAT = NULL;
            } else {
                LAT = Ext.getCmp('map_lat').getValue()
            }

            // Longitude Form Checker
            if (Ext.getCmp('map_lon').getValue() < -125.02083588 || Ext.getCmp('map_lon').getValue() > -66.52440643) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lon').getValue() + ' out of bounds.');
                LON = NULL;
            } else {
                LON = Ext.getCmp('map_lon').getValue()
            }

            // Data Date Checker - Month and EndYear
            //if (currentDate < 10 && Ext.getCmp('month_select').getValue() >= (currentMonth+1) && Ext.getCmp('end_year').getValue() == currentYear) {

            // Use when data needs
            if (Ext.getCmp('month_select').getValue() >= currentMonth + 1 && Ext.getCmp('end_year').getValue() == currentYear) {
                if (currentDate <= 10) {
                    Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);

                    MONTH = NULL;
                    
                    ENDYEAR = NULL;
                }
                Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);
                MONTH = NULL;
                ENDYEAR = NULL;

            } else {
                MONTH = Ext.getCmp('month_select').getValue()
                ENDYEAR = Ext.getCmp('end_year').getValue()
            }

            // Years need to be different and end year needs to be greater than start year
             if (Ext.getCmp('start_year').getValue() >= Ext.getCmp('end_year').getValue()){
                Ext.MessageBox.alert('Date Error', 'Ending year needs to be greater the starting year.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;
                

            } else {
              //alert('worked');
            }

            // Year span should be at least 5 years
             if (Ext.getCmp('end_year').getValue() - Ext.getCmp('start_year').getValue() < 5){
                Ext.MessageBox.alert('Date Error', 'Select a time span greater than 5 years.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;
                

            } else {
              //alert('worked');
            }


            // Variable Checker
            if (Ext.getCmp('variable_select').getValue() == 1 || Ext.getCmp('variable_select').getValue() == 2 || Ext.getCmp('variable_select').getValue() == 3 || Ext.getCmp('variable_select').getValue() == 4 || Ext.getCmp('variable_select').getValue() == 5 || Ext.getCmp('variable_select').getValue() == 6) {
                VARIABLE = Ext.getCmp('variable_select').getValue()
            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('span_select').getValue() >= 13 && Ext.getCmp('variable_select').getValue() != 3) {
                Ext.MessageBox.alert('Span Error', 'Month spans greater than 12 are only for SPI datasets, please chose a month span of 12 or less months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('span_select').getValue()

            }
            if (Ext.getCmp('span_select').getValue() > 72) {
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('span_select').getValue()
            }

            // Start Year Checker
            if (Ext.getCmp('start_year').getValue() < 1895 || Ext.getCmp('start_year').getValue() > currentYear) {
                STARTYEAR = NULL;
            } else {
                STARTYEAR = Ext.getCmp('start_year').getValue()
            }

            // Force running average to be an integer in order to work
            RUNAVG = Ext.getCmp('run_avg').getValue();
            if (RUNAVG < 2 || RUNAVG / RUNAVG != 1 || RUNAVG > (ENDYEAR - STARTYEAR)) {
                RUNAVG = 0;
            } else {
                RUNAVG = RUNAVG;
            }

            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: parseFloat(LAT).toFixed(2) + "N, " + (Math.abs(LON)).toFixed(2) + "W",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/bargraph/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="500px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/text/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="2500px" width="99%" scrolling="no" frameborder="0" "></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });

    // Process when Submit button is pressed
    dataSubmit2 = Ext.extend(Ext.Button, {
        handler: function () {

            // Grab current month and year and day
            //var currentYear  = new Date().getFullYear();  
            //var currentMonth = new Date().getMonth(); 
            //var currentDate = new Date().getDate();

            // Latitude Form Checker
            if (Ext.getCmp('map_lat2').getValue() < 24.0625 || Ext.getCmp('map_lat2').getValue() > 49.89659882) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lat').getValue() + ' out of bounds.');
                LAT = NULL;
            } else {
                LAT = Ext.getCmp('map_lat2').getValue()

            }

            // Longitude Form Checker
            if (Ext.getCmp('map_lon2').getValue() < -125.02083588 || Ext.getCmp('map_lon2').getValue() > -66.52440643) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lon').getValue() + ' out of bounds.');
                LON = NULL;
            } else {
                LON = Ext.getCmp('map_lon2').getValue()
            }

            // Data Date Checker - Month and EndYear
            //if (currentDate < 10 && Ext.getCmp('month_select').getValue() >= (currentMonth+1) && Ext.getCmp('end_year').getValue() == currentYear) {



            // Variable Checker
            if (Ext.getCmp('variable_select2').getValue() == 1 || Ext.getCmp('variable_select2').getValue() == 2 || Ext.getCmp('variable_select2').getValue() == 3 || Ext.getCmp('variable_select2').getValue() == 4 || Ext.getCmp('variable_select2').getValue() == 5 || Ext.getCmp('variable_select2').getValue() == 6) {
                VARIABLE = Ext.getCmp('variable_select2').getValue()
            } else {
                VARIABLE = NULL;
            }


            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: parseFloat(LAT).toFixed(2) + "N, " + (Math.abs(LON)).toFixed(2) + "W",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="'+ URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><iframe src="'+ URL + '/all/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '" height="2500px" width="99%" scrolling="no" frameborder="0"></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });


    // Process when Submit button is pressed
    dataSubmit3 = Ext.extend(Ext.Button, {
        handler: function () {

            // Grab current month and year and day
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth();
            var currentDate = new Date().getDate();

            // Latitude Form Checker
            if (Ext.getCmp('map_lat3').getValue() < 24.0625 || Ext.getCmp('map_lat3').getValue() > 49.89659882) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lat3').getValue() + ' out of bounds.');
                LAT = NULL;
            } else {
                LAT = Ext.getCmp('map_lat3').getValue()

            }

            // Longitude Form Checker
            if (Ext.getCmp('map_lon3').getValue() < -125.02083588 || Ext.getCmp('map_lon3').getValue() > -66.52440643) {
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the lower contiguous 48<br>Longitude: ' + Ext.getCmp('map_lon3').getValue() + ' out of bounds.');
                LON = NULL;
            } else {
                LON = Ext.getCmp('map_lon3').getValue()

            }


            // Variable Checker
            if (Ext.getCmp('variable_select3').getValue() == 1 || Ext.getCmp('variable_select3').getValue() == 2 || Ext.getCmp('variable_select3').getValue() == 3 || Ext.getCmp('variable_select3').getValue() == 4 || Ext.getCmp('variable_select3').getValue() == 5 || Ext.getCmp('variable_select3').getValue() == 6) {
                VARIABLE = Ext.getCmp('variable_select3').getValue()

            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('span_select3').getValue() > 72 || Ext.getCmp('variable_select3').getValue() < 1) {
                Ext.MessageBox.alert('Span Error', 'Select a prior month span from 1 to 72 months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('span_select3').getValue()
               

            }

            //alert('works');
            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: parseFloat(LAT).toFixed(2) + "N, " + (Math.abs(LON)).toFixed(2) + "W",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                 html: '<iframe src="'+ URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><iframe src="'+ URL + '/climatology/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&span=' + SPAN + '" height="500px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="'+ URL + '/lastmonths/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&span=' + SPAN + '" height="2500px" width="99%" scrolling="no" frameborder="0" "></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });




    // Access feeback page in tab when button is pressed
    feedbackSubmit = Ext.extend(Ext.Button, {
        handler: function () {

            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: 'Feedback',
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="http://form.jotform.com/form/11065715567" height="500px" width="100%" scrolling="no" frameborder="0"></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });

    // Variable help drop down menu
    var item0 = {
        xtype: 'fieldset',
        title: 'Variable Information',
        autoHeight: true,
        layout: 'form',
        collapsed: true,
        // initially collapse the group
        collapsible: true,
        cls: 'empty',
        items: [{
            contentEl: 'variables'
        }]
    };

    // Setup forms and comboboxes for point selection
    var item1 = new Ext.FormPanel({
        title: "Time Series",
        labelWidth: 55,
        items: [item0, new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'map_lat',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'map_lon',
            width: 135
        }), new variableSelect({
            name: 'variable',
            fieldLabel: 'Variable',
            value: '1',
            id: 'variable_select',
            width: 135
        }), new yearSelect({
            name: 'startyear',
            fieldLabel: 'Start Year',
            value: 1895,
            id: 'start_year',
            width: 135
        }), new yearSelect({
            name: 'endyear',
            fieldLabel: 'End Year',
            value: 2011,
            id: 'end_year',
            width: 135
        }), new monthSelect({
            name: 'month',
            fieldLabel: 'Month',
            value: '1',
            id: 'month_select',
            width: 135
        }), new spanSelect({
            name: 'span',
            fieldLabel: 'Span',
            value: '1',
            id: 'span_select',
            width: 135
        }), new formInput({
            name: 'runavg',
            fieldLabel: 'Run Avg',
            id: 'run_avg',
            width: 135
        }), new dataSubmit({ // must be last
            text: 'Submit!',
        })]
    });



    // Setup forms and comboboxes for all point data
    var item2 = new Ext.FormPanel({
        title: "All Data",
        labelWidth: 55,
        //cls: 'empty',
        items: [
        new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'map_lat2',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'map_lon2',
            width: 135
        }), new variableSelect({
            name: 'variable2',
            fieldLabel: 'Variable',
            value: '1',
            id: 'variable_select2',
            width: 135
        }), new dataSubmit2({ // must be last
            text: 'Submit!',
        })]
    });


    // Setup forms and comboboxes for point selection
    var item3 = new Ext.FormPanel({
        title: "Climatology",
        labelWidth: 55,
        items: [new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'map_lat3',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'map_lon3',
            width: 135
        }), new variableSelect({
            name: 'variable',
            fieldLabel: 'Variable',
            value: '1',
            id: 'variable_select3',
            width: 135
        }), new spanSelect({
            name: 'span',
            store: spiSpanStore,
            fieldLabel: 'Prior Months',
            value: '1',
            id: 'span_select3',
            width: 135
        }), new dataSubmit3({ // must be last
            text: 'Submit!',
        })]
    });


    // Usage Panel
    var item11 = new Ext.Panel({
        title: 'How To Use',
        contentEl: 'use',
        cls: 'empty'
    });

    // Contact Panel
    var item12 = new Ext.Panel({
        title: 'Contact',
        cls: 'empty',
        items: [new feedbackSubmit({ // must be last
            text: 'Feedback',
            align: 'center',

        })],
        contentEl: 'contact',
    });

    // About Panel
    var item13 = new Ext.Panel({
        title: 'About',
        contentEl: 'about',
        cls: 'empty'
    });

    // Contact Panel
    var item14 = new Ext.Panel({
        title: 'Disclaimer',
        cls: 'empty',
        contentEl: 'disclaimer'
    });


    // template for additional option
    var item15 = new Ext.Panel({
        title: 'Additinoal Option',
        html: 'Check back for more features',
        cls: 'empty'
    });


    var accordion = new Ext.Panel({
        region: 'west',
        id: 'id_product_tabs',
        margins: '45 0 5 5',
        split: false,
        width: 200,
        layout: 'accordion',
        items: [item1, item2, item3]
    });

    var accordion1 = new Ext.Panel({
        region: 'east',
        margins: '45 5 5 0',
        split: true,
        width: 200,
        layout: 'accordion',
        items: [item11, item12, item13, item14]
    });


    // Google Map Panel - Ext.ux.GMapPanel3.js modified
    var Gmap = new Ext.Panel({
        title: 'Map',

        id: 'gmap',
        border: true,
        defaults: {
            xtype: 'gmappanel',
            autoWidth: true,
            height: 1000,
            scaleControl: true,
            zoomLevel: 4,
            gmapType: 'map',
            setCenter: {
                lat: 27,
                lng: -102
            }
        },
        items: [{}]
    });


    var panel = new Ext.TabPanel({
        region: 'center',
        margins: '45 0 5 0',
        id: 'tabPanel',
        activeTab: 0,
        items: [Gmap]
    });

    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        accordion, accordion1,
        {
            bodyStyle: 'background:#f1f1f1',
        },
        panel, ]
    });




});
