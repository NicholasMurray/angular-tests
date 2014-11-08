describe("Superman directive", function() {

    var supermanDirective, element, windowMock, scope, compile;

    beforeEach(module("app"));
    beforeEach(inject(function($window, $rootScope, $compile){

        windowMock = $window;
        spyOn(windowMock, "alert");

        scope = $rootScope;
        element = angular.element("<div superman></div>");
        supermanDirective = $compile(element)(scope);
        scope.$digest();
    }));

    it("should display an alert", function() {
        expect(windowMock.alert).toHaveBeenCalled();
    });
});