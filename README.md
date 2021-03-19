# Introducing: the listmaster 9000

From the latest ReactJS technology, I have built the listmaster9000 for all your list building needs.

## Installation
To use this application, simply clone the repository. Then, you will need to install any dependencies 
using 'npm install' in the console and then run the script 'npm start' in the console to run the application.

## Features
This app features an API call using fetch and promises (who needs Axios?). There are also jsx elements 
which allow for the combination of HTML elements and javascript code. The app cleverly makes use of the 
state and React hooks to store data as necessary. Users can choose from a list of people and add or remove 
them to their own list with the simple click of a button. Worried that users may add more than one of the 
same person to the list? Fear not! The isDisabled function can quickly work out if that person is 
already stored in state and will disable the button if they are. There are also two sort buttons for 
the list thay you create. Once you have chosen some people to add to your list, simply click on either button 
and your list will be sorted either ascending or descending. The app's responsive design will adjust the 
design of the apps so it will look great on both mobile and desktop. If the screen sive is below 800 pixels, 
the two panels will render on top of each other rather than side to side to allow them to easily 
fit on a phone screen.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).