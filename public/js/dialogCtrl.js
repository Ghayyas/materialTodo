/**
 * Created by ghayyas on 1/13/16.
 */


app.controller('DialogController', function ($scope, $mdDialog ,$firebaseArray, $rootScope , ref) {

    $scope.user = {};
    $rootScope.completed = 0;


    var cd = ref.child('messages');
    $scope.msg = $firebaseArray(cd);


    $scope.msg.$loaded().then(function() {
        $scope.remaining = $scope.msg.length;
    });

    $scope.func = function(){
        $scope.remaining--;
        ref.child('count').transaction(function (completed) {
            return (completed || 0) + 1;
        });


        document.location.reload(true);
    };
    ref.child('count').on('value', function (ss) {
        $rootScope.completed =  ss.val();
    });

    $scope.add = function(){

        $scope.msg.$add({
            todo: $scope.user.todo
        });

        $scope.remaining++;
        document.location.reload(true);
        console.log($scope.remaining++);
        $scope.user.todo = " ";
        $mdDialog.hide();
    };


    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    }

});
