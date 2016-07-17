'use strict';

var USERController = function ($scope, SharePointCRUDService, $log) {
    $scope.checkboxModel = {
        value1: 'B.Tech.',
        value2: 'M.Tech.'
    };

    SharePointCRUDService.GetLoggedInUsername()
    .then(function (response) {
        $scope.currentUser = response.d.Title;
    });
};

(function () {
    myApp.controller('USERController', ['$scope', 'SharePointCRUDService', '$log', USERController]);
}());