describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
describe('getting game list', function (){
    var scope;
    var ctrl;
    beforeEach(angular.mock.module('rektlan.game'));
    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        ctrl = $controller('GameController', {$scope: scope});
        console.info(ctrl);
    }));

    it('should get a list of games upon activation', function(){
        expect(ctrl.games.length).to.equal(4);
    });
});
