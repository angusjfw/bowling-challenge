function Game(frame_klass) {
  this._frames = [];
  this.frame_klass = frame_klass || Frame;
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.getScore = function() {
  var totalScore = 0;
  var lastScore;
  $.each(this.frames(), function(index, frame) {
    totalScore = totalScore + frame.getScore();
    if (lastScore && lastScore === 10) {
      totalScore = totalScore + frame.frameHits()[0];
    }
    lastScore = frame.getScore();
  });
  return totalScore;
};

Game.prototype.play = function() {
  for (var i = 0; i < 10; i++) {
    if (i === 9) {
      this._playFrame(true);
    } else {
      this._playFrame();
    }
  }
};

Game.prototype._playFrame = function(isLast) {
  var frame = new this.frame_klass();
  if (isLast) {
    frame._isLast = true;
  }
  frame.play();
  this._frames.push(frame);
};
