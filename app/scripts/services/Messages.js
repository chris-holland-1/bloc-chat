(function () {
    function Message($firebaseArray, BlocChatCookies) {
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        // Test that messages display
        
        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID
                var query = ref.orderByChild("roomId").equalTo(roomId);
                
                var messages = $firebaseArray(query);
                
                return messages;
                
                // test using a specific room - need to change after it is working     
            },
            
            send: function(newMessage) {
                // Send method logic
                
                messages.$add({
                    username: BlocChatCookies.getUser(),
                    content: newMessage
                });
                console.log(newMessage);
                
                // associate messages with username
                
            },
            
             all: messages
        
        };
    }
        
     angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'BlocChatCookies', Message]);
})(); 