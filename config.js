// CUT START
var disableSetup = false;
var topBarCenterText = "WEATHER DASHBOARD";
var topBarCenterTextColor = "limegreen";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
var aURL = [
  ["2196F3", "APRS",          "https://aprs.to/?center=43,-79&zoom=11",                                                                                         "1"],
  ["2196F3", "CLUBLOG",       "https://clublog.org/livestream/VA3HDL",                                                                                           "1"],
  ["2196F3", "CONTEST",       "https://www.contestcalendar.com/fivewkcal.html",                                                                                  "1"],
  ["2196F3", "DX CLUSTER",    "https://dxcluster.ha8tks.hu/map/",                                                                                                "1"],
  ["2196F3", "ADSB",          "https://globe.adsbexchange.com/",                                                                                                 "1"],
  ["2196F3", "LIGHTNING",     "https://map.blitzortung.org/#3.87/36.5/-89.41",                                                                                   "1"],
  ["2196F3", "PISTAR",        "http://pi-star.local/",                                                                                                           "1"],
  ["2196F3", "RADAR",         "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",                        "1"],
  ["2196F3", "WINLINK",       "https://cms.winlink.org:444/maps/propagation.aspx",                                                                               "1"],
  ["2196F3", "Stuff In Space", "https://stuffin.space/",                                                                                                         "1"],
  ["2196F3", "TIME.IS",       "https://time.is/",                                                                                                                "1"],
  ["2196F3", "WEATHER",       "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",                 "1"],
  ["2196F3", "WINDS",         "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",                                         "1"]
];

// Feed items
var aRSS = [];

// Dashboard Tiles — 4 cols x 3 rows = 12 tiles, left-to-right, top-to-bottom
// Row 1: US Radar | SE Radar | Lightning | Fire Outlook 7-day
// Row 2: US Satellite | SE Satellite | Drought Monitor | National Forecast
// Row 3: E Pacific 2-day | E Pacific 7-day | Atlantic 2-day | Atlantic 7-day
var aIMG = [

  // Row 1
  [
    "US RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "SE RADAR",
    "https://radar.weather.gov/ridge/standard/KTBW_loop.gif",
    "https://radar.weather.gov/ridge/standard/KAMX_loop.gif"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://www.blitzortung.org/en/Images/image_b_fl.png"
  ],
  [
    "WILDLAND FIRE OUTLOOK 7-DAY",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d1.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d2.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d3.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d4.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d5.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d6.png",
    "https://www.nifc.gov/modules/custom/nicc_outlooks/images/outlook_d7.png"
  ],

  // Row 2
  [
    "US SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/GEOCOLOR/GOES19-CONUS-GEOCOLOR-625x375.gif"
  ],
  [
    "SE SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/se/GEOCOLOR/GOES19-SE-GEOCOLOR-600x600.gif"
  ],
  [
    "US DROUGHT MONITOR",
    "https://droughtmonitor.unl.edu/data/png/current/current_usdm.png"
  ],
  [
    "NATIONAL FORECAST",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif"
  ],

  // Row 3
  [
    "E PACIFIC TROPICAL 2-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/epac/latest/two_pac_2d0.png"
  ],
  [
    "E PACIFIC TROPICAL 7-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/epac/latest/two_pac_7d0.png"
  ],
  [
    "ATLANTIC TROPICAL 2-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png"
  ],
  [
    "ATLANTIC TROPICAL 7-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_7d0.png"
  ]

];

// Rotation intervals in ms — must be 12 entries to match aIMG
var tileDelay = [
  15000,  // US Radar
  20000,  // SE Radar (cycles KTBW/KAMX)
  15000,  // Lightning (2 images)
  10000,  // Fire Outlook (cycles 7 days)
  15000,  // US Satellite
  15000,  // SE Satellite
  60000,  // Drought Monitor (static, updates weekly)
  15000,  // National Forecast (cycles d1/d2/d3)
  30000,  // E Pacific 2-day
  30000,  // E Pacific 7-day
  30000,  // Atlantic 2-day
  30000   // Atlantic 7-day
];

// CUT END
