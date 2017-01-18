(function() {
    function Message($firebaseArray) {
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        // Test that messages display
        
        var createMessage = function(newMessage, assignRoomId, user) {
            messages.$add({content: newMessage, roomId: assignRoomId, username: user});   
        };
        
        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID
                var query = ref.orderByChild("roomId").equalTo(roomId);
                
                var messages = $firebaseArray(query);
                
                return messages;
                
                // test using a specific room - need to change after it is working
                 
            },
             all: messages
        };
    }
        
     angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})(); 