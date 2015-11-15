'use strict';
app.controller('goalsController', ['$scope', 'goalsService', function ($scope, goalsService) {

    $scope.goals = [];

    goalsService.getgoals().then(function (results) {

        $scope.goals = results.data;

    }, function (error) {

        //alert(error.data.message);
    });

}]);