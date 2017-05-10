describe('Thermostat', function() {

  var thermostat = new Thermostat();

  afterEach(function() {
    thermostat.temperature = 20;
  })

  describe('#temperature', function() {
    it('returns the starting temperature of the thermostat', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#up', function() {
    it('increases the temperature', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('down', function() {
    it('decreases the temperature', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('#minTemperature', function() {
    it('sets minimum temperature to 10', function() {
      expect(thermostat.minTemperature).toEqual(10);
    });

    it('stops you going below minimum temperature', function() {
      expect(function(){thermostat.down(11)}).toThrow('BBBRRRRR TOO COLD');
    });
  });

  describe('power saving', function() {
    it('starts with power saving mode being on', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('switches off power saving mode when toggled', function() {
      thermostat.powerSavingToggle()
      expect(thermostat.powerSavingMode).toEqual(false);
    });
  });
});
