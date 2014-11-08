describe("Directive: blur", function() {
    var scope, input, element, form;
    beforeEach(module("app"));
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope;
        input = angular.element('<input type="text" name="dateOfBirth" data-ng-model="dateOfBirth" date-of-birth />');
        element = angular.element('<form name="form"></form>');
        element.append(input);

        scope.dateOfBirth = "";
        form = $compile(element)(scope);
        scope.$digest();

        changeInputValue = function(elem, value) {
            elem.val(value);
            elem.triggerHandler('blur');
        }

    }));



    it("should replace - with /", function() {
        changeInputValue(form.find('input'), "10-10-1970");
        expect(form.find('input').val()).toBe("10/10/1970");
    });
});