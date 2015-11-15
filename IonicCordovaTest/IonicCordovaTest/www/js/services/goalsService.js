'use strict';
app.factory('goalsService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var goalsServiceFactory = {};

    var _getgoals = function () {

        return $http.get(serviceBase + 'api/goals').then(function (results) {
            return results;
        });
    };

    goalsServiceFactory.getgoals = _getgoals;

    return goalsServiceFactory;

}]);