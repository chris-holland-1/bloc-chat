(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        // write a function to create new rooms
        
        var createRoom = function(newRoomName) {
          rooms.$add({name: newRoomName});
        };
        
        return {
            all: rooms,
            createRoom: createRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})(); 
