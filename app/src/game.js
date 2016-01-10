function Game() {
  this._frames = [];
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.getScore = function() {
  var totalScore = 0;
  $.each(this.frames(), function(index, frame) {
    totalScore = totalScore + frame.getScore();
  });
  return totalScore;
};

Game.prototype.play = function() {
  for (var i = 0; i < 10; i++) {
    this._playFrame();
  }
};

Game.prototype._playFrame = function() {
  var frame = new Frame();
  frame.play();
  this._frames.push(frame);
};
