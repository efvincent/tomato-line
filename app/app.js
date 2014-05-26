var movies = require('./movieList.js')
  , argv = require('yargs').usage('tomato-line [--(p)roxy myproxy]').alias('p','proxy').argv;

var proxy = '';

if (argv.proxy) {
  proxy = argv.proxy;
}

movies.setProxy(proxy);

movies.boxOffice();

