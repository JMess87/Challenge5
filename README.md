# Assignment Description
"Create a simple calendar application that allows a user to save events for each hour of the day by modifying the starter code. This app will run in the browser and feature dynamically updated HTML and CSS power by jQuery."

## Link to deployed page

### Challenge #5 - 

Some starter code was provided with the layout for the Work Day scheduler. I edited the color of the save button and extended out the scheduler to show the entire morning timeframe from 6AM to 11AM.

HTML File starter code was updated by removing comments that helped with direction within the application.

Created a daily schedule tool to be able to create events and save them. Dayjs code provides current date and appends the "todaysDate" ID. Added an on lick event listener for save button to set items to local storage when entered.

Identified current hour by using dayjs again and compared current hour with schedule hour and appended/removed classes accordingly based on the comparison of time.

## Resources:

-W3 Schools - Booleans and eventlisteners
-MDN Web docs - parsing a string
-dayjs - day js formatting exmaples
-jqueryui - https://jqueryui.com/addClass/
-stack overflow - setting and getting local storage with jQuery-Log Rocket:a javascript blog https://blog.logrocket.com/localstorage-javascript-complete-guide/#getitem

## Screen Shot - Shows all hours gray due to them all currently being in the past.
![Screenshot](https://user-images.githubusercontent.com/116509586/210693039-6cfa0bc1-ea52-40d0-82cf-0c9bf1f0dd34.jpg)
