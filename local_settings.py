import socket

# Sets data directory on local machine or server.

if socket.gethostname() == 'ubuntu':
    WWDTNETCDF_DIR = '/media/drought/WWDTNETCDF/PRISM'
    WWDTNETCDF_DIR2 = '/media/drought/WWDTNETCDF/REGION'
    WWDTNETCDF_DIR3 = '/media/drought/WWDTNETCDF/HCN'
    ELEVATION_DATA = '/media/drought/WWDTNETCDF/elevation/elevationUS.nc'
else:
    WWDTNETCDF_DIR = '/home/www/jtwrcc/research/WWDT/data/PRISM/'
    WWDTNETCDF_DIR2 = '/home/www/jtwrcc/research/WWDT/data/REGION/'
    WWDTNETCDF_DIR3 = '/home/www/jtwrcc/research/WWDT/data/HCN/'
    ELEVATION_DATA = '/home/www/jtwrcc/research/WWDT/data/elevationUS.nc'


