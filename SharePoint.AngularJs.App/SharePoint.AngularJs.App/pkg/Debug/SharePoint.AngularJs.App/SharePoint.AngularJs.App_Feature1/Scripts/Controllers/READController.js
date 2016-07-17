'use strict';

var READController = function ($scope, SharePointCRUDService) {
    SharePointCRUDService.GetAll()
    .then(function (response) {
        $scope.users = response.d.results;
    });

    $scope.deleteUser = function (user) {
        SharePointCRUDService.DeleteUser(user.ID)
        .then(function (response) {
            var userIndex = $scope.users.indexOf(user);
            $scope.users.splice(userIndex, 1);
        });
    };
};

(function () {
    myApp.controller('READController', ['$scope', 'SharePointCRUDService', READController]);
}());