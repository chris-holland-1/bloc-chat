(function(){
   function HomeCtrl(Room, Message) {
       this.room = Room;
       this.message = Message;
       this.chatRooms = Room.all;
       console.log(Room.all);
       
       // somehow link form in view to service through here
        
    }
    
   angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

 