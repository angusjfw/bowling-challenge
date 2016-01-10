describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#remainingPins", function() {
    it("has an inital value of 10", function() {
      expect(frame.remainingPins()).toEqual(10);
    });
  });

  describe("#getScore", function() {
    it("has an inital value of 0", function() {
      expect(frame.getScore()).toEqual(0);
    });

    it("gets the score for the frame based on frameHits", function() {
      frame._frameHits = [3, 5];
      expect(frame.getScore()).toEqual(8);
    });
  });

  describe("#isStrike", function() {
    it("has an inital value of false", function() {
      expect(frame.isStrike()).toEqual(false);
    });

    it("returns true if the first bowl of the frame is a strike", function(){
      frame._frameHits = [10];
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe("#bowl", function() {
    it("decreases remainingPins by a random number <= 10", function() {
      spyOn(Math, "random").and.returnValue(4/10);
      frame.bowl();
      expect(frame.remainingPins()).toEqual(6);
    });
    
    it("decreases remainingPins by a number <= remainingPins", function() {
      spyOn(Math, "random").and.returnValues(5/10, 5/5);
      frame.bowl();
      frame.bowl();
      expect(frame.remainingPins()).toEqual(0);
    });

    it("cannot decrease remaningPins below 0", function() {
      spyOn(Math, "random").and.returnValue(10/10);
      frame.bowl();
      frame.bowl();
      expect(frame.remainingPins()).toEqual(0);
    });

    it("adds the number of pinsHit to the _frameHits array", function() {
      spyOn(Math, "random").and.returnValue(7/10);
      frame.bowl();
      expect(frame.frameHits()[0]).toEqual(7);
    });
  });

  describe("#play", function() {
    it("plays a full frame of up to two bowls", function() {
      spyOn(Math, "random").and.returnValues(2/10, 6/8);
      frame.play();
      expect(frame.frameHits()).toEqual([2, 6]);
    });

    it("ends frame if first bowl is a strike", function() {
      spyOn(Math, "random").and.returnValue(10/10);
      frame.play();
      expect(frame.frameHits()).toEqual([10]);
    });
  });
});
