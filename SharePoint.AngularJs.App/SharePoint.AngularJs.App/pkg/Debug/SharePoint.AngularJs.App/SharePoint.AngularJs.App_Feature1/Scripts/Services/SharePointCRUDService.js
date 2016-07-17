'use strict';

function SharePointCRUDService(SharePointBASEService) {
    var listEndPoint = '/_api/web/lists',

    getLoggedInUsername = function () {
        var query = "/_api/web/currentuser";
        return SharePointBASEService.LoggedInUsernameRequest(query);
    },

    getAll = function () {
        var query = listEndPoint + "/GetByTitle('" + myAppUtilities.Constants.ListTitle + "')/Items?$select=ID,FirstName,LastName,Age,Gender,Qualification&$orderby=ID desc";
        return SharePointBASEService.GetRequest(query);
    },
    getItemTypeForListName = function (name) {
        return "SP.Data." + name.charAt(0).toUpperCase() + name.slice(1) + "ListItem";
    },
    saveNew = function (user) {
        var data = {
            __metadata: {
                'type': getItemTypeForListName(myAppUtilities.Constants.ListTitle)
            },
            "FirstName": user.firstName,
            "LastName": user.lastName,
            "Age": user.age,
            "Gender": user.gender,
            "Qualification": { 'results': user.qualificationArray }
        },
        query = listEndPoint + "/GetByTitle('" + myAppUtilities.Constants.ListTitle + "')/Items";

        return SharePointBASEService.PostRequest(query, data);
    },
    getItemById = function (id, operationType) {
        var query = listEndPoint + "/GetByTitle('" + myAppUtilities.Constants.ListTitle + "')/GetItemById(" + id + ")?$select=ID";

        if (operationType.toLowerCase() === myAppUtilities.Constants.Edit.toLowerCase()) {
            query += ",FirstName,LastName,Age,Gender,Qualification";
        }

        return SharePointBASEService.GetRequest(query);
    },
    deleteUser = function (userId) {
        var query = listEndPoint + "/GetByTitle('" + myAppUtilities.Constants.ListTitle + "')/GetItemById(" + userId + ")";

        return SharePointBASEService.DeleteRequest(query);
    },
    updateUser = function (user) {
        var data = {
            __metadata: {
                'type': getItemTypeForListName(myAppUtilities.Constants.ListTitle)
            },
            "FirstName": user.firstName,
            "LastName": user.lastName,
            "Age": user.age,
            "Gender": user.gender,
            "Qualification": { 'results': user.qualificationArray }
        };

        var userId = user.userId;

        var query = listEndPoint + "/GetByTitle('" + myAppUtilities.Constants.ListTitle + "')/GetItemById(" + userId + ")";
        return SharePointBASEService.UpdateRequest(query, data);
    };

    return {
        GetLoggedInUsername: getLoggedInUsername,
        GetAll: getAll,
        SaveNew: saveNew,
        DeleteUser: deleteUser,
        GetItemById: getItemById,
        UpdateUser: updateUser
    };
}

(function () {
    myApp.factory('SharePointCRUDService', ['SharePointBASEService', SharePointCRUDService]);
}());