var movies = require('./movieList.js')
  , dvds = require('./dvdList.js');

// this is just a couple of examples. Need to add some cli UI goodness
movies.setProxy('http://firewall:80');

movies.boxOffice();
//dvds.currentReleases();
