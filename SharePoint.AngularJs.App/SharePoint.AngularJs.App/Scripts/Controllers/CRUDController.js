myApp.controller('CRUDController', ['$scope', 'SharePointCRUDService', CRUDController]);

function CRUDController($scope, SharePointCRUDService) {
    SP.SOD.executeOrDelayUntilScriptLoaded(controllerReady, "SP.js");
    function controllerReady() {
        $.when(SharePointCRUDService.getCurrentUser())
        .done(function (jsonObject) {
            $scope.currentUser = jsonObject.d.Title;
            $scope.apply();
        })
        .fail(function (err) {
            console.info(JSON.stringify(err));
        });
    }
}