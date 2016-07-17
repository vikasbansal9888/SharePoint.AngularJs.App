'use strict';

var ADDController = function ($scope, SharePointCRUDService, $location) {
    $scope.courses = [
        {
            id: 1,
            name: 'B.Tech.'
        },
        {
            id: 2,
            name: 'M.Tech.'
        }
    ];

    $scope.addUser = function (user) {
        user.qualificationArray = [];

        angular.forEach($scope.courses, function (course) {
            if (course.selected) {
                user.qualificationArray.push(course.name);
            }
        });

        SharePointCRUDService.SaveNew(user)
            .then(function (response) {
                $location.path("/");
            });
    };

    $scope.resetForm = function () {
        $location.path("/");
    };
};

(function () {
    myApp.controller('ADDController', ['$scope', 'SharePointCRUDService', '$location', ADDController]);
}());