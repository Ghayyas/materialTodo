/**
 * Created by ghayyas on 1/14/16.
 */

angular.module('app.service',[])
  .service('ref',function(){
    var ref = new Firebase('https://andoridmaterial.firebaseio.com');
   return ref;
});
