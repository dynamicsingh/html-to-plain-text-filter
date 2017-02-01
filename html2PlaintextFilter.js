(function() {
  'use strict';

angular.module('app.filter.htmlToPlaintext', []).
  filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
);
}).call(this);