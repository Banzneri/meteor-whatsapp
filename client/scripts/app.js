// libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';

// Modules

const app = 'Whatsapp';

// App
Angular.module(App, [
    'anuglar-meteor',
    'ionic'
]);

// Startup
if(Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
} else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}