app.directive("dateOfBirth", function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            element.bind('blur', function(e) {
                element.val(convertDate(element.val()));
            });
        }
    }
});

convertDate = function(d) {
    var s = d.replace(/-/g, '/');
    return s;
}