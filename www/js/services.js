var spreadsheetURL = "https://docs.google.com/spreadsheets/d/1jaZQAWOcUC3JfZlpnFk5nWonqey9-iYzyc4XsYWJ7q8/pubhtml";

angular.module('starter.services', [])

.factory('Posts', function($q) {
  return {
    getPosts: function() {
      var deferred = $q.defer();
      var posts = [];
      Tabletop.init({
        key: spreadsheetURL,
        callback: function(rawdata, tabletop) {
          var data = rawdata.Sheet1.elements;
          for(var index = data.length - 1; index > -1; index--) {
            var post = {
              id: index,
              title: data[index].title,
              img: data[index].photo_link,
              quote: data[index].text,
              url: data[index].url
            };
            posts.push(post);
          }
          deferred.resolve(posts);
        }
      });
      return deferred.promise;
    }
  }
});
