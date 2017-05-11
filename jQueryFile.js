$( document ).ready(function() {

  var thermostat = new Thermostat();

$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=2643744&APPID=3e4fad0848e570049c0e27f4eb9cbe78", function temp(localtemperature) {
  var temp = (localtemperature.main.temp - 273.15)
  $("#local-weather").text(temp + "°C");
});

  $("#up").click(function() {
    thermostat.up();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
    $("#energy-usage").text(thermostat.energyUsage());
    updatecolour();
  });

  $("#down").click(function() {
    thermostat.down();
    $("#temperature-display").text(thermostat.temperatureDisplay() + "°C");
    $("#energy-usage").text(thermostat.energyUsage());
    updatecolour();
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

  $("#energy-usage").text(thermostat.energyUsage());

  function updatecolour() {
    $('.body').attr('id', thermostat.energyUsage());
  }

});
