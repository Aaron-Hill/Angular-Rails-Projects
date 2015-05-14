'use strict';

angular.module('Bolt1App')
.controller('MainCtrl', function ($scope) {

  // Private
  var privateFunction = function() {
    return true;
  };

  // Scope

  angular.extend($scope, {

    awesomeThings: [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ],

    scopeFunction: function() {
      return privateFunction();
    }

  });

});
