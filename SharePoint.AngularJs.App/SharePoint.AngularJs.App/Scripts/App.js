/// <reference path="angular.js" />

'use strict';

var myApp = window.myApp || {};

(function () {
    myApp = angular.module('myApp', ["ngRoute"]);
    console.log('app.js');

    myApp.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../Pages/Templates/GetAll.html",
                controller: "READController"
            })
            .when("/add", {
                templateUrl: "../Pages/Templates/Add.html",
                controller: "ADDController"
            })
            .when("/edit/:userId", {
                templateUrl: "../Pages/Templates/Edit.html",
                controller: "EDITController"
            })
        .otherwise({
            redirectTo: "/"
        });
    });
}());