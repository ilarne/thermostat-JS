function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
};

Thermostat.prototype.up = function(n = 1) {
  if (this.temperature + n >= this.maxTemperature) {
    throw('OW TOO HOT')
  }
   else {
    this.temperature += n
  }
}

Thermostat.prototype.down = function(n = 1) {
  if (this.temperature - n < this.minTemperature) {
    throw('BBBRRRRR TOO COLD')
  }
  else {
    this.temperature -= n
  }
}

Thermostat.prototype.temperatureDisplay = function() {
    return this.temperature;
}

Thermostat.prototype.powerSavingToggle = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode === false) {
      this.maxTemperature = 32
  }
  else {
      this.maxTemperature = 25
      this.temperature = 25
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function() {
  return (this.temperature < 25) ? ((this.temperature < 18) ? 'low' : 'medium') : 'high'
}
