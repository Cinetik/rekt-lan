describe('game controller', function (){
    var scope;
    var createController;
    var $httpBackend;
    var game = {
        _id: '1',
        name : 'Hearthstone',
        description : 'card game lolilol'
    };

    beforeEach(angular.mock.module('rektlan.game'));
    beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('/api/game').respond([{
            '__v':0,
            '_id':'5563477b1eee42ac210ebc5d',
            'name':'CSGO',
            'description':'testeefqsef'
        },{
            '__v':0,
            '_id':'5563477b1eee42ac210efsef',
            'name':'DOTA2',
            'description':'MOBA'
        }]);
        createController = function() {
            return $controller('GameController', {'$scope' : $rootScope.$new() });
        };
    }));

    it('should get a list of games upon activation', function(){
        $httpBackend.expectGET('/api/game');
        var ctrl = createController();
        $httpBackend.flush();
        expect(ctrl.games).to.have.length(2);
    });

    it('should add a game to the list', function(){
        $httpBackend.expectPOST('/api/game', game).respond(200, game);
        var ctrl = createController();
        ctrl.game = game;
        ctrl.addGame();
        $httpBackend.flush();
        expect(ctrl.games).to.have.length(3);
    });

    it('should remove a game from the list', function(){
        $httpBackend.expectDELETE('/api/game/' + game._id).respond(200);
        var ctrl = createController();
        ctrl.games.push(game);
        ctrl.deleteGame(game);
        $httpBackend.flush();
        expect(ctrl.games).to.have.length(1);
    });
});
