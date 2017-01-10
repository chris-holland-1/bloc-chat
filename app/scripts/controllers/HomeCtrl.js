(function(){
   function HomeCtrl() {
      console.log("hello from the home controller!");
   } 
    
   angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();

