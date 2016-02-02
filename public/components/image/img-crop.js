

angular.module("app.img",[])

    .controller("imgCtrl",function($mdDialog,ref,$scope,$rootScope)
    {
        //var $scope = this;
        var uid = localStorage.getItem("uid");
        var user_details_ref = new Firebase(ref+uid+"/user_details");


        $scope.cropper = {};
        $scope.cropper.sourceImage = null;
        $scope.cropper.croppedImage   = null;
        $scope.bounds = {};

      

        $scope.saveImg = function()
        {
            
            //console.log('Data', $scope.cropper.sourceImage);
             user_details_ref.update({
                 profilePic:$scope.cropper.sourceImage
             })
            $mdDialog.hide();
        }

        $scope.closeDialog = function()
        {
            $mdDialog.hide();
        }
    })