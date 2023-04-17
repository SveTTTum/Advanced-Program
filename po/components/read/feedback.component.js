const BaseComponent = require('../common/base.component');

class Feedback extends BaseComponent {
    constructor() {
        super('.feedback-overlay');
    }

    get SubmitButton() {
        return this.rootEl.$('.submit-button')
    };
    
    get CloseButton() {
        return this.rootEl.$('[data-e2e="cg-close-button"]');
    };

    async closeFeedback() {
        await this.CloseButton.click()
    }

    get EmailField() {
        return this.rootEl.$('input[type="email"]');
    };
    
    get ErrorMessage() {
        return this.rootEl.$('[data-e2e="cg-field-error"]');
    };

}

module.exports = Feedback;