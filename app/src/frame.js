function Frame() {
  this._remainingPins = 10;
  this._frameHits = [];
}

Frame.prototype.remainingPins = function() {
  return this._remainingPins;
}

Frame.prototype.getScore = function() {
  return this._frameHits.reduce(function(a,b){ return a + b }, 0);
}

Frame.prototype.isStrike = function() {
  return this._frameHits[0] === 10
}

Frame.prototype.bowl = function() {
  var pinsHit = Math.round(Math.random() * this.remainingPins());
  this._remainingPins = this.remainingPins() - pinsHit;
  this._frameHits.push(pinsHit);
}
