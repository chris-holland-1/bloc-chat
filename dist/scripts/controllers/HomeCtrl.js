(function(){
   function HomeCtrl(Room) {
       this.chatRooms = Room.all;
       console.log(Room.all);
       console.log("hello from the home controller!");
       
       // somehow link form in view to service through here
       
       /* var createHomeCtrl = null;
       createHomeCtrl.create = function() {
           Room.createRoom(createHomeCtrl.newRoom),
        } */
    }
    
   angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

 