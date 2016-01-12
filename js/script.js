/**
 * Created by Ghayyas on 1/11/2016.
 */


var app = angular.module('materialApp',['ngMaterial','ngMdIcons']);

app.controller("materialCtrl", function ($scope, $timeout, $mdSidenav, $log) {
    $scope.image = "http://www.androidsoftol.com/android45678/uploads/allimg/120117/e427dc14-4423-4264-9946-fdadb7d890b6_1.jpg";
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };
    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
    $scope.messages = [];
    $scope.messages.push({
        //image : "http://www.androidsoftol.com/android45678/uploads/allimg/120117/e427dc14-4423-4264-9946-fdadb7d890b6_1.jpg"
 })
});