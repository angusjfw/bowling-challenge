function Frame() {
  this._remainingPins = 10;
  this._frameHits = [];
}

Frame.prototype.remainingPins = function() {
  return this._remainingPins;
};

Frame.prototype.frameHits = function() {
  return this._frameHits;
};

Frame.prototype.getScore = function() {
  return this.frameHits().reduce(function(a,b){ return a + b; }, 0);
};

Frame.prototype.isStrike = function() {
  return this.frameHits()[0] === 10;
};

Frame.prototype.bowl = function() {
  var pinsHit = Math.round(Math.random() * this.remainingPins());
  this._remainingPins = this.remainingPins() - pinsHit;
  this._frameHits.push(pinsHit);
};

Frame.prototype.play = function() {
  this.bowl();
  if (!this.isStrike()) {
    this.bowl();
  }
};
