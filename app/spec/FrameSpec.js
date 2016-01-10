describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#pinsRemaining", function(){
    it("is set to 10 initally", function() {
      expect(frame.pinsRemaining()).toEqual(10);
    });
  });
});
