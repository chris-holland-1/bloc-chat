(function() {
    function RoomCtrl() {
        console.log("RoomCtrl loaded!");
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', RoomCtrl);
})();