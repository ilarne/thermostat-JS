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

  describe('#down', function() {
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

  describe('#maxTemperature', function() {
    it('is 25 degrees when powersaver mode is on', function() {
      thermostat.powerSavingMode = true
      expect(thermostat.maxTemperature()).toEqual(25)
    });

    it('is 32 degrees when powersaver mode is on', function() {
      thermostat.powerSavingToggle()
      console.log(thermostat.powerSavingMode)
      expect(thermostat.maxTemperature()).toEqual(32)
    });
  });

  describe('#reset', function() {
    it('resets the temperature to 20', function() {
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    });
  });
  describe('#energyUsage', function() {
    it("returns 'low-usage' when temperature is below 18", function() {
      thermostat.temperature = 16
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });
    it("returns 'medium-usage' when temperature is below 25 and above 17", function() {
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });
    it("returns 'high-usage' when temperature is above 24", function() {
      thermostat.temperature = 28
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });
});
