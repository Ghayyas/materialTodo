// /**
//  * Created by ghayyas on 1/13/16.
//  */


angular.module('app.dialog',[])
.controller('DialogController', function ($scope, $mdDialog ,$firebaseArray, $rootScope , ref, $firebaseObject) {


        var uid = localStorage.getItem("uid");
        var user_details_ref = new Firebase(ref+uid+"/user_details");
        var user_todo_ref = new Firebase(ref+uid+"/todos");
        var count_ref = new Firebase(ref+uid+"/count")
        $scope.user_details = $firebaseObject(user_details_ref);
        $scope.user_todos = $firebaseArray(user_todo_ref);
    
    $rootScope.user = {};




    $scope.msg = $firebaseArray(user_todo_ref);
     $scope.ccount = $firebaseArray(count_ref);

       $scope.msg.$loaded().then(function() {
        $rootScope.remaining = $scope.msg.length;
    });


    $scope.func = function(){
         $rootScope.remaining--;
        count_ref.child('count').transaction(function (completed) {
            return (completed || 0) + 1;
        });


        //document.location.reload(true);
    };
       count_ref.child('count').on('value', function (ss) {
        $rootScope.completed =  ss.val();
    });

    $scope.add = function(){

        $scope.msg.$add({
            todo: $scope.user.todo
        });

         $rootScope.remaining++;
        //document.location.reload(true);
        console.log($scope.remaining);
        $scope.user.todo = " ";
        $mdDialog.hide();
    };


    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    }

            

});

 