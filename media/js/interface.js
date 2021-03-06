Ext.onReady(function () {

    if (/wrcc.dri.edu/.test(window.location)) {
        URL = window.location.href; // include trailing slash
    } else {
        URL = "http://127.0.0.1:8000";
    }


    //Ext.MessageBox.alert('Welcome!', 'To get started read the how to on the left side of the page, then on the right side of the page click the drop down menus to access the tools.');


    var singleSpanStore = [
        ['1', "1-Month"]
    ]

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
        ['12', "12-Month"]
    ]

    var monthStore = [
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
        ['12', "December"]
    ]

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
        ['72', "72-Month"]
    ]

    var climatologySpanStore = [
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
        ['48', "48-Month"]
    ]

    var stateStore = [
        ['131170803712', 'Alabama'],
        ['294207291392', 'Arizona'],
        ['134771302400', 'Arkansas'],
        ['403466289152', 'California'],
        ['268431196160', 'Colorado'],
        ['12541639680', 'Connecticut'],
        ['5046704128', 'Delaware'],
        ['158114704', 'District of Columbia'],
        ['138887495680', 'Florida'],
        ['148959199232', 'Georgia'],
        ['214044704768', 'Idaho'],
        ['143793405952', 'Illinois'],
        ['92789186560', 'Indiana'],
        ['144669294592', 'Iowa'],
        ['211754106880', 'Kansas'],
        ['102269100032', 'Kentucky'],
        ['111897600000', 'Louisiana'],
        ['79882797056', 'Maine'],
        ['25141639168', 'Maryland'],
        ['20202059776', 'Massachusetts'],
        ['146435096576', 'Michigan'],
        ['206232305664', 'Minnesota'],
        ['121530703872', 'Mississippi'],
        ['178039701504', 'Missouri'],
        ['376961892352', 'Montana'],
        ['198973702144', 'Nebraska'],
        ['284331900928', 'Nevada'],
        ['23187259392', 'New Hampshire'],
        ['19047340032', 'New Jersey'],
        ['314160709632', 'New Mexico'],
        ['122056802304', 'New York'],
        ['125919797248', 'North Carolina'],
        ['178711199744', 'North Dakota'],
        ['105828696064', 'Ohio'],
        ['177660002304', 'Oklahoma'],
        ['248607801344', 'Oregon'],
        ['115883098112', 'Pennsylvania'],
        ['2677565952', 'Rhode Island'],
        ['77856841728', 'South Carolina'],
        ['196349607936', 'South Dakota'],
        ['106797899776', 'Tennessee'],
        ['676586979328', 'Texas'],
        ['212818296832', 'Utah'],
        ['23871029248', 'Vermont'],
        ['102278799360', 'Virginia'],
        ['172118999040', 'Washington'],
        ['62258679808', 'West Virginia'],
        ['140268093440', 'Wisconsin'],
        ['251470102528', 'Wyoming']
    ]

    var countyStore = [
        ['1539581952', 'AL - Autauga County'],
        ['4117521920', 'AL - Baldwin County'],
        ['2291819008', 'AL - Barbour County'],
        ['1612481024', 'AL - Bibb County'],
        ['1669961984', 'AL - Blount County'],
        ['1613057024', 'AL - Bullock County'],
        ['2011976960', 'AL - Butler County'],
        ['1569190016', 'AL - Calhoun County'],
        ['1545009024', 'AL - Chambers County'],
        ['1434076032', 'AL - Cherokee County'],
        ['1794483968', 'AL - Chilton County'],
        ['2365955072', 'AL - Choctaw County'],
        ['3207610112', 'AL - Clarke County'],
        ['1564252032', 'AL - Clay County'],
        ['1450653056', 'AL - Cleburne County'],
        ['1758529024', 'AL - Coffee County'],
        ['1534877056', 'AL - Colbert County'],
        ['2201894912', 'AL - Conecuh County'],
        ['1685890944', 'AL - Coosa County'],
        ['2668869888', 'AL - Covington County'],
        ['1576888064', 'AL - Crenshaw County'],
        ['1903228032', 'AL - Cullman County'],
        ['1453371008', 'AL - Dale County'],
        ['2534807040', 'AL - Dallas County'],
        ['2012662016', 'AL - DeKalb County'],
        ['1601868032', 'AL - Elmore County'],
        ['2447747072', 'AL - Escambia County'],
        ['1385618944', 'AL - Etowah County'],
        ['1625632000', 'AL - Fayette County'],
        ['1641587968', 'AL - Franklin County'],
        ['1487709952', 'AL - Geneva County'],
        ['1676007040', 'AL - Greene County'],
        ['1667804032', 'AL - Hale County'],
        ['1454925952', 'AL - Henry County'],
        ['1501737984', 'AL - Houston County'],
        ['2791664896', 'AL - Jackson County'],
        ['2878192128', 'AL - Jefferson County'],
        ['1566545024', 'AL - Lamar County'],
        ['1729328000', 'AL - Lauderdale County'],
        ['1788846976', 'AL - Lawrence County'],
        ['1573511040', 'AL - Lee County'],
        ['1450227968', 'AL - Limestone County'],
        ['1854200064', 'AL - Lowndes County'],
        ['1577005056', 'AL - Macon County'],
        ['2076115968', 'AL - Madison County'],
        ['2530113024', 'AL - Marengo County'],
        ['1922526976', 'AL - Marion County'],
        ['1465522944', 'AL - Marshall County'],
        ['3184222976', 'AL - Mobile County'],
        ['2656485120', 'AL - Monroe County'],
        ['2031191040', 'AL - Montgomery County'],
        ['1500476032', 'AL - Morgan County'],
        ['1863920000', 'AL - Perry County'],
        ['2282836992', 'AL - Pickens County'],
        ['1740716032', 'AL - Pike County'],
        ['1503617024', 'AL - Randolph County'],
        ['1660546048', 'AL - Russell County'],
        ['2032960000', 'AL - Shelby County'],
        ['1636619008', 'AL - St. Clair County'],
        ['2341058048', 'AL - Sumter County'],
        ['1908238976', 'AL - Talladega County'],
        ['1855779968', 'AL - Tallapoosa County'],
        ['3423329024', 'AL - Tuscaloosa County'],
        ['2049176960', 'AL - Walker County'],
        ['2797722112', 'AL - Washington County'],
        ['2301199872', 'AL - Wilcox County'],
        ['1587608064', 'AL - Winston County'],
        ['29001439232', 'AZ - Apache County'],
        ['15969059840', 'AZ - Cochise County'],
        ['48222691328', 'AZ - Coconino County'],
        ['12322990080', 'AZ - Gila County'],
        ['11972469760', 'AZ - Graham County'],
        ['4773673984', 'AZ - Greenlee County'],
        ['11653980160', 'AZ - La Paz County'],
        ['23828260864', 'AZ - Maricopa County'],
        ['34475548672', 'AZ - Mohave County'],
        ['25771470848', 'AZ - Navajo County'],
        ['23794309120', 'AZ - Pima County'],
        ['13896869888', 'AZ - Pinal County'],
        ['3203599104', 'AZ - Santa Cruz County'],
        ['21039769600', 'AZ - Yavapai County'],
        ['14281169920', 'AZ - Yuma County'],
        ['2560901888', 'AR - Arkansas County'],
        ['2396642048', 'AR - Ashley County'],
        ['1435587968', 'AR - Baxter County'],
        ['2194643968', 'AR - Benton County'],
        ['1528691968', 'AR - Boone County'],
        ['1681500032', 'AR - Bradley County'],
        ['1628017024', 'AR - Calhoun County'],
        ['1631917056', 'AR - Carroll County'],
        ['1668739968', 'AR - Chicot County'],
        ['2243121920', 'AR - Clark County'],
        ['1656205952', 'AR - Clay County'],
        ['1434055936', 'AR - Cleburne County'],
        ['1548252032', 'AR - Cleveland County'],
        ['1984066944', 'AR - Columbia County'],
        ['1430320000', 'AR - Conway County'],
        ['1831655936', 'AR - Craighead County'],
        ['1536107008', 'AR - Crawford County'],
        ['1579271936', 'AR - Crittenden County'],
        ['1596418048', 'AR - Cross County'],
        ['1728523008', 'AR - Dallas County'],
        ['1989504000', 'AR - Desha County'],
        ['2145431040', 'AR - Drew County'],
        ['1678013056', 'AR - Faulkner County'],
        ['1576931968', 'AR - Franklin County'],
        ['1601113984', 'AR - Fulton County'],
        ['1755444992', 'AR - Garland County'],
        ['1636376960', 'AR - Grant County'],
        ['1496232960', 'AR - Greene County'],
        ['1884268032', 'AR - Hempstead County'],
        ['1593367040', 'AR - Hot Spring County'],
        ['1524347008', 'AR - Howard County'],
        ['1978628992', 'AR - Independence County'],
        ['1503686016', 'AR - Izard County'],
        ['1641892992', 'AR - Jackson County'],
        ['2255220992', 'AR - Jefferson County'],
        ['1708882944', 'AR - Johnson County'],
        ['1368208000', 'AR - Lafayette County'],
        ['1521912960', 'AR - Lawrence County'],
        ['1560781056', 'AR - Lee County'],
        ['1454321024', 'AR - Lincoln County'],
        ['1378530048', 'AR - Little River County'],
        ['1834034048', 'AR - Logan County'],
        ['1996177024', 'AR - Lonoke County'],
        ['2160710912', 'AR - Madison County'],
        ['1546244992', 'AR - Marion County'],
        ['1620240000', 'AR - Miller County'],
        ['2332475904', 'AR - Mississippi County'],
        ['1572439040', 'AR - Monroe County'],
        ['2019879936', 'AR - Montgomery County'],
        ['1600189952', 'AR - Nevada County'],
        ['2126109952', 'AR - Newton County'],
        ['1897900032', 'AR - Ouachita County'],
        ['1428125952', 'AR - Perry County'],
        ['1801757952', 'AR - Phillips County'],
        ['1555591936', 'AR - Pike County'],
        ['1964217984', 'AR - Poinsett County'],
        ['2221378048', 'AR - Polk County'],
        ['2104489984', 'AR - Pope County'],
        ['1678204032', 'AR - Prairie County'],
        ['1967777024', 'AR - Pulaski County'],
        ['1689165952', 'AR - Randolph County'],
        ['1874125056', 'AR - Saline County'],
        ['2311098112', 'AR - Scott County'],
        ['1725176960', 'AR - Searcy County'],
        ['1377644032', 'AR - Sebastian County'],
        ['1463670016', 'AR - Sevier County'],
        ['1565489024', 'AR - Sharp County'],
        ['1644049024', 'AR - St. Francis County'],
        ['1570580992', 'AR - Stone County'],
        ['2691553024', 'AR - Union County'],
        ['1834082048', 'AR - Van Buren County'],
        ['2439682048', 'AR - Washington County'],
        ['2680833024', 'AR - White County'],
        ['1519780992', 'AR - Woodruff County'],
        ['2408646912', 'AR - Yell County'],
        ['1914045952', 'CA - Alameda County'],
        ['1912272000', 'CA - Alpine County'],
        ['1539963008', 'CA - Amador County'],
        ['4238423040', 'CA - Butte County'],
        ['2641819904', 'CA - Calaveras County'],
        ['2980378880', 'CA - Colusa County'],
        ['1854269056', 'CA - Contra Costa County'],
        ['2606493952', 'CA - Del Norte County'],
        ['4423395840', 'CA - El Dorado County'],
        ['15431130112', 'CA - Fresno County'],
        ['3403107072', 'CA - Glenn County'],
        ['9241044992', 'CA - Humboldt County'],
        ['10817349632', 'CA - Imperial County'],
        ['26368350208', 'CA - Inyo County'],
        ['21061560320', 'CA - Kern County'],
        ['3598582016', 'CA - Kings County'],
        ['3254226944', 'CA - Lake County'],
        ['11761609728', 'CA - Lassen County'],
        ['10509870080', 'CA - Los Angeles County'],
        ['5534983168', 'CA - Madera County'],
        ['1347586048', 'CA - Marin County'],
        ['3752417024', 'CA - Mariposa County'],
        ['9081385984', 'CA - Mendocino County'],
        ['5011554816', 'CA - Merced County'],
        ['10146979840', 'CA - Modoc County'],
        ['7896826880', 'CA - Mono County'],
        ['8496702976', 'CA - Monterey County'],
        ['1938247040', 'CA - Napa County'],
        ['2480616960', 'CA - Nevada County'],
        ['2047560960', 'CA - Orange County'],
        ['3644135936', 'CA - Placer County'],
        ['6612349952', 'CA - Plumas County'],
        ['18664699904', 'CA - Riverside County'],
        ['2498416128', 'CA - Sacramento County'],
        ['3596741888', 'CA - San Benito County'],
        ['51947229184', 'CA - San Bernardino County'],
        ['10895120384', 'CA - San Diego County'],
        ['121400000', 'CA - San Francisco County'],
        ['3603505920', 'CA - San Joaquin County'],
        ['8543247872', 'CA - San Luis Obispo County'],
        ['1161372032', 'CA - San Mateo County'],
        ['7083837952', 'CA - Santa Barbara County'],
        ['3341342976', 'CA - Santa Clara County'],
        ['1152985984', 'CA - Santa Cruz County'],
        ['9778246656', 'CA - Shasta County'],
        ['2468814080', 'CA - Sierra County'],
        ['16259649536', 'CA - Siskiyou County'],
        ['2128360960', 'CA - Solano County'],
        ['4081430016', 'CA - Sonoma County'],
        ['3871582976', 'CA - Stanislaus County'],
        ['1560236032', 'CA - Sutter County'],
        ['7639710208', 'CA - Tehama County'],
        ['8234229760', 'CA - Trinity County'],
        ['12494659584', 'CA - Tulare County'],
        ['5752061952', 'CA - Tuolumne County'],
        ['4773691904', 'CA - Ventura County'],
        ['2628033024', 'CA - Yolo County'],
        ['1636454016', 'CA - Yuba County'],
        ['3024207872', 'CO - Adams County'],
        ['1871636992', 'CO - Alamosa County'],
        ['2067069952', 'CO - Arapahoe County'],
        ['3496937984', 'CO - Archuleta County'],
        ['6617333760', 'CO - Baca County'],
        ['3918291968', 'CO - Bent County'],
        ['1881080064', 'CO - Boulder County'],
        ['85557536', 'CO - Broomfield County'],
        ['2624701952', 'CO - Chaffee County'],
        ['4605712896', 'CO - Cheyenne County'],
        ['1023633024', 'CO - Clear Creek County'],
        ['3334326016', 'CO - Conejos County'],
        ['3177789952', 'CO - Costilla County'],
        ['2039410944', 'CO - Crowley County'],
        ['1913031040', 'CO - Custer County'],
        ['2957896960', 'CO - Delta County'],
        ['396268608', 'CO - Denver County'],
        ['2763650048', 'CO - Dolores County'],
        ['2176231936', 'CO - Douglas County'],
        ['4362911744', 'CO - Eagle County'],
        ['5508389888', 'CO - El Paso County'],
        ['4793671168', 'CO - Elbert County'],
        ['3970627072', 'CO - Fremont County'],
        ['7634152960', 'CO - Garfield County'],
        ['388229088', 'CO - Gilpin County'],
        ['4781970944', 'CO - Grand County'],
        ['8389229056', 'CO - Gunnison County'],
        ['2893668096', 'CO - Hinsdale County'],
        ['4120673024', 'CO - Huerfano County'],
        ['4179523072', 'CO - Jackson County'],
        ['1979289984', 'CO - Jefferson County'],
        ['4578494976', 'CO - Kiowa County'],
        ['5596502016', 'CO - Kit Carson County'],
        ['4382461952', 'CO - La Plata County'],
        ['976194304', 'CO - Lake County'],
        ['6723614208', 'CO - Larimer County'],
        ['12361159680', 'CO - Las Animas County'],
        ['6676021248', 'CO - Lincoln County'],
        ['4761814016', 'CO - Logan County'],
        ['8622003200', 'CO - Mesa County'],
        ['2267965952', 'CO - Mineral County'],
        ['12285070336', 'CO - Moffat County'],
        ['5256451072', 'CO - Montezuma County'],
        ['5803373056', 'CO - Montrose County'],
        ['3316304896', 'CO - Morgan County'],
        ['3268464896', 'CO - Otero County'],
        ['1402718976', 'CO - Ouray County'],
        ['5682035200', 'CO - Park County'],
        ['1781725056', 'CO - Phillips County'],
        ['2514094080', 'CO - Pitkin County'],
        ['4243421952', 'CO - Prowers County'],
        ['6179980800', 'CO - Pueblo County'],
        ['8342178816', 'CO - Rio Blanco County'],
        ['2361959936', 'CO - Rio Grande County'],
        ['6117619200', 'CO - Routt County'],
        ['8206440960', 'CO - Saguache County'],
        ['1003587968', 'CO - San Juan County'],
        ['3332307968', 'CO - San Miguel County'],
        ['1419419008', 'CO - Sedgwick County'],
        ['1575639040', 'CO - Summit County'],
        ['1442766976', 'CO - Teller County'],
        ['6521670144', 'CO - Washington County'],
        ['10326899712', 'CO - Weld County'],
        ['6123780096', 'CO - Yuma County'],
        ['1618456064', 'CT - Fairfield County'],
        ['1903891968', 'CT - Hartford County'],
        ['2384239104', 'CT - Litchfield County'],
        ['956486208', 'CT - Middlesex County'],
        ['1565662976', 'CT - New Haven County'],
        ['1722025984', 'CT - New London County'],
        ['1062448000', 'CT - Tolland County'],
        ['1328429952', 'CT - Windham County'],
        ['1518195968', 'DE - Kent County'],
        ['1104075008', 'DE - New Castle County'],
        ['2424432896', 'DE - Sussex County'],
        ['158114704', 'DC - District of Columbia'],
        ['2266290944', 'FL - Alachua County'],
        ['1515741056', 'FL - Baker County'],
        ['1964401024', 'FL - Bay County'],
        ['761356800', 'FL - Bradford County'],
        ['2630557952', 'FL - Brevard County'],
        ['3133328896', 'FL - Broward County'],
        ['1469389056', 'FL - Calhoun County'],
        ['1761913984', 'FL - Charlotte County'],
        ['1506585984', 'FL - Citrus County'],
        ['1565286016', 'FL - Clay County'],
        ['5175635968', 'FL - Collier County'],
        ['2065708032', 'FL - Columbia County'],
        ['1649976064', 'FL - DeSoto County'],
        ['1826078976', 'FL - Dixie County'],
        ['1974067968', 'FL - Duval County'],
        ['1700226944', 'FL - Escambia County'],
        ['1257337984', 'FL - Flagler County'],
        ['1384930944', 'FL - Franklin County'],
        ['1337293056', 'FL - Gadsden County'],
        ['905658624', 'FL - Gilchrist County'],
        ['2087554048', 'FL - Glades County'],
        ['1460785024', 'FL - Gulf County'],
        ['1330711040', 'FL - Hamilton County'],
        ['1651849984', 'FL - Hardee County'],
        ['2985608960', 'FL - Hendry County'],
        ['1223869056', 'FL - Hernando County'],
        ['2633019904', 'FL - Highlands County'],
        ['2642341120', 'FL - Hillsborough County'],
        ['1302432000', 'FL - Indian River County'],
        ['2376986880', 'FL - Jackson County'],
        ['1549058944', 'FL - Jefferson County'],
        ['1407427968', 'FL - Lafayette County'],
        ['2430395904', 'FL - Lake County'],
        ['2031879040', 'FL - Lee County'],
        ['1727138944', 'FL - Leon County'],
        ['2896139008', 'FL - Levy County'],
        ['2164094976', 'FL - Liberty County'],
        ['1802498048', 'FL - Madison County'],
        ['1924182016', 'FL - Manatee County'],
        ['4103955968', 'FL - Marion County'],
        ['1407565056', 'FL - Martin County'],
        ['4915061248', 'FL - Miami-Dade County'],
        ['2546689024', 'FL - Monroe County'],
        ['1679968000', 'FL - Nassau County'],
        ['2409328896', 'FL - Okaloosa County'],
        ['1991463040', 'FL - Okeechobee County'],
        ['2339869952', 'FL - Orange County'],
        ['3438085888', 'FL - Osceola County'],
        ['5101663232', 'FL - Palm Beach County'],
        ['1934425984', 'FL - Pasco County'],
        ['709135872', 'FL - Pinellas County'],
        ['4656375808', 'FL - Polk County'],
        ['1884532992', 'FL - Putnam County'],
        ['2620044032', 'FL - Santa Rosa County'],
        ['1439691008', 'FL - Sarasota County'],
        ['800879424', 'FL - Seminole County'],
        ['1555689984', 'FL - St. Johns County'],
        ['1481281024', 'FL - St. Lucie County'],
        ['1416548992', 'FL - Sumter County'],
        ['1783341056', 'FL - Suwannee County'],
        ['2702148096', 'FL - Taylor County'],
        ['630806272', 'FL - Union County'],
        ['2851659008', 'FL - Volusia County'],
        ['1570616960', 'FL - Wakulla County'],
        ['2687436032', 'FL - Walton County'],
        ['1509453056', 'FL - Washington County'],
        ['1313334016', 'GA - Appling County'],
        ['878994496', 'GA - Atkinson County'],
        ['669707904', 'GA - Bacon County'],
        ['885630016', 'GA - Baker County'],
        ['667811968', 'GA - Baldwin County'],
        ['601112320', 'GA - Banks County'],
        ['415198688', 'GA - Barrow County'],
        ['1190214016', 'GA - Bartow County'],
        ['647809216', 'GA - Ben Hill County'],
        ['1170407936', 'GA - Berrien County'],
        ['646879616', 'GA - Bibb County'],
        ['559100224', 'GA - Bleckley County'],
        ['1145713024', 'GA - Brantley County'],
        ['1276982016', 'GA - Brooks County'],
        ['1129148032', 'GA - Bryan County'],
        ['1742567936', 'GA - Bulloch County'],
        ['2141836032', 'GA - Burke County'],
        ['477576096', 'GA - Butts County'],
        ['726147328', 'GA - Calhoun County'],
        ['1587728000', 'GA - Camden County'],
        ['629480576', 'GA - Candler County'],
        ['1292600064', 'GA - Carroll County'],
        ['419990912', 'GA - Catoosa County'],
        ['2003554048', 'GA - Charlton County'],
        ['1104466048', 'GA - Chatham County'],
        ['644223616', 'GA - Chattahoochee County'],
        ['811541824', 'GA - Chattooga County'],
        ['1092130048', 'GA - Cherokee County'],
        ['308727488', 'GA - Clarke County'],
        ['506035712', 'GA - Clay County'],
        ['366664288', 'GA - Clayton County'],
        ['2072567040', 'GA - Clinch County'],
        ['879428416', 'GA - Cobb County'],
        ['1489495040', 'GA - Coffee County'],
        ['1409351040', 'GA - Colquitt County'],
        ['751329088', 'GA - Columbia County'],
        ['588345728', 'GA - Cook County'],
        ['1141905024', 'GA - Coweta County'],
        ['841456384', 'GA - Crawford County'],
        ['705987968', 'GA - Crisp County'],
        ['450609408', 'GA - Dade County'],
        ['546046080', 'GA - Dawson County'],
        ['1546584960', 'GA - Decatur County'],
        ['693033984', 'GA - DeKalb County'],
        ['1284349056', 'GA - Dodge County'],
        ['1015120000', 'GA - Dooly County'],
        ['851299520', 'GA - Dougherty County'],
        ['518171008', 'GA - Douglas County'],
        ['1327612032', 'GA - Early County'],
        ['1074572032', 'GA - Echols County'],
        ['1237235968', 'GA - Effingham County'],
        ['909228672', 'GA - Elbert County'],
        ['1762755968', 'GA - Emanuel County'],
        ['473586496', 'GA - Evans County'],
        ['1001608000', 'GA - Fannin County'],
        ['503344096', 'GA - Fayette County'],
        ['1320662016', 'GA - Floyd County'],
        ['580210816', 'GA - Forsyth County'],
        ['677273024', 'GA - Franklin County'],
        ['1363976960', 'GA - Fulton County'],
        ['1104733952', 'GA - Gilmer County'],
        ['372284000', 'GA - Glascock County'],
        ['1087154944', 'GA - Glynn County'],
        ['921538880', 'GA - Gordon County'],
        ['1177218944', 'GA - Grady County'],
        ['1003452992', 'GA - Greene County'],
        ['1114686976', 'GA - Gwinnett County'],
        ['716752128', 'GA - Habersham County'],
        ['1017299968', 'GA - Hall County'],
        ['1222061056', 'GA - Hancock County'],
        ['730803968', 'GA - Haralson County'],
        ['1201414016', 'GA - Harris County'],
        ['601897024', 'GA - Hart County'],
        ['766714496', 'GA - Heard County'],
        ['834304576', 'GA - Henry County'],
        ['972645824', 'GA - Houston County'],
        ['917743872', 'GA - Irwin County'],
        ['879722880', 'GA - Jackson County'],
        ['953542720', 'GA - Jasper County'],
        ['856613120', 'GA - Jeff Davis County'],
        ['1363588992', 'GA - Jefferson County'],
        ['899449024', 'GA - Jenkins County'],
        ['784793408', 'GA - Johnson County'],
        ['1020281984', 'GA - Jones County'],
        ['475262592', 'GA - Lamar County'],
        ['479824384', 'GA - Lanier County'],
        ['2090886016', 'GA - Laurens County'],
        ['921475584', 'GA - Lee County'],
        ['1268578944', 'GA - Liberty County'],
        ['544880704', 'GA - Lincoln County'],
        ['1036755008', 'GA - Long County'],
        ['1284806016', 'GA - Lowndes County'],
        ['732793088', 'GA - Lumpkin County'],
        ['1037654016', 'GA - Macon County'],
        ['731181824', 'GA - Madison County'],
        ['947944192', 'GA - Marion County'],
        ['666820480', 'GA - McDuffie County'],
        ['1098929024', 'GA - McIntosh County'],
        ['1298162048', 'GA - Meriwether County'],
        ['731466816', 'GA - Miller County'],
        ['1326292992', 'GA - Mitchell County'],
        ['1024750976', 'GA - Monroe County'],
        ['620362816', 'GA - Montgomery County'],
        ['899630976', 'GA - Morgan County'],
        ['892163584', 'GA - Murray County'],
        ['560435520', 'GA - Muscogee County'],
        ['704894528', 'GA - Newton County'],
        ['477308192', 'GA - Oconee County'],
        ['1137035008', 'GA - Oglethorpe County'],
        ['808643200', 'GA - Paulding County'],
        ['389190688', 'GA - Peach County'],
        ['601025728', 'GA - Pickens County'],
        ['819714880', 'GA - Pierce County'],
        ['559659392', 'GA - Pike County'],
        ['803754816', 'GA - Polk County'],
        ['644987072', 'GA - Pulaski County'],
        ['892610816', 'GA - Putnam County'],
        ['391703104', 'GA - Quitman County'],
        ['958276480', 'GA - Rabun County'],
        ['1109127040', 'GA - Randolph County'],
        ['840000000', 'GA - Richmond County'],
        ['336161696', 'GA - Rockdale County'],
        ['432283808', 'GA - Schley County'],
        ['1670803968', 'GA - Screven County'],
        ['609232768', 'GA - Seminole County'],
        ['508851808', 'GA - Spalding County'],
        ['463948096', 'GA - Stephens County'],
        ['1188114048', 'GA - Stewart County'],
        ['1250179968', 'GA - Sumter County'],
        ['1013692032', 'GA - Talbot County'],
        ['504031808', 'GA - Taliaferro County'],
        ['1241648000', 'GA - Tattnall County'],
        ['975612224', 'GA - Taylor County'],
        ['1132610944', 'GA - Telfair County'],
        ['868783616', 'GA - Terrell County'],
        ['1410496000', 'GA - Thomas County'],
        ['670585600', 'GA - Tift County'],
        ['942767872', 'GA - Toombs County'],
        ['431395488', 'GA - Towns County'],
        ['516536608', 'GA - Treutlen County'],
        ['1072224000', 'GA - Troup County'],
        ['739164608', 'GA - Turner County'],
        ['928246400', 'GA - Twiggs County'],
        ['833785088', 'GA - Union County'],
        ['837697216', 'GA - Upson County'],
        ['1156116992', 'GA - Walker County'],
        ['843508096', 'GA - Walton County'],
        ['2311461888', 'GA - Ware County'],
        ['736328576', 'GA - Warren County'],
        ['1757182976', 'GA - Washington County'],
        ['1662194048', 'GA - Wayne County'],
        ['541613568', 'GA - Webster County'],
        ['765301312', 'GA - Wheeler County'],
        ['623374976', 'GA - White County'],
        ['752297216', 'GA - Whitfield County'],
        ['978250176', 'GA - Wilcox County'],
        ['1215974016', 'GA - Wilkes County'],
        ['1158521984', 'GA - Wilkinson County'],
        ['1478110976', 'GA - Worth County'],
        ['2726158080', 'ID - Ada County'],
        ['3530298880', 'ID - Adams County'],
        ['2880035072', 'ID - Bannock County'],
        ['2524680960', 'ID - Bear Lake County'],
        ['2011428992', 'ID - Benewah County'],
        ['5423377920', 'ID - Bingham County'],
        ['6846856192', 'ID - Blaine County'],
        ['4919000064', 'ID - Boise County'],
        ['4492524032', 'ID - Bonner County'],
        ['4833117184', 'ID - Bonneville County'],
        ['3285555968', 'ID - Boundary County'],
        ['5779991040', 'ID - Butte County'],
        ['2782925056', 'ID - Camas County'],
        ['1521282048', 'ID - Canyon County'],
        ['4569116160', 'ID - Caribou County'],
        ['6643529216', 'ID - Cassia County'],
        ['4569219072', 'ID - Clark County'],
        ['6364310016', 'ID - Clearwater County'],
        ['12745180160', 'ID - Custer County'],
        ['7963532800', 'ID - Elmore County'],
        ['1718832000', 'ID - Franklin County'],
        ['4826507776', 'ID - Fremont County'],
        ['1452724992', 'ID - Gem County'],
        ['1888030976', 'ID - Gooding County'],
        ['21956239360', 'ID - Idaho County'],
        ['2832154880', 'ID - Jefferson County'],
        ['1546701056', 'ID - Jerome County'],
        ['3222267904', 'ID - Kootenai County'],
        ['2786816000', 'ID - Latah County'],
        ['11819119616', 'ID - Lemhi County'],
        ['1240073984', 'ID - Lewis County'],
        ['3111624960', 'ID - Lincoln County'],
        ['1215238016', 'ID - Madison County'],
        ['1962151936', 'ID - Minidoka County'],
        ['2196548096', 'ID - Nez Perce County'],
        ['3108143104', 'ID - Oneida County'],
        ['19853580288', 'ID - Owyhee County'],
        ['1053779968', 'ID - Payette County'],
        ['3636974080', 'ID - Power County'],
        ['6810800128', 'ID - Shoshone County'],
        ['1164083968', 'ID - Teton County'],
        ['4975918080', 'ID - Twin Falls County'],
        ['9491050496', 'ID - Valley County'],
        ['3763205120', 'ID - Washington County'],
        ['2214962944', 'IL - Adams County'],
        ['609965888', 'IL - Alexander County'],
        ['984918720', 'IL - Bond County'],
        ['727059776', 'IL - Boone County'],
        ['791518272', 'IL - Brown County'],
        ['2250779904', 'IL - Bureau County'],
        ['657402816', 'IL - Calhoun County'],
        ['1152045056', 'IL - Carroll County'],
        ['973365120', 'IL - Cass County'],
        ['2580315904', 'IL - Champaign County'],
        ['1837278976', 'IL - Christian County'],
        ['1298665984', 'IL - Clark County'],
        ['1212931968', 'IL - Clay County'],
        ['1227874944', 'IL - Clinton County'],
        ['1316466048', 'IL - Coles County'],
        ['2448382976', 'IL - Cook County'],
        ['1148994048', 'IL - Crawford County'],
        ['896198592', 'IL - Cumberland County'],
        ['1029555008', 'IL - De Witt County'],
        ['1635076992', 'IL - DeKalb County'],
        ['1079155968', 'IL - Douglas County'],
        ['848218368', 'IL - DuPage County'],
        ['1614531968', 'IL - Edgar County'],
        ['576054208', 'IL - Edwards County'],
        ['1240028032', 'IL - Effingham County'],
        ['1855680000', 'IL - Fayette County'],
        ['1257737984', 'IL - Ford County'],
        ['1059017984', 'IL - Franklin County'],
        ['2241880064', 'IL - Fulton County'],
        ['836750400', 'IL - Gallatin County'],
        ['1406413952', 'IL - Greene County'],
        ['1082726016', 'IL - Grundy County'],
        ['1125777024', 'IL - Hamilton County'],
        ['2055741056', 'IL - Hancock County'],
        ['459794304', 'IL - Hardin County'],
        ['981273728', 'IL - Henderson County'],
        ['2131522048', 'IL - Henry County'],
        ['2893836032', 'IL - Iroquois County'],
        ['1512764032', 'IL - Jackson County'],
        ['1280774016', 'IL - Jasper County'],
        ['1479320064', 'IL - Jefferson County'],
        ['956408128', 'IL - Jersey County'],
        ['1556808960', 'IL - Jo Daviess County'],
        ['890735680', 'IL - Johnson County'],
        ['1346942976', 'IL - Kane County'],
        ['1752270976', 'IL - Kankakee County'],
        ['829664768', 'IL - Kendall County'],
        ['1855453952', 'IL - Knox County'],
        ['1149100032', 'IL - Lake County'],
        ['2939958016', 'IL - LaSalle County'],
        ['963936896', 'IL - Lawrence County'],
        ['1877473024', 'IL - Lee County'],
        ['2704687104', 'IL - Livingston County'],
        ['1600765056', 'IL - Logan County'],
        ['1503976960', 'IL - Macon County'],
        ['2234917120', 'IL - Macoupin County'],
        ['1853347968', 'IL - Madison County'],
        ['1482413952', 'IL - Marion County'],
        ['1001779008', 'IL - Marshall County'],
        ['1396619008', 'IL - Mason County'],
        ['614390592', 'IL - Massac County'],
        ['1526557952', 'IL - McDonough County'],
        ['1562205952', 'IL - McHenry County'],
        ['3064933888', 'IL - McLean County'],
        ['814388288', 'IL - Menard County'],
        ['1453506944', 'IL - Mercer County'],
        ['997173376', 'IL - Monroe County'],
        ['1822540032', 'IL - Montgomery County'],
        ['1473160960', 'IL - Morgan County'],
        ['870089024', 'IL - Moultrie County'],
        ['1964697984', 'IL - Ogle County'],
        ['1603745024', 'IL - Peoria County'],
        ['1144155008', 'IL - Perry County'],
        ['1137528960', 'IL - Piatt County'],
        ['2153267968', 'IL - Pike County'],
        ['955110080', 'IL - Pope County'],
        ['515886400', 'IL - Pulaski County'],
        ['414813792', 'IL - Putnam County'],
        ['1490537984', 'IL - Randolph County'],
        ['932370880', 'IL - Richland County'],
        ['1107572992', 'IL - Rock Island County'],
        ['983725568', 'IL - Saline County'],
        ['2248891904', 'IL - Sangamon County'],
        ['1132530944', 'IL - Schuyler County'],
        ['649861184', 'IL - Scott County'],
        ['1964564992', 'IL - Shelby County'],
        ['1703587968', 'IL - St. Clair County'],
        ['746121728', 'IL - Stark County'],
        ['1462108032', 'IL - Stephenson County'],
        ['1680834944', 'IL - Tazewell County'],
        ['1070854016', 'IL - Union County'],
        ['2326764032', 'IL - Vermilion County'],
        ['578219008', 'IL - Wabash County'],
        ['1404824064', 'IL - Warren County'],
        ['1457054976', 'IL - Washington County'],
        ['1848770048', 'IL - Wayne County'],
        ['1281438976', 'IL - White County'],
        ['1772199040', 'IL - Whiteside County'],
        ['2167580928', 'IL - Will County'],
        ['1088182016', 'IL - Williamson County'],
        ['1329602048', 'IL - Winnebago County'],
        ['1366994048', 'IL - Woodford County'],
        ['878079104', 'IN - Adams County'],
        ['1702419968', 'IN - Allen County'],
        ['1053886016', 'IN - Bartholomew County'],
        ['1052616000', 'IN - Benton County'],
        ['427554688', 'IN - Blackford County'],
        ['1095339008', 'IN - Boone County'],
        ['808026816', 'IN - Brown County'],
        ['964055872', 'IN - Carroll County'],
        ['1067475968', 'IN - Cass County'],
        ['965691072', 'IN - Clark County'],
        ['926029184', 'IN - Clay County'],
        ['1049126016', 'IN - Clinton County'],
        ['791610880', 'IN - Crawford County'],
        ['1112365952', 'IN - Daviess County'],
        ['790033472', 'IN - Dearborn County'],
        ['964946112', 'IN - Decatur County'],
        ['939710784', 'IN - DeKalb County'],
        ['1015596032', 'IN - Delaware County'],
        ['1106621952', 'IN - Dubois County'],
        ['1199606016', 'IN - Elkhart County'],
        ['556883968', 'IN - Fayette County'],
        ['383149184', 'IN - Floyd County'],
        ['1024744000', 'IN - Fountain County'],
        ['995668672', 'IN - Franklin County'],
        ['954121472', 'IN - Fulton County'],
        ['1262582016', 'IN - Gibson County'],
        ['1072446976', 'IN - Grant County'],
        ['1405054976', 'IN - Greene County'],
        ['1021148032', 'IN - Hamilton County'],
        ['792577728', 'IN - Hancock County'],
        ['1254888960', 'IN - Harrison County'],
        ['1053894976', 'IN - Hendricks County'],
        ['1014955008', 'IN - Henry County'],
        ['759012928', 'IN - Howard County'],
        ['991061312', 'IN - Huntington County'],
        ['1319112960', 'IN - Jackson County'],
        ['1449421056', 'IN - Jasper County'],
        ['994310208', 'IN - Jay County'],
        ['934029184', 'IN - Jefferson County'],
        ['975346432', 'IN - Jennings County'],
        ['829903232', 'IN - Johnson County'],
        ['1336514048', 'IN - Knox County'],
        ['1376269952', 'IN - Kosciusko County'],
        ['983222400', 'IN - LaGrange County'],
        ['1292304000', 'IN - Lake County'],
        ['1549587968', 'IN - LaPorte County'],
        ['1163340032', 'IN - Lawrence County'],
        ['1170455040', 'IN - Madison County'],
        ['1026408000', 'IN - Marion County'],
        ['1148993024', 'IN - Marshall County'],
        ['869555008', 'IN - Martin County'],
        ['968246720', 'IN - Miami County'],
        ['1021772992', 'IN - Monroe County'],
        ['1306941056', 'IN - Montgomery County'],
        ['1046275008', 'IN - Morgan County'],
        ['1040550016', 'IN - Newton County'],
        ['1064078016', 'IN - Noble County'],
        ['223101904', 'IN - Ohio County'],
        ['1031817984', 'IN - Orange County'],
        ['997892608', 'IN - Owen County'],
        ['1151671040', 'IN - Parke County'],
        ['988668672', 'IN - Perry County'],
        ['865673472', 'IN - Pike County'],
        ['1083010944', 'IN - Porter County'],
        ['1060782976', 'IN - Posey County'],
        ['1123145984', 'IN - Pulaski County'],
        ['1244562048', 'IN - Putnam County'],
        ['1171655936', 'IN - Randolph County'],
        ['1156237056', 'IN - Ripley County'],
        ['1057035008', 'IN - Rush County'],
        ['493127200', 'IN - Scott County'],
        ['1064865984', 'IN - Shelby County'],
        ['1027563008', 'IN - Spencer County'],
        ['1185826944', 'IN - St. Joseph County'],
        ['800653568', 'IN - Starke County'],
        ['800148992', 'IN - Steuben County'],
        ['1158092032', 'IN - Sullivan County'],
        ['571436416', 'IN - Switzerland County'],
        ['1294492032', 'IN - Tippecanoe County'],
        ['674797824', 'IN - Tipton County'],
        ['417568384', 'IN - Union County'],
        ['604697984', 'IN - Vanderburgh County'],
        ['665311680', 'IN - Vermillion County'],
        ['1044574976', 'IN - Vigo County'],
        ['1068200000', 'IN - Wabash County'],
        ['944520704', 'IN - Warren County'],
        ['996667392', 'IN - Warrick County'],
        ['1330541952', 'IN - Washington County'],
        ['1040502976', 'IN - Wayne County'],
        ['953341184', 'IN - Wells County'],
        ['1308267008', 'IN - White County'],
        ['869120896', 'IN - Whitley County'],
        ['1474403968', 'IA - Adair County'],
        ['1096701056', 'IA - Adams County'],
        ['1655213952', 'IA - Allamakee County'],
        ['1287981056', 'IA - Appanoose County'],
        ['1147265024', 'IA - Audubon County'],
        ['1855117056', 'IA - Benton County'],
        ['1465334016', 'IA - Black Hawk County'],
        ['1480356992', 'IA - Boone County'],
        ['1127879936', 'IA - Bremer County'],
        ['1478935040', 'IA - Buchanan County'],
        ['1489022976', 'IA - Buena Vista County'],
        ['1502532992', 'IA - Butler County'],
        ['1476209024', 'IA - Calhoun County'],
        ['1474834944', 'IA - Carroll County'],
        ['1461451008', 'IA - Cass County'],
        ['1500731008', 'IA - Cedar County'],
        ['1471922944', 'IA - Cerro Gordo County'],
        ['1494179968', 'IA - Cherokee County'],
        ['1306338944', 'IA - Chickasaw County'],
        ['1116716032', 'IA - Clarke County'],
        ['1469138944', 'IA - Clay County'],
        ['2016406016', 'IA - Clayton County'],
        ['1799821056', 'IA - Clinton County'],
        ['1849742976', 'IA - Crawford County'],
        ['1524071040', 'IA - Dallas County'],
        ['1300662016', 'IA - Davis County'],
        ['1377565952', 'IA - Decatur County'],
        ['1496381056', 'IA - Delaware County'],
        ['1077755008', 'IA - Des Moines County'],
        ['985764416', 'IA - Dickinson County'],
        ['1575501952', 'IA - Dubuque County'],
        ['1025332992', 'IA - Emmet County'],
        ['1892791040', 'IA - Fayette County'],
        ['1296631040', 'IA - Floyd County'],
        ['1507300992', 'IA - Franklin County'],
        ['1323873024', 'IA - Fremont County'],
        ['1475188992', 'IA - Greene County'],
        ['1299805952', 'IA - Grundy County'],
        ['1529698944', 'IA - Guthrie County'],
        ['1493778048', 'IA - Hamilton County'],
        ['1478894976', 'IA - Hancock County'],
        ['1474498944', 'IA - Hardin County'],
        ['1804828032', 'IA - Harrison County'],
        ['1124903936', 'IA - Henry County'],
        ['1225705984', 'IA - Howard County'],
        ['1124967040', 'IA - Humboldt County'],
        ['1117600000', 'IA - Ida County'],
        ['1518915968', 'IA - Iowa County'],
        ['1647332992', 'IA - Jackson County'],
        ['1891778944', 'IA - Jasper County'],
        ['1127965056', 'IA - Jefferson County'],
        ['1590355968', 'IA - Johnson County'],
        ['1490850944', 'IA - Jones County'],
        ['1500066944', 'IA - Keokuk County'],
        ['2519333120', 'IA - Kossuth County'],
        ['1340365952', 'IA - Lee County'],
        ['1856711040', 'IA - Linn County'],
        ['1040569984', 'IA - Louisa County'],
        ['1115232000', 'IA - Lucas County'],
        ['1522007040', 'IA - Lyon County'],
        ['1452999040', 'IA - Madison County'],
        ['1478528000', 'IA - Mahaska County'],
        ['1436237056', 'IA - Marion County'],
        ['1482770944', 'IA - Marshall County'],
        ['1132956032', 'IA - Mills County'],
        ['1215048960', 'IA - Mitchell County'],
        ['1797638016', 'IA - Monona County'],
        ['1123316992', 'IA - Monroe County'],
        ['1098406016', 'IA - Montgomery County'],
        ['1133041024', 'IA - Muscatine County'],
        ['1484153984', "IA - O'Brien County"],
        ['1032587008', 'IA - Osceola County'],
        ['1385494016', 'IA - Page County'],
        ['1460349056', 'IA - Palo Alto County'],
        ['2234882048', 'IA - Plymouth County'],
        ['1495047040', 'IA - Pocahontas County'],
        ['1486120960', 'IA - Polk County'],
        ['2461213952', 'IA - Pottawattamie County'],
        ['1514968064', 'IA - Poweshiek County'],
        ['1386934016', 'IA - Ringgold County'],
        ['1489272960', 'IA - Sac County'],
        ['1186444032', 'IA - Scott County'],
        ['1530109952', 'IA - Shelby County'],
        ['1989970048', 'IA - Sioux County'],
        ['1483592960', 'IA - Story County'],
        ['1867410944', 'IA - Tama County'],
        ['1377618944', 'IA - Taylor County'],
        ['1097235968', 'IA - Union County'],
        ['1255597952', 'IA - Van Buren County'],
        ['1118443008', 'IA - Wapello County'],
        ['1475844992', 'IA - Warren County'],
        ['1473276032', 'IA - Washington County'],
        ['1360873984', 'IA - Wayne County'],
        ['1853443968', 'IA - Webster County'],
        ['1037262016', 'IA - Winnebago County'],
        ['1786749952', 'IA - Winneshiek County'],
        ['2260630016', 'IA - Woodbury County'],
        ['1036315008', 'IA - Worth County'],
        ['1503287040', 'IA - Wright County'],
        ['1295778944', 'KS - Allen County'],
        ['1501276032', 'KS - Anderson County'],
        ['1116729984', 'KS - Atchison County'],
        ['2937234944', 'KS - Barber County'],
        ['2319075072', 'KS - Barton County'],
        ['1645862016', 'KS - Bourbon County'],
        ['1478552064', 'KS - Brown County'],
        ['3703329024', 'KS - Butler County'],
        ['2002216960', 'KS - Chase County'],
        ['1654692992', 'KS - Chautauqua County'],
        ['1521794048', 'KS - Cherokee County'],
        ['2641496064', 'KS - Cheyenne County'],
        ['2524285952', 'KS - Clark County'],
        ['1671321984', 'KS - Clay County'],
        ['1852727040', 'KS - Cloud County'],
        ['1623783936', 'KS - Coffey County'],
        ['2041681024', 'KS - Comanche County'],
        ['2915680000', 'KS - Cowley County'],
        ['1527462016', 'KS - Crawford County'],
        ['2314199040', 'KS - Decatur County'],
        ['2193905920', 'KS - Dickinson County'],
        ['1018915008', 'KS - Doniphan County'],
        ['1180700032', 'KS - Douglas County'],
        ['1610696960', 'KS - Edwards County'],
        ['1668637952', 'KS - Elk County'],
        ['2330761984', 'KS - Ellis County'],
        ['1854034944', 'KS - Ellsworth County'],
        ['3372080128', 'KS - Finney County'],
        ['2844507904', 'KS - Ford County'],
        ['1480839936', 'KS - Franklin County'],
        ['996156672', 'KS - Geary County'],
        ['2775599104', 'KS - Gove County'],
        ['2327161088', 'KS - Graham County'],
        ['1488724992', 'KS - Grant County'],
        ['2250355968', 'KS - Gray County'],
        ['2016177024', 'KS - Greeley County'],
        ['2961133056', 'KS - Greenwood County'],
        ['2580943104', 'KS - Hamilton County'],
        ['2075276032', 'KS - Harper County'],
        ['1397956992', 'KS - Harvey County'],
        ['1495773056', 'KS - Haskell County'],
        ['2227368960', 'KS - Hodgeman County'],
        ['1699593984', 'KS - Jackson County'],
        ['1379360000', 'KS - Jefferson County'],
        ['2356322048', 'KS - Jewell County'],
        ['1226034048', 'KS - Johnson County'],
        ['2254696960', 'KS - Kearny County'],
        ['2236099072', 'KS - Kingman County'],
        ['1871627008', 'KS - Kiowa County'],
        ['1671304960', 'KS - Labette County'],
        ['1858200064', 'KS - Lane County'],
        ['1198727040', 'KS - Leavenworth County'],
        ['1863227008', 'KS - Lincoln County'],
        ['1538605056', 'KS - Linn County'],
        ['2779043072', 'KS - Logan County'],
        ['2194948096', 'KS - Lyon County'],
        ['2445701120', 'KS - Marion County'],
        ['2331462912', 'KS - Marshall County'],
        ['2326520064', 'KS - McPherson County'],
        ['2533234944', 'KS - Meade County'],
        ['1490956032', 'KS - Miami County'],
        ['1817633024', 'KS - Mitchell County'],
        ['1666727936', 'KS - Montgomery County'],
        ['1800764032', 'KS - Morris County'],
        ['1889992960', 'KS - Morton County'],
        ['1858125952', 'KS - Nemaha County'],
        ['1480105984', 'KS - Neosho County'],
        ['2783589888', 'KS - Ness County'],
        ['2274356992', 'KS - Norton County'],
        ['1827283968', 'KS - Osage County'],
        ['2311574016', 'KS - Osborne County'],
        ['1866689024', 'KS - Ottawa County'],
        ['1953532032', 'KS - Pawnee County'],
        ['2294409984', 'KS - Phillips County'],
        ['2178235904', 'KS - Pottawatomie County'],
        ['1903757056', 'KS - Pratt County'],
        ['2769776128', 'KS - Rawlins County'],
        ['3251332096', 'KS - Reno County'],
        ['1857981952', 'KS - Republic County'],
        ['1880945024', 'KS - Rice County'],
        ['1579299968', 'KS - Riley County'],
        ['2306469888', 'KS - Rooks County'],
        ['1858998016', 'KS - Rush County'],
        ['2295403008', 'KS - Russell County'],
        ['1865373952', 'KS - Saline County'],
        ['1858429952', 'KS - Scott County'],
        ['2583544064', 'KS - Sedgwick County'],
        ['1656290944', 'KS - Seward County'],
        ['1408995968', 'KS - Shawnee County'],
        ['2320517888', 'KS - Sheridan County'],
        ['2735198976', 'KS - Sherman County'],
        ['2319244032', 'KS - Smith County'],
        ['2051389952', 'KS - Stafford County'],
        ['1762086016', 'KS - Stanton County'],
        ['1883678976', 'KS - Stevens County'],
        ['3061211904', 'KS - Sumner County'],
        ['2783425024', 'KS - Thomas County'],
        ['2303737088', 'KS - Trego County'],
        ['2057232000', 'KS - Wabaunsee County'],
        ['2366348032', 'KS - Wallace County'],
        ['2317405952', 'KS - Washington County'],
        ['1861081984', 'KS - Wichita County'],
        ['1477377024', 'KS - Wilson County'],
        ['1289346944', 'KS - Woodson County'],
        ['392642400', 'KS - Wyandotte County'],
        ['1049676992', 'KY - Adair County'],
        ['891830080', 'KY - Allen County'],
        ['522742400', 'KY - Anderson County'],
        ['638843584', 'KY - Ballard County'],
        ['1262724992', 'KY - Barren County'],
        ['722067776', 'KY - Bath County'],
        ['929806784', 'KY - Bell County'],
        ['638067328', 'KY - Boone County'],
        ['750369600', 'KY - Bourbon County'],
        ['414046208', 'KY - Boyd County'],
        ['466635008', 'KY - Boyle County'],
        ['532533184', 'KY - Bracken County'],
        ['1275345024', 'KY - Breathitt County'],
        ['1468968960', 'KY - Breckinridge County'],
        ['769288192', 'KY - Bullitt County'],
        ['1103561984', 'KY - Butler County'],
        ['893004672', 'KY - Caldwell County'],
        ['997200768', 'KY - Calloway County'],
        ['391886592', 'KY - Campbell County'],
        ['490632384', 'KY - Carlisle County'],
        ['332992512', 'KY - Carroll County'],
        ['1060590016', 'KY - Carter County'],
        ['1150550016', 'KY - Casey County'],
        ['1858323968', 'KY - Christian County'],
        ['653877312', 'KY - Clark County'],
        ['1215345024', 'KY - Clay County'],
        ['510864192', 'KY - Clinton County'],
        ['932270912', 'KY - Crittenden County'],
        ['790416896', 'KY - Cumberland County'],
        ['1187111040', 'KY - Daviess County'],
        ['784464320', 'KY - Edmonson County'],
        ['606873728', 'KY - Elliott County'],
        ['655468608', 'KY - Estill County'],
        ['734648512', 'KY - Fayette County'],
        ['902720128', 'KY - Fleming County'],
        ['1018758016', 'KY - Floyd County'],
        ['538061184', 'KY - Franklin County'],
        ['532252000', 'KY - Fulton County'],
        ['262195008', 'KY - Gallatin County'],
        ['595897472', 'KY - Garrard County'],
        ['668125120', 'KY - Grant County'],
        ['1429006976', 'KY - Graves County'],
        ['1286441984', 'KY - Grayson County'],
        ['740825280', 'KY - Green County'],
        ['891983424', 'KY - Greenup County'],
        ['486017504', 'KY - Hancock County'],
        ['1614281984', 'KY - Hardin County'],
        ['1206488064', 'KY - Harlan County'],
        ['793479424', 'KY - Harrison County'],
        ['1067297024', 'KY - Hart County'],
        ['1130968064', 'KY - Henderson County'],
        ['741450176', 'KY - Henry County'],
        ['627487680', 'KY - Hickman County'],
        ['1403761024', 'KY - Hopkins County'],
        ['894065216', 'KY - Jackson County'],
        ['985273984', 'KY - Jefferson County'],
        ['445777216', 'KY - Jessamine County'],
        ['678455680', 'KY - Johnson County'],
        ['415044992', 'KY - Kenton County'],
        ['910427392', 'KY - Knott County'],
        ['1000505024', 'KY - Knox County'],
        ['677331520', 'KY - Larue County'],
        ['1123933056', 'KY - Laurel County'],
        ['1076386944', 'KY - Lawrence County'],
        ['540937728', 'KY - Lee County'],
        ['1038182016', 'KY - Leslie County'],
        ['875192704', 'KY - Letcher County'],
        ['1250540032', 'KY - Lewis County'],
        ['865301120', 'KY - Lincoln County'],
        ['810995904', 'KY - Livingston County'],
        ['1430013952', 'KY - Logan County'],
        ['553843392', 'KY - Lyon County'],
        ['1132583040', 'KY - Madison County'],
        ['798865728', 'KY - Magoffin County'],
        ['888387328', 'KY - Marion County'],
        ['780240704', 'KY - Marshall County'],
        ['594673728', 'KY - Martin County'],
        ['621927424', 'KY - Mason County'],
        ['644243008', 'KY - McCracken County'],
        ['1105415040', 'KY - McCreary County'],
        ['653905280', 'KY - McLean County'],
        ['791042880', 'KY - Meade County'],
        ['527282400', 'KY - Menifee County'],
        ['644381824', 'KY - Mercer County'],
        ['750178176', 'KY - Metcalfe County'],
        ['853073280', 'KY - Monroe County'],
        ['511174784', 'KY - Montgomery County'],
        ['987113472', 'KY - Morgan County'],
        ['1209729024', 'KY - Muhlenberg County'],
        ['1081351936', 'KY - Nelson County'],
        ['505489600', 'KY - Nicholas County'],
        ['1521031936', 'KY - Ohio County'],
        ['484893504', 'KY - Oldham County'],
        ['909351680', 'KY - Owen County'],
        ['511282496', 'KY - Owsley County'],
        ['717833408', 'KY - Pendleton County'],
        ['879740480', 'KY - Perry County'],
        ['2037888000', 'KY - Pike County'],
        ['463554688', 'KY - Powell County'],
        ['1705267968', 'KY - Pulaski County'],
        ['258768000', 'KY - Robertson County'],
        ['819846976', 'KY - Rockcastle County'],
        ['724666496', 'KY - Rowan County'],
        ['656969280', 'KY - Russell County'],
        ['729770368', 'KY - Scott County'],
        ['983253632', 'KY - Shelby County'],
        ['606585472', 'KY - Simpson County'],
        ['483492096', 'KY - Spencer County'],
        ['689784192', 'KY - Taylor County'],
        ['969940480', 'KY - Todd County'],
        ['1143307008', 'KY - Trigg County'],
        ['392766208', 'KY - Trimble County'],
        ['887974272', 'KY - Union County'],
        ['1402738048', 'KY - Warren County'],
        ['769916224', 'KY - Washington County'],
        ['1186656000', 'KY - Wayne County'],
        ['859728384', 'KY - Webster County'],
        ['1133974016', 'KY - Whitley County'],
        ['575419520', 'KY - Wolfe County'],
        ['488948288', 'KY - Woodford County'],
        ['1696750976', 'LA - Acadia Parish'],
        ['1973175040', 'LA - Allen Parish'],
        ['751046784', 'LA - Ascension Parish'],
        ['877120768', 'LA - Assumption Parish'],
        ['2155994112', 'LA - Avoyelles Parish'],
        ['2997501952', 'LA - Beauregard Parish'],
        ['2101175040', 'LA - Bienville Parish'],
        ['2175738112', 'LA - Bossier Parish'],
        ['2275405056', 'LA - Caddo Parish'],
        ['2754864128', 'LA - Calcasieu Parish'],
        ['1371203968', 'LA - Caldwell Parish'],
        ['3327842048', 'LA - Cameron Parish'],
        ['1833789056', 'LA - Catahoula Parish'],
        ['1955126016', 'LA - Claiborne Parish'],
        ['1805014016', 'LA - Concordia Parish'],
        ['2267738880', 'LA - De Soto Parish'],
        ['1179411968', 'LA - East Baton Rouge Parish'],
        ['1089618944', 'LA - East Carroll Parish'],
        ['1174326016', 'LA - East Feliciana Parish'],
        ['1715549952', 'LA - Evangeline Parish'],
        ['1617667968', 'LA - Franklin Parish'],
        ['1665428992', 'LA - Grant Parish'],
        ['1486940032', 'LA - Iberia Parish'],
        ['1602236032', 'LA - Iberville Parish'],
        ['1474178048', 'LA - Jackson Parish'],
        ['1686931968', 'LA - Jefferson Davis Parish'],
        ['765682624', 'LA - Jefferson Parish'],
        ['1617922944', 'LA - La Salle Parish'],
        ['695980416', 'LA - Lafayette Parish'],
        ['2766661888', 'LA - Lafourche Parish'],
        ['1221805952', 'LA - Lincoln Parish'],
        ['1678749056', 'LA - Livingston Parish'],
        ['1617282944', 'LA - Madison Parish'],
        ['2058870016', 'LA - Morehouse Parish'],
        ['3243312128', 'LA - Natchitoches Parish'],
        ['438803392', 'LA - Orleans Parish'],
        ['1580945024', 'LA - Ouachita Parish'],
        ['2019960960', 'LA - Plaquemines Parish'],
        ['1443520000', 'LA - Pointe Coupee Parish'],
        ['3413506048', 'LA - Rapides Parish'],
        ['1007739008', 'LA - Red River Parish'],
        ['1447915008', 'LA - Richland Parish'],
        ['2244636928', 'LA - Sabine Parish'],
        ['977764288', 'LA - St. Bernard Parish'],
        ['722820608', 'LA - St. Charles Parish'],
        ['1057758016', 'LA - St. Helena Parish'],
        ['625577792', 'LA - St. James Parish'],
        ['551851776', 'LA - St. John the Baptist Parish'],
        ['2392837120', 'LA - St. Landry Parish'],
        ['1910498048', 'LA - St. Martin Parish'],
        ['1438424960', 'LA - St. Mary Parish'],
        ['2189967104', 'LA - St. Tammany Parish'],
        ['2049392000', 'LA - Tangipahoa Parish'],
        ['1561204992', 'LA - Tensas Parish'],
        ['3190385920', 'LA - Terrebonne Parish'],
        ['2271388928', 'LA - Union Parish'],
        ['3038573056', 'LA - Vermilion Parish'],
        ['3439270912', 'LA - Vernon Parish'],
        ['1734061056', 'LA - Washington Parish'],
        ['1535939968', 'LA - Webster Parish'],
        ['498298912', 'LA - West Baton Rouge Parish'],
        ['931478720', 'LA - West Carroll Parish'],
        ['1044318016', 'LA - West Feliciana Parish'],
        ['2460711936', 'LA - Winn Parish'],
        ['1211926016', 'ME - Androscoggin County'],
        ['17278660608', 'ME - Aroostook County'],
        ['2163262976', 'ME - Cumberland County'],
        ['4394195968', 'ME - Franklin County'],
        ['4110033920', 'ME - Hancock County'],
        ['2246876928', 'ME - Kennebec County'],
        ['945691392', 'ME - Knox County'],
        ['1180563968', 'ME - Lincoln County'],
        ['5378991104', 'ME - Oxford County'],
        ['8799125504', 'ME - Penobscot County'],
        ['10258570240', 'ME - Piscataquis County'],
        ['657066816', 'ME - Sagadahoc County'],
        ['10164160512', 'ME - Somerset County'],
        ['1890480000', 'ME - Waldo County'],
        ['6637258240', 'ME - Washington County'],
        ['2565935104', 'ME - York County'],
        ['1098563968', 'MD - Allegany County'],
        ['1074590976', 'MD - Anne Arundel County'],
        ['209643200', 'MD - Baltimore city'],
        ['1549595008', 'MD - Baltimore County'],
        ['552061120', 'MD - Calvert County'],
        ['827292416', 'MD - Caroline County'],
        ['1159265024', 'MD - Carroll County'],
        ['896842880', 'MD - Cecil County'],
        ['1185564032', 'MD - Charles County'],
        ['1400574976', 'MD - Dorchester County'],
        ['1709965056', 'MD - Frederick County'],
        ['1675988992', 'MD - Garrett County'],
        ['1132055040', 'MD - Harford County'],
        ['649416384', 'MD - Howard County'],
        ['717505280', 'MD - Kent County'],
        ['1272343040', 'MD - Montgomery County'],
        ['1250163968', "MD - Prince George's County"],
        ['963235968', "MD - Queen Anne's County"],
        ['828079424', 'MD - Somerset County'],
        ['925091968', "MD - St. Mary's County"],
        ['695511168', 'MD - Talbot County'],
        ['1185644032', 'MD - Washington County'],
        ['969804288', 'MD - Wicomico County'],
        ['1212840960', 'MD - Worcester County'],
        ['1019737984', 'MA - Barnstable County'],
        ['2400464896', 'MA - Berkshire County'],
        ['1432510976', 'MA - Bristol County'],
        ['267403808', 'MA - Dukes County'],
        ['1275731968', 'MA - Essex County'],
        ['1811229056', 'MA - Franklin County'],
        ['1598386048', 'MA - Hampden County'],
        ['1365585024', 'MA - Hampshire County'],
        ['2118135040', 'MA - Middlesex County'],
        ['116471400', 'MA - Nantucket County'],
        ['1025907968', 'MA - Norfolk County'],
        ['1706996992', 'MA - Plymouth County'],
        ['150618896', 'MA - Suffolk County'],
        ['3912877056', 'MA - Worcester County'],
        ['1747168000', 'MI - Alcona County'],
        ['2370019072', 'MI - Alger County'],
        ['2137337984', 'MI - Allegan County'],
        ['1481111040', 'MI - Alpena County'],
        ['1232064000', 'MI - Antrim County'],
        ['940660672', 'MI - Arenac County'],
        ['2326475008', 'MI - Baraga County'],
        ['1432499968', 'MI - Barry County'],
        ['1145558016', 'MI - Bay County'],
        ['828028288', 'MI - Benzie County'],
        ['1470457984', 'MI - Berrien County'],
        ['1311489024', 'MI - Branch County'],
        ['1829134976', 'MI - Calhoun County'],
        ['1269254016', 'MI - Cass County'],
        ['1078312960', 'MI - Charlevoix County'],
        ['1852525056', 'MI - Cheboygan County'],
        ['4036290048', 'MI - Chippewa County'],
        ['1461570048', 'MI - Clare County'],
        ['1466990976', 'MI - Clinton County'],
        ['1440758016', 'MI - Crawford County'],
        ['3033124096', 'MI - Delta County'],
        ['1972018048', 'MI - Dickinson County'],
        ['1489694976', 'MI - Eaton County'],
        ['1210803968', 'MI - Emmet County'],
        ['1649763968', 'MI - Genesee County'],
        ['1299601024', 'MI - Gladwin County'],
        ['2853775104', 'MI - Gogebic County'],
        ['1202611968', 'MI - Grand Traverse County'],
        ['1472313984', 'MI - Gratiot County'],
        ['1549158016', 'MI - Hillsdale County'],
        ['2613554944', 'MI - Houghton County'],
        ['2164470016', 'MI - Huron County'],
        ['1440344064', 'MI - Ingham County'],
        ['1479671040', 'MI - Ionia County'],
        ['1422152960', 'MI - Iosco County'],
        ['3020312064', 'MI - Iron County'],
        ['1483225984', 'MI - Isabella County'],
        ['1817305984', 'MI - Jackson County'],
        ['1454689024', 'MI - Kalamazoo County'],
        ['1450043008', 'MI - Kalkaska County'],
        ['2193584896', 'MI - Kent County'],
        ['1398882944', 'MI - Keweenaw County'],
        ['1469480960', 'MI - Lake County'],
        ['1665396992', 'MI - Lapeer County'],
        ['899168576', 'MI - Leelanau County'],
        ['1941337984', 'MI - Lenawee County'],
        ['1464001024', 'MI - Livingston County'],
        ['2328602112', 'MI - Luce County'],
        ['2645850880', 'MI - Mackinac County'],
        ['1241182976', 'MI - Macomb County'],
        ['1404160000', 'MI - Manistee County'],
        ['4683738112', 'MI - Marquette County'],
        ['1282232960', 'MI - Mason County'],
        ['1437627008', 'MI - Mecosta County'],
        ['2704153088', 'MI - Menominee County'],
        ['1337088000', 'MI - Midland County'],
        ['1462633984', 'MI - Missaukee County'],
        ['1422924032', 'MI - Monroe County'],
        ['1826976000', 'MI - Montcalm County'],
        ['1415852032', 'MI - Montmorency County'],
        ['1293041024', 'MI - Muskegon County'],
        ['2106188032', 'MI - Newaygo County'],
        ['2247237120', 'MI - Oakland County'],
        ['1326258048', 'MI - Oceana County'],
        ['1459426048', 'MI - Ogemaw County'],
        ['3396056064', 'MI - Ontonagon County'],
        ['1466946944', 'MI - Osceola County'],
        ['1465236992', 'MI - Oscoda County'],
        ['1333769984', 'MI - Otsego County'],
        ['1459373952', 'MI - Ottawa County'],
        ['1706073984', 'MI - Presque Isle County'],
        ['1345849984', 'MI - Roscommon County'],
        ['2072285056', 'MI - Saginaw County'],
        ['2493035008', 'MI - Sanilac County'],
        ['3033805056', 'MI - Schoolcraft County'],
        ['1374423040', 'MI - Shiawassee County'],
        ['1867822976', 'MI - St. Clair County'],
        ['1296525056', 'MI - St. Joseph County'],
        ['2080088064', 'MI - Tuscola County'],
        ['1573351040', 'MI - Van Buren County'],
        ['1828441984', 'MI - Washtenaw County'],
        ['1585280000', 'MI - Wayne County'],
        ['1463347968', 'MI - Wexford County'],
        ['4718084096', 'MN - Aitkin County'],
        ['1095590016', 'MN - Anoka County'],
        ['3406360064', 'MN - Becker County'],
        ['6487763968', 'MN - Beltrami County'],
        ['1057494016', 'MN - Benton County'],
        ['1292461952', 'MN - Big Stone County'],
        ['1936905984', 'MN - Blue Earth County'],
        ['1582716032', 'MN - Brown County'],
        ['2230968064', 'MN - Carlton County'],
        ['917697920', 'MN - Carver County'],
        ['5235769856', 'MN - Cass County'],
        ['1505097984', 'MN - Chippewa County'],
        ['1074487040', 'MN - Chisago County'],
        ['2707485952', 'MN - Clay County'],
        ['2587241984', 'MN - Clearwater County'],
        ['3761381120', 'MN - Cook County'],
        ['1653992960', 'MN - Cottonwood County'],
        ['2587642880', 'MN - Crow Wing County'],
        ['1456007040', 'MN - Dakota County'],
        ['1137720064', 'MN - Dodge County'],
        ['1650598016', 'MN - Douglas County'],
        ['1845304064', 'MN - Faribault County'],
        ['2230757120', 'MN - Fillmore County'],
        ['1831346048', 'MN - Freeborn County'],
        ['1960200960', 'MN - Goodhue County'],
        ['1419728000', 'MN - Grant County'],
        ['1433794048', 'MN - Hennepin County'],
        ['1429825024', 'MN - Houston County'],
        ['2397486080', 'MN - Hubbard County'],
        ['1128701056', 'MN - Isanti County'],
        ['6909366784', 'MN - Itasca County'],
        ['1820713984', 'MN - Jackson County'],
        ['1350903040', 'MN - Kanabec County'],
        ['2063661952', 'MN - Kandiyohi County'],
        ['2845890048', 'MN - Kittson County'],
        ['8039502848', 'MN - Koochiching County'],
        ['1981394944', 'MN - Lac qui Parle County'],
        ['5463041024', 'MN - Lake County'],
        ['3361466112', 'MN - Lake of the Woods County'],
        ['1162284032', 'MN - Le Sueur County'],
        ['1390193024', 'MN - Lincoln County'],
        ['1850699008', 'MN - Lyon County'],
        ['1444896000', 'MN - Mahnomen County'],
        ['4597405184', 'MN - Marshall County'],
        ['1844971008', 'MN - Martin County'],
        ['1272903936', 'MN - McLeod County'],
        ['1575175040', 'MN - Meeker County'],
        ['1482275968', 'MN - Mille Lacs County'],
        ['2913896960', 'MN - Morrison County'],
        ['1842333056', 'MN - Mower County'],
        ['1825170048', 'MN - Murray County'],
        ['1161592960', 'MN - Nicollet County'],
        ['1852115968', 'MN - Nobles County'],
        ['2260512000', 'MN - Norman County'],
        ['1692164992', 'MN - Olmsted County'],
        ['5107633152', 'MN - Otter Tail County'],
        ['1596909056', 'MN - Pennington County'],
        ['3655220992', 'MN - Pine County'],
        ['1204486016', 'MN - Pipestone County'],
        ['5105199104', 'MN - Polk County'],
        ['1734550016', 'MN - Pope County'],
        ['394228288', 'MN - Ramsey County'],
        ['1119928960', 'MN - Red Lake County'],
        ['2275492096', 'MN - Redwood County'],
        ['2545714944', 'MN - Renville County'],
        ['1283815040', 'MN - Rice County'],
        ['1249553024', 'MN - Rock County'],
        ['4329428992', 'MN - Roseau County'],
        ['923268416', 'MN - Scott County'],
        ['1121250944', 'MN - Sherburne County'],
        ['1524930944', 'MN - Sibley County'],
        ['16180689920', 'MN - St. Louis County'],
        ['3478697984', 'MN - Stearns County'],
        ['1112775936', 'MN - Steele County'],
        ['1459725952', 'MN - Stevens County'],
        ['1921985024', 'MN - Swift County'],
        ['2447491072', 'MN - Todd County'],
        ['1486398976', 'MN - Traverse County'],
        ['1354518016', 'MN - Wabasha County'],
        ['1388929024', 'MN - Wadena County'],
        ['1096487936', 'MN - Waseca County'],
        ['995285504', 'MN - Washington County'],
        ['1126509056', 'MN - Watonwan County'],
        ['1944969984', 'MN - Wilkin County'],
        ['1621864960', 'MN - Winona County'],
        ['1713165056', 'MN - Wright County'],
        ['1966062976', 'MN - Yellow Medicine County'],
        ['1197628032', 'MS - Adams County'],
        ['1036092992', 'MS - Alcorn County'],
        ['1890951040', 'MS - Amite County'],
        ['1903593984', 'MS - Attala County'],
        ['1053131008', 'MS - Benton County'],
        ['2270313984', 'MS - Bolivar County'],
        ['1519218048', 'MS - Calhoun County'],
        ['1627140992', 'MS - Carroll County'],
        ['1299602048', 'MS - Chickasaw County'],
        ['1083074048', 'MS - Choctaw County'],
        ['1262375040', 'MS - Claiborne County'],
        ['1791117952', 'MS - Clarke County'],
        ['1062094016', 'MS - Clay County'],
        ['1430818048', 'MS - Coahoma County'],
        ['2013053056', 'MS - Copiah County'],
        ['1071716992', 'MS - Covington County'],
        ['1233211008', 'MS - DeSoto County'],
        ['1207747968', 'MS - Forrest County'],
        ['1460180992', 'MS - Franklin County'],
        ['1239848960', 'MS - George County'],
        ['1846028032', 'MS - Greene County'],
        ['1093250944', 'MS - Grenada County'],
        ['1227001984', 'MS - Hancock County'],
        ['1486637056', 'MS - Harrison County'],
        ['2252619008', 'MS - Hinds County'],
        ['1959841024', 'MS - Holmes County'],
        ['1083886976', 'MS - Humphreys County'],
        ['1069782016', 'MS - Issaquena County'],
        ['1379911936', 'MS - Itawamba County'],
        ['1871923968', 'MS - Jackson County'],
        ['1751460992', 'MS - Jasper County'],
        ['1346621056', 'MS - Jefferson County'],
        ['1057862016', 'MS - Jefferson Davis County'],
        ['1799511040', 'MS - Jones County'],
        ['1984402944', 'MS - Kemper County'],
        ['1636115968', 'MS - Lafayette County'],
        ['1287367936', 'MS - Lamar County'],
        ['1822402944', 'MS - Lauderdale County'],
        ['1115424000', 'MS - Lawrence County'],
        ['1509964032', 'MS - Leake County'],
        ['1165368064', 'MS - Lee County'],
        ['1534668032', 'MS - Leflore County'],
        ['1518030976', 'MS - Lincoln County'],
        ['1309262976', 'MS - Lowndes County'],
        ['1850562944', 'MS - Madison County'],
        ['1404766976', 'MS - Marion County'],
        ['1829030016', 'MS - Marshall County'],
        ['1981585024', 'MS - Monroe County'],
        ['1054075008', 'MS - Montgomery County'],
        ['1476658048', 'MS - Neshoba County'],
        ['1497282944', 'MS - Newton County'],
        ['1800400000', 'MS - Noxubee County'],
        ['1186733952', 'MS - Oktibbeha County'],
        ['1774514944', 'MS - Panola County'],
        ['2100125952', 'MS - Pearl River County'],
        ['1676374016', 'MS - Perry County'],
        ['1059342976', 'MS - Pike County'],
        ['1289009024', 'MS - Pontotoc County'],
        ['1074793984', 'MS - Prentiss County'],
        ['1048977024', 'MS - Quitman County'],
        ['2008497024', 'MS - Rankin County'],
        ['1577780992', 'MS - Scott County'],
        ['1118150016', 'MS - Sharkey County'],
        ['1525926016', 'MS - Simpson County'],
        ['1647885056', 'MS - Smith County'],
        ['1153799936', 'MS - Stone County'],
        ['1807175936', 'MS - Sunflower County'],
        ['1671287040', 'MS - Tallahatchie County'],
        ['1048320000', 'MS - Tate County'],
        ['1185735040', 'MS - Tippah County'],
        ['1098813952', 'MS - Tishomingo County'],
        ['1177584000', 'MS - Tunica County'],
        ['1076393984', 'MS - Union County'],
        ['1046209984', 'MS - Walthall County'],
        ['1524210048', 'MS - Warren County'],
        ['1877070976', 'MS - Washington County'],
        ['2099832960', 'MS - Wayne County'],
        ['1090231040', 'MS - Webster County'],
        ['1756286976', 'MS - Wilkinson County'],
        ['1572756992', 'MS - Winston County'],
        ['1209858048', 'MS - Yalobusha County'],
        ['2390420992', 'MS - Yazoo County'],
        ['1469361024', 'MO - Adair County'],
        ['1120695040', 'MO - Andrew County'],
        ['1417505024', 'MO - Atchison County'],
        ['1792880000', 'MO - Audrain County'],
        ['2015661056', 'MO - Barry County'],
        ['1533068032', 'MO - Barton County'],
        ['2167013888', 'MO - Bates County'],
        ['1823507968', 'MO - Benton County'],
        ['1600369024', 'MO - Bollinger County'],
        ['1775213056', 'MO - Boone County'],
        ['1056784000', 'MO - Buchanan County'],
        ['1799185024', 'MO - Butler County'],
        ['1104352000', 'MO - Caldwell County'],
        ['2161539072', 'MO - Callaway County'],
        ['1698832000', 'MO - Camden County'],
        ['1498397952', 'MO - Cape Girardeau County'],
        ['1799060992', 'MO - Carroll County'],
        ['1314059008', 'MO - Carter County'],
        ['1804797056', 'MO - Cass County'],
        ['1228905984', 'MO - Cedar County'],
        ['1945550976', 'MO - Chariton County'],
        ['1457244032', 'MO - Christian County'],
        ['1307147008', 'MO - Clark County'],
        ['1028998016', 'MO - Clay County'],
        ['1085090048', 'MO - Clinton County'],
        ['1019808000', 'MO - Cole County'],
        ['1462736000', 'MO - Cooper County'],
        ['1923108992', 'MO - Crawford County'],
        ['1269124992', 'MO - Dade County'],
        ['1400585984', 'MO - Dallas County'],
        ['1458785024', 'MO - Daviess County'],
        ['1091307008', 'MO - DeKalb County'],
        ['1949716992', 'MO - Dent County'],
        ['2107296000', 'MO - Douglas County'],
        ['1401362048', 'MO - Dunklin County'],
        ['2389733120', 'MO - Franklin County'],
        ['1341104000', 'MO - Gasconade County'],
        ['1272776960', 'MO - Gentry County'],
        ['1749030016', 'MO - Greene County'],
        ['1127361024', 'MO - Grundy County'],
        ['1871276032', 'MO - Harrison County'],
        ['1805085056', 'MO - Henry County'],
        ['1033641984', 'MO - Hickory County'],
        ['1198370048', 'MO - Holt County'],
        ['1201362944', 'MO - Howard County'],
        ['2401562112', 'MO - Howell County'],
        ['1425165056', 'MO - Iron County'],
        ['1565549952', 'MO - Jackson County'],
        ['1653675008', 'MO - Jasper County'],
        ['1700660992', 'MO - Jefferson County'],
        ['2147830016', 'MO - Johnson County'],
        ['1305382016', 'MO - Knox County'],
        ['1980609024', 'MO - Laclede County'],
        ['1627634944', 'MO - Lafayette County'],
        ['1584391040', 'MO - Lawrence County'],
        ['1308052992', 'MO - Lewis County'],
        ['1622771968', 'MO - Lincoln County'],
        ['1594302976', 'MO - Linn County'],
        ['1378726016', 'MO - Livingston County'],
        ['2075166976', 'MO - Macon County'],
        ['1280462976', 'MO - Madison County'],
        ['1364868992', 'MO - Maries County'],
        ['1131628032', 'MO - Marion County'],
        ['1397246976', 'MO - McDonald County'],
        ['1175427968', 'MO - Mercer County'],
        ['1534813056', 'MO - Miller County'],
        ['1065995008', 'MO - Mississippi County'],
        ['1074910976', 'MO - Moniteau County'],
        ['1677414016', 'MO - Monroe County'],
        ['1388873984', 'MO - Montgomery County'],
        ['1547856000', 'MO - Morgan County'],
        ['1747827968', 'MO - New Madrid County'],
        ['1618132992', 'MO - Newton County'],
        ['2271325952', 'MO - Nodaway County'],
        ['2045560960', 'MO - Oregon County'],
        ['1565248000', 'MO - Osage County'],
        ['1929468032', 'MO - Ozark County'],
        ['1275682048', 'MO - Pemiscot County'],
        ['1228569984', 'MO - Perry County'],
        ['1766946944', 'MO - Pettis County'],
        ['1739911936', 'MO - Phelps County'],
        ['1736424960', 'MO - Pike County'],
        ['1088286976', 'MO - Platte County'],
        ['1645997056', 'MO - Polk County'],
        ['1416978944', 'MO - Pulaski County'],
        ['1339844992', 'MO - Putnam County'],
        ['1216726016', 'MO - Ralls County'],
        ['1250146048', 'MO - Randolph County'],
        ['1473198976', 'MO - Ray County'],
        ['2093947008', 'MO - Reynolds County'],
        ['1630493056', 'MO - Ripley County'],
        ['1956745984', 'MO - Saline County'],
        ['795911616', 'MO - Schuyler County'],
        ['1130972032', 'MO - Scotland County'],
        ['1087768960', 'MO - Scott County'],
        ['2599880960', 'MO - Shannon County'],
        ['1297229952', 'MO - Shelby County'],
        ['1451520000', 'MO - St. Charles County'],
        ['1735248000', 'MO - St. Clair County'],
        ['1170381056', 'MO - St. Francois County'],
        ['160343200', 'MO - St. Louis city'],
        ['1315195008', 'MO - St. Louis County'],
        ['1292798976', 'MO - Ste. Genevieve County'],
        ['2132135040', 'MO - Stoddard County'],
        ['1201841024', 'MO - Stone County'],
        ['1678264064', 'MO - Sullivan County'],
        ['1638002944', 'MO - Taney County'],
        ['3049103872', 'MO - Texas County'],
        ['2140359936', 'MO - Vernon County'],
        ['1110072064', 'MO - Warren County'],
        ['1968164992', 'MO - Washington County'],
        ['1966258048', 'MO - Wayne County'],
        ['1534728960', 'MO - Webster County'],
        ['690523520', 'MO - Worth County'],
        ['1765779968', 'MO - Wright County'],
        ['14352740352', 'MT - Beaverhead County'],
        ['12938189824', 'MT - Big Horn County'],
        ['10949289984', 'MT - Blaine County'],
        ['3088667904', 'MT - Broadwater County'],
        ['5306336256', 'MT - Carbon County'],
        ['8652506112', 'MT - Carter County'],
        ['6988195840', 'MT - Cascade County'],
        ['10288700416', 'MT - Chouteau County'],
        ['9798862848', 'MT - Custer County'],
        ['3693594112', 'MT - Daniels County'],
        ['6143099904', 'MT - Dawson County'],
        ['1907604992', 'MT - Deer Lodge County'],
        ['4197780992', 'MT - Fallon County'],
        ['11240040448', 'MT - Fergus County'],
        ['13176980480', 'MT - Flathead County'],
        ['6740935168', 'MT - Gallatin County'],
        ['12109119488', 'MT - Garfield County'],
        ['7759440896', 'MT - Glacier County'],
        ['3044122112', 'MT - Golden Valley County'],
        ['4473984000', 'MT - Granite County'],
        ['7508257792', 'MT - Hill County'],
        ['4289687040', 'MT - Jefferson County'],
        ['4842813952', 'MT - Judith Basin County'],
        ['3859470080', 'MT - Lake County'],
        ['8958322688', 'MT - Lewis and Clark County'],
        ['3703801088', 'MT - Liberty County'],
        ['9357409280', 'MT - Lincoln County'],
        ['9291541504', 'MT - Madison County'],
        ['6845784064', 'MT - McCone County'],
        ['6195025920', 'MT - Meagher County'],
        ['3158327040', 'MT - Mineral County'],
        ['6716936192', 'MT - Missoula County'],
        ['4838498816', 'MT - Musselshell County'],
        ['7259898880', 'MT - Park County'],
        ['4286096896', 'MT - Petroleum County'],
        ['13312629760', 'MT - Phillips County'],
        ['4203194880', 'MT - Pondera County'],
        ['8539962880', 'MT - Powder River County'],
        ['6025328128', 'MT - Powell County'],
        ['4498127872', 'MT - Prairie County'],
        ['6192198144', 'MT - Ravalli County'],
        ['5397905920', 'MT - Richland County'],
        ['6098887168', 'MT - Roosevelt County'],
        ['12976879616', 'MT - Rosebud County'],
        ['7149724160', 'MT - Sanders County'],
        ['4343617024', 'MT - Sheridan County'],
        ['1860848000', 'MT - Silver Bow County'],
        ['4649934848', 'MT - Stillwater County'],
        ['4804958208', 'MT - Sweet Grass County'],
        ['5885423104', 'MT - Teton County'],
        ['4961504256', 'MT - Toole County'],
        ['2531448064', 'MT - Treasure County'],
        ['12757810176', 'MT - Valley County'],
        ['3686056960', 'MT - Wheatland County'],
        ['2303184896', 'MT - Wibaux County'],
        ['6820198912', 'MT - Yellowstone County'],
        ['1458868992', 'NE - Adams County'],
        ['2220184064', 'NE - Antelope County'],
        ['1852760064', 'NE - Arthur County'],
        ['1932427008', 'NE - Banner County'],
        ['1841155968', 'NE - Blaine County'],
        ['1778166016', 'NE - Boone County'],
        ['2784995072', 'NE - Box Butte County'],
        ['1398436992', 'NE - Boyd County'],
        ['3163237888', 'NE - Brown County'],
        ['2507397888', 'NE - Buffalo County'],
        ['1273190016', 'NE - Burt County'],
        ['1514900992', 'NE - Butler County'],
        ['1443778944', 'NE - Cass County'],
        ['1917399040', 'NE - Cedar County'],
        ['2316534016', 'NE - Chase County'],
        ['15437419520', 'NE - Cherry County'],
        ['3098368000', 'NE - Cheyenne County'],
        ['1482222976', 'NE - Clay County'],
        ['1066193984', 'NE - Colfax County'],
        ['1477895936', 'NE - Cuming County'],
        ['6670569984', 'NE - Custer County'],
        ['684416320', 'NE - Dakota County'],
        ['3616824064', 'NE - Dawes County'],
        ['2623906048', 'NE - Dawson County'],
        ['1139208960', 'NE - Deuel County'],
        ['1233433984', 'NE - Dixon County'],
        ['1369341952', 'NE - Dodge County'],
        ['850693376', 'NE - Douglas County'],
        ['2381954048', 'NE - Dundy County'],
        ['1490203008', 'NE - Fillmore County'],
        ['1491356032', 'NE - Franklin County'],
        ['2524179968', 'NE - Frontier County'],
        ['1862542976', 'NE - Furnas County'],
        ['2205351936', 'NE - Gage County'],
        ['4414071808', 'NE - Garden County'],
        ['1475750016', 'NE - Garfield County'],
        ['1186616064', 'NE - Gosper County'],
        ['2010409984', 'NE - Grant County'],
        ['1475804032', 'NE - Greeley County'],
        ['1414881024', 'NE - Hall County'],
        ['1406048000', 'NE - Hamilton County'],
        ['1433469952', 'NE - Harlan County'],
        ['1846822016', 'NE - Hayes County'],
        ['1838743040', 'NE - Hitchcock County'],
        ['6248083968', 'NE - Holt County'],
        ['1867696000', 'NE - Hooker County'],
        ['1474576000', 'NE - Howard County'],
        ['1476770944', 'NE - Jefferson County'],
        ['973968320', 'NE - Johnson County'],
        ['1337065984', 'NE - Kearney County'],
        ['2749530880', 'NE - Keith County'],
        ['2002247040', 'NE - Keya Paha County'],
        ['2465268992', 'NE - Kimball County'],
        ['2870614016', 'NE - Knox County'],
        ['2169241088', 'NE - Lancaster County'],
        ['6640905216', 'NE - Lincoln County'],
        ['1478002944', 'NE - Logan County'],
        ['1471864064', 'NE - Loup County'],
        ['1483395968', 'NE - Madison County'],
        ['2224737024', 'NE - McPherson County'],
        ['1255836032', 'NE - Merrick County'],
        ['3687724032', 'NE - Morrill County'],
        ['1143824000', 'NE - Nance County'],
        ['1055115008', 'NE - Nemaha County'],
        ['1489645056', 'NE - Nuckolls County'],
        ['1594476032', 'NE - Otoe County'],
        ['1116477952', 'NE - Pawnee County'],
        ['2287827968', 'NE - Perkins County'],
        ['1398049024', 'NE - Phelps County'],
        ['1484706944', 'NE - Pierce County'],
        ['1745805952', 'NE - Platte County'],
        ['1135308032', 'NE - Polk County'],
        ['1856984064', 'NE - Red Willow County'],
        ['1429259008', 'NE - Richardson County'],
        ['2611532032', 'NE - Rock County'],
        ['1486699008', 'NE - Saline County'],
        ['618982016', 'NE - Sarpy County'],
        ['1943096960', 'NE - Saunders County'],
        ['1915038976', 'NE - Scotts Bluff County'],
        ['1479990016', 'NE - Seward County'],
        ['6321803776', 'NE - Sheridan County'],
        ['1465489024', 'NE - Sherman County'],
        ['5352833024', 'NE - Sioux County'],
        ['1108381952', 'NE - Stanton County'],
        ['1486152960', 'NE - Thayer County'],
        ['1847272960', 'NE - Thomas County'],
        ['1019377024', 'NE - Thurston County'],
        ['1471236992', 'NE - Valley County'],
        ['1009985984', 'NE - Washington County'],
        ['1147143936', 'NE - Wayne County'],
        ['1489017984', 'NE - Webster County'],
        ['1489714944', 'NE - Wheeler County'],
        ['1482792960', 'NE - York County'],
        ['374672992', 'NV - Carson City'],
        ['12769829888', 'NV - Churchill County'],
        ['20438710272', 'NV - Clark County'],
        ['1838163968', 'NV - Douglas County'],
        ['44469661696', 'NV - Elko County'],
        ['9277017088', 'NV - Esmeralda County'],
        ['10814969856', 'NV - Eureka County'],
        ['24969449472', 'NV - Humboldt County'],
        ['14219310080', 'NV - Lander County'],
        ['27539869696', 'NV - Lincoln County'],
        ['5183049216', 'NV - Lyon County'],
        ['9719821312', 'NV - Mineral County'],
        ['47090970624', 'NV - Nye County'],
        ['15634629632', 'NV - Pershing County'],
        ['680960576', 'NV - Storey County'],
        ['16323050496', 'NV - Washoe County'],
        ['22987819008', 'NV - White Pine County'],
        ['1036595968', 'NH - Belknap County'],
        ['2411437056', 'NH - Carroll County'],
        ['1830242048', 'NH - Cheshire County'],
        ['4648211968', 'NH - Coos County'],
        ['4425639936', 'NH - Grafton County'],
        ['2269189120', 'NH - Hillsborough County'],
        ['2419350016', 'NH - Merrimack County'],
        ['1799316992', 'NH - Rockingham County'],
        ['955640576', 'NH - Strafford County'],
        ['1391634944', 'NH - Sullivan County'],
        ['1439267968', 'NJ - Atlantic County'],
        ['603490112', 'NJ - Bergen County'],
        ['2068302976', 'NJ - Burlington County'],
        ['573067776', 'NJ - Camden County'],
        ['651187520', 'NJ - Cape May County'],
        ['1252784000', 'NJ - Cumberland County'],
        ['326888192', 'NJ - Essex County'],
        ['833989632', 'NJ - Gloucester County'],
        ['119634200', 'NJ - Hudson County'],
        ['1108045952', 'NJ - Hunterdon County'],
        ['581601216', 'NJ - Mercer County'],
        ['800083072', 'NJ - Middlesex County'],
        ['1214167040', 'NJ - Monmouth County'],
        ['1191852032', 'NJ - Morris County'],
        ['1628535040', 'NJ - Ocean County'],
        ['478093088', 'NJ - Passaic County'],
        ['859613568', 'NJ - Salem County'],
        ['781692672', 'NJ - Somerset County'],
        ['1344238976', 'NJ - Sussex County'],
        ['266393104', 'NJ - Union County'],
        ['924412032', 'NJ - Warren County'],
        ['3006531072', 'NM - Bernalillo County'],
        ['17932269568', 'NM - Catron County'],
        ['15708990464', 'NM - Chaves County'],
        ['11757200384', 'NM - Cibola County'],
        ['9733329920', 'NM - Colfax County'],
        ['3638406912', 'NM - Curry County'],
        ['6015565824', 'NM - De Baca County'],
        ['9861408768', 'NM - Do\F1a Ana County'],
        ['10815080448', 'NM - Eddy County'],
        ['10260559872', 'NM - Grant County'],
        ['7848911872', 'NM - Guadalupe County'],
        ['5504868864', 'NM - Harding County'],
        ['8901429248', 'NM - Hidalgo County'],
        ['11372460032', 'NM - Lea County'],
        ['12512470016', 'NM - Lincoln County'],
        ['282740288', 'NM - Los Alamos County'],
        ['7679801856', 'NM - Luna County'],
        ['14114939904', 'NM - McKinley County'],
        ['5001976832', 'NM - Mora County'],
        ['17128129536', 'NM - Otero County'],
        ['7444530176', 'NM - Quay County'],
        ['15179499520', 'NM - Rio Arriba County'],
        ['6338817024', 'NM - Roosevelt County'],
        ['14278779904', 'NM - San Juan County'],
        ['12213919744', 'NM - San Miguel County'],
        ['9610540032', 'NM - Sandoval County'],
        ['4945358848', 'NM - Santa Fe County'],
        ['10823449600', 'NM - Sierra County'],
        ['17214820352', 'NM - Socorro County'],
        ['5706030080', 'NM - Taos County'],
        ['8663108608', 'NM - Torrance County'],
        ['9903450112', 'NM - Union County'],
        ['2761380096', 'NM - Valencia County'],
        ['1354055936', 'NY - Albany County'],
        ['2665894912', 'NY - Allegany County'],
        ['109028896', 'NY - Bronx County'],
        ['1827926016', 'NY - Broome County'],
        ['3388612096', 'NY - Cattaraugus County'],
        ['1791190016', 'NY - Cayuga County'],
        ['2745974016', 'NY - Chautauqua County'],
        ['1055036032', 'NY - Chemung County'],
        ['2314279936', 'NY - Chenango County'],
        ['2688025088', 'NY - Clinton County'],
        ['1643879040', 'NY - Columbia County'],
        ['1291783040', 'NY - Cortland County'],
        ['3735901952', 'NY - Delaware County'],
        ['2060672000', 'NY - Dutchess County'],
        ['2700562944', 'NY - Erie County'],
        ['4647029760', 'NY - Essex County'],
        ['4219397888', 'NY - Franklin County'],
        ['1283259008', 'NY - Fulton County'],
        ['1276697984', 'NY - Genesee County'],
        ['1676140032', 'NY - Greene County'],
        ['4447975936', 'NY - Hamilton County'],
        ['3655688960', 'NY - Herkimer County'],
        ['3285632000', 'NY - Jefferson County'],
        ['183412000', 'NY - Kings County'],
        ['3301403904', 'NY - Lewis County'],
        ['1636257024', 'NY - Livingston County'],
        ['1696033024', 'NY - Madison County'],
        ['1702153984', 'NY - Monroe County'],
        ['1043875968', 'NY - Montgomery County'],
        ['737411072', 'NY - Nassau County'],
        ['59126032', 'NY - New York County'],
        ['1352903936', 'NY - Niagara County'],
        ['3140175872', 'NY - Oneida County'],
        ['2016019968', 'NY - Onondaga County'],
        ['1668121984', 'NY - Ontario County'],
        ['2102257024', 'NY - Orange County'],
        ['1013356992', 'NY - Orleans County'],
        ['2464761088', 'NY - Oswego County'],
        ['2594392064', 'NY - Otsego County'],
        ['596504192', 'NY - Putnam County'],
        ['281096896', 'NY - Queens County'],
        ['1689789056', 'NY - Rensselaer County'],
        ['151178496', 'NY - Richmond County'],
        ['449492992', 'NY - Rockland County'],
        ['2097848960', 'NY - Saratoga County'],
        ['529693600', 'NY - Schenectady County'],
        ['1610503936', 'NY - Schoharie County'],
        ['850379520', 'NY - Schuyler County'],
        ['838393280', 'NY - Seneca County'],
        ['6942145024', 'NY - St. Lawrence County'],
        ['3601531904', 'NY - Steuben County'],
        ['2362202112', 'NY - Suffolk County'],
        ['2507450112', 'NY - Sullivan County'],
        ['1343171968', 'NY - Tioga County'],
        ['1229335040', 'NY - Tompkins County'],
        ['2911756032', 'NY - Ulster County'],
        ['2245395968', 'NY - Warren County'],
        ['2152755968', 'NY - Washington County'],
        ['1563902976', 'NY - Wayne County'],
        ['1114983040', 'NY - Westchester County'],
        ['1535206016', 'NY - Wyoming County'],
        ['875785728', 'NY - Yates County'],
        ['1098008064', 'NC - Alamance County'],
        ['673381376', 'NC - Alexander County'],
        ['608801088', 'NC - Alleghany County'],
        ['1376452992', 'NC - Anson County'],
        ['1103683968', 'NC - Ashe County'],
        ['639951872', 'NC - Avery County'],
        ['2142418048', 'NC - Beaufort County'],
        ['1811100032', 'NC - Bertie County'],
        ['2264498944', 'NC - Bladen County'],
        ['2193649920', 'NC - Brunswick County'],
        ['1700772992', 'NC - Buncombe County'],
        ['1313380992', 'NC - Burke County'],
        ['936925376', 'NC - Cabarrus County'],
        ['1221350016', 'NC - Caldwell County'],
        ['623038016', 'NC - Camden County'],
        ['1311185024', 'NC - Carteret County'],
        ['1100541952', 'NC - Caswell County'],
        ['1032684032', 'NC - Catawba County'],
        ['1766851968', 'NC - Chatham County'],
        ['1179547008', 'NC - Cherokee County'],
        ['446702400', 'NC - Chowan County'],
        ['556201280', 'NC - Clay County'],
        ['1202407936', 'NC - Cleveland County'],
        ['2427578112', 'NC - Columbus County'],
        ['1836192000', 'NC - Craven County'],
        ['1689488000', 'NC - Cumberland County'],
        ['678193984', 'NC - Currituck County'],
        ['993052224', 'NC - Dare County'],
        ['1431421056', 'NC - Davidson County'],
        ['684029312', 'NC - Davie County'],
        ['2113998976', 'NC - Duplin County'],
        ['740672768', 'NC - Durham County'],
        ['1308814976', 'NC - Edgecombe County'],
        ['1057097024', 'NC - Forsyth County'],
        ['1273451008', 'NC - Franklin County'],
        ['922106176', 'NC - Gaston County'],
        ['881747712', 'NC - Gates County'],
        ['756481728', 'NC - Graham County'],
        ['1376759040', 'NC - Granville County'],
        ['688749184', 'NC - Greene County'],
        ['1672365056', 'NC - Guilford County'],
        ['1875374976', 'NC - Halifax County'],
        ['1541009024', 'NC - Harnett County'],
        ['1434055040', 'NC - Haywood County'],
        ['966241792', 'NC - Henderson County'],
        ['914421632', 'NC - Hertford County'],
        ['1012022016', 'NC - Hoke County'],
        ['1586884992', 'NC - Hyde County'],
        ['1486221056', 'NC - Iredell County'],
        ['1271048960', 'NC - Jackson County'],
        ['2049454976', 'NC - Johnston County'],
        ['1219128960', 'NC - Jones County'],
        ['660341696', 'NC - Lee County'],
        ['1037526976', 'NC - Lenoir County'],
        ['771655616', 'NC - Lincoln County'],
        ['1335289984', 'NC - Macon County'],
        ['1164380032', 'NC - Madison County'],
        ['1194546944', 'NC - Martin County'],
        ['1141169024', 'NC - McDowell County'],
        ['1356744960', 'NC - Mecklenburg County'],
        ['573487616', 'NC - Mitchell County'],
        ['1273651968', 'NC - Montgomery County'],
        ['1807404032', 'NC - Moore County'],
        ['1399645952', 'NC - Nash County'],
        ['496071712', 'NC - New Hanover County'],
        ['1389757952', 'NC - Northampton County'],
        ['1975496960', 'NC - Onslow County'],
        ['1030705984', 'NC - Orange County'],
        ['871627392', 'NC - Pamlico County'],
        ['587616768', 'NC - Pasquotank County'],
        ['2252759040', 'NC - Pender County'],
        ['639957312', 'NC - Perquimans County'],
        ['1016108992', 'NC - Person County'],
        ['1688605952', 'NC - Pitt County'],
        ['615871104', 'NC - Polk County'],
        ['2026711040', 'NC - Randolph County'],
        ['1227192064', 'NC - Richmond County'],
        ['2458469888', 'NC - Robeson County'],
        ['1464770048', 'NC - Rockingham County'],
        ['1324450944', 'NC - Rowan County'],
        ['1461144064', 'NC - Rutherford County'],
        ['2446864896', 'NC - Sampson County'],
        ['825803776', 'NC - Scotland County'],
        ['1023267008', 'NC - Stanly County'],
        ['1162535040', 'NC - Stokes County'],
        ['1378304000', 'NC - Surry County'],
        ['1367504000', 'NC - Swain County'],
        ['980383424', 'NC - Transylvania County'],
        ['1007595008', 'NC - Tyrrell County'],
        ['1635629952', 'NC - Union County'],
        ['656606912', 'NC - Vance County'],
        ['2163205888', 'NC - Wake County'],
        ['1109696000', 'NC - Warren County'],
        ['901664512', 'NC - Washington County'],
        ['809515776', 'NC - Watauga County'],
        ['1432488960', 'NC - Wayne County'],
        ['1953570944', 'NC - Wilkes County'],
        ['953567104', 'NC - Wilson County'],
        ['867203584', 'NC - Yadkin County'],
        ['809622976', 'NC - Yancey County'],
        ['2557922048', 'ND - Adams County'],
        ['3863107072', 'ND - Barnes County'],
        ['3596737024', 'ND - Benson County'],
        ['2975515904', 'ND - Billings County'],
        ['4321189888', 'ND - Bottineau County'],
        ['3009067008', 'ND - Bowman County'],
        ['2858226944', 'ND - Burke County'],
        ['4228551936', 'ND - Burleigh County'],
        ['4571166208', 'ND - Cass County'],
        ['3855846912', 'ND - Cavalier County'],
        ['2930494976', 'ND - Dickey County'],
        ['3265421056', 'ND - Divide County'],
        ['5201886208', 'ND - Dunn County'],
        ['1632134016', 'ND - Eddy County'],
        ['3912007936', 'ND - Emmons County'],
        ['1645815040', 'ND - Foster County'],
        ['2592024064', 'ND - Golden Valley County'],
        ['3720197120', 'ND - Grand Forks County'],
        ['4297149952', 'ND - Grant County'],
        ['1835821952', 'ND - Griggs County'],
        ['2932439040', 'ND - Hettinger County'],
        ['3499564032', 'ND - Kidder County'],
        ['2967977984', 'ND - LaMoure County'],
        ['2571386112', 'ND - Logan County'],
        ['4853518848', 'ND - McHenry County'],
        ['2524547072', 'ND - McIntosh County'],
        ['7149203968', 'ND - McKenzie County'],
        ['5467143168', 'ND - McLean County'],
        ['2701246976', 'ND - Mercer County'],
        ['4989017088', 'ND - Morton County'],
        ['4727499776', 'ND - Mountrail County'],
        ['2542785024', 'ND - Nelson County'],
        ['1871293952', 'ND - Oliver County'],
        ['2897403904', 'ND - Pembina County'],
        ['2638162944', 'ND - Pierce County'],
        ['3073936896', 'ND - Ramsey County'],
        ['2233494016', 'ND - Ransom County'],
        ['2271557120', 'ND - Renville County'],
        ['3718650880', 'ND - Richland County'],
        ['2338963968', 'ND - Rolette County'],
        ['2223538944', 'ND - Sargent County'],
        ['2518449920', 'ND - Sheridan County'],
        ['2833690880', 'ND - Sioux County'],
        ['3146632960', 'ND - Slope County'],
        ['3456947968', 'ND - Stark County'],
        ['1844628992', 'ND - Steele County'],
        ['5754238976', 'ND - Stutsman County'],
        ['2653600000', 'ND - Towner County'],
        ['2232438016', 'ND - Traill County'],
        ['3320186112', 'ND - Walsh County'],
        ['5214368768', 'ND - Ward County'],
        ['3291995904', 'ND - Wells County'],
        ['5380445184', 'ND - Williams County'],
        ['1512209024', 'OH - Adams County'],
        ['1042459008', 'OH - Allen County'],
        ['1095435008', 'OH - Ashland County'],
        ['1817992960', 'OH - Ashtabula County'],
        ['1304312960', 'OH - Athens County'],
        ['1039585024', 'OH - Auglaize County'],
        ['1378205952', 'OH - Belmont County'],
        ['1269134976', 'OH - Brown County'],
        ['1209667968', 'OH - Butler County'],
        ['1022032000', 'OH - Carroll County'],
        ['1110247040', 'OH - Champaign County'],
        ['1029449984', 'OH - Clark County'],
        ['1170934016', 'OH - Clermont County'],
        ['1058488000', 'OH - Clinton County'],
        ['1377597056', 'OH - Columbiana County'],
        ['1460529024', 'OH - Coshocton County'],
        ['1040620992', 'OH - Crawford County'],
        ['1184119040', 'OH - Cuyahoga County'],
        ['1549072000', 'OH - Darke County'],
        ['1065676032', 'OH - Defiance County'],
        ['1147618048', 'OH - Delaware County'],
        ['651532032', 'OH - Erie County'],
        ['1306418944', 'OH - Fairfield County'],
        ['1052459008', 'OH - Fayette County'],
        ['1378360960', 'OH - Franklin County'],
        ['1050091008', 'OH - Fulton County'],
        ['1208306944', 'OH - Gallia County'],
        ['1036419968', 'OH - Geauga County'],
        ['1071553984', 'OH - Greene County'],
        ['1352631040', 'OH - Guernsey County'],
        ['1051302976', 'OH - Hamilton County'],
        ['1376210048', 'OH - Hancock County'],
        ['1218343040', 'OH - Hardin County'],
        ['1042052992', 'OH - Harrison County'],
        ['1077462016', 'OH - Henry County'],
        ['1432480000', 'OH - Highland County'],
        ['1091222016', 'OH - Hocking County'],
        ['1094355968', 'OH - Holmes County'],
        ['1272966016', 'OH - Huron County'],
        ['1088582016', 'OH - Jackson County'],
        ['1057566016', 'OH - Jefferson County'],
        ['1361024000', 'OH - Knox County'],
        ['589203584', 'OH - Lake County'],
        ['1174224000', 'OH - Lawrence County'],
        ['1767666944', 'OH - Licking County'],
        ['1187326976', 'OH - Logan County'],
        ['1271947008', 'OH - Lorain County'],
        ['882810688', 'OH - Lucas County'],
        ['1206610944', 'OH - Madison County'],
        ['1066099008', 'OH - Mahoning County'],
        ['1045726976', 'OH - Marion County'],
        ['1091310976', 'OH - Medina County'],
        ['1113949952', 'OH - Meigs County'],
        ['1197736960', 'OH - Mercer County'],
        ['1053038016', 'OH - Miami County'],
        ['1180312064', 'OH - Monroe County'],
        ['1195416960', 'OH - Montgomery County'],
        ['1078530944', 'OH - Morgan County'],
        ['1051739008', 'OH - Morrow County'],
        ['1721250944', 'OH - Muskingum County'],
        ['1030846976', 'OH - Noble County'],
        ['660231296', 'OH - Ottawa County'],
        ['1078568960', 'OH - Paulding County'],
        ['1056641024', 'OH - Perry County'],
        ['1298413952', 'OH - Pickaway County'],
        ['1140323968', 'OH - Pike County'],
        ['1262311040', 'OH - Portage County'],
        ['1098465024', 'OH - Preble County'],
        ['1249725056', 'OH - Putnam County'],
        ['1282739968', 'OH - Richland County'],
        ['1784988032', 'OH - Ross County'],
        ['1057888000', 'OH - Sandusky County'],
        ['1580445056', 'OH - Scioto County'],
        ['1427128064', 'OH - Seneca County'],
        ['1055873984', 'OH - Shelby County'],
        ['1489944064', 'OH - Stark County'],
        ['1069012992', 'OH - Summit County'],
        ['1601380992', 'OH - Trumbull County'],
        ['1470169984', 'OH - Tuscarawas County'],
        ['1118176000', 'OH - Union County'],
        ['1059715008', 'OH - Van Wert County'],
        ['1068009024', 'OH - Vinton County'],
        ['1039398016', 'OH - Warren County'],
        ['1636798976', 'OH - Washington County'],
        ['1437257984', 'OH - Wayne County'],
        ['1090296064', 'OH - Williams County'],
        ['1598552960', 'OH - Wood County'],
        ['1053774976', 'OH - Wyandot County'],
        ['1485298048', 'OK - Adair County'],
        ['2244107008', 'OK - Alfalfa County'],
        ['2526577920', 'OK - Atoka County'],
        ['4699978240', 'OK - Beaver County'],
        ['2335664896', 'OK - Beckham County'],
        ['2404608000', 'OK - Blaine County'],
        ['2342567936', 'OK - Bryan County'],
        ['3310753024', 'OK - Caddo County'],
        ['2322249984', 'OK - Canadian County'],
        ['2129425024', 'OK - Carter County'],
        ['1940957056', 'OK - Cherokee County'],
        ['1995214976', 'OK - Choctaw County'],
        ['4751948800', 'OK - Cimarron County'],
        ['1395398016', 'OK - Cleveland County'],
        ['1338199040', 'OK - Coal County'],
        ['2769438976', 'OK - Comanche County'],
        ['1638567040', 'OK - Cotton County'],
        ['1971896960', 'OK - Craig County'],
        ['2460854016', 'OK - Creek County'],
        ['2561025024', 'OK - Custer County'],
        ['1911869056', 'OK - Delaware County'],
        ['2588632064', 'OK - Dewey County'],
        ['3189609984', 'OK - Ellis County'],
        ['2741413888', 'OK - Garfield County'],
        ['2077483008', 'OK - Garvin County'],
        ['2850273024', 'OK - Grady County'],
        ['2592244992', 'OK - Grant County'],
        ['1655842944', 'OK - Greer County'],
        ['1391326976', 'OK - Harmon County'],
        ['2691041024', 'OK - Harper County'],
        ['1493181952', 'OK - Haskell County'],
        ['2084024960', 'OK - Hughes County'],
        ['2078855936', 'OK - Jackson County'],
        ['1965364992', 'OK - Jefferson County'],
        ['1665207040', 'OK - Johnston County'],
        ['2382086912', 'OK - Kay County'],
        ['2326224896', 'OK - Kingfisher County'],
        ['2629423104', 'OK - Kiowa County'],
        ['1870178944', 'OK - Latimer County'],
        ['4116046080', 'OK - Le Flore County'],
        ['2466480896', 'OK - Lincoln County'],
        ['1926521984', 'OK - Logan County'],
        ['1331240960', 'OK - Love County'],
        ['2473408000', 'OK - Major County'],
        ['961092928', 'OK - Marshall County'],
        ['1697441024', 'OK - Mayes County'],
        ['1478109952', 'OK - McClain County'],
        ['4791492096', 'OK - McCurtain County'],
        ['1601895936', 'OK - McIntosh County'],
        ['1078621056', 'OK - Murray County'],
        ['2099057024', 'OK - Muskogee County'],
        ['1895598976', 'OK - Noble County'],
        ['1465355008', 'OK - Nowata County'],
        ['1602082048', 'OK - Okfuskee County'],
        ['1835832064', 'OK - Oklahoma County'],
        ['1806124032', 'OK - Okmulgee County'],
        ['5818039808', 'OK - Osage County'],
        ['1219421056', 'OK - Ottawa County'],
        ['1470995968', 'OK - Pawnee County'],
        ['1773372032', 'OK - Payne County'],
        ['3381129984', 'OK - Pittsburg County'],
        ['1865917952', 'OK - Pontotoc County'],
        ['2040060032', 'OK - Pottawatomie County'],
        ['3615198976', 'OK - Pushmataha County'],
        ['2955527936', 'OK - Roger Mills County'],
        ['1749880064', 'OK - Rogers County'],
        ['1639041024', 'OK - Seminole County'],
        ['1743763968', 'OK - Sequoyah County'],
        ['2253923072', 'OK - Stephens County'],
        ['5286841856', 'OK - Texas County'],
        ['2256227072', 'OK - Tillman County'],
        ['1476930944', 'OK - Tulsa County'],
        ['1454422016', 'OK - Wagoner County'],
        ['1076020992', 'OK - Washington County'],
        ['2598190080', 'OK - Washita County'],
        ['3331900928', 'OK - Woods County'],
        ['3217797888', 'OK - Woodward County'],
        ['7947009024', 'OR - Baker County'],
        ['1750680064', 'OR - Benton County'],
        ['4844111872', 'OR - Clackamas County'],
        ['2147228032', 'OR - Clatsop County'],
        ['1702546944', 'OR - Columbia County'],
        ['4134068992', 'OR - Coos County'],
        ['7715798016', 'OR - Crook County'],
        ['4215100928', 'OR - Curry County'],
        ['7817064960', 'OR - Deschutes County'],
        ['13043369984', 'OR - Douglas County'],
        ['3120440064', 'OR - Gilliam County'],
        ['11728870400', 'OR - Grant County'],
        ['26244790272', 'OR - Harney County'],
        ['1351841024', 'OR - Hood River County'],
        ['7209355776', 'OR - Jackson County'],
        ['4612211200', 'OR - Jefferson County'],
        ['4246720000', 'OR - Josephine County'],
        ['15387249664', 'OR - Klamath County'],
        ['21079869440', 'OR - Lake County'],
        ['11792520192', 'OR - Lane County'],
        ['2537581056', 'OR - Lincoln County'],
        ['5931406848', 'OR - Linn County'],
        ['25608589312', 'OR - Malheur County'],
        ['3062210048', 'OR - Marion County'],
        ['5261843968', 'OR - Morrow County'],
        ['1117053952', 'OR - Multnomah County'],
        ['1918628992', 'OR - Polk County'],
        ['2133357952', 'OR - Sherman County'],
        ['2855668992', 'OR - Tillamook County'],
        ['8328131072', 'OR - Umatilla County'],
        ['5274783744', 'OR - Union County'],
        ['8148591104', 'OR - Wallowa County'],
        ['6168105984', 'OR - Wasco County'],
        ['1875746944', 'OR - Washington County'],
        ['4441180160', 'OR - Wheeler County'],
        ['1854068992', 'OR - Yamhill County'],
        ['1343342976', 'PA - Adams County'],
        ['1890883968', 'PA - Allegheny County'],
        ['1691787008', 'PA - Armstrong County'],
        ['1125900032', 'PA - Beaver County'],
        ['2621836032', 'PA - Bedford County'],
        ['2218341888', 'PA - Berks County'],
        ['1361815040', 'PA - Blair County'],
        ['2971749120', 'PA - Bradford County'],
        ['1565149056', 'PA - Bucks County'],
        ['2042476032', 'PA - Butler County'],
        ['1782819968', 'PA - Cambria County'],
        ['1026233024', 'PA - Cameron County'],
        ['987977472', 'PA - Carbon County'],
        ['2874682880', 'PA - Centre County'],
        ['1943805952', 'PA - Chester County'],
        ['1556153984', 'PA - Clarion County'],
        ['2964815872', 'PA - Clearfield County'],
        ['2299867904', 'PA - Clinton County'],
        ['1251244032', 'PA - Columbia County'],
        ['2621839104', 'PA - Crawford County'],
        ['1412732032', 'PA - Cumberland County'],
        ['1359864064', 'PA - Dauphin County'],
        ['476152288', 'PA - Delaware County'],
        ['2142848000', 'PA - Elk County'],
        ['2069799040', 'PA - Erie County'],
        ['2046968960', 'PA - Fayette County'],
        ['1106403968', 'PA - Forest County'],
        ['2000050048', 'PA - Franklin County'],
        ['1133252992', 'PA - Fulton County'],
        ['1491699968', 'PA - Greene County'],
        ['2265305088', 'PA - Huntingdon County'],
        ['2141997952', 'PA - Indiana County'],
        ['1689783040', 'PA - Jefferson County'],
        ['1013593024', 'PA - Juniata County'],
        ['1189005952', 'PA - Lackawanna County'],
        ['2444456960', 'PA - Lancaster County'],
        ['927669632', 'PA - Lawrence County'],
        ['937142592', 'PA - Lebanon County'],
        ['893975808', 'PA - Lehigh County'],
        ['2305949952', 'PA - Luzerne County'],
        ['3182044928', 'PA - Lycoming County'],
        ['2536109056', 'PA - McKean County'],
        ['1741960960', 'PA - Mercer County'],
        ['1064566016', 'PA - Mifflin County'],
        ['1575452032', 'PA - Monroe County'],
        ['1251067008', 'PA - Montgomery County'],
        ['337326208', 'PA - Montour County'],
        ['957444224', 'PA - Northampton County'],
        ['1187166976', 'PA - Northumberland County'],
        ['1428236032', 'PA - Perry County'],
        ['347321088', 'PA - Philadelphia County'],
        ['1411441024', 'PA - Pike County'],
        ['2800613888', 'PA - Potter County'],
        ['2016652032', 'PA - Schuylkill County'],
        ['851343232', 'PA - Snyder County'],
        ['2782616064', 'PA - Somerset County'],
        ['1165337984', 'PA - Sullivan County'],
        ['2132685952', 'PA - Susquehanna County'],
        ['2936496896', 'PA - Tioga County'],
        ['818389888', 'PA - Union County'],
        ['1746386944', 'PA - Venango County'],
        ['2289897984', 'PA - Warren County'],
        ['2219590912', 'PA - Washington County'],
        ['1879304960', 'PA - Wayne County'],
        ['2661353984', 'PA - Westmoreland County'],
        ['1029062976', 'PA - Wyoming County'],
        ['2341818880', 'PA - York County'],
        ['62584940', 'RI - Bristol County'],
        ['436484800', 'RI - Kent County'],
        ['265178400', 'RI - Newport County'],
        ['1060604992', 'RI - Providence County'],
        ['852713728', 'RI - Washington County'],
        ['1270348032', 'SC - Abbeville County'],
        ['2773965056', 'SC - Aiken County'],
        ['1056948992', 'SC - Allendale County'],
        ['1852945024', 'SC - Anderson County'],
        ['1018822016', 'SC - Bamberg County'],
        ['1420329984', 'SC - Barnwell County'],
        ['1492558976', 'SC - Beaufort County'],
        ['2846024960', 'SC - Berkeley County'],
        ['987176832', 'SC - Calhoun County'],
        ['2372658944', 'SC - Charleston County'],
        ['1016982016', 'SC - Cherokee County'],
        ['1503895040', 'SC - Chester County'],
        ['2069596032', 'SC - Chesterfield County'],
        ['1571958016', 'SC - Clarendon County'],
        ['2736299008', 'SC - Colleton County'],
        ['1453379968', 'SC - Darlington County'],
        ['1048614016', 'SC - Dillon County'],
        ['1484665984', 'SC - Dorchester County'],
        ['1296045952', 'SC - Edgefield County'],
        ['1777448960', 'SC - Fairfield County'],
        ['2071897984', 'SC - Florence County'],
        ['2107075968', 'SC - Georgetown County'],
        ['2033451008', 'SC - Greenville County'],
        ['1177735040', 'SC - Greenwood County'],
        ['1450123008', 'SC - Hampton County'],
        ['2936776960', 'SC - Horry County'],
        ['1697266048', 'SC - Jasper County'],
        ['1881788032', 'SC - Kershaw County'],
        ['1422317056', 'SC - Lancaster County'],
        ['1848743040', 'SC - Laurens County'],
        ['1062372992', 'SC - Lee County'],
        ['1810174976', 'SC - Lexington County'],
        ['1267092992', 'SC - Marion County'],
        ['1242349952', 'SC - Marlboro County'],
        ['930141824', 'SC - McCormick County'],
        ['1631788032', 'SC - Newberry County'],
        ['1622196992', 'SC - Oconee County'],
        ['2864787968', 'SC - Orangeburg County'],
        ['1285688064', 'SC - Pickens County'],
        ['1960797952', 'SC - Richland County'],
        ['1172690944', 'SC - Saluda County'],
        ['2092519040', 'SC - Spartanburg County'],
        ['1722513024', 'SC - Sumter County'],
        ['1331697024', 'SC - Union County'],
        ['2419460096', 'SC - Williamsburg County'],
        ['1762732032', 'SC - York County'],
        ['1834811008', 'SD - Aurora County'],
        ['3260043008', 'SD - Beadle County'],
        ['3068380928', 'SD - Bennett County'],
        ['1459979008', 'SD - Bon Homme County'],
        ['2051805056', 'SD - Brookings County'],
        ['4436600832', 'SD - Brown County'],
        ['2116642048', 'SD - Brule County'],
        ['1220880000', 'SD - Buffalo County'],
        ['5827210240', 'SD - Butte County'],
        ['1900214016', 'SD - Campbell County'],
        ['2842477056', 'SD - Charles Mix County'],
        ['2480182016', 'SD - Clark County'],
        ['1067553984', 'SD - Clay County'],
        ['1783193984', 'SD - Codington County'],
        ['6396471808', 'SD - Corson County'],
        ['4032614912', 'SD - Custer County'],
        ['1128082944', 'SD - Davison County'],
        ['2662166016', 'SD - Day County'],
        ['1612749952', 'SD - Deuel County'],
        ['5963432960', 'SD - Dewey County'],
        ['1118361984', 'SD - Douglas County'],
        ['2916212992', 'SD - Edmunds County'],
        ['4506358784', 'SD - Fall River County'],
        ['2542721024', 'SD - Faulk County'],
        ['1764967936', 'SD - Grant County'],
        ['2628727040', 'SD - Gregory County'],
        ['4689260032', 'SD - Haakon County'],
        ['1313721984', 'SD - Hamlin County'],
        ['3720811008', 'SD - Hand County'],
        ['1125383040', 'SD - Hanson County'],
        ['6918829056', 'SD - Harding County'],
        ['1920631040', 'SD - Hughes County'],
        ['2105412992', 'SD - Hutchinson County'],
        ['2228748032', 'SD - Hyde County'],
        ['4827513856', 'SD - Jackson County'],
        ['1362936960', 'SD - Jerauld County'],
        ['2511452928', 'SD - Jones County'],
        ['2155481088', 'SD - Kingsbury County'],
        ['1458881024', 'SD - Lake County'],
        ['2072082048', 'SD - Lawrence County'],
        ['1495144960', 'SD - Lincoln County'],
        ['4252594944', 'SD - Lyman County'],
        ['2170582016', 'SD - Marshall County'],
        ['1487181952', 'SD - McCook County'],
        ['2943894016', 'SD - McPherson County'],
        ['8989806592', 'SD - Meade County'],
        ['3385906944', 'SD - Mellette County'],
        ['1477099008', 'SD - Miner County'],
        ['2090502016', 'SD - Minnehaha County'],
        ['1345203968', 'SD - Moody County'],
        ['7191240192', 'SD - Pennington County'],
        ['7434505216', 'SD - Perkins County'],
        ['2230341120', 'SD - Potter County'],
        ['2851684096', 'SD - Roberts County'],
        ['1474534016', 'SD - Sanborn County'],
        ['5423170048', 'SD - Shannon County'],
        ['3895148032', 'SD - Spink County'],
        ['3741061888', 'SD - Stanley County'],
        ['2607644928', 'SD - Sully County'],
        ['3596342016', 'SD - Todd County'],
        ['4176216064', 'SD - Tripp County'],
        ['1598169984', 'SD - Turner County'],
        ['1192797952', 'SD - Union County'],
        ['1835342976', 'SD - Walworth County'],
        ['1349806976', 'SD - Yankton County'],
        ['5079669760', 'SD - Ziebach County'],
        ['873245312', 'TN - Anderson County'],
        ['1226710016', 'TN - Bedford County'],
        ['1020822976', 'TN - Benton County'],
        ['1052636032', 'TN - Bledsoe County'],
        ['1447042048', 'TN - Blount County'],
        ['851489024', 'TN - Bradley County'],
        ['1243688960', 'TN - Campbell County'],
        ['687991680', 'TN - Cannon County'],
        ['1552056064', 'TN - Carroll County'],
        ['883711488', 'TN - Carter County'],
        ['783308288', 'TN - Cheatham County'],
        ['740051968', 'TN - Chester County'],
        ['1125555968', 'TN - Claiborne County'],
        ['612626624', 'TN - Clay County'],
        ['1125518976', 'TN - Cocke County'],
        ['1110993024', 'TN - Coffee County'],
        ['687731328', 'TN - Crockett County'],
        ['1763847936', 'TN - Cumberland County'],
        ['1305438976', 'TN - Davidson County'],
        ['864654016', 'TN - Decatur County'],
        ['788253888', 'TN - DeKalb County'],
        ['1268824064', 'TN - Dickson County'],
        ['1326919936', 'TN - Dyer County'],
        ['1825387008', 'TN - Fayette County'],
        ['1291399040', 'TN - Fentress County'],
        ['1436258048', 'TN - Franklin County'],
        ['1561095040', 'TN - Gibson County'],
        ['1582292992', 'TN - Giles County'],
        ['726751616', 'TN - Grainger County'],
        ['1611399936', 'TN - Greene County'],
        ['933778880', 'TN - Grundy County'],
        ['417451008', 'TN - Hamblen County'],
        ['1404889984', 'TN - Hamilton County'],
        ['575858112', 'TN - Hancock County'],
        ['1729510016', 'TN - Hardeman County'],
        ['1495246976', 'TN - Hardin County'],
        ['1261259008', 'TN - Hawkins County'],
        ['1380753024', 'TN - Haywood County'],
        ['1346983040', 'TN - Henderson County'],
        ['1455822976', 'TN - Henry County'],
        ['1586365056', 'TN - Hickman County'],
        ['518739584', 'TN - Houston County'],
        ['1375232000', 'TN - Humphreys County'],
        ['798545728', 'TN - Jackson County'],
        ['709858624', 'TN - Jefferson County'],
        ['773046080', 'TN - Johnson County'],
        ['1316270976', 'TN - Knox County'],
        ['429379104', 'TN - Lake County'],
        ['1222454016', 'TN - Lauderdale County'],
        ['1598354944', 'TN - Lawrence County'],
        ['730608128', 'TN - Lewis County'],
        ['1477170048', 'TN - Lincoln County'],
        ['593665408', 'TN - Loudon County'],
        ['795498368', 'TN - Macon County'],
        ['1442925952', 'TN - Madison County'],
        ['1290226944', 'TN - Marion County'],
        ['972437120', 'TN - Marshall County'],
        ['1588020992', 'TN - Maury County'],
        ['1114018048', 'TN - McMinn County'],
        ['1457801984', 'TN - McNairy County'],
        ['505362816', 'TN - Meigs County'],
        ['1646104960', 'TN - Monroe County'],
        ['1396461952', 'TN - Montgomery County'],
        ['334684992', 'TN - Moore County'],
        ['1352440064', 'TN - Morgan County'],
        ['1410839040', 'TN - Obion County'],
        ['1122715008', 'TN - Overton County'],
        ['1074147968', 'TN - Perry County'],
        ['422113408', 'TN - Pickett County'],
        ['1125805952', 'TN - Polk County'],
        ['1038852992', 'TN - Putnam County'],
        ['816822976', 'TN - Rhea County'],
        ['934229824', 'TN - Roane County'],
        ['1233576960', 'TN - Robertson County'],
        ['1604145024', 'TN - Rutherford County'],
        ['1378642944', 'TN - Scott County'],
        ['688567680', 'TN - Sequatchie County'],
        ['1534567040', 'TN - Sevier County'],
        ['1976611968', 'TN - Shelby County'],
        ['814004480', 'TN - Smith County'],
        ['1189660032', 'TN - Stewart County'],
        ['1070604992', 'TN - Sullivan County'],
        ['1371267968', 'TN - Sumner County'],
        ['1187161984', 'TN - Tipton County'],
        ['295758784', 'TN - Trousdale County'],
        ['482165184', 'TN - Unicoi County'],
        ['578990208', 'TN - Union County'],
        ['708142528', 'TN - Van Buren County'],
        ['1120636032', 'TN - Warren County'],
        ['845539904', 'TN - Washington County'],
        ['1901310976', 'TN - Wayne County'],
        ['1503134976', 'TN - Weakley County'],
        ['975578880', 'TN - White County'],
        ['1508925056', 'TN - Williamson County'],
        ['1478433024', 'TN - Wilson County'],
        ['2752125952', 'TX - Anderson County'],
        ['3886830080', 'TX - Andrews County'],
        ['2066235008', 'TX - Angelina County'],
        ['652868928', 'TX - Aransas County'],
        ['2339044096', 'TX - Archer County'],
        ['2354582016', 'TX - Armstrong County'],
        ['3158605056', 'TX - Atascosa County'],
        ['1674449024', 'TX - Austin County'],
        ['2141394944', 'TX - Bailey County'],
        ['2048578944', 'TX - Bandera County'],
        ['2300299008', 'TX - Bastrop County'],
        ['2246767104', 'TX - Baylor County'],
        ['2279810048', 'TX - Bee County'],
        ['2722117888', 'TX - Bell County'],
        ['3211120128', 'TX - Bexar County'],
        ['1836952064', 'TX - Blanco County'],
        ['2324365056', 'TX - Borden County'],
        ['2545902080', 'TX - Bosque County'],
        ['2292154112', 'TX - Bowie County'],
        ['3516430080', 'TX - Brazoria County'],
        ['1516295936', 'TX - Brazos County'],
        ['16015800320', 'TX - Brewster County'],
        ['2330991104', 'TX - Briscoe County'],
        ['2443301888', 'TX - Brooks County'],
        ['2446071040', 'TX - Brown County'],
        ['1706871040', 'TX - Burleson County'],
        ['2575117056', 'TX - Burnet County'],
        ['1412208000', 'TX - Caldwell County'],
        ['1312711040', 'TX - Calhoun County'],
        ['2329362944', 'TX - Callahan County'],
        ['2307478016', 'TX - Cameron County'],
        ['507188096', 'TX - Camp County'],
        ['2383358976', 'TX - Carson County'],
        ['2426724096', 'TX - Cass County'],
        ['2316572928', 'TX - Castro County'],
        ['1546578944', 'TX - Chambers County'],
        ['2727031040', 'TX - Cherokee County'],
        ['1803680000', 'TX - Childress County'],
        ['2819773952', 'TX - Clay County'],
        ['2007629952', 'TX - Cochran County'],
        ['2360696064', 'TX - Coke County'],
        ['3268423936', 'TX - Coleman County'],
        ['2178761984', 'TX - Collin County'],
        ['2378750976', 'TX - Collingsworth County'],
        ['2487097088', 'TX - Colorado County'],
        ['1449037056', 'TX - Comal County'],
        ['2428771072', 'TX - Comanche County'],
        ['2548027904', 'TX - Concho County'],
        ['2265615872', 'TX - Cooke County'],
        ['2724838912', 'TX - Coryell County'],
        ['2332448000', 'TX - Cottle County'],
        ['2033319040', 'TX - Crane County'],
        ['7270943744', 'TX - Crockett County'],
        ['2331501056', 'TX - Crosby County'],
        ['9875099648', 'TX - Culberson County'],
        ['3893424128', 'TX - Dallam County'],
        ['2256602880', 'TX - Dallas County'],
        ['2331781120', 'TX - Dawson County'],
        ['3876869120', 'TX - Deaf Smith County'],
        ['665173888', 'TX - Delta County'],
        ['2275129088', 'TX - Denton County'],
        ['2354234880', 'TX - DeWitt County'],
        ['2335454976', 'TX - Dickens County'],
        ['3441794048', 'TX - Dimmit County'],
        ['2400623104', 'TX - Donley County'],
        ['4645093888', 'TX - Duval County'],
        ['2399599104', 'TX - Eastland County'],
        ['2324998912', 'TX - Ector County'],
        ['5485225984', 'TX - Edwards County'],
        ['2622863104', 'TX - El Paso County'],
        ['2422899968', 'TX - Ellis County'],
        ['2805142016', 'TX - Erath County'],
        ['1982590976', 'TX - Falls County'],
        ['2307256064', 'TX - Fannin County'],
        ['2460509952', 'TX - Fayette County'],
        ['2328246016', 'TX - Fisher County'],
        ['2569637120', 'TX - Floyd County'],
        ['1824377984', 'TX - Foard County'],
        ['2231225088', 'TX - Fort Bend County'],
        ['736569024', 'TX - Franklin County'],
        ['2273332992', 'TX - Freestone County'],
        ['2935750912', 'TX - Frio County'],
        ['3891132928', 'TX - Gaines County'],
        ['979943296', 'TX - Galveston County'],
        ['2313926912', 'TX - Garza County'],
        ['2740761088', 'TX - Gillespie County'],
        ['2331553024', 'TX - Glasscock County'],
        ['2206706944', 'TX - Goliad County'],
        ['2762707968', 'TX - Gonzales County'],
        ['2398262016', 'TX - Gray County'],
        ['2415951104', 'TX - Grayson County'],
        ['707850624', 'TX - Gregg County'],
        ['2039510016', 'TX - Grimes County'],
        ['1842258048', 'TX - Guadalupe County'],
        ['2602116096', 'TX - Hale County'],
        ['2288232960', 'TX - Hall County'],
        ['2165007872', 'TX - Hamilton County'],
        ['2382297088', 'TX - Hansford County'],
        ['1800337024', 'TX - Hardeman County'],
        ['2306558976', 'TX - Hardin County'],
        ['4411985920', 'TX - Harris County'],
        ['2330862080', 'TX - Harrison County'],
        ['3786648064', 'TX - Hartley County'],
        ['2339098880', 'TX - Haskell County'],
        ['1755954944', 'TX - Hays County'],
        ['2347269888', 'TX - Hemphill County'],
        ['2262996992', 'TX - Henderson County'],
        ['4068521984', 'TX - Hidalgo County'],
        ['2483444992', 'TX - Hill County'],
        ['2352723968', 'TX - Hockley County'],
        ['1089456000', 'TX - Hood County'],
        ['1986972032', 'TX - Hopkins County'],
        ['3188039936', 'TX - Houston County'],
        ['2333038080', 'TX - Howard County'],
        ['11838789632', 'TX - Hudspeth County'],
        ['2176413952', 'TX - Hunt County'],
        ['2298404096', 'TX - Hutchinson County'],
        ['2723535104', 'TX - Irion County'],
        ['2358603008', 'TX - Jack County'],
        ['2148226048', 'TX - Jackson County'],
        ['2431598080', 'TX - Jasper County'],
        ['5865170944', 'TX - Jeff Davis County'],
        ['2269594112', 'TX - Jefferson County'],
        ['2942584064', 'TX - Jim Hogg County'],
        ['2240250880', 'TX - Jim Wells County'],
        ['1876942976', 'TX - Johnson County'],
        ['2404943872', 'TX - Jones County'],
        ['1936160000', 'TX - Karnes County'],
        ['2022001024', 'TX - Kaufman County'],
        ['1715746048', 'TX - Kendall County'],
        ['3777053952', 'TX - Kenedy County'],
        ['2337481984', 'TX - Kent County'],
        ['2857581056', 'TX - Kerr County'],
        ['3240040960', 'TX - Kimble County'],
        ['2359147008', 'TX - King County'],
        ['3522525952', 'TX - Kinney County'],
        ['2282577920', 'TX - Kleberg County'],
        ['2203097088', 'TX - Knox County'],
        ['3850511104', 'TX - La Salle County'],
        ['2349612032', 'TX - Lamar County'],
        ['2631898112', 'TX - Lamb County'],
        ['1846247040', 'TX - Lampasas County'],
        ['2511532032', 'TX - Lavaca County'],
        ['1629143040', 'TX - Lee County'],
        ['2779447040', 'TX - Leon County'],
        ['3000284928', 'TX - Liberty County'],
        ['2344684032', 'TX - Limestone County'],
        ['2414332928', 'TX - Lipscomb County'],
        ['2692801024', 'TX - Live Oak County'],
        ['2419138048', 'TX - Llano County'],
        ['1732508032', 'TX - Loving County'],
        ['2319590912', 'TX - Lubbock County'],
        ['2309925120', 'TX - Lynn County'],
        ['1207102976', 'TX - Madison County'],
        ['986475520', 'TX - Marion County'],
        ['2369693952', 'TX - Martin County'],
        ['2405588992', 'TX - Mason County'],
        ['2849701120', 'TX - Matagorda County'],
        ['3313264128', 'TX - Maverick County'],
        ['2759887104', 'TX - McCulloch County'],
        ['2686080000', 'TX - McLennan County'],
        ['2951099904', 'TX - McMullen County'],
        ['3432655872', 'TX - Medina County'],
        ['2336246016', 'TX - Menard County'],
        ['2331764992', 'TX - Midland County'],
        ['2633838080', 'TX - Milam County'],
        ['1937986944', 'TX - Mills County'],
        ['2359712000', 'TX - Mitchell County'],
        ['2411034880', 'TX - Montague County'],
        ['2698081024', 'TX - Montgomery County'],
        ['2330189056', 'TX - Moore County'],
        ['652637120', 'TX - Morris County'],
        ['2562955008', 'TX - Motley County'],
        ['2451520000', 'TX - Nacogdoches County'],
        ['2614923008', 'TX - Navarro County'],
        ['2418212096', 'TX - Newton County'],
        ['2362062080', 'TX - Nolan County'],
        ['2171657984', 'TX - Nueces County'],
        ['2376642048', 'TX - Ochiltree County'],
        ['3886362880', 'TX - Oldham County'],
        ['864197824', 'TX - Orange County'],
        ['2465126912', 'TX - Palo Pinto County'],
        ['2076520960', 'TX - Panola County'],
        ['2339997952', 'TX - Parker County'],
        ['2281203968', 'TX - Parmer County'],
        ['12338310144', 'TX - Pecos County'],
        ['2737858048', 'TX - Polk County'],
        ['2352666880', 'TX - Potter County'],
        ['9985016832', 'TX - Presidio County'],
        ['594278080', 'TX - Rains County'],
        ['2360887040', 'TX - Randall County'],
        ['3044016128', 'TX - Reagan County'],
        ['1810905984', 'TX - Real County'],
        ['2684723968', 'TX - Red River County'],
        ['6825588224', 'TX - Reeves County'],
        ['1995441024', 'TX - Refugio County'],
        ['2393297920', 'TX - Roberts County'],
        ['2216208896', 'TX - Robertson County'],
        ['329020608', 'TX - Rockwall County'],
        ['2721934080', 'TX - Runnels County'],
        ['2393218048', 'TX - Rusk County'],
        ['1272695040', 'TX - Sabine County'],
        ['1374396032', 'TX - San Augustine County'],
        ['1474332032', 'TX - San Jacinto County'],
        ['1796029056', 'TX - San Patricio County'],
        ['2940404992', 'TX - San Saba County'],
        ['3394516992', 'TX - Schleicher County'],
        ['2345089024', 'TX - Scurry County'],
        ['2367990016', 'TX - Shackelford County'],
        ['2060551040', 'TX - Shelby County'],
        ['2390650880', 'TX - Sherman County'],
        ['2386555904', 'TX - Smith County'],
        ['482937088', 'TX - Somervell County'],
        ['3168018944', 'TX - Starr County'],
        ['2322492928', 'TX - Stephens County'],
        ['2391728128', 'TX - Sterling County'],
        ['2373241088', 'TX - Stonewall County'],
        ['3765650944', 'TX - Sutton County'],
        ['2305501952', 'TX - Swisher County'],
        ['2236734976', 'TX - Tarrant County'],
        ['2371268096', 'TX - Taylor County'],
        ['6107257856', 'TX - Terrell County'],
        ['2302083072', 'TX - Terry County'],
        ['2363499008', 'TX - Throckmorton County'],
        ['1051676032', 'TX - Titus County'],
        ['3941890048', 'TX - Tom Green County'],
        ['2564612096', 'TX - Travis County'],
        ['1796434944', 'TX - Trinity County'],
        ['2394446080', 'TX - Tyler County'],
        ['1509826048', 'TX - Upshur County'],
        ['3215013120', 'TX - Upton County'],
        ['4019521024', 'TX - Uvalde County'],
        ['8144864256', 'TX - Val Verde County'],
        ['2182211072', 'TX - Van Zandt County'],
        ['2284739072', 'TX - Victoria County'],
        ['2030988032', 'TX - Walker County'],
        ['1329778048', 'TX - Waller County'],
        ['2164199936', 'TX - Ward County'],
        ['1564231936', 'TX - Washington County'],
        ['8706198528', 'TX - Webb County'],
        ['2813114880', 'TX - Wharton County'],
        ['2368603904', 'TX - Wheeler County'],
        ['1625933056', 'TX - Wichita County'],
        ['2514473984', 'TX - Wilbarger County'],
        ['1529528960', 'TX - Willacy County'],
        ['2896390912', 'TX - Williamson County'],
        ['2081657984', 'TX - Wilson County'],
        ['2178456064', 'TX - Winkler County'],
        ['2342443008', 'TX - Wise County'],
        ['1671149056', 'TX - Wood County'],
        ['2071234944', 'TX - Yoakum County'],
        ['2368460032', 'TX - Young County'],
        ['2585875968', 'TX - Zapata County'],
        ['3360267008', 'TX - Zavala County'],
        ['6707758080', 'UT - Beaver County'],
        ['14880910336', 'UT - Box Elder County'],
        ['3016850944', 'UT - Cache County'],
        ['3829278976', 'UT - Carbon County'],
        ['1805168000', 'UT - Daggett County'],
        ['773832192', 'UT - Davis County'],
        ['8394008064', 'UT - Duchesne County'],
        ['11557340160', 'UT - Emery County'],
        ['13403499520', 'UT - Garfield County'],
        ['9509253120', 'UT - Grand County'],
        ['8538363904', 'UT - Iron County'],
        ['8785957888', 'UT - Juab County'],
        ['10334640128', 'UT - Kane County'],
        ['17022499840', 'UT - Millard County'],
        ['1577810048', 'UT - Morgan County'],
        ['1962669056', 'UT - Piute County'],
        ['2664514048', 'UT - Rich County'],
        ['1922500992', 'UT - Salt Lake County'],
        ['20253679616', 'UT - San Juan County'],
        ['4118476032', 'UT - Sanpete County'],
        ['4948371968', 'UT - Sevier County'],
        ['4847710208', 'UT - Summit County'],
        ['17978019840', 'UT - Tooele County'],
        ['11602350080', 'UT - Uintah County'],
        ['5188922880', 'UT - Utah County'],
        ['3044532992', 'UT - Wasatch County'],
        ['6284236800', 'UT - Washington County'],
        ['6373122048', 'UT - Wayne County'],
        ['1492050944', 'UT - Weber County'],
        ['1984772992', 'VT - Addison County'],
        ['1748190976', 'VT - Bennington County'],
        ['1680548992', 'VT - Caledonia County'],
        ['1389730944', 'VT - Chittenden County'],
        ['1718711040', 'VT - Essex County'],
        ['1641291008', 'VT - Franklin County'],
        ['211890592', 'VT - Grand Isle County'],
        ['1188278016', 'VT - Lamoille County'],
        ['1779406976', 'VT - Orange County'],
        ['1795555968', 'VT - Orleans County'],
        ['2408225024', 'VT - Rutland County'],
        ['1779926016', 'VT - Washington County'],
        ['2033931008', 'VT - Windham County'],
        ['2510569984', 'VT - Windsor County'],
        ['1164189056', 'VA - Accomack County'],
        ['1866599936', 'VA - Albemarle County'],
        ['38919728', 'VA - Alexandria city'],
        ['1153726976', 'VA - Alleghany County'],
        ['920142592', 'VA - Amelia County'],
        ['1227484032', 'VA - Amherst County'],
        ['863744576', 'VA - Appomattox County'],
        ['67273584', 'VA - Arlington County'],
        ['2504516096', 'VA - Augusta County'],
        ['1370513024', 'VA - Bath County'],
        ['1950315008', 'VA - Bedford County'],
        ['926503424', 'VA - Bland County'],
        ['1401707008', 'VA - Botetourt County'],
        ['33703512', 'VA - Bristol city'],
        ['1466381952', 'VA - Brunswick County'],
        ['1302148992', 'VA - Buchanan County'],
        ['1501304960', 'VA - Buckingham County'],
        ['17362240', 'VA - Buena Vista city'],
        ['1305009024', 'VA - Campbell County'],
        ['1366252032', 'VA - Caroline County'],
        ['1229441024', 'VA - Carroll County'],
        ['473494112', 'VA - Charles City County'],
        ['1230946048', 'VA - Charlotte County'],
        ['26517360', 'VA - Charlottesville city'],
        ['882669184', 'VA - Chesapeake city'],
        ['1096333952', 'VA - Chesterfield County'],
        ['456297600', 'VA - Clarke County'],
        ['19476230', 'VA - Colonial Heights city'],
        ['14163340', 'VA - Covington city'],
        ['853489600', 'VA - Craig County'],
        ['982210880', 'VA - Culpeper County'],
        ['770419584', 'VA - Cumberland County'],
        ['111198704', 'VA - Danville city'],
        ['856074880', 'VA - Dickenson County'],
        ['1304619008', 'VA - Dinwiddie County'],
        ['17854910', 'VA - Emporia city'],
        ['665944384', 'VA - Essex County'],
        ['16159470', 'VA - Fairfax city'],
        ['1012604032', 'VA - Fairfax County'],
        ['1676886016', 'VA - Fauquier County'],
        ['985283776', 'VA - Floyd County'],
        ['740750080', 'VA - Fluvanna County'],
        ['21252880', 'VA - Franklin city'],
        ['1788194944', 'VA - Franklin County'],
        ['1070950016', 'VA - Frederick County'],
        ['27039900', 'VA - Fredericksburg city'],
        ['21340430', 'VA - Galax city'],
        ['921469120', 'VA - Giles County'],
        ['564116928', 'VA - Gloucester County'],
        ['728861824', 'VA - Goochland County'],
        ['1145228032', 'VA - Grayson County'],
        ['404675808', 'VA - Greene County'],
        ['764632832', 'VA - Greensville County'],
        ['2118193024', 'VA - Halifax County'],
        ['133160096', 'VA - Hampton city'],
        ['1213502976', 'VA - Hanover County'],
        ['45112608', 'VA - Harrisonburg city'],
        ['605271872', 'VA - Henrico County'],
        ['990240768', 'VA - Henry County'],
        ['1075249024', 'VA - Highland County'],
        ['26620500', 'VA - Hopewell city'],
        ['817432000', 'VA - Isle of Wight County'],
        ['368909088', 'VA - James City County'],
        ['816203904', 'VA - King and Queen County'],
        ['465255712', 'VA - King George County'],
        ['709504576', 'VA - King William County'],
        ['345115808', 'VA - Lancaster County'],
        ['1127986944', 'VA - Lee County'],
        ['1335297024', 'VA - Loudoun County'],
        ['1285411968', 'VA - Louisa County'],
        ['1118054016', 'VA - Lunenburg County'],
        ['127239696', 'VA - Lynchburg city'],
        ['830565696', 'VA - Madison County'],
        ['25590860', 'VA - Manassas city'],
        ['6562394', 'VA - Manassas Park city'],
        ['28376620', 'VA - Martinsville city'],
        ['222555504', 'VA - Mathews County'],
        ['1619998976', 'VA - Mecklenburg County'],
        ['337492192', 'VA - Middlesex County'],
        ['1002361024', 'VA - Montgomery County'],
        ['1219510016', 'VA - Nelson County'],
        ['543196480', 'VA - New Kent County'],
        ['177967808', 'VA - Newport News city'],
        ['140171296', 'VA - Norfolk city'],
        ['548073024', 'VA - Northampton County'],
        ['495452192', 'VA - Northumberland County'],
        ['19375330', 'VA - Norton city'],
        ['814271680', 'VA - Nottoway County'],
        ['882624128', 'VA - Orange County'],
        ['805112704', 'VA - Page County'],
        ['1251212032', 'VA - Patrick County'],
        ['59393048', 'VA - Petersburg city'],
        ['2509544960', 'VA - Pittsylvania County'],
        ['39669840', 'VA - Poquoson city'],
        ['87159968', 'VA - Portsmouth city'],
        ['673969472', 'VA - Powhatan County'],
        ['906392384', 'VA - Prince Edward County'],
        ['686749184', 'VA - Prince George County'],
        ['871276096', 'VA - Prince William County'],
        ['828427584', 'VA - Pulaski County'],
        ['25567150', 'VA - Radford city'],
        ['689525120', 'VA - Rappahannock County'],
        ['154894704', 'VA - Richmond city'],
        ['495962816', 'VA - Richmond County'],
        ['110234200', 'VA - Roanoke city'],
        ['648838080', 'VA - Roanoke County'],
        ['1547668992', 'VA - Rockbridge County'],
        ['2199121920', 'VA - Rockingham County'],
        ['1227192960', 'VA - Russell County'],
        ['37390580', 'VA - Salem city'],
        ['1387016960', 'VA - Scott County'],
        ['1317723008', 'VA - Shenandoah County'],
        ['1167897984', 'VA - Smyth County'],
        ['1551777024', 'VA - Southampton County'],
        ['1039870976', 'VA - Spotsylvania County'],
        ['696591872', 'VA - Stafford County'],
        ['51735520', 'VA - Staunton city'],
        ['1036430016', 'VA - Suffolk city'],
        ['722475776', 'VA - Surry County'],
        ['1269664000', 'VA - Sussex County'],
        ['1343805056', 'VA - Tazewell County'],
        ['644948928', 'VA - Virginia Beach city'],
        ['552872320', 'VA - Warren County'],
        ['1452918016', 'VA - Washington County'],
        ['38950820', 'VA - Waynesboro city'],
        ['594077376', 'VA - Westmoreland County'],
        ['23366980', 'VA - Williamsburg city'],
        ['23912610', 'VA - Winchester city'],
        ['1044252992', 'VA - Wise County'],
        ['1196119040', 'VA - Wythe County'],
        ['271379392', 'VA - York County'],
        ['4985669120', 'WA - Adams County'],
        ['1647783936', 'WA - Asotin County'],
        ['4403960832', 'WA - Benton County'],
        ['7564125184', 'WA - Chelan County'],
        ['4502252032', 'WA - Clallam County'],
        ['1629112960', 'WA - Clark County'],
        ['2249739008', 'WA - Columbia County'],
        ['2952911104', 'WA - Cowlitz County'],
        ['4711873024', 'WA - Douglas County'],
        ['5706153984', 'WA - Ferry County'],
        ['3217208064', 'WA - Franklin County'],
        ['1840669056', 'WA - Garfield County'],
        ['6939907072', 'WA - Grant County'],
        ['4926225920', 'WA - Grays Harbor County'],
        ['539879680', 'WA - Island County'],
        ['4671562240', 'WA - Jefferson County'],
        ['5479291904', 'WA - King County'],
        ['1022892992', 'WA - Kitsap County'],
        ['5949903872', 'WA - Kittitas County'],
        ['4846679040', 'WA - Klickitat County'],
        ['6223228928', 'WA - Lewis County'],
        ['5984152064', 'WA - Lincoln County'],
        ['2484879104', 'WA - Mason County'],
        ['13644000256', 'WA - Okanogan County'],
        ['2415571968', 'WA - Pacific County'],
        ['3625955072', 'WA - Pend Oreille County'],
        ['4324004864', 'WA - Pierce County'],
        ['450437088', 'WA - San Juan County'],
        ['4483794944', 'WA - Skagit County'],
        ['4288184064', 'WA - Skamania County'],
        ['5406012928', 'WA - Snohomish County'],
        ['4568199168', 'WA - Spokane County'],
        ['6417380864', 'WA - Stevens County'],
        ['1869870976', 'WA - Thurston County'],
        ['682138816', 'WA - Wahkiakum County'],
        ['3289618944', 'WA - Walla Walla County'],
        ['5456734208', 'WA - Whatcom County'],
        ['5592015872', 'WA - Whitman County'],
        ['11125019648', 'WA - Yakima County'],
        ['883338816', 'WV - Barbour County'],
        ['831754368', 'WV - Berkeley County'],
        ['1298990976', 'WV - Boone County'],
        ['1322996992', 'WV - Braxton County'],
        ['231038800', 'WV - Brooke County'],
        ['727832320', 'WV - Cabell County'],
        ['723252288', 'WV - Calhoun County'],
        ['885522432', 'WV - Clay County'],
        ['828070912', 'WV - Doddridge County'],
        ['1713405952', 'WV - Fayette County'],
        ['876717504', 'WV - Gilmer County'],
        ['1236391040', 'WV - Grant County'],
        ['2640670976', 'WV - Greenbrier County'],
        ['1658237056', 'WV - Hampshire County'],
        ['213957200', 'WV - Hancock County'],
        ['1508182016', 'WV - Hardy County'],
        ['1077454976', 'WV - Harrison County'],
        ['1202654976', 'WV - Jackson County'],
        ['542951104', 'WV - Jefferson County'],
        ['2335099904', 'WV - Kanawha County'],
        ['996874816', 'WV - Lewis County'],
        ['1131923968', 'WV - Lincoln County'],
        ['1175174016', 'WV - Logan County'],
        ['799620928', 'WV - Marion County'],
        ['791062720', 'WV - Marshall County'],
        ['1115633024', 'WV - Mason County'],
        ['1381644032', 'WV - McDowell County'],
        ['1085186944', 'WV - Mercer County'],
        ['849075072', 'WV - Mineral County'],
        ['1095846016', 'WV - Mingo County'],
        ['932556608', 'WV - Monongalia County'],
        ['1224422016', 'WV - Monroe County'],
        ['593295424', 'WV - Morgan County'],
        ['1675266048', 'WV - Nicholas County'],
        ['274072992', 'WV - Ohio County'],
        ['1802759936', 'WV - Pendleton County'],
        ['336966304', 'WV - Pleasants County'],
        ['2435323904', 'WV - Pocahontas County'],
        ['1680396032', 'WV - Preston County'],
        ['895279232', 'WV - Putnam County'],
        ['1567851008', 'WV - Raleigh County'],
        ['2692761088', 'WV - Randolph County'],
        ['1170649984', 'WV - Ritchie County'],
        ['1252422016', 'WV - Roane County'],
        ['933586816', 'WV - Summers County'],
        ['447474912', 'WV - Taylor County'],
        ['1085004032', 'WV - Tucker County'],
        ['663797184', 'WV - Tyler County'],
        ['918506880', 'WV - Upshur County'],
        ['1310486016', 'WV - Wayne County'],
        ['1433475968', 'WV - Webster County'],
        ['927378432', 'WV - Wetzel County'],
        ['602195200', 'WV - Wirt County'],
        ['948607808', 'WV - Wood County'],
        ['1293577984', 'WV - Wyoming County'],
        ['1672214016', 'WI - Adams County'],
        ['2706628096', 'WI - Ashland County'],
        ['2234412032', 'WI - Barron County'],
        ['3827646976', 'WI - Bayfield County'],
        ['1371938048', 'WI - Brown County'],
        ['1739527040', 'WI - Buffalo County'],
        ['2128574976', 'WI - Burnett County'],
        ['824227392', 'WI - Calumet County'],
        ['2611673088', 'WI - Chippewa County'],
        ['3133406976', 'WI - Clark County'],
        ['1982711040', 'WI - Columbia County'],
        ['1478002048', 'WI - Crawford County'],
        ['3100836096', 'WI - Dane County'],
        ['2267857920', 'WI - Dodge County'],
        ['1248316032', 'WI - Door County'],
        ['3377698048', 'WI - Douglas County'],
        ['2201762048', 'WI - Dunn County'],
        ['1652369024', 'WI - Eau Claire County'],
        ['1264419968', 'WI - Florence County'],
        ['1863633024', 'WI - Fond du Lac County'],
        ['2626420992', 'WI - Forest County'],
        ['2970324992', 'WI - Grant County'],
        ['1512440960', 'WI - Green County'],
        ['905037504', 'WI - Green Lake County'],
        ['1975073024', 'WI - Iowa County'],
        ['1963661056', 'WI - Iron County'],
        ['2558181888', 'WI - Jackson County'],
        ['1441260032', 'WI - Jefferson County'],
        ['1986327040', 'WI - Juneau County'],
        ['704451968', 'WI - Kenosha County'],
        ['887118272', 'WI - Kewaunee County'],
        ['1169863040', 'WI - La Crosse County'],
        ['1640984960', 'WI - Lafayette County'],
        ['2254947072', 'WI - Langlade County'],
        ['2276529920', 'WI - Lincoln County'],
        ['1525715968', 'WI - Manitowoc County'],
        ['4001487872', 'WI - Marathon County'],
        ['3624293120', 'WI - Marinette County'],
        ['1180003968', 'WI - Marquette County'],
        ['926201088', 'WI - Menominee County'],
        ['625228928', 'WI - Milwaukee County'],
        ['2332997888', 'WI - Monroe County'],
        ['2584775936', 'WI - Oconto County'],
        ['2882578944', 'WI - Oneida County'],
        ['1651177984', 'WI - Outagamie County'],
        ['603666624', 'WI - Ozaukee County'],
        ['600833984', 'WI - Pepin County'],
        ['1485998976', 'WI - Pierce County'],
        ['2367151104', 'WI - Polk County'],
        ['2073747968', 'WI - Portage County'],
        ['3248817920', 'WI - Price County'],
        ['861173312', 'WI - Racine County'],
        ['1518124032', 'WI - Richland County'],
        ['1859980032', 'WI - Rock County'],
        ['2366173952', 'WI - Rusk County'],
        ['2152026112', 'WI - Sauk County'],
        ['3256402944', 'WI - Sawyer County'],
        ['2313007104', 'WI - Shawano County'],
        ['1324171008', 'WI - Sheboygan County'],
        ['1870823936', 'WI - St. Croix County'],
        ['2524918016', 'WI - Taylor County'],
        ['1898370048', 'WI - Trempealeau County'],
        ['2050179968', 'WI - Vernon County'],
        ['2218595072', 'WI - Vilas County'],
        ['1437771008', 'WI - Walworth County'],
        ['2064513024', 'WI - Washburn County'],
        ['1115515008', 'WI - Washington County'],
        ['1423389056', 'WI - Waukesha County'],
        ['1936567040', 'WI - Waupaca County'],
        ['1621730048', 'WI - Waushara County'],
        ['1125315968', 'WI - Winnebago County'],
        ['2054162048', 'WI - Wood County'],
        ['11069190144', 'WY - Albany County'],
        ['8125044224', 'WY - Big Horn County'],
        ['12438960128', 'WY - Campbell County'],
        ['20454629376', 'WY - Carbon County'],
        ['11020099584', 'WY - Converse County'],
        ['7392882176', 'WY - Crook County'],
        ['23785969664', 'WY - Fremont County'],
        ['5763736064', 'WY - Goshen County'],
        ['5190573056', 'WY - Hot Springs County'],
        ['10759209984', 'WY - Johnson County'],
        ['6956478976', 'WY - Laramie County'],
        ['10557129728', 'WY - Lincoln County'],
        ['13831449600', 'WY - Natrona County'],
        ['6801403904', 'WY - Niobrara County'],
        ['17979899904', 'WY - Park County'],
        ['5398073856', 'WY - Platte County'],
        ['6537113088', 'WY - Sheridan County'],
        ['12656069632', 'WY - Sublette County'],
        ['27004899328', 'WY - Sweetwater County'],
        ['10347979776', 'WY - Teton County'],
        ['5390450176', 'WY - Uinta County'],
        ['5797814784', 'WY - Washakie County'],
        ['6211020800', 'WY - Weston County']
    ]


    var hucStore = [
        ['5010002', 'Allegheny'],
        ['3070101', 'Altamaha'],
        ['1040001', 'Androscoggin'],
        ['3130001', 'Apalachicola'],
        ['11060003', 'Arkansas - Keystone'],
        ['10120202', 'Belle Fourche'],
        ['8060201', 'Big Black - Homochitto'],
        ['10270201', 'Big Blue'],
        ['10080015', 'Big Horn'],
        ['10170202', 'Big Sioux'],
        ['16040201', 'Black Rock Desert'],
        ['3160101', 'Black Warrior - Tombigbee'],
        ['8050001', 'Boeuf-Tensas'],
        ['12050005', 'Brazos Headwaters'],
        ['8080203', 'Calcasieu-Mermentau'],
        ['3030002', 'Cape Fear'],
        ['18060000', 'Central California Coastal'],
        ['16060007', 'Central Nevada Desert Basins'],
        ['7050002', 'Chippewa'],
        ['14010001', 'Colorado Headwaters'],
        ['1100005', 'Connecticut Coastal'],
        ['3150101', 'Coosa-Tallapoosa'],
        ['7100001', 'Des Moines'],
        ['4120104', 'Eastern Lake Erie'],
        ['10220001', 'Elkhorn'],
        ['16030005', 'Escalante Desert-Sevier Lake'],
        ['3140301', 'Escambia'],
        ['10040104', 'Fort Peck Lake'],
        ['10140103', 'Fort Randall Reservoir'],
        ['10280102', 'Grand'],
        ['5080001', 'Great Miami'],
        ['16020309', 'Great Salt Lake'],
        ['5110005', 'Green'],
        ['12100201', 'Guadalupe'],
        ['14020004', 'Gunnison'],
        ['5070102', 'Guyandotte'],
        ['7080201', 'Iowa'],
        ['10160001', 'James'],
        ['5050008', 'Kanawha'],
        ['7140201', 'Kaskaskia'],
        ['1030001', 'Kennebec'],
        ['3090101', 'Kissimmee'],
        ['18010200', 'Klamath'],
        ['17010104', 'Kootenai'],
        ['4080300', 'Lake Huron'],
        ['8070202', 'Lake Maurepas'],
        ['10130101', 'Lake Oahe'],
        ['8090201', 'Lake Pontchartrain'],
        ['10110101', 'Lake Sakakawea'],
        ['4020300', 'Lake Superior'],
        ['5100101', 'Licking'],
        ['12070201', 'Little'],
        ['15020018', 'Little Colorado'],
        ['10210008', 'Loup'],
        ['16010201', 'Lower Bear'],
        ['2080103', 'Lower Chesapeake'],
        ['11050001', 'Lower Cimarron'],
        ['15030101', 'Lower Colorado'],
        ['15010011', 'Lower Colorado-Lake Mead'],
        ['17080004', 'Lower Columbia'],
        ['15070102', 'Lower Gila-Agua Fria'],
        ['14060003', 'Lower Green'],
        ['2030101', 'Lower Hudson'],
        ['7130001', 'Lower Illinois'],
        ['8010100', 'Lower Mississippi-Memphis'],
        ['10300101', 'Lower Missouri-Blackwater'],
        ['5140101', 'Lower Ohio-Salt'],
        ['13070007', 'Lower Pecos'],
        ['10200201', 'Lower Platte'],
        ['9020311', 'Lower Red'],
        ['13090001', 'Lower Rio Grande'],
        ['14080203', 'Lower San Juan'],
        ['17060108', 'Lower Snake'],
        ['6040006', 'Lower Tennessee'],
        ['10100004', 'Lower Yellowstone'],
        ['1050001', 'Maine Coastal'],
        ['10030203', 'Marias'],
        ['1090001', 'Massachusetts-Rhode Island Coastal.'],
        ['1070001', 'Merrimack'],
        ['11030002', 'Middle Arkansas'],
        ['12060101', 'Middle Brazos-Clear Fork'],
        ['11090104', 'Middle Candaian'],
        ['12090107', 'Middle Colorado-Concho'],
        ['17070106', 'Middle Columbia'],
        ['15050100', 'Middle Gila'],
        ['5090202', 'Middle Ohio-Little Miami'],
        ['17050200', 'Middle Snake-Powder'],
        ['6030003', 'Middle Tennessee-Elk'],
        ['6020004', 'Middle Tennessee-Hiwassee'],
        ['10050011', 'Milk'],
        ['7020002', 'Minnesota'],
        ['7010101', 'Mississippi Headwaters'],
        ['10020006', 'Missouri Headwaters'],
        ['10230003', 'Missouri-Little Sioux'],
        ['10240002', 'Missouri-Nishnabotna'],
        ['10060004', 'Missouri-Poplar'],
        ['18090100', 'Mono-Owens Lakes'],
        ['5020005', 'Monongahela'],
        ['5040001', 'Muskingum'],
        ['12020001', 'Neches'],
        ['11070201', 'Neosho'],
        ['10150006', 'Niobrara'],
        ['11120302', 'North Fork Red'],
        ['18080000', 'North Lahontan'],
        ['10180007', 'North Platte'],
        ['4060106', 'Northeastern Lake Michigan'],
        ['4030107', 'Northwestern Lake Michigan'],
        ['4010101', 'Northwestern Lake Superior'],
        ['4070001', 'Nothwestern Lake Huron'],
        ['12110102', 'Nueces'],
        ['3120002', 'Ochlockonee'],
        ['17120002', 'Oregon Closed Basins'],
        ['10290108', 'Osage'],
        ['3020102', 'Pamlico'],
        ['3170001', 'Pascagoula'],
        ['3180001', 'Pearl'],
        ['1020002', 'Penobscot'],
        ['2070004', 'Potomac'],
        ['10090209', 'Powder'],
        ['17110002', 'Puget Sound'],
        ['9030009', 'Rainy'],
        ['11140103', 'Red-Little'],
        ['10250007', 'Republican'],
        ['2010007', 'Richelieu'],
        ['13050001', 'Rio Grande Closed Basins'],
        ['13010003', 'Rio Grande Headwaters'],
        ['13030101', 'Rio Grande-Caballo'],
        ['13080001', 'Rio Grande-Falcon'],
        ['13040100', 'Rio Grande-Fort Quitman'],
        ['15080101', 'Rio Sonoyta'],
        ['3010101', 'Roanoke'],
        ['11110103', 'Robert S. Kerr Reservoir'],
        ['7090001', 'Rock'],
        ['12010001', 'Sabine'],
        ['1060001', 'Saco'],
        ['18050002', 'San Francisco Bay'],
        ['12040101', 'San Jacinto'],
        ['18040012', 'San Joaquin'],
        ['3050101', 'Santee'],
        ['10010001', 'Saskatchewan'],
        ['3060101', 'Savannah'],
        ['5060001', 'Scioto'],
        ['10260012', 'Smoky Hill'],
        ['9010001', 'Souris'],
        ['10190016', 'South Platte'],
        ['4050006', 'Southeastern Lake Michigan'],
        ['4140102', 'Southeastern Lake Ontario'],
        ['4110003', 'Southern Lake Erie'],
        ['18100100', 'Southern Mojave'],
        ['4040003', 'Southwestern Lake Michigan'],
        ['4130001', 'Southwestern Lake Ontario'],
        ['4090001', 'St. Clair-Detroit'],
        ['7030003', 'St. Croix'],
        ['8020202', 'St. Francis'],
        ['1110000', 'St. Francois'],
        ['1010001', 'St. John'],
        ['3080103', 'St. Johns'],
        ['4150301', 'St. Lawrence'],
        ['3110202', 'Suwannee'],
        ['3100208', 'Tampa Bay'],
        ['16050104', 'Truckee'],
        ['18030010', 'Tulare-Buena Vista Lakes'],
        ['11020001', 'Upper Arkansas'],
        ['11100102', 'Upper Beaver'],
        ['11080001', 'Upper Canadian'],
        ['2060002', 'Upper Chesapeake'],
        ['11040005', 'Upper Cimarron'],
        ['12080001', 'Upper Colorado'],
        ['14070002', 'Upper Colorado-Dirty Devil'],
        ['14030001', 'Upper Colorado-Dolores'],
        ['17020008', 'Upper Columbia'],
        ['1080101', 'Upper Connecticut'],
        ['5130102', 'Upper Cumberland'],
        ['2040101', 'Upper Delaware'],
        ['15040004', 'Upper Gila'],
        ['14040101', 'Upper Green'],
        ['2020001', 'Upper Hudson'],
        ['7120006', 'Upper Illinois'],
        ['7040007', 'Upper Mississippi-Black-Root'],
        ['7060001', 'Upper Mississippi-Maquoketa-Plum'],
        ['7110001', 'Upper Mississippi-Salt'],
        ['5030102', 'Upper Ohio-Beaver'],
        ['8040101', 'Upper Ouachita'],
        ['13060001', 'Upper Pecos'],
        ['3040101', 'Upper Pee Dee'],
        ['13020101', 'Upper Rio Grande'],
        ['18020000', 'Upper Sacramento'],
        ['17040202', 'Upper Snake'],
        ['2050101', 'Upper Susquehanna'],
        ['6010205', 'Upper Tennessee'],
        ['12030103', 'Upper Trinity'],
        ['11010007', 'Upper White'],
        ['10070007', 'Upper Yellowstone'],
        ['18070102', 'Ventura-San Gabriel Coastal'],
        ['15060201', 'Verde'],
        ['5120106', 'Wabash'],
        ['17100100', 'Washington Coastal'],
        ['11130302', 'Washita'],
        ['4100001', 'Western Lake Erie'],
        ['14050004', 'White-Yampa'],
        ['17090012', 'Willamette'],
        ['7070001', 'Wisconsin'],
        ['17030000', 'Yakima'],
        ['8030204', 'Yazoo']
    ]



    var divStore = [
        ['10002', 'AL - APPALACHIAN MOUNTAIN'],
        ['10007', 'AL - COASTAL PLAIN'],
        ['10004', 'AL - EASTERN VALLEY'],
        ['10008', 'AL - GULF'],
        ['10001', 'AL - NORTHERN VALLEY'],
        ['10005', 'AL - PIEDMONT PLATEAU'],
        ['10006', 'AL - PRAIRIE'],
        ['10003', 'AL - UPPER PLAINS'],
        ['30005', 'AR - CENTRAL'],
        ['30006', 'AR - EAST CENTRAL'],
        ['30002', 'AR - NORTH CENTRAL'],
        ['30003', 'AR - NORTHEAST'],
        ['30001', 'AR - NORTHWEST'],
        ['30008', 'AR - SOUTH CENTRAL'],
        ['30009', 'AR - SOUTHEAST'],
        ['30007', 'AR - SOUTHWEST'],
        ['30004', 'AR - WEST CENTRAL'],
        ['20004', 'AZ - EAST CENTRAL'],
        ['20003', 'AZ - NORTH CENTRAL'],
        ['20002', 'AZ - NORTHEAST'],
        ['20001', 'AZ - NORTHWEST'],
        ['20006', 'AZ - SOUTH CENTRAL'],
        ['20007', 'AZ - SOUTHEAST'],
        ['20005', 'AZ - SOUTHWEST'],
        ['40004', 'CA - CENTRAL COAST DRNG.'],
        ['40001', 'CA - NORTH COAST DRNG.'],
        ['40003', 'CA - NORTHEAST INTER. BASINS'],
        ['40002', 'CA - SACRAMENTO DRNG.'],
        ['40005', 'CA - SAN JOAQUIN DRNG.'],
        ['40006', 'CA - SOUTH COAST DRNG.'],
        ['40007', 'CA - SOUTHEAST DESERT BASINS'],
        ['50001', 'CO - AR DRAINAGE BASIN'],
        ['50002', 'CO - CO DRAINAGE BASIN'],
        ['50003', 'CO - KS DRAINAGE BASIN'],
        ['50004', 'CO - PLATTE DRAINAGE BASIN'],
        ['50005', 'CO - RIO GRANDE DRNG. BASIN'],
        ['60002', 'CT - CENTRAL'],
        ['60003', 'CT - COASTAL'],
        ['60001', 'CT - NORTHWEST'],
        ['70001', 'DE - NORTHERN'],
        ['70002', 'DE - SOUTHERN'],
        ['80005', 'FL - EVERGLADES & SW COAST'],
        ['80006', 'FL - LOWER EAST COAST'],
        ['80002', 'FL - NORTH'],
        ['80003', 'FL - NORTH CENTRAL'],
        ['80001', 'FL - NORTHWEST'],
        ['80004', 'FL - SOUTH CENTRAL'],
        ['90005', 'GA - CENTRAL'],
        ['90006', 'GA - EAST CENTRAL'],
        ['90002', 'GA - NORTH CENTRAL'],
        ['90003', 'GA - NORTHEAST'],
        ['90001', 'GA - NORTHWEST'],
        ['90008', 'GA - SOUTH CENTRAL'],
        ['90009', 'GA - SOUTHEAST'],
        ['90007', 'GA - SOUTHWEST'],
        ['90004', 'GA - WEST CENTRAL'],
        ['130005', 'IA - CENTRAL'],
        ['130006', 'IA - EAST CENTRAL'],
        ['130002', 'IA - NORTH CENTRAL'],
        ['130003', 'IA - NORTHEAST'],
        ['130001', 'IA - NORTHWEST'],
        ['130008', 'IA - SOUTH CENTRAL'],
        ['130009', 'IA - SOUTHEAST'],
        ['130007', 'IA - SOUTHWEST'],
        ['130004', 'IA - WEST CENTRAL'],
        ['100004', 'ID - CENTRAL MOUNTAINS'],
        ['100007', 'ID - CENTRAL PLAINS'],
        ['100010', 'ID - EASTERN HIGHLANDS'],
        ['100003', 'ID - NORTH CENTRAL CANYONS'],
        ['100002', 'ID - NORTH CENTRAL PRAIRIES'],
        ['100008', 'ID - NORTHEASTERN VALLEYS'],
        ['100001', 'ID - PANHANDLE'],
        ['100006', 'ID - SOUTHWESTERN HIGHLANDS'],
        ['100005', 'ID - SOUTHWESTERN VALLEYS'],
        ['100009', 'ID - UPPER SNAKE RIVER PLAINS'],
        ['110004', 'IL - CENTRAL'],
        ['110005', 'IL - EAST'],
        ['110007', 'IL - EAST SOUTHEAST'],
        ['110002', 'IL - NORTHEAST'],
        ['110001', 'IL - NORTHWEST'],
        ['110009', 'IL - SOUTHEAST'],
        ['110008', 'IL - SOUTHWEST'],
        ['110003', 'IL - WEST'],
        ['110006', 'IL - WEST SOUTHWEST'],
        ['120005', 'IN - CENTRAL'],
        ['120006', 'IN - EAST CENTRAL'],
        ['120002', 'IN - NORTH CENTRAL'],
        ['120003', 'IN - NORTHEAST'],
        ['120001', 'IN - NORTHWEST'],
        ['120008', 'IN - SOUTH CENTRAL'],
        ['120009', 'IN - SOUTHEAST'],
        ['120007', 'IN - SOUTHWEST'],
        ['120004', 'IN - WEST CENTRAL'],
        ['140005', 'KS - CENTRAL'],
        ['140006', 'KS - EAST CENTRAL'],
        ['140002', 'KS - NORTH CENTRAL'],
        ['140003', 'KS - NORTHEAST'],
        ['140001', 'KS - NORTHWEST'],
        ['140008', 'KS - SOUTH CENTRAL'],
        ['140009', 'KS - SOUTHEAST'],
        ['140007', 'KS - SOUTHWEST'],
        ['140004', 'KS - WEST CENTRAL'],
        ['150003', 'KY - BLUE GRASS'],
        ['150002', 'KY - CENTRAL'],
        ['150004', 'KY - EASTERN'],
        ['150001', 'KY - WESTERN'],
        ['160005', 'LA - CENTRAL'],
        ['160006', 'LA - EAST CENTRAL'],
        ['160002', 'LA - NORTH CENTRAL'],
        ['160003', 'LA - NORTHEAST'],
        ['160001', 'LA - NORTHWEST'],
        ['160008', 'LA - SOUTH CENTRAL'],
        ['160009', 'LA - SOUTHEAST'],
        ['160007', 'LA - SOUTHWEST'],
        ['160004', 'LA - WEST CENTRAL'],
        ['190002', 'MA - CENTRAL'],
        ['190003', 'MA - COASTAL'],
        ['190001', 'MA - WESTERN'],
        ['180008', 'MD - ALLEGHENY PLATEAU'],
        ['180007', 'MD - APPALACHIAN MOUNTAIN'],
        ['180002', 'MD - CENTRAL EASTERN SHORE'],
        ['180003', 'MD - LOWER SOUTHERN'],
        ['180005', 'MD - NORTHEASTERN SHORE'],
        ['180006', 'MD - NORTHERN CENTRAL'],
        ['180001', 'MD - SOUTHEASTERN SHORE'],
        ['180004', 'MD - UPPER SOUTHERN'],
        ['170003', 'ME - COASTAL'],
        ['170001', 'ME - NORTHERN'],
        ['170002', 'ME - SOUTHERN INTERIOR'],
        ['200006', 'MI - CENTRAL LOWER'],
        ['200007', 'MI - EAST CENTRAL LOWER'],
        ['200002', 'MI - EAST UPPER'],
        ['200004', 'MI - NORTHEAST LOWER'],
        ['200003', 'MI - NORTHWEST LOWER'],
        ['200009', 'MI - SOUTH CENTRAL LOWER'],
        ['200010', 'MI - SOUTHEAST LOWER'],
        ['200008', 'MI - SOUTHWEST LOWER'],
        ['200005', 'MI - WEST CENTRAL LOWER'],
        ['200001', 'MI - WEST UPPER'],
        ['210005', 'MN - CENTRAL'],
        ['210006', 'MN - EAST CENTRAL'],
        ['210002', 'MN - NORTH CENTRAL'],
        ['210003', 'MN - NORTHEAST'],
        ['210001', 'MN - NORTHWEST'],
        ['210008', 'MN - SOUTH CENTRAL'],
        ['210009', 'MN - SOUTHEAST'],
        ['210007', 'MN - SOUTHWEST'],
        ['210004', 'MN - WEST CENTRAL'],
        ['230006', 'MO - BOOTHEEL'],
        ['230005', 'MO - EAST OZARKS'],
        ['230002', 'MO - NORTHEAST PRAIRIE'],
        ['230001', 'MO - NORTHWEST PRAIRIE'],
        ['230003', 'MO - WEST CENTRAL PLAINS'],
        ['230004', 'MO - WEST OZARKS'],
        ['220005', 'MS - CENTRAL'],
        ['220010', 'MS - COASTAL'],
        ['220006', 'MS - EAST CENTRAL'],
        ['220004', 'MS - LOWER DELTA'],
        ['220002', 'MS - NORTH CENTRAL'],
        ['220003', 'MS - NORTHEAST'],
        ['220008', 'MS - SOUTH CENTRAL'],
        ['220009', 'MS - SOUTHEAST'],
        ['220007', 'MS - SOUTHWEST'],
        ['220001', 'MS - UPPER DELTA'],
        ['240004', 'MT - CENTRAL'],
        ['240003', 'MT - NORTH CENTRAL'],
        ['240006', 'MT - NORTHEASTERN'],
        ['240005', 'MT - SOUTH CENTRAL'],
        ['240007', 'MT - SOUTHEASTERN'],
        ['240002', 'MT - SOUTHWESTERN'],
        ['240001', 'MT - WESTERN'],
        ['310007', 'NC - CENTRAL COASTAL PLAIN'],
        ['310004', 'NC - CENTRAL PIEDMONT'],
        ['310008', 'NC - NORTHERN COASTAL PLAIN'],
        ['310002', 'NC - NORTHERN MOUNTAINS'],
        ['310003', 'NC - NORTHERN PIEDMONT'],
        ['310006', 'NC - SOUTHERN COASTAL PLAIN'],
        ['310001', 'NC - SOUTHERN MOUNTAINS'],
        ['310005', 'NC - SOUTHERN PIEDMONT'],
        ['320005', 'ND - CENTRAL'],
        ['320006', 'ND - EAST CENTRAL'],
        ['320002', 'ND - NORTH CENTRAL'],
        ['320003', 'ND - NORTHEAST'],
        ['320001', 'ND - NORTHWEST'],
        ['320008', 'ND - SOUTH CENTRAL'],
        ['320009', 'ND - SOUTHEAST'],
        ['320007', 'ND - SOUTHWEST'],
        ['320004', 'ND - WEST CENTRAL'],
        ['250005', 'NE - CENTRAL'],
        ['250006', 'NE - EAST CENTRAL'],
        ['250002', 'NE - NORTH CENTRAL'],
        ['250003', 'NE - NORTHEAST'],
        ['250001', 'NE - PANHANDLE'],
        ['250008', 'NE - SOUTH CENTRAL'],
        ['250009', 'NE - SOUTHEAST'],
        ['250007', 'NE - SOUTHWEST'],
        ['270001', 'NH - NORTHERN'],
        ['270002', 'NH - SOUTHERN'],
        ['280003', 'NJ - COASTAL'],
        ['280001', 'NJ - NORTHERN'],
        ['280002', 'NJ - SOUTHERN'],
        ['290006', 'NM - CENTRAL HIGHLANDS'],
        ['290005', 'NM - CENTRAL VALLEY'],
        ['290003', 'NM - NORTHEASTERN PLAINS'],
        ['290002', 'NM - NORTHERN MOUNTAINS'],
        ['290001', 'NM - NORTHWESTERN PLATEAU'],
        ['290007', 'NM - SOUTHEASTERN PLAINS'],
        ['290008', 'NM - SOUTHERN DESERT'],
        ['290004', 'NM - SOUTHWESTERN MOUNTAINS'],
        ['260004', 'NV - EXTREME SOUTHERN'],
        ['260002', 'NV - NORTHEASTERN'],
        ['260001', 'NV - NORTHWESTERN'],
        ['260003', 'NV - SOUTH CENTRAL'],
        ['300010', 'NY - CENTRAL LAKES'],
        ['300007', 'NY - CHAMPLAIN VALLEY'],
        ['300004', 'NY - COASTAL'],
        ['300002', 'NY - EASTERN PLATEAU'],
        ['300009', 'NY - GREAT LAKES'],
        ['300005', 'NY - HUDSON VALLEY'],
        ['300006', 'NY - MOHAWK VALLEY'],
        ['300003', 'NY - NORTHERN PLATEAU'],
        ['300008', 'NY - ST. LAWRENCE VALLEY'],
        ['300001', 'NY - WESTERN PLATEAU'],
        ['330005', 'OH - CENTRAL'],
        ['330006', 'OH - CENTRAL HILLS'],
        ['330002', 'OH - NORTH CENTRAL'],
        ['330003', 'OH - NORTHEAST'],
        ['330007', 'OH - NORTHEAST HILLS'],
        ['330001', 'OH - NORTHWEST'],
        ['330009', 'OH - SOUTH CENTRAL'],
        ['330010', 'OH - SOUTHEAST'],
        ['330008', 'OH - SOUTHWEST'],
        ['330004', 'OH - WEST CENTRAL'],
        ['340005', 'OK - CENTRAL'],
        ['340006', 'OK - EAST CENTRAL'],
        ['340002', 'OK - NORTH CENTRAL'],
        ['340003', 'OK - NORTHEAST'],
        ['340001', 'OK - PANHANDLE'],
        ['340008', 'OK - SOUTH CENTRAL'],
        ['340009', 'OK - SOUTHEAST'],
        ['340007', 'OK - SOUTHWEST'],
        ['340004', 'OK - WEST CENTRAL'],
        ['350001', 'OR - COASTAL AREA'],
        ['350005', 'OR - HIGH PLATEAU'],
        ['350006', 'OR - NORTH CENTRAL'],
        ['350008', 'OR - NORTHEAST'],
        ['350004', 'OR - NORTHERN CASCADES'],
        ['350007', 'OR - SOUTH CENTRAL'],
        ['350009', 'OR - SOUTHEAST'],
        ['350003', 'OR - SOUTHWESTERN VALLEYS'],
        ['350002', 'OR - WILLAMETTE VALLEY'],
        ['360007', 'PA - CENTRAL MOUNTAINS'],
        ['360002', 'PA - EAST CENTRAL MOUNTAINS'],
        ['360004', 'PA - LOWER SUSQUEHANNA'],
        ['360005', 'PA - MIDDLE SUSQUEHANNA'],
        ['360010', 'PA - NORTHWEST PLATEAU'],
        ['360001', 'PA - POCONO MOUNTAINS'],
        ['360008', 'PA - SOUTH CENTRAL MOUNTAINS'],
        ['360003', 'PA - SOUTHEASTERN PIEDMONT'],
        ['360009', 'PA - SOUTHWEST PLATEAU'],
        ['360006', 'PA - UPPER SUSQUEHANNA'],
        ['370001', 'RI - ALL'],
        ['380006', 'SC - CENTRAL'],
        ['380001', 'SC - MOUNTAIN'],
        ['380003', 'SC - NORTH CENTRAL'],
        ['380004', 'SC - NORTHEAST'],
        ['380002', 'SC - NORTHWEST'],
        ['380007', 'SC - SOUTHERN'],
        ['380005', 'SC - WEST CENTRAL'],
        ['390004', 'SD - BLACK HILLS'],
        ['390006', 'SD - CENTRAL'],
        ['390007', 'SD - EAST CENTRAL'],
        ['390002', 'SD - NORTH CENTRAL'],
        ['390003', 'SD - NORTHEAST'],
        ['390001', 'SD - NORTHWEST'],
        ['390008', 'SD - SOUTH CENTRAL'],
        ['390009', 'SD - SOUTHEAST'],
        ['390005', 'SD - SOUTHWEST'],
        ['400002', 'TN - CUMBERLAND PLATEAU'],
        ['400001', 'TN - EASTERN'],
        ['400003', 'TN - MIDDLE'],
        ['400004', 'TN - WESTERN'],
        ['410004', 'TX - EAST TEXAS'],
        ['410006', 'TX - EDWARDS PLATEAU'],
        ['410001', 'TX - HIGH PLAINS'],
        ['410002', 'TX - LOW ROLLING PLAINS'],
        ['410003', 'TX - NORTH CENTRAL'],
        ['410007', 'TX - SOUTH CENTRAL'],
        ['410009', 'TX - SOUTHERN'],
        ['410005', 'TX - TRANS PECOS'],
        ['410008', 'TX - UPPER COAST'],
        ['420002', 'UT - DIXIE'],
        ['420003', 'UT - NORTH CENTRAL'],
        ['420005', 'UT - NORTHERN MOUNTAINS'],
        ['420004', 'UT - SOUTH CENTRAL'],
        ['420007', 'UT - SOUTHEAST'],
        ['420006', 'UT - UINTA BASIN'],
        ['420001', 'UT - WESTERN'],
        ['440005', 'VA - CENTRAL MOUNTAIN'],
        ['440002', 'VA - EASTERN PIEDMONT'],
        ['440004', 'VA - NORTHERN'],
        ['440006', 'VA - SOUTHWESTERN MOUNTAIN'],
        ['440001', 'VA - TIDEWATER'],
        ['440003', 'VA - WESTERN PIEDMONT'],
        ['430001', 'VT - NORTHEASTERN'],
        ['430003', 'VT - SOUTHEASTERN'],
        ['430002', 'VT - WESTERN'],
        ['450005', 'WA - CASCADE MOUNTAINS WEST'],
        ['450008', 'WA - CENTRAL BASIN'],
        ['450004', 'WA - E OLYMPIC CASCADE FOOTHLS'],
        ['450006', 'WA - EAST SLOPE CASCADES'],
        ['450002', 'WA - NE OLYMPIC SAN JUAN'],
        ['450009', 'WA - NORTHEASTERN'],
        ['450007', 'WA - OKANOGAN BIG BEND'],
        ['450010', 'WA - PALOUSE BLUE MOUNTAINS'],
        ['450003', 'WA - PUGET SOUND LOWLANDS'],
        ['450001', 'WA - WEST OLYMPIC COASTAL'],
        ['470005', 'WI - CENTRAL'],
        ['470006', 'WI - EAST CENTRAL'],
        ['470002', 'WI - NORTH CENTRAL'],
        ['470003', 'WI - NORTHEAST'],
        ['470001', 'WI - NORTHWEST'],
        ['470008', 'WI - SOUTH CENTRAL'],
        ['470009', 'WI - SOUTHEAST'],
        ['470007', 'WI - SOUTHWEST'],
        ['470004', 'WI - WEST CENTRAL'],
        ['460004', 'WV - CENTRAL'],
        ['460002', 'WV - NORTH CENTRAL'],
        ['460006', 'WV - NORTHEASTERN'],
        ['460001', 'WV - NORTHWESTERN'],
        ['460005', 'WV - SOUTHERN'],
        ['460003', 'WV - SOUTHWESTERN'],
        ['480006', 'WY - BELLE FOURCHE DRAINAGE'],
        ['480004', 'WY - BIG HORN'],
        ['480007', 'WY - CHEYENNE & NIOBRARA DRNG.'],
        ['480003', 'WY - GREEN AND BEAR DRAINAGE'],
        ['480008', 'WY - LOWER PLATTE'],
        ['480005', 'WY - POWDR'],
        ['480002', 'WY - SNAKE DRAINAGE'],
        ['480010', 'WY - UPPER PLATTE'],
        ['480009', 'WY - WIND RIVER'],
        ['480001', 'WY - YELLOWSTONE DRAINAGE']
    ]



    var psaStore = [
        ['11065590', 'EA - E MN'],
        ['12075960', 'EA - ME NH COAST'],
        ['15805920', 'EA - Mid Atlantic'],
        ['19404060', 'EA - N WI WRN UP OF MI'],
        ['7001711', 'EA - NE WI ERN UP'],
        ['9518475', 'EA - NRN LP OF MI'],
        ['32424260', 'EA - NRN PA WRN NY'],
        ['13879060', 'EA - NW IN SRN LP OF MI'],
        ['19823350', 'EA - NW MN'],
        ['24218230', 'EA - SE MN Central WI'],
        ['15721250', 'EA - SE OH / SW PA WV'],
        ['17346800', 'EA - SOUTHERN MO'],
        ['13996330', 'EA - SRN IL IN'],
        ['15610400', 'EA - SRN New England'],
        ['41851460', 'EA - SW MN / NRN IA'],
        ['8945010', 'EA - SW MO'],
        ['10874200', 'EA - Upstate NY'],
        ['20585150', 'EA - WT WRN ME NH'],
        ['16335590', 'EA - WV'],
        ['2525018', 'EB - Arizona Strip'],
        ['2797856', 'EB - Bookcliffs'],
        ['7186930', 'EB - Central Mountains'],
        ['8515108', 'EB - East Central Idaho Mountains'],
        ['1279536', 'EB - Mojave Desert'],
        ['17431810', 'EB - Northwest Utah'],
        ['9142210', 'EB - South Central Idaho'],
        ['15228550', 'EB - Southeast'],
        ['5923675', 'EB - Southern Mountains'],
        ['3098278', 'EB - Southwest'],
        ['8973356', 'EB - Southwest Idaho and Lower Snake River Plain'],
        ['0', 'EB - Uinta Mountains'],
        ['2407598', 'EB - Uintah Basin'],
        ['4540549', 'EB - Upper Snake River Plain'],
        ['7376647', 'EB - West Central Idaho Mountains'],
        ['6545025', 'EB - Western Wyoming and Eastern Idaho Mountains'],
        ['125256', 'NO - Bay Area'],
        ['3066039', 'NO - Bay Area'],
        ['5022585', 'NO - Far Eastside'],
        ['5408334', 'NO - Mid Coast to Mendocino'],
        ['4670105', 'NO - NE California'],
        ['1594721', 'NO - North Coast'],
        ['6628483', 'NO - Northern Sierras'],
        ['6584630', 'NO - Northwestern Mtn'],
        ['3995852', 'NO - Sac Valley/Foothills'],
        ['6405418', 'NR - Big Hole Montana'],
        ['24345310', 'NR - Central Montana'],
        ['24437940', 'NR - Eastern North Dakota'],
        ['3734291', 'NR - Glacier National Park / Wildernesses'],
        ['9017455', 'NR - North Central Idaho / Southwest Montana'],
        ['17696660', 'NR - Northeast Montana / Northwest North Dakota'],
        ['7302041', 'NR - Northern Panhandle Idaho / Northwest Montana'],
        ['7925238', 'NR - Northern Rockies Front Range Montana'],
        ['6677698', 'NR - South Central Montana / Yellowstone National Park'],
        ['20688890', 'NR - Southeast Montana / Southwest North Dakota'],
        ['6702265', 'NR - Southern Montana'],
        ['9042349', 'NR - Southern Panhandle Idaho / Western Montana'],
        ['10972570', 'NR - West Central Montana'],
        ['5516381', 'NW - C1'],
        ['8205599', 'NW - C2'],
        ['6909481', 'NW - C3'],
        ['4038318', 'NW - E1'],
        ['4011822', 'NW - E2'],
        ['15740800', 'NW - E3'],
        ['9460885', 'NW - E4'],
        ['16280260', 'NW - E5'],
        ['13470510', 'NW - W1'],
        ['8885838', 'NW - W2'],
        ['7754100', 'NW - W3'],
        ['6913197', 'NW - W4'],
        ['1052556', 'RM - Big Horn Mountains'],
        ['6332909', 'RM - Bighorn Basin'],
        ['1190428', 'RM - Black Hills South'],
        ['3847684', 'RM - Central Front Range'],
        ['21414020', 'RM - Central NE'],
        ['21328370', 'RM - Central SD'],
        ['38854500', 'RM - Central-Ern KS'],
        ['3478665', 'RM - Grand Mesa/White River'],
        ['3929728', 'RM - Gunnison/Pike'],
        ['1947635', 'RM - Laramie Mountains'],
        ['4308195', 'RM - Lower Colorado River Plateau'],
        ['25358350', 'RM - NE CO/SE WY/Wrn NE'],
        ['6601090', 'RM - Northern Colorado Mountains'],
        ['2548794', 'RM - Northern Front Range Foothills'],
        ['1518733', 'RM - Northern Front Range Mountains'],
        ['1743944', 'RM - Northern High Plains'],
        ['5225951', 'RM - Northwest Colorado Plateau'],
        ['19017380', 'RM - Power River Basin'],
        ['3189719', 'RM - San Juan'],
        ['29756510', 'RM - SE CO/Wrn KS'],
        ['2852407', 'RM - Shoshone'],
        ['2491998', 'RM - Southern Front Range'],
        ['5808478', 'RM - Southern High Plains'],
        ['10700640', 'RM - Southwest Wyoming'],
        ['3174877', 'RM - Uncompahgre'],
        ['3580608', 'RM - Ute Mountain/Mesa Verde'],
        ['10814500', 'RM - Wind River Basin/Casper Mountain'],
        ['10590770', 'SA - AL NORTH'],
        ['16133710', 'SA - AL SOUTH'],
        ['10268900', 'SA - APP NORTH'],
        ['8570306', 'SA - APP SOUTH'],
        ['17763890', 'SA - AR EAST'],
        ['10622160', 'SA - FL CENT'],
        ['2170863', 'SA - FL EAST COAST'],
        ['3875168', 'SA - FL NORTH COAST'],
        ['5501090', 'SA - FL NORTHEAST'],
        ['7863525', 'SA - FL PAN'],
        ['4014859', 'SA - FL S CST'],
        ['3671924', 'SA - FL SOUTH'],
        ['3322738', 'SA - FL WEST COAST'],
        ['12775330', 'SA - GA CENT'],
        ['6403133', 'SA - GA NORTH'],
        ['11802590', 'SA - GA SOUTH'],
        ['1883109', 'SA - GA/FL COAST'],
        ['10113640', 'SA - KY EAST'],
        ['15872750', 'SA - KY WEST'],
        ['25470780', 'SA - LA'],
        ['4111648', 'SA - LA COAST'],
        ['8173978', 'SA - LA/MS/AL COAST'],
        ['24390930', 'SA - MS CENT & SOUTH'],
        ['6920945', 'SA - MS NORTH'],
        ['11950960', 'SA - NC CENT'],
        ['7036992', 'SA - NC COAST'],
        ['7743132', 'SA - NC COASTAL pLAIN'],
        ['15858230', 'SA - OK CENT'],
        ['15647690', 'SA - OK WEST'],
        ['24206110', 'SA - OK/AR OZARKS'],
        ['9684342', 'SA - SC CENT'],
        ['3405079', 'SA - SC COAST'],
        ['7586014', 'SA - SC COASTAL PLAIN'],
        ['19014940', 'SA - TN CENT & EAST'],
        ['8218597', 'SA - TN W'],
        ['2915476', 'SA - TX BRO'],
        ['6587287', 'SA - TX CENT NE'],
        ['12632700', 'SA - TX CENT NW'],
        ['15630630', 'SA - TX CENT SE'],
        ['17549480', 'SA - TX CENT SW'],
        ['9941277', 'SA - TX EAST N'],
        ['11427700', 'SA - TX EAST S'],
        ['6408268', 'SA - TX SOUTH COAST'],
        ['19823120', 'SA - TX SW'],
        ['15941480', 'SA - TX WEST'],
        ['6302913', 'SA - TX/LA COAST'],
        ['13485160', 'SA - VA CENT'],
        ['6868144', 'SA - VA COST'],
        ['2809204', 'SO - CENTRAL COAST'],
        ['4453669', 'SO - CENTRAL COAST INTERIOR'],
        ['9709611', 'SO - CENTRAL MOJAVE'],
        ['2909367', 'SO - CENTRAL SIERRA'],
        ['7074204', 'SO - CENTRAL VALLEY'],
        ['3433190', 'SO - EASTERN DESERTS'],
        ['781017', 'SO - EASTERN MOUNTAINS'],
        ['1186495', 'SO - EASTERN SIERRA'],
        ['2691256', 'SO - LOWER DESERTS'],
        ['6416788', 'SO - NORTHERN DESERTS'],
        ['3634152', 'SO - SIERRA FOOTHILLS'],
        ['4683275', 'SO - SOUTH COAST'],
        ['2109120', 'SO - SOUTHERN MOUNTAINS'],
        ['4204413', 'SO - SOUTHERN SIERRA'],
        ['3379142', 'SO - UPPER DESERTS'],
        ['2676890', 'SO - WESTERN MOUNTAINS'],
        ['7014783', 'SW - Central AZ/Phoenix Metro'],
        ['4415318', 'SW - Central NM Mtns. & Plains'],
        ['19157250', 'SW - Four Corners Area'],
        ['33023230', 'SW - Northwast NM/NW TX'],
        ['5109589', 'SW - Northwest AZ'],
        ['11139700', 'SW - Northwest NM Mtns.'],
        ['5257330', 'SW - Sangre ds Cristo Mountains'],
        ['5762437', 'SW - South-Central NM Mtns.'],
        ['15785100', 'SW - South/Central NM Lowlands'],
        ['12682470', 'SW - Southeast AZ'],
        ['22195230', 'SW - Southeast NM/West TX'],
        ['12853480', 'SW - Southwest AZ'],
        ['13397360', 'SW - Southwest TX/Big Bend'],
        ['10941440', 'SW - West-Central AZ'],
        ['4970221', 'SW - Western Mogollon Rim'],
        ['12127570', 'SW - White Mtns. & Gila Region'],
        ['5387169', 'WB - WB01'],
        ['2560457', 'WB - WB02'],
        ['1689509', 'WB - WB03'],
        ['2472144', 'WB - WB04'],
        ['11528880', 'WB - WB05'],
        ['13581580', 'WB - WB06'],
        ['6702463', 'WB - WB07'],
        ['7509654', 'WB - WB08'],
        ['4909330', 'WB - WB09'],
        ['530649', 'WB - WB11'],
        ['1851844', 'WB - WB12'],
        ['10794280', 'WB - WB10/WB13'],
        ['Null', 'Null']


    ]



    var stationStore = [
        ["11084", "AL - BREWTON 3 SSE"],
        ["12813", "AL - FAIRHOPE 2 NE"],
        ["13160", "AL - GAINESVILLE LOCK"],
        ["13511", "AL - GREENSBORO"],
        ["13816", "AL - HIGHLAND HOME"],
        ["15749", "AL - MUSCLE SHOALS AP"],
        ["17157", "AL - SAINT BERNARD"],
        ["17304", "AL - SCOTTSBORO"],
        ["17366", "AL - SELMA"],
        ["18024", "AL - TALLADEGA"],
        ["18178", "AL - THOMASVILLE"],
        ["18323", "AL - TROY"],
        ["18380", "AL - TUSCALOOSA ACFD"],
        ["18438", "AL - UNION SPRINGS 9 S"],
        ["18469", "AL - VALLEY HEAD"],
        ["20080", "AZ - AJO"],
        ["21026", "AZ - BUCKEYE"],
        ["21248", "AZ - CANYON DE CHELLY"],
        ["21514", "AZ - CHANDLER HEIGHTS"],
        ["21614", "AZ - CHILDS"],
        ["23160", "AZ - FT VALLEY"],
        ["23596", "AZ - GRAND CANYON NP"],
        ["24089", "AZ - HOLBROOK"],
        ["24645", "AZ - KINGMAN #2"],
        ["24849", "AZ - LEES FERRY"],
        ["25512", "AZ - MIAMI"],
        ["26250", "AZ - PARKER"],
        ["26353", "AZ - PEARCE SUNSITES"],
        ["26796", "AZ - PRESCOTT"],
        ["27281", "AZ - ROOSEVELT 1 WNW"],
        ["27370", "AZ - SACATON"],
        ["27390", "AZ - SAFFORD AGRICULTRL CTR"],
        ["27435", "AZ - SAINT JOHNS"],
        ["27716", "AZ - SELIGMAN"],
        ["28619", "AZ - TOMBSTONE"],
        ["28815", "AZ - TUCSON WFO"],
        ["29271", "AZ - WHITERIVER 1 SW"],
        ["29287", "AZ - WICKENBURG"],
        ["29359", "AZ - WILLIAMS"],
        ["29652", "AZ - YUMA CITRUS STN"],
        ["30936", "AR - BRINKLEY"],
        ["31596", "AR - CONWAY"],
        ["31632", "AR - CORNING"],
        ["32356", "AR - EUREKA SPRINGS 3 WNW"],
        ["32444", "AR - FAYETTEVILLE EXP STN"],
        ["32930", "AR - GRAVETTE"],
        ["34572", "AR - MAMMOTH SPRING"],
        ["34756", "AR - MENA"],
        ["35186", "AR - NEWPORT"],
        ["35512", "AR - OZARK"],
        ["35754", "AR - PINE BLUFF"],
        ["35820", "AR - POCAHONTAS 1"],
        ["35908", "AR - PRESCOTT 2 NNW"],
        ["36253", "AR - ROHWER 2 NNE"],
        ["36928", "AR - SUBIACO"],
        ["40693", "CA - BERKELEY"],
        ["40924", "CA - BLYTHE"],
        ["41048", "CA - BRAWLEY 2 SW"],
        ["41614", "CA - CEDARVILLE"],
        ["41715", "CA - CHICO UNIV FARM"],
        ["41758", "CA - CHULA VISTA"],
        ["41912", "CA - COLFAX"],
        ["42239", "CA - CUYAMACA"],
        ["42294", "CA - DAVIS 2 WSW EXP"],
        ["42319", "CA - DEATH VALLEY"],
        ["42728", "CA - ELECTRA P H"],
        ["42910", "CA - EUREKA WFO WOODLEY IS"],
        ["42941", "CA - FAIRMONT"],
        ["43161", "CA - FT BRAGG 5 N"],
        ["43257", "CA - FRESNO YOSEMITE AP"],
        ["43747", "CA - HANFORD 1 S"],
        ["43761", "CA - HAPPY CAMP RS"],
        ["43875", "CA - HEALDSBURG"],
        ["44232", "CA - INDEPENDENCE"],
        ["44259", "CA - INDIO FIRE STN"],
        ["44713", "CA - LAKE SPAULDING"],
        ["44890", "CA - LEMON COVE"],
        ["44997", "CA - LIVERMORE"],
        ["45032", "CA - LODI"],
        ["45385", "CA - MARYSVILLE"],
        ["45532", "CA - MERCED"],
        ["45983", "CA - MT SHASTA"],
        ["46074", "CA - NAPA STATE HOSPITAL"],
        ["46118", "CA - NEEDLES AP"],
        ["46175", "CA - NEWPORT BEACH HARBOR"],
        ["46399", "CA - OJAI"],
        ["46506", "CA - ORLAND"],
        ["46508", "CA - ORLEANS"],
        ["46719", "CA - PASADENA"],
        ["46730", "CA - PASO ROBLES"],
        ["46826", "CA - PETALUMA AP"],
        ["47195", "CA - QUINCY"],
        ["47304", "CA - REDDING MUNI AP"],
        ["47306", "CA - REDLANDS"],
        ["47851", "CA - SAN LUIS OBISPO POLY"],
        ["47902", "CA - SANTA BARBARA"],
        ["47916", "CA - SANTA CRUZ"],
        ["47965", "CA - SANTA ROSA"],
        ["48702", "CA - SUSANVILLE 2SW"],
        ["48758", "CA - TAHOE CITY"],
        ["48839", "CA - TEJON RANCHO"],
        ["49087", "CA - TUSTIN IRVINE RCH"],
        ["49122", "CA - UKIAH"],
        ["49200", "CA - VACAVILLE"],
        ["49452", "CA - WASCO"],
        ["49490", "CA - WEAVERVILLE"],
        ["49699", "CA - WILLOWS 6 W"],
        ["49855", "CA - YOSEMITE PARK HQ"],
        ["49866", "CA - YREKA"],
        ["50848", "CO - BOULDER"],
        ["51294", "CO - CANON CITY"],
        ["51528", "CO - CHEESMAN"],
        ["51564", "CO - CHEYENNE WELLS"],
        ["51741", "CO - COLLBRAN"],
        ["52184", "CO - DEL NORTE 2E"],
        ["52281", "CO - DILLON 1 E"],
        ["52446", "CO - EADS"],
        ["53005", "CO - FT COLLINS"],
        ["53038", "CO - FT MORGAN"],
        ["53146", "CO - FRUITA"],
        ["53662", "CO - GUNNISON 3SW"],
        ["53951", "CO - HERMIT 7 ESE"],
        ["54076", "CO - HOLLY"],
        ["54770", "CO - LAMAR"],
        ["54834", "CO - LAS ANIMAS"],
        ["55322", "CO - MANASSA"],
        ["55722", "CO - MONTROSE"],
        ["57167", "CO - ROCKY FORD 2 SE"],
        ["57337", "CO - SAGUACHE"],
        ["57936", "CO - STEAMBOAT SPRINGS"],
        ["58204", "CO - TELLURIDE 4WNW"],
        ["58429", "CO - TRINIDAD"],
        ["59243", "CO - WRAY"],
        ["62658", "CT - FALLS VILLAGE"],
        ["63207", "CT - GROTON"],
        ["67970", "CT - STAMFORD 5 N"],
        ["68138", "CT - STORRS"],
        ["72730", "DE - DOVER"],
        ["73595", "DE - GREENWOOD 2NE"],
        ["75915", "DE - MILFORD 2 SE"],
        ["76410", "DE - NEWARK UNIV FARM"],
        ["79605", "DE - WILMINGTON PORTER RES"],
        ["80211", "FL - APALACHICOLA AP"],
        ["80228", "FL - ARCADIA"],
        ["80478", "FL - BARTOW"],
        ["80611", "FL - BELLE GLADE"],
        ["82220", "FL - DE FUNIAK SPRINGS"],
        ["82850", "FL - EVERGLADES"],
        ["82915", "FL - FEDERAL POINT"],
        ["82944", "FL - FERNANDINA BEACH"],
        ["83163", "FL - FT LAUDERDALE"],
        ["83186", "FL - FT MYERS PAGE FLD"],
        ["83207", "FL - FT PIERCE"],
        ["84289", "FL - INVERNESS 3 SE"],
        ["84570", "FL - KEY WEST INTL AP"],
        ["84731", "FL - LAKE CITY 2 E"],
        ["85275", "FL - MADISON"],
        ["86414", "FL - OCALA"],
        ["86997", "FL - PENSACOLA RGNL AP"],
        ["87020", "FL - PERRINE 4W"],
        ["87851", "FL - SAINT LEO"],
        ["88758", "FL - TALLAHASSEE WSO AP"],
        ["88824", "FL - TARPON SPGS SEWAGE PL"],
        ["88942", "FL - TITUSVILLE"],
        ["90140", "GA - ALBANY 3 SE"],
        ["90586", "GA - BAINBRIDGE INTL PAPER"],
        ["91340", "GA - BRUNSWICK"],
        ["91500", "GA - CAMILLA 3SE"],
        ["92318", "GA - COVINGTON"],
        ["92475", "GA - DAHLONEGA"],
        ["92966", "GA - EASTMAN 1 W"],
        ["93621", "GA - GAINESVILLE"],
        ["93754", "GA - GLENNVILLE 3NW"],
        ["94170", "GA - HAWKINSVILLE"],
        ["95874", "GA - MILLEDGEVILLE"],
        ["95882", "GA - MILLEN 4 N"],
        ["96335", "GA - NEWNAN 5N"],
        ["97276", "GA - QUITMAN 2 NW"],
        ["97600", "GA - ROME"],
        ["97847", "GA - SAVANNAH INTL AP"],
        ["98535", "GA - TALBOTTON"],
        ["98703", "GA - TIFTON"],
        ["98740", "GA - TOCCOA"],
        ["99141", "GA - WARRENTON"],
        ["99157", "GA - WASHINGTON 2 ESE"],
        ["99186", "GA - WAYCROSS 4 NE"],
        ["99291", "GA - WEST POINT"],
        ["100010", "ID - ABERDEEN EXP STN"],
        ["100448", "ID - ARROWROCK DAM"],
        ["100470", "ID - ASHTON 1N"],
        ["100803", "ID - BERN"],
        ["101408", "ID - CAMBRIDGE"],
        ["101956", "ID - COEUR D'ALENE"],
        ["102845", "ID - DWORSHAK FISH HATCHERY"],
        ["103143", "ID - FENN RS"],
        ["103631", "ID - GLENNS FERRY"],
        ["103732", "ID - GRACE"],
        ["104140", "ID - HAZELTON"],
        ["104295", "ID - HOLLISTER"],
        ["104670", "ID - JEROME"],
        ["104831", "ID - KELLOGG"],
        ["104845", "ID - KETCHUM RS"],
        ["105241", "ID - LEWISTON AP"],
        ["105275", "ID - LIFTON PUMPING STN"],
        ["105462", "ID - MACKAY LOST RIVER RS"],
        ["105559", "ID - MALAD CITY"],
        ["105685", "ID - MAY 2SSE"],
        ["106152", "ID - MOSCOW U OF I"],
        ["106305", "ID - NAMPA SUGAR FACTORY"],
        ["106388", "ID - NEW MEADOWS RS"],
        ["106542", "ID - OAKLEY"],
        ["106891", "ID - PAYETTE"],
        ["107264", "ID - PORTHILL"],
        ["107386", "ID - PRIEST RIVER EXP STN"],
        ["108080", "ID - SALMON-KSRA"],
        ["108137", "ID - SANDPOINT EXP STN"],
        ["110072", "IL - ALEDO"],
        ["110187", "IL - ANNA 2 NNE"],
        ["110338", "IL - AURORA"],
        ["111280", "IL - CARLINVILLE"],
        ["111436", "IL - CHARLESTON"],
        ["112140", "IL - DANVILLE"],
        ["112193", "IL - DECATUR WTP"],
        ["112348", "IL - DIXON 1 NW"],
        ["112483", "IL - DU QUOIN 4 SE"],
        ["113335", "IL - GALVA"],
        ["113879", "IL - HARRISBURG"],
        ["114108", "IL - HILLSBORO"],
        ["114198", "IL - HOOPESTON 1 NE"],
        ["114442", "IL - JACKSONVILLE 2E"],
        ["114823", "IL - LA HARPE"],
        ["115079", "IL - LINCOLN"],
        ["115326", "IL - MARENGO"],
        ["115515", "IL - MCLEANSBORO"],
        ["115712", "IL - MINONK"],
        ["115768", "IL - MONMOUTH"],
        ["115833", "IL - MORRISON"],
        ["115901", "IL - MT CARROLL"],
        ["115943", "IL - MT VERNON 3 NE"],
        ["116446", "IL - OLNEY 2S"],
        ["116526", "IL - OTTAWA 5SW"],
        ["116558", "IL - PALESTINE"],
        ["116579", "IL - PANA 3E"],
        ["116610", "IL - PARIS WTR WKS"],
        ["116738", "IL - PERRY 6 NW"],
        ["116910", "IL - PONTIAC"],
        ["117551", "IL - RUSHVILLE"],
        ["118147", "IL - SPARTA 1 W"],
        ["118740", "IL - URBANA"],
        ["118916", "IL - WALNUT"],
        ["119241", "IL - WHITE HALL 1 E"],
        ["119354", "IL - WINDSOR"],
        ["120177", "IN - ANDERSON SEWAGE PLT"],
        ["120200", "IN - ANGOLA"],
        ["120676", "IN - BERNE WWTP"],
        ["120784", "IN - BLOOMINGTON IN UNIV"],
        ["121030", "IN - BROOKVILLE"],
        ["121229", "IN - CAMBRIDGE CITY 3 N"],
        ["121425", "IN - CHARLESTOWN 5 NNW"],
        ["121747", "IN - COLUMBUS"],
        ["121873", "IN - CRAWFORDSVILLE 6 SE"],
        ["122149", "IN - DELPHI 2 N"],
        ["123418", "IN - GOSHEN 3SW"],
        ["123513", "IN - GREENCASTLE 1 W"],
        ["123527", "IN - GREENFIELD"],
        ["124008", "IN - HOBART 2 WNW"],
        ["124181", "IN - HUNTINGTON"],
        ["124837", "IN - LAPORTE"],
        ["125237", "IN - MADISON SEWAGE PLT"],
        ["125337", "IN - MARION 2 N"],
        ["126001", "IN - MT VERNON"],
        ["126580", "IN - OOLITIC PURDUE EX FRM"],
        ["126705", "IN - PAOLI"],
        ["127125", "IN - PRINCETON 1 W"],
        ["127298", "IN - RENSSELAER"],
        ["127482", "IN - ROCHESTER"],
        ["127522", "IN - ROCKVILLE"],
        ["127646", "IN - RUSHVILLE"],
        ["127755", "IN - SALEM"],
        ["127875", "IN - SCOTTSBURG"],
        ["127935", "IN - SEYMOUR 2 N"],
        ["128036", "IN - SHOALS 8 S"],
        ["129080", "IN - VEVAY"],
        ["129113", "IN - VINCENNES 5 NE"],
        ["129253", "IN - WASHINGTON 1 W"],
        ["129511", "IN - WHEATFIELD"],
        ["129557", "IN - WHITESTOWN"],
        ["129670", "IN - WINAMAC 2SSE"],
        ["130112", "IA - ALBIA 3 NNE"],
        ["130133", "IA - ALGONA 3 W"],
        ["130600", "IA - BELLE PLAINE"],
        ["131402", "IA - CHARLES CITY"],
        ["131533", "IA - CLARINDA"],
        ["131635", "IA - CLINTON #1"],
        ["132724", "IA - ESTHERVILLE 2 N"],
        ["132789", "IA - FAIRFIELD"],
        ["132864", "IA - FAYETTE"],
        ["132977", "IA - FOREST CITY 2 NNE"],
        ["132999", "IA - FORT DODGE 5NNW"],
        ["134063", "IA - INDIANOLA 2W"],
        ["134142", "IA - IOWA FALLS"],
        ["134735", "IA - LE MARS"],
        ["134894", "IA - LOGAN"],
        ["135769", "IA - MT AYR"],
        ["135796", "IA - MT PLEASANT 1 SSW"],
        ["135952", "IA - NEW HAMPTON"],
        ["137147", "IA - ROCK RAPIDS"],
        ["137161", "IA - ROCKWELL CITY"],
        ["137979", "IA - STORM LAKE 2 E"],
        ["138296", "IA - TOLEDO 3N"],
        ["138688", "IA - WASHINGTON"],
        ["140264", "KS - ANTHONY"],
        ["140365", "KS - ASHLAND"],
        ["140405", "KS - ATCHISON"],
        ["141704", "KS - COLDWATER"],
        ["141740", "KS - COLUMBUS"],
        ["141867", "KS - COUNCIL GROVE LAKE"],
        ["142401", "KS - EL DORADO"],
        ["142459", "KS - ELLSWORTH"],
        ["142835", "KS - FT SCOTT"],
        ["143527", "KS - HAYS 1 S"],
        ["143810", "KS - HORTON"],
        ["143954", "KS - INDEPENDENCE"],
        ["144087", "KS - JETMORE 8NNW"],
        ["144464", "KS - LAKIN"],
        ["144530", "KS - LARNED"],
        ["144559", "KS - LAWRENCE"],
        ["144588", "KS - LEAVENWORTH"],
        ["144695", "KS - LIBERAL"],
        ["144972", "KS - MANHATTAN"],
        ["145152", "KS - MCPHERSON"],
        ["145173", "KS - MEDICINE LODGE"],
        ["145363", "KS - MINNEAPOLIS"],
        ["145856", "KS - NORTON 9SSE"],
        ["145906", "KS - OBERLIN"],
        ["145972", "KS - OLATHE 3E"],
        ["146128", "KS - OTTAWA"],
        ["147093", "KS - SAINT FRANCIS"],
        ["147271", "KS - SCOTT CITY"],
        ["147305", "KS - SEDAN"],
        ["147542", "KS - SMITH CTR"],
        ["148495", "KS - WAKEENEY"],
        ["150254", "KY - ASHLAND"],
        ["150381", "KY - BARBOURVILLE"],
        ["150619", "KY - BEREA COLLEGE"],
        ["150909", "KY - BOWLING GREEN RGNL AP"],
        ["152791", "KY - FARMERS 2 S"],
        ["153028", "KY - FRANKFORT DOWNTOWN"],
        ["153430", "KY - GREENSBURG"],
        ["153762", "KY - HENDERSON 8 SSW"],
        ["153994", "KY - HOPKINSVILLE"],
        ["154703", "KY - LEITCHFIELD 2 N"],
        ["157324", "KY - SHELBYVILLE 1 E"],
        ["158709", "KY - WILLIAMSBURG"],
        ["158714", "KY - WILLIAMSTOWN 3 W"],
        ["160098", "LA - ALEXANDRIA"],
        ["160205", "LA - AMITE"],
        ["160537", "LA - BASTROP"],
        ["160549", "LA - BATON ROUGE METRO AP"],
        ["161287", "LA - BUNKIE"],
        ["161411", "LA - CALHOUN RSCH STN"],
        ["162151", "LA - COVINGTON 4 NNW"],
        ["162534", "LA - DONALDSONVILLE 4 SW"],
        ["163313", "LA - FRANKLIN 3 NW"],
        ["163800", "LA - GRAND COTEAU"],
        ["164407", "LA - HOUMA"],
        ["164700", "LA - JENNINGS"],
        ["165026", "LA - LAFAYETTE FCWOS"],
        ["166664", "LA - NEW ORLEANS AUDUBON"],
        ["167344", "LA - PLAIN DEALING 4 W"],
        ["168163", "LA - ST JOSEPH 3 N"],
        ["169013", "LA - THIBODAUX 3 ESE"],
        ["169806", "LA - WINNSBORO 5 SSE"],
        ["170100", "ME - ACADIA NP"],
        ["170814", "ME - BRASSUA DAM"],
        ["171628", "ME - CORINNA"],
        ["172426", "ME - EASTPORT"],
        ["172765", "ME - FARMINGTON"],
        ["173046", "ME - GARDINER"],
        ["173944", "ME - HOULTON 5N"],
        ["174566", "ME - LEWISTON"],
        ["175304", "ME - MILLINOCKET"],
        ["176905", "ME - PORTLAND JETPORT"],
        ["176937", "ME - PRESQUE ISLE"],
        ["179891", "ME - WOODLAND"],
        ["180700", "MD - BELTSVILLE"],
        ["181385", "MD - CAMBRIDGE WATER TRMT P"],
        ["181750", "MD - CHESTERTOWN"],
        ["182282", "MD - CUMBERLAND 2"],
        ["182523", "MD - DENTON 2 E"],
        ["183675", "MD - GLENN DALE BELL STN"],
        ["185111", "MD - LAUREL 3 W"],
        ["185718", "MD - MD SCI CTR BALTIMORE"],
        ["185985", "MD - MILLINGTON 1 SE"],
        ["186620", "MD - OAKLAND 1 SE"],
        ["186770", "MD - OWINGS FERRY LANDING"],
        ["187330", "MD - PRINCESS ANNE"],
        ["187806", "MD - ROYAL OAK 2 SSW"],
        ["188000", "MD - SALISBURY"],
        ["189440", "MD - WESTMINSTER POL BRKS"],
        ["189750", "MD - WOODSTOCK"],
        ["190120", "MA - AMHERST"],
        ["190535", "MA - BEDFORD"],
        ["190736", "MA - BLUE HILL"],
        ["193213", "MA - GREAT BARRINGTON 5 SW"],
        ["194105", "MA - LAWRENCE"],
        ["195246", "MA - NEW BEDFORD"],
        ["196486", "MA - PLYMOUTH-KINGSTON"],
        ["196681", "MA - PROVINCETOWN"],
        ["196783", "MA - READING"],
        ["198367", "MA - TAUNTON"],
        ["198757", "MA - WALPOLE"],
        ["199316", "MA - WEST MEDWAY"],
        ["200032", "MI - ADRIAN 2 NNE"],
        ["200128", "MI - ALLEGAN 5NE"],
        ["200146", "MI - ALMA"],
        ["200230", "MI - ANN ARBOR U OF"],
        ["200779", "MI - BIG RAPIDS WTR WKS"],
        ["201439", "MI - CHAMPION VAN RIPER PK"],
        ["201486", "MI - CHATHAM EXP FARM"],
        ["201492", "MI - CHEBOYGAN"],
        ["201675", "MI - COLDWATER ST SCHOOL"],
        ["202423", "MI - EAST TAWAS"],
        ["202737", "MI - FAYETTE 4 SW"],
        ["203632", "MI - HART 3 WSW"],
        ["203823", "MI - HILLSDALE"],
        ["204090", "MI - IRON MT KINGSFORD WWTP"],
        ["204104", "MI - IRONWOOD"],
        ["204244", "MI - KALAMAZOO STATE HOSP"],
        ["205434", "MI - MIDLAND"],
        ["205650", "MI - MT CLEMENS ANG BASE"],
        ["205662", "MI - MT PLEASANT UNIV"],
        ["205690", "MI - MUNISING"],
        ["205816", "MI - NEWBERRY 3S"],
        ["206300", "MI - OWOSSO WWTP"],
        ["207690", "MI - SOUTH HAVEN"],
        ["207812", "MI - STAMBAUGH 2SSE"],
        ["210018", "MN - ADA"],
        ["210075", "MN - ALBERT LEA 3 SE"],
        ["210252", "MN - ARGYLE"],
        ["210515", "MN - BAUDETTE"],
        ["211465", "MN - CHASKA"],
        ["211630", "MN - CLOQUET"],
        ["212142", "MN - DETROIT LAKES 1 NNE"],
        ["212645", "MN - EVELETH WWTP"],
        ["212698", "MN - FAIRMONT"],
        ["212737", "MN - FARMINGTON 3 NW"],
        ["212916", "MN - FOSSTON 1 E"],
        ["213290", "MN - GRAND MEADOW"],
        ["213303", "MN - GRAND RPDS FOREST LAB"],
        ["214106", "MN - ITASCA UNIV OF MINN"],
        ["214652", "MN - LEECH LAKE"],
        ["215175", "MN - MARCELL 5NE"],
        ["215400", "MN - MILAN 1 NW"],
        ["215435", "MN - MINNEAPOLIS/ST PAUL AP"],
        ["215563", "MN - MONTEVIDEO 1 SW"],
        ["215615", "MN - MORA"],
        ["215638", "MN - MORRIS WC EXP STN"],
        ["215887", "MN - NEW ULM 2 SE"],
        ["216152", "MN - OLIVIA 3E"],
        ["216360", "MN - PARK RAPIDS 2 S"],
        ["216547", "MN - PINE RIVER DAM"],
        ["216565", "MN - PIPESTONE"],
        ["217087", "MN - ROSEAU"],
        ["217405", "MN - ST PETER"],
        ["217460", "MN - SANDY LAKE DAM LIBBY"],
        ["218419", "MN - TWO HARBORS"],
        ["218618", "MN - WALKER AH GWAH CHING"],
        ["219046", "MN - WINNEBAGO"],
        ["219249", "MN - ZUMBROTA"],
        ["220021", "MS - ABERDEEN"],
        ["220488", "MS - BATESVILLE 2 SW"],
        ["220955", "MS - BOONEVILLE"],
        ["221094", "MS - BROOKHAVEN CITY"],
        ["221389", "MS - CANTON 4N"],
        ["221707", "MS - CLARKSDALE"],
        ["221865", "MS - COLUMBIA"],
        ["221880", "MS - COLUMBUS"],
        ["221962", "MS - CORINTH 7 SW"],
        ["222094", "MS - CRYSTAL SPGS EXP STN"],
        ["223107", "MS - FOREST"],
        ["223605", "MS - GREENVILLE"],
        ["223887", "MS - HATTIESBURG 5SW"],
        ["223975", "MS - HERNANDO"],
        ["224173", "MS - HOLLY SPRINGS 4 N"],
        ["224776", "MS - KOSCIUSKO"],
        ["224939", "MS - LAUREL"],
        ["225247", "MS - LOUISVILLE"],
        ["225987", "MS - MONTICELLO"],
        ["226009", "MS - MOORHEAD"],
        ["226177", "MS - NATCHEZ"],
        ["226718", "MS - PASCAGOULA 3 NE"],
        ["227111", "MS - PONTOTOC EXP STN"],
        ["227128", "MS - POPLARVILLE EXP STN"],
        ["227132", "MS - PORT GIBSON 1 NE"],
        ["228374", "MS - STATE UNIV"],
        ["229079", "MS - UNIVERSITY"],
        ["229400", "MS - WATER VALLEY"],
        ["229426", "MS - WAVELAND"],
        ["229439", "MS - WAYNESBORO 2 W"],
        ["229793", "MS - WOODVILLE 4 ESE"],
        ["229860", "MS - YAZOO CITY 5 NNE"],
        ["230204", "MO - APPLETON CITY"],
        ["230856", "MO - BOWLING GREEN 1 E"],
        ["231037", "MO - BRUNSWICK"],
        ["231364", "MO - CARUTHERSVILLE"],
        ["231711", "MO - CLINTON"],
        ["231822", "MO - CONCEPTION"],
        ["232289", "MO - DONIPHAN"],
        ["232809", "MO - FARMINGTON"],
        ["234271", "MO - JEFFERSON CITY WTP"],
        ["234705", "MO - LAMAR"],
        ["234825", "MO - LEBANON 2W"],
        ["234850", "MO - LEES SUMMIT REED WR"],
        ["234904", "MO - LEXINGTON 3E"],
        ["235027", "MO - LOCKWOOD"],
        ["235253", "MO - MARBLE HILL"],
        ["235541", "MO - MEXICO"],
        ["235671", "MO - MOBERLY"],
        ["235834", "MO - MTN GROVE 2 N"],
        ["235976", "MO - NEOSHO"],
        ["237263", "MO - ROLLA UNI OF MISSOURI"],
        ["237963", "MO - SPICKARD 7 W"],
        ["238051", "MO - STEFFENVILLE"],
        ["238223", "MO - SWEET SPRINGS"],
        ["238466", "MO - TRUMAN DAM & RSVR"],
        ["238523", "MO - UNIONVILLE"],
        ["238725", "MO - WARRENTON 1 N"],
        ["240199", "MT - ANACONDA"],
        ["240364", "MT - AUGUSTA"],
        ["240780", "MT - BIG TIMBER"],
        ["241044", "MT - BOZEMAN MONTANA ST U"],
        ["241552", "MT - CASCADE 5 S"],
        ["241722", "MT - CHINOOK"],
        ["241737", "MT - CHOTEAU"],
        ["242173", "MT - CUT BANK AP"],
        ["242409", "MT - DILLON WMCE"],
        ["242689", "MT - EKALAKA"],
        ["242793", "MT - ENNIS"],
        ["243013", "MT - FLATWILLOW 4 ENE"],
        ["243089", "MT - FORKS 4 NNE"],
        ["243110", "MT - FT ASSINNIBOINE"],
        ["243139", "MT - FORTINE 1 N"],
        ["243558", "MT - GLASGOW INTL AP"],
        ["243581", "MT - GLENDIVE"],
        ["243751", "MT - GREAT FALLS AP"],
        ["243885", "MT - HAMILTON"],
        ["244038", "MT - HEBGEN DAM"],
        ["244055", "MT - HELENA AP ASOS"],
        ["244345", "MT - HUNTLEY EXP STN"],
        ["244364", "MT - HYSHAM 25 SSE"],
        ["244522", "MT - JORDAN"],
        ["244558", "MT - KALISPELL GLACIER AP"],
        ["245015", "MT - LIBBY 1 NE RS"],
        ["245080", "MT - LIVINGSTON 12 S"],
        ["245338", "MT - MALTA 7 E"],
        ["245572", "MT - MEDICINE LAKE 3 SE"],
        ["245668", "MT - MILDRED 5 N"],
        ["245690", "MT - MILES CITY AP"],
        ["245761", "MT - MOCCASIN EXP STN"],
        ["246157", "MT - NORRIS MADISON PH"],
        ["246472", "MT - PHILIPSBURG RS"],
        ["246601", "MT - PLEVNA"],
        ["246918", "MT - RED LODGE"],
        ["247286", "MT - SAINT IGNATIUS"],
        ["247318", "MT - SAINT REGIS 1 NE"],
        ["247382", "MT - SAVAGE"],
        ["248501", "MT - VALIER"],
        ["248569", "MT - VIDA 6 NE"],
        ["248597", "MT - VIRGINIA CITY"],
        ["248857", "MT - WEST YELLOWSTONE"],
        ["248930", "MT - WHITE SULPHUR SPRNGS"],
        ["250070", "NE - ALBION"],
        ["250130", "NE - ALLIANCE 1WNW"],
        ["250375", "NE - ASHLAND NO"],
        ["250420", "NE - ATKINSON 3SW"],
        ["250435", "NE - AUBURN 5 ESE"],
        ["250622", "NE - BEATRICE 1N"],
        ["250640", "NE - BEAVER CITY"],
        ["251145", "NE - BRIDGEPORT"],
        ["251200", "NE - BROKEN BOW 2 W"],
        ["252020", "NE - CRETE"],
        ["252100", "NE - CURTIS 3NNE"],
        ["252205", "NE - DAVID CITY"],
        ["252820", "NE - FAIRBURY 5S"],
        ["252840", "NE - FAIRMONT"],
        ["253035", "NE - FRANKLIN"],
        ["253175", "NE - GENEVA"],
        ["253185", "NE - GENOA 2 W"],
        ["253365", "NE - GOTHENBURG"],
        ["253615", "NE - HARRISON"],
        ["253630", "NE - HARTINGTON"],
        ["253660", "NE - HASTINGS 4N"],
        ["253715", "NE - HAY SPRINGS 12 S"],
        ["253735", "NE - HEBRON"],
        ["253910", "NE - HOLDREGE"],
        ["254110", "NE - IMPERIAL"],
        ["254440", "NE - KIMBALL 2NE"],
        ["254900", "NE - LODGEPOLE"],
        ["254985", "NE - LOUP CITY"],
        ["255080", "NE - MADISON"],
        ["255310", "NE - MC COOK"],
        ["255470", "NE - MERRIMAN"],
        ["255565", "NE - MINDEN"],
        ["256040", "NE - NORTH LOUP"],
        ["256135", "NE - OAKDALE"],
        ["256570", "NE - PAWNEE CITY"],
        ["256970", "NE - PURDUM"],
        ["257070", "NE - RED CLOUD"],
        ["257515", "NE - SAINT PAUL 4N"],
        ["257715", "NE - SEWARD"],
        ["258133", "NE - STAPLETON 5W"],
        ["258395", "NE - SYRACUSE"],
        ["258465", "NE - TECUMSEH 1S"],
        ["258480", "NE - TEKAMAH"],
        ["258915", "NE - WAKEFIELD"],
        ["259090", "NE - WEEPING WATER"],
        ["259510", "NE - YORK"],
        ["260507", "NV - AUSTIN #2"],
        ["260691", "NV - BATTLE MOUNTAIN 4SE"],
        ["261071", "NV - BOULDER CITY"],
        ["262573", "NV - ELKO RGNL AP"],
        ["262780", "NV - FALLON EXP STN"],
        ["263245", "NV - GOLCONDA"],
        ["264698", "NV - LOVELOCK"],
        ["264950", "NV - MCGILL"],
        ["265168", "NV - MINA"],
        ["266779", "NV - RENO AP"],
        ["267369", "NV - SEARCHLIGHT"],
        ["268988", "NV - WELLS"],
        ["269171", "NV - WINNEMUCCA AP"],
        ["270706", "NH - BETHLEHEM"],
        ["272174", "NH - DURHAM"],
        ["272999", "NH - FIRST CONNECTICUT LAKE"],
        ["273850", "NH - HANOVER"],
        ["274399", "NH - KEENE"],
        ["280325", "NJ - ATLANTIC CITY"],
        ["280734", "NJ - BELVIDERE BRG"],
        ["280907", "NJ - BOONTON 1 SE"],
        ["281582", "NJ - CHARLOTTEBURG RSVR"],
        ["283029", "NJ - FLEMINGTON 5 NNW"],
        ["283951", "NJ - HIGHTSTOWN 2 W"],
        ["284229", "NJ - INDIAN MILLS 2 W"],
        ["284987", "NJ - LONG BRANCH OAKHURST"],
        ["285728", "NJ - MOORESTOWN"],
        ["286055", "NJ - NEW BRUNSWICK 3 SE"],
        ["287079", "NJ - PLAINFIELD"],
        ["288816", "NJ - TOMS RIVER"],
        ["290692", "NM - AZTEC RUINS NM"],
        ["290858", "NM - BELL RANCH"],
        ["291469", "NM - CARLSBAD"],
        ["291515", "NM - CARRIZOZO 1SW"],
        ["291664", "NM - CHAMA"],
        ["291813", "NM - CIMARRON 4 SW"],
        ["291887", "NM - CLAYTON MUNI ARPK AP"],
        ["292608", "NM - DULCE"],
        ["292848", "NM - ELEPHANT BUTTE DAM"],
        ["293265", "NM - FT BAYARD"],
        ["293294", "NM - FT SUMNER"],
        ["293368", "NM - GAGE"],
        ["294369", "NM - JEMEZ SPRINGS"],
        ["294426", "NM - JORNADA EXP RANGE"],
        ["294862", "NM - LAS VEGAS WWTP"],
        ["295150", "NM - LOS LUNAS 3 SSW"],
        ["295273", "NM - LUNA RS"],
        ["295960", "NM - MTN PARK"],
        ["295965", "NM - MOUNTAINAIR"],
        ["296435", "NM - OROGRANDE"],
        ["297323", "NM - RED RIVER"],
        ["297610", "NM - ROSWELL IND AP"],
        ["297867", "NM - SAN JON"],
        ["298107", "NM - SANTA ROSA"],
        ["298387", "NM - SOCORRO"],
        ["298501", "NM - SPRINGER"],
        ["298535", "NM - STATE UNIV"],
        ["299156", "NM - TUCUMCARI 4 NE"],
        ["299165", "NM - TULAROSA"],
        ["300023", "NY - ADDISON"],
        ["300042", "NY - ALBANY INTL AP"],
        ["300085", "NY - ALFRED"],
        ["300093", "NY - ALLEGANY SP"],
        ["300183", "NY - ANGELICA"],
        ["300321", "NY - AUBURN"],
        ["300443", "NY - BATAVIA"],
        ["300687", "NY - BINGHAMTON GREATER AP"],
        ["300889", "NY - BRIDGEHAMPTON"],
        ["300937", "NY - BROCKPORT"],
        ["301012", "NY - BUFFALO NIAGARA INTL"],
        ["301185", "NY - CANTON 4 SE"],
        ["301401", "NY - CHAZY"],
        ["301752", "NY - COOPERSTOWN"],
        ["301799", "NY - CORTLAND"],
        ["301966", "NY - DANNEMORA"],
        ["301974", "NY - DANSVILLE"],
        ["302060", "NY - DEPOSIT"],
        ["302129", "NY - DOBBS FERRY ARDSLEY"],
        ["302610", "NY - ELMIRA"],
        ["303033", "NY - FREDONIA"],
        ["303184", "NY - GENEVA RSCH FARM"],
        ["303259", "NY - GLENHAM"],
        ["303319", "NY - GLOVERSVILLE"],
        ["303773", "NY - HEMLOCK"],
        ["304102", "NY - INDIAN LAKE 2SW"],
        ["304174", "NY - ITHACA CORNELL UNIV"],
        ["304555", "NY - LAKE PLACID 2 S"],
        ["304647", "NY - LAWRENCEVILLE 3 SW"],
        ["304791", "NY - LITTLE FALLS CITY RSVR"],
        ["304796", "NY - LITTLE FALLS MILL ST"],
        ["304844", "NY - LOCKPORT 3 S"],
        ["304912", "NY - LOWVILLE"],
        ["304996", "NY - MALONE"],
        ["305113", "NY - MARYLAND 9 SW"],
        ["305426", "NY - MOHONK LAKE"],
        ["305512", "NY - MORRISVILLE 6 SW"],
        ["305801", "NY - NY CITY CNTRL PARK"],
        ["306085", "NY - NORWICH"],
        ["306164", "NY - OGDENSBURG 4 NE"],
        ["306314", "NY - OSWEGO EAST"],
        ["306774", "NY - PORT JERVIS"],
        ["306820", "NY - POUGHKEEPSIE"],
        ["307167", "NY - ROCHESTER INTL AP"],
        ["307484", "NY - SARATOGA SPRINGS 4 SW"],
        ["307633", "NY - SETAUKET STRONG"],
        ["308248", "NY - STILLWATER RSVR"],
        ["308383", "NY - SYRACUSE WSO AP"],
        ["308600", "NY - TROY L&D"],
        ["308631", "NY - TUPPER LAKE SUNMOUNT"],
        ["308737", "NY - UTICA FAA AP"],
        ["308906", "NY - WALDEN 1 ESE"],
        ["308910", "NY - WALES"],
        ["308944", "NY - WANAKENA RNGR SCHOOL"],
        ["309000", "NY - WATERTOWN"],
        ["309292", "NY - WEST POINT"],
        ["309670", "NY - YORKTOWN HEIGHTS 1 W"],
        ["310090", "NC - ALBEMARLE"],
        ["311458", "NC - CAPE HATTERAS AP"],
        ["311677", "NC - CHAPEL HILL 2 W"],
        ["312635", "NC - EDENTON"],
        ["312719", "NC - ELIZABETH CITY"],
        ["313017", "NC - FAYETTEVILLE PWC"],
        ["313510", "NC - GOLDSBORO 4 SE"],
        ["313969", "NC - HENDERSON 2 NNW"],
        ["313976", "NC - HENDERSONVILLE 1 NE"],
        ["314055", "NC - HIGHLANDS"],
        ["314684", "NC - KINSTON 7 SE"],
        ["314938", "NC - LENOIR"],
        ["315123", "NC - LOUISBURG"],
        ["315177", "NC - LUMBERTON"],
        ["315340", "NC - MARION 2 NW"],
        ["315356", "NC - MARSHALL"],
        ["315771", "NC - MONROE 2 SE"],
        ["315830", "NC - MOREHEAD CITY 2 WNW"],
        ["315838", "NC - MORGANTON"],
        ["315890", "NC - MT AIRY 2 W"],
        ["317202", "NC - REIDSVILLE 2 NW"],
        ["317615", "NC - SALISBURY"],
        ["317994", "NC - SMITHFIELD"],
        ["318113", "NC - SOUTHPORT 5 N"],
        ["318292", "NC - STATESVILLE 2 NNE"],
        ["318500", "NC - TARBORO 1 S"],
        ["318694", "NC - TRANSOU"],
        ["319147", "NC - WAYNESVILLE 1 E"],
        ["319476", "NC - WILSON 3 SW"],
        ["320941", "ND - BOTTINEAU"],
        ["321408", "ND - CASSELTON AGRONOMY FM"],
        ["321871", "ND - CROSBY"],
        ["322188", "ND - DICKINSON EXP STN"],
        ["322365", "ND - DUNN CENTER 1E"],
        ["323207", "ND - FT YATES 4 SW"],
        ["323287", "ND - FULLERTON 1 ESE"],
        ["323594", "ND - GRAFTON"],
        ["323621", "ND - GRAND FORKS UNIV NWS"],
        ["324178", "ND - HETTINGER"],
        ["324203", "ND - HILLSBORO 3 N"],
        ["324418", "ND - JAMESTOWN STATE HOSP"],
        ["324958", "ND - LANGDON EXP FARM"],
        ["325220", "ND - LISBON"],
        ["325479", "ND - MANDAN EXP STN"],
        ["326015", "ND - MOFFIT 3 SE"],
        ["326155", "ND - MOTT"],
        ["326255", "ND - NAPOLEON"],
        ["326315", "ND - NEW ENGLAND"],
        ["326947", "ND - PEMBINA"],
        ["327530", "ND - RICHARDTON ABBEY"],
        ["328792", "ND - TOWNER 2 NE"],
        ["329100", "ND - WAHPETON 3 N"],
        ["329445", "ND - WILLOW CITY"],
        ["331072", "OH - BUCYRUS"],
        ["331152", "OH - CADIZ"],
        ["331541", "OH - CHIPPEWA LAKE"],
        ["331592", "OH - CIRCLEVILLE"],
        ["331890", "OH - COSHOCTON WPC PLT"],
        ["332098", "OH - DEFIANCE"],
        ["332119", "OH - DELAWARE"],
        ["332791", "OH - FINDLAY WPCC"],
        ["333375", "OH - GREENVILLE WTP"],
        ["333758", "OH - HILLSBORO"],
        ["333780", "OH - HIRAM"],
        ["334189", "OH - KENTON"],
        ["335041", "OH - MC CONNELLSVILLE LK 7"],
        ["335297", "OH - MILLERSBURG"],
        ["335315", "OH - MILLPORT 4 NE"],
        ["336118", "OH - NORWALK WWTP"],
        ["336196", "OH - OBERLIN"],
        ["336600", "OH - PHILO 3 SW"],
        ["336781", "OH - PORTSMOUTH-SCIOTOVILLE"],
        ["338313", "OH - TIFFIN"],
        ["338534", "OH - UPPER SANDUSKY"],
        ["338552", "OH - URBANA WWTP"],
        ["338769", "OH - WARREN 3 S"],
        ["338822", "OH - WAUSEON WTP"],
        ["338830", "OH - WAVERLY"],
        ["339312", "OH - WOOSTER EXP STN"],
        ["340017", "OK - ADA"],
        ["340179", "OK - ALTUS IRIG RSCH STN"],
        ["340256", "OK - ANTLERS"],
        ["340292", "OK - ARDMORE"],
        ["340548", "OK - BARTLESVILLE MUNI AP"],
        ["340593", "OK - BEAVER"],
        ["340908", "OK - BOISE CITY 2 E"],
        ["341243", "OK - BUFFALO 2 SSW"],
        ["341504", "OK - CARNEGIE 5 NE"],
        ["341724", "OK - CHEROKEE"],
        ["341828", "OK - CLAREMORE 2 ENE"],
        ["342678", "OK - DURANT"],
        ["342912", "OK - ENID"],
        ["342944", "OK - ERICK"],
        ["343497", "OK - GEARY"],
        ["343628", "OK - GOODWELL RSCH STN"],
        ["343821", "OK - GUTHRIE 5S"],
        ["343871", "OK - HAMMON 3 SSW"],
        ["344055", "OK - HENNESSEY 4 ESE"],
        ["344204", "OK - HOBART MUNI AP"],
        ["344235", "OK - HOLDENVILLE 2SSE"],
        ["344298", "OK - HOOKER"],
        ["344573", "OK - JEFFERSON"],
        ["344766", "OK - KENTON"],
        ["344861", "OK - KINGFISHER"],
        ["345063", "OK - LAWTON"],
        ["345509", "OK - MANGUM"],
        ["345779", "OK - MEEKER 5 W"],
        ["345855", "OK - MIAMI"],
        ["346130", "OK - MUSKOGEE"],
        ["346139", "OK - MUTUAL"],
        ["346278", "OK - NEWKIRK 1NW"],
        ["346629", "OK - OKEENE"],
        ["346638", "OK - OKEMAH"],
        ["346670", "OK - OKMULGEE WTR WKS"],
        ["346926", "OK - PAULS VALLEY 4 WSW"],
        ["346935", "OK - PAWHUSKA"],
        ["347012", "OK - PERRY"],
        ["347254", "OK - POTEAU WTR WKS"],
        ["348501", "OK - STILLWATER 2 W"],
        ["348677", "OK - TAHLEQUAH"],
        ["349395", "OK - WAURIKA"],
        ["349422", "OK - WEATHERFORD"],
        ["349445", "OK - WEBBERS FALLS 5 WSW"],
        ["350304", "OR - ASHLAND"],
        ["350328", "OR - ASTORIA AP PORT OF"],
        ["350412", "OR - BAKER CITY AP"],
        ["350694", "OR - BEND"],
        ["351055", "OR - BROOKINGS 2 SE"],
        ["351433", "OR - CASCADIA"],
        ["351765", "OR - CONDON"],
        ["351862", "OR - CORVALLIS STATE UNIV"],
        ["351897", "OR - COTTAGE GROVE 1 NNE"],
        ["351946", "OR - CRATER LAKE NPS HQ"],
        ["352135", "OR - DANNER"],
        ["352406", "OR - DRAIN"],
        ["352440", "OR - DUFUR"],
        ["352997", "OR - FOREST GROVE"],
        ["353095", "OR - FREMONT 5 NW"],
        ["353445", "OR - GRANTS PASS"],
        ["353770", "OR - HEADWORKS PORTLAND WTR"],
        ["353827", "OR - HEPPNER"],
        ["353847", "OR - HERMISTON 1 SE"],
        ["354003", "OR - HOOD RIVER EXP STN"],
        ["354506", "OR - KLAMATH FALLS 2 SSW"],
        ["354670", "OR - LAKEVIEW 2 NNW"],
        ["355162", "OR - MALHEUR REFUGE HQ"],
        ["355362", "OR - MCKENZIE BRG RS"],
        ["355384", "OR - MC MINNVILLE"],
        ["355593", "OR - MILTON FREEWATER"],
        ["355734", "OR - MORO"],
        ["356032", "OR - NEWPORT"],
        ["356073", "OR - NORTH BEND FCWOS"],
        ["356426", "OR - PAISLEY"],
        ["356634", "OR - PILOT ROCK 1 SE"],
        ["356883", "OR - PRINEVILLE"],
        ["356907", "OR - PROSPECT 2 SW"],
        ["357169", "OR - RIDDLE"],
        ["357331", "OR - ROSEBURG KQEN"],
        ["358466", "OR - THREE LYNX"],
        ["358494", "OR - TILLAMOOK 1 W"],
        ["358746", "OR - UNION EXP STN"],
        ["358797", "OR - VALE"],
        ["358997", "OR - WALLOWA"],
        ["360106", "PA - ALLENTOWN AP"],
        ["361354", "PA - CHAMBERSBURG 1 ESE"],
        ["362537", "PA - EISENHOWER NHS"],
        ["362682", "PA - ERIE WSO AP"],
        ["363028", "PA - FRANKLIN"],
        ["363526", "PA - GREENVILLE 2 NE"],
        ["364385", "PA - JOHNSTOWN"],
        ["364896", "PA - LEBANON 2 W"],
        ["365915", "PA - MONTROSE"],
        ["366233", "PA - NEW CASTLE 1 N"],
        ["366689", "PA - PALMERTON"],
        ["367029", "PA - PLEASANT MT 1 W"],
        ["367322", "PA - READING 4 NNW"],
        ["367477", "PA - RIDGWAY"],
        ["367931", "PA - SELINSGROVE 2 S"],
        ["368449", "PA - STATE COLLEGE"],
        ["368596", "PA - STROUDSBURG"],
        ["368905", "PA - TOWANDA 1 S"],
        ["369050", "PA - UNIONTOWN 1 NE"],
        ["369298", "PA - WARREN"],
        ["369408", "PA - WELLSBORO 4 SW"],
        ["369464", "PA - WEST CHESTER 2 NW"],
        ["369728", "PA - WILLIAMSPORT RGNL AP"],
        ["369933", "PA - YORK 3 SSW PUMP"],
        ["370896", "RI - BLOCK ISLAND STATE AP"],
        ["374266", "RI - KINGSTON"],
        ["376698", "RI - PROVIDENCE WSO AP"],
        ["380074", "SC - AIKEN 5SE"],
        ["380165", "SC - ANDERSON"],
        ["380559", "SC - BEAUFORT WWTP"],
        ["380764", "SC - BLACKVILLE 3 W"],
        ["381277", "SC - CALHOUN FALLS"],
        ["381310", "SC - CAMDEN 3 W"],
        ["381549", "SC - CHARLESTON CITY"],
        ["381588", "SC - CHERAW"],
        ["381770", "SC - CLEMSON UNIV"],
        ["381944", "SC - COLUMBIA UNIV OF SC"],
        ["381997", "SC - CONWAY"],
        ["382260", "SC - DARLINGTON"],
        ["383468", "SC - GEORGETOWN 2 E"],
        ["383747", "SC - GRNVL SPART INTL AP"],
        ["383754", "SC - GREENWOOD"],
        ["384690", "SC - KERSHAW 1SW"],
        ["384753", "SC - KINGSTREE"],
        ["385017", "SC - LAURENS"],
        ["385200", "SC - LITTLE MTN"],
        ["386209", "SC - NEWBERRY"],
        ["386527", "SC - ORANGEBURG"],
        ["387631", "SC - SALUDA"],
        ["387722", "SC - SANTUCK"],
        ["388426", "SC - SUMMERVILLE 4W"],
        ["388440", "SC - SUMTER"],
        ["388887", "SC - WALHALLA"],
        ["389327", "SC - WINNSBORO"],
        ["389350", "SC - WINTHROP UNIV"],
        ["389469", "SC - YEMASSEE"],
        ["390020", "SD - ABERDEEN RGNL AP"],
        ["390043", "SD - ACADEMY 2NE"],
        ["390128", "SD - ALEXANDRIA"],
        ["391392", "SD - CANTON"],
        ["391739", "SD - CLARK"],
        ["391972", "SD - COTTONWOOD 2 E"],
        ["392429", "SD - DUPREE"],
        ["392797", "SD - EUREKA"],
        ["392927", "SD - FAULKTON 1 NW"],
        ["393029", "SD - FORESTBURG 3 NE"],
        ["393217", "SD - GANN VALLEY 4NW"],
        ["393832", "SD - HIGHMORE 1 W"],
        ["394007", "SD - HOT SPRINGS"],
        ["394037", "SD - HOWARD"],
        ["394516", "SD - KENNEBEC"],
        ["395456", "SD - MELLETTE 4 W"],
        ["395481", "SD - MENNO"],
        ["395536", "SD - MILBANK 4 NW"],
        ["395891", "SD - MURDO"],
        ["396170", "SD - OAHE DAM"],
        ["396597", "SD - PIERRE RGNL AP"],
        ["396947", "SD - RAPID CITY 4NW"],
        ["398622", "SD - VERMILLION 2 SE"],
        ["398932", "SD - WATERTOWN RGNL AP"],
        ["399442", "SD - WOOD"],
        ["401790", "TN - CLARKSVILLE WWTP"],
        ["402024", "TN - COPPERHILL"],
        ["402108", "TN - COVINGTON 3 SW"],
        ["402202", "TN - CROSSVILLE ED & RESEARCH"],
        ["402489", "TN - DICKSON"],
        ["402589", "TN - DOVER 1 W"],
        ["404561", "TN - JACKSON EXP STN"],
        ["405187", "TN - LEWISBURG EXP STN"],
        ["405882", "TN - MC MINNVILLE"],
        ["406371", "TN - MURFREESBORO 5 N"],
        ["406534", "TN - NEWPORT 1 NW"],
        ["407884", "TN - ROGERSVILLE 1 NE"],
        ["409155", "TN - TULLAHOMA"],
        ["409219", "TN - UNION CITY"],
        ["409502", "TN - WAYNESBORO"],
        ["410120", "TX - ALBANY"],
        ["410144", "TX - ALICE"],
        ["410174", "TX - ALPINE"],
        ["410493", "TX - BALLINGER 2 NW"],
        ["410498", "TX - BALMORHEA"],
        ["410639", "TX - BEEVILLE 5 NE"],
        ["410832", "TX - BLANCO"],
        ["410902", "TX - BOERNE"],
        ["411000", "TX - BOYS RANCH"],
        ["411048", "TX - BRENHAM"],
        ["411138", "TX - BROWNWOOD 2ENE"],
        ["411528", "TX - CATARINA"],
        ["411772", "TX - CLARKSVILLE 2NE"],
        ["412015", "TX - CORPUS CHRISTI AP"],
        ["412019", "TX - CORSICANA"],
        ["412121", "TX - CROSBYTON"],
        ["412266", "TX - DANEVANG 1 W"],
        ["412598", "TX - DUBLIN 2SE"],
        ["412679", "TX - EAGLE PASS 3N"],
        ["412797", "TX - EL PASO AP"],
        ["412906", "TX - ENCINAL"],
        ["413063", "TX - FALFURRIAS"],
        ["413183", "TX - FLATONIA"],
        ["413280", "TX - FT STOCKTON"],
        ["413420", "TX - GAINESVILLE 5 ENE"],
        ["413734", "TX - GREENVILLE KGVL RADIO"],
        ["413873", "TX - HALLETTSVILLE 2 N"],
        ["413992", "TX - HASKELL"],
        ["415018", "TX - LAMPASAS"],
        ["415196", "TX - LIBERTY"],
        ["415272", "TX - LLANO"],
        ["415429", "TX - LULING"],
        ["415618", "TX - MARSHALL"],
        ["415707", "TX - MCCAMEY"],
        ["415869", "TX - MEXIA"],
        ["415875", "TX - MIAMI"],
        ["416135", "TX - MULESHOE #1"],
        ["416276", "TX - NEW BRAUNFELS"],
        ["416794", "TX - PARIS"],
        ["416892", "TX - PECOS"],
        ["417079", "TX - PLAINVIEW"],
        ["417336", "TX - QUANAH 2 SW"],
        ["417622", "TX - RIO GRANDE CITY"],
        ["417945", "TX - SAN ANTONIO INTL AP"],
        ["418201", "TX - SEMINOLE"],
        ["418433", "TX - SNYDER"],
        ["418692", "TX - STRATFORD"],
        ["418910", "TX - TEMPLE"],
        ["419532", "TX - WEATHERFORD"],
        ["420086", "UT - ALTON"],
        ["420738", "UT - BLANDING"],
        ["420788", "UT - BLUFF"],
        ["421731", "UT - CORINNE"],
        ["422101", "UT - DESERET"],
        ["422253", "UT - DUCHESNE"],
        ["422592", "UT - ESCALANTE"],
        ["422726", "UT - FARMINGTON 3 NW"],
        ["422828", "UT - FILLMORE"],
        ["422996", "UT - FT DUCHESNE"],
        ["423418", "UT - GREEN RIVER AVIATION"],
        ["423611", "UT - HANKSVILLE"],
        ["423809", "UT - HEBER"],
        ["424508", "UT - KANAB"],
        ["424856", "UT - LAKETOWN"],
        ["425065", "UT - LEVAN"],
        ["425186", "UT - LOGAN UTAH ST UNIV"],
        ["425402", "UT - MANTI"],
        ["425477", "UT - MARYSVALE"],
        ["425733", "UT - MOAB"],
        ["425752", "UT - MODENA"],
        ["425826", "UT - MORGAN POWER & LIGHT"],
        ["426135", "UT - NEPHI"],
        ["426404", "UT - OGDEN PIONEER P H"],
        ["426601", "UT - PANGUITCH"],
        ["426686", "UT - PAROWAN PWR"],
        ["427260", "UT - RICHFIELD RADIO KSVC"],
        ["427516", "UT - ST GEORGE"],
        ["427559", "UT - SALINA 24 E"],
        ["427714", "UT - SCIPIO"],
        ["427729", "UT - SCOFIELD-SKYLINE MINE"],
        ["427909", "UT - SNAKE CREEK POWERHOUSE"],
        ["428119", "UT - SPANISH FORK PWR HOUSE"],
        ["428705", "UT - THOMPSON"],
        ["428771", "UT - TOOELE"],
        ["428973", "UT - UTAH LAKE LEHI"],
        ["429111", "UT - VERNAL 2SW"],
        ["429382", "UT - WENDOVER AP AWOS"],
        ["429595", "UT - WOODRUFF"],
        ["429717", "UT - ZION NP"],
        ["431081", "VT - BURLINGTON WSO AP"],
        ["431243", "VT - CAVENDISH"],
        ["431360", "VT - CHELSEA"],
        ["431580", "VT - CORNWALL"],
        ["432769", "VT - ENOSBURG FALLS"],
        ["437054", "VT - SAINT JOHNSBURY"],
        ["437607", "VT - SOUTH HERO"],
        ["437612", "VT - SOUTH LINCOLN"],
        ["440766", "VA - BLACKSBURG NWSO"],
        ["440993", "VA - BREMO BLUFF"],
        ["441209", "VA - BURKES GARDEN"],
        ["441593", "VA - CHARLOTTESVILLE 2W"],
        ["442208", "VA - DALE ENTERPRISE"],
        ["442245", "VA - DANVILLE"],
        ["442941", "VA - FARMVILLE 2 N"],
        ["443192", "VA - FREDERICKSBURG NP"],
        ["444101", "VA - HOPEWELL"],
        ["444128", "VA - HOT SPRINGS"],
        ["444876", "VA - LEXINGTON"],
        ["444909", "VA - LINCOLN"],
        ["446139", "VA - NORFOLK INTL AP"],
        ["446626", "VA - PENNINGTON GAP"],
        ["446712", "VA - PIEDMONT RSCH STN"],
        ["447338", "VA - ROCKY MT"],
        ["448062", "VA - STAUNTON WATER TRMTMT PLT"],
        ["449151", "VA - WILLIAMSBURG 2 N"],
        ["449263", "VA - WOODSTOCK 2 NE"],
        ["450008", "WA - ABERDEEN"],
        ["450587", "WA - BELLINGHAM 3 SSW"],
        ["450729", "WA - BLAINE"],
        ["450945", "WA - BUCKLEY 1 NE"],
        ["451233", "WA - CEDAR LAKE"],
        ["451276", "WA - CENTRALIA"],
        ["451484", "WA - CLEARBROOK"],
        ["451504", "WA - CLE ELUM"],
        ["451630", "WA - COLVILLE"],
        ["451666", "WA - CONCONULLY"],
        ["451939", "WA - CUSHMAN POWERHOUSE"],
        ["452007", "WA - DAVENPORT"],
        ["452030", "WA - DAYTON 1 WSW"],
        ["452505", "WA - ELLENSBURG"],
        ["452675", "WA - EVERETT"],
        ["452914", "WA - FORKS 1 E"],
        ["453222", "WA - GOLDENDALE"],
        ["454154", "WA - KENNEWICK"],
        ["454748", "WA - LONG BEACH EXP STN"],
        ["454764", "WA - LONGMIRE RAINIER NPS"],
        ["454769", "WA - LONGVIEW"],
        ["455224", "WA - MC MILLIN RSVR"],
        ["455946", "WA - NORTHPORT"],
        ["456039", "WA - ODESSA"],
        ["456096", "WA - OLGA 2 SE"],
        ["456610", "WA - POMEROY"],
        ["456624", "WA - PORT ANGELES"],
        ["456678", "WA - PORT TOWNSEND"],
        ["456789", "WA - PULLMAN 2 NW"],
        ["456914", "WA - RAYMOND 2 S"],
        ["457059", "WA - RITZVILLE 1 SSE"],
        ["457267", "WA - SAINT JOHN"],
        ["457458", "WA - SEATTLE URBAN SITE"],
        ["457507", "WA - SEDRO WOOLLEY"],
        ["457773", "WA - SNOQUALMIE FALLS"],
        ["457938", "WA - SPOKANE INTL AP"],
        ["458059", "WA - STEHEKIN 4 NW"],
        ["458207", "WA - SUNNYSIDE"],
        ["458773", "WA - VANCOUVER 4 NNE"],
        ["458928", "WA - WALLA WALLA FAA AP"],
        ["459012", "WA - WATERVILLE"],
        ["459074", "WA - WENATCHEE"],
        ["459238", "WA - WILBUR"],
        ["459376", "WA - WINTHROP 1 WSW"],
        ["461220", "WV - BUCKHANNON"],
        ["461330", "WV - CAIRO"],
        ["463544", "WV - GLENVILLE"],
        ["465224", "WV - LEWISBURG 3 N"],
        ["465626", "WV - MANNINGTON 8 WNW"],
        ["465707", "WV - MARTINSBURG E WV RGNL"],
        ["466867", "WV - PARSONS 1 NE"],
        ["466989", "WV - PICKENS 2 N"],
        ["467029", "WV - PINEVILLE"],
        ["468384", "WV - SPENCER"],
        ["469368", "WV - WELLSBURG WTR TRMT PL"],
        ["469610", "WV - WILLIAMSON"],
        ["469683", "WV - WINFIELD LOCKS"],
        ["470349", "WI - ASHLAND EXP FARM"],
        ["470991", "WI - BOWLER"],
        ["471078", "WI - BRODHEAD"],
        ["472001", "WI - DARLINGTON"],
        ["472839", "WI - FOND DU LAC"],
        ["473405", "WI - HANCOCK EXP FARM"],
        ["474546", "WI - LANCASTER 4 WSW"],
        ["475017", "WI - MANITOWOC"],
        ["475120", "WI - MARSHFIELD EXP FARM"],
        ["475255", "WI - MEDFORD"],
        ["475474", "WI - MILWAUKEE MT MARY COL"],
        ["475516", "WI - MINOCQUA"],
        ["475808", "WI - NEILLSVILLE 3 SW"],
        ["475932", "WI - NEW LONDON"],
        ["476208", "WI - OCONTO 4 W"],
        ["476330", "WI - OSHKOSH"],
        ["476718", "WI - PORTAGE"],
        ["476827", "WI - PRAIRIE DU CHIEN"],
        ["476922", "WI - RACINE"],
        ["478027", "WI - SPOONER AG RES STN"],
        ["478110", "WI - STANLEY"],
        ["478827", "WI - VIROQUA"],
        ["478919", "WI - WATERTOWN"],
        ["480140", "WY - ALTA 1 NNW"],
        ["480540", "WY - BASIN"],
        ["480552", "WY - BATES CREEK"],
        ["481675", "WY - CHEYENNE WSFO AP"],
        ["481730", "WY - CHUGWATER"],
        ["481840", "WY - CODY"],
        ["481905", "WY - COLONY"],
        ["482595", "WY - DIVERSION DAM"],
        ["482715", "WY - DUBOIS"],
        ["483100", "WY - EVANSTON 1 E"],
        ["484065", "WY - GREEN RIVER"],
        ["485345", "WY - LAKE YELLOWSTONE"],
        ["485415", "WY - LARAMIE RGNL AP"],
        ["485830", "WY - LUSK 2 SW"],
        ["486195", "WY - MIDWEST"],
        ["486440", "WY - MORAN 5 WNW"],
        ["486660", "WY - NEWCASTLE"],
        ["487115", "WY - PAVILLION"],
        ["487240", "WY - PINE BLUFFS 5W"],
        ["487260", "WY - PINEDALE"],
        ["487388", "WY - POWELL FLD STN"],
        ["487760", "WY - RIVERTON"],
        ["487845", "WY - ROCK SPRINGS AP"],
        ["487990", "WY - SARATOGA"],
        ["488160", "WY - SHERIDAN FLD STN"],
        ["488995", "WY - TORRINGTON EXP FARM"],
        ["489615", "WY - WHEATLAND 4 N"],
        ["489770", "WY - WORLAND"],
        ["489905", "WY - YELLOWSTONE PK MAMMOTH"]
    ]

    formInput = Ext.extend(Ext.form.Field, {});


    var valOne = 1;

    variableSelect = Ext.extend(Ext.form.ComboBox, {
        forceSelection: true,
        triggerAction: 'all',
        listeners: {
            change: function () {
                var myCombo = Ext.getCmp('latLon_timeseries_span');
                var myCombo2 = Ext.getCmp('region_timeseries_span');


                if (Ext.getCmp('latLon_timeseries_variable').getValue() == 3 || Ext.getCmp('latLon_timeseries_variable').getValue() == 4) {
                    // If SPI is chosen more month spans are populated
                    myCombo.store.loadData(spiSpanStore);
                } else {
                    // Reload original 12 month span
                    myCombo.store.loadData(spanStore);



                }
                if (Ext.getCmp('region_timeseries_variable').getValue() == 3 || Ext.getCmp('region_timeseries_variable').getValue() == 4) {
                    // If SPI is chosen more month spans are populated
                    myCombo2.store.loadData(spiSpanStore);
                } else {
                    // Reload original 12 month span
                    myCombo2.store.loadData(spanStore);
                }


            }





        },
        store: [
            ['1', "Temperature"],
            ['2', "Precipitation"],
            ['3', "SPI"],
            ['4', "SPEI"],
            ['5', "PDSI"],
            ['6', "Palmer Z-Index"],
            ['7', "Self Calibrated PDSI"]
        ]
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
            ['12', "December"]
        ]
    });

    spanSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all',
        store: spanStore
    });

    regionSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all'


    });


    // Create dynamic year array      
    var currentDateArr = new Date();
    var currentYearArr = currentDateArr.getFullYear();
    var xArr = 1895;
    var yearArr = [];

    for (i = xArr; i < currentYearArr + 1; i++) {
        yearArr.push([i, i.toString()])
    }


    // Current month selector
    var currentMonthArr = currentDateArr.getMonth();

    yearSelect = Ext.extend(Ext.form.ComboBox, {
        width: 125,
        forceSelection: true,
        triggerAction: 'all',
        store: yearArr
    });



    // Process when Submit button is pressed
    dataSubmit = Ext.extend(Ext.Button, {

        handler: function () {

            // Grab current month and year and day
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth();
            var currentDate = new Date().getDate();




            // Latitude Form Checker
            if (Ext.getCmp('latLon_timeseries_lat').getValue() > 24.0625 && Ext.getCmp('latLon_timeseries_lat').getValue() < 49.89659882) {

                LAT = Ext.getCmp('latLon_timeseries_lat').getValue()



            } else {
                LAT = NULL;

                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');
            }

            // Longitude Form Checker
            if (Ext.getCmp('latLon_timeseries_lon').getValue() > -125.02083588 && Ext.getCmp('latLon_timeseries_lon').getValue() < -66.52440643) {
                LON = Ext.getCmp('latLon_timeseries_lon').getValue()


            } else {
                LON = NULL;
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');

            }


            // Use when data needs
            if (Ext.getCmp('latLon_timeseries_monthselect').getValue() >= currentMonth + 1 && Ext.getCmp('latLon_timeseries_endyear').getValue() == currentYear) {
                if (currentDate <= 10) {
                    Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);

                    MONTH = NULL;

                    ENDYEAR = NULL;
                }
                Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);
                MONTH = NULL;
                ENDYEAR = NULL;

            } else {
                MONTH = Ext.getCmp('latLon_timeseries_monthselect').getValue()
                ENDYEAR = Ext.getCmp('latLon_timeseries_endyear').getValue()
            }

            // Years need to be different and end year needs to be greater than start year
            if (Ext.getCmp('latLon_timeseries_startyear').getValue() >= Ext.getCmp('latLon_timeseries_endyear').getValue()) {
                Ext.MessageBox.alert('Date Error', 'Ending year needs to be greater than the starting year.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;


            } else {
                //alert('worked');
            }

            // Year span should be at least 5 years
            if (Ext.getCmp('latLon_timeseries_endyear').getValue() - Ext.getCmp('latLon_timeseries_startyear').getValue() < 5) {
                Ext.MessageBox.alert('Date Error', 'Select a time span greater than 5 years.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;


            } else {
                //alert('worked');
            }


            // Variable Checker
            if (Ext.getCmp('latLon_timeseries_variable').getValue() == 1 || Ext.getCmp('latLon_timeseries_variable').getValue() == 2 || Ext.getCmp('latLon_timeseries_variable').getValue() == 3 || Ext.getCmp('latLon_timeseries_variable').getValue() == 4 || Ext.getCmp('latLon_timeseries_variable').getValue() == 5 || Ext.getCmp('latLon_timeseries_variable').getValue() == 6 || Ext.getCmp('latLon_timeseries_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('latLon_timeseries_variable').getValue()
            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('latLon_timeseries_span').getValue() >= 13 && Ext.getCmp('latLon_timeseries_variable').getValue() < 3 || Ext.getCmp('latLon_timeseries_span').getValue() >= 13 && Ext.getCmp('latLon_timeseries_variable').getValue() > 4) {
                Ext.MessageBox.alert('Span Error', 'Month spans greater than 12 are only for SPI and SPEI datasets, please chose a month span of 12 or less months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('latLon_timeseries_span').getValue()

            }
            if (Ext.getCmp('latLon_timeseries_span').getValue() > 72) {
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('latLon_timeseries_span').getValue()
            }

            // Start Year Checker
            if (Ext.getCmp('latLon_timeseries_startyear').getValue() < 1895 || Ext.getCmp('latLon_timeseries_startyear').getValue() > currentYear) {
                STARTYEAR = NULL;
            } else {
                STARTYEAR = Ext.getCmp('latLon_timeseries_startyear').getValue()
            }

            // Force running average to be an integer in order to work
            RUNAVG = Ext.getCmp('latLon_timeseries_runavg').getValue();
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
                html: '<iframe src="' + URL + '/bargraph/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="600px" width="100%" scrolling="no" frameborder="0"></iframe><iframe src="' + URL + '/text/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="4500px" width="99%" scrolling="no" frameborder="0" "></iframe><br>',
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
            if (Ext.getCmp('latLon_allmonths_lat').getValue() > 24.0625 && Ext.getCmp('latLon_allmonths_lat').getValue() < 49.89659882) {

                LAT = Ext.getCmp('latLon_allmonths_lat').getValue()



            } else {
                LAT = NULL;

                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');
            }

            // Longitude Form Checker
            if (Ext.getCmp('latLon_allmonths_lon').getValue() > -125.02083588 && Ext.getCmp('latLon_allmonths_lon').getValue() < -66.52440643) {
                LON = Ext.getCmp('latLon_allmonths_lon').getValue()


            } else {
                LON = NULL;
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');

            }
            // Data Date Checker - Month and EndYear
            //if (currentDate < 10 && Ext.getCmp('latLon_timeseries_monthselect').getValue() >= (currentMonth+1) && Ext.getCmp('latLon_timeseries_endyear').getValue() == currentYear) {



            // Variable Checker
            if (Ext.getCmp('latLon_allmonths_variable').getValue() == 1 || Ext.getCmp('latLon_allmonths_variable').getValue() == 2 || Ext.getCmp('latLon_allmonths_variable').getValue() == 3 || Ext.getCmp('latLon_allmonths_variable').getValue() == 4 || Ext.getCmp('latLon_allmonths_variable').getValue() == 5 || Ext.getCmp('latLon_allmonths_variable').getValue() == 6 || Ext.getCmp('latLon_allmonths_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('latLon_allmonths_variable').getValue()
            } else {
                VARIABLE = NULL;
            }


            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: parseFloat(LAT).toFixed(2) + "N, " + (Math.abs(LON)).toFixed(2) + "W",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/all/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '" height="4500px" width="99%" scrolling="no" frameborder="0"></iframe>',
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
            if (Ext.getCmp('latLon_monthlysequences_lat').getValue() > 24.0625 && Ext.getCmp('latLon_monthlysequences_lat').getValue() < 49.89659882) {

                LAT = Ext.getCmp('latLon_monthlysequences_lat').getValue()



            } else {
                LAT = NULL;

                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');
            }

            // Longitude Form Checker
            if (Ext.getCmp('latLon_monthlysequences_lon').getValue() > -125.02083588 && Ext.getCmp('latLon_monthlysequences_lon').getValue() < -66.52440643) {
                LON = Ext.getCmp('latLon_monthlysequences_lon').getValue()


            } else {
                LON = NULL;
                Ext.MessageBox.alert('Coordinate Input Error!', 'Click and drag red marker to a point inside the Contiguous US.');

            }


            // Variable Checker
            if (Ext.getCmp('latLon_monthylsequences_variable').getValue() == 1 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 2 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 3 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 4 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 5 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 6 || Ext.getCmp('latLon_monthylsequences_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('latLon_monthylsequences_variable').getValue()

            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('latLon_monthylsequences_priorspan').getValue() > 72 || Ext.getCmp('latLon_monthylsequences_variable').getValue() < 1) {
                Ext.MessageBox.alert('Span Error', 'Select a prior month span from 1 to 72 months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('latLon_monthylsequences_priorspan').getValue()


            }


            if (Ext.getCmp('latLon_monthylsequences_month').getValue() > currentMonth && Ext.getCmp('latLon_monthylsequences_year').getValue() == currentYear ) {
                Ext.MessageBox.alert('Date error', 'Data does not exist - please select an earlier date (month, year).');
                MONTH = NULL;
            	YEAR = NULL;
            } else {
                      MONTH = Ext.getCmp('latLon_monthylsequences_month').getValue();
            YEAR = Ext.getCmp('latLon_monthylsequences_year').getValue();

            }



            if (SPAN == 2 && MONTH <= 2 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 2 months select at least March, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 3 && MONTH <= 3 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 3 months select at least April, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 4 && MONTH <= 4 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 4 months select at least May, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 5 && MONTH <= 5 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 5 months select at least June, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 6 && MONTH <= 6 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 6 months select at least July, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 7 && MONTH <= 7 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 7 months select at least August, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 8 && MONTH <= 8 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 8 months select at least September, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 9 && MONTH <= 9 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 9 months select at least October, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 10 && MONTH <= 10 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 10 months select at least November, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 11 && MONTH <= 11 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 11 months select at least December, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 12) {

                if (YEAR == 1895) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 12 months select at least January, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }


            }


            if (SPAN == 15) {

                if (YEAR < 1896) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 15 months select at least April, 1896.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1896 && MONTH < 4) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 15 months select at least April, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 18) {

                if (YEAR < 1896) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 18 months select at least July, 1896.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1896 && MONTH < 7) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 18 months select at least July, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 24) {

                if (YEAR < 1897) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 24 months select at least January, 1897.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }



            if (SPAN == 30) {

                if (YEAR < 1897) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 30 months select at least July, 1897.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1897 && MONTH < 7) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 30 months select at least July, 1897.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 36) {

                if (YEAR < 1898) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 36 months select at least January, 1898.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }

            if (SPAN == 48) {

                if (YEAR < 1898) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 48 months select at least January, 1898.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }

            var monthCheckerArr = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            var currentDateChecker = new Date();
            var currentYearChecker = currentDateChecker.getFullYear();
            var currentMonthChecker = currentDateChecker.getMonth();
            var currentDayChecker = currentDateChecker.getDay();






            if (YEAR >= currentYearChecker) {
                if (currentDayChecker > 2) {

                    if (MONTH >= currentMonthChecker + 1) {
                        Ext.MessageBox.alert('Span Error', 'To get recent data select up through ' + monthCheckerArr[currentMonthChecker - 1] + ',' + currentYearChecker + '.');
                        MONTH = NULL;
                        SPAN = NULL;
                    }
                }

                if (currentDayChecker < 2) {

                    if (MONTH > currentMonthChecker) {
                        Ext.MessageBox.alert('Span Error', 'To get recent data select up through ' + monthCheckerArr[currentMonthChecker - 1] + ',' + currentYearChecker + '.');
                        MONTH = NULL;
                        SPAN = NULL;
                    }
                }




            }




            //alert('works');
            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: parseFloat(LAT).toFixed(2) + "N, " + (Math.abs(LON)).toFixed(2) + "W",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/climatology/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&span=' + SPAN + '&month=' + MONTH + '&year=' + YEAR + '" height="600px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/lastmonths/?lat=' + LAT + '&lon=' + LON + '&variable=' + VARIABLE + '&span=' + SPAN + '&month=' + MONTH + '&year=' + YEAR + '" height="4500px" width="99%" scrolling="no" frameborder="0" "></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });

    // Process when Submit button is pressed
    dataSubmit4 = Ext.extend(Ext.Button, {
        handler: function () {


            // Grab current month and year and day
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth();
            var currentDate = new Date().getDate();






            if (Ext.getCmp('region_timeseries_map').getValue() == '' || Ext.getCmp('region_timeseries_map').getValue() == 'Select State' || Ext.getCmp('region_timeseries_map').getValue() == 'Select County' || Ext.getCmp('region_timeseries_map').getValue() == 'Select HUC' || Ext.getCmp('region_timeseries_map').getValue() == 'Select DIV' || Ext.getCmp('region_timeseries_map').getValue() == 'Select PSA' || Ext.getCmp('region_timeseries_map').getValue() == 'Select Station' || Ext.getCmp('region_timeseries_map').getValue() == 'Null') {
                Ext.MessageBox.alert('Region Error', 'Click on a polygon region on the map to autofill in region combobox or simply select a region from region dropdwon combobox menu.');
                REGION = NULL;
            } else {
                REGION = Ext.getCmp('region_timeseries_map').getValue();
            }






            // Data Date Checker - Month and EndYear
            //if (currentDate < 10 && Ext.getCmp('latLon_timeseries_monthselect').getValue() >= (currentMonth+1) && Ext.getCmp('latLon_timeseries_endyear').getValue() == currentYear) {

            // Use when data needs
            if (Ext.getCmp('region_timeseries_monthselect').getValue() >= currentMonth + 1 && Ext.getCmp('region_timeseries_endyear').getValue() == currentYear) {
                if (currentDate <= 10) {
                    Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);

                    MONTH = NULL;

                    ENDYEAR = NULL;
                }
                Ext.MessageBox.alert('Date Error', 'Data for ' + currentMonth + '/' + currentYear + ' should be available by ' + (currentMonth + 1) + '/' + currentDate + '/' + currentYear);
                MONTH = NULL;
                ENDYEAR = NULL;

            } else {
                MONTH = Ext.getCmp('region_timeseries_monthselect').getValue()
                ENDYEAR = Ext.getCmp('region_timeseries_endyear').getValue()
            }

            // Years need to be different and end year needs to be greater than start year
            if (Ext.getCmp('region_timeseries_startyear').getValue() >= Ext.getCmp('region_timeseries_endyear').getValue()) {
                Ext.MessageBox.alert('Date Error', 'Ending year needs to be greater than the starting year.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;


            } else {
                //alert('worked');
            }

            // Year span should be at least 5 years
            if (Ext.getCmp('region_timeseries_endyear').getValue() - Ext.getCmp('region_timeseries_startyear').getValue() < 5) {
                Ext.MessageBox.alert('Date Error', 'Select a time span greater than 5 years.');
                ENDYEAR = NULL;
                STARTYEAR = NULL;


            } else {
                //alert('worked');
            }


            // Variable Checker
            if (Ext.getCmp('region_timeseries_variable').getValue() == 1 || Ext.getCmp('region_timeseries_variable').getValue() == 2 || Ext.getCmp('region_timeseries_variable').getValue() == 3 || Ext.getCmp('region_timeseries_variable').getValue() == 4 || Ext.getCmp('region_timeseries_variable').getValue() == 5 || Ext.getCmp('region_timeseries_variable').getValue() == 6 || Ext.getCmp('region_timeseries_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('region_timeseries_variable').getValue()
            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('region_timeseries_span').getValue() >= 13 && Ext.getCmp('region_timeseries_variable').getValue() < 3 || Ext.getCmp('region_timeseries_span').getValue() >= 13 && Ext.getCmp('region_timeseries_variable').getValue() > 4) {
                Ext.MessageBox.alert('Span Error', 'Month spans greater than 12 are only for SPI and SPEI datasets, please chose a month span of 12 or less months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('region_timeseries_span').getValue()

            }
            if (Ext.getCmp('region_timeseries_span').getValue() > 72) {
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('region_timeseries_span').getValue()
            }

            // Start Year Checker
            if (Ext.getCmp('region_timeseries_startyear').getValue() < 1895 || Ext.getCmp('region_timeseries_startyear').getValue() > currentYear) {
                STARTYEAR = NULL;
            } else {
                STARTYEAR = Ext.getCmp('region_timeseries_startyear').getValue()
            }

            // Force running average to be an integer in order to work
            RUNAVG = Ext.getCmp('region_timeseries_runavg').getValue();
            if (RUNAVG < 2 || RUNAVG / RUNAVG != 1 || RUNAVG > (ENDYEAR - STARTYEAR)) {
                RUNAVG = 0;
            } else {
                RUNAVG = RUNAVG;
            }


            //alert('works');
            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: "Region",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/regionsBargraph/?region=' + REGION + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="600px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/regionText/?region=' + REGION + '&variable=' + VARIABLE + '&start_year=' + STARTYEAR + '&end_year=' + ENDYEAR + '&month=' + MONTH + '&span=' + SPAN + '&run_avg=' + RUNAVG + '" height="4500px" width="99%" scrolling="no" frameborder="0" "></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });



    // Process when Submit button is pressed
    dataSubmit5 = Ext.extend(Ext.Button, {
        handler: function () {

            // Grab current month and year and day
            //var currentYear  = new Date().getFullYear();  
            //var currentMonth = new Date().getMonth(); 
            //var currentDate = new Date().getDate();


            // Data Date Checker - Month and EndYear
            //if (currentDate < 10 && Ext.getCmp('latLon_timeseries_monthselect').getValue() >= (currentMonth+1) && Ext.getCmp('latLon_timeseries_endyear').getValue() == currentYear) {


            if (Ext.getCmp('region_allmonths_map').getValue() == '' || Ext.getCmp('region_allmonths_map').getValue() == 'Select State' || Ext.getCmp('region_allmonths_map').getValue() == 'Select County' || Ext.getCmp('region_allmonths_map').getValue() == 'Select HUC' || Ext.getCmp('region_allmonths_map').getValue() == 'Select DIV' || Ext.getCmp('region_allmonths_map').getValue() == 'Select PSA' || Ext.getCmp('region_allmonths_map').getValue() == 'Select Station' || Ext.getCmp('region_allmonths_map').getValue() == 'Null') {
                Ext.MessageBox.alert('Region Error', 'Click on a polygon region on the map to autofill in region combobox or simply select a region from region dropdwon combobox menu.');
                REGION = NULL;
            } else {
                REGION = Ext.getCmp('region_allmonths_map').getValue();
            }
            // Variable Checker
            if (Ext.getCmp('region_allmonths_variable').getValue() == 1 || Ext.getCmp('region_allmonths_variable').getValue() == 2 || Ext.getCmp('region_allmonths_variable').getValue() == 3 || Ext.getCmp('region_allmonths_variable').getValue() == 4 || Ext.getCmp('region_allmonths_variable').getValue() == 5 || Ext.getCmp('region_allmonths_variable').getValue() == 6 || Ext.getCmp('region_allmonths_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('region_allmonths_variable').getValue()
            } else {
                VARIABLE = NULL;
            }


            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: "Region",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><iframe src="' + URL + '/regionsAll/?region=' + REGION + '&variable=' + VARIABLE + '" height="4500px" width="99%" scrolling="no" frameborder="0"></iframe>',
                closable: true
            }).show(); // Set new tab active                
        }
    });




    // Process when Submit button is pressed
    dataSubmit6 = Ext.extend(Ext.Button, {
        handler: function () {

            // Grab current month and year and day
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth();
            var currentDate = new Date().getDate();



            if (Ext.getCmp('region_monthylsequences_map').getValue() == '' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select State' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select County' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select HUC' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select DIV' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select PSA' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Select Station' || Ext.getCmp('region_monthylsequences_map').getValue() == 'Null') {
                Ext.MessageBox.alert('Region Error', 'Click on a polygon region on the map to autofill in region combobox or simply select a region from region dropdwon combobox menu.');
                REGION = NULL;
            } else {
                REGION = Ext.getCmp('region_monthylsequences_map').getValue();
            }
            // Variable Checker
            if (Ext.getCmp('region_monthylsequences_variable').getValue() == 1 || Ext.getCmp('region_monthylsequences_variable').getValue() == 2 || Ext.getCmp('region_monthylsequences_variable').getValue() == 3 || Ext.getCmp('region_monthylsequences_variable').getValue() == 4 || Ext.getCmp('region_monthylsequences_variable').getValue() == 5 || Ext.getCmp('region_monthylsequences_variable').getValue() == 6 || Ext.getCmp('region_monthylsequences_variable').getValue() == 7) {
                VARIABLE = Ext.getCmp('region_monthylsequences_variable').getValue()

            } else {
                VARIABLE = NULL;
            }

            // Span Checker
            if (Ext.getCmp('region_monthylsequences_priorspan').getValue() > 72 || Ext.getCmp('region_monthylsequences_variable').getValue() < 1) {
                Ext.MessageBox.alert('Span Error', 'Select a prior month span from 1 to 72 months.');
                SPAN = NULL;
            } else {
                SPAN = Ext.getCmp('region_monthylsequences_priorspan').getValue()

            }






            if (Ext.getCmp('region_monthylsequences_month').getValue() > currentMonth && Ext.getCmp('region_monthylsequences_year').getValue() == currentYear ) {
                Ext.MessageBox.alert('Date error', 'Data does not exist - please select an earlier date (month, year).');
                MONTH = NULL;
            	YEAR = NULL;
            } else {
                MONTH = Ext.getCmp('region_monthylsequences_month').getValue();
            	YEAR = Ext.getCmp('region_monthylsequences_year').getValue();

            }





            

            if (SPAN == 2 && MONTH <= 2 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 2 months select at least March, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 3 && MONTH <= 3 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 3 months select at least April, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 4 && MONTH <= 4 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 4 months select at least May, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 5 && MONTH <= 5 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 5 months select at least June, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 6 && MONTH <= 6 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 6 months select at least July, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 7 && MONTH <= 7 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 7 months select at least August, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 8 && MONTH <= 8 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 8 months select at least September, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 9 && MONTH <= 9 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 9 months select at least October, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 10 && MONTH <= 10 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 10 months select at least November, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 11 && MONTH <= 11 && YEAR <= 1895) {
                Ext.MessageBox.alert('Span Error', 'To get earliest prior 11 months select at least December, 1895.');
                MONTH = NULL;
                SPAN = NULL;
            }

            if (SPAN == 12) {

                if (YEAR == 1895) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 12 months select at least January, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }


            }


            if (SPAN == 15) {

                if (YEAR < 1896) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 15 months select at least April, 1896.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1896 && MONTH < 4) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 15 months select at least April, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 18) {

                if (YEAR < 1896) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 18 months select at least July, 1896.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1896 && MONTH < 7) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 18 months select at least July, 1896.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 24) {

                if (YEAR < 1897) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 24 months select at least January, 1897.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }



            if (SPAN == 30) {

                if (YEAR < 1897) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 30 months select at least July, 1897.');

                    MONTH = NULL;
                    SPAN = NULL;
                }

                if (YEAR == 1897 && MONTH < 7) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 30 months select at least July, 1897.');
                    MONTH = NULL;
                    SPAN = NULL;
                }

            }

            if (SPAN == 36) {

                if (YEAR < 1898) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 36 months select at least January, 1898.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }

            if (SPAN == 48) {

                if (YEAR < 1898) {
                    Ext.MessageBox.alert('Span Error', 'To get earliest prior 48 months select at least January, 1898.');

                    MONTH = NULL;
                    SPAN = NULL;
                }


            }

            var monthCheckerArr = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            var currentDateChecker = new Date();
            var currentYearChecker = currentDateChecker.getFullYear();
            var currentMonthChecker = currentDateChecker.getMonth();
            var currentDayChecker = currentDateChecker.getDay();






            if (YEAR >= currentYearChecker) {
                if (currentDayChecker > 2) {

                    if (MONTH >= currentMonthChecker + 1) {
                        Ext.MessageBox.alert('Span Error', 'To get recent data select up through ' + monthCheckerArr[currentMonthChecker - 1] + ',' + currentYearChecker + '.');
                        MONTH = NULL;
                        SPAN = NULL;
                    }
                }

                if (currentDayChecker < 2) {

                    if (MONTH > currentMonthChecker) {
                        Ext.MessageBox.alert('Span Error', 'To get recent data select up through ' + monthCheckerArr[currentMonthChecker - 1] + ',' + currentYearChecker + '.');
                        MONTH = NULL;
                        SPAN = NULL;
                    }
                }




            }
            //alert('works');
            // Render new tabbed panel 
            Ext.getCmp('tabPanel').add({
                title: "Region",
                autoScroll: true,
                //////Set this to active when text is rendered with plots
                html: '<iframe src="' + URL + '/wait/" height="50px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/climatologyRegions/?region=' + REGION + '&variable=' + VARIABLE + '&span=' + SPAN + '&month=' + MONTH + '&year=' + YEAR + '" height="600px" width="100%" scrolling="no" frameborder="0"></iframe><br><iframe src="' + URL + '/lastmonthsRegions/?region=' + REGION + '&variable=' + VARIABLE + '&span=' + SPAN + '&month=' + MONTH + '&year=' + YEAR + '" height="4500px" width="99%" scrolling="no" frameborder="0" "></iframe>',
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






    // Access help video window
    helpVideo = Ext.extend(Ext.Button, {
        handler: function () {

            var win = new Ext.Window({
                title: "Help Video",
                width: 750,
                height: 750,
                maximizable: true,
                id: 'autoload-win',

                autoScroll: true,
                html: '<iframe src="' + URL + '/media/video/help.mp4" height="100%" width="100%" scrolling="no"</iframe>'
            });

            win.show()
        }
    });



    var radioPanel = new Ext.FormPanel({

        title: "Select Data Retrieval Method",
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            labelStyle: 'padding-left:4px;'
        },
        collapsible: true,
        items: [{
            xtype: 'radiogroup',
            fieldLabel: 'Map Selection',
            columns: 1,
            vertical: true,
            items: [{
                boxLabel: 'Points (nearest 4x4-km pixel)',
                name: 'rb',
                inputValue: '1',
                id: 'point_radio',
                checked: true,
                onClick: function () {

                    Ext.MessageBox.alert('Point Data', 'Click anywhere on the map to add a marker.');

                    panel.setActiveTab(0);



                    latLon_timeseries_panel.expand();
                    latLon_timeseries_panel.show();
                    latLon_allmonths_panel.show();
                    latLon_monthlysequences_panel.show();
                    region_timeseries_panel.hide();
                    region_allmonths_panel.hide();
                    region_monthylsequences_panel.hide();
                }
            }, {
                boxLabel: 'States',
                name: 'rb',
                inputValue: '2',
                id: 'state_radio',
                onClick: function () {

                    Ext.MessageBox.alert('State Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');

                    panel.setActiveTab(0);

                    var stateRegionCombo = Ext.getCmp('region_timeseries_map');
                    var stateRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var stateRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 150
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 150
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 150
                    });


                    stateRegionCombo.setValue('Select State');
                    stateRegionCombo2.setValue('Select State');
                    stateRegionCombo3.setValue('Select State');




                    stateRegionCombo.store.loadData(stateStore);
                    stateRegionCombo2.store.loadData(stateStore);
                    stateRegionCombo3.store.loadData(stateStore);








                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();

                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            }, {
                boxLabel: 'Counties',
                name: 'rb',
                inputValue: '3',
                id: 'county_radio',
                onClick: function () {
                    Ext.MessageBox.alert('County Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');

                    panel.setActiveTab(0);


                    var countyRegionCombo = Ext.getCmp('region_timeseries_map');
                    var countyRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var countyRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 200
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 200
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 200
                    });

                    countyRegionCombo.setValue('Select County');
                    countyRegionCombo2.setValue('Select County');
                    countyRegionCombo3.setValue('Select County');


                    countyRegionCombo.store.loadData(countyStore);
                    countyRegionCombo2.store.loadData(countyStore);
                    countyRegionCombo3.store.loadData(countyStore);

                    if (region_timeseries_panel)


                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();

                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            }, {
                boxLabel: 'Hydrologic Units',
                name: 'rb',
                inputValue: '4',
                id: 'huc_radio',
                onClick: function () {
                    Ext.MessageBox.alert('Hydrologic Unit Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');

                    panel.setActiveTab(0);


                    var hucRegionCombo = Ext.getCmp('region_timeseries_map');
                    var hucRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var hucRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 330
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 330
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 330
                    });

                    hucRegionCombo.setValue('Select HUC');
                    hucRegionCombo2.setValue('Select HUC');
                    hucRegionCombo3.setValue('Select HUC');


                    hucRegionCombo.store.loadData(hucStore);
                    hucRegionCombo2.store.loadData(hucStore);
                    hucRegionCombo3.store.loadData(hucStore);


                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();
                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            }, {
                boxLabel: 'Climate Divisions',
                name: 'rb',
                inputValue: '5',
                id: 'div_radio',
                onClick: function () {
                    Ext.MessageBox.alert('Climate Division Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');

                    panel.setActiveTab(0);


                    var divRegionCombo = Ext.getCmp('region_timeseries_map');
                    var divRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var divRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 250
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 250
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 250
                    });

                    divRegionCombo.setValue('Select DIV');
                    divRegionCombo2.setValue('Select DIV');
                    divRegionCombo3.setValue('Select DIV');


                    divRegionCombo.store.loadData(divStore);
                    divRegionCombo2.store.loadData(divStore);
                    divRegionCombo3.store.loadData(divStore);


                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();
                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            }, {
                boxLabel: 'Predictive Services Areas',
                name: 'rb',
                inputValue: '6',
                id: 'psa_radio',
                onClick: function () {

                    Ext.MessageBox.alert('Predictive Services Area Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');

                    panel.setActiveTab(0);


                    var psaRegionCombo = Ext.getCmp('region_timeseries_map');
                    var psaRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var psaRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 350
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 350
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 350
                    });

                    psaRegionCombo.setValue('Select PSA');
                    psaRegionCombo2.setValue('Select PSA');
                    psaRegionCombo3.setValue('Select PSA');


                    psaRegionCombo.store.loadData(psaStore);
                    psaRegionCombo2.store.loadData(psaStore);
                    psaRegionCombo3.store.loadData(psaStore);

                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();
                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            },


            {
                boxLabel: 'US Historical Climatology Network (USHCN) Stations',
                name: 'rb',
                inputValue: '6',
                id: 'station_radio',
                onClick: function () {
                    Ext.MessageBox.alert('Station Data', 'Data layer is loading onto map. May take several minutes to please be patient. Try zooming in and out on the map if layer appears segmented.');
                    panel.setActiveTab(0);


                    var stationRegionCombo = Ext.getCmp('region_timeseries_map');
                    var stationRegionCombo2 = Ext.getCmp('region_allmonths_map');
                    var stationRegionCombo3 = Ext.getCmp('region_monthylsequences_map');

                    Ext.apply(Ext.getCmp('region_timeseries_map'), {
                        listWidth: 250
                    });
                    Ext.apply(Ext.getCmp('region_allmonths_map'), {
                        listWidth: 250
                    });
                    Ext.apply(Ext.getCmp('region_monthylsequences_map'), {
                        listWidth: 250
                    });

                    stationRegionCombo.setValue('Select Station');
                    stationRegionCombo2.setValue('Select Station');
                    stationRegionCombo3.setValue('Select Station');


                    stationRegionCombo.store.loadData(stationStore);
                    stationRegionCombo2.store.loadData(stationStore);
                    stationRegionCombo3.store.loadData(stationStore);


                    latLon_timeseries_panel.hide();
                    latLon_allmonths_panel.hide();
                    latLon_monthlysequences_panel.hide();
                    region_timeseries_panel.expand();
                    region_timeseries_panel.show();
                    region_allmonths_panel.show();
                    region_monthylsequences_panel.show();
                    accordionEast.doLayout()
                }
            }


            ]


        }]
    });


    // Variable help drop down menu
    var item0 = {
        xtype: 'fieldset',
        title: 'Variable Information',
        id: 'TEST',
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
    var latLon_timeseries_panel = new Ext.FormPanel({
        title: "Time Series",
        labelWidth: 55,
        collapsible: true,

        items: [item0, new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'latLon_timeseries_lat',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'latLon_timeseries_lon',
            width: 135
        }), new variableSelect({
            name: 'variable',
            editable: false,
            fieldLabel: 'Variable',
            value: '1',
            id: 'latLon_timeseries_variable',
            width: 135
        }), new yearSelect({
            name: 'startyear',
            editable: false,
            fieldLabel: 'Start Year',
            value: 1895,
            id: 'latLon_timeseries_startyear',
            width: 135
        }), new yearSelect({
            name: 'endyear',
            editable: false,
            fieldLabel: 'End Year',
            value: 1895 + (yearArr.length - 1),
            id: 'latLon_timeseries_endyear',
            width: 135
        }), new monthSelect({
            name: 'month',
            editable: false,
            fieldLabel: 'Month',
            value: currentMonthArr,
            id: 'latLon_timeseries_monthselect',
            width: 135
        }), new spanSelect({
            name: 'span',
            editable: false,
            fieldLabel: 'Span',
            value: '1',
            id: 'latLon_timeseries_span',
            width: 135
        }), new formInput({
            name: 'runavg',
            fieldLabel: 'Running Average (Years)',
            id: 'latLon_timeseries_runavg',
            width: 135
        }), new dataSubmit({ // must be last
            text: 'Submit!'

        })

        ],
        contentEl: 'time_series'
    });



    // Setup forms and comboboxes for all point data
    var latLon_allmonths_panel = new Ext.FormPanel({
        title: "All Months",
        labelWidth: 55,
        //cls: 'empty',
        items: [
        new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'latLon_allmonths_lat',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'latLon_allmonths_lon',
            width: 135
        }), new variableSelect({
            editable: false,
            name: 'variable2',
            fieldLabel: 'Variable',
            value: '1',
            id: 'latLon_allmonths_variable',
            width: 135
        }), new dataSubmit2({ // must be last
            text: 'Submit!'
        })],
        contentEl: 'all_data'
    });


    // Setup forms and comboboxes for point selection
    var latLon_monthlysequences_panel = new Ext.FormPanel({
        title: "Monthly Sequences",
        labelWidth: 55,
        items: [new formInput({
            name: 'lat',
            fieldLabel: 'Latitude',
            id: 'latLon_monthlysequences_lat',
            width: 135
        }), new formInput({
            name: 'lon',
            fieldLabel: 'Longitude',
            id: 'latLon_monthlysequences_lon',
            width: 135
        }), new variableSelect({
            name: 'variable',
            editable: false,
            fieldLabel: 'Variable',
            value: '1',
            id: 'latLon_monthylsequences_variable',
            width: 135
        }), new spanSelect({
            name: 'MONTHS',
            editable: false,
            store: monthStore,
            fieldLabel: 'Month',
            value: currentMonthArr.toString(),
            id: 'latLon_monthylsequences_month',
            width: 135
        }), new yearSelect({
            name: 'startyear',
            fieldLabel: 'Year',
            editable: false,  
            value: 1895 + (yearArr.length - 1),
            id: 'latLon_monthylsequences_year',
            width: 135
        }), new spanSelect({
            name: 'span',
            editable: false,
            store: climatologySpanStore,
            fieldLabel: 'Prior Months',
            value: '12',
            id: 'latLon_monthylsequences_priorspan',
            width: 135
        }), new dataSubmit3({ // must be last
            text: 'Submit!'
        })],
        contentEl: 'climatology'
    });



    // Usage Panel
    var how_to_panel = new Ext.Panel({
        title: 'How To Use',
        contentEl: 'use',
        cls: 'empty'
        /*items: [new helpVideo({ // must be last
            text: 'Help',
            align: 'center',

        })],*/
    });


    // Contact Panel
    var contact_panel = new Ext.Panel({
        title: 'Contact',
        cls: 'empty',
        items: [new feedbackSubmit({ // must be last
            text: 'Feedback',
            align: 'center'

        })],
        contentEl: 'contact'
    });


    // Disclaimer Panel
    var disclaimer_panel = new Ext.Panel({
        title: 'Disclaimer',
        cls: 'empty',
        contentEl: 'disclaimer'
    });





    // Setup forms and comboboxes for locations
    var region_timeseries_panel = new Ext.FormPanel({
        title: "Time Series",
        labelWidth: 55,
        collapsible: true,
        items: [item0, new regionSelect({
            name: 'region1',
            fieldLabel: 'Region',
            store: stateStore,
            editable: false,
            value: 'Select Region',
            id: 'region_timeseries_map',
            width: 135
            // listWidth: 350,


        }), new variableSelect({
            name: 'variable',
            fieldLabel: 'Variable',
            editable: false,
            value: '1',
            id: 'region_timeseries_variable',
            width: 135
        }), new yearSelect({
            name: 'startyear',
            fieldLabel: 'Start Year',
            editable: false,
            value: 1895,
            id: 'region_timeseries_startyear',
            width: 135
        }), new yearSelect({
            name: 'endyear',
            fieldLabel: 'End Year',
            editable: false,
            value: 1895 + (yearArr.length - 1),
            id: 'region_timeseries_endyear',
            width: 135
        }), new monthSelect({
            name: 'month',
            fieldLabel: 'Month',
            value: currentMonthArr,
            editable: false,
            id: 'region_timeseries_monthselect',
            width: 135
        }), new spanSelect({
            name: 'span',
            fieldLabel: 'Span',
            value: '1',
            editable: false,
            id: 'region_timeseries_span',
            width: 135
        }), new formInput({
            name: 'runavg',
            fieldLabel: 'Running Average (Years)',
            id: 'region_timeseries_runavg',
            width: 135
        }), new dataSubmit4({ // must be last
            text: 'Submit!'
        })],
        contentEl: 'time_series2'
    });



    // Setup forms and comboboxes for all point data
    var region_allmonths_panel = new Ext.FormPanel({
        title: "All Months",

        labelWidth: 55,
        cls: 'empty',
        items: [
        new regionSelect({
            name: 'region',
            fieldLabel: 'Region',
            editable: false,
            store: stateStore,
            //value: 131170803712,
            id: 'region_allmonths_map',
            width: 135
        }), new variableSelect({
            name: 'variable23',
            fieldLabel: 'Variable',
            editable: false,
            value: 1,
            id: 'region_allmonths_variable',
            width: 135
        }), new dataSubmit5({ // must be last
            text: 'Submit!'
        })],
        contentEl: 'all_data2'
    });


    // Setup forms and comboboxes for point selection
    var region_monthylsequences_panel = new Ext.FormPanel({
        title: "Monthly Sequences",
        labelWidth: 55,
        items: [new regionSelect({
            name: 'region',
            fieldLabel: 'Region',
            editable: false,
            store: stateStore,
            value: 'Select Region',
            id: 'region_monthylsequences_map',
            width: 135
        }), new variableSelect({
            name: 'variable',
            fieldLabel: 'Variable',
            editable: false,
            value: '1',
            id: 'region_monthylsequences_variable',
            width: 135
        }), new spanSelect({
            name: 'MONTHS',
            editable: false,
            store: monthStore,
            fieldLabel: 'Month',
            value: currentMonthArr,
            id: 'region_monthylsequences_month',
            width: 135
        }), new yearSelect({
            name: 'startyear',
            fieldLabel: 'Year',
            editable: false,
            value: 1895 + (yearArr.length - 1),
            id: 'region_monthylsequences_year',
            width: 135
        }), new spanSelect({
            name: 'span',
            editable: false,
            store: climatologySpanStore,
            fieldLabel: 'Prior Span',
            value: '12',
            id: 'region_monthylsequences_priorspan',
            width: 135
        }), new dataSubmit6({ // must be last
            text: 'Submit!'
        })],
        contentEl: 'climatology2'
    });







    var accordionEast = new Ext.Panel({
        region: 'east',
        id: 'id_product_tabs',
        margins: '45 0 5 5',
        split: true,
        width: 200,
        layout: 'accordion',
        items: [radioPanel, latLon_timeseries_panel, latLon_monthlysequences_panel, latLon_allmonths_panel]
    });

    accordionEast.add(region_timeseries_panel, region_monthylsequences_panel, region_allmonths_panel);
    region_timeseries_panel.hide();
    region_monthylsequences_panel.hide();
    region_allmonths_panel.hide();

    var accordionEastWest = new Ext.Panel({
        region: 'west',

        margins: '45 5 5 0',
        split: true,
        width: 200,
        layout: 'accordion',
        items: [how_to_panel, contact_panel, disclaimer_panel]
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



    var nestedPanel = new Ext.Panel({
        region: 'center',
        margins: '45 0 5 0',
        id: 'nested',
        border: true,
        autoScroll: true,
        items: [radioPanel, panel]

    });

    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        accordionEast, accordionEastWest, {
            bodyStyle: 'background:#f1f1f1'
        },
        nestedPanel]
    });

    //
    // Set month and year back if January of new year
    if (currentDateArr.getMonth() == 0) {
        Ext.getCmp('latLon_timeseries_monthselect').setValue(12);
        Ext.getCmp('region_timeseries_monthselect').setValue(12);


        // Set monthy sequence month to Jan
        Ext.getCmp('latLon_monthylsequences_month').setValue(12);
        Ext.getCmp('region_monthylsequences_month').setValue(12);

        currentMonthArr = 12;
        var yearValue = currentDateArr.getFullYear() - 1;
        Ext.getCmp('latLon_timeseries_endyear').setValue(yearValue);
        Ext.getCmp('region_timeseries_endyear').setValue(yearValue);

        
        //Set sequence year back while in Jan
        Ext.getCmp('latLon_monthylsequences_year').setValue(yearValue);
        Ext.getCmp('region_monthylsequences_year').setValue(yearValue);


    }



});
