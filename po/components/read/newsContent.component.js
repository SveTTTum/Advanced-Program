const BaseComponent = require('../common/base.component');

class NewsContent extends BaseComponent{
  constructor() {
        super('.document-view');
      }
      
    get FeedbackButton() {
        return this.rootEl.$('.wk-icon-announce');
    };  

    get LeadStoryImage () {
        return $('.teaser .topImage')
    };
}

module.exports = NewsContent;