(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        // write a function to create new rooms
        
        function createRoom(room) {
            var newRoom = new Room({name : room.name});
            newRoom.$save(firebase.database());
        }
        
        return {
            all: rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})(); 
