angular.module('app.signin',[])

.controller('signinCtrl',function($scope,ref,$rootScope,$state,$document){
    
    
     var uid = localStorage.getItem("uid");
     $document.ready(function(){
      console.log("signin ", window.authuid, "uid" , uid);
       if(uid !== null && uid == window.authuid){
           $state.go('home');
        }
         
     })




            $rootScope.user = {};
            $rootScope.submit = function(){
        ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
        }, function(error, authData) {
        if (error) {
            alert(error);
            $rootScope.user = "";
            console.log("Login Failed!", error);
        } else {
            window.authuid = authData.uid;
            $rootScope.user = "";
           localStorage.setItem("uid",authData.uid);
           $state.go('home');
           console.log("Authenticated successfully with payload:", authData);
        }
        });
            }
    
})