describe('Thermostat', function() {

  var thermostat = new Thermostat();

  afterEach(function() {
    thermostat.temperature = 20;
    this.powerSavingMode = true;
  })

  describe('#temperature', function() {
    it('returns the starting temperature of the thermostat', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#up', function() {
    it('increases the temperature', function() {
      thermostat.up(4)
      expect(thermostat.temperature).toEqual(24);
    });

    it('stops you going above max temperature', function() {
      expect(function(){thermostat.up(6)}).toThrow('OW TOO HOT');
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
      expect(function(){thermostat.down(100)}).toThrow('BBBRRRRR TOO COLD');
    });
  });

  describe('power saving', function() {
    it('starts with power saving mode being on', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe('#maxTemperature', function() {
    it('is 25 degrees when powersaver mode is on', function() {
      this.powerSavingMode = true
      expect(thermostat.maxTemperature).toEqual(25)
    });

    it('is 32 degrees when powersaver mode is off', function() {
        this.powerSavingMode = true
        thermostat.powerSavingToggle()
      expect(thermostat.maxTemperature).toEqual(32)
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
      expect(thermostat.energyUsage()).toEqual('low')
    });
    it("returns 'medium-usage' when temperature is below 25 and above 17", function() {
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('medium')
    });
    it("returns 'high-usage' when temperature is above 24", function() {
      thermostat.temperature = 28
      expect(thermostat.energyUsage()).toEqual('high')
    });
  });
});
