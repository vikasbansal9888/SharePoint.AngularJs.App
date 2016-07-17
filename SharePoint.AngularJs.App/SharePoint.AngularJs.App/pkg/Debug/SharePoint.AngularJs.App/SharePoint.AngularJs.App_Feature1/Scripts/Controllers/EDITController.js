'use strict';

var EDITController = function ($scope, SharePointCRUDService, $routeParams, $location) {
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

    SharePointCRUDService.GetItemById($routeParams.userId, 'edit')
        .then(function (response) {
            var dataObj = response.d,
                qualificationArr = dataObj.Qualification.results;

            angular.forEach($scope.courses, function (course) {
                angular.forEach(qualificationArr, function (qual) {
                    if (course.name === qual) {
                        course.selected = true;
                    }
                });
            });

            $scope.user = {
                userId: dataObj.ID,
                firstName: dataObj.FirstName,
                lastName: dataObj.LastName,
                age: dataObj.Age,
                gender: dataObj.Gender
            };
        });

    $scope.updateUser = function (user) {
        user.qualificationArray = [];

        angular.forEach($scope.courses, function (course) {
            if (course.selected) {
                user.qualificationArray.push(course.name);
            }
        });

        SharePointCRUDService.UpdateUser(user)
            .then(function (response) {
                $location.path("/");
            });
    };

    $scope.resetForm = function () {
        $location.path("/");
    };
};

(function () {
    myApp.controller('EDITController', ['$scope', 'SharePointCRUDService', "$routeParams", "$location", EDITController]);
}());