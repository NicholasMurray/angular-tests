describe("Controller: tabs", function() {

    var element, scope, tabsController;

    beforeEach(module("app"));
    beforeEach(inject(function($window, $controller, $rootScope){

        windowMock = $window;
        spyOn(windowMock, "alert");

        scope = $rootScope.$new();

        createController = function() {
            return $controller('TabsCtrl', {
                '$scope': scope,
                '$window': windowMock
            });
        };
    }));

    it('should alert when tab has alertMe', function() {

        var controller = createController();
        scope.alertMe();

        setTimeout(function() {
            expect(windowMock.alert).toHaveBeenCalled();
        },1000);
    });

});

