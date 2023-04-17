const BaseComponent = require('./common/base.component');
class CookieOverlay extends BaseComponent{
    constructor() {
        super('.ot-sdk-container .ot-sdk-row');
      }
      
        get acceptAllCookiesButton() {
          return this.rootEl.$('button#onetrust-accept-btn-handler');
        };  
        
        async acceptAllCookies() {
            await this.acceptAllCookiesButton.click()
        };
     
}

module.exports = new CookieOverlay();