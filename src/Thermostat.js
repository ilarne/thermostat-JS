function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.up = function(n = 1) {
    this.temperature += n
}

Thermostat.prototype.down = function(n = 1) {
    this.temperature -= n
}
