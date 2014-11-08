describe("Controller: Hello World", function() {
    var appCtrl;
    beforeEach(module('app'));
    beforeEach(inject(function($controller) {
        appCtrl = $controller("AppCtrl");
    }));

    describe("AppCtrl", function() {
       it("should have a message of Hello World", function() {
           expect(appCtrl.message).toBe("Hello World");
       })
    });
});