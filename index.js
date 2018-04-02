'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = ''

var languageStrings = {
    "en-GB": {
        "translation": {
            "FACTS": [
		"The average cat sleeps 16-18 hours per day.",
"Calico cats are almost always female.",
"Most cats are lactose intolerant and should not be given cow’s milk.",
"Cats knead with their paws when they are happy.",
"A male cat is called a Tom and a female cat is called a Queen.",
"Cats can get tapeworm from eating mice.",
"Cats have more than 100 different vocal sounds.",
"An adult cat has 30 adult teeth.",
"Cats can run up to 30 miles per hour.",
"A cat can jump approximately seven times its height.",
"A female cat carries her kittens for about 58-65 days before they are born.",
"Cats cannot taste anything sweet.",
"A cats sense of smell is approximately 14 times greater than that of a human.",
"A group of kittens is called a kindle; a group of adult cats is called a clowder.",
"Cats have five toes on each front paw, but only four toes on each back paw.",
"Cats who fall five stories have a 90 percent survival rate.",
"A cats whiskers arent just for show – they help cats detect objects and navigate in the dark.",
"Cats cannot see in complete darkness, only at low light levels.",
"Humans greet each other by shaking hands; cats greet one another by touching their noses together.",
"Cats have sandpaper-like tongues that they use to clean groom themselves.",
"Unlike humans, cats only sweat through their paws. This is why you may see them leave moist paw prints in the summer time!",
                    ],
            "SKILL_NAME" : "Cat facts",
            "GET_FACT_MESSAGE" : "Heres one. ",
            "HELP_MESSAGE" : "You can ask me Give me a fact about cats, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },

    "en-US": {
        "translation": {
            "FACTS": [
		"The average cat sleeps 16-18 hours per day.",
"Calico cats are almost always female.",
"Most cats are lactose intolerant and should not be given cow’s milk.",
"Cats knead with their paws when they are happy.",
"A male cat is called a Tom and a female cat is called a Queen.",
"Cats can get tapeworm from eating mice.",
"Cats have more than 100 different vocal sounds.",
"An adult cat has 30 adult teeth.",
"Cats can run up to 30 miles per hour.",
"A cat can jump approximately seven times its height.",
"A female cat carries her kittens for about 58-65 days before they are born.",
"Cats cannot taste anything sweet.",
"A cats sense of smell is approximately 14 times greater than that of a human.",
"A group of kittens is called a kindle; a group of adult cats is called a clowder.",
"Cats have five toes on each front paw, but only four toes on each back paw.",
"Cats who fall five stories have a 90 percent survival rate.",
"A cats whiskers arent just for show – they help cats detect objects and navigate in the dark.",
"Cats cannot see in complete darkness, only at low light levels.",
"Humans greet each other by shaking hands; cats greet one another by touching their noses together.",
"Cats have sandpaper-like tongues that they use to clean groom themselves.",
"Unlike humans, cats only sweat through their paws. This is why you may see them leave moist paw prints in the summer time!",
                    ],
            "SKILL_NAME" : "Cat facts",
            "GET_FACT_MESSAGE" : "Heres one. ",
            "HELP_MESSAGE" : "You can ask me Give me a fact about cats, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }

};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewCatFact': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random fact about cats
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
