import homepage from './templates/homepage.hbs';

var greeting = 'Hello World';

document.getElementById('app-container').innerHTML = homepage({greeting});