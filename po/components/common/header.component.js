const BaseComponent = require('./base.component');
class Header extends BaseComponent {
 constructor() {
  super('.cg-banner-container');
}

  get searchBar() {
    return this.rootEl.$('.search-bar');
  };

  get searchButton() {
    return this.rootEl.$('.cg-search-button');
  };

  get loginButton() {
    return this.rootEl.$('.login-button');
  }

}

module.exports = new Header();

