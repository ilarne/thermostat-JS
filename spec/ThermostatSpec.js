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
});
