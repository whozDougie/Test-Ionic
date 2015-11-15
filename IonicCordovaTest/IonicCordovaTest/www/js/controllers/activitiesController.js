'use strict';
app.controller('activitiesController', ['$scope', 'activitiesService', function ($scope, activitiesService) {

    $scope.activities = [];

    activitiesService.getActivities().then(function (results) {

        $scope.activities = results.data;

    }, function (error) {

        //alert(error.data.message);
    });

}]);