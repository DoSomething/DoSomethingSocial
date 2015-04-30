angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, Posts) {
  Posts.getPosts().then(
    function (payload) {
      $timeout(function(){
        $scope.posts = payload;
      });
    },
    function (errorPayload) {
      console.log(errorPayLoad);
    });
  $scope.isUndefined = function (thing) {
    return (typeof thing === "undefined") || (typeof thing === "string" && thing == "");
  };
})


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
});
