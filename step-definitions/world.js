const { setWorldConstructor } = require(`@cucumber/cucumber`);
const { RPWorld } = require(`@reportportal/agent-js-cucumber`);
setWorldConstructor(RPWorld);