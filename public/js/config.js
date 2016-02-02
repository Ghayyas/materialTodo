




angular.module("materialApp")
.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    
   $stateProvider.state('home', {
                url: "/",
                templateUrl: "../components/home/home.html",
                controller: "homeCtrl",
                loginCompulsory: true
            }
            )
            .state('signin', {
                    url: "/signin",
                    templateUrl: "../components/signin/signin.html",
                    controller: "signinCtrl"
                    
                }
            )
            .state('signup', {
                    url: "/signup",
                    templateUrl: "../components/signup/signup.html",
                    controller: "signupCtrl"
                }
            )
        
        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
});


})




.run(function($rootScope,$state){
    $rootScope.$on("$stateChangeStart",function(event, toState){
        var token = localStorage.getItem('id');
       // var session = sessionStorage.id;
        if(toState.loginCompulsory && token){
            event.preventDefault();
               $state.go('home');
        }
    })
    
})