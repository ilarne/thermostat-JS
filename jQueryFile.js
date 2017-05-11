$( document ).ready(function() {

  var thermostat = new Thermostat();


  $("#up").click(function() {
    thermostat.up();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
  });

  $("#down").click(function() {
    thermostat.down();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
  });

  $("#powersavemode").click(function() {
    thermostat.powerSavingToggle();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
  });

  $('label input[type="checkbox"]').each(function (){
    if($(this).hasClass('checked')){
      $(this).attr('checked', true);
    }
  });

  $("#reset").click(function() {
    thermostat.reset();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
  });

  $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");

});
