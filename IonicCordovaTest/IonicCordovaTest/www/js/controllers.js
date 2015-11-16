/// <reference path="../templates/modal-goal.html" />
 
angular.module('starter.controllers', ['ionic'])

//.controller('DashCtrl', function($scope) {})
//
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('DashCtrl', function($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('modal-goal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
         console.log('Show Modal');

        $scope.modal = modal;
    });
    $scope.openModal = function () {
       // console.log('Show Modal');
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
});