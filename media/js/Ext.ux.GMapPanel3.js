Ext.namespace('Ext.ux.panel');







Ext.ux.GMapPanel = Ext.extend(Ext.Panel, {
    /**
     * @cfg {Boolean} border
     * Defaults to <tt>false</tt>.  See {@link Ext.Panel}.<code>{@link Ext.Panel#border border}</code>.
     */
    border: false,

    /**
     * @cfg {Array} respErrors
     * An array of msg/code pairs.
     */
    respErrors: [{
        code: 'UNKNOWN_ERROR',
        msg: 'A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known.'
    }, {
        code: 'ERROR',
        msg: 'There was a problem contacting the Google servers.'
    }, {
        code: 'ZERO_RESULTS',
        msg: 'The request did not encounter any errors but returns zero results.'
    }, {
        code: 'INVALID_REQUEST',
        msg: 'This request was invalid.'
    }, {
        code: 'REQUEST_DENIED',
        msg: 'The webpage is not allowed to use the geocoder for some reason.'
    }, {
        code: 'OVER_QUERY_LIMIT',
        msg: 'The webpage has gone over the requests limit in too short a period of time.'
    }],
    /**
     * @cfg {Array} locationTypes
     * An array of msg/code/level pairs.
     */
    locationTypes: [{
        level: 4,
        code: 'ROOFTOP',
        msg: 'The returned result is a precise geocode for which we have location information accurate down to street address precision.'
    }, {
        level: 3,
        code: 'RANGE_INTERPOLATED',
        msg: 'The returned result reflects an approximation (usually on a road) interpolated between two precise points (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address.'
    }, {
        level: 2,
        code: 'GEOMETRIC_CENTER',
        msg: 'The returned result is the geometric center of a result such as a polyline (for example, a street) or polygon (region).'
    }, {
        level: 1,
        code: 'APPROXIMATE',
        msg: 'The returned result is approximate.'
    }],
    /**
     * @cfg {String} respErrorTitle
     * Defaults to <tt>'Error'</tt>.
     */
    respErrorTitle: 'Error',
    /**
     * @cfg {String} geoErrorMsgUnable
     * Defaults to <tt>'Unable to Locate the Address you provided'</tt>.
     */
    geoErrorMsgUnable: 'Unable to Locate the Address you provided',
    /**
     * @cfg {String} geoErrorTitle
     * Defaults to <tt>'Address Location Error'</tt>.
     */
    geoErrorTitle: 'Address Location Error',
    /**
     * @cfg {String} geoErrorMsgAccuracy
     * Defaults to <tt>'The address provided has a low accuracy.<br><br>{0} Accuracy.'</tt>.
     * <div class="mdetail-params"><ul>
     * <li><b><code>ROOFTOP</code></b> : <div class="sub-desc"><p>
     * The returned result is a precise geocode for which we have location information accurate down to street address precision.
     * </p></div></li>
     * <li><b><code>RANGE_INTERPOLATED</code></b> : <div class="sub-desc"><p>
     * The returned result reflects an approximation (usually on a road) interpolated between two precise points (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address.
     * </p></div></li>
     * <li><b><code>GEOMETRIC_CENTER</code></b> : <div class="sub-desc"><p>
     * The returned result is the geometric center of a result such as a polyline (for example, a street) or polygon (region).
     * </p></div></li>
     * <li><b><code>APPROXIMATE</code></b> : <div class="sub-desc"><p>
     * The returned result is approximate.
     * </p></div></li>
     * </ul></div>
     */
    geoErrorMsgAccuracy: 'The address provided has a low accuracy.<br><br>"{0}" Accuracy.<br><br>{1}',
    /**
     * @cfg {String} gmapType
     * The type of map to display, generic options available are: 'map', 'panorama'.
     * Defaults to <tt>'map'</tt>. 
     * More specific maps can be used by specifying the google map type:
     * <div class="mdetail-params"><ul>
     * <li><b><code>G_NORMAL_MAP</code></b> : <div class="sub-desc"><p>
     * Displays the default road map view
     * </p></div></li>
     * <li><b><code>G_SATELLITE_MAP</code></b> : <div class="sub-desc"><p>
     * Displays Google Earth satellite images
     * </p></div></li>
     * <li><b><code>G_HYBRID_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a mixture of normal and satellite views
     * </p></div></li>
     * <li><b><code>G_DEFAULT_MAP_TYPES</code></b> : <div class="sub-desc"><p>
     * Contains an array of the above three types, useful for iterative processing.
     * </p></div></li>
     * <li><b><code>G_PHYSICAL_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a physical map based on terrain information. 
     * </p></div></li>
     * <li><b><code>G_MOON_ELEVATION_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a shaded terrain map of the surface of the Moon, color-coded by altitude.
     * </p></div></li>
     * <li><b><code>G_MOON_VISIBLE_MAP</code></b> : <div class="sub-desc"><p>
     * Displays photographic imagery taken from orbit around the moon.
     * </p></div></li>
     * <li><b><code>G_MARS_ELEVATION_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a shaded terrain map of the surface of Mars, color-coded by altitude.
     * </p></div></li>
     * <li><b><code>G_MARS_VISIBLE_MAP</code></b> : <div class="sub-desc"><p>
     * Displays photographs taken from orbit around Mars.
     * </p></div></li>
     * <li><b><code>G_MARS_INFRARED_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a shaded infrared map of the surface of Mars, where warmer areas appear brighter and colder areas appear darker.
     * </p></div></li>
     * <li><b><code>G_SKY_VISIBLE_MAP</code></b> : <div class="sub-desc"><p>
     * Displays a mosaic of the sky, as seen from Earth, covering the full celestial sphere.
     * </p></div></li>
     * </ul></div>
     * Sample usage:
     * <pre><code>
     * gmapType: G_MOON_VISIBLE_MAP
     * </code></pre>
     */
    gmapType: 'map',
    /**
     * @cfg {Object} setCenter
     * The initial center location of the map. The map needs to be centered before it can be used.
     * A marker is not required to be specified. 
     * More markers can be added to the map using the <code>{@link #markers}</code> array.
     * For example:
     * <pre><code>
setCenter: {
    geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
    marker: {title: 'Fenway Park'}
},

// or just specify lat/long
setCenter: {
    lat: 42.345573,
    lng: -71.098326
}
     * </code></pre>
     */
    /**
     * @cfg {Number} zoomLevel
     * The zoom level to initialize the map at, generally between 1 (whole planet) and 40 (street).
     * Also used as the zoom level for panoramas, zero specifies no zoom at all.
     * Defaults to <tt>3</tt>.
     */
    zoomLevel: 3,
    /**
     * @cfg {Number} yaw
     * The Yaw, or rotational direction of the users perspective in degrees. Only applies to panoramas.
     * Defaults to <tt>180</tt>.
     */
    yaw: 180,
    /**
     * @cfg {Number} pitch
     * The pitch, or vertical direction of the users perspective in degrees.
     * Defaults to <tt>0</tt> (straight ahead). Valid values are between +90 (straight up) and -90 (straight down). 
     */
    pitch: 0,
    /**
     * @cfg {Boolean} displayGeoErrors
     * True to display geocoding errors to the end user via a message box.
     * Defaults to <tt>false</tt>.
     */
    displayGeoErrors: false,
    /**
     * @cfg {Boolean} minGeoAccuracy
     * The level to display an accuracy error below. Defaults to <tt>ROOFTOP</tt>. For additional information
     * see <a href="http://code.google.com/apis/maps/documentation/reference.html#GGeoAddressAccuracy">here</a>.
     */
    minGeoAccuracy: 'ROOFTOP',
    /**
     * @cfg {Array} mapConfOpts
     * Array of strings representing configuration methods to call, a full list can be found
     * <a href="http://code.google.com/apis/maps/documentation/reference.html#GMap2">here</a>.
     * For example:
     * <pre><code>
     * mapConfOpts: ['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
     * </code></pre>
     */
    /**
     * @cfg {Array} mapControls
     * Array of strings representing map controls to initialize, a full list can be found
     * <a href="http://code.google.com/apis/maps/documentation/reference.html#GControlImpl">here</a>.
     * For example:
     * <pre><code>
     * mapControls: ['GSmallMapControl','GMapTypeControl','NonExistantControl']
     * </code></pre>
     */
    /**
     * @cfg {Array} markers
     * Markers may be added to the map. Instead of specifying <code>lat</code>/<code>lng</code>,
     * geocoding can be specified via a <code>geoCodeAddr</code> string.
     * For example:
     * <pre><code>
markers: [{
    //lat: 42.339641,
    //lng: -71.094224,
    // instead of lat/lng:
    geoCodeAddr: '465 Huntington Avenue, Boston, MA, 02215-5597, USA',
    marker: {title: 'Boston Museum of Fine Arts'},
    listeners: {
        click: function(e){
            Ext.Msg.alert('Its fine', 'and its art.');
        }
    }
},{
    lat: 42.339419,
    lng: -71.09077,
    marker: {title: 'Northeastern University'}
}]
     * </code></pre>
     */
    // private
    mapDefined: false,
    // private
    mapDefinedGMap: false,
    initComponent: function () {

        this.addEvents(
        /**
         * @event mapready
         * Fires when the map is ready for interaction
         * @param {GMapPanel} this
         * @param {GMap} map
         */'mapready',
        /**
         * @event apiready
         * Fires when the Google Maps API is loaded
         */'apiready');

        Ext.applyIf(this, {
            markers: [],
            cache: {
                marker: [],
                polyline: [],
                infowindow: []
            }
        });

        Ext.ux.GMapPanel.superclass.initComponent.call(this);

        if (window.google && window.google.maps) {
            this.on('afterrender', this.apiReady, this);
        } else {
            window.gmapapiready = this.apiReady.createDelegate(this);
            this.buildScriptTag('http://maps.google.com/maps/api/js?sensor=false&callback=gmapapiready');
        }

    },
    apiReady: function () {

        if (this.rendered) {

            (function () {

                if (this.gmapType === 'map') {
                    this.gmap = new google.maps.Map(this.body.dom, {
                        zoom: this.zoomLevel,
                        mapTypeId: google.maps.MapTypeId.TERRAIN
                    });
                    this.mapDefined = true;
                    this.mapDefinedGMap = true;
                }

                if (this.gmapType === 'panorama') {
                    this.gmap = new GStreetviewPanorama(this.body.dom);
                    this.mapDefined = true;
                }

                if (!this.mapDefined && this.gmapType) {
                    this.gmap = new google.maps.Map(this.body.dom, {
                        zoom: this.zoomLevel,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                    this.gmap.setMapTypeId(this.gmapType);
                    this.mapDefined = true;
                    this.mapDefinedGMap = true;
                }

                google.maps.event.addListenerOnce(this.getMap(), 'tilesloaded', this.onMapReady.createDelegate(this));
                google.maps.event.addListener(this.getMap(), 'dragend', this.dragEnd.createDelegate(this));




                // Add KML Layer Variables 
                var statesLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/states.kmz', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });
                var countiesLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/counties.kmz', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });
                var hucsLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/hucs.kmz', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });
                var divsLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/divs.kmz', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });

                var psasLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/psa.kmz', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });

                var stationsLayer = new google.maps.KmlLayer('http://www.wrcc.dri.edu/monitor/WWDT/KML/stations.kml', {
                    preserveViewport: true,
                    suppressInfoWindows: false
                });




                // Set up array to collect markers
                var markersArray = [];

                // Function to clear markers of map
                function clearOverlays() {
                    if (markersArray) {
                        for (var i = 0; i < markersArray.length; i++) {
                            markersArray[i].setMap(null);

                        }
                        markersArray.length = 0;

                    }

                }


                var lakeCoords = [new google.maps.LatLng(45.460948, - 86.787003),
                new google.maps.LatLng(44.602648, - 87.415256),
                new google.maps.LatLng(44.328697, - 87.520557),
                new google.maps.LatLng(44.152439, - 87.498632),
                new google.maps.LatLng(44.099231, - 87.624904),
                new google.maps.LatLng(43.702954, - 87.671612),
                new google.maps.LatLng(43.314357, - 87.878078),
                new google.maps.LatLng(42.75385, - 87.75569),
                new google.maps.LatLng(42.288768, - 87.813798),
                new google.maps.LatLng(41.742452, - 87.534388),
                new google.maps.LatLng(41.626949, - 87.266818),
                new google.maps.LatLng(41.789315, - 86.803011),
                new google.maps.LatLng(42.388392, - 86.286387),
                new google.maps.LatLng(42.819868, - 86.20502),
                new google.maps.LatLng(43.640954, - 86.548568),
                new google.maps.LatLng(43.833986, - 86.435097),
                new google.maps.LatLng(44.047643, - 86.534121),
                new google.maps.LatLng(44.376054, - 86.271467),
                new google.maps.LatLng(44.696247, - 86.274654),
                new google.maps.LatLng(44.771059, - 86.097114),
                new google.maps.LatLng(44.912532, - 86.056663),
                new google.maps.LatLng(44.969424, - 85.813017),
                new google.maps.LatLng(45.229448, - 85.615129),
                new google.maps.LatLng(45.191571, - 85.511479),
                new google.maps.LatLng(44.890979, - 85.63213),
                new google.maps.LatLng(44.779823, - 85.596634),
                new google.maps.LatLng(45.012925, - 85.495178),
                new google.maps.LatLng(44.933504, - 85.431579),
                new google.maps.LatLng(45.267763, - 85.403253),
                new google.maps.LatLng(45.397319, - 84.963846),
                new google.maps.LatLng(45.451302, - 85.091954),
                new google.maps.LatLng(45.587727, - 85.138664),
                new google.maps.LatLng(45.792241, - 84.979205),
                new google.maps.LatLng(45.800428, - 84.559868),
                new google.maps.LatLng(46.006309, - 85.048479),
                new google.maps.LatLng(46.076842, - 85.505522),
                new google.maps.LatLng(45.97954, - 85.638725),
                new google.maps.LatLng(45.934428, - 86.249789),
                new google.maps.LatLng(45.692448, - 86.560112),
                new google.maps.LatLng(45.545159, - 86.622177),
                new google.maps.LatLng(45.662769, - 86.763862),
                new google.maps.LatLng(45.850259, - 86.527836),
                new google.maps.LatLng(45.886801, - 86.564378),
                new google.maps.LatLng(45.65002, - 86.938884),
                new google.maps.LatLng(45.777406, - 87.015706),
                new google.maps.LatLng(44.981732, - 87.634546),
                new google.maps.LatLng(44.934346, - 87.791937),
                new google.maps.LatLng(44.620068, - 88.01477),
                new google.maps.LatLng(44.558247, - 87.972648),
                new google.maps.LatLng(44.851221, - 87.624522),
                new google.maps.LatLng(44.904235, - 87.44844),
                new google.maps.LatLng(45.441902, - 86.934296),
                new google.maps.LatLng(45.460948, - 86.787003),

                ]



                var conusCoords = [new google.maps.LatLng(24.916774, - 80.619583),
                new google.maps.LatLng(25.217612, - 80.480304),
                new google.maps.LatLng(25.095384, - 81.095141),
                new google.maps.LatLng(25.625359, - 81.280252),
                new google.maps.LatLng(25.9653, - 81.789572),
                new google.maps.LatLng(26.440173, - 81.934716),
                new google.maps.LatLng(26.438838, - 82.187834),
                new google.maps.LatLng(27.859757, - 82.852949),
                new google.maps.LatLng(28.89711, - 82.723155),
                new google.maps.LatLng(29.174744, - 82.922876),
                new google.maps.LatLng(29.079682, - 83.102524),
                new google.maps.LatLng(29.647313, - 83.431633),
                new google.maps.LatLng(30.067161, - 84.020956),
                new google.maps.LatLng(30.061213, - 84.296027),
                new google.maps.LatLng(29.892429, - 84.349464),
                new google.maps.LatLng(29.563969, - 84.985729),
                new google.maps.LatLng(29.687395, - 85.391792),
                new google.maps.LatLng(29.922419, - 85.436664),
                new google.maps.LatLng(30.336326, - 86.258903),
                new google.maps.LatLng(30.189045, - 88.042206),
                new google.maps.LatLng(30.356152, - 88.349693),
                new google.maps.LatLng(30.366754, - 88.975169),
                new google.maps.LatLng(30.030158, - 89.803855),
                new google.maps.LatLng(29.859531, - 89.65937),
                new google.maps.LatLng(30.125743, - 89.453995),
                new google.maps.LatLng(30.177849, - 89.168486),
                new google.maps.LatLng(29.723114, - 89.263295),
                new google.maps.LatLng(29.605144, - 89.558958),
                new google.maps.LatLng(29.451456, - 89.517507),
                new google.maps.LatLng(29.19098, - 88.975187),
                new google.maps.LatLng(28.896843, - 89.451317),
                new google.maps.LatLng(29.082379, - 89.359463),
                new google.maps.LatLng(29.270092, - 89.636388),
                new google.maps.LatLng(29.063885, - 90.207919),
                new google.maps.LatLng(29.057557, - 90.518013),
                new google.maps.LatLng(29.229383, - 90.514506),
                new google.maps.LatLng(29.021859, - 90.640373),
                new google.maps.LatLng(29.062699, - 90.933777),
                new google.maps.LatLng(29.252544, - 91.349248),
                new google.maps.LatLng(29.426156, - 91.233285),
                new google.maps.LatLng(29.799608, - 91.986736),
                new google.maps.LatLng(29.646084, - 92.058881),
                new google.maps.LatLng(29.525988, - 91.683851),
                new google.maps.LatLng(29.506075, - 92.310275),
                new google.maps.LatLng(29.771116, - 93.215901),
                new google.maps.LatLng(29.642383, - 94.087093),
                new google.maps.LatLng(27.988626, - 96.927749),
                new google.maps.LatLng(27.197061, - 97.349329),
                new google.maps.LatLng(25.937246, - 97.139447),
                new google.maps.LatLng(25.813134, - 97.389612),
                new google.maps.LatLng(26.395704, - 99.101423),
                new google.maps.LatLng(26.967477, - 99.424391),
                new google.maps.LatLng(27.517392, - 99.514826),
                new google.maps.LatLng(28.210597, - 100.261652),
                new google.maps.LatLng(29.065664, - 100.684636),
                new google.maps.LatLng(29.763955, - 101.45917),
                new google.maps.LatLng(29.828028, - 102.282183),
                new google.maps.LatLng(29.674679, - 102.689843),
                new google.maps.LatLng(28.938515, - 103.131351),
                new google.maps.LatLng(29.012162, - 103.378859),
                new google.maps.LatLng(29.581361, - 104.476306),
                new google.maps.LatLng(30.561485, - 104.932315),
                new google.maps.LatLng(31.444221, - 106.201022),
                new google.maps.LatLng(31.77136, - 106.44353),
                new google.maps.LatLng(31.730523, - 108.185865),
                new google.maps.LatLng(31.313805, - 108.231139),
                new google.maps.LatLng(31.354642, - 111.186231),
                new google.maps.LatLng(32.489294, - 114.852512),
                new google.maps.LatLng(32.701192, - 114.762444),
                new google.maps.LatLng(32.519765, - 117.124256),
                new google.maps.LatLng(33.118404, - 117.329897),
                new google.maps.LatLng(33.730783, - 118.144604),
                new google.maps.LatLng(33.724833, - 118.436161),
                new google.maps.LatLng(34.024219, - 118.559711),
                new google.maps.LatLng(34.123793, - 119.206919),
                new google.maps.LatLng(34.396576, - 119.557148),
                new google.maps.LatLng(34.436667, - 120.477413),
                new google.maps.LatLng(34.564193, - 120.64742),
                new google.maps.LatLng(35.148304, - 120.694828),
                new google.maps.LatLng(36.318781, - 121.916469),
                new google.maps.LatLng(36.646505, - 122.000459),
                new google.maps.LatLng(36.646106, - 121.854234),
                new google.maps.LatLng(36.894394, - 121.849167),
                new google.maps.LatLng(37.126332, - 122.380731),
                new google.maps.LatLng(37.816217, - 122.562571),
                new google.maps.LatLng(37.979279, - 123.035959),
                new google.maps.LatLng(38.272988, - 123.020175),
                new google.maps.LatLng(38.909288, - 123.7309),
                new google.maps.LatLng(39.836733, - 123.884447),
                new google.maps.LatLng(40.254759, - 124.393265),
                new google.maps.LatLng(41.471005, - 124.074132),
                new google.maps.LatLng(42.85526, - 124.563698),
                new google.maps.LatLng(43.901001, - 124.164815),
                new google.maps.LatLng(46.106427, - 123.976925),
                new google.maps.LatLng(47.672548, - 124.41121),
                new google.maps.LatLng(47.936765, - 124.686212),
                new google.maps.LatLng(48.425893, - 124.730962),
                new google.maps.LatLng(48.158449, - 123.890459),
                new google.maps.LatLng(48.107521, - 122.983406),
                new google.maps.LatLng(48.415057, - 122.675503),
                new google.maps.LatLng(48.565077, - 122.748285),
                new google.maps.LatLng(48.439279, - 123.016844),
                new google.maps.LatLng(48.669673, - 123.208115),
                new google.maps.LatLng(48.711345, - 122.749725),
                new google.maps.LatLng(48.577194, - 122.763991),
                new google.maps.LatLng(48.776072, - 122.68225),
                new google.maps.LatLng(48.983379, - 122.816028),
                new google.maps.LatLng(49.022711, - 95.182688),
                new google.maps.LatLng(49.405431, - 95.142805),
                new google.maps.LatLng(49.344288, - 94.815227),
                new google.maps.LatLng(48.737979, - 94.635225),
                new google.maps.LatLng(48.524994, - 93.733054),
                new google.maps.LatLng(48.650552, - 92.967325),
                new google.maps.LatLng(48.275382, - 92.397713),
                new google.maps.LatLng(48.358307, - 92.057307),
                new google.maps.LatLng(48.066605, - 91.493876),
                new google.maps.LatLng(48.240286, - 90.858839),
                new google.maps.LatLng(48.044803, - 89.476003),
                new google.maps.LatLng(47.4033, - 91.087887),
                new google.maps.LatLng(46.769294, - 92.057307),
                new google.maps.LatLng(46.69466, - 91.900407),
                new google.maps.LatLng(47.102411, - 90.39035),
                new google.maps.LatLng(46.736291, - 90.672764),
                new google.maps.LatLng(46.813144, - 90.841432),
                new google.maps.LatLng(46.64478, - 90.851469),
                new google.maps.LatLng(46.594274, - 90.433281),
                new google.maps.LatLng(46.880321, - 89.37351),
                new google.maps.LatLng(47.522528, - 87.995667),
                new google.maps.LatLng(47.469383, - 87.684118),
                new google.maps.LatLng(46.843493, - 88.473536),
                new google.maps.LatLng(46.983272, - 88.140282),
                new google.maps.LatLng(46.889899, - 87.680631),
                new google.maps.LatLng(46.517306, - 87.308952),
                new google.maps.LatLng(46.473371, - 86.83016),
                new google.maps.LatLng(46.814108, - 85.078644),
                new google.maps.LatLng(46.771534, - 84.964397),
                new google.maps.LatLng(46.49355, - 85.023792),
                new google.maps.LatLng(46.540611, - 84.136105),
                new google.maps.LatLng(46.066647, - 84.019471),
                new google.maps.LatLng(46.14736, - 83.727784),
                new google.maps.LatLng(45.942788, - 83.451065),
                new google.maps.LatLng(45.923295, - 84.723078),
                new google.maps.LatLng(45.791318, - 84.350378),
                new google.maps.LatLng(45.689565, - 84.479205),
                new google.maps.LatLng(45.326725, - 83.413508),
                new google.maps.LatLng(45.01921, - 83.258038),
                new google.maps.LatLng(45.029534, - 83.431254),
                new google.maps.LatLng(44.830272, - 83.270374),
                new google.maps.LatLng(44.323172, - 83.320047),
                new google.maps.LatLng(43.932441, - 83.887537),
                new google.maps.LatLng(43.694308, - 83.90173),
                new google.maps.LatLng(43.623882, - 83.638778),
                new google.maps.LatLng(43.903636, - 83.412542),
                new google.maps.LatLng(44.105444, - 82.944508),
                new google.maps.LatLng(43.989738, - 82.687379),
                new google.maps.LatLng(42.97089, - 82.416822),
                new google.maps.LatLng(42.566282, - 82.51096),
                new google.maps.LatLng(42.649277, - 82.725179),
                new google.maps.LatLng(41.730417, - 83.434728),
                new google.maps.LatLng(41.532091, - 82.903922),
                new google.maps.LatLng(41.759719, - 82.799448),
                new google.maps.LatLng(41.571857, - 82.810646),
                new google.maps.LatLng(41.404941, - 82.503483),
                new google.maps.LatLng(41.50861, - 81.712205),
                new google.maps.LatLng(42.599464, - 79.144244),
                new google.maps.LatLng(42.813996, - 78.864593),
                new google.maps.LatLng(43.114398, - 79.097394),
                new google.maps.LatLng(43.299555, - 79.051867),
                new google.maps.LatLng(43.317893, - 76.82605),
                new google.maps.LatLng(43.582557, - 76.182711),
                new google.maps.LatLng(43.898835, - 76.436557),
                new google.maps.LatLng(43.939351, - 76.176556),
                new google.maps.LatLng(44.169124, - 76.355681),
                new google.maps.LatLng(45.029854, - 74.852237),
                new google.maps.LatLng(45.064188, - 71.497564),
                new google.maps.LatLng(45.316776, - 71.306185),
                new google.maps.LatLng(45.293443, - 70.85271),
                new google.maps.LatLng(45.899555, - 70.302162),
                new google.maps.LatLng(46.764217, - 69.979953),
                new google.maps.LatLng(47.480856, - 69.223702),
                new google.maps.LatLng(47.431373, - 69.01081),
                new google.maps.LatLng(47.236226, - 69.022439),
                new google.maps.LatLng(47.32664, - 68.113672),
                new google.maps.LatLng(47.060084, - 67.78713),
                new google.maps.LatLng(45.736224, - 67.767312),
                new google.maps.LatLng(45.597236, - 67.424832),
                new google.maps.LatLng(45.237991, - 67.433826),
                new google.maps.LatLng(45.195917, - 67.186715),
                new google.maps.LatLng(44.845542, - 66.931582),
                new google.maps.LatLng(44.427993, - 67.536738),
                new google.maps.LatLng(44.52176, - 67.709291),
                new google.maps.LatLng(44.127452, - 68.368088),
                new google.maps.LatLng(44.161545, - 68.768212),
                new google.maps.LatLng(43.983906, - 68.791149),
                new google.maps.LatLng(44.124542, - 68.970024),
                new google.maps.LatLng(44.334803, - 68.835588),
                new google.maps.LatLng(43.922961, - 69.190123),
                new google.maps.LatLng(43.720236, - 69.77715),
                new google.maps.LatLng(43.778426, - 70.055794),
                new google.maps.LatLng(43.317158, - 70.516487),
                new google.maps.LatLng(42.833864, - 70.803581),
                new google.maps.LatLng(42.584091, - 70.602898),
                new google.maps.LatLng(42.302059, - 71.01194),
                new google.maps.LatLng(42.306691, - 70.803764),
                new google.maps.LatLng(41.74888, - 70.395537),
                new google.maps.LatLng(41.793732, - 70.034953),
                new google.maps.LatLng(42.092922, - 70.261848),
                new google.maps.LatLng(42.060675, - 70.002595),
                new google.maps.LatLng(41.839775, - 69.909515),
                new google.maps.LatLng(41.525272, - 70.02161),
                new google.maps.LatLng(41.662452, - 70.004548),
                new google.maps.LatLng(41.524095, - 70.604119),
                new google.maps.LatLng(41.358611, - 70.391472),
                new google.maps.LatLng(41.268659, - 70.806938),
                new google.maps.LatLng(41.511267, - 70.687442),
                new google.maps.LatLng(41.391386, - 70.971021),
                new google.maps.LatLng(41.571337, - 70.64075),
                new google.maps.LatLng(41.692993, - 70.679898),
                new google.maps.LatLng(41.354498, - 71.471285),
                new google.maps.LatLng(41.23364, - 72.939869),
                new google.maps.LatLng(40.983269, - 73.638013),
                new google.maps.LatLng(41.168757, - 72.201889),
                new google.maps.LatLng(41.072283, - 72.304898),
                new google.maps.LatLng(41.075685, - 71.807177),
                new google.maps.LatLng(40.610543, - 73.170625),
                new google.maps.LatLng(40.498408, - 74.263471),
                new google.maps.LatLng(40.487313, - 73.932437),
                new google.maps.LatLng(39.700179, - 74.100808),
                new google.maps.LatLng(38.898819, - 74.877575),
                new google.maps.LatLng(38.943754, - 74.988016),
                new google.maps.LatLng(39.181431, - 74.902734),
                new google.maps.LatLng(39.391138, - 75.503094),
                new google.maps.LatLng(38.705047, - 75.016284),
                new google.maps.LatLng(38.299667, - 75.06087),
                new google.maps.LatLng(37.108058, - 75.84042),
                new google.maps.LatLng(37.094518, - 76.008928),
                new google.maps.LatLng(37.352765, - 76.029678),
                new google.maps.LatLng(37.932626, - 75.734852),
                new google.maps.LatLng(37.891875, - 75.893492),
                new google.maps.LatLng(38.227384, - 75.98797),
                new google.maps.LatLng(37.899075, - 76.068119),
                new google.maps.LatLng(38.224328, - 76.068226),
                new google.maps.LatLng(38.312314, - 76.266813),
                new google.maps.LatLng(38.588637, - 76.311165),
                new google.maps.LatLng(38.647011, - 76.176566),
                new google.maps.LatLng(38.679064, - 76.386039),
                new google.maps.LatLng(38.849404, - 76.276585),
                new google.maps.LatLng(39.001826, - 76.369064),
                new google.maps.LatLng(39.307794, - 76.193241),
                new google.maps.LatLng(39.277451, - 76.360798),
                new google.maps.LatLng(38.571032, - 76.512611),
                new google.maps.LatLng(38.054198, - 76.302721),
                new google.maps.LatLng(38.307671, - 77.003277),
                new google.maps.LatLng(37.891568, - 76.206294),
                new google.maps.LatLng(37.186801, - 76.350533),
                new google.maps.LatLng(36.985752, - 76.272037),
                new google.maps.LatLng(36.950305, - 75.987075),
                new google.maps.LatLng(35.793101, - 75.535629),
                new google.maps.LatLng(35.927253, - 75.71658),
                new google.maps.LatLng(35.557828, - 75.725345),
                new google.maps.LatLng(35.315887, - 76.085308),
                new google.maps.LatLng(35.396047, - 76.57724),
                new google.maps.LatLng(35.302904, - 76.432742),
                new google.maps.LatLng(34.981675, - 76.625194),
                new google.maps.LatLng(35.089649, - 76.452408),
                new google.maps.LatLng(34.984158, - 76.14104),
                new google.maps.LatLng(34.58656, - 76.52514),
                new google.maps.LatLng(34.690098, - 76.932574),
                new google.maps.LatLng(34.414678, - 77.529581),
                new google.maps.LatLng(33.849199, - 77.932503),
                new google.maps.LatLng(33.880448, - 78.456783),
                new google.maps.LatLng(33.715634, - 78.815881),
                new google.maps.LatLng(33.145772, - 79.180738),
                new google.maps.LatLng(32.60404, - 79.972501),
                new google.maps.LatLng(32.510169, - 80.425488),
                new google.maps.LatLng(32.312337, - 80.43089),
                new google.maps.LatLng(32.063175, - 80.852486),
                new google.maps.LatLng(31.689606, - 81.099978),
                new google.maps.LatLng(30.763508, - 81.436699),
                new google.maps.LatLng(30.142647, - 81.327545),
                new google.maps.LatLng(28.460071, - 80.48826),
                new google.maps.LatLng(28.121366, - 80.54358),
                new google.maps.LatLng(26.74411, - 79.995448),
                new google.maps.LatLng(25.683192, - 80.127193),
                new google.maps.LatLng(25.690626, - 80.251944),
                new google.maps.LatLng(25.439634, - 80.319167),
                new google.maps.LatLng(25.443065, - 80.154011),
                new google.maps.LatLng(24.916774, - 80.619583), ];

                // Construct the polygon
                conus = new google.maps.Polygon({
                    paths: conusCoords,
                    strokeColor: "#000000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#000000",
                    fillOpacity: 0.00,

                });

                // Construct the polygon
                lake = new google.maps.Polygon({
                    paths: lakeCoords,
                    strokeColor: "#000000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#000000",
                    fillOpacity: 0.00,

                });






                // Radio buttons determine what the map does
                google.maps.event.addListener(this.getMap(), 'mouseover', function (event) {
                    if (Ext.getCmp('point_radio').getValue() == true) {
                        //clearOverlays();

                        if (conus.getMap(this)) {
                            //alert('conus m');
                        }


                        conus.setMap(null);
                        conus.setMap(this);
                        //lake.setMap(this);

                        stationsLayer.setMap(null);
                        countiesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        divsLayer.setMap(null);
                        statesLayer.setMap(null);
                        psasLayer.setMap(null);


                        google.maps.event.addListener(conus, 'click', function (event) {


                            clearOverlays();

                            if (marker == true){
                            alert('marker already here');
                            }


                            var marker = new google.maps.Marker({
                                position: event.latLng,
                                draggable: true,
                                map: this.getMap()
                            });

                            markersArray.push(marker);
                            //alert('here'+event.latLng);
                            //pos = marker.getPosition();
                            Ext.getCmp('map_lat').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon').setValue(event.latLng.lng());

                            Ext.getCmp('map_lat2').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon2').setValue(event.latLng.lng());

                            Ext.getCmp('map_lat3').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon3').setValue(event.latLng.lng());
                            //Ext.getCmp('map_lon').setValue();




                                google.maps.event.addListener(marker, 'drag', function (event) {
                                
                            Ext.getCmp('map_lat').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon').setValue(event.latLng.lng());

                            Ext.getCmp('map_lat2').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon2').setValue(event.latLng.lng());

                            Ext.getCmp('map_lat3').setValue(event.latLng.lat());
                            Ext.getCmp('map_lon3').setValue(event.latLng.lng());
});

                            // Set lat/lon on click for all on west accorion
                            
                            //var container = Ext.getCmp('id_product_tabs');
                            //var p = container.findByType(Ext.FormPanel);
                            //Ext.each(p, function () {
                            //    this.find('name', 'lat')[0].setValue(pos.lat());
                            //    this.find('name', 'lon')[0].setValue(pos.lng());







                                google.maps.event.addListener(marker, 'dragend', function (event) {

                                    if (google.maps.geometry.poly.containsLocation(event.latLng, conus) == true) {
                                         //alert(event.latLng.lat());

                                        conus.setMap(null);
                                        //lake.setMap(null); 
                                        conus = new google.maps.Polygon({
                                            paths: conusCoords,
                                            strokeColor: "#000000",
                                            strokeOpacity: 0.8,
                                            strokeWeight: 2,
                                            fillColor: "#629632",
                                            fillOpacity: 0.35,
                                        });

                                        conus.setMap(this.getMap());
                                        lake.setMap(this.getMap());



                                        if (google.maps.geometry.poly.containsLocation(event.latLng, lake) == true) {
                                            //alert('in the lake');

                                            //conus.setMap(null);
                                            lake.setMap(null);
                                            lake = new google.maps.Polygon({
                                                paths: lakeCoords,
                                                strokeColor: "#FF0000",
                                                strokeOpacity: 0.8,
                                                strokeWeight: 2,
                                                fillColor: "#FF0000",
                                                fillOpacity: 0.99,
                                            });



                                            lake.setMap(this.getMap());

                            Ext.getCmp('map_lat').setValue(null);
                            Ext.getCmp('map_lon').setValue(null);

                            Ext.getCmp('map_lat2').setValue(null);
                            Ext.getCmp('map_lon2').setValue(null);

                            Ext.getCmp('map_lat3').setValue(null);
                            Ext.getCmp('map_lon3').setValue(null);


                                        } else {

                                            lake.setMap(null);

                                        }





                                    } else {

                                        conus.setMap(null);
                                        conus = new google.maps.Polygon({
                                            paths: conusCoords,
                                            strokeColor: "#FF0000",
                                            strokeOpacity: 0.8,
                                            strokeWeight: 2,
                                            fillColor: "#FF0000",
                                            fillOpacity: 0.35,

                                        });





                                        lake.setMap(null);
                                        conus.setMap(this.getMap());


                            Ext.getCmp('map_lat').setValue(null);
                            Ext.getCmp('map_lon').setValue(null);

                            Ext.getCmp('map_lat2').setValue(null);
                            Ext.getCmp('map_lon2').setValue(null);

                            Ext.getCmp('map_lat3').setValue(null);
                            Ext.getCmp('map_lon3').setValue(null);
                                        


                                    }





                                });

                            });



                        //});


                    }




                    if (Ext.getCmp('state_radio').getValue() == true) {
                        conus.setMap(null);
                        lake.setMap(null);
                        clearOverlays();
                        countiesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        divsLayer.setMap(null);
                        psasLayer.setMap(null);
                        stationsLayer.setMap(null);
                        statesLayer.setMap(this);



                        // On kml click
                        google.maps.event.addListener(statesLayer, 'click', function (kmlEvent) {






                            // Code to get ran on kml click if radio button remains the same
                            var stateKmlID = kmlEvent.featureData.id;
                            var stateID = new Array;
                            stateID['ID_00032'] = '131170803712';
                            stateID['ID_00040'] = '294207291392';
                            stateID['ID_00012'] = '134771302400';
                            stateID['ID_00026'] = '403466289152';
                            stateID['ID_00020'] = '268431196160';
                            stateID['ID_00025'] = '12541639680';
                            stateID['ID_00022'] = '5046704128';
                            stateID['ID_00043'] = '158114704';
                            stateID['ID_00029'] = '138887495680';
                            stateID['ID_00010'] = '148959199232';
                            stateID['ID_00030'] = '214044704768';
                            stateID['ID_00036'] = '143793405952';
                            stateID['ID_00038'] = '92789186560';
                            stateID['ID_00039'] = '144669294592';
                            stateID['ID_00013'] = '211754106880';
                            stateID['ID_00027'] = '102269100032';
                            stateID['ID_00042'] = '111897600000';
                            stateID['ID_00047'] = '79882797056';
                            stateID['ID_00004'] = '25141639168';
                            stateID['ID_00028'] = '20202059776';
                            stateID['ID_00019'] = '146435096576';
                            stateID['ID_00041'] = '206232305664';
                            stateID['ID_00016'] = '121530703872';
                            stateID['ID_00031'] = '178039701504';
                            stateID['ID_00023'] = '376961892352';
                            stateID['ID_00014'] = '198973702144';
                            stateID['ID_00009'] = '284331900928';
                            stateID['ID_00034'] = '23187259392';
                            stateID['ID_00021'] = '19047340032';
                            stateID['ID_00003'] = '314160709632';
                            stateID['ID_00011'] = '122056802304';
                            stateID['ID_00048'] = '125919797248';
                            stateID['ID_00008'] = '178711199744';
                            stateID['ID_00002'] = '105828696064';
                            stateID['ID_00017'] = '177660002304';
                            stateID['ID_00006'] = '248607801344';
                            stateID['ID_00001'] = '115883098112';
                            stateID['ID_00005'] = '2677565952';
                            stateID['ID_00033'] = '77856841728';
                            stateID['ID_00035'] = '196349607936';
                            stateID['ID_00037'] = '106797899776';
                            stateID['ID_00045'] = '676586979328';
                            stateID['ID_00015'] = '212818296832';
                            stateID['ID_00046'] = '23871029248';
                            stateID['ID_00044'] = '102278799360';
                            stateID['ID_00024'] = '172118999040';
                            stateID['ID_00018'] = '62258679808';
                            stateID['ID_00007'] = '140268093440';
                            stateID['ID_00000'] = '251470102528';

                            //alert(stateID[stateKmlID]);
                            //Ext.getCmp('map_region3').setValue('294207291392')
                            Ext.getCmp('map_region').setValue(stateID[stateKmlID]);
                            Ext.getCmp('map_region2').setValue(stateID[stateKmlID]);
                            Ext.getCmp('map_region3').setValue(stateID[stateKmlID]);

                        });

                    }

                    if (Ext.getCmp('county_radio').getValue() == true) {



                        conus.setMap(null);
                        lake.setMap(null);
                        clearOverlays();
                        statesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        divsLayer.setMap(null);
                        psasLayer.setMap(null);
                        stationsLayer.setMap(null);
                        countiesLayer.setMap(this);


                        // On kml click
                        google.maps.event.addListener(countiesLayer, 'click', function (kmlEvent) {



                            // Code to get ran on kml click if radio button remains the same
                            var countyKmlID = kmlEvent.featureData.id;
                            var countyID = new Array;
                            countyID['ID_02061'] = '1385618944';
                            countyID['ID_02026'] = '1434076032';
                            countyID['ID_02036'] = '1450227968';
                            countyID['ID_02031'] = '1450653056';
                            countyID['ID_02070'] = '1453371008';
                            countyID['ID_02033'] = '1454925952';
                            countyID['ID_02047'] = '1465522944';
                            countyID['ID_02077'] = '1487709952';
                            countyID['ID_02055'] = '1500476032';
                            countyID['ID_02017'] = '1501737984';
                            countyID['ID_02146'] = '1503617024';
                            countyID['ID_02095'] = '1534877056';
                            countyID['ID_02045'] = '1539581952';
                            countyID['ID_02101'] = '1545009024';
                            countyID['ID_02009'] = '1564252032';
                            countyID['ID_02140'] = '1566545024';
                            countyID['ID_02086'] = '1569190016';
                            countyID['ID_02151'] = '1573511040';
                            countyID['ID_02034'] = '1576888064';
                            countyID['ID_02044'] = '1577005056';
                            countyID['ID_02126'] = '1587608064';
                            countyID['ID_02098'] = '1601868032';
                            countyID['ID_02041'] = '1612481024';
                            countyID['ID_02109'] = '1613057024';
                            countyID['ID_02147'] = '1625632000';
                            countyID['ID_02105'] = '1636619008';
                            countyID['ID_02046'] = '1641587968';
                            countyID['ID_02127'] = '1660546048';
                            countyID['ID_02153'] = '1667804032';
                            countyID['ID_02114'] = '1669961984';
                            countyID['ID_02110'] = '1676007040';
                            countyID['ID_02118'] = '1685890944';
                            countyID['ID_02053'] = '1729328000';
                            countyID['ID_02093'] = '1740716032';
                            countyID['ID_02128'] = '1758529024';
                            countyID['ID_02085'] = '1788846976';
                            countyID['ID_02108'] = '1794483968';
                            countyID['ID_02152'] = '1854200064';
                            countyID['ID_02071'] = '1855779968';
                            countyID['ID_02094'] = '1863920000';
                            countyID['ID_02142'] = '1903228032';
                            countyID['ID_02048'] = '1908238976';
                            countyID['ID_02090'] = '1922526976';
                            countyID['ID_02042'] = '2011976960';
                            countyID['ID_02091'] = '2012662016';
                            countyID['ID_02143'] = '2031191040';
                            countyID['ID_02040'] = '2032960000';
                            countyID['ID_02051'] = '2049176960';
                            countyID['ID_02035'] = '2076115968';
                            countyID['ID_02030'] = '2201894912';
                            countyID['ID_02058'] = '2282836992';
                            countyID['ID_02008'] = '2291819008';
                            countyID['ID_02079'] = '2301199872';
                            countyID['ID_02082'] = '2341058048';
                            countyID['ID_02141'] = '2365955072';
                            countyID['ID_02144'] = '2447747072';
                            countyID['ID_02010'] = '2530113024';
                            countyID['ID_02037'] = '2534807040';
                            countyID['ID_02130'] = '2656485120';
                            countyID['ID_02039'] = '2668869888';
                            countyID['ID_02087'] = '2791664896';
                            countyID['ID_02100'] = '2797722112';
                            countyID['ID_02032'] = '2878192128';
                            countyID['ID_02078'] = '3184222976';
                            countyID['ID_02102'] = '3207610112';
                            countyID['ID_02064'] = '3423329024';
                            countyID['ID_02027'] = '4117521920';
                            countyID['ID_02627'] = '3203599104';
                            countyID['ID_02623'] = '4773673984';
                            countyID['ID_00217'] = '11653980160';
                            countyID['ID_02890'] = '11972469760';
                            countyID['ID_00383'] = '12322990080';
                            countyID['ID_00393'] = '13896869888';
                            countyID['ID_00384'] = '14281169920';
                            countyID['ID_02892'] = '15969059840';
                            countyID['ID_00388'] = '21039769600';
                            countyID['ID_00215'] = '23794309120';
                            countyID['ID_02891'] = '23828260864';
                            countyID['ID_00216'] = '25771470848';
                            countyID['ID_02894'] = '29001439232';
                            countyID['ID_02893'] = '34475548672';
                            countyID['ID_02628'] = '48222691328';
                            countyID['ID_01136'] = '1368208000';
                            countyID['ID_00598'] = '1377644032';
                            countyID['ID_00591'] = '1378530048';
                            countyID['ID_00595'] = '1428125952';
                            countyID['ID_01128'] = '1430320000';
                            countyID['ID_00605'] = '1434055936';
                            countyID['ID_00593'] = '1435587968';
                            countyID['ID_00603'] = '1454321024';
                            countyID['ID_01427'] = '1463670016';
                            countyID['ID_01138'] = '1496232960';
                            countyID['ID_01134'] = '1503686016';
                            countyID['ID_01421'] = '1519780992';
                            countyID['ID_00821'] = '1521912960';
                            countyID['ID_00809'] = '1524347008';
                            countyID['ID_01142'] = '1528691968';
                            countyID['ID_01133'] = '1536107008';
                            countyID['ID_00825'] = '1546244992';
                            countyID['ID_00607'] = '1548252032';
                            countyID['ID_00601'] = '1555591936';
                            countyID['ID_01127'] = '1560781056';
                            countyID['ID_01150'] = '1565489024';
                            countyID['ID_00822'] = '1570580992';
                            countyID['ID_00823'] = '1572439040';
                            countyID['ID_01124'] = '1576931968';
                            countyID['ID_00812'] = '1579271936';
                            countyID['ID_01429'] = '1593367040';
                            countyID['ID_01131'] = '1596418048';
                            countyID['ID_00811'] = '1600189952';
                            countyID['ID_00813'] = '1601113984';
                            countyID['ID_00818'] = '1620240000';
                            countyID['ID_00594'] = '1628017024';
                            countyID['ID_00608'] = '1631917056';
                            countyID['ID_00597'] = '1636376960';
                            countyID['ID_01129'] = '1641892992';
                            countyID['ID_00604'] = '1644049024';
                            countyID['ID_00609'] = '1656205952';
                            countyID['ID_00606'] = '1668739968';
                            countyID['ID_01139'] = '1678013056';
                            countyID['ID_01125'] = '1678204032';
                            countyID['ID_01148'] = '1681500032';
                            countyID['ID_00592'] = '1689165952';
                            countyID['ID_01143'] = '1708882944';
                            countyID['ID_01147'] = '1725176960';
                            countyID['ID_00820'] = '1728523008';
                            countyID['ID_00816'] = '1755444992';
                            countyID['ID_00588'] = '1801757952';
                            countyID['ID_00602'] = '1831655936';
                            countyID['ID_01415'] = '1834034048';
                            countyID['ID_01428'] = '1834082048';
                            countyID['ID_01146'] = '1874125056';
                            countyID['ID_01126'] = '1884268032';
                            countyID['ID_01144'] = '1897900032';
                            countyID['ID_00589'] = '1964217984';
                            countyID['ID_00808'] = '1967777024';
                            countyID['ID_01419'] = '1978628992';
                            countyID['ID_00596'] = '1984066944';
                            countyID['ID_00815'] = '1989504000';
                            countyID['ID_00599'] = '1996177024';
                            countyID['ID_01425'] = '2019879936';
                            countyID['ID_00814'] = '2104489984';
                            countyID['ID_00600'] = '2126109952';
                            countyID['ID_01130'] = '2145431040';
                            countyID['ID_00824'] = '2160710912';
                            countyID['ID_01145'] = '2194643968';
                            countyID['ID_01141'] = '2221378048';
                            countyID['ID_01132'] = '2243121920';
                            countyID['ID_01140'] = '2255220992';
                            countyID['ID_01135'] = '2311098112';
                            countyID['ID_01137'] = '2332475904';
                            countyID['ID_01423'] = '2396642048';
                            countyID['ID_01149'] = '2408646912';
                            countyID['ID_00590'] = '2439682048';
                            countyID['ID_00807'] = '2560901888';
                            countyID['ID_00819'] = '2680833024';
                            countyID['ID_00810'] = '2691553024';
                            countyID['ID_02961'] = '121400000';
                            countyID['ID_02962'] = '1152985984';
                            countyID['ID_01995'] = '1161372032';
                            countyID['ID_01535'] = '1347586048';
                            countyID['ID_00105'] = '1539963008';
                            countyID['ID_02356'] = '1560236032';
                            countyID['ID_00984'] = '1636454016';
                            countyID['ID_02359'] = '1854269056';
                            countyID['ID_01534'] = '1912272000';
                            countyID['ID_02685'] = '1914045952';
                            countyID['ID_01993'] = '1938247040';
                            countyID['ID_00097'] = '2047560960';
                            countyID['ID_02965'] = '2128360960';
                            countyID['ID_02680'] = '2468814080';
                            countyID['ID_01996'] = '2480616960';
                            countyID['ID_00982'] = '2498416128';
                            countyID['ID_01539'] = '2606493952';
                            countyID['ID_00725'] = '2628033024';
                            countyID['ID_00106'] = '2641819904';
                            countyID['ID_00099'] = '2980378880';
                            countyID['ID_02681'] = '3254226944';
                            countyID['ID_00449'] = '3341342976';
                            countyID['ID_01536'] = '3403107072';
                            countyID['ID_01287'] = '3596741888';
                            countyID['ID_02963'] = '3598582016';
                            countyID['ID_01997'] = '3603505920';
                            countyID['ID_00104'] = '3644135936';
                            countyID['ID_01532'] = '3752417024';
                            countyID['ID_01289'] = '3871582976';
                            countyID['ID_00448'] = '4081430016';
                            countyID['ID_02677'] = '4238423040';
                            countyID['ID_02683'] = '4423395840';
                            countyID['ID_02674'] = '4773691904';
                            countyID['ID_02966'] = '5011554816';
                            countyID['ID_00983'] = '5534983168';
                            countyID['ID_02676'] = '5752061952';
                            countyID['ID_01286'] = '6612349952';
                            countyID['ID_00100'] = '7083837952';
                            countyID['ID_00098'] = '7639710208';
                            countyID['ID_00101'] = '7896826880';
                            countyID['ID_02358'] = '8234229760';
                            countyID['ID_00102'] = '8496702976';
                            countyID['ID_01994'] = '8543247872';
                            countyID['ID_00981'] = '9081385984';
                            countyID['ID_02964'] = '9241044992';
                            countyID['ID_01288'] = '9778246656';
                            countyID['ID_02682'] = '10146979840';
                            countyID['ID_02684'] = '10509870080';
                            countyID['ID_00107'] = '10817349632';
                            countyID['ID_01285'] = '10895120384';
                            countyID['ID_01538'] = '11761609728';
                            countyID['ID_00985'] = '12494659584';
                            countyID['ID_01533'] = '15431130112';
                            countyID['ID_00447'] = '16259649536';
                            countyID['ID_02357'] = '18664699904';
                            countyID['ID_00473'] = '21061560320';
                            countyID['ID_02960'] = '26368350208';
                            countyID['ID_01998'] = '51947229184';
                            countyID['ID_02314'] = '85557536';
                            countyID['ID_02318'] = '388229088';
                            countyID['ID_02319'] = '396268608';
                            countyID['ID_01475'] = '976194304';
                            countyID['ID_02312'] = '1003587968';
                            countyID['ID_01931'] = '1023633024';
                            countyID['ID_01920'] = '1402718976';
                            countyID['ID_01486'] = '1419419008';
                            countyID['ID_01933'] = '1442766976';
                            countyID['ID_01466'] = '1575639040';
                            countyID['ID_01919'] = '1781725056';
                            countyID['ID_01488'] = '1871636992';
                            countyID['ID_01934'] = '1881080064';
                            countyID['ID_01467'] = '1913031040';
                            countyID['ID_01484'] = '1979289984';
                            countyID['ID_01469'] = '2039410944';
                            countyID['ID_02649'] = '2067069952';
                            countyID['ID_01923'] = '2176231936';
                            countyID['ID_01482'] = '2267965952';
                            countyID['ID_01925'] = '2361959936';
                            countyID['ID_01468'] = '2514094080';
                            countyID['ID_01936'] = '2624701952';
                            countyID['ID_01924'] = '2763650048';
                            countyID['ID_01937'] = '2893668096';
                            countyID['ID_01476'] = '2957896960';
                            countyID['ID_01472'] = '3024207872';
                            countyID['ID_01477'] = '3177789952';
                            countyID['ID_01464'] = '3268464896';
                            countyID['ID_01479'] = '3316304896';
                            countyID['ID_01487'] = '3332307968';
                            countyID['ID_01202'] = '3334326016';
                            countyID['ID_02317'] = '3496937984';
                            countyID['ID_01471'] = '3918291968';
                            countyID['ID_01193'] = '3970627072';
                            countyID['ID_02650'] = '4120673024';
                            countyID['ID_01938'] = '4179523072';
                            countyID['ID_01480'] = '4243421952';
                            countyID['ID_01208'] = '4362911744';
                            countyID['ID_01465'] = '4382461952';
                            countyID['ID_01935'] = '4578494976';
                            countyID['ID_01470'] = '4605712896';
                            countyID['ID_01930'] = '4761814016';
                            countyID['ID_01929'] = '4781970944';
                            countyID['ID_01473'] = '4793671168';
                            countyID['ID_01481'] = '5256451072';
                            countyID['ID_02648'] = '5508389888';
                            countyID['ID_01927'] = '5596502016';
                            countyID['ID_02320'] = '5682035200';
                            countyID['ID_02313'] = '5803373056';
                            countyID['ID_02316'] = '6117619200';
                            countyID['ID_01474'] = '6123780096';
                            countyID['ID_01926'] = '6179980800';
                            countyID['ID_02315'] = '6521670144';
                            countyID['ID_01928'] = '6617333760';
                            countyID['ID_01483'] = '6676021248';
                            countyID['ID_01189'] = '6723614208';
                            countyID['ID_01478'] = '7634152960';
                            countyID['ID_01922'] = '8206440960';
                            countyID['ID_01485'] = '8342178816';
                            countyID['ID_01199'] = '8389229056';
                            countyID['ID_01921'] = '8622003200';
                            countyID['ID_02311'] = '10326899712';
                            countyID['ID_01932'] = '12285070336';
                            countyID['ID_01190'] = '12361159680';
                            countyID['ID_02353'] = '956486208';
                            countyID['ID_01991'] = '1062448000';
                            countyID['ID_01990'] = '1328429952';
                            countyID['ID_02669'] = '1565662976';
                            countyID['ID_01521'] = '1618456064';
                            countyID['ID_01523'] = '1722025984';
                            countyID['ID_01992'] = '1903891968';
                            countyID['ID_01989'] = '2384239104';
                            countyID['ID_01426'] = '1104075008';
                            countyID['ID_01417'] = '1518195968';
                            countyID['ID_01424'] = '2424432896';
                            countyID['ID_01773'] = '158114704';
                            countyID['ID_02180'] = '630806272';
                            countyID['ID_02155'] = '709135872';
                            countyID['ID_02170'] = '761356800';
                            countyID['ID_02162'] = '800879424';
                            countyID['ID_02184'] = '905658624';
                            countyID['ID_02185'] = '1223869056';
                            countyID['ID_02188'] = '1257337984';
                            countyID['ID_02190'] = '1302432000';
                            countyID['ID_01709'] = '1330711040';
                            countyID['ID_02176'] = '1337293056';
                            countyID['ID_01700'] = '1384930944';
                            countyID['ID_02156'] = '1407427968';
                            countyID['ID_02163'] = '1407565056';
                            countyID['ID_02198'] = '1416548992';
                            countyID['ID_02171'] = '1439691008';
                            countyID['ID_02154'] = '1460785024';
                            countyID['ID_02159'] = '1469389056';
                            countyID['ID_02196'] = '1481281024';
                            countyID['ID_01696'] = '1506585984';
                            countyID['ID_02206'] = '1509453056';
                            countyID['ID_02165'] = '1515741056';
                            countyID['ID_01724'] = '1549058944';
                            countyID['ID_02167'] = '1555689984';
                            countyID['ID_02172'] = '1565286016';
                            countyID['ID_02158'] = '1570616960';
                            countyID['ID_02181'] = '1649976064';
                            countyID['ID_02200'] = '1651849984';
                            countyID['ID_02201'] = '1679968000';
                            countyID['ID_01751'] = '1700226944';
                            countyID['ID_02166'] = '1727138944';
                            countyID['ID_02177'] = '1761913984';
                            countyID['ID_02169'] = '1783341056';
                            countyID['ID_02187'] = '1802498048';
                            countyID['ID_01721'] = '1826078976';
                            countyID['ID_02195'] = '1884532992';
                            countyID['ID_01717'] = '1924182016';
                            countyID['ID_02168'] = '1934425984';
                            countyID['ID_02189'] = '1964401024';
                            countyID['ID_01713'] = '1974067968';
                            countyID['ID_01711'] = '1991463040';
                            countyID['ID_01720'] = '2031879040';
                            countyID['ID_02157'] = '2065708032';
                            countyID['ID_02178'] = '2087554048';
                            countyID['ID_02204'] = '2164094976';
                            countyID['ID_02186'] = '2266290944';
                            countyID['ID_02194'] = '2339869952';
                            countyID['ID_01710'] = '2376986880';
                            countyID['ID_02199'] = '2409328896';
                            countyID['ID_01723'] = '2430395904';
                            countyID['ID_01712'] = '2546689024';
                            countyID['ID_02205'] = '2620044032';
                            countyID['ID_01699'] = '2630557952';
                            countyID['ID_02174'] = '2633019904';
                            countyID['ID_02161'] = '2642341120';
                            countyID['ID_02179'] = '2687436032';
                            countyID['ID_02173'] = '2702148096';
                            countyID['ID_02202'] = '2851659008';
                            countyID['ID_02191'] = '2896139008';
                            countyID['ID_02175'] = '2985608960';
                            countyID['ID_01701'] = '3133328896';
                            countyID['ID_02182'] = '3438085888';
                            countyID['ID_02164'] = '4103955968';
                            countyID['ID_02192'] = '4656375808';
                            countyID['ID_02160'] = '4915061248';
                            countyID['ID_02193'] = '5101663232';
                            countyID['ID_02197'] = '5175635968';
                            countyID['ID_00467'] = '308727488';
                            countyID['ID_00470'] = '336161696';
                            countyID['ID_00735'] = '366664288';
                            countyID['ID_01009'] = '372284000';
                            countyID['ID_00738'] = '389190688';
                            countyID['ID_00741'] = '391703104';
                            countyID['ID_01672'] = '415198688';
                            countyID['ID_01556'] = '419990912';
                            countyID['ID_01294'] = '431395488';
                            countyID['ID_00463'] = '432283808';
                            countyID['ID_00471'] = '450609408';
                            countyID['ID_01599'] = '463948096';
                            countyID['ID_00740'] = '473586496';
                            countyID['ID_01006'] = '475262592';
                            countyID['ID_00993'] = '477308192';
                            countyID['ID_01586'] = '477576096';
                            countyID['ID_00450'] = '479824384';
                            countyID['ID_00455'] = '503344096';
                            countyID['ID_01548'] = '504031808';
                            countyID['ID_01572'] = '506035712';
                            countyID['ID_01545'] = '508851808';
                            countyID['ID_01612'] = '516536608';
                            countyID['ID_01574'] = '518171008';
                            countyID['ID_01308'] = '541613568';
                            countyID['ID_01304'] = '544880704';
                            countyID['ID_01002'] = '546046080';
                            countyID['ID_00454'] = '559100224';
                            countyID['ID_01670'] = '559659392';
                            countyID['ID_01569'] = '560435520';
                            countyID['ID_00728'] = '580210816';
                            countyID['ID_00996'] = '588345728';
                            countyID['ID_01307'] = '601025728';
                            countyID['ID_01673'] = '601112320';
                            countyID['ID_01659'] = '601897024';
                            countyID['ID_00457'] = '609232768';
                            countyID['ID_01662'] = '620362816';
                            countyID['ID_01012'] = '623374976';
                            countyID['ID_01301'] = '629480576';
                            countyID['ID_01661'] = '644223616';
                            countyID['ID_01022'] = '644987072';
                            countyID['ID_01544'] = '646879616';
                            countyID['ID_01671'] = '647809216';
                            countyID['ID_01613'] = '666820480';
                            countyID['ID_00729'] = '667811968';
                            countyID['ID_01290'] = '669707904';
                            countyID['ID_01593'] = '670585600';
                            countyID['ID_01021'] = '677273024';
                            countyID['ID_01618'] = '693033984';
                            countyID['ID_01015'] = '704894528';
                            countyID['ID_01305'] = '705987968';
                            countyID['ID_01689'] = '716752128';
                            countyID['ID_01302'] = '726147328';
                            countyID['ID_01007'] = '730803968';
                            countyID['ID_00989'] = '731181824';
                            countyID['ID_01013'] = '731466816';
                            countyID['ID_01555'] = '732793088';
                            countyID['ID_00733'] = '736328576';
                            countyID['ID_01291'] = '739164608';
                            countyID['ID_00727'] = '751329088';
                            countyID['ID_01688'] = '752297216';
                            countyID['ID_01580'] = '765301312';
                            countyID['ID_01577'] = '766714496';
                            countyID['ID_00999'] = '784793408';
                            countyID['ID_00460'] = '803754816';
                            countyID['ID_01674'] = '808643200';
                            countyID['ID_01024'] = '811541824';
                            countyID['ID_00997'] = '819714880';
                            countyID['ID_00464'] = '833785088';
                            countyID['ID_00987'] = '834304576';
                            countyID['ID_01567'] = '837697216';
                            countyID['ID_01010'] = '840000000';
                            countyID['ID_01650'] = '841456384';
                            countyID['ID_01668'] = '843508096';
                            countyID['ID_01568'] = '851299520';
                            countyID['ID_01594'] = '856613120';
                            countyID['ID_01639'] = '868783616';
                            countyID['ID_01293'] = '878994496';
                            countyID['ID_00726'] = '879428416';
                            countyID['ID_01684'] = '879722880';
                            countyID['ID_01303'] = '885630016';
                            countyID['ID_00472'] = '892163584';
                            countyID['ID_01638'] = '892610816';
                            countyID['ID_01564'] = '899449024';
                            countyID['ID_00461'] = '899630976';
                            countyID['ID_00734'] = '909228672';
                            countyID['ID_00742'] = '917743872';
                            countyID['ID_01003'] = '921475584';
                            countyID['ID_01680'] = '921538880';
                            countyID['ID_01011'] = '928246400';
                            countyID['ID_00990'] = '942767872';
                            countyID['ID_01573'] = '947944192';
                            countyID['ID_01588'] = '953542720';
                            countyID['ID_00453'] = '958276480';
                            countyID['ID_01306'] = '972645824';
                            countyID['ID_01000'] = '975612224';
                            countyID['ID_00465'] = '978250176';
                            countyID['ID_01298'] = '1001608000';
                            countyID['ID_01018'] = '1003452992';
                            countyID['ID_00462'] = '1013692032';
                            countyID['ID_01001'] = '1015120000';
                            countyID['ID_01311'] = '1017299968';
                            countyID['ID_00468'] = '1020281984';
                            countyID['ID_00991'] = '1024750976';
                            countyID['ID_01651'] = '1036755008';
                            countyID['ID_01589'] = '1037654016';
                            countyID['ID_01296'] = '1072224000';
                            countyID['ID_00739'] = '1074572032';
                            countyID['ID_00459'] = '1087154944';
                            countyID['ID_01660'] = '1092130048';
                            countyID['ID_01583'] = '1098929024';
                            countyID['ID_00737'] = '1104466048';
                            countyID['ID_00732'] = '1104733952';
                            countyID['ID_01020'] = '1109127040';
                            countyID['ID_01017'] = '1114686976';
                            countyID['ID_00451'] = '1129148032';
                            countyID['ID_01312'] = '1132610944';
                            countyID['ID_01540'] = '1137035008';
                            countyID['ID_01575'] = '1141905024';
                            countyID['ID_00736'] = '1145713024';
                            countyID['ID_00730'] = '1156116992';
                            countyID['ID_01579'] = '1158521984';
                            countyID['ID_00994'] = '1170407936';
                            countyID['ID_01675'] = '1177218944';
                            countyID['ID_01576'] = '1188114048';
                            countyID['ID_01004'] = '1190214016';
                            countyID['ID_01590'] = '1201414016';
                            countyID['ID_01005'] = '1215974016';
                            countyID['ID_01565'] = '1222061056';
                            countyID['ID_01310'] = '1237235968';
                            countyID['ID_01647'] = '1241648000';
                            countyID['ID_01019'] = '1250179968';
                            countyID['ID_00988'] = '1268578944';
                            countyID['ID_01023'] = '1276982016';
                            countyID['ID_01546'] = '1284349056';
                            countyID['ID_01292'] = '1284806016';
                            countyID['ID_00469'] = '1292600064';
                            countyID['ID_01014'] = '1298162048';
                            countyID['ID_00452'] = '1313334016';
                            countyID['ID_01635'] = '1320662016';
                            countyID['ID_01016'] = '1326292992';
                            countyID['ID_00998'] = '1327612032';
                            countyID['ID_00456'] = '1363588992';
                            countyID['ID_01300'] = '1363976960';
                            countyID['ID_01601'] = '1409351040';
                            countyID['ID_01299'] = '1410496000';
                            countyID['ID_01585'] = '1478110976';
                            countyID['ID_01008'] = '1489495040';
                            countyID['ID_01551'] = '1546584960';
                            countyID['ID_00458'] = '1587728000';
                            countyID['ID_01309'] = '1662194048';
                            countyID['ID_01295'] = '1670803968';
                            countyID['ID_01558'] = '1742567936';
                            countyID['ID_01543'] = '1757182976';
                            countyID['ID_00731'] = '1762755968';
                            countyID['ID_00995'] = '2003554048';
                            countyID['ID_00992'] = '2072567040';
                            countyID['ID_01297'] = '2090886016';
                            countyID['ID_00986'] = '2141836032';
                            countyID['ID_00466'] = '2311461888';
                            countyID['ID_02269'] = '1053779968';
                            countyID['ID_02268'] = '1164083968';
                            countyID['ID_02304'] = '1215238016';
                            countyID['ID_01845'] = '1240073984';
                            countyID['ID_01865'] = '1452724992';
                            countyID['ID_01859'] = '1521282048';
                            countyID['ID_02288'] = '1546701056';
                            countyID['ID_02302'] = '1718832000';
                            countyID['ID_02282'] = '1888030976';
                            countyID['ID_01909'] = '1962151936';
                            countyID['ID_02299'] = '2011428992';
                            countyID['ID_02276'] = '2196548096';
                            countyID['ID_01854'] = '2524680960';
                            countyID['ID_02298'] = '2726158080';
                            countyID['ID_01848'] = '2782925056';
                            countyID['ID_01857'] = '2786816000';
                            countyID['ID_02274'] = '2832154880';
                            countyID['ID_02309'] = '2880035072';
                            countyID['ID_02293'] = '3108143104';
                            countyID['ID_02300'] = '3111624960';
                            countyID['ID_02297'] = '3222267904';
                            countyID['ID_01913'] = '3285555968';
                            countyID['ID_02289'] = '3530298880';
                            countyID['ID_01850'] = '3636974080';
                            countyID['ID_01858'] = '3763205120';
                            countyID['ID_01887'] = '4492524032';
                            countyID['ID_01866'] = '4569116160';
                            countyID['ID_01869'] = '4569219072';
                            countyID['ID_01878'] = '4826507776';
                            countyID['ID_01895'] = '4833117184';
                            countyID['ID_01917'] = '4919000064';
                            countyID['ID_01891'] = '4975918080';
                            countyID['ID_02306'] = '5423377920';
                            countyID['ID_02303'] = '5779991040';
                            countyID['ID_02291'] = '6364310016';
                            countyID['ID_02301'] = '6643529216';
                            countyID['ID_02305'] = '6810800128';
                            countyID['ID_02273'] = '6846856192';
                            countyID['ID_02292'] = '7963532800';
                            countyID['ID_02294'] = '9491050496';
                            countyID['ID_01877'] = '11819119616';
                            countyID['ID_01918'] = '12745180160';
                            countyID['ID_02267'] = '19853580288';
                            countyID['ID_01846'] = '21956239360';
                            countyID['ID_00967'] = '414813792';
                            countyID['ID_00443'] = '459794304';
                            countyID['ID_00711'] = '515886400';
                            countyID['ID_00094'] = '576054208';
                            countyID['ID_00721'] = '578219008';
                            countyID['ID_02346'] = '609965888';
                            countyID['ID_00441'] = '614390592';
                            countyID['ID_00092'] = '649861184';
                            countyID['ID_02952'] = '657402816';
                            countyID['ID_02347'] = '727059776';
                            countyID['ID_01264'] = '746121728';
                            countyID['ID_00079'] = '791518272';
                            countyID['ID_00090'] = '814388288';
                            countyID['ID_01269'] = '829664768';
                            countyID['ID_02671'] = '836750400';
                            countyID['ID_00269'] = '848218368';
                            countyID['ID_00718'] = '870089024';
                            countyID['ID_01263'] = '890735680';
                            countyID['ID_00095'] = '896198592';
                            countyID['ID_01259'] = '932370880';
                            countyID['ID_02953'] = '955110080';
                            countyID['ID_00091'] = '956408128';
                            countyID['ID_02954'] = '963936896';
                            countyID['ID_02348'] = '973365120';
                            countyID['ID_02672'] = '981273728';
                            countyID['ID_00971'] = '983725568';
                            countyID['ID_00267'] = '984918720';
                            countyID['ID_00089'] = '997173376';
                            countyID['ID_02956'] = '1001779008';
                            countyID['ID_00707'] = '1029555008';
                            countyID['ID_00713'] = '1059017984';
                            countyID['ID_00086'] = '1070854016';
                            countyID['ID_00085'] = '1079155968';
                            countyID['ID_02345'] = '1082726016';
                            countyID['ID_01529'] = '1088182016';
                            countyID['ID_00712'] = '1107572992';
                            countyID['ID_00082'] = '1125777024';
                            countyID['ID_00710'] = '1132530944';
                            countyID['ID_00972'] = '1137528960';
                            countyID['ID_02959'] = '1144155008';
                            countyID['ID_00080'] = '1148994048';
                            countyID['ID_02355'] = '1149100032';
                            countyID['ID_00719'] = '1152045056';
                            countyID['ID_02349'] = '1212931968';
                            countyID['ID_02957'] = '1227874944';
                            countyID['ID_00446'] = '1240028032';
                            countyID['ID_00969'] = '1257737984';
                            countyID['ID_00976'] = '1280774016';
                            countyID['ID_01265'] = '1281438976';
                            countyID['ID_00714'] = '1298665984';
                            countyID['ID_02673'] = '1316466048';
                            countyID['ID_00088'] = '1329602048';
                            countyID['ID_02670'] = '1346942976';
                            countyID['ID_00968'] = '1366994048';
                            countyID['ID_01526'] = '1396619008';
                            countyID['ID_00717'] = '1404824064';
                            countyID['ID_01267'] = '1406413952';
                            countyID['ID_00093'] = '1453506944';
                            countyID['ID_00974'] = '1457054976';
                            countyID['ID_01258'] = '1462108032';
                            countyID['ID_00966'] = '1473160960';
                            countyID['ID_01260'] = '1479320064';
                            countyID['ID_00440'] = '1482413952';
                            countyID['ID_00708'] = '1490537984';
                            countyID['ID_00087'] = '1503976960';
                            countyID['ID_00961'] = '1512764032';
                            countyID['ID_00083'] = '1526557952';
                            countyID['ID_00081'] = '1556808960';
                            countyID['ID_00444'] = '1562205952';
                            countyID['ID_00962'] = '1600765056';
                            countyID['ID_00265'] = '1603745024';
                            countyID['ID_00970'] = '1614531968';
                            countyID['ID_00964'] = '1635076992';
                            countyID['ID_01261'] = '1680834944';
                            countyID['ID_01528'] = '1703587968';
                            countyID['ID_00270'] = '1752270976';
                            countyID['ID_00266'] = '1772199040';
                            countyID['ID_00084'] = '1822540032';
                            countyID['ID_00716'] = '1837278976';
                            countyID['ID_00720'] = '1848770048';
                            countyID['ID_00965'] = '1853347968';
                            countyID['ID_00973'] = '1855453952';
                            countyID['ID_00715'] = '1855680000';
                            countyID['ID_02955'] = '1877473024';
                            countyID['ID_01262'] = '1964564992';
                            countyID['ID_01268'] = '1964697984';
                            countyID['ID_00963'] = '2055741056';
                            countyID['ID_02350'] = '2131522048';
                            countyID['ID_00445'] = '2153267968';
                            countyID['ID_00096'] = '2167580928';
                            countyID['ID_02354'] = '2214962944';
                            countyID['ID_00709'] = '2234917120';
                            countyID['ID_02351'] = '2241880064';
                            countyID['ID_01266'] = '2248891904';
                            countyID['ID_00706'] = '2250779904';
                            countyID['ID_01257'] = '2326764032';
                            countyID['ID_01527'] = '2448382976';
                            countyID['ID_00442'] = '2580315904';
                            countyID['ID_00975'] = '2704687104';
                            countyID['ID_02352'] = '2893836032';
                            countyID['ID_00268'] = '2939958016';
                            countyID['ID_02958'] = '3064933888';
                            countyID['ID_02790'] = '223101904';
                            countyID['ID_02764'] = '383149184';
                            countyID['ID_02753'] = '417568384';
                            countyID['ID_02801'] = '427554688';
                            countyID['ID_02778'] = '493127200';
                            countyID['ID_02462'] = '556883968';
                            countyID['ID_02761'] = '571436416';
                            countyID['ID_02750'] = '604697984';
                            countyID['ID_02730'] = '665311680';
                            countyID['ID_02767'] = '674797824';
                            countyID['ID_02421'] = '759012928';
                            countyID['ID_02733'] = '790033472';
                            countyID['ID_02431'] = '791610880';
                            countyID['ID_02469'] = '792577728';
                            countyID['ID_02472'] = '800148992';
                            countyID['ID_02796'] = '800653568';
                            countyID['ID_02429'] = '808026816';
                            countyID['ID_02365'] = '829903232';
                            countyID['ID_02787'] = '865673472';
                            countyID['ID_02768'] = '869120896';
                            countyID['ID_02466'] = '869555008';
                            countyID['ID_02771'] = '878079104';
                            countyID['ID_02718'] = '926029184';
                            countyID['ID_02749'] = '934029184';
                            countyID['ID_02448'] = '939710784';
                            countyID['ID_02724'] = '944520704';
                            countyID['ID_02456'] = '953341184';
                            countyID['ID_02728'] = '954121472';
                            countyID['ID_02735'] = '964055872';
                            countyID['ID_02759'] = '964946112';
                            countyID['ID_02446'] = '965691072';
                            countyID['ID_02739'] = '968246720';
                            countyID['ID_02691'] = '975346432';
                            countyID['ID_02717'] = '983222400';
                            countyID['ID_02450'] = '988668672';
                            countyID['ID_02736'] = '991061312';
                            countyID['ID_02371'] = '994310208';
                            countyID['ID_02430'] = '995668672';
                            countyID['ID_02779'] = '996667392';
                            countyID['ID_02710'] = '997892608';
                            countyID['ID_02741'] = '1014955008';
                            countyID['ID_02772'] = '1015596032';
                            countyID['ID_02743'] = '1021148032';
                            countyID['ID_02415'] = '1021772992';
                            countyID['ID_02383'] = '1024744000';
                            countyID['ID_02793'] = '1026408000';
                            countyID['ID_02734'] = '1027563008';
                            countyID['ID_02776'] = '1031817984';
                            countyID['ID_02694'] = '1040502976';
                            countyID['ID_02420'] = '1040550016';
                            countyID['ID_02785'] = '1044574976';
                            countyID['ID_02744'] = '1046275008';
                            countyID['ID_02719'] = '1049126016';
                            countyID['ID_02789'] = '1052616000';
                            countyID['ID_02784'] = '1053886016';
                            countyID['ID_02447'] = '1053894976';
                            countyID['ID_02799'] = '1057035008';
                            countyID['ID_02775'] = '1060782976';
                            countyID['ID_02693'] = '1064078016';
                            countyID['ID_02452'] = '1064865984';
                            countyID['ID_02721'] = '1067475968';
                            countyID['ID_02467'] = '1068200000';
                            countyID['ID_02715'] = '1072446976';
                            countyID['ID_02788'] = '1083010944';
                            countyID['ID_02460'] = '1095339008';
                            countyID['ID_02752'] = '1106621952';
                            countyID['ID_02708'] = '1112365952';
                            countyID['ID_02406'] = '1123145984';
                            countyID['ID_02455'] = '1148993024';
                            countyID['ID_02695'] = '1151671040';
                            countyID['ID_02401'] = '1156237056';
                            countyID['ID_02465'] = '1158092032';
                            countyID['ID_02766'] = '1163340032';
                            countyID['ID_02440'] = '1170455040';
                            countyID['ID_02459'] = '1171655936';
                            countyID['ID_02690'] = '1185826944';
                            countyID['ID_02373'] = '1199606016';
                            countyID['ID_02800'] = '1244562048';
                            countyID['ID_02777'] = '1254888960';
                            countyID['ID_02426'] = '1262582016';
                            countyID['ID_02770'] = '1292304000';
                            countyID['ID_02757'] = '1294492032';
                            countyID['ID_02720'] = '1306941056';
                            countyID['ID_02763'] = '1308267008';
                            countyID['ID_02792'] = '1319112960';
                            countyID['ID_02364'] = '1330541952';
                            countyID['ID_02361'] = '1336514048';
                            countyID['ID_02773'] = '1376269952';
                            countyID['ID_02794'] = '1405054976';
                            countyID['ID_02706'] = '1449421056';
                            countyID['ID_02441'] = '1549587968';
                            countyID['ID_02782'] = '1702419968';
                            countyID['ID_02480'] = '985764416';
                            countyID['ID_02526'] = '1025332992';
                            countyID['ID_02538'] = '1032587008';
                            countyID['ID_02400'] = '1036315008';
                            countyID['ID_02437'] = '1037262016';
                            countyID['ID_02546'] = '1040569984';
                            countyID['ID_02530'] = '1077755008';
                            countyID['ID_02509'] = '1096701056';
                            countyID['ID_02520'] = '1097235968';
                            countyID['ID_02497'] = '1098406016';
                            countyID['ID_02525'] = '1115232000';
                            countyID['ID_02486'] = '1116716032';
                            countyID['ID_02507'] = '1117600000';
                            countyID['ID_02547'] = '1118443008';
                            countyID['ID_02451'] = '1123316992';
                            countyID['ID_02539'] = '1124903936';
                            countyID['ID_02411'] = '1124967040';
                            countyID['ID_02536'] = '1127879936';
                            countyID['ID_02479'] = '1127965056';
                            countyID['ID_02521'] = '1132956032';
                            countyID['ID_02387'] = '1133041024';
                            countyID['ID_02513'] = '1147265024';
                            countyID['ID_02489'] = '1186444032';
                            countyID['ID_02491'] = '1215048960';
                            countyID['ID_02552'] = '1225705984';
                            countyID['ID_02476'] = '1255597952';
                            countyID['ID_02482'] = '1287981056';
                            countyID['ID_02481'] = '1296631040';
                            countyID['ID_02550'] = '1299805952';
                            countyID['ID_02485'] = '1300662016';
                            countyID['ID_02529'] = '1306338944';
                            countyID['ID_02494'] = '1323873024';
                            countyID['ID_02548'] = '1340365952';
                            countyID['ID_02522'] = '1360873984';
                            countyID['ID_02499'] = '1377565952';
                            countyID['ID_02386'] = '1377618944';
                            countyID['ID_02506'] = '1385494016';
                            countyID['ID_02495'] = '1386934016';
                            countyID['ID_02442'] = '1436237056';
                            countyID['ID_02533'] = '1452999040';
                            countyID['ID_02493'] = '1460349056';
                            countyID['ID_02531'] = '1461451008';
                            countyID['ID_02487'] = '1465334016';
                            countyID['ID_02379'] = '1469138944';
                            countyID['ID_02534'] = '1471922944';
                            countyID['ID_02403'] = '1473276032';
                            countyID['ID_02519'] = '1474403968';
                            countyID['ID_02515'] = '1474498944';
                            countyID['ID_02512'] = '1474834944';
                            countyID['ID_02545'] = '1475188992';
                            countyID['ID_02498'] = '1475844992';
                            countyID['ID_02501'] = '1476209024';
                            countyID['ID_02502'] = '1478528000';
                            countyID['ID_02541'] = '1478894976';
                            countyID['ID_02528'] = '1478935040';
                            countyID['ID_02503'] = '1480356992';
                            countyID['ID_02362'] = '1482770944';
                            countyID['ID_02549'] = '1483592960';
                            countyID['ID_02473'] = '1484153984';
                            countyID['ID_02527'] = '1486120960';
                            countyID['ID_02395'] = '1489022976';
                            countyID['ID_02404'] = '1489272960';
                            countyID['ID_02543'] = '1490850944';
                            countyID['ID_02385'] = '1493778048';
                            countyID['ID_02424'] = '1494179968';
                            countyID['ID_02544'] = '1495047040';
                            countyID['ID_02514'] = '1496381056';
                            countyID['ID_02443'] = '1500066944';
                            countyID['ID_02510'] = '1500731008';
                            countyID['ID_02496'] = '1502532992';
                            countyID['ID_02392'] = '1503287040';
                            countyID['ID_02477'] = '1507300992';
                            countyID['ID_02540'] = '1514968064';
                            countyID['ID_02394'] = '1518915968';
                            countyID['ID_02439'] = '1522007040';
                            countyID['ID_02492'] = '1524071040';
                            countyID['ID_02478'] = '1529698944';
                            countyID['ID_02380'] = '1530109952';
                            countyID['ID_02475'] = '1575501952';
                            countyID['ID_02444'] = '1590355968';
                            countyID['ID_02384'] = '1647332992';
                            countyID['ID_02532'] = '1655213952';
                            countyID['ID_02542'] = '1786749952';
                            countyID['ID_02523'] = '1797638016';
                            countyID['ID_02393'] = '1799821056';
                            countyID['ID_02524'] = '1804828032';
                            countyID['ID_02508'] = '1849742976';
                            countyID['ID_02500'] = '1853443968';
                            countyID['ID_02378'] = '1855117056';
                            countyID['ID_02504'] = '1856711040';
                            countyID['ID_02537'] = '1867410944';
                            countyID['ID_02505'] = '1891778944';
                            countyID['ID_02535'] = '1892791040';
                            countyID['ID_02516'] = '1989970048';
                            countyID['ID_02381'] = '2016406016';
                            countyID['ID_02490'] = '2234882048';
                            countyID['ID_02396'] = '2260630016';
                            countyID['ID_02551'] = '2461213952';
                            countyID['ID_02397'] = '2519333120';
                            countyID['ID_00660'] = '392642400';
                            countyID['ID_01236'] = '996156672';
                            countyID['ID_00648'] = '1018915008';
                            countyID['ID_00883'] = '1116729984';
                            countyID['ID_01977'] = '1180700032';
                            countyID['ID_01222'] = '1198727040';
                            countyID['ID_00886'] = '1226034048';
                            countyID['ID_00653'] = '1289346944';
                            countyID['ID_00880'] = '1295778944';
                            countyID['ID_00893'] = '1379360000';
                            countyID['ID_01235'] = '1397956992';
                            countyID['ID_01498'] = '1408995968';
                            countyID['ID_01239'] = '1477377024';
                            countyID['ID_00892'] = '1478552064';
                            countyID['ID_01494'] = '1480105984';
                            countyID['ID_00641'] = '1480839936';
                            countyID['ID_01218'] = '1488724992';
                            countyID['ID_01944'] = '1490956032';
                            countyID['ID_00901'] = '1495773056';
                            countyID['ID_01227'] = '1501276032';
                            countyID['ID_00662'] = '1521794048';
                            countyID['ID_00879'] = '1527462016';
                            countyID['ID_01223'] = '1538605056';
                            countyID['ID_01499'] = '1579299968';
                            countyID['ID_01221'] = '1610696960';
                            countyID['ID_01500'] = '1623783936';
                            countyID['ID_00646'] = '1645862016';
                            countyID['ID_00899'] = '1654692992';
                            countyID['ID_00649'] = '1656290944';
                            countyID['ID_00651'] = '1666727936';
                            countyID['ID_01502'] = '1668637952';
                            countyID['ID_01220'] = '1671304960';
                            countyID['ID_00645'] = '1671321984';
                            countyID['ID_00643'] = '1699593984';
                            countyID['ID_00656'] = '1762086016';
                            countyID['ID_01224'] = '1800764032';
                            countyID['ID_01945'] = '1817633024';
                            countyID['ID_01219'] = '1827283968';
                            countyID['ID_00891'] = '1852727040';
                            countyID['ID_01966'] = '1854034944';
                            countyID['ID_00647'] = '1857981952';
                            countyID['ID_01215'] = '1858125952';
                            countyID['ID_00895'] = '1858200064';
                            countyID['ID_01237'] = '1858429952';
                            countyID['ID_00904'] = '1858998016';
                            countyID['ID_01489'] = '1861081984';
                            countyID['ID_00654'] = '1863227008';
                            countyID['ID_01233'] = '1865373952';
                            countyID['ID_01503'] = '1866689024';
                            countyID['ID_00900'] = '1871627008';
                            countyID['ID_00902'] = '1880945024';
                            countyID['ID_01490'] = '1883678976';
                            countyID['ID_00903'] = '1889992960';
                            countyID['ID_01968'] = '1903757056';
                            countyID['ID_00644'] = '1953532032';
                            countyID['ID_00658'] = '2002216960';
                            countyID['ID_00640'] = '2016177024';
                            countyID['ID_00665'] = '2041681024';
                            countyID['ID_01501'] = '2051389952';
                            countyID['ID_00664'] = '2057232000';
                            countyID['ID_00878'] = '2075276032';
                            countyID['ID_00882'] = '2178235904';
                            countyID['ID_00894'] = '2193905920';
                            countyID['ID_00881'] = '2194948096';
                            countyID['ID_00889'] = '2227368960';
                            countyID['ID_01234'] = '2236099072';
                            countyID['ID_01230'] = '2250355968';
                            countyID['ID_01492'] = '2254696960';
                            countyID['ID_00884'] = '2274356992';
                            countyID['ID_00642'] = '2294409984';
                            countyID['ID_01496'] = '2295403008';
                            countyID['ID_00890'] = '2303737088';
                            countyID['ID_01225'] = '2306469888';
                            countyID['ID_00888'] = '2311574016';
                            countyID['ID_01228'] = '2314199040';
                            countyID['ID_01214'] = '2317405952';
                            countyID['ID_01231'] = '2319075072';
                            countyID['ID_01495'] = '2319244032';
                            countyID['ID_00657'] = '2320517888';
                            countyID['ID_01216'] = '2326520064';
                            countyID['ID_01491'] = '2327161088';
                            countyID['ID_00659'] = '2330761984';
                            countyID['ID_00652'] = '2331462912';
                            countyID['ID_01238'] = '2356322048';
                            countyID['ID_00898'] = '2366348032';
                            countyID['ID_01963'] = '2445701120';
                            countyID['ID_01232'] = '2524285952';
                            countyID['ID_01506'] = '2533234944';
                            countyID['ID_00887'] = '2580943104';
                            countyID['ID_01504'] = '2583544064';
                            countyID['ID_00897'] = '2641496064';
                            countyID['ID_01229'] = '2735198976';
                            countyID['ID_01497'] = '2769776128';
                            countyID['ID_01493'] = '2775599104';
                            countyID['ID_00666'] = '2779043072';
                            countyID['ID_00885'] = '2783425024';
                            countyID['ID_01217'] = '2783589888';
                            countyID['ID_00650'] = '2844507904';
                            countyID['ID_00661'] = '2915680000';
                            countyID['ID_01226'] = '2937234944';
                            countyID['ID_01505'] = '2961133056';
                            countyID['ID_01967'] = '3061211904';
                            countyID['ID_00663'] = '3251332096';
                            countyID['ID_00655'] = '3372080128';
                            countyID['ID_00896'] = '3703329024';
                            countyID['ID_02018'] = '258768000';
                            countyID['ID_01692'] = '262195008';
                            countyID['ID_02081'] = '332992512';
                            countyID['ID_02016'] = '391886592';
                            countyID['ID_01676'] = '392766208';
                            countyID['ID_01598'] = '414046208';
                            countyID['ID_01587'] = '415044992';
                            countyID['ID_02076'] = '445777216';
                            countyID['ID_02024'] = '463554688';
                            countyID['ID_02075'] = '466635008';
                            countyID['ID_01628'] = '483492096';
                            countyID['ID_01627'] = '484893504';
                            countyID['ID_01667'] = '486017504';
                            countyID['ID_02019'] = '488948288';
                            countyID['ID_01666'] = '490632384';
                            countyID['ID_01624'] = '505489600';
                            countyID['ID_01606'] = '510864192';
                            countyID['ID_01645'] = '511174784';
                            countyID['ID_02084'] = '511282496';
                            countyID['ID_01561'] = '522742400';
                            countyID['ID_02025'] = '527282400';
                            countyID['ID_01619'] = '532252000';
                            countyID['ID_02117'] = '532533184';
                            countyID['ID_01600'] = '538061184';
                            countyID['ID_01603'] = '540937728';
                            countyID['ID_01637'] = '553843392';
                            countyID['ID_01620'] = '575419520';
                            countyID['ID_02131'] = '594673728';
                            countyID['ID_01617'] = '595897472';
                            countyID['ID_02089'] = '606585472';
                            countyID['ID_01596'] = '606873728';
                            countyID['ID_01646'] = '621927424';
                            countyID['ID_01682'] = '627487680';
                            countyID['ID_01592'] = '638067328';
                            countyID['ID_01630'] = '638843584';
                            countyID['ID_01648'] = '644243008';
                            countyID['ID_01681'] = '644381824';
                            countyID['ID_01656'] = '653877312';
                            countyID['ID_02106'] = '653905280';
                            countyID['ID_01679'] = '655468608';
                            countyID['ID_02062'] = '656969280';
                            countyID['ID_02104'] = '668125120';
                            countyID['ID_01636'] = '677331520';
                            countyID['ID_01631'] = '678455680';
                            countyID['ID_01549'] = '689784192';
                            countyID['ID_01609'] = '717833408';
                            countyID['ID_01655'] = '722067776';
                            countyID['ID_01622'] = '724666496';
                            countyID['ID_02107'] = '729770368';
                            countyID['ID_01687'] = '734648512';
                            countyID['ID_01607'] = '740825280';
                            countyID['ID_01563'] = '741450176';
                            countyID['ID_01616'] = '750178176';
                            countyID['ID_01642'] = '750369600';
                            countyID['ID_01677'] = '769288192';
                            countyID['ID_01649'] = '769916224';
                            countyID['ID_01604'] = '780240704';
                            countyID['ID_01610'] = '784464320';
                            countyID['ID_01644'] = '790416896';
                            countyID['ID_02059'] = '791042880';
                            countyID['ID_01562'] = '793479424';
                            countyID['ID_01629'] = '798865728';
                            countyID['ID_01614'] = '810995904';
                            countyID['ID_02063'] = '819846976';
                            countyID['ID_01608'] = '853073280';
                            countyID['ID_01597'] = '859728384';
                            countyID['ID_01571'] = '865301120';
                            countyID['ID_01683'] = '875192704';
                            countyID['ID_01685'] = '879740480';
                            countyID['ID_01678'] = '887974272';
                            countyID['ID_02097'] = '888387328';
                            countyID['ID_01653'] = '891830080';
                            countyID['ID_01632'] = '891983424';
                            countyID['ID_02145'] = '893004672';
                            countyID['ID_01621'] = '894065216';
                            countyID['ID_01691'] = '902720128';
                            countyID['ID_01626'] = '909351680';
                            countyID['ID_02022'] = '910427392';
                            countyID['ID_01570'] = '929806784';
                            countyID['ID_02021'] = '932270912';
                            countyID['ID_01654'] = '969940480';
                            countyID['ID_02065'] = '983253632';
                            countyID['ID_01578'] = '985273984';
                            countyID['ID_02113'] = '987113472';
                            countyID['ID_01554'] = '997200768';
                            countyID['ID_01550'] = '1000505024';
                            countyID['ID_01552'] = '1018758016';
                            countyID['ID_02052'] = '1038182016';
                            countyID['ID_02029'] = '1049676992';
                            countyID['ID_01652'] = '1060590016';
                            countyID['ID_02083'] = '1067297024';
                            countyID['ID_01623'] = '1076386944';
                            countyID['ID_01640'] = '1081351936';
                            countyID['ID_02043'] = '1103561984';
                            countyID['ID_02092'] = '1105415040';
                            countyID['ID_01553'] = '1123933056';
                            countyID['ID_01595'] = '1130968064';
                            countyID['ID_01634'] = '1132583040';
                            countyID['ID_02000'] = '1133974016';
                            countyID['ID_02074'] = '1143307008';
                            countyID['ID_02050'] = '1150550016';
                            countyID['ID_01615'] = '1186656000';
                            countyID['ID_02125'] = '1187111040';
                            countyID['ID_01605'] = '1206488064';
                            countyID['ID_01686'] = '1209729024';
                            countyID['ID_01602'] = '1215345024';
                            countyID['ID_01611'] = '1250540032';
                            countyID['ID_02057'] = '1262724992';
                            countyID['ID_02060'] = '1275345024';
                            countyID['ID_01641'] = '1286441984';
                            countyID['ID_01591'] = '1402738048';
                            countyID['ID_01560'] = '1403761024';
                            countyID['ID_01665'] = '1429006976';
                            countyID['ID_01633'] = '1430013952';
                            countyID['ID_02067'] = '1468968960';
                            countyID['ID_01625'] = '1521031936';
                            countyID['ID_01643'] = '1614281984';
                            countyID['ID_01690'] = '1705267968';
                            countyID['ID_02066'] = '1858323968';
                            countyID['ID_02020'] = '2037888000';
                            countyID['ID_02567'] = '438803392';
                            countyID['ID_02568'] = '498298912';
                            countyID['ID_00792'] = '551851776';
                            countyID['ID_00552'] = '625577792';
                            countyID['ID_00551'] = '695980416';
                            countyID['ID_00166'] = '722820608';
                            countyID['ID_02564'] = '751046784';
                            countyID['ID_01111'] = '765682624';
                            countyID['ID_00168'] = '877120768';
                            countyID['ID_00787'] = '931478720';
                            countyID['ID_00786'] = '977764288';
                            countyID['ID_00333'] = '1007739008';
                            countyID['ID_02222'] = '1044318016';
                            countyID['ID_02229'] = '1057758016';
                            countyID['ID_02807'] = '1089618944';
                            countyID['ID_02224'] = '1174326016';
                            countyID['ID_02805'] = '1179411968';
                            countyID['ID_01387'] = '1221805952';
                            countyID['ID_00174'] = '1371203968';
                            countyID['ID_01766'] = '1438424960';
                            countyID['ID_01388'] = '1443520000';
                            countyID['ID_01113'] = '1447915008';
                            countyID['ID_02560'] = '1474178048';
                            countyID['ID_01770'] = '1486940032';
                            countyID['ID_02226'] = '1535939968';
                            countyID['ID_02227'] = '1561204992';
                            countyID['ID_00167'] = '1580945024';
                            countyID['ID_00790'] = '1602236032';
                            countyID['ID_00003'] = '1617282944';
                            countyID['ID_02563'] = '1617667968';
                            countyID['ID_00791'] = '1617922944';
                            countyID['ID_02562'] = '1665428992';
                            countyID['ID_00793'] = '1678749056';
                            countyID['ID_01386'] = '1686931968';
                            countyID['ID_00171'] = '1696750976';
                            countyID['ID_02565'] = '1715549952';
                            countyID['ID_01767'] = '1734061056';
                            countyID['ID_00175'] = '1805014016';
                            countyID['ID_02221'] = '1833789056';
                            countyID['ID_00554'] = '1910498048';
                            countyID['ID_00169'] = '1955126016';
                            countyID['ID_02561'] = '1973175040';
                            countyID['ID_00788'] = '2019960960';
                            countyID['ID_01389'] = '2049392000';
                            countyID['ID_02228'] = '2058870016';
                            countyID['ID_02225'] = '2101175040';
                            countyID['ID_01385'] = '2155994112';
                            countyID['ID_01771'] = '2175738112';
                            countyID['ID_00789'] = '2189967104';
                            countyID['ID_00332'] = '2244636928';
                            countyID['ID_01772'] = '2267738880';
                            countyID['ID_01768'] = '2271388928';
                            countyID['ID_02808'] = '2275405056';
                            countyID['ID_01114'] = '2392837120';
                            countyID['ID_00173'] = '2460711936';
                            countyID['ID_00170'] = '2754864128';
                            countyID['ID_01769'] = '2766661888';
                            countyID['ID_02223'] = '2997501952';
                            countyID['ID_01112'] = '3038573056';
                            countyID['ID_00553'] = '3190385920';
                            countyID['ID_01390'] = '3243312128';
                            countyID['ID_02806'] = '3327842048';
                            countyID['ID_00172'] = '3413506048';
                            countyID['ID_02566'] = '3439270912';
                            countyID['ID_02906'] = '657066816';
                            countyID['ID_02905'] = '945691392';
                            countyID['ID_02902'] = '1180563968';
                            countyID['ID_02907'] = '1211926016';
                            countyID['ID_02901'] = '1890480000';
                            countyID['ID_02909'] = '2163262976';
                            countyID['ID_02908'] = '2246876928';
                            countyID['ID_02903'] = '2565935104';
                            countyID['ID_00244'] = '4110033920';
                            countyID['ID_02896'] = '4394195968';
                            countyID['ID_02898'] = '5378991104';
                            countyID['ID_00218'] = '6637258240';
                            countyID['ID_00042'] = '8799125504';
                            countyID['ID_02897'] = '10164160512';
                            countyID['ID_02910'] = '10258570240';
                            countyID['ID_00226'] = '17278660608';
                            countyID['ID_00412'] = '209643200';
                            countyID['ID_01512'] = '552061120';
                            countyID['ID_01517'] = '649416384';
                            countyID['ID_00667'] = '695511168';
                            countyID['ID_00247'] = '717505280';
                            countyID['ID_00250'] = '827292416';
                            countyID['ID_00670'] = '828079424';
                            countyID['ID_00669'] = '896842880';
                            countyID['ID_00911'] = '925091968';
                            countyID['ID_00908'] = '963235968';
                            countyID['ID_00905'] = '969804288';
                            countyID['ID_01240'] = '1074590976';
                            countyID['ID_00411'] = '1098563968';
                            countyID['ID_00910'] = '1132055040';
                            countyID['ID_00906'] = '1159265024';
                            countyID['ID_00249'] = '1185564032';
                            countyID['ID_00671'] = '1185644032';
                            countyID['ID_00416'] = '1212840960';
                            countyID['ID_00672'] = '1250163968';
                            countyID['ID_00907'] = '1272343040';
                            countyID['ID_00909'] = '1400574976';
                            countyID['ID_00673'] = '1549595008';
                            countyID['ID_00668'] = '1675988992';
                            countyID['ID_00413'] = '1709965056';
                            countyID['ID_01663'] = '116471400';
                            countyID['ID_01566'] = '150618896';
                            countyID['ID_01658'] = '267403808';
                            countyID['ID_01547'] = '1019737984';
                            countyID['ID_01557'] = '1025907968';
                            countyID['ID_01584'] = '1275731968';
                            countyID['ID_01582'] = '1365585024';
                            countyID['ID_01559'] = '1432510976';
                            countyID['ID_01657'] = '1598386048';
                            countyID['ID_01541'] = '1706996992';
                            countyID['ID_01581'] = '1811229056';
                            countyID['ID_01664'] = '2118135040';
                            countyID['ID_01542'] = '2400464896';
                            countyID['ID_01669'] = '3912877056';
                            countyID['ID_01031'] = '828028288';
                            countyID['ID_01101'] = '899168576';
                            countyID['ID_01038'] = '940660672';
                            countyID['ID_01360'] = '1078312960';
                            countyID['ID_01092'] = '1145558016';
                            countyID['ID_01091'] = '1202611968';
                            countyID['ID_01064'] = '1210803968';
                            countyID['ID_01062'] = '1232064000';
                            countyID['ID_01053'] = '1241182976';
                            countyID['ID_01044'] = '1269254016';
                            countyID['ID_01362'] = '1282232960';
                            countyID['ID_01346'] = '1293041024';
                            countyID['ID_01073'] = '1296525056';
                            countyID['ID_01043'] = '1299601024';
                            countyID['ID_01048'] = '1311489024';
                            countyID['ID_01094'] = '1326258048';
                            countyID['ID_01040'] = '1333769984';
                            countyID['ID_01030'] = '1337088000';
                            countyID['ID_01066'] = '1345849984';
                            countyID['ID_01050'] = '1374423040';
                            countyID['ID_01069'] = '1398882944';
                            countyID['ID_01370'] = '1404160000';
                            countyID['ID_01088'] = '1415852032';
                            countyID['ID_01032'] = '1422152960';
                            countyID['ID_01084'] = '1422924032';
                            countyID['ID_01087'] = '1432499968';
                            countyID['ID_01089'] = '1437627008';
                            countyID['ID_01320'] = '1440344064';
                            countyID['ID_01325'] = '1440758016';
                            countyID['ID_01367'] = '1450043008';
                            countyID['ID_01330'] = '1454689024';
                            countyID['ID_01075'] = '1459373952';
                            countyID['ID_01082'] = '1459426048';
                            countyID['ID_01366'] = '1461570048';
                            countyID['ID_01057'] = '1462633984';
                            countyID['ID_01085'] = '1463347968';
                            countyID['ID_01096'] = '1464001024';
                            countyID['ID_01359'] = '1465236992';
                            countyID['ID_01353'] = '1466946944';
                            countyID['ID_01086'] = '1466990976';
                            countyID['ID_01056'] = '1469480960';
                            countyID['ID_01099'] = '1470457984';
                            countyID['ID_01350'] = '1472313984';
                            countyID['ID_01095'] = '1479671040';
                            countyID['ID_01080'] = '1481111040';
                            countyID['ID_01061'] = '1483225984';
                            countyID['ID_01034'] = '1489694976';
                            countyID['ID_01345'] = '1549158016';
                            countyID['ID_01054'] = '1573351040';
                            countyID['ID_01097'] = '1585280000';
                            countyID['ID_01081'] = '1649763968';
                            countyID['ID_01315'] = '1665396992';
                            countyID['ID_01028'] = '1706073984';
                            countyID['ID_01033'] = '1747168000';
                            countyID['ID_01068'] = '1817305984';
                            countyID['ID_01361'] = '1826976000';
                            countyID['ID_01371'] = '1828441984';
                            countyID['ID_01029'] = '1829134976';
                            countyID['ID_01074'] = '1852525056';
                            countyID['ID_01055'] = '1867822976';
                            countyID['ID_01076'] = '1941337984';
                            countyID['ID_01079'] = '1972018048';
                            countyID['ID_01354'] = '2072285056';
                            countyID['ID_01027'] = '2080088064';
                            countyID['ID_01026'] = '2106188032';
                            countyID['ID_01051'] = '2137337984';
                            countyID['ID_01039'] = '2164470016';
                            countyID['ID_01042'] = '2193584896';
                            countyID['ID_01349'] = '2247237120';
                            countyID['ID_01090'] = '2326475008';
                            countyID['ID_01065'] = '2328602112';
                            countyID['ID_01058'] = '2370019072';
                            countyID['ID_01093'] = '2493035008';
                            countyID['ID_01070'] = '2613554944';
                            countyID['ID_01316'] = '2645850880';
                            countyID['ID_01071'] = '2704153088';
                            countyID['ID_01036'] = '2853775104';
                            countyID['ID_01045'] = '3020312064';
                            countyID['ID_01072'] = '3033124096';
                            countyID['ID_01041'] = '3033805056';
                            countyID['ID_01052'] = '3396056064';
                            countyID['ID_01046'] = '4036290048';
                            countyID['ID_01049'] = '4683738112';
                            countyID['ID_02707'] = '394228288';
                            countyID['ID_03102'] = '917697920';
                            countyID['ID_02722'] = '923268416';
                            countyID['ID_02996'] = '995285504';
                            countyID['ID_02762'] = '1057494016';
                            countyID['ID_02698'] = '1074487040';
                            countyID['ID_03086'] = '1095590016';
                            countyID['ID_02988'] = '1096487936';
                            countyID['ID_02997'] = '1112775936';
                            countyID['ID_03039'] = '1119928960';
                            countyID['ID_02974'] = '1121250944';
                            countyID['ID_03077'] = '1126509056';
                            countyID['ID_03065'] = '1128701056';
                            countyID['ID_02747'] = '1137720064';
                            countyID['ID_02969'] = '1161592960';
                            countyID['ID_03073'] = '1162284032';
                            countyID['ID_03088'] = '1204486016';
                            countyID['ID_02709'] = '1249553024';
                            countyID['ID_02700'] = '1272903936';
                            countyID['ID_02980'] = '1283815040';
                            countyID['ID_02979'] = '1292461952';
                            countyID['ID_03009'] = '1350903040';
                            countyID['ID_03013'] = '1354518016';
                            countyID['ID_03089'] = '1388929024';
                            countyID['ID_03062'] = '1390193024';
                            countyID['ID_03032'] = '1419728000';
                            countyID['ID_02972'] = '1429825024';
                            countyID['ID_03019'] = '1433794048';
                            countyID['ID_03085'] = '1444896000';
                            countyID['ID_03101'] = '1456007040';
                            countyID['ID_03001'] = '1459725952';
                            countyID['ID_03042'] = '1482275968';
                            countyID['ID_03005'] = '1486398976';
                            countyID['ID_03056'] = '1505097984';
                            countyID['ID_03048'] = '1524930944';
                            countyID['ID_02998'] = '1575175040';
                            countyID['ID_02977'] = '1582716032';
                            countyID['ID_02699'] = '1596909056';
                            countyID['ID_03108'] = '1621864960';
                            countyID['ID_02760'] = '1650598016';
                            countyID['ID_02701'] = '1653992960';
                            countyID['ID_03072'] = '1692164992';
                            countyID['ID_03066'] = '1713165056';
                            countyID['ID_03061'] = '1734550016';
                            countyID['ID_02993'] = '1820713984';
                            countyID['ID_03094'] = '1825170048';
                            countyID['ID_03098'] = '1831346048';
                            countyID['ID_03022'] = '1842333056';
                            countyID['ID_02712'] = '1844971008';
                            countyID['ID_03074'] = '1845304064';
                            countyID['ID_03097'] = '1850699008';
                            countyID['ID_02973'] = '1852115968';
                            countyID['ID_02714'] = '1921985024';
                            countyID['ID_02981'] = '1936905984';
                            countyID['ID_02713'] = '1944969984';
                            countyID['ID_03078'] = '1960200960';
                            countyID['ID_03011'] = '1966062976';
                            countyID['ID_03004'] = '1981394944';
                            countyID['ID_02986'] = '2063661952';
                            countyID['ID_02702'] = '2230757120';
                            countyID['ID_03063'] = '2230968064';
                            countyID['ID_03014'] = '2260512000';
                            countyID['ID_03059'] = '2275492096';
                            countyID['ID_03107'] = '2397486080';
                            countyID['ID_03026'] = '2447491072';
                            countyID['ID_02995'] = '2545714944';
                            countyID['ID_03038'] = '2587241984';
                            countyID['ID_02745'] = '2587642880';
                            countyID['ID_03006'] = '2707485952';
                            countyID['ID_02976'] = '2845890048';
                            countyID['ID_03080'] = '2913896960';
                            countyID['ID_02697'] = '3361466112';
                            countyID['ID_02704'] = '3406360064';
                            countyID['ID_03023'] = '3478697984';
                            countyID['ID_03024'] = '3655220992';
                            countyID['ID_03027'] = '3761381120';
                            countyID['ID_02999'] = '4329428992';
                            countyID['ID_03012'] = '4597405184';
                            countyID['ID_03064'] = '4718084096';
                            countyID['ID_02970'] = '5105199104';
                            countyID['ID_03060'] = '5107633152';
                            countyID['ID_03106'] = '5235769856';
                            countyID['ID_03087'] = '5463041024';
                            countyID['ID_03047'] = '6487763968';
                            countyID['ID_02687'] = '6909366784';
                            countyID['ID_03030'] = '8039502848';
                            countyID['ID_02994'] = '16180689920';
                            countyID['ID_00780'] = '1036092992';
                            countyID['ID_00549'] = '1046209984';
                            countyID['ID_02220'] = '1048320000';
                            countyID['ID_01760'] = '1048977024';
                            countyID['ID_00550'] = '1053131008';
                            countyID['ID_01755'] = '1054075008';
                            countyID['ID_02804'] = '1057862016';
                            countyID['ID_01761'] = '1059342976';
                            countyID['ID_00782'] = '1062094016';
                            countyID['ID_00547'] = '1069782016';
                            countyID['ID_01380'] = '1071716992';
                            countyID['ID_01377'] = '1074793984';
                            countyID['ID_00162'] = '1076393984';
                            countyID['ID_02557'] = '1083074048';
                            countyID['ID_00163'] = '1083886976';
                            countyID['ID_02219'] = '1090231040';
                            countyID['ID_00779'] = '1093250944';
                            countyID['ID_00164'] = '1098813952';
                            countyID['ID_00774'] = '1115424000';
                            countyID['ID_01384'] = '1118150016';
                            countyID['ID_02214'] = '1153799936';
                            countyID['ID_01108'] = '1165368064';
                            countyID['ID_01379'] = '1177584000';
                            countyID['ID_01754'] = '1185735040';
                            countyID['ID_01102'] = '1186733952';
                            countyID['ID_00784'] = '1197628032';
                            countyID['ID_02558'] = '1207747968';
                            countyID['ID_02210'] = '1209858048';
                            countyID['ID_00776'] = '1227001984';
                            countyID['ID_02212'] = '1233211008';
                            countyID['ID_00783'] = '1239848960';
                            countyID['ID_00546'] = '1262375040';
                            countyID['ID_01374'] = '1287367936';
                            countyID['ID_01763'] = '1289009024';
                            countyID['ID_02211'] = '1299602048';
                            countyID['ID_00165'] = '1309262976';
                            countyID['ID_01756'] = '1346621056';
                            countyID['ID_01752'] = '1379911936';
                            countyID['ID_01378'] = '1404766976';
                            countyID['ID_00002'] = '1430818048';
                            countyID['ID_02555'] = '1460180992';
                            countyID['ID_02207'] = '1476658048';
                            countyID['ID_02803'] = '1486637056';
                            countyID['ID_00001'] = '1497282944';
                            countyID['ID_01106'] = '1509964032';
                            countyID['ID_01765'] = '1518030976';
                            countyID['ID_00773'] = '1519218048';
                            countyID['ID_01376'] = '1524210048';
                            countyID['ID_02208'] = '1525926016';
                            countyID['ID_01373'] = '1534668032';
                            countyID['ID_02218'] = '1572756992';
                            countyID['ID_01757'] = '1577780992';
                            countyID['ID_02554'] = '1627140992';
                            countyID['ID_01105'] = '1636115968';
                            countyID['ID_01382'] = '1647885056';
                            countyID['ID_02216'] = '1671287040';
                            countyID['ID_01759'] = '1676374016';
                            countyID['ID_01381'] = '1751460992';
                            countyID['ID_01758'] = '1756286976';
                            countyID['ID_00000'] = '1774514944';
                            countyID['ID_00548'] = '1791117952';
                            countyID['ID_02215'] = '1799511040';
                            countyID['ID_02209'] = '1800400000';
                            countyID['ID_01383'] = '1807175936';
                            countyID['ID_02213'] = '1822402944';
                            countyID['ID_00778'] = '1829030016';
                            countyID['ID_02556'] = '1846028032';
                            countyID['ID_02217'] = '1850562944';
                            countyID['ID_01103'] = '1871923968';
                            countyID['ID_02559'] = '1877070976';
                            countyID['ID_00785'] = '1890951040';
                            countyID['ID_00777'] = '1903593984';
                            countyID['ID_01110'] = '1959841024';
                            countyID['ID_01104'] = '1981585024';
                            countyID['ID_01107'] = '1984402944';
                            countyID['ID_01764'] = '2008497024';
                            countyID['ID_00781'] = '2013053056';
                            countyID['ID_01375'] = '2099832960';
                            countyID['ID_01109'] = '2100125952';
                            countyID['ID_00331'] = '2252619008';
                            countyID['ID_00772'] = '2270313984';
                            countyID['ID_02553'] = '2390420992';
                            countyID['ID_00072'] = '160343200';
                            countyID['ID_02935'] = '690523520';
                            countyID['ID_01953'] = '795911616';
                            countyID['ID_02934'] = '1019808000';
                            countyID['ID_02338'] = '1028998016';
                            countyID['ID_01949'] = '1033641984';
                            countyID['ID_02327'] = '1056784000';
                            countyID['ID_01954'] = '1065995008';
                            countyID['ID_01978'] = '1074910976';
                            countyID['ID_01976'] = '1085090048';
                            countyID['ID_02928'] = '1087768960';
                            countyID['ID_01943'] = '1088286976';
                            countyID['ID_02321'] = '1091307008';
                            countyID['ID_01940'] = '1104352000';
                            countyID['ID_01950'] = '1110072064';
                            countyID['ID_02927'] = '1120695040';
                            countyID['ID_00071'] = '1127361024';
                            countyID['ID_02340'] = '1130972032';
                            countyID['ID_02335'] = '1131628032';
                            countyID['ID_01955'] = '1170381056';
                            countyID['ID_01972'] = '1175427968';
                            countyID['ID_01948'] = '1198370048';
                            countyID['ID_01952'] = '1201362944';
                            countyID['ID_02939'] = '1201841024';
                            countyID['ID_02333'] = '1216726016';
                            countyID['ID_02932'] = '1228569984';
                            countyID['ID_01964'] = '1228905984';
                            countyID['ID_02938'] = '1250146048';
                            countyID['ID_02926'] = '1269124992';
                            countyID['ID_01961'] = '1272776960';
                            countyID['ID_01965'] = '1275682048';
                            countyID['ID_02918'] = '1280462976';
                            countyID['ID_02659'] = '1292798976';
                            countyID['ID_02324'] = '1297229952';
                            countyID['ID_02912'] = '1305382016';
                            countyID['ID_01939'] = '1307147008';
                            countyID['ID_01973'] = '1308052992';
                            countyID['ID_02323'] = '1314059008';
                            countyID['ID_02336'] = '1315195008';
                            countyID['ID_02914'] = '1339844992';
                            countyID['ID_02657'] = '1341104000';
                            countyID['ID_01960'] = '1364868992';
                            countyID['ID_02334'] = '1378726016';
                            countyID['ID_02660'] = '1388873984';
                            countyID['ID_01958'] = '1397246976';
                            countyID['ID_02652'] = '1400585984';
                            countyID['ID_02337'] = '1401362048';
                            countyID['ID_02331'] = '1416978944';
                            countyID['ID_02919'] = '1417505024';
                            countyID['ID_00073'] = '1425165056';
                            countyID['ID_02330'] = '1451520000';
                            countyID['ID_02924'] = '1457244032';
                            countyID['ID_02923'] = '1458785024';
                            countyID['ID_02940'] = '1462736000';
                            countyID['ID_02332'] = '1469361024';
                            countyID['ID_02341'] = '1473198976';
                            countyID['ID_02328'] = '1498397952';
                            countyID['ID_02322'] = '1533068032';
                            countyID['ID_02325'] = '1534728960';
                            countyID['ID_02917'] = '1534813056';
                            countyID['ID_00251'] = '1547856000';
                            countyID['ID_02662'] = '1565248000';
                            countyID['ID_00256'] = '1565549952';
                            countyID['ID_01971'] = '1584391040';
                            countyID['ID_01942'] = '1594302976';
                            countyID['ID_01975'] = '1600369024';
                            countyID['ID_02913'] = '1618132992';
                            countyID['ID_02916'] = '1622771968';
                            countyID['ID_02661'] = '1627634944';
                            countyID['ID_02664'] = '1630493056';
                            countyID['ID_02665'] = '1638002944';
                            countyID['ID_02925'] = '1645997056';
                            countyID['ID_02937'] = '1653675008';
                            countyID['ID_00254'] = '1677414016';
                            countyID['ID_02921'] = '1678264064';
                            countyID['ID_02933'] = '1698832000';
                            countyID['ID_00070'] = '1700660992';
                            countyID['ID_00074'] = '1735248000';
                            countyID['ID_02326'] = '1736424960';
                            countyID['ID_02656'] = '1739911936';
                            countyID['ID_02930'] = '1747827968';
                            countyID['ID_02936'] = '1749030016';
                            countyID['ID_00076'] = '1765779968';
                            countyID['ID_02911'] = '1766946944';
                            countyID['ID_02342'] = '1775213056';
                            countyID['ID_01946'] = '1792880000';
                            countyID['ID_01962'] = '1799060992';
                            countyID['ID_02922'] = '1799185024';
                            countyID['ID_00075'] = '1804797056';
                            countyID['ID_00078'] = '1805085056';
                            countyID['ID_01970'] = '1823507968';
                            countyID['ID_02655'] = '1871276032';
                            countyID['ID_01969'] = '1923108992';
                            countyID['ID_00077'] = '1929468032';
                            countyID['ID_02915'] = '1945550976';
                            countyID['ID_02658'] = '1949716992';
                            countyID['ID_02654'] = '1956745984';
                            countyID['ID_02653'] = '1966258048';
                            countyID['ID_02920'] = '1968164992';
                            countyID['ID_01974'] = '1980609024';
                            countyID['ID_02651'] = '2015661056';
                            countyID['ID_01941'] = '2045560960';
                            countyID['ID_02343'] = '2075166976';
                            countyID['ID_01956'] = '2093947008';
                            countyID['ID_01957'] = '2107296000';
                            countyID['ID_01947'] = '2132135040';
                            countyID['ID_02663'] = '2140359936';
                            countyID['ID_01959'] = '2147830016';
                            countyID['ID_02931'] = '2161539072';
                            countyID['ID_01951'] = '2167013888';
                            countyID['ID_02929'] = '2271325952';
                            countyID['ID_00246'] = '2389733120';
                            countyID['ID_02339'] = '2401562112';
                            countyID['ID_02329'] = '2599880960';
                            countyID['ID_00255'] = '3049103872';
                            countyID['ID_01867'] = '1860848000';
                            countyID['ID_01894'] = '1907604992';
                            countyID['ID_01911'] = '2303184896';
                            countyID['ID_01892'] = '2531448064';
                            countyID['ID_01906'] = '3044122112';
                            countyID['ID_01883'] = '3088667904';
                            countyID['ID_01912'] = '3158327040';
                            countyID['ID_01904'] = '3686056960';
                            countyID['ID_01908'] = '3693594112';
                            countyID['ID_01888'] = '3703801088';
                            countyID['ID_01876'] = '3859470080';
                            countyID['ID_01893'] = '4197780992';
                            countyID['ID_01433'] = '4203194880';
                            countyID['ID_01431'] = '4286096896';
                            countyID['ID_01914'] = '4289687040';
                            countyID['ID_01896'] = '4343617024';
                            countyID['ID_01847'] = '4473984000';
                            countyID['ID_01870'] = '4498127872';
                            countyID['ID_01886'] = '4649934848';
                            countyID['ID_01916'] = '4804958208';
                            countyID['ID_01875'] = '4838498816';
                            countyID['ID_01903'] = '4842813952';
                            countyID['ID_01874'] = '4961504256';
                            countyID['ID_01872'] = '5306336256';
                            countyID['ID_01885'] = '5397905920';
                            countyID['ID_01889'] = '5885423104';
                            countyID['ID_01864'] = '6025328128';
                            countyID['ID_01884'] = '6098887168';
                            countyID['ID_01907'] = '6143099904';
                            countyID['ID_01905'] = '6192198144';
                            countyID['ID_01856'] = '6195025920';
                            countyID['ID_01868'] = '6716936192';
                            countyID['ID_01882'] = '6740935168';
                            countyID['ID_01861'] = '6820198912';
                            countyID['ID_01860'] = '6845784064';
                            countyID['ID_01873'] = '6988195840';
                            countyID['ID_01851'] = '7149724160';
                            countyID['ID_01849'] = '7259898880';
                            countyID['ID_01852'] = '7508257792';
                            countyID['ID_01853'] = '7759440896';
                            countyID['ID_01879'] = '8539962880';
                            countyID['ID_01863'] = '8652506112';
                            countyID['ID_01890'] = '8958322688';
                            countyID['ID_01902'] = '9291541504';
                            countyID['ID_01900'] = '9357409280';
                            countyID['ID_01910'] = '9798862848';
                            countyID['ID_01855'] = '10288700416';
                            countyID['ID_01899'] = '10949289984';
                            countyID['ID_01915'] = '11240040448';
                            countyID['ID_01880'] = '12109119488';
                            countyID['ID_01871'] = '12757810176';
                            countyID['ID_01898'] = '12938189824';
                            countyID['ID_01897'] = '12976879616';
                            countyID['ID_01901'] = '13176980480';
                            countyID['ID_01862'] = '13312629760';
                            countyID['ID_01881'] = '14352740352';
                            countyID['ID_00933'] = '618982016';
                            countyID['ID_00698'] = '684416320';
                            countyID['ID_00938'] = '850693376';
                            countyID['ID_00942'] = '973968320';
                            countyID['ID_00935'] = '1009985984';
                            countyID['ID_00915'] = '1019377024';
                            countyID['ID_01242'] = '1055115008';
                            countyID['ID_00697'] = '1066193984';
                            countyID['ID_00921'] = '1108381952';
                            countyID['ID_00686'] = '1116477952';
                            countyID['ID_00953'] = '1135308032';
                            countyID['ID_00681'] = '1139208960';
                            countyID['ID_01248'] = '1143824000';
                            countyID['ID_00705'] = '1147143936';
                            countyID['ID_00956'] = '1186616064';
                            countyID['ID_00947'] = '1233433984';
                            countyID['ID_00695'] = '1255836032';
                            countyID['ID_00674'] = '1273190016';
                            countyID['ID_00946'] = '1337065984';
                            countyID['ID_00931'] = '1369341952';
                            countyID['ID_00958'] = '1398049024';
                            countyID['ID_00687'] = '1398436992';
                            countyID['ID_00959'] = '1406048000';
                            countyID['ID_01244'] = '1414881024';
                            countyID['ID_00917'] = '1429259008';
                            countyID['ID_00957'] = '1433469952';
                            countyID['ID_00939'] = '1443778944';
                            countyID['ID_01256'] = '1458868992';
                            countyID['ID_00919'] = '1465489024';
                            countyID['ID_01245'] = '1471236992';
                            countyID['ID_00952'] = '1471864064';
                            countyID['ID_00948'] = '1474576000';
                            countyID['ID_00679'] = '1475750016';
                            countyID['ID_00936'] = '1475804032';
                            countyID['ID_00925'] = '1476770944';
                            countyID['ID_00912'] = '1477895936';
                            countyID['ID_00950'] = '1478002944';
                            countyID['ID_00703'] = '1479990016';
                            countyID['ID_00694'] = '1482222976';
                            countyID['ID_01251'] = '1482792960';
                            countyID['ID_01246'] = '1483395968';
                            countyID['ID_00916'] = '1484706944';
                            countyID['ID_00688'] = '1486152960';
                            countyID['ID_00918'] = '1486699008';
                            countyID['ID_00937'] = '1489017984';
                            countyID['ID_00945'] = '1489645056';
                            countyID['ID_00924'] = '1489714944';
                            countyID['ID_01522'] = '1490203008';
                            countyID['ID_01247'] = '1491356032';
                            countyID['ID_00960'] = '1514900992';
                            countyID['ID_00926'] = '1594476032';
                            countyID['ID_01520'] = '1745805952';
                            countyID['ID_00941'] = '1778166016';
                            countyID['ID_00689'] = '1838743040';
                            countyID['ID_00954'] = '1841155968';
                            countyID['ID_01249'] = '1846822016';
                            countyID['ID_00677'] = '1847272960';
                            countyID['ID_00701'] = '1852760064';
                            countyID['ID_00929'] = '1856984064';
                            countyID['ID_00693'] = '1862542976';
                            countyID['ID_00928'] = '1867696000';
                            countyID['ID_00934'] = '1915038976';
                            countyID['ID_00951'] = '1917399040';
                            countyID['ID_00692'] = '1932427008';
                            countyID['ID_00676'] = '1943096960';
                            countyID['ID_00949'] = '2002247040';
                            countyID['ID_00930'] = '2010409984';
                            countyID['ID_01255'] = '2169241088';
                            countyID['ID_01250'] = '2205351936';
                            countyID['ID_00678'] = '2220184064';
                            countyID['ID_01252'] = '2224737024';
                            countyID['ID_01253'] = '2287827968';
                            countyID['ID_00932'] = '2316534016';
                            countyID['ID_00920'] = '2381954048';
                            countyID['ID_00955'] = '2465268992';
                            countyID['ID_01525'] = '2507397888';
                            countyID['ID_00944'] = '2524179968';
                            countyID['ID_01254'] = '2611532032';
                            countyID['ID_00675'] = '2623906048';
                            countyID['ID_00914'] = '2749530880';
                            countyID['ID_00923'] = '2784995072';
                            countyID['ID_01241'] = '2870614016';
                            countyID['ID_00922'] = '3098368000';
                            countyID['ID_00696'] = '3163237888';
                            countyID['ID_00943'] = '3616824064';
                            countyID['ID_01243'] = '3687724032';
                            countyID['ID_00913'] = '4414071808';
                            countyID['ID_00680'] = '5352833024';
                            countyID['ID_01519'] = '6248083968';
                            countyID['ID_00702'] = '6321803776';
                            countyID['ID_00927'] = '6640905216';
                            countyID['ID_01524'] = '6670569984';
                            countyID['ID_00940'] = '15437419520';
                            countyID['ID_00855'] = '374672992';
                            countyID['ID_00861'] = '680960576';
                            countyID['ID_00390'] = '1838163968';
                            countyID['ID_00386'] = '5183049216';
                            countyID['ID_00385'] = '9277017088';
                            countyID['ID_00389'] = '9719821312';
                            countyID['ID_00391'] = '10814969856';
                            countyID['ID_00852'] = '12769829888';
                            countyID['ID_00392'] = '14219310080';
                            countyID['ID_00872'] = '15634629632';
                            countyID['ID_00387'] = '16323050496';
                            countyID['ID_00396'] = '20438710272';
                            countyID['ID_00395'] = '22987819008';
                            countyID['ID_00382'] = '24969449472';
                            countyID['ID_00394'] = '27539869696';
                            countyID['ID_00877'] = '44469661696';
                            countyID['ID_00858'] = '47090970624';
                            countyID['ID_02088'] = '955640576';
                            countyID['ID_02483'] = '1036595968';
                            countyID['ID_02518'] = '1391634944';
                            countyID['ID_02484'] = '1799316992';
                            countyID['ID_02103'] = '1830242048';
                            countyID['ID_02038'] = '2269189120';
                            countyID['ID_02517'] = '2411437056';
                            countyID['ID_02488'] = '2419350016';
                            countyID['ID_02511'] = '4425639936';
                            countyID['ID_02054'] = '4648211968';
                            countyID['ID_00040'] = '119634200';
                            countyID['ID_02257'] = '266393104';
                            countyID['ID_01842'] = '326888192';
                            countyID['ID_00214'] = '478093088';
                            countyID['ID_00213'] = '573067776';
                            countyID['ID_00212'] = '581601216';
                            countyID['ID_02603'] = '603490112';
                            countyID['ID_02604'] = '651187520';
                            countyID['ID_01843'] = '781692672';
                            countyID['ID_02889'] = '800083072';
                            countyID['ID_02259'] = '833989632';
                            countyID['ID_01420'] = '859613568';
                            countyID['ID_01418'] = '924412032';
                            countyID['ID_02258'] = '1108045952';
                            countyID['ID_02887'] = '1191852032';
                            countyID['ID_01844'] = '1214167040';
                            countyID['ID_00041'] = '1252784000';
                            countyID['ID_02605'] = '1344238976';
                            countyID['ID_01416'] = '1439267968';
                            countyID['ID_00365'] = '1628535040';
                            countyID['ID_02888'] = '2068302976';
                            countyID['ID_00242'] = '282740288';
                            countyID['ID_00399'] = '2761380096';
                            countyID['ID_00243'] = '3006531072';
                            countyID['ID_00234'] = '3638406912';
                            countyID['ID_00404'] = '4945358848';
                            countyID['ID_00409'] = '5001976832';
                            countyID['ID_00219'] = '5504868864';
                            countyID['ID_00235'] = '5706030080';
                            countyID['ID_00238'] = '6015565824';
                            countyID['ID_00233'] = '6338817024';
                            countyID['ID_00240'] = '7444530176';
                            countyID['ID_00408'] = '7679801856';
                            countyID['ID_00223'] = '7848911872';
                            countyID['ID_00225'] = '8663108608';
                            countyID['ID_00236'] = '8901429248';
                            countyID['ID_00403'] = '9610540032';
                            countyID['ID_00241'] = '9733329920';
                            countyID['ID_00397'] = '9861408768';
                            countyID['ID_00410'] = '9903450112';
                            countyID['ID_00229'] = '10260559872';
                            countyID['ID_00237'] = '10815080448';
                            countyID['ID_00220'] = '10823449600';
                            countyID['ID_00221'] = '11372460032';
                            countyID['ID_00239'] = '11757200384';
                            countyID['ID_00401'] = '12213919744';
                            countyID['ID_00406'] = '12512470016';
                            countyID['ID_00407'] = '14114939904';
                            countyID['ID_00231'] = '14278779904';
                            countyID['ID_00400'] = '15179499520';
                            countyID['ID_00398'] = '15708990464';
                            countyID['ID_00230'] = '17128129536';
                            countyID['ID_00405'] = '17214820352';
                            countyID['ID_00402'] = '17932269568';
                            countyID['ID_00533'] = '59126032';
                            countyID['ID_01060'] = '109028896';
                            countyID['ID_00496'] = '151178496';
                            countyID['ID_00748'] = '183412000';
                            countyID['ID_00755'] = '281096896';
                            countyID['ID_00758'] = '449492992';
                            countyID['ID_00490'] = '529693600';
                            countyID['ID_01035'] = '596504192';
                            countyID['ID_00752'] = '737411072';
                            countyID['ID_00486'] = '838393280';
                            countyID['ID_00764'] = '850379520';
                            countyID['ID_01067'] = '875785728';
                            countyID['ID_00770'] = '1013356992';
                            countyID['ID_01025'] = '1043875968';
                            countyID['ID_00514'] = '1055036032';
                            countyID['ID_00753'] = '1114983040';
                            countyID['ID_00745'] = '1229335040';
                            countyID['ID_01078'] = '1276697984';
                            countyID['ID_00511'] = '1283259008';
                            countyID['ID_01037'] = '1291783040';
                            countyID['ID_00761'] = '1343171968';
                            countyID['ID_00491'] = '1352903936';
                            countyID['ID_00744'] = '1354055936';
                            countyID['ID_00760'] = '1535206016';
                            countyID['ID_00769'] = '1563902976';
                            countyID['ID_01077'] = '1610503936';
                            countyID['ID_00757'] = '1636257024';
                            countyID['ID_00751'] = '1643879040';
                            countyID['ID_00747'] = '1668121984';
                            countyID['ID_00762'] = '1676140032';
                            countyID['ID_00493'] = '1689789056';
                            countyID['ID_00160'] = '1696033024';
                            countyID['ID_00512'] = '1702153984';
                            countyID['ID_01063'] = '1791190016';
                            countyID['ID_00485'] = '1827926016';
                            countyID['ID_00743'] = '2016019968';
                            countyID['ID_00749'] = '2060672000';
                            countyID['ID_00771'] = '2097848960';
                            countyID['ID_01059'] = '2102257024';
                            countyID['ID_01100'] = '2152755968';
                            countyID['ID_00501'] = '2245395968';
                            countyID['ID_00750'] = '2314279936';
                            countyID['ID_00763'] = '2362202112';
                            countyID['ID_00498'] = '2464761088';
                            countyID['ID_00768'] = '2507450112';
                            countyID['ID_00765'] = '2594392064';
                            countyID['ID_00766'] = '2665894912';
                            countyID['ID_00504'] = '2688025088';
                            countyID['ID_00759'] = '2700562944';
                            countyID['ID_00510'] = '2745974016';
                            countyID['ID_00494'] = '2911756032';
                            countyID['ID_01098'] = '3140175872';
                            countyID['ID_00746'] = '3285632000';
                            countyID['ID_02203'] = '3301403904';
                            countyID['ID_00529'] = '3388612096';
                            countyID['ID_01083'] = '3601531904';
                            countyID['ID_00540'] = '3655688960';
                            countyID['ID_00754'] = '3735901952';
                            countyID['ID_00513'] = '4219397888';
                            countyID['ID_01047'] = '4447975936';
                            countyID['ID_00767'] = '4647029760';
                            countyID['ID_00756'] = '6942145024';
                            countyID['ID_03021'] = '446702400';
                            countyID['ID_03040'] = '496071712';
                            countyID['ID_03008'] = '556201280';
                            countyID['ID_00136'] = '573487616';
                            countyID['ID_02990'] = '587616768';
                            countyID['ID_03020'] = '608801088';
                            countyID['ID_03093'] = '615871104';
                            countyID['ID_03070'] = '623038016';
                            countyID['ID_03054'] = '639951872';
                            countyID['ID_00129'] = '639957312';
                            countyID['ID_02984'] = '656606912';
                            countyID['ID_03067'] = '660341696';
                            countyID['ID_03099'] = '673381376';
                            countyID['ID_03003'] = '678193984';
                            countyID['ID_02985'] = '684029312';
                            countyID['ID_00127'] = '688749184';
                            countyID['ID_00124'] = '740672768';
                            countyID['ID_03071'] = '756481728';
                            countyID['ID_03084'] = '771655616';
                            countyID['ID_03010'] = '809515776';
                            countyID['ID_03091'] = '809622976';
                            countyID['ID_03081'] = '825803776';
                            countyID['ID_03058'] = '867203584';
                            countyID['ID_03055'] = '871627392';
                            countyID['ID_03051'] = '881747712';
                            countyID['ID_03052'] = '901664512';
                            countyID['ID_03034'] = '914421632';
                            countyID['ID_03090'] = '922106176';
                            countyID['ID_03029'] = '936925376';
                            countyID['ID_02987'] = '953567104';
                            countyID['ID_00157'] = '966241792';
                            countyID['ID_02983'] = '980383424';
                            countyID['ID_03035'] = '993052224';
                            countyID['ID_03041'] = '1007595008';
                            countyID['ID_03036'] = '1012022016';
                            countyID['ID_03031'] = '1016108992';
                            countyID['ID_03000'] = '1023267008';
                            countyID['ID_02991'] = '1030705984';
                            countyID['ID_03007'] = '1032684032';
                            countyID['ID_00152'] = '1037526976';
                            countyID['ID_00146'] = '1057097024';
                            countyID['ID_02989'] = '1098008064';
                            countyID['ID_03096'] = '1100541952';
                            countyID['ID_03057'] = '1103683968';
                            countyID['ID_02975'] = '1109696000';
                            countyID['ID_03105'] = '1141169024';
                            countyID['ID_03044'] = '1162535040';
                            countyID['ID_02978'] = '1164380032';
                            countyID['ID_03045'] = '1179547008';
                            countyID['ID_03033'] = '1194546944';
                            countyID['ID_03082'] = '1202407936';
                            countyID['ID_03083'] = '1219128960';
                            countyID['ID_00114'] = '1221350016';
                            countyID['ID_00116'] = '1227192064';
                            countyID['ID_03092'] = '1271048960';
                            countyID['ID_00108'] = '1273451008';
                            countyID['ID_00117'] = '1273651968';
                            countyID['ID_03025'] = '1308814976';
                            countyID['ID_00109'] = '1311185024';
                            countyID['ID_00122'] = '1313380992';
                            countyID['ID_03028'] = '1324450944';
                            countyID['ID_02982'] = '1335289984';
                            countyID['ID_00156'] = '1356744960';
                            countyID['ID_03046'] = '1367504000';
                            countyID['ID_03002'] = '1376452992';
                            countyID['ID_03104'] = '1376759040';
                            countyID['ID_00132'] = '1378304000';
                            countyID['ID_02992'] = '1389757952';
                            countyID['ID_00142'] = '1399645952';
                            countyID['ID_00110'] = '1431421056';
                            countyID['ID_02971'] = '1432488960';
                            countyID['ID_03076'] = '1434055040';
                            countyID['ID_03015'] = '1461144064';
                            countyID['ID_03100'] = '1464770048';
                            countyID['ID_00123'] = '1486221056';
                            countyID['ID_03069'] = '1541009024';
                            countyID['ID_03049'] = '1586884992';
                            countyID['ID_00118'] = '1635629952';
                            countyID['ID_00158'] = '1672365056';
                            countyID['ID_02968'] = '1688605952';
                            countyID['ID_00119'] = '1689488000';
                            countyID['ID_03079'] = '1700772992';
                            countyID['ID_00131'] = '1766851968';
                            countyID['ID_03017'] = '1807404032';
                            countyID['ID_03037'] = '1811100032';
                            countyID['ID_03043'] = '1836192000';
                            countyID['ID_00130'] = '1875374976';
                            countyID['ID_03103'] = '1953570944';
                            countyID['ID_03095'] = '1975496960';
                            countyID['ID_03053'] = '2026711040';
                            countyID['ID_00113'] = '2049454976';
                            countyID['ID_02967'] = '2113998976';
                            countyID['ID_00139'] = '2142418048';
                            countyID['ID_03068'] = '2163205888';
                            countyID['ID_03016'] = '2193649920';
                            countyID['ID_03050'] = '2252759040';
                            countyID['ID_03075'] = '2264498944';
                            countyID['ID_03018'] = '2427578112';
                            countyID['ID_00112'] = '2446864896';
                            countyID['ID_00135'] = '2458469888';
                            countyID['ID_00373'] = '1632134016';
                            countyID['ID_00627'] = '1645815040';
                            countyID['ID_00363'] = '1835821952';
                            countyID['ID_00612'] = '1844628992';
                            countyID['ID_00367'] = '1871293952';
                            countyID['ID_00638'] = '2223538944';
                            countyID['ID_00364'] = '2232438016';
                            countyID['ID_00374'] = '2233494016';
                            countyID['ID_00615'] = '2271557120';
                            countyID['ID_00379'] = '2338963968';
                            countyID['ID_00631'] = '2518449920';
                            countyID['ID_00614'] = '2524547072';
                            countyID['ID_00624'] = '2542785024';
                            countyID['ID_00616'] = '2557922048';
                            countyID['ID_00626'] = '2571386112';
                            countyID['ID_00611'] = '2592024064';
                            countyID['ID_00625'] = '2638162944';
                            countyID['ID_00637'] = '2653600000';
                            countyID['ID_00621'] = '2701246976';
                            countyID['ID_00632'] = '2833690880';
                            countyID['ID_00372'] = '2858226944';
                            countyID['ID_00376'] = '2897403904';
                            countyID['ID_00622'] = '2930494976';
                            countyID['ID_00370'] = '2932439040';
                            countyID['ID_00841'] = '2967977984';
                            countyID['ID_00377'] = '2975515904';
                            countyID['ID_00381'] = '3009067008';
                            countyID['ID_00380'] = '3073936896';
                            countyID['ID_00368'] = '3146632960';
                            countyID['ID_00623'] = '3265421056';
                            countyID['ID_00375'] = '3291995904';
                            countyID['ID_00613'] = '3320186112';
                            countyID['ID_00634'] = '3456947968';
                            countyID['ID_00830'] = '3499564032';
                            countyID['ID_00619'] = '3596737024';
                            countyID['ID_00633'] = '3718650880';
                            countyID['ID_00369'] = '3720197120';
                            countyID['ID_00378'] = '3855846912';
                            countyID['ID_00610'] = '3863107072';
                            countyID['ID_00362'] = '3912007936';
                            countyID['ID_00635'] = '4228551936';
                            countyID['ID_00371'] = '4297149952';
                            countyID['ID_00636'] = '4321189888';
                            countyID['ID_00620'] = '4571166208';
                            countyID['ID_00840'] = '4727499776';
                            countyID['ID_00817'] = '4853518848';
                            countyID['ID_00617'] = '4989017088';
                            countyID['ID_00366'] = '5201886208';
                            countyID['ID_00639'] = '5214368768';
                            countyID['ID_00618'] = '5380445184';
                            countyID['ID_00630'] = '5467143168';
                            countyID['ID_00629'] = '5754238976';
                            countyID['ID_00628'] = '7149203968';
                            countyID['ID_01344'] = '589203584';
                            countyID['ID_01705'] = '651532032';
                            countyID['ID_01372'] = '660231296';
                            countyID['ID_01728'] = '882810688';
                            countyID['ID_01745'] = '1022032000';
                            countyID['ID_01336'] = '1029449984';
                            countyID['ID_01735'] = '1030846976';
                            countyID['ID_01729'] = '1036419968';
                            countyID['ID_00775'] = '1039398016';
                            countyID['ID_01738'] = '1039585024';
                            countyID['ID_01702'] = '1040620992';
                            countyID['ID_01329'] = '1042052992';
                            countyID['ID_01331'] = '1042459008';
                            countyID['ID_01730'] = '1045726976';
                            countyID['ID_01340'] = '1050091008';
                            countyID['ID_01337'] = '1051302976';
                            countyID['ID_01365'] = '1051739008';
                            countyID['ID_01339'] = '1052459008';
                            countyID['ID_01698'] = '1053038016';
                            countyID['ID_01341'] = '1053774976';
                            countyID['ID_01317'] = '1055873984';
                            countyID['ID_01734'] = '1056641024';
                            countyID['ID_01695'] = '1057566016';
                            countyID['ID_01322'] = '1057888000';
                            countyID['ID_01318'] = '1058488000';
                            countyID['ID_01338'] = '1059715008';
                            countyID['ID_01343'] = '1065676032';
                            countyID['ID_01733'] = '1066099008';
                            countyID['ID_01748'] = '1068009024';
                            countyID['ID_01737'] = '1069012992';
                            countyID['ID_01718'] = '1071553984';
                            countyID['ID_00301'] = '1077462016';
                            countyID['ID_01348'] = '1078530944';
                            countyID['ID_01355'] = '1078568960';
                            countyID['ID_01746'] = '1088582016';
                            countyID['ID_01741'] = '1090296064';
                            countyID['ID_01347'] = '1091222016';
                            countyID['ID_00329'] = '1091310976';
                            countyID['ID_01321'] = '1094355968';
                            countyID['ID_01747'] = '1095435008';
                            countyID['ID_01368'] = '1098465024';
                            countyID['ID_01693'] = '1110247040';
                            countyID['ID_01323'] = '1113949952';
                            countyID['ID_01313'] = '1118176000';
                            countyID['ID_01694'] = '1140323968';
                            countyID['ID_01707'] = '1147618048';
                            countyID['ID_01731'] = '1170934016';
                            countyID['ID_01342'] = '1174224000';
                            countyID['ID_01326'] = '1180312064';
                            countyID['ID_01750'] = '1184119040';
                            countyID['ID_01356'] = '1187326976';
                            countyID['ID_01328'] = '1195416960';
                            countyID['ID_01319'] = '1197736960';
                            countyID['ID_01715'] = '1206610944';
                            countyID['ID_01332'] = '1208306944';
                            countyID['ID_01708'] = '1209667968';
                            countyID['ID_01736'] = '1218343040';
                            countyID['ID_01722'] = '1249725056';
                            countyID['ID_01742'] = '1262311040';
                            countyID['ID_01327'] = '1269134976';
                            countyID['ID_01335'] = '1271947008';
                            countyID['ID_01358'] = '1272966016';
                            countyID['ID_01334'] = '1282739968';
                            countyID['ID_01740'] = '1298413952';
                            countyID['ID_01714'] = '1304312960';
                            countyID['ID_01364'] = '1306418944';
                            countyID['ID_01726'] = '1352631040';
                            countyID['ID_01739'] = '1361024000';
                            countyID['ID_01749'] = '1376210048';
                            countyID['ID_01363'] = '1377597056';
                            countyID['ID_01352'] = '1378205952';
                            countyID['ID_00151'] = '1378360960';
                            countyID['ID_01697'] = '1427128064';
                            countyID['ID_01732'] = '1432480000';
                            countyID['ID_01703'] = '1437257984';
                            countyID['ID_01314'] = '1460529024';
                            countyID['ID_01706'] = '1470169984';
                            countyID['ID_01357'] = '1489944064';
                            countyID['ID_01743'] = '1512209024';
                            countyID['ID_01744'] = '1549072000';
                            countyID['ID_00321'] = '1580445056';
                            countyID['ID_01725'] = '1598552960';
                            countyID['ID_01351'] = '1601380992';
                            countyID['ID_01719'] = '1636798976';
                            countyID['ID_01727'] = '1721250944';
                            countyID['ID_01716'] = '1767666944';
                            countyID['ID_01704'] = '1784988032';
                            countyID['ID_01324'] = '1817992960';
                            countyID['ID_00829'] = '961092928';
                            countyID['ID_01436'] = '1076020992';
                            countyID['ID_00834'] = '1078621056';
                            countyID['ID_01175'] = '1219421056';
                            countyID['ID_01164'] = '1331240960';
                            countyID['ID_00832'] = '1338199040';
                            countyID['ID_01160'] = '1391326976';
                            countyID['ID_01454'] = '1395398016';
                            countyID['ID_01451'] = '1454422016';
                            countyID['ID_00846'] = '1465355008';
                            countyID['ID_01460'] = '1470995968';
                            countyID['ID_01155'] = '1476930944';
                            countyID['ID_01176'] = '1478109952';
                            countyID['ID_01158'] = '1485298048';
                            countyID['ID_01447'] = '1493181952';
                            countyID['ID_00837'] = '1601895936';
                            countyID['ID_01151'] = '1602082048';
                            countyID['ID_01439'] = '1638567040';
                            countyID['ID_00833'] = '1639041024';
                            countyID['ID_00831'] = '1655842944';
                            countyID['ID_01459'] = '1665207040';
                            countyID['ID_01168'] = '1697441024';
                            countyID['ID_01446'] = '1743763968';
                            countyID['ID_01461'] = '1749880064';
                            countyID['ID_00826'] = '1773372032';
                            countyID['ID_01456'] = '1806124032';
                            countyID['ID_00844'] = '1835832064';
                            countyID['ID_01152'] = '1865917952';
                            countyID['ID_01442'] = '1870178944';
                            countyID['ID_01159'] = '1895598976';
                            countyID['ID_00828'] = '1911869056';
                            countyID['ID_01448'] = '1926521984';
                            countyID['ID_01450'] = '1940957056';
                            countyID['ID_00835'] = '1965364992';
                            countyID['ID_01163'] = '1971896960';
                            countyID['ID_00838'] = '1995214976';
                            countyID['ID_01462'] = '2040060032';
                            countyID['ID_01452'] = '2077483008';
                            countyID['ID_01172'] = '2078855936';
                            countyID['ID_01445'] = '2084024960';
                            countyID['ID_01171'] = '2099057024';
                            countyID['ID_01458'] = '2129425024';
                            countyID['ID_01162'] = '2244107008';
                            countyID['ID_01167'] = '2253923072';
                            countyID['ID_00836'] = '2256227072';
                            countyID['ID_01455'] = '2322249984';
                            countyID['ID_01437'] = '2326224896';
                            countyID['ID_01156'] = '2335664896';
                            countyID['ID_01169'] = '2342567936';
                            countyID['ID_01170'] = '2382086912';
                            countyID['ID_01432'] = '2404608000';
                            countyID['ID_01444'] = '2460854016';
                            countyID['ID_01453'] = '2466480896';
                            countyID['ID_01161'] = '2473408000';
                            countyID['ID_01157'] = '2526577920';
                            countyID['ID_01440'] = '2561025024';
                            countyID['ID_00843'] = '2588632064';
                            countyID['ID_00842'] = '2592244992';
                            countyID['ID_01443'] = '2598190080';
                            countyID['ID_01154'] = '2629423104';
                            countyID['ID_00839'] = '2691041024';
                            countyID['ID_01441'] = '2741413888';
                            countyID['ID_01438'] = '2769438976';
                            countyID['ID_01430'] = '2850273024';
                            countyID['ID_01153'] = '2955527936';
                            countyID['ID_01174'] = '3189609984';
                            countyID['ID_01435'] = '3217797888';
                            countyID['ID_00827'] = '3310753024';
                            countyID['ID_01457'] = '3331900928';
                            countyID['ID_01434'] = '3381129984';
                            countyID['ID_01166'] = '3615198976';
                            countyID['ID_00845'] = '4116046080';
                            countyID['ID_01165'] = '4699978240';
                            countyID['ID_01173'] = '4751948800';
                            countyID['ID_01463'] = '4791492096';
                            countyID['ID_00847'] = '5286841856';
                            countyID['ID_01449'] = '5818039808';
                            countyID['ID_00430'] = '1117053952';
                            countyID['ID_00261'] = '1351841024';
                            countyID['ID_00428'] = '1702546944';
                            countyID['ID_00260'] = '1750680064';
                            countyID['ID_00422'] = '1854068992';
                            countyID['ID_00683'] = '1875746944';
                            countyID['ID_00417'] = '1918628992';
                            countyID['ID_00435'] = '2133357952';
                            countyID['ID_00259'] = '2147228032';
                            countyID['ID_00423'] = '2537581056';
                            countyID['ID_00427'] = '2855668992';
                            countyID['ID_00685'] = '3062210048';
                            countyID['ID_00439'] = '3120440064';
                            countyID['ID_00429'] = '4134068992';
                            countyID['ID_00426'] = '4215100928';
                            countyID['ID_00704'] = '4246720000';
                            countyID['ID_00691'] = '4441180160';
                            countyID['ID_00436'] = '4612211200';
                            countyID['ID_00682'] = '4844111872';
                            countyID['ID_00257'] = '5261843968';
                            countyID['ID_00438'] = '5274783744';
                            countyID['ID_00434'] = '5931406848';
                            countyID['ID_00433'] = '6168105984';
                            countyID['ID_00425'] = '7209355776';
                            countyID['ID_00421'] = '7715798016';
                            countyID['ID_00699'] = '7817064960';
                            countyID['ID_00700'] = '7947009024';
                            countyID['ID_00419'] = '8148591104';
                            countyID['ID_00424'] = '8328131072';
                            countyID['ID_00684'] = '11728870400';
                            countyID['ID_00418'] = '11792520192';
                            countyID['ID_00432'] = '13043369984';
                            countyID['ID_00690'] = '15387249664';
                            countyID['ID_00437'] = '21079869440';
                            countyID['ID_00431'] = '25608589312';
                            countyID['ID_00420'] = '26244790272';
                            countyID['ID_00134'] = '337326208';
                            countyID['ID_00312'] = '347321088';
                            countyID['ID_00126'] = '476152288';
                            countyID['ID_00304'] = '818389888';
                            countyID['ID_01369'] = '851343232';
                            countyID['ID_00300'] = '893975808';
                            countyID['ID_00133'] = '927669632';
                            countyID['ID_00306'] = '937142592';
                            countyID['ID_00330'] = '957444224';
                            countyID['ID_00302'] = '987977472';
                            countyID['ID_00318'] = '1013593024';
                            countyID['ID_00316'] = '1026233024';
                            countyID['ID_00141'] = '1029062976';
                            countyID['ID_00303'] = '1064566016';
                            countyID['ID_00155'] = '1106403968';
                            countyID['ID_00298'] = '1125900032';
                            countyID['ID_00276'] = '1133252992';
                            countyID['ID_00280'] = '1165337984';
                            countyID['ID_00310'] = '1187166976';
                            countyID['ID_00308'] = '1189005952';
                            countyID['ID_00313'] = '1251067008';
                            countyID['ID_00153'] = '1251244032';
                            countyID['ID_00120'] = '1343342976';
                            countyID['ID_00309'] = '1359864064';
                            countyID['ID_00299'] = '1361815040';
                            countyID['ID_00326'] = '1411441024';
                            countyID['ID_00314'] = '1412732032';
                            countyID['ID_00148'] = '1428236032';
                            countyID['ID_00154'] = '1491699968';
                            countyID['ID_00328'] = '1556153984';
                            countyID['ID_00159'] = '1565149056';
                            countyID['ID_00140'] = '1575452032';
                            countyID['ID_01422'] = '1689783040';
                            countyID['ID_00320'] = '1691787008';
                            countyID['ID_00149'] = '1741960960';
                            countyID['ID_00279'] = '1746386944';
                            countyID['ID_00111'] = '1782819968';
                            countyID['ID_00323'] = '1879304960';
                            countyID['ID_00115'] = '1890883968';
                            countyID['ID_00277'] = '1943805952';
                            countyID['ID_00317'] = '2000050048';
                            countyID['ID_00275'] = '2016652032';
                            countyID['ID_01333'] = '2042476032';
                            countyID['ID_00147'] = '2046968960';
                            countyID['ID_00145'] = '2069799040';
                            countyID['ID_00324'] = '2132685952';
                            countyID['ID_00327'] = '2141997952';
                            countyID['ID_00273'] = '2142848000';
                            countyID['ID_00161'] = '2218341888';
                            countyID['ID_00307'] = '2219590912';
                            countyID['ID_00121'] = '2265305088';
                            countyID['ID_00305'] = '2289897984';
                            countyID['ID_00128'] = '2299867904';
                            countyID['ID_00311'] = '2305949952';
                            countyID['ID_00144'] = '2341818880';
                            countyID['ID_00322'] = '2444456960';
                            countyID['ID_00143'] = '2536109056';
                            countyID['ID_00138'] = '2621836032';
                            countyID['ID_00125'] = '2621839104';
                            countyID['ID_00325'] = '2661353984';
                            countyID['ID_00315'] = '2782616064';
                            countyID['ID_00288'] = '2800613888';
                            countyID['ID_00319'] = '2874682880';
                            countyID['ID_00137'] = '2936496896';
                            countyID['ID_00150'] = '2964815872';
                            countyID['ID_00297'] = '2971749120';
                            countyID['ID_00296'] = '3182044928';
                            countyID['ID_00253'] = '62584940';
                            countyID['ID_00414'] = '265178400';
                            countyID['ID_00248'] = '436484800';
                            countyID['ID_00252'] = '852713728';
                            countyID['ID_00415'] = '1060604992';
                            countyID['ID_02099'] = '930141824';
                            countyID['ID_02133'] = '987176832';
                            countyID['ID_02002'] = '1016982016';
                            countyID['ID_02119'] = '1018822016';
                            countyID['ID_02129'] = '1048614016';
                            countyID['ID_02120'] = '1056948992';
                            countyID['ID_02049'] = '1062372992';
                            countyID['ID_02124'] = '1172690944';
                            countyID['ID_02014'] = '1177735040';
                            countyID['ID_02096'] = '1242349952';
                            countyID['ID_02005'] = '1267092992';
                            countyID['ID_02134'] = '1270348032';
                            countyID['ID_02116'] = '1285688064';
                            countyID['ID_02122'] = '1296045952';
                            countyID['ID_02007'] = '1331697024';
                            countyID['ID_02072'] = '1420329984';
                            countyID['ID_02137'] = '1422317056';
                            countyID['ID_02056'] = '1450123008';
                            countyID['ID_02148'] = '1453379968';
                            countyID['ID_02004'] = '1484665984';
                            countyID['ID_02028'] = '1492558976';
                            countyID['ID_02136'] = '1503895040';
                            countyID['ID_02023'] = '1571958016';
                            countyID['ID_02011'] = '1622196992';
                            countyID['ID_02135'] = '1631788032';
                            countyID['ID_02069'] = '1697266048';
                            countyID['ID_02149'] = '1722513024';
                            countyID['ID_02111'] = '1762732032';
                            countyID['ID_02068'] = '1777448960';
                            countyID['ID_02073'] = '1810174976';
                            countyID['ID_02112'] = '1848743040';
                            countyID['ID_02001'] = '1852945024';
                            countyID['ID_02012'] = '1881788032';
                            countyID['ID_02003'] = '1960797952';
                            countyID['ID_02150'] = '2033451008';
                            countyID['ID_02132'] = '2069596032';
                            countyID['ID_02139'] = '2071897984';
                            countyID['ID_02015'] = '2092519040';
                            countyID['ID_02121'] = '2107075968';
                            countyID['ID_02080'] = '2372658944';
                            countyID['ID_02013'] = '2419460096';
                            countyID['ID_02115'] = '2736299008';
                            countyID['ID_02138'] = '2773965056';
                            countyID['ID_01999'] = '2846024960';
                            countyID['ID_02006'] = '2864787968';
                            countyID['ID_02123'] = '2936776960';
                            countyID['ID_02629'] = '1067553984';
                            countyID['ID_02283'] = '1118361984';
                            countyID['ID_02612'] = '1125383040';
                            countyID['ID_02279'] = '1128082944';
                            countyID['ID_02272'] = '1192797952';
                            countyID['ID_02266'] = '1220880000';
                            countyID['ID_02635'] = '1313721984';
                            countyID['ID_02637'] = '1345203968';
                            countyID['ID_02278'] = '1349806976';
                            countyID['ID_02261'] = '1362936960';
                            countyID['ID_02307'] = '1458881024';
                            countyID['ID_02630'] = '1459979008';
                            countyID['ID_02286'] = '1474534016';
                            countyID['ID_02287'] = '1477099008';
                            countyID['ID_02641'] = '1487181952';
                            countyID['ID_02643'] = '1495144960';
                            countyID['ID_02644'] = '1598169984';
                            countyID['ID_02270'] = '1612749952';
                            countyID['ID_02636'] = '1764967936';
                            countyID['ID_02613'] = '1783193984';
                            countyID['ID_02632'] = '1834811008';
                            countyID['ID_02264'] = '1835342976';
                            countyID['ID_02611'] = '1900214016';
                            countyID['ID_02625'] = '1920631040';
                            countyID['ID_02265'] = '2051805056';
                            countyID['ID_02620'] = '2072082048';
                            countyID['ID_02262'] = '2090502016';
                            countyID['ID_02621'] = '2105412992';
                            countyID['ID_02622'] = '2116642048';
                            countyID['ID_02645'] = '2155481088';
                            countyID['ID_02608'] = '2170582016';
                            countyID['ID_02619'] = '2228748032';
                            countyID['ID_02624'] = '2230341120';
                            countyID['ID_02275'] = '2480182016';
                            countyID['ID_02616'] = '2511452928';
                            countyID['ID_02260'] = '2542721024';
                            countyID['ID_02281'] = '2607644928';
                            countyID['ID_02290'] = '2628727040';
                            countyID['ID_02646'] = '2662166016';
                            countyID['ID_02614'] = '2842477056';
                            countyID['ID_02284'] = '2851684096';
                            countyID['ID_02610'] = '2916212992';
                            countyID['ID_02631'] = '2943894016';
                            countyID['ID_02285'] = '3068380928';
                            countyID['ID_02633'] = '3260043008';
                            countyID['ID_02609'] = '3385906944';
                            countyID['ID_02617'] = '3596342016';
                            countyID['ID_02640'] = '3720811008';
                            countyID['ID_02310'] = '3741061888';
                            countyID['ID_02271'] = '3895148032';
                            countyID['ID_02263'] = '4032614912';
                            countyID['ID_02639'] = '4176216064';
                            countyID['ID_02277'] = '4252594944';
                            countyID['ID_02634'] = '4436600832';
                            countyID['ID_02295'] = '4506358784';
                            countyID['ID_02618'] = '4689260032';
                            countyID['ID_02280'] = '4827513856';
                            countyID['ID_02607'] = '5079669760';
                            countyID['ID_02642'] = '5423170048';
                            countyID['ID_02626'] = '5827210240';
                            countyID['ID_02647'] = '5963432960';
                            countyID['ID_02638'] = '6396471808';
                            countyID['ID_02308'] = '6918829056';
                            countyID['ID_02606'] = '7191240192';
                            countyID['ID_02615'] = '7434505216';
                            countyID['ID_02296'] = '8989806592';
                            countyID['ID_02740'] = '295758784';
                            countyID['ID_02453'] = '334684992';
                            countyID['ID_02458'] = '417451008';
                            countyID['ID_02457'] = '422113408';
                            countyID['ID_02742'] = '429379104';
                            countyID['ID_02449'] = '482165184';
                            countyID['ID_02425'] = '505362816';
                            countyID['ID_02737'] = '518739584';
                            countyID['ID_02375'] = '575858112';
                            countyID['ID_02374'] = '578990208';
                            countyID['ID_02399'] = '593665408';
                            countyID['ID_02725'] = '612626624';
                            countyID['ID_02432'] = '687731328';
                            countyID['ID_02703'] = '687991680';
                            countyID['ID_02689'] = '688567680';
                            countyID['ID_02696'] = '708142528';
                            countyID['ID_02445'] = '709858624';
                            countyID['ID_02780'] = '726751616';
                            countyID['ID_02435'] = '730608128';
                            countyID['ID_02372'] = '740051968';
                            countyID['ID_02388'] = '773046080';
                            countyID['ID_02363'] = '783308288';
                            countyID['ID_02729'] = '788253888';
                            countyID['ID_02398'] = '795498368';
                            countyID['ID_02705'] = '798545728';
                            countyID['ID_02412'] = '814004480';
                            countyID['ID_02471'] = '816822976';
                            countyID['ID_02408'] = '845539904';
                            countyID['ID_02723'] = '851489024';
                            countyID['ID_02434'] = '864654016';
                            countyID['ID_02474'] = '873245312';
                            countyID['ID_02727'] = '883711488';
                            countyID['ID_02370'] = '933778880';
                            countyID['ID_02726'] = '934229824';
                            countyID['ID_02755'] = '972437120';
                            countyID['ID_02423'] = '975578880';
                            countyID['ID_02419'] = '1020822976';
                            countyID['ID_02410'] = '1038852992';
                            countyID['ID_02367'] = '1052636032';
                            countyID['ID_02468'] = '1070604992';
                            countyID['ID_02738'] = '1074147968';
                            countyID['ID_02746'] = '1110993024';
                            countyID['ID_02389'] = '1114018048';
                            countyID['ID_02436'] = '1120636032';
                            countyID['ID_02765'] = '1122715008';
                            countyID['ID_02366'] = '1125518976';
                            countyID['ID_02688'] = '1125555968';
                            countyID['ID_02377'] = '1125805952';
                            countyID['ID_02382'] = '1187161984';
                            countyID['ID_02470'] = '1189660032';
                            countyID['ID_02783'] = '1222454016';
                            countyID['ID_02463'] = '1226710016';
                            countyID['ID_02428'] = '1233576960';
                            countyID['ID_02433'] = '1243688960';
                            countyID['ID_02748'] = '1261259008';
                            countyID['ID_02692'] = '1268824064';
                            countyID['ID_02413'] = '1290226944';
                            countyID['ID_02464'] = '1291399040';
                            countyID['ID_02731'] = '1305438976';
                            countyID['ID_02461'] = '1316270976';
                            countyID['ID_02369'] = '1326919936';
                            countyID['ID_02758'] = '1346983040';
                            countyID['ID_02422'] = '1352440064';
                            countyID['ID_02418'] = '1371267968';
                            countyID['ID_02774'] = '1375232000';
                            countyID['ID_02754'] = '1378642944';
                            countyID['ID_02769'] = '1380753024';
                            countyID['ID_02416'] = '1396461952';
                            countyID['ID_02786'] = '1404889984';
                            countyID['ID_02376'] = '1410839040';
                            countyID['ID_02360'] = '1436258048';
                            countyID['ID_02802'] = '1442925952';
                            countyID['ID_02711'] = '1447042048';
                            countyID['ID_02402'] = '1455822976';
                            countyID['ID_02797'] = '1457801984';
                            countyID['ID_02756'] = '1477170048';
                            countyID['ID_02795'] = '1478433024';
                            countyID['ID_02405'] = '1495246976';
                            countyID['ID_02716'] = '1503134976';
                            countyID['ID_02409'] = '1508925056';
                            countyID['ID_02368'] = '1534567040';
                            countyID['ID_02732'] = '1552056064';
                            countyID['ID_02438'] = '1561095040';
                            countyID['ID_02407'] = '1582292992';
                            countyID['ID_02391'] = '1586365056';
                            countyID['ID_02751'] = '1588020992';
                            countyID['ID_02414'] = '1598354944';
                            countyID['ID_02417'] = '1604145024';
                            countyID['ID_02427'] = '1611399936';
                            countyID['ID_02791'] = '1646104960';
                            countyID['ID_02390'] = '1729510016';
                            countyID['ID_02686'] = '1763847936';
                            countyID['ID_02454'] = '1825387008';
                            countyID['ID_02781'] = '1901310976';
                            countyID['ID_02798'] = '1976611968';
                            countyID['ID_02881'] = '329020608';
                            countyID['ID_00191'] = '482937088';
                            countyID['ID_00349'] = '507188096';
                            countyID['ID_00345'] = '594278080';
                            countyID['ID_00025'] = '652637120';
                            countyID['ID_02841'] = '652868928';
                            countyID['ID_02594'] = '665173888';
                            countyID['ID_02255'] = '707850624';
                            countyID['ID_00013'] = '736569024';
                            countyID['ID_00351'] = '864197824';
                            countyID['ID_01824'] = '979943296';
                            countyID['ID_00573'] = '986475520';
                            countyID['ID_01411'] = '1051676032';
                            countyID['ID_02874'] = '1089456000';
                            countyID['ID_01827'] = '1207102976';
                            countyID['ID_01118'] = '1272695040';
                            countyID['ID_02880'] = '1312711040';
                            countyID['ID_01408'] = '1329778048';
                            countyID['ID_00344'] = '1374396032';
                            countyID['ID_02863'] = '1412208000';
                            countyID['ID_02886'] = '1449037056';
                            countyID['ID_02875'] = '1474332032';
                            countyID['ID_02866'] = '1509826048';
                            countyID['ID_00350'] = '1516295936';
                            countyID['ID_00039'] = '1529528960';
                            countyID['ID_02590'] = '1546578944';
                            countyID['ID_02252'] = '1564231936';
                            countyID['ID_00358'] = '1625933056';
                            countyID['ID_00795'] = '1629143040';
                            countyID['ID_00211'] = '1671149056';
                            countyID['ID_02826'] = '1674449024';
                            countyID['ID_01819'] = '1706871040';
                            countyID['ID_00035'] = '1715746048';
                            countyID['ID_02852'] = '1732508032';
                            countyID['ID_00038'] = '1755954944';
                            countyID['ID_01404'] = '1796029056';
                            countyID['ID_00571'] = '1796434944';
                            countyID['ID_00361'] = '1800337024';
                            countyID['ID_01123'] = '1803680000';
                            countyID['ID_01831'] = '1810905984';
                            countyID['ID_00010'] = '1824377984';
                            countyID['ID_02829'] = '1836952064';
                            countyID['ID_02602'] = '1842258048';
                            countyID['ID_01412'] = '1846247040';
                            countyID['ID_00184'] = '1876942976';
                            countyID['ID_00207'] = '1936160000';
                            countyID['ID_02859'] = '1937986944';
                            countyID['ID_00566'] = '1982590976';
                            countyID['ID_01825'] = '1986972032';
                            countyID['ID_00340'] = '1995441024';
                            countyID['ID_00354'] = '2007629952';
                            countyID['ID_01400'] = '2022001024';
                            countyID['ID_00196'] = '2030988032';
                            countyID['ID_01840'] = '2033319040';
                            countyID['ID_00563'] = '2039510016';
                            countyID['ID_02839'] = '2048578944';
                            countyID['ID_00210'] = '2060551040';
                            countyID['ID_02845'] = '2066235008';
                            countyID['ID_00560'] = '2071234944';
                            countyID['ID_02601'] = '2076520960';
                            countyID['ID_02877'] = '2081657984';
                            countyID['ID_02847'] = '2141394944';
                            countyID['ID_00027'] = '2148226048';
                            countyID['ID_01410'] = '2164199936';
                            countyID['ID_00801'] = '2165007872';
                            countyID['ID_00346'] = '2171657984';
                            countyID['ID_00014'] = '2176413952';
                            countyID['ID_00357'] = '2178456064';
                            countyID['ID_02599'] = '2178761984';
                            countyID['ID_00564'] = '2182211072';
                            countyID['ID_02872'] = '2203097088';
                            countyID['ID_02851'] = '2206706944';
                            countyID['ID_02876'] = '2216208896';
                            countyID['ID_02854'] = '2231225088';
                            countyID['ID_01121'] = '2236734976';
                            countyID['ID_02593'] = '2240250880';
                            countyID['ID_02600'] = '2246767104';
                            countyID['ID_00008'] = '2256602880';
                            countyID['ID_02588'] = '2262996992';
                            countyID['ID_02860'] = '2265615872';
                            countyID['ID_02848'] = '2269594112';
                            countyID['ID_00356'] = '2273332992';
                            countyID['ID_02868'] = '2275129088';
                            countyID['ID_02844'] = '2279810048';
                            countyID['ID_00355'] = '2281203968';
                            countyID['ID_00581'] = '2282577920';
                            countyID['ID_00580'] = '2284739072';
                            countyID['ID_00569'] = '2288232960';
                            countyID['ID_00188'] = '2292154112';
                            countyID['ID_00806'] = '2298404096';
                            countyID['ID_02825'] = '2300299008';
                            countyID['ID_01405'] = '2302083072';
                            countyID['ID_00348'] = '2305501952';
                            countyID['ID_01820'] = '2306558976';
                            countyID['ID_02850'] = '2307256064';
                            countyID['ID_02597'] = '2307478016';
                            countyID['ID_00575'] = '2309925120';
                            countyID['ID_00798'] = '2313926912';
                            countyID['ID_00579'] = '2316572928';
                            countyID['ID_01841'] = '2319590912';
                            countyID['ID_00197'] = '2322492928';
                            countyID['ID_00195'] = '2324365056';
                            countyID['ID_02596'] = '2324998912';
                            countyID['ID_00802'] = '2328246016';
                            countyID['ID_00031'] = '2329362944';
                            countyID['ID_01401'] = '2330189056';
                            countyID['ID_01836'] = '2330862080';
                            countyID['ID_00582'] = '2330991104';
                            countyID['ID_00339'] = '2331501056';
                            countyID['ID_00209'] = '2331553024';
                            countyID['ID_01833'] = '2331764992';
                            countyID['ID_00803'] = '2331781120';
                            countyID['ID_02879'] = '2332448000';
                            countyID['ID_00009'] = '2333038080';
                            countyID['ID_00570'] = '2335454976';
                            countyID['ID_01402'] = '2336246016';
                            countyID['ID_01830'] = '2337481984';
                            countyID['ID_02842'] = '2339044096';
                            countyID['ID_01413'] = '2339098880';
                            countyID['ID_00203'] = '2339997952';
                            countyID['ID_02251'] = '2342443008';
                            countyID['ID_00805'] = '2344684032';
                            countyID['ID_00189'] = '2345089024';
                            countyID['ID_01816'] = '2347269888';
                            countyID['ID_00032'] = '2349612032';
                            countyID['ID_02592'] = '2352666880';
                            countyID['ID_02856'] = '2352723968';
                            countyID['ID_02833'] = '2354234880';
                            countyID['ID_02843'] = '2354582016';
                            countyID['ID_00347'] = '2358603008';
                            countyID['ID_00194'] = '2359147008';
                            countyID['ID_01838'] = '2359712000';
                            countyID['ID_01409'] = '2360696064';
                            countyID['ID_02870'] = '2360887040';
                            countyID['ID_02878'] = '2362062080';
                            countyID['ID_00565'] = '2363499008';
                            countyID['ID_00187'] = '2367990016';
                            countyID['ID_01818'] = '2368460032';
                            countyID['ID_00029'] = '2368603904';
                            countyID['ID_01414'] = '2369693952';
                            countyID['ID_00193'] = '2371268096';
                            countyID['ID_02595'] = '2373241088';
                            countyID['ID_02885'] = '2376642048';
                            countyID['ID_00018'] = '2378750976';
                            countyID['ID_02589'] = '2382297088';
                            countyID['ID_00587'] = '2383358976';
                            countyID['ID_00026'] = '2386555904';
                            countyID['ID_02884'] = '2390650880';
                            countyID['ID_00342'] = '2391728128';
                            countyID['ID_01120'] = '2393218048';
                            countyID['ID_00199'] = '2393297920';
                            countyID['ID_00200'] = '2394446080';
                            countyID['ID_00359'] = '2398262016';
                            countyID['ID_01117'] = '2399599104';
                            countyID['ID_01829'] = '2400623104';
                            countyID['ID_00578'] = '2404943872';
                            countyID['ID_02587'] = '2405588992';
                            countyID['ID_00799'] = '2411034880';
                            countyID['ID_02586'] = '2414332928';
                            countyID['ID_00567'] = '2415951104';
                            countyID['ID_00015'] = '2418212096';
                            countyID['ID_01115'] = '2419138048';
                            countyID['ID_00568'] = '2422899968';
                            countyID['ID_02853'] = '2426724096';
                            countyID['ID_01837'] = '2428771072';
                            countyID['ID_00577'] = '2431598080';
                            countyID['ID_00585'] = '2443301888';
                            countyID['ID_00202'] = '2446071040';
                            countyID['ID_00036'] = '2451520000';
                            countyID['ID_00561'] = '2460509952';
                            countyID['ID_00208'] = '2465126912';
                            countyID['ID_02591'] = '2483444992';
                            countyID['ID_00352'] = '2487097088';
                            countyID['ID_01122'] = '2511532032';
                            countyID['ID_02861'] = '2514473984';
                            countyID['ID_02855'] = '2545902080';
                            countyID['ID_02869'] = '2548027904';
                            countyID['ID_02883'] = '2562955008';
                            countyID['ID_00558'] = '2564612096';
                            countyID['ID_00011'] = '2569637120';
                            countyID['ID_00341'] = '2575117056';
                            countyID['ID_00205'] = '2585875968';
                            countyID['ID_00796'] = '2602116096';
                            countyID['ID_01839'] = '2614923008';
                            countyID['ID_02254'] = '2622863104';
                            countyID['ID_00024'] = '2631898112';
                            countyID['ID_00037'] = '2633838080';
                            countyID['ID_00206'] = '2684723968';
                            countyID['ID_01826'] = '2686080000';
                            countyID['ID_02882'] = '2692801024';
                            countyID['ID_00343'] = '2698081024';
                            countyID['ID_00586'] = '2721934080';
                            countyID['ID_02840'] = '2722117888';
                            countyID['ID_02862'] = '2723535104';
                            countyID['ID_00033'] = '2724838912';
                            countyID['ID_02867'] = '2727031040';
                            countyID['ID_02873'] = '2737858048';
                            countyID['ID_00559'] = '2740761088';
                            countyID['ID_02828'] = '2752125952';
                            countyID['ID_01828'] = '2759887104';
                            countyID['ID_01821'] = '2762707968';
                            countyID['ID_00022'] = '2779447040';
                            countyID['ID_01823'] = '2805142016';
                            countyID['ID_01119'] = '2813114880';
                            countyID['ID_00583'] = '2819773952';
                            countyID['ID_00584'] = '2849701120';
                            countyID['ID_02858'] = '2857581056';
                            countyID['ID_02256'] = '2896390912';
                            countyID['ID_02849'] = '2935750912';
                            countyID['ID_02857'] = '2940404992';
                            countyID['ID_02864'] = '2942584064';
                            countyID['ID_01822'] = '2951099904';
                            countyID['ID_00794'] = '3000284928';
                            countyID['ID_00185'] = '3044016128';
                            countyID['ID_01753'] = '3158605056';
                            countyID['ID_00016'] = '3168018944';
                            countyID['ID_01407'] = '3188039936';
                            countyID['ID_00797'] = '3211120128';
                            countyID['ID_00800'] = '3215013120';
                            countyID['ID_02871'] = '3240040960';
                            countyID['ID_00020'] = '3268423936';
                            countyID['ID_02598'] = '3313264128';
                            countyID['ID_01835'] = '3360267008';
                            countyID['ID_00360'] = '3394516992';
                            countyID['ID_00028'] = '3432655872';
                            countyID['ID_00804'] = '3441794048';
                            countyID['ID_00021'] = '3516430080';
                            countyID['ID_00017'] = '3522525952';
                            countyID['ID_01832'] = '3765650944';
                            countyID['ID_00190'] = '3777053952';
                            countyID['ID_01817'] = '3786648064';
                            countyID['ID_00576'] = '3850511104';
                            countyID['ID_00198'] = '3876869120';
                            countyID['ID_00192'] = '3886362880';
                            countyID['ID_02827'] = '3886830080';
                            countyID['ID_00034'] = '3891132928';
                            countyID['ID_00030'] = '3893424128';
                            countyID['ID_00019'] = '3941890048';
                            countyID['ID_00562'] = '4019521024';
                            countyID['ID_01399'] = '4068521984';
                            countyID['ID_00204'] = '4411985920';
                            countyID['ID_00023'] = '4645093888';
                            countyID['ID_01403'] = '5485225984';
                            countyID['ID_02253'] = '5865170944';
                            countyID['ID_00574'] = '6107257856';
                            countyID['ID_00572'] = '6825588224';
                            countyID['ID_01406'] = '7270943744';
                            countyID['ID_00201'] = '8144864256';
                            countyID['ID_00186'] = '8706198528';
                            countyID['ID_02865'] = '9875099648';
                            countyID['ID_01116'] = '9985016832';
                            countyID['ID_01834'] = '11838789632';
                            countyID['ID_00353'] = '12338310144';
                            countyID['ID_00012'] = '16015800320';
                            countyID['ID_01282'] = '773832192';
                            countyID['ID_01271'] = '1492050944';
                            countyID['ID_02675'] = '1577810048';
                            countyID['ID_00722'] = '1805168000';
                            countyID['ID_00977'] = '1922500992';
                            countyID['ID_01280'] = '1962669056';
                            countyID['ID_01531'] = '2664514048';
                            countyID['ID_00979'] = '3016850944';
                            countyID['ID_01274'] = '3044532992';
                            countyID['ID_00723'] = '3829278976';
                            countyID['ID_01283'] = '4118476032';
                            countyID['ID_01278'] = '4847710208';
                            countyID['ID_01273'] = '4948371968';
                            countyID['ID_01284'] = '5188922880';
                            countyID['ID_00978'] = '6284236800';
                            countyID['ID_01281'] = '6373122048';
                            countyID['ID_00724'] = '6707758080';
                            countyID['ID_01279'] = '8394008064';
                            countyID['ID_01277'] = '8538363904';
                            countyID['ID_00980'] = '8785957888';
                            countyID['ID_01275'] = '9509253120';
                            countyID['ID_01276'] = '10334640128';
                            countyID['ID_01537'] = '11557340160';
                            countyID['ID_01272'] = '11602350080';
                            countyID['ID_01530'] = '13403499520';
                            countyID['ID_00103'] = '14880910336';
                            countyID['ID_01270'] = '17022499840';
                            countyID['ID_02679'] = '17978019840';
                            countyID['ID_02678'] = '20253679616';
                            countyID['ID_00068'] = '211890592';
                            countyID['ID_00069'] = '1188278016';
                            countyID['ID_02904'] = '1389730944';
                            countyID['ID_00044'] = '1641291008';
                            countyID['ID_00056'] = '1680548992';
                            countyID['ID_00043'] = '1718711040';
                            countyID['ID_02899'] = '1748190976';
                            countyID['ID_02895'] = '1779406976';
                            countyID['ID_00067'] = '1779926016';
                            countyID['ID_02900'] = '1795555968';
                            countyID['ID_00060'] = '1984772992';
                            countyID['ID_00064'] = '2033931008';
                            countyID['ID_00063'] = '2408225024';
                            countyID['ID_00066'] = '2510569984';
                            countyID['ID_01814'] = '6562394';
                            countyID['ID_02231'] = '14163340';
                            countyID['ID_00007'] = '16159470';
                            countyID['ID_00006'] = '17362240';
                            countyID['ID_01396'] = '17854910';
                            countyID['ID_01809'] = '19375330';
                            countyID['ID_01783'] = '19476230';
                            countyID['ID_01774'] = '21252880';
                            countyID['ID_02846'] = '21340430';
                            countyID['ID_02836'] = '23366980';
                            countyID['ID_02585'] = '23912610';
                            countyID['ID_00183'] = '25567150';
                            countyID['ID_00178'] = '25590860';
                            countyID['ID_00004'] = '26517360';
                            countyID['ID_02822'] = '26620500';
                            countyID['ID_01811'] = '27039900';
                            countyID['ID_00336'] = '28376620';
                            countyID['ID_01789'] = '33703512';
                            countyID['ID_00555'] = '37390580';
                            countyID['ID_00005'] = '38919728';
                            countyID['ID_00179'] = '38950820';
                            countyID['ID_02243'] = '39669840';
                            countyID['ID_00338'] = '45112608';
                            countyID['ID_00180'] = '51735520';
                            countyID['ID_02237'] = '59393048';
                            countyID['ID_02238'] = '67273584';
                            countyID['ID_02573'] = '87159968';
                            countyID['ID_02569'] = '110234200';
                            countyID['ID_02819'] = '111198704';
                            countyID['ID_01392'] = '127239696';
                            countyID['ID_01784'] = '133160096';
                            countyID['ID_02230'] = '140171296';
                            countyID['ID_02241'] = '154894704';
                            countyID['ID_02242'] = '177967808';
                            countyID['ID_02832'] = '222555504';
                            countyID['ID_02584'] = '271379392';
                            countyID['ID_02235'] = '337492192';
                            countyID['ID_02581'] = '345115808';
                            countyID['ID_02244'] = '368909088';
                            countyID['ID_01397'] = '404675808';
                            countyID['ID_01810'] = '456297600';
                            countyID['ID_01804'] = '465255712';
                            countyID['ID_02579'] = '473494112';
                            countyID['ID_01787'] = '495452192';
                            countyID['ID_01805'] = '495962816';
                            countyID['ID_01797'] = '543196480';
                            countyID['ID_02834'] = '548073024';
                            countyID['ID_02248'] = '552872320';
                            countyID['ID_00335'] = '564116928';
                            countyID['ID_00337'] = '594077376';
                            countyID['ID_02817'] = '605271872';
                            countyID['ID_00556'] = '644948928';
                            countyID['ID_01808'] = '648838080';
                            countyID['ID_01806'] = '665944384';
                            countyID['ID_02239'] = '673969472';
                            countyID['ID_01790'] = '686749184';
                            countyID['ID_02820'] = '689525120';
                            countyID['ID_00557'] = '696591872';
                            countyID['ID_01398'] = '709504576';
                            countyID['ID_01776'] = '722475776';
                            countyID['ID_01786'] = '728861824';
                            countyID['ID_01799'] = '740750080';
                            countyID['ID_02571'] = '764632832';
                            countyID['ID_02576'] = '770419584';
                            countyID['ID_01791'] = '805112704';
                            countyID['ID_02815'] = '814271680';
                            countyID['ID_02577'] = '816203904';
                            countyID['ID_02574'] = '817432000';
                            countyID['ID_01802'] = '828427584';
                            countyID['ID_02811'] = '830565696';
                            countyID['ID_02249'] = '853489600';
                            countyID['ID_02247'] = '856074880';
                            countyID['ID_01394'] = '863744576';
                            countyID['ID_01795'] = '871276096';
                            countyID['ID_02838'] = '882624128';
                            countyID['ID_02821'] = '882669184';
                            countyID['ID_01785'] = '906392384';
                            countyID['ID_02818'] = '920142592';
                            countyID['ID_01782'] = '921469120';
                            countyID['ID_02830'] = '926503424';
                            countyID['ID_02233'] = '982210880';
                            countyID['ID_02583'] = '985283776';
                            countyID['ID_02572'] = '990240768';
                            countyID['ID_02824'] = '1002361024';
                            countyID['ID_01762'] = '1012604032';
                            countyID['ID_02823'] = '1036430016';
                            countyID['ID_02582'] = '1039870976';
                            countyID['ID_01815'] = '1044252992';
                            countyID['ID_01779'] = '1070950016';
                            countyID['ID_02809'] = '1075249024';
                            countyID['ID_01803'] = '1096333952';
                            countyID['ID_01798'] = '1118054016';
                            countyID['ID_02813'] = '1127986944';
                            countyID['ID_02816'] = '1145228032';
                            countyID['ID_01393'] = '1153726976';
                            countyID['ID_00334'] = '1164189056';
                            countyID['ID_02240'] = '1167897984';
                            countyID['ID_02580'] = '1196119040';
                            countyID['ID_02812'] = '1213502976';
                            countyID['ID_01812'] = '1219510016';
                            countyID['ID_01788'] = '1227192960';
                            countyID['ID_02814'] = '1227484032';
                            countyID['ID_01807'] = '1229441024';
                            countyID['ID_02246'] = '1230946048';
                            countyID['ID_01775'] = '1251212032';
                            countyID['ID_00181'] = '1269664000';
                            countyID['ID_01800'] = '1285411968';
                            countyID['ID_01781'] = '1302148992';
                            countyID['ID_01778'] = '1304619008';
                            countyID['ID_01794'] = '1305009024';
                            countyID['ID_00182'] = '1317723008';
                            countyID['ID_01801'] = '1335297024';
                            countyID['ID_00177'] = '1343805056';
                            countyID['ID_02234'] = '1366252032';
                            countyID['ID_02835'] = '1370513024';
                            countyID['ID_01395'] = '1387016960';
                            countyID['ID_01780'] = '1401707008';
                            countyID['ID_02837'] = '1452918016';
                            countyID['ID_02232'] = '1466381952';
                            countyID['ID_02810'] = '1501304960';
                            countyID['ID_02831'] = '1547668992';
                            countyID['ID_01796'] = '1551777024';
                            countyID['ID_01777'] = '1619998976';
                            countyID['ID_02578'] = '1676886016';
                            countyID['ID_01813'] = '1788194944';
                            countyID['ID_01793'] = '1866599936';
                            countyID['ID_02250'] = '1950315008';
                            countyID['ID_01792'] = '2118193024';
                            countyID['ID_02236'] = '2199121920';
                            countyID['ID_02570'] = '2504516096';
                            countyID['ID_01391'] = '2509544960';
                            countyID['ID_02941'] = '450437088';
                            countyID['ID_02945'] = '539879680';
                            countyID['ID_02948'] = '682138816';
                            countyID['ID_00263'] = '1022892992';
                            countyID['ID_01515'] = '1629112960';
                            countyID['ID_01513'] = '1647783936';
                            countyID['ID_02667'] = '1840669056';
                            countyID['ID_01981'] = '1869870976';
                            countyID['ID_02949'] = '2249739008';
                            countyID['ID_01980'] = '2415571968';
                            countyID['ID_01507'] = '2484879104';
                            countyID['ID_01979'] = '2952911104';
                            countyID['ID_01514'] = '3217208064';
                            countyID['ID_02666'] = '3289618944';
                            countyID['ID_01508'] = '3625955072';
                            countyID['ID_02943'] = '4288184064';
                            countyID['ID_02947'] = '4324004864';
                            countyID['ID_01986'] = '4403960832';
                            countyID['ID_01509'] = '4483794944';
                            countyID['ID_01510'] = '4502252032';
                            countyID['ID_02950'] = '4568199168';
                            countyID['ID_01985'] = '4671562240';
                            countyID['ID_01983'] = '4711873024';
                            countyID['ID_01518'] = '4846679040';
                            countyID['ID_02946'] = '4926225920';
                            countyID['ID_02668'] = '4985669120';
                            countyID['ID_02942'] = '5406012928';
                            countyID['ID_01984'] = '5456734208';
                            countyID['ID_02344'] = '5479291904';
                            countyID['ID_01987'] = '5592015872';
                            countyID['ID_01511'] = '5706153984';
                            countyID['ID_01516'] = '5949903872';
                            countyID['ID_00264'] = '5984152064';
                            countyID['ID_01982'] = '6223228928';
                            countyID['ID_01988'] = '6417380864';
                            countyID['ID_02944'] = '6939907072';
                            countyID['ID_00262'] = '7564125184';
                            countyID['ID_00258'] = '11125019648';
                            countyID['ID_02951'] = '13644000256';
                            countyID['ID_00869'] = '213957200';
                            countyID['ID_00868'] = '231038800';
                            countyID['ID_00863'] = '274072992';
                            countyID['ID_01185'] = '336966304';
                            countyID['ID_01188'] = '447474912';
                            countyID['ID_00875'] = '542951104';
                            countyID['ID_00876'] = '593295424';
                            countyID['ID_00856'] = '602195200';
                            countyID['ID_00853'] = '663797184';
                            countyID['ID_01183'] = '723252288';
                            countyID['ID_01178'] = '727832320';
                            countyID['ID_00850'] = '791062720';
                            countyID['ID_00854'] = '799620928';
                            countyID['ID_01186'] = '828070912';
                            countyID['ID_01195'] = '831754368';
                            countyID['ID_01179'] = '849075072';
                            countyID['ID_00873'] = '876717504';
                            countyID['ID_00851'] = '883338816';
                            countyID['ID_00866'] = '885522432';
                            countyID['ID_01201'] = '895279232';
                            countyID['ID_01211'] = '918506880';
                            countyID['ID_01207'] = '927378432';
                            countyID['ID_00848'] = '932556608';
                            countyID['ID_01213'] = '933586816';
                            countyID['ID_01184'] = '948607808';
                            countyID['ID_01182'] = '996874816';
                            countyID['ID_00862'] = '1077454976';
                            countyID['ID_01177'] = '1085004032';
                            countyID['ID_00871'] = '1085186944';
                            countyID['ID_00867'] = '1095846016';
                            countyID['ID_00870'] = '1115633024';
                            countyID['ID_00859'] = '1131923968';
                            countyID['ID_01206'] = '1170649984';
                            countyID['ID_01196'] = '1175174016';
                            countyID['ID_01197'] = '1202654976';
                            countyID['ID_00857'] = '1224422016';
                            countyID['ID_00865'] = '1236391040';
                            countyID['ID_01209'] = '1252422016';
                            countyID['ID_01200'] = '1293577984';
                            countyID['ID_00849'] = '1298990976';
                            countyID['ID_01194'] = '1310486016';
                            countyID['ID_01210'] = '1322996992';
                            countyID['ID_01212'] = '1381644032';
                            countyID['ID_01204'] = '1433475968';
                            countyID['ID_00874'] = '1508182016';
                            countyID['ID_01187'] = '1567851008';
                            countyID['ID_01180'] = '1658237056';
                            countyID['ID_00864'] = '1675266048';
                            countyID['ID_01203'] = '1680396032';
                            countyID['ID_01191'] = '1713405952';
                            countyID['ID_01205'] = '1802759936';
                            countyID['ID_01181'] = '2335099904';
                            countyID['ID_00860'] = '2435323904';
                            countyID['ID_01198'] = '2640670976';
                            countyID['ID_01192'] = '2692761088';
                            countyID['ID_00507'] = '600833984';
                            countyID['ID_00538'] = '603666624';
                            countyID['ID_00522'] = '625228928';
                            countyID['ID_00292'] = '704451968';
                            countyID['ID_00283'] = '824227392';
                            countyID['ID_00489'] = '861173312';
                            countyID['ID_00286'] = '887118272';
                            countyID['ID_00281'] = '905037504';
                            countyID['ID_00502'] = '926201088';
                            countyID['ID_00481'] = '1115515008';
                            countyID['ID_00506'] = '1125315968';
                            countyID['ID_00289'] = '1169863040';
                            countyID['ID_00527'] = '1180003968';
                            countyID['ID_00519'] = '1248316032';
                            countyID['ID_00294'] = '1264419968';
                            countyID['ID_00536'] = '1324171008';
                            countyID['ID_00535'] = '1371938048';
                            countyID['ID_00479'] = '1423389056';
                            countyID['ID_00542'] = '1437771008';
                            countyID['ID_00282'] = '1441260032';
                            countyID['ID_00295'] = '1478002048';
                            countyID['ID_00293'] = '1485998976';
                            countyID['ID_00517'] = '1512440960';
                            countyID['ID_00509'] = '1518124032';
                            countyID['ID_00537'] = '1525715968';
                            countyID['ID_00505'] = '1621730048';
                            countyID['ID_00534'] = '1640984960';
                            countyID['ID_00528'] = '1651177984';
                            countyID['ID_00488'] = '1652369024';
                            countyID['ID_00474'] = '1672214016';
                            countyID['ID_00271'] = '1739527040';
                            countyID['ID_00518'] = '1859980032';
                            countyID['ID_00487'] = '1863633024';
                            countyID['ID_00530'] = '1870823936';
                            countyID['ID_00475'] = '1898370048';
                            countyID['ID_00516'] = '1936567040';
                            countyID['ID_00272'] = '1963661056';
                            countyID['ID_00278'] = '1975073024';
                            countyID['ID_00524'] = '1982711040';
                            countyID['ID_00287'] = '1986327040';
                            countyID['ID_00476'] = '2050179968';
                            countyID['ID_00477'] = '2054162048';
                            countyID['ID_00508'] = '2064513024';
                            countyID['ID_00539'] = '2073747968';
                            countyID['ID_00521'] = '2128574976';
                            countyID['ID_00525'] = '2152026112';
                            countyID['ID_00482'] = '2201762048';
                            countyID['ID_00483'] = '2218595072';
                            countyID['ID_00526'] = '2234412032';
                            countyID['ID_00484'] = '2254947072';
                            countyID['ID_00544'] = '2267857920';
                            countyID['ID_00545'] = '2276529920';
                            countyID['ID_00532'] = '2313007104';
                            countyID['ID_00495'] = '2332997888';
                            countyID['ID_00478'] = '2366173952';
                            countyID['ID_00291'] = '2367151104';
                            countyID['ID_00492'] = '2524918016';
                            countyID['ID_00515'] = '2558181888';
                            countyID['ID_00285'] = '2584775936';
                            countyID['ID_00500'] = '2611673088';
                            countyID['ID_00543'] = '2626420992';
                            countyID['ID_00523'] = '2706628096';
                            countyID['ID_00290'] = '2882578944';
                            countyID['ID_00531'] = '2970324992';
                            countyID['ID_00503'] = '3100836096';
                            countyID['ID_00274'] = '3133406976';
                            countyID['ID_00520'] = '3248817920';
                            countyID['ID_00480'] = '3256402944';
                            countyID['ID_00284'] = '3377698048';
                            countyID['ID_00499'] = '3624293120';
                            countyID['ID_00497'] = '3827646976';
                            countyID['ID_00541'] = '4001487872';
                            countyID['ID_00048'] = '5190573056';
                            countyID['ID_00227'] = '5390450176';
                            countyID['ID_00057'] = '5398073856';
                            countyID['ID_00046'] = '5763736064';
                            countyID['ID_00053'] = '5797814784';
                            countyID['ID_00047'] = '6211020800';
                            countyID['ID_00052'] = '6537113088';
                            countyID['ID_00051'] = '6801403904';
                            countyID['ID_00062'] = '6956478976';
                            countyID['ID_00059'] = '7392882176';
                            countyID['ID_00050'] = '8125044224';
                            countyID['ID_00049'] = '10347979776';
                            countyID['ID_00222'] = '10557129728';
                            countyID['ID_00061'] = '10759209984';
                            countyID['ID_00058'] = '11020099584';
                            countyID['ID_00045'] = '11069190144';
                            countyID['ID_00054'] = '12438960128';
                            countyID['ID_00228'] = '12656069632';
                            countyID['ID_00055'] = '13831449600';
                            countyID['ID_00065'] = '17979899904';
                            countyID['ID_00232'] = '20454629376';
                            countyID['ID_00245'] = '23785969664';
                            countyID['ID_00224'] = '27004899328';

                            countyID['ID_00176'] = 'Null';
                            countyID['ID_02245'] = 'Null';
                            countyID['ID_02575'] = 'Null';
                            countyID['ID_02183'] = 'Null';






                            //alert(countyID[countyKmlID]);
                            //alert(text);

                            Ext.getCmp('map_region').setValue(countyID[countyKmlID]);
                            Ext.getCmp('map_region2').setValue(countyID[countyKmlID]);
                            Ext.getCmp('map_region3').setValue(countyID[countyKmlID]);

                        });



                    }

                    if (Ext.getCmp('huc_radio').getValue() == true) {
                        conus.setMap(null);
                        lake.setMap(null);

                        clearOverlays();
                        statesLayer.setMap(null);
                        countiesLayer.setMap(null);
                        divsLayer.setMap(null);
                        psasLayer.setMap(null);
                        stationsLayer.setMap(null);
                        hucsLayer.setMap(this);


                        // On kml click
                        google.maps.event.addListener(hucsLayer, 'click', function (kmlEvent) {

                            // Code to get ran on kml click if radio button remains the same
                            var hucKmlID = kmlEvent.featureData.id;
                            var hucID = new Array;
                            hucID['ID_00190'] = '3110202';
                            hucID['ID_00193'] = '8070202';
                            hucID['ID_00170'] = '15070102';
                            hucID['ID_00113'] = '11020001';
                            hucID['ID_00086'] = '4110003';
                            hucID['ID_00014'] = '4010101';
                            hucID['ID_00072'] = '16010201';
                            hucID['ID_00099'] = '7110001';
                            hucID['ID_00131'] = '11040005';
                            hucID['ID_00008'] = '10010001';
                            hucID['ID_00157'] = '15060201';
                            hucID['ID_00042'] = '7040007';
                            hucID['ID_00173'] = '8050001';
                            hucID['ID_00031'] = '10020006';
                            hucID['ID_00044'] = '17050200';
                            hucID['ID_00179'] = '13030101';
                            hucID['ID_00076'] = '10210008';
                            hucID['ID_00144'] = '11080001';
                            hucID['ID_00147'] = '11090104';
                            hucID['ID_00073'] = '1090001';
                            hucID['ID_00110'] = '2060002';
                            hucID['ID_00184'] = '3170001';
                            hucID['ID_00164'] = '8030204';
                            hucID['ID_00104'] = '14010001';
                            hucID['ID_00163'] = '3150101';
                            hucID['ID_00079'] = '5010002';
                            hucID['ID_00105'] = '2070004';
                            hucID['ID_00058'] = '7060001';
                            hucID['ID_00077'] = '16020309';
                            hucID['ID_00053'] = '7100001';
                            hucID['ID_00098'] = '14060003';
                            hucID['ID_00030'] = '1020002';
                            hucID['ID_00176'] = '12030103';
                            hucID['ID_00200'] = '13080001';
                            hucID['ID_00149'] = '3020102';
                            hucID['ID_00034'] = '7050002';
                            hucID['ID_00013'] = '10040104';
                            hucID['ID_00080'] = '18020000';
                            hucID['ID_00101'] = '16050104';
                            hucID['ID_00153'] = '15030101';
                            hucID['ID_00151'] = '3030002';
                            hucID['ID_00011'] = '17100100';
                            hucID['ID_00075'] = '1100005';
                            hucID['ID_00150'] = '11110103';
                            hucID['ID_00017'] = '10160001';
                            hucID['ID_00025'] = '7030003';
                            hucID['ID_00066'] = '10150006';
                            hucID['ID_00202'] = '3090101';
                            hucID['ID_00028'] = '17070106';
                            hucID['ID_00027'] = '4080300';
                            hucID['ID_00000'] = '9030009';
                            hucID['ID_00010'] = '10110101';
                            hucID['ID_00012'] = '4020300';
                            hucID['ID_00183'] = '13070007';
                            hucID['ID_00186'] = '12070201';
                            hucID['ID_00195'] = '8090201';
                            hucID['ID_00117'] = '5100101';
                            hucID['ID_00109'] = '5090202';
                            hucID['ID_00062'] = '10230003';
                            hucID['ID_00095'] = '16060007';
                            hucID['ID_00203'] = '13090001';
                            hucID['ID_00175'] = '12080001';
                            hucID['ID_00045'] = '10120202';
                            hucID['ID_00036'] = '10080015';
                            hucID['ID_00141'] = '11050001';
                            hucID['ID_00063'] = '4050006';
                            hucID['ID_00130'] = '5110005';
                            hucID['ID_00126'] = '5070102';
                            hucID['ID_00090'] = '2030101';
                            hucID['ID_00088'] = '7130001';
                            hucID['ID_00121'] = '5050008';
                            hucID['ID_00091'] = '10190016';
                            hucID['ID_00142'] = '8010100';
                            hucID['ID_00111'] = '10300101';
                            hucID['ID_00103'] = '5020005';
                            hucID['ID_00107'] = '10260012';
                            hucID['ID_00085'] = '10200201';
                            hucID['ID_00023'] = '10090209';
                            hucID['ID_00005'] = '9020311';
                            hucID['ID_00108'] = '16030005';
                            hucID['ID_00197'] = '3080103';
                            hucID['ID_00143'] = '6040006';
                            hucID['ID_00038'] = '17090012';
                            hucID['ID_00015'] = '10100004';
                            hucID['ID_00026'] = '4060106';
                            hucID['ID_00009'] = '10030203';
                            hucID['ID_00049'] = '10140103';
                            hucID['ID_00134'] = '11060003';
                            hucID['ID_00024'] = '4030107';
                            hucID['ID_00145'] = '11100102';
                            hucID['ID_00178'] = '12060101';
                            hucID['ID_00180'] = '15050100';
                            hucID['ID_00158'] = '11120302';
                            hucID['ID_00069'] = '10180007';
                            hucID['ID_00060'] = '4040003';
                            hucID['ID_00046'] = '2010007';
                            hucID['ID_00018'] = '7010101';
                            hucID['ID_00146'] = '15020018';
                            hucID['ID_00128'] = '18090100';
                            hucID['ID_00129'] = '14080203';
                            hucID['ID_00165'] = '11140103';
                            hucID['ID_00116'] = '14070002';
                            hucID['ID_00089'] = '14050004';
                            hucID['ID_00122'] = '11070201';
                            hucID['ID_00068'] = '4120104';
                            hucID['ID_00115'] = '14020004';
                            hucID['ID_00065'] = '4130001';
                            hucID['ID_00082'] = '4100001';
                            hucID['ID_00166'] = '8040101';
                            hucID['ID_00016'] = '10130101';
                            hucID['ID_00019'] = '17060108';
                            hucID['ID_00188'] = '12090107';
                            hucID['ID_00154'] = '13060001';
                            hucID['ID_00054'] = '1070001';
                            hucID['ID_00033'] = '7020002';
                            hucID['ID_00051'] = '1060001';
                            hucID['ID_00120'] = '2080103';
                            hucID['ID_00097'] = '10250007';
                            hucID['ID_00191'] = '13040100';
                            hucID['ID_00135'] = '5130102';
                            hucID['ID_00171'] = '12050005';
                            hucID['ID_00056'] = '4140102';
                            hucID['ID_00174'] = '15040004';
                            hucID['ID_00137'] = '18060000';
                            hucID['ID_00127'] = '13010003';
                            hucID['ID_00125'] = '18050002';
                            hucID['ID_00185'] = '15080101';
                            hucID['ID_00168'] = '18070102';
                            hucID['ID_00162'] = '3060101';
                            hucID['ID_00156'] = '6020004';
                            hucID['ID_00087'] = '5030102';
                            hucID['ID_00118'] = '5140101';
                            hucID['ID_00052'] = '17120002';
                            hucID['ID_00007'] = '17020008';
                            hucID['ID_00119'] = '10290108';
                            hucID['ID_00161'] = '18100100';
                            hucID['ID_00061'] = '4090001';
                            hucID['ID_00037'] = '1050001';
                            hucID['ID_00047'] = '1110000';
                            hucID['ID_00029'] = '4070001';
                            hucID['ID_00001'] = '17110002';
                            hucID['ID_00084'] = '18080000';
                            hucID['ID_00092'] = '10280102';
                            hucID['ID_00093'] = '5120106';
                            hucID['ID_00096'] = '5040001';
                            hucID['ID_00041'] = '1040001';
                            hucID['ID_00177'] = '8060201';
                            hucID['ID_00094'] = '10270201';
                            hucID['ID_00040'] = '10170202';
                            hucID['ID_00133'] = '11010007';
                            hucID['ID_00194'] = '8080203';
                            hucID['ID_00152'] = '3050101';
                            hucID['ID_00057'] = '7080201';
                            hucID['ID_00167'] = '3130001';
                            hucID['ID_00138'] = '6010205';
                            hucID['ID_00189'] = '3140301';
                            hucID['ID_00043'] = '1080101';
                            hucID['ID_00123'] = '18040012';
                            hucID['ID_00022'] = '17080004';
                            hucID['ID_00078'] = '2040101';
                            hucID['ID_00159'] = '6030003';
                            hucID['ID_00074'] = '10220001';
                            hucID['ID_00070'] = '7120006';
                            hucID['ID_00102'] = '5080001';
                            hucID['ID_00064'] = '14040101';
                            hucID['ID_00198'] = '12100201';
                            hucID['ID_00050'] = '17040202';
                            hucID['ID_00055'] = '2020001';
                            hucID['ID_00106'] = '7140201';
                            hucID['ID_00039'] = '1030001';
                            hucID['ID_00139'] = '18030010';
                            hucID['ID_00187'] = '12020001';
                            hucID['ID_00192'] = '3120002';
                            hucID['ID_00172'] = '3070101';
                            hucID['ID_00181'] = '3180001';
                            hucID['ID_00081'] = '16040201';
                            hucID['ID_00140'] = '13020101';
                            hucID['ID_00136'] = '3010101';
                            hucID['ID_00059'] = '7090001';
                            hucID['ID_00182'] = '12010001';
                            hucID['ID_00100'] = '5060001';
                            hucID['ID_00006'] = '9010001';
                            hucID['ID_00132'] = '8020202';
                            hucID['ID_00021'] = '1010001';
                            hucID['ID_00048'] = '4150301';
                            hucID['ID_00071'] = '2050101';
                            hucID['ID_00169'] = '3160101';
                            hucID['ID_00155'] = '11130302';
                            hucID['ID_00035'] = '7070001';
                            hucID['ID_00148'] = '3040101';
                            hucID['ID_00020'] = '17030000';
                            hucID['ID_00032'] = '10070007';
                            hucID['ID_00004'] = '10060004';
                            hucID['ID_00196'] = '12040101';
                            hucID['ID_00083'] = '10240002';
                            hucID['ID_00199'] = '12110102';
                            hucID['ID_00160'] = '13050001';
                            hucID['ID_00112'] = '14030001';
                            hucID['ID_00114'] = '15010011';
                            hucID['ID_00003'] = '10050011';
                            hucID['ID_00124'] = '11030002';
                            hucID['ID_00067'] = '18010200';
                            hucID['ID_00201'] = '3100208';
                            hucID['ID_00002'] = '17010104';
                            //alert(hucID[hucKmlID]);
                            //alert(text);


                            Ext.getCmp('map_region').setValue(hucID[hucKmlID]);
                            Ext.getCmp('map_region2').setValue(hucID[hucKmlID]);
                            Ext.getCmp('map_region3').setValue(hucID[hucKmlID]);
                        });

                    }

                    if (Ext.getCmp('div_radio').getValue() == true) {

                        conus.setMap(null);
                        lake.setMap(null);
                        clearOverlays();
                        statesLayer.setMap(null);
                        countiesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        psasLayer.setMap(null);
                        stationsLayer.setMap(null);
                        divsLayer.setMap(this);

                        // On kml click
                        google.maps.event.addListener(divsLayer, 'click', function (kmlEvent) {




                            // Code to get ran on kml click if radio button remains the same
                            var divKmlID = kmlEvent.featureData.id;
                            var divID = new Array;
                            divID['ID_00290'] = '10002';
                            divID['ID_00322'] = '10007';
                            divID['ID_00298'] = '10004';
                            divID['ID_00333'] = '10008';
                            divID['ID_00293'] = '10001';
                            divID['ID_00309'] = '10005';
                            divID['ID_00317'] = '10006';
                            divID['ID_00302'] = '10003';
                            divID['ID_00288'] = '30005';
                            divID['ID_00287'] = '30006';
                            divID['ID_00267'] = '30002';
                            divID['ID_00266'] = '30003';
                            divID['ID_00268'] = '30001';
                            divID['ID_00310'] = '30008';
                            divID['ID_00304'] = '30009';
                            divID['ID_00301'] = '30007';
                            divID['ID_00279'] = '30004';
                            divID['ID_00289'] = '20004';
                            divID['ID_00262'] = '20003';
                            divID['ID_00243'] = '20002';
                            divID['ID_00239'] = '20001';
                            divID['ID_00295'] = '20006';
                            divID['ID_00305'] = '20007';
                            divID['ID_00281'] = '20005';
                            divID['ID_00191'] = '40004';
                            divID['ID_00087'] = '40001';
                            divID['ID_00107'] = '40003';
                            divID['ID_00105'] = '40002';
                            divID['ID_00178'] = '40005';
                            divID['ID_00246'] = '40006';
                            divID['ID_00211'] = '40007';
                            divID['ID_00217'] = '50001';
                            divID['ID_00163'] = '50002';
                            divID['ID_00180'] = '50003';
                            divID['ID_00170'] = '50004';
                            divID['ID_00231'] = '50005';
                            divID['ID_00108'] = '60002';
                            divID['ID_00121'] = '60003';
                            divID['ID_00112'] = '60001';
                            divID['ID_00171'] = '70001';
                            divID['ID_00188'] = '70002';
                            divID['ID_00346'] = '80005';
                            divID['ID_00345'] = '80006';
                            divID['ID_00332'] = '80002';
                            divID['ID_00342'] = '80003';
                            divID['ID_00334'] = '80001';
                            divID['ID_00343'] = '80004';
                            divID['ID_00307'] = '90005';
                            divID['ID_00306'] = '90006';
                            divID['ID_00284'] = '90002';
                            divID['ID_00282'] = '90003';
                            divID['ID_00286'] = '90001';
                            divID['ID_00323'] = '90008';
                            divID['ID_00318'] = '90009';
                            divID['ID_00324'] = '90007';
                            divID['ID_00308'] = '90004';
                            divID['ID_00146'] = '130005';
                            divID['ID_00148'] = '130006';
                            divID['ID_00128'] = '130002';
                            divID['ID_00127'] = '130003';
                            divID['ID_00129'] = '130001';
                            divID['ID_00167'] = '130008';
                            divID['ID_00164'] = '130009';
                            divID['ID_00169'] = '130007';
                            divID['ID_00147'] = '130004';
                            divID['ID_00014'] = '100004';
                            divID['ID_00095'] = '100007';
                            divID['ID_00072'] = '100010';
                            divID['ID_00027'] = '100003';
                            divID['ID_00032'] = '100002';
                            divID['ID_00054'] = '100008';
                            divID['ID_00009'] = '100001';
                            divID['ID_00084'] = '100006';
                            divID['ID_00061'] = '100005';
                            divID['ID_00077'] = '100009';
                            divID['ID_00174'] = '110004';
                            divID['ID_00166'] = '110005';
                            divID['ID_00208'] = '110007';
                            divID['ID_00143'] = '110002';
                            divID['ID_00145'] = '110001';
                            divID['ID_00232'] = '110009';
                            divID['ID_00229'] = '110008';
                            divID['ID_00177'] = '110003';
                            divID['ID_00205'] = '110006';
                            divID['ID_00182'] = '120005';
                            divID['ID_00184'] = '120006';
                            divID['ID_00155'] = '120002';
                            divID['ID_00154'] = '120003';
                            divID['ID_00156'] = '120001';
                            divID['ID_00219'] = '120008';
                            divID['ID_00213'] = '120009';
                            divID['ID_00221'] = '120007';
                            divID['ID_00189'] = '120004';
                            divID['ID_00225'] = '140005';
                            divID['ID_00226'] = '140006';
                            divID['ID_00212'] = '140002';
                            divID['ID_00214'] = '140003';
                            divID['ID_00209'] = '140001';
                            divID['ID_00237'] = '140008';
                            divID['ID_00242'] = '140009';
                            divID['ID_00238'] = '140007';
                            divID['ID_00224'] = '140004';
                            divID['ID_00220'] = '150003';
                            divID['ID_00233'] = '150002';
                            divID['ID_00223'] = '150004';
                            divID['ID_00240'] = '150001';
                            divID['ID_00331'] = '160005';
                            divID['ID_00336'] = '160006';
                            divID['ID_00320'] = '160002';
                            divID['ID_00319'] = '160003';
                            divID['ID_00321'] = '160001';
                            divID['ID_00339'] = '160008';
                            divID['ID_00341'] = '160009';
                            divID['ID_00337'] = '160007';
                            divID['ID_00330'] = '160004';
                            divID['ID_00083'] = '190002';
                            divID['ID_00081'] = '190003';
                            divID['ID_00092'] = '190001';
                            divID['ID_00190'] = '180008';
                            divID['ID_00186'] = '180007';
                            divID['ID_00195'] = '180002';
                            divID['ID_00204'] = '180003';
                            divID['ID_00185'] = '180005';
                            divID['ID_00175'] = '180006';
                            divID['ID_00206'] = '180001';
                            divID['ID_00197'] = '180004';
                            divID['ID_00029'] = '170003';
                            divID['ID_00012'] = '170001';
                            divID['ID_00026'] = '170002';
                            divID['ID_00099'] = '200006';
                            divID['ID_00096'] = '200007';
                            divID['ID_00044'] = '200002';
                            divID['ID_00064'] = '200004';
                            divID['ID_00063'] = '200003';
                            divID['ID_00122'] = '200009';
                            divID['ID_00114'] = '200010';
                            divID['ID_00120'] = '200008';
                            divID['ID_00102'] = '200005';
                            divID['ID_00036'] = '200001';
                            divID['ID_00051'] = '210005';
                            divID['ID_00046'] = '210006';
                            divID['ID_00016'] = '210002';
                            divID['ID_00025'] = '210003';
                            divID['ID_00022'] = '210001';
                            divID['ID_00103'] = '210008';
                            divID['ID_00089'] = '210009';
                            divID['ID_00097'] = '210007';
                            divID['ID_00055'] = '210004';
                            divID['ID_00251'] = '230006';
                            divID['ID_00235'] = '230005';
                            divID['ID_00200'] = '230002';
                            divID['ID_00201'] = '230001';
                            divID['ID_00227'] = '230003';
                            divID['ID_00244'] = '230004';
                            divID['ID_00316'] = '220005';
                            divID['ID_00335'] = '220010';
                            divID['ID_00311'] = '220006';
                            divID['ID_00314'] = '220004';
                            divID['ID_00297'] = '220002';
                            divID['ID_00296'] = '220003';
                            divID['ID_00328'] = '220008';
                            divID['ID_00325'] = '220009';
                            divID['ID_00326'] = '220007';
                            divID['ID_00299'] = '220001';
                            divID['ID_00023'] = '240004';
                            divID['ID_00011'] = '240003';
                            divID['ID_00015'] = '240006';
                            divID['ID_00048'] = '240005';
                            divID['ID_00037'] = '240007';
                            divID['ID_00040'] = '240002';
                            divID['ID_00010'] = '240001';
                            divID['ID_00252'] = '310007';
                            divID['ID_00253'] = '310004';
                            divID['ID_00241'] = '310008';
                            divID['ID_00248'] = '310002';
                            divID['ID_00245'] = '310003';
                            divID['ID_00261'] = '310006';
                            divID['ID_00260'] = '310001';
                            divID['ID_00265'] = '310005';
                            divID['ID_00033'] = '320005';
                            divID['ID_00035'] = '320006';
                            divID['ID_00019'] = '320002';
                            divID['ID_00020'] = '320003';
                            divID['ID_00017'] = '320001';
                            divID['ID_00041'] = '320008';
                            divID['ID_00057'] = '320009';
                            divID['ID_00039'] = '320007';
                            divID['ID_00028'] = '320004';
                            divID['ID_00160'] = '250005';
                            divID['ID_00162'] = '250006';
                            divID['ID_00136'] = '250002';
                            divID['ID_00140'] = '250003';
                            divID['ID_00134'] = '250001';
                            divID['ID_00196'] = '250008';
                            divID['ID_00194'] = '250009';
                            divID['ID_00168'] = '250007';
                            divID['ID_00038'] = '270001';
                            divID['ID_00056'] = '270002';
                            divID['ID_00152'] = '280003';
                            divID['ID_00347'] = '280001';
                            divID['ID_00348'] = '280002';
                            divID['ID_00278'] = '290006';
                            divID['ID_00272'] = '290005';
                            divID['ID_00254'] = '290003';
                            divID['ID_00249'] = '290002';
                            divID['ID_00247'] = '290001';
                            divID['ID_00280'] = '290007';
                            divID['ID_00312'] = '290008';
                            divID['ID_00273'] = '290004';
                            divID['ID_00230'] = '260004';
                            divID['ID_00123'] = '260002';
                            divID['ID_00111'] = '260001';
                            divID['ID_00179'] = '260003';
                            divID['ID_00094'] = '300010';
                            divID['ID_00049'] = '300007';
                            divID['ID_00130'] = '300004';
                            divID['ID_00093'] = '300002';
                            divID['ID_00070'] = '300009';
                            divID['ID_00076'] = '300005';
                            divID['ID_00086'] = '300006';
                            divID['ID_00060'] = '300003';
                            divID['ID_00052'] = '300008';
                            divID['ID_00115'] = '300001';
                            divID['ID_00173'] = '330005';
                            divID['ID_00159'] = '330006';
                            divID['ID_00150'] = '330002';
                            divID['ID_00141'] = '330003';
                            divID['ID_00157'] = '330007';
                            divID['ID_00149'] = '330001';
                            divID['ID_00207'] = '330009';
                            divID['ID_00183'] = '330010';
                            divID['ID_00203'] = '330008';
                            divID['ID_00172'] = '330004';
                            divID['ID_00269'] = '340005';
                            divID['ID_00271'] = '340006';
                            divID['ID_00258'] = '340002';
                            divID['ID_00259'] = '340003';
                            divID['ID_00255'] = '340001';
                            divID['ID_00300'] = '340008';
                            divID['ID_00294'] = '340009';
                            divID['ID_00285'] = '340007';
                            divID['ID_00270'] = '340004';
                            divID['ID_00021'] = '350001';
                            divID['ID_00059'] = '350005';
                            divID['ID_00030'] = '350006';
                            divID['ID_00034'] = '350008';
                            divID['ID_00031'] = '350004';
                            divID['ID_00042'] = '350007';
                            divID['ID_00065'] = '350009';
                            divID['ID_00050'] = '350003';
                            divID['ID_00024'] = '350002';
                            divID['ID_00142'] = '360007';
                            divID['ID_00144'] = '360002';
                            divID['ID_00161'] = '360004';
                            divID['ID_00138'] = '360005';
                            divID['ID_00132'] = '360010';
                            divID['ID_00125'] = '360001';
                            divID['ID_00158'] = '360008';
                            divID['ID_00151'] = '360003';
                            divID['ID_00153'] = '360009';
                            divID['ID_00126'] = '360006';
                            divID['ID_00106'] = '370001';
                            divID['ID_00291'] = '380006';
                            divID['ID_00276'] = '380001';
                            divID['ID_00274'] = '380003';
                            divID['ID_00277'] = '380004';
                            divID['ID_00275'] = '380002';
                            divID['ID_00303'] = '380007';
                            divID['ID_00292'] = '380005';
                            divID['ID_00091'] = '390004';
                            divID['ID_00085'] = '390006';
                            divID['ID_00088'] = '390007';
                            divID['ID_00068'] = '390002';
                            divID['ID_00069'] = '390003';
                            divID['ID_00066'] = '390001';
                            divID['ID_00116'] = '390008';
                            divID['ID_00113'] = '390009';
                            divID['ID_00098'] = '390005';
                            divID['ID_00256'] = '400002';
                            divID['ID_00250'] = '400001';
                            divID['ID_00257'] = '400003';
                            divID['ID_00263'] = '400004';
                            divID['ID_00315'] = '410004';
                            divID['ID_00329'] = '410006';
                            divID['ID_00264'] = '410001';
                            divID['ID_00283'] = '410002';
                            divID['ID_00313'] = '410003';
                            divID['ID_00338'] = '410007';
                            divID['ID_00344'] = '410009';
                            divID['ID_00327'] = '410005';
                            divID['ID_00340'] = '410008';
                            divID['ID_00234'] = '420002';
                            divID['ID_00137'] = '420003';
                            divID['ID_00139'] = '420005';
                            divID['ID_00193'] = '420004';
                            divID['ID_00202'] = '420007';
                            divID['ID_00176'] = '420006';
                            divID['ID_00133'] = '420001';
                            divID['ID_00215'] = '440005';
                            divID['ID_00218'] = '440002';
                            divID['ID_00199'] = '440004';
                            divID['ID_00236'] = '440006';
                            divID['ID_00210'] = '440001';
                            divID['ID_00222'] = '440003';
                            divID['ID_00043'] = '430001';
                            divID['ID_00067'] = '430003';
                            divID['ID_00047'] = '430002';
                            divID['ID_00002'] = '450005';
                            divID['ID_00013'] = '450008';
                            divID['ID_00001'] = '450004';
                            divID['ID_00004'] = '450006';
                            divID['ID_00008'] = '450002';
                            divID['ID_00006'] = '450009';
                            divID['ID_00005'] = '450007';
                            divID['ID_00018'] = '450010';
                            divID['ID_00000'] = '450003';
                            divID['ID_00003'] = '450001';
                            divID['ID_00090'] = '470005';
                            divID['ID_00074'] = '470006';
                            divID['ID_00053'] = '470002';
                            divID['ID_00062'] = '470003';
                            divID['ID_00045'] = '470001';
                            divID['ID_00117'] = '470008';
                            divID['ID_00119'] = '470009';
                            divID['ID_00118'] = '470007';
                            divID['ID_00079'] = '470004';
                            divID['ID_00192'] = '460004';
                            divID['ID_00198'] = '460002';
                            divID['ID_00187'] = '460006';
                            divID['ID_00165'] = '460001';
                            divID['ID_00228'] = '460005';
                            divID['ID_00216'] = '460003';
                            divID['ID_00080'] = '480006';
                            divID['ID_00073'] = '480004';
                            divID['ID_00104'] = '480007';
                            divID['ID_00110'] = '480003';
                            divID['ID_00124'] = '480008';
                            divID['ID_00075'] = '480005';
                            divID['ID_00078'] = '480002';
                            divID['ID_00131'] = '480010';
                            divID['ID_00100'] = '480009';
                            divID['ID_00071'] = '480001';

                            divID['ID_00181'] = '180007';
                            divID['ID_00101'] = '190003';
                            divID['ID_00058'] = '200002';
                            divID['ID_00135'] = '300004';
                            divID['ID_00109'] = '370001';
                            divID['ID_00007'] = '450003';
                            divID['ID_00082'] = '470006';









                            Ext.getCmp('map_region').setValue(divID[divKmlID]);
                            Ext.getCmp('map_region2').setValue(divID[divKmlID]);
                            Ext.getCmp('map_region3').setValue(divID[divKmlID]);
                            //alert(divID[divKmlID]);
                            //alert(text);

                        });

                    }


                    if (Ext.getCmp('psa_radio').getValue() == true) {
                        conus.setMap(null);
                        lake.setMap(null);
                        clearOverlays();
                        countiesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        divsLayer.setMap(null);
                        statesLayer.setMap(null);
                        stationsLayer.setMap(null);
                        psasLayer.setMap(this);



                        // On kml click
                        google.maps.event.addListener(psasLayer, 'click', function (kmlEvent) {





                            // Code to get ran on kml click if radio button remains the same
                            var psaKmlID = kmlEvent.featureData.id;
                            var psaID = new Array;
                            psaID['ID_00150'] = '10590770';
                            psaID['ID_00171'] = '16133710';
                            psaID['ID_00095'] = '10268900';
                            psaID['ID_00137'] = '8570306';
                            psaID['ID_00140'] = '17763890';
                            psaID['ID_00124'] = '2525018';
                            psaID['ID_00115'] = '125256';
                            psaID['ID_00118'] = '3066039';
                            psaID['ID_00023'] = '6405418';
                            psaID['ID_00041'] = '1052556';
                            psaID['ID_00039'] = '6332909';
                            psaID['ID_00048'] = '1190428';
                            psaID['ID_00087'] = '2797856';
                            psaID['ID_00010'] = '5516381';
                            psaID['ID_00033'] = '8205599';
                            psaID['ID_00050'] = '6909481';
                            psaID['ID_00154'] = '7014783';
                            psaID['ID_00132'] = '2809204';
                            psaID['ID_00123'] = '4453669';
                            psaID['ID_00093'] = '3847684';
                            psaID['ID_00142'] = '9709611';
                            psaID['ID_00002'] = '24345310';
                            psaID['ID_00065'] = '7186930';
                            psaID['ID_00058'] = '21414020';
                            psaID['ID_00145'] = '4415318';
                            psaID['ID_00026'] = '21328370';
                            psaID['ID_00108'] = '2909367';
                            psaID['ID_00114'] = '7074204';
                            psaID['ID_00089'] = '38854500';
                            psaID['ID_00012'] = '11065590';
                            psaID['ID_00008'] = '4038318';
                            psaID['ID_00009'] = '4011822';
                            psaID['ID_00013'] = '15740800';
                            psaID['ID_00025'] = '9460885';
                            psaID['ID_00046'] = '16280260';
                            psaID['ID_00034'] = '8515108';
                            psaID['ID_00151'] = '3433190';
                            psaID['ID_00158'] = '781017';
                            psaID['ID_00006'] = '24437940';
                            psaID['ID_00113'] = '1186495';
                            psaID['ID_00070'] = '5022585';
                            psaID['ID_00188'] = '10622160';
                            psaID['ID_00189'] = '2170863';
                            psaID['ID_00183'] = '3875168';
                            psaID['ID_00181'] = '5501090';
                            psaID['ID_00180'] = '7863525';
                            psaID['ID_00192'] = '4014859';
                            psaID['ID_00193'] = '3671924';
                            psaID['ID_00186'] = '3322738';
                            psaID['ID_00125'] = '19157250';
                            psaID['ID_00160'] = '12775330';
                            psaID['ID_00156'] = '6403133';
                            psaID['ID_00173'] = '11802590';
                            psaID['ID_00179'] = '1883109';
                            psaID['ID_00004'] = '3734291';
                            psaID['ID_00088'] = '3478665';
                            psaID['ID_00096'] = '3929728';
                            psaID['ID_00107'] = '10113640';
                            psaID['ID_00100'] = '15872750';
                            psaID['ID_00169'] = '25470780';
                            psaID['ID_00185'] = '4111648';
                            psaID['ID_00182'] = '8173978';
                            psaID['ID_00060'] = '1947635';
                            psaID['ID_00083'] = '4308195';
                            psaID['ID_00165'] = '2691256';
                            psaID['ID_00024'] = '12075960';
                            psaID['ID_00075'] = '15805920';
                            psaID['ID_00085'] = '5408334';
                            psaID['ID_00120'] = '1279536';
                            psaID['ID_00170'] = '24390930';
                            psaID['ID_00152'] = '6920945';
                            psaID['ID_00017'] = '19404060';
                            psaID['ID_00136'] = '11950960';
                            psaID['ID_00138'] = '7036992';
                            psaID['ID_00141'] = '7743132';
                            psaID['ID_00063'] = '4670105';
                            psaID['ID_00057'] = '25358350';
                            psaID['ID_00021'] = '7001711';
                            psaID['ID_00020'] = '9017455';
                            psaID['ID_00068'] = '1594721';
                            psaID['ID_00003'] = '17696660';
                            psaID['ID_00072'] = '6601090';
                            psaID['ID_00119'] = '6416788';
                            psaID['ID_00071'] = '2548794';
                            psaID['ID_00078'] = '1518733';
                            psaID['ID_00044'] = '1743944';
                            psaID['ID_00005'] = '7302041';
                            psaID['ID_00007'] = '7925238';
                            psaID['ID_00074'] = '6628483';
                            psaID['ID_00130'] = '33023230';
                            psaID['ID_00133'] = '5109589';
                            psaID['ID_00069'] = '5225951';
                            psaID['ID_00129'] = '11139700';
                            psaID['ID_00064'] = '17431810';
                            psaID['ID_00066'] = '6584630';
                            psaID['ID_00032'] = '9518475';
                            psaID['ID_00053'] = '32424260';
                            psaID['ID_00051'] = '13879060';
                            psaID['ID_00000'] = '19823350';
                            psaID['ID_00127'] = '15858230';
                            psaID['ID_00128'] = '15647690';
                            psaID['ID_00126'] = '24206110';
                            psaID['ID_00030'] = '19017380';
                            psaID['ID_00080'] = '3995852';
                            psaID['ID_00117'] = '3189719';
                            psaID['ID_00131'] = '5257330';
                            psaID['ID_00148'] = '9684342';
                            psaID['ID_00163'] = '3405079';
                            psaID['ID_00155'] = '7586014';
                            psaID['ID_00090'] = '29756510';
                            psaID['ID_00037'] = '24218230';
                            psaID['ID_00081'] = '15721250';
                            psaID['ID_00040'] = '2852407';
                            psaID['ID_00112'] = '3634152';
                            psaID['ID_00054'] = '9142210';
                            psaID['ID_00031'] = '6677698';
                            psaID['ID_00157'] = '4683275';
                            psaID['ID_00164'] = '5762437';
                            psaID['ID_00147'] = '15785100';
                            psaID['ID_00091'] = '15228550';
                            psaID['ID_00172'] = '12682470';
                            psaID['ID_00015'] = '20688890';
                            psaID['ID_00161'] = '22195230';
                            psaID['ID_00111'] = '2491998';
                            psaID['ID_00049'] = '5808478';
                            psaID['ID_00104'] = '17346800';
                            psaID['ID_00028'] = '6702265';
                            psaID['ID_00168'] = '2109120';
                            psaID['ID_00099'] = '5923675';
                            psaID['ID_00016'] = '9042349';
                            psaID['ID_00121'] = '4204413';
                            psaID['ID_00109'] = '3098278';
                            psaID['ID_00162'] = '12853480';
                            psaID['ID_00042'] = '8973356';
                            psaID['ID_00178'] = '13397360';
                            psaID['ID_00055'] = '10700640';
                            psaID['ID_00097'] = '13996330';
                            psaID['ID_00059'] = '15610400';
                            psaID['ID_00022'] = '41851460';
                            psaID['ID_00105'] = '8945010';
                            psaID['ID_00134'] = '19014940';
                            psaID['ID_00135'] = '8218597';
                            psaID['ID_00194'] = '2915476';
                            psaID['ID_00166'] = '6587287';
                            psaID['ID_00159'] = '12632700';
                            psaID['ID_00176'] = '15630630';
                            psaID['ID_00175'] = '17549480';
                            psaID['ID_00167'] = '9941277';
                            psaID['ID_00177'] = '11427700';
                            psaID['ID_00191'] = '6408268';
                            psaID['ID_00187'] = '19823120';
                            psaID['ID_00174'] = '15941480';
                            psaID['ID_00184'] = '6302913';
                            psaID['ID_00077'] = '0';
                            psaID['ID_00079'] = '2407598';
                            psaID['ID_00103'] = '3174877';
                            psaID['ID_00144'] = '3379142';
                            psaID['ID_00045'] = '4540549';
                            psaID['ID_00038'] = '10874200';
                            psaID['ID_00116'] = '3580608';
                            psaID['ID_00098'] = '13485160';
                            psaID['ID_00094'] = '6868144';
                            psaID['ID_00001'] = '13470510';
                            psaID['ID_00019'] = '8885838';
                            psaID['ID_00036'] = '7754100';
                            psaID['ID_00047'] = '6913197';
                            psaID['ID_00062'] = '5387169';
                            psaID['ID_00061'] = '2560457';
                            psaID['ID_00092'] = '1689509';
                            psaID['ID_00082'] = '2472144';
                            psaID['ID_00084'] = '11528880';
                            psaID['ID_00073'] = '13581580';
                            psaID['ID_00067'] = '6702463';
                            psaID['ID_00102'] = '7509654';
                            psaID['ID_00086'] = '4909330';
                            psaID['ID_00139'] = '530649';
                            psaID['ID_00106'] = '1851844';
                            psaID['ID_00101'] = '10794280';
                            psaID['ID_00035'] = '7376647';
                            psaID['ID_00014'] = '10972570';
                            psaID['ID_00143'] = '10941440';
                            psaID['ID_00146'] = '4970221';
                            psaID['ID_00149'] = '2676890';
                            psaID['ID_00043'] = '6545025';
                            psaID['ID_00153'] = '12127570';
                            psaID['ID_00052'] = '10814500';
                            psaID['ID_00018'] = '20585150';
                            psaID['ID_00076'] = '16335590';
                            psaID['ID_00122'] = '10794280';
                            
                            psaID['ID_00056'] = 'Null';
                            psaID['ID_00110'] = 'Null';
                            psaID['ID_00029'] = 'Null';

                            psaID['ID_00190'] = '15941480';

                            psaID['ID_00027'] = '7001711';
                            psaID['ID_00011'] = '11065590';



	



                            Ext.getCmp('map_region').setValue(psaID[psaKmlID]);
                            Ext.getCmp('map_region2').setValue(psaID[psaKmlID]);
                            Ext.getCmp('map_region3').setValue(psaID[psaKmlID]);

                        });

                    }




                    if (Ext.getCmp('station_radio').getValue() == true) {
                        conus.setMap(null);
                        lake.setMap(null);
                        clearOverlays();
                        countiesLayer.setMap(null);
                        hucsLayer.setMap(null);
                        divsLayer.setMap(null);
                        statesLayer.setMap(null);
                        psasLayer.setMap(null);
                        stationsLayer.setMap(this);



                        // On kml click
                        google.maps.event.addListener(stationsLayer, 'click', function (kmlEvent) {





                            // Code to get ran on kml click if radio button remains the same
                            var stationKmlID = kmlEvent.featureData.name;

                            Ext.getCmp('map_region').setValue(stationKmlID);
                            Ext.getCmp('map_region2').setValue(stationKmlID);
                            Ext.getCmp('map_region3').setValue(stationKmlID);


                        });

                    }


                });













                if (typeof this.setCenter === 'object') {
                    if (typeof this.setCenter.geoCodeAddr === 'string') {
                        this.geoCodeLookup(this.setCenter.geoCodeAddr, this.setCenter.marker, false, true, this.setCenter.listeners);
                    } else {
                        if (this.gmapType === 'map') {
                            var point = new google.maps.LatLng(this.setCenter.lat, this.setCenter.lng);
                            this.getMap().setCenter(point, this.zoomLevel);
                            this.lastCenter = point;
                        }
                        if (typeof this.setCenter.marker === 'object' && typeof point === 'object') {
                            this.addMarker(point, this.setCenter.marker, this.setCenter.marker.clear);
                        }
                    }
                    if (this.gmapType === 'panorama') {
                        this.getMap().setLocationAndPOV(new google.maps.LatLng(this.setCenter.lat, this.setCenter.lng), {
                            yaw: this.yaw,
                            pitch: this.pitch,
                            zoom: this.zoomLevel
                        });
                    }
                }

            }).defer(200, this);

        } else {
            this.on('afterrender', this.apiReady, this);
        }
    },
    // private
    afterRender: function () {

        var wh = this.ownerCt.getSize();
        Ext.applyIf(this, wh);

        Ext.ux.GMapPanel.superclass.afterRender.call(this);

    },
    // private
    buildScriptTag: function (filename, callback) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName("head")[0];
        script.type = "text/javascript";
        script.src = filename;

        return head.appendChild(script);
    },
    // private
    onMapReady: function () {

        this.addMapControls();
        this.addOptions();

        this.addMarkers(this.markers);

        this.fireEvent('mapready', this, this.getMap());

    },
    // private
    onResize: function (w, h) {

        Ext.ux.GMapPanel.superclass.onResize.call(this, w, h);

        // check for the existance of the google map in case the onResize fires too early
        if (typeof this.getMap() == 'object') {
            google.maps.event.trigger(this.getMap(), 'resize');
            if (this.lastCenter) {
                this.getMap().setCenter(this.lastCenter, this.zoomLevel);
            }
        }

    },
    // private
    setSize: function (width, height, animate) {

        Ext.ux.GMapPanel.superclass.setSize.call(this, width, height, animate);

        // check for the existance of the google map in case setSize is called too early
        if (Ext.isObject(this.getMap())) {
            google.maps.event.trigger(this.getMap(), 'resize');
            if (this.lastCenter) {
                this.getMap().setCenter(this.lastCenter, this.zoomLevel);
            }
        }

    },
    // private
    dragEnd: function () {
        this.lastCenter = this.getMap().getCenter();
    },
    /**
     * Returns the current google map which can be used to call Google Maps API specific handlers.
     * @return {GMap} this
     */
    getMap: function () {

        return this.gmap;

    },
    /**
     * Returns the maps center as a GLatLng object
     * @return {GLatLng} this
     */
    getCenter: function () {

        return this.getMap().getCenter();

    },
    /**
     * Returns the maps center as a simple object
     * @return {Object} this has lat and lng properties only
     */
    getCenterLatLng: function () {

        var ll = this.getCenter();
        return {
            lat: ll.lat(),
            lng: ll.lng()
        };

    },
    /**
     * Creates markers from the array that is passed in. Each marker must consist of at least
     * <code>lat</code> and <code>lng</code> properties or a <code>geoCodeAddr</code>.
     * @param {Array} markers an array of marker objects
     */
    addMarkers: function (markers) {
        if (Ext.isArray(markers)) {
            for (var i = 0; i < markers.length; i++) {
                if (markers[i]) {
                    if (typeof markers[i].geoCodeAddr == 'string') {
                        this.geoCodeLookup(markers[i].geoCodeAddr, markers[i].marker, false, markers[i].setCenter, markers[i].listeners);
                    } else {
                        var mkr_point = new google.maps.LatLng(markers[i].lat, markers[i].lng);
                        this.addMarker(mkr_point, markers[i].marker, false, markers[i].setCenter, markers[i].listeners);
                    }
                }
            }
        }

    },
    /**
     * Creates a single marker.
     * @param {Object} point a GLatLng point
     * @param {Object} marker a marker object consisting of at least lat and lng
     * @param {Boolean} clear clear other markers before creating this marker
     * @param {Boolean} center true to center the map on this marker
     * @param {Object} listeners a listeners config
     */
    addMarker: function (point, marker, clear, center, listeners) {

        Ext.applyIf(marker, {});

        if (clear === true) {
            this.clearMarkers();
        }
        if (center === true) {
            this.getMap().setCenter(point, this.zoomLevel)
            this.lastCenter = point;
        }

        var mark = new google.maps.Marker(Ext.apply(marker, {
            position: point
        }));

        if (marker.infoWindow) {
            this.createInfoWindow(marker.infoWindow, point, mark);
        }

        this.cache.marker.push(mark);
        mark.setMap(this.getMap());

        if (typeof listeners === 'object') {
            for (evt in listeners) {
                google.maps.event.addListener(mark, evt, listeners[evt]);
            }
        }

        return mark;

    },
    /**
     * Creates a single polyline.
     * @param {Array} points an array of polyline points
     * @param {Object} linestyle an object defining the line style to use
     */
    addPolyline: function (points, linestyle) {

        var plinepnts = new google.maps.MVCArray,
            pline, linestyle = linestyle ? linestyle : {
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            };

        Ext.each(points, function (point) {
            plinepnts.push(new google.maps.LatLng(point.lat, point.lng));
        }, this);

        var pline = new google.maps.Polyline(Ext.apply({
            path: plinepnts
        }, linestyle));

        this.cache.polyline.push(pline);

        pline.setMap(this.getMap());

    },
    /**
     * Creates an Info Window.
     * @param {Object} inwin an Info Window configuration
     * @param {GLatLng} point the point to show the Info Window at
     * @param {GMarker} marker a marker to attach the Info Window to
     */
    createInfoWindow: function (inwin, point, marker) {

        var me = this,
            infoWindow = new google.maps.InfoWindow({
                content: inwin.content,
                position: point
            });

        if (marker) {
            google.maps.event.addListener(marker, 'click', function () {
                me.hideAllInfoWindows();
                infoWindow.open(me.getMap());
            });
        }

        this.cache.infowindow.push(infoWindow);

        return infoWindow;

    },
    // private
    hideAllInfoWindows: function () {
        for (var i = 0; i < this.cache.infowindow.length; i++) {
            this.cache.infowindow[i].close();
        }
    },
    // private
    clearMarkers: function () {

        this.hideAllInfoWindows();
        this.hideMarkers();

    },
    // private
    hideMarkers: function () {
        Ext.each(this.cache.marker, function (mrk) {
            mrk.setMap(null);
        });
    },
    // private
    showMarkers: function () {
        Ext.each(this.cache.marker, function (mrk) {
            mrk.setMap(this.getMap());
        }, this);
    },
    // private
    addMapControls: function () {

        if (this.gmapType === 'map') {
            if (Ext.isArray(this.mapControls)) {
                for (i = 0; i < this.mapControls.length; i++) {
                    //this.addMapControl(this.mapControls[i]);
                }
            } else if (typeof this.mapControls === 'string') {
                //this.addMapControl(this.mapControls);
            } else if (typeof this.mapControls === 'object') {
                //this.getMap().add_control(this.mapControls);
            }
        }

    },
    /**
     * Adds a GMap control to the map.
     * @param {String} mc a string representation of the control to be instantiated.
     */
    addMapControl: function (mc) {

        var mcf = window[mc];
        if (typeof mcf === 'function') {
            //this.getMap().addControl(new mcf());
        }

    },
    // private
    addOptions: function () {

        if (Ext.isArray(this.mapConfOpts)) {
            var mc;
            for (i = 0; i < this.mapConfOpts.length; i++) {
                //this.addOption(this.mapConfOpts[i]);
            }
        } else if (typeof this.mapConfOpts === 'string') {
            //this.addOption(this.mapConfOpts);
        }

    },
    /**
     * Adds a GMap option to the map.
     * @param {String} mo a string representation of the option to be instantiated.
     */
    addOption: function (mo) {

        var mof = this.getMap()[mo];
        if (typeof mof === 'function') {
            this.getMap()[mo]();
        }

    },
    /**
     * Looks up and address and optionally add a marker, center the map to this location, or
     * clear other markers. Sample usage:
     * <pre><code>
buttons: [
    {
        text: 'Fenway Park',
        handler: function(){
            var addr = '4 Yawkey Way, Boston, MA, 02215-3409, USA';
            Ext.getCmp('my_map').geoCodeLookup(addr, undefined, false, true, undefined);
        }
    },{
        text: 'Zoom Fenway Park',
        handler: function(){
            Ext.getCmp('my_map').zoomLevel = 19;
            var addr = '4 Yawkey Way, Boston, MA, 02215-3409, USA';
            Ext.getCmp('my_map').geoCodeLookup(addr, undefined, false, true, undefined);
        }
    },{
        text: 'Low Accuracy',
        handler: function(){
            Ext.getCmp('my_map').geoCodeLookup('Paris, France', undefined, false, true, undefined);
        }
    },{

        text: 'Bogus Address',
        handler: function(){
            var addr = 'Some Fake, Address, For, Errors';
            Ext.getCmp('my_map').geoCodeLookup(addr, undefined, false, true, undefined);
        }
    }
]
     * </code></pre>
     * @param {String} addr the address to lookup.
     * @param {Object} marker the marker to add (optional).
     * @param {Boolean} clear clear other markers before creating this marker
     * @param {Boolean} center true to set this point as the center of the map.
     * @param {Object} listeners a listeners config
     */
    geoCodeLookup: function (addr, marker, clear, center, listeners) {

        if (!this.geocoder) {
            this.geocoder = new google.maps.Geocoder();
        }
        this.geocoder.geocode({
            address: addr
        }, this.addAddressToMap.createDelegate(this, [addr, marker, clear, center, listeners], true));

    },
    // private 
    centerOnClientLocation: function () {
        this.getClientLocation(function (loc) {
            var point = new google.maps.LatLng(loc.latitude, loc.longitude);
            this.getMap().setCenter(point, this.zoomLevel);
            this.lastCenter = point;
        });
    },
    // private
    getClientLocation: function (fn, errorFn) {
        if (!errorFn) {
            errorFn = Ext.emptyFn;
        }
        if (!this.clientGeo) {
            this.clientGeo = google.gears.factory.create('beta.geolocation');
        }
        geo.getCurrentPosition(fn.createDelegate(this), errorFn);
    },
    // private
    addAddressToMap: function (response, status, addr, marker, clear, center, listeners) {
        if (!response || status !== 'OK') {
            this.respErrorMsg(status);
        } else {
            var place = response[0].geometry.location,
                accuracy = this.getLocationTypeInfo(response[0].geometry.location_type, 'level'),
                reqAccuracy = this.getLocationTypeInfo(this.minGeoAccuracy, 'level');
            if (accuracy === 0) {
                this.geoErrorMsg(this.geoErrorTitle, this.geoErrorMsgUnable);
            } else {
                if (accuracy < reqAccuracy) {
                    this.geoErrorMsg(this.geoErrorTitle, String.format(this.geoErrorMsgAccuracy, response[0].geometry.location_type, this.getLocationTypeInfo(response[0].geometry.location_type, 'msg')));
                } else {
                    point = new google.maps.LatLng(place.lat(), place.lng());
                    if (center) {
                        this.getMap().setCenter(point, this.zoomLevel);
                        this.lastCenter = point;
                    }
                    if (typeof marker === 'object') {
                        if (!marker.title) {
                            marker.title = response.formatted_address;
                        }
                        var mkr = this.addMarker(point, marker, clear, false, listeners);
                        if (marker.callback) {
                            marker.callback.call(this, mkr, point);
                        }
                    }
                }
            }
        }

    },
    // private
    geoErrorMsg: function (title, msg) {
        if (this.displayGeoErrors) {
            Ext.MessageBox.alert(title, msg);
        }
    },
    // private
    respErrorMsg: function (code) {
        Ext.each(this.respErrors, function (obj) {
            if (code == obj.code) {
                Ext.MessageBox.alert(this.respErrorTitle, obj.msg);
            }
        }, this);
    },
    // private
    getLocationTypeInfo: function (location_type, property) {
        var val = 0;
        Ext.each(this.locationTypes, function (itm) {
            if (itm.code === location_type) {
                val = itm[property];
            }
        });
        return val;
    }
});

Ext.reg('gmappanel', Ext.ux.GMapPanel);
