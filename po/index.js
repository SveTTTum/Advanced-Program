const HomePage = require('./pages/home.page');
const LoginPage = require('./pages/login.page');
const BasePage = require('./pages/base.page');

class App {
    constructor() {
        this.BasePage = BasePage;
        this.HomePage = HomePage;
        this.LoginPage = LoginPage;
    }
}

module.exports = new App();