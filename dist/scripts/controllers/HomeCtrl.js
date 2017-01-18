(function(){
   function HomeCtrl(Room, Message) {
       this.room = Room;
       this.message = Message;
       this.chatRooms = Room.all;
       // this.user = BlocChatCookies;
       this.currentMessages = [];
       this.currentRoom = null;
       this.selectRoom = function(room) {
           // Set the current room
           this.currentRoom = room;
           // filter the current messges
           this.currentMessages = this.message.getByRoomId(room.$id);
           
       };
       console.log(Room.all);
       
       // somehow link form in view to service through here
        
    }
    
   angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

 