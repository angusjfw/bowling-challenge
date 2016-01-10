describe("Game", function() {
  var game;
  var frame_klass;
  var frame;

  beforeEach(function() {
    function FrameClassMock() {
      this._isLast = false;
      this.play = function() {};
    }
    frame = jasmine.createSpyObj("frame", ["getScore"], ["frameHits"]);
    game = new Game(FrameClassMock);
  });

  describe("#frames", function() {
    it("is initialised as an empty array", function() {
      expect(game.frames()).toEqual([]);
    });

    it("gets the array of all frames stored in _frames", function() {
      game._frames = [frame, "frame" ]; 
      expect(game.frames()).toEqual([frame, "frame"]);
    });
  });

  describe("#getScore", function() {
    it("has an initial value of 0", function() {
      expect(game.getScore()).toEqual(0);
    });

    it("calculate the score from the _frames array", function() {
      frame.getScore = function() { return 8; };
      game._frames = [frame, frame];
      expect(game.getScore()).toEqual(16);
    });

    it("adds the bonus score for spares after following frame", function() { 
      frame.getScore = function() { return 10; };
      frame.frameHits = function() { return [5, 5]; };
      game._frames = [frame, frame];
      expect(game.getScore()).toEqual(25);
    });
  });

  describe("#play()", function() {
    it("plays an entire game of 10 frames", function() {
      game.play();
      expect(game.frames().length).toEqual(10);
    });

    it("sets property isLast on final frame before calling play", function() {
      game.play();
      expect(game.frames()[9]._isLast).toEqual(true);
    });
  });
});
