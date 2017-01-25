(function () {
    function BlocChatCookies($cookies) {
        // Retrieving a cookie or user
        
        function getUser() {
            return $cookies.get('blocChatCurrentUser');
        }
        
        function setUser(username) {
            $cookies.put('blocChatCurrentUser', username);
        }
        
        return {
            getUser: getUser,
            setUser: setUser
        }
    
    }
    
    angular
        .module('blocChat')
        .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();