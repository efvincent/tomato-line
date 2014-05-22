'use strict';

var request = require('request')
  , extend = require('extend')
  , util = require('util')
  , rt = require('./rt.js');

module.exports = (function() {

  var tmpl = rt.baseUrl + '/lists/movies/%s.json';
  var proxy = '';

  var mod = {
    setProxy: (newProxy) => {
      proxy = newProxy;
    },
    boxOffice: function(cb = rt.basePrinter) {
      request({
        proxy: proxy,
        url: util.format(tmpl, 'box_office'),
        qs: extend(rt.baseQS, { country: 'us', limit: 16 })
      }, cb);
    },
    inTheaters: function(page = 1, cb = rt.basePrinter) {
      request({
        proxy: proxy,
        url: util.format(tmpl, 'in_theaters'),
        qs: extend(rt.baseQS, { country: 'us', limit: 16, page: page })
      }, cb);
    },
    opening: function(cb = rt.basePrinter) {
      request({
        proxy: proxy,
        url: util.format(tmpl, 'opening'),
        qs: extend(rt.baseQS, { country: 'us', limit: 16 })
      }, cb);
    },
    upcoming: function(page = 1, cb = rt.basePrinter) {
      request({
        proxy: proxy,
        url: util.format(tmpl, 'upcoming'),
        qs: extend(rt.baseQS, { country: 'us', limit: 16, page: page})
      }, cb);
    }
  };
  return mod;
})();