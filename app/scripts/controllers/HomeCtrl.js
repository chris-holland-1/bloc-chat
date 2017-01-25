(function(){
   function HomeCtrl(Room, Message, BlocChatCookies) {
       this.room = Room;
       this.message = Message;
       this.chatRooms = Room.all;
       this.user = BlocChatCookies;
       // add cookies 
       this.currentMessages = [];
       this.currentRoom = null;
       this.selectRoom = function(room) {
           // Set the current room
           this.currentRoom = room;
           // filter the current messages
           this.currentMessages = this.message.getByRoomId(room.$id);
           
           // create controller method that is invoked via ngClick or ngSubmit on the home html   
       };
       this.addMessage = function(message) {
           this.selectRoom = message;
           // add new messages
           this.currentMessages = this.message.send(message.content);
       };
      
       console.log(Room.all);
       
       // somehow link form in view to service through here
        
    }
    
   angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'BlocChatCookies', HomeCtrl]);
})();

 