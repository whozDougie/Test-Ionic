'use strict';
app.factory('activitiesService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var activitiesServiceFactory = {};

    var _getActivities = function () {

        return $http.get(serviceBase + 'api/activities').then(function (results) {
            return results;
        });
    };

    activitiesServiceFactory.getActivities  = _getActivities;

    return activitiesServiceFactory;

}]);