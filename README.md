# Online Thermostat

This project demonstrates my first attempt at creating a web app with Javascript. Starting with TDD-ing the business logic in Javascript, my pair and I then hooked this up to a dynamic visual interface using JQuery. An API provided by [Open Weather Map](https://openweathermap.org/) was used to fetch data from an external source and display that data on the page. 

How to use
---------
- Clone this repository to your local directory
- Navigate to directory `$ cd [name-of-local-repo]`
- Open text editor
- Copy the full project path of `index.html`
- Paste and navigate to in your browser

How to run tests
---------------
- While in local directory, enter `$ open SpecRunner.html` into the Terminal

Features
-------

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can check the weather in a city of choice by entering that city into the search bar. 

