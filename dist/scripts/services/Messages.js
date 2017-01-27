(function () {
    function Message($firebaseArray, BlocChatCookies, Room) {
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        // Test that messages display
        var currentMessages = [];
        var currentRoom = null;
        
        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID
                var query = ref.orderByChild("roomId").equalTo(roomId);
                
                var messages = $firebaseArray(query);
                
                return messages;
                
                // test using a specific room - need to change after it is working     
            },
            
            send: function(newMessage, roomId) {
                // Send method logic
                
                messages.$add({
                    username: BlocChatCookies.getUser(),
                    content: newMessage,
                    roomId: roomId
                });
                console.log(newMessage);
                console.log(roomId);
                
                // associate messages with username
                // associate with selected room
                
            },
            
             all: messages
        
        };
    }
        
     angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'BlocChatCookies', 'Room', Message]);
})(); 