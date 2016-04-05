'use strict';

(function () {
    var profileId = document.querySelector('#profile-id') || null;
    var profileUsername = document.querySelector('#profile-username') || null;
    var displayName = document.querySelector('#display-name');
    var email = document.querySelector('#profile-email') || null;
    var apiUrl = appUrl + '/api/:id';
    
    function updateHtmlElement (data, element, userProperty) {
             element.innerHTML = data.google[userProperty];
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data){
          var userObject = JSON.parse(data);
        //console.log(userObject);
        
        
        updateHtmlElement(userObject, displayName, 'displayName');
        
        if (profileId !== null) {
            updateHtmlElement(userObject, profileId, 'id');
        }
        
       if (email !== null) {
           updateHtmlElement(userObject, email, 'email');
       } 
    }))    
})();