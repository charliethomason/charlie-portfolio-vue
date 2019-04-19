import homepage from './pages/homepage.hbs';

var greeting = 'Hello World';

document.getElementById('app-container').innerHTML = homepage({greeting});