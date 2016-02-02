
angular.module('app.home',[])
.controller("homeCtrl", function ($scope, $timeout, $document,$mdSidenav, $state, $log, $mdDialog, ref, $rootScope,$firebaseArray,$firebaseObject) {

     var uid = localStorage.getItem("uid");
    
    $document.ready(function(){
        console.log("home", window.authuid);
       if(uid !== window.authuid){
           $state.go('signin');
        }
})


        var user_details_ref = new Firebase(ref+uid+"/user_details");
        var user_todo_ref = new Firebase(ref+uid+"/todos");
       $rootScope.user_details = $firebaseObject(user_details_ref);
       $rootScope.user_todos = $firebaseArray(user_todo_ref);





    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }

    $scope.image = "http://www.androidsoftol.com/android45678/uploads/allimg/120117/e427dc14-4423-4264-9946-fdadb7d890b6_1.jpg";
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };



    $scope.showTabDialog = function(ev) {
        $mdDialog.show({
                controller: 'DialogController',
                templateUrl: './components/dialog/tabDialog.tmpl.html',
                targetEvent: ev,
                clickOutsideToClose:true
            })
    };
    
            $scope.logOut= function(){
             localStorage.removeItem("uid");
             $state.go('signin');


             }


                 $scope.pictureDialog = function(ev)
        {
                 $mdDialog.show({

                controller: 'imgCtrl',

                templateUrl: './components/image/img-crop.tmpl.html',

                targetEvent: ev,
                clickOutsideToClose:true
            })
        }



});
