const Alexa = require('alexa-sdk');

exports.handlers = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = 'amzn1.ask.skill.9c1c934a-e854-4e46-9a3b-e613b86a0799';
  alexa.registerHandlers(handlers);
  alexa.execute();
}

const handlers = {
  'HelloWorldIntent' : function() {
    this.emit(':tell', 'Hello world');
  }
}