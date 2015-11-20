angular.module('app', ['ionic', 'app.routes'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.controller('resultCtrl', function($scope, $http) {
    
    $scope.getResult = function(searchKey, searchURL) {
        var url= 'TradeMonitoring123.mybluemix.net/api/Alchemy/search/'+searchKey+'/'+searchURL;
        console.log(url);
        $http.get(url) 
            .success(function(data) { 
                console.log(data);
                $scope.result = data;
            }) 
            .error(function(err) { 
                console.log("data not received from url");
            }); 
        }
});