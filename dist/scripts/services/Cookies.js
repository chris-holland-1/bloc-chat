(function() {
    function BlocChatCookies($cookies) {
        // Retrieving a cookie or user
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            // Do something to allow users to set their username --> how do I get the input here??
            
            // put(key, value, [options]);
            
            var newUser = $cookies.user;
            $cookies.user = 'New User';
            
            currentUser = user;
            
            console.log(currentUser);
            
            // value = new variable or 'blocChatCurrentUser'??
            
        }
        
        return currentUser;
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();