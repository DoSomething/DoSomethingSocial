angular.module('starter.services', [])

.factory('Posts', function() {
  var posts = [
    {
      id: 0,
      title: "Some title 0",
      img: "/img/logo.png",
      quote: "I did cool things! and things insert more filler text",
      link: "http://www.google.com"
    },
    {
      id: 1,
      title: "Some title 1",
      quote: "This would be an example of a text only tweet.",
      link: "http://www.google.com"
    },
    {
      id: 2,
      title: "Some title 2",
      img: "/img/logo.png",
      link: "http://www.google.com"
    },
    {
      id: 3,
      title: "Some title 3",
      img: "/img/logo.png",
      link: "http://www.google.com"
    },
    {
      id: 4,
      title: "Some title 4",
      img: "/img/logo.png",
      link: "http://www.google.com"
    },
    {
      id: 5,
      title: "Some title 5",
      img: "/img/logo.png",
      link: "http://www.google.com"
    }
  ];

  return {
    all: function() {
      return posts;
    },
    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    },
    get: function(postsId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postsId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
