/**
 * Created by lemke164 on 2/6/15.
 */
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