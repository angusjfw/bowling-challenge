function Frame() {
  this._remainingPins = 10;
}

Frame.prototype.remainingPins = function() {
  return this._remainingPins;
}

Frame.prototype.bowl = function() {
  var pinsHit = Math.round(Math.random() * this.remainingPins());
  this._remainingPins = this.remainingPins() - pinsHit;
}
