/**
 * Created by ghayyas on 1/14/16.
 */


app.controller("materialCtrl", function ($scope, $timeout, $mdSidenav, $log, $mdDialog) {


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
                templateUrl: './tabDialog.tmpl.html',
                targetEvent: ev,
                clickOutsideToClose:true
            })
    };

});