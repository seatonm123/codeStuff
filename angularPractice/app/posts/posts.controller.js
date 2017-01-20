(function(){
  'use strict';

  angular.module('reddit')
    .controller('PostsController', PostsController);

    function PostsController(){
      const vm = this;
      console.log('Hello World');
    }


})();
