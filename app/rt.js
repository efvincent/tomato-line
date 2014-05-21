'use strict';

var Table  = require('cli-table')
  , util   = require('util')
  , extend = require('extend');

module.exports = {
  inspect: (ob, opts) => {
    opts = extend({colors:true}, opts);
    console.log(util.inspect(ob, opts));
  },
  baseUrl: 'http://api.rottentomatoes.com/api/public/v1.0',
  baseQS: {
    apikey: '9ttjtqm53m9acqgmtauk9rn5'
  },
  basePrinter: (err,rsp) => {
    if (err) {
      console.error(err);
      return;
    }
    var t = new Table({
      head: ['Title', 'MPAA', 'Critic Rating'],
      colWidths: [55, 10, 15]
    });

    JSON.parse(rsp.body)
      .movies
      // Ignore the lack of camel casing in the following line
      // jshint -W106
      .map(m => [m.title, m.mpaa_rating, m.ratings.critics_score])
      .forEach(m => t.push(m));

    console.log(t.toString());
  }
};