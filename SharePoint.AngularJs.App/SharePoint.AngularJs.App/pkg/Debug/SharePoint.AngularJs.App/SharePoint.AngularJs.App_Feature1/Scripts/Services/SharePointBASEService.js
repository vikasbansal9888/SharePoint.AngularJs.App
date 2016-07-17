'use strict';

function SharePointBASEService($http, $q) {
    var baseUrl = _spPageContextInfo.siteAbsoluteUrl,

    getLoggedInUsername = function (query) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + query,
            method: "GET",
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            }
        })
            .success(function (result) {
                deferred.resolve(result);
            })
            .error(function (result, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    },

    getRequest = function (query) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + query,
            method: "GET",
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            }
        })
            .success(function (result) {
                deferred.resolve(result);
            })
            .error(function (result, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    },
    postRequest = function (query, data) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + query,
            method: "POST",
            headers: {
                "Accept": "application/json;odata=verbose",
                "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                "Content-Type": "application/json;odata=verbose"
            },
            data: JSON.stringify(data)
        })
            .success(function (result) {
                deferred.resolve(result);
            })
            .error(function (result, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    },
    deleteRequest = function (query) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + query,
            method: "POST",
            headers: {
                "Accept": "application/json;odata=verbose",
                "X-HTTP-Method": "DELETE",
                "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                "IF-MATCH": "*"
            }
        })
            .success(function (result) {
                deferred.resolve(result);
            })
            .error(function (result, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    },
    updateRequest = function (query, data) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + query,
            method: "POST",
            headers: {
                "Accept": "application/json;odata=verbose",
                "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                "Content-Type": "application/json;odata=verbose",
                "X-HTTP-Method": "MERGE",
                "IF-MATCH": "*"
            },
            data: JSON.stringify(data)
        })
            .success(function (result) {
                deferred.resolve(result);
            })
            .error(function (result, status) {
                deferred.reject(status);
            });
        return deferred.promise;
    };

    return {
        LoggedInUsernameRequest: getLoggedInUsername,
        GetRequest: getRequest,
        PostRequest: postRequest,
        DeleteRequest: deleteRequest,
        UpdateRequest: updateRequest
    };
}

(function () {
    myApp.factory('SharePointBASEService', ['$http', '$q', SharePointBASEService]);
}());