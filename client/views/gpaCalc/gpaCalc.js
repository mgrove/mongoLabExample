'use strict';

console.log("gpaCalc.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('gpaCalc', {
                url: '/gpaCalc',
                templateUrl: 'views/gpaCalc/gpaCalc.html',
                controller: 'gpaCtrl'
            });
    });