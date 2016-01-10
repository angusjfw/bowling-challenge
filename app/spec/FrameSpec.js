describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#remainingPins", function() {
    it("is set to 10 initally", function() {
      expect(frame.remainingPins()).toEqual(10);
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
      console.log(frame.remainingPins());
      frame.bowl();
      console.log(frame.remainingPins());
      expect(frame.remainingPins()).toEqual(0);
    });

    it("cannot decrease remaningPins below 0", function() {
      spyOn(Math, "random").and.returnValue(1);
      frame.bowl();
      frame.bowl();
      expect(frame.remainingPins()).toEqual(0);
    });

  });
});
