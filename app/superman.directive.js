app.directive("superman", function($window) {
   return {
       restrict: 'A',
       link: function () {
           $window.alert('here I am to save the day')
       }
   }
});