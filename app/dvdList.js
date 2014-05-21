'use strict';

var request = require('request')
  , extend = require('extend')
  , util = require('util')
  , rt = require('./rt.js');

module.exports = (function() {

  var tmpl = rt.baseUrl + '/lists/dvds/%s.json';

  var mod = {
    topRentals: function(cb = rt.basePrinter) {
      request({
        url: util.format(tmpl, 'top_rentals'),
        qs: extend(rt.baseQS, { country: 'us', limit: 15 })
      }, cb);
    },
    currentReleases: function(page = 1, cb = rt.basePrinter) {
      request({
        url: util.format(tmpl, 'current_releases'),
        qs: extend(rt.baseQS, { page: page, country: 'us', limit: 15 })
      }, cb);
    },
    newReleases: function(page = 1, cb = rt.basePrinter) {
      request({
        url: util.format(tmpl, 'new_releases'),
        qs: extend(rt.baseQS, { page: page, country: 'us', limit: 15 })
      }, cb);
    },
    upcoming: function(page = 1, cb = rt.basePrinter) {
      request({
        url: util.format(tmpl, 'upcoming'),
        qs: extend(rt.baseQS, { page: page, country: 'us', limit: 15 })
      }, cb);
    },
  };

  return mod;
})();