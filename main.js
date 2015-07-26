'use strict';

var Commands = require('the-universal-common/command/Commands');
var osaService = require('./osaService');

var dispatcher;

function onPlaybackStateChange(err, state) {
    if (err) {
        console.log(err.message);
    }
    if (state) {
        dispatcher.onPlaybackEvent(state);
    }
}

module.exports = function Foobar2000Module(playerEventDispatcher) {
    dispatcher = playerEventDispatcher;

    return {
        name: 'iTunes',
        supportedCommands: [
            Commands.PLAYBACK.PLAY,
            Commands.PLAYBACK.PAUSE,
            Commands.PLAYBACK.STOP,
            Commands.PLAYBACK.NEXT,
            Commands.PLAYBACK.PREVIOUS
        ],
        onPlaybackCommand: function (command) {
            osaService.onPlaybackCommand(command, onPlaybackStateChange)
        },
        onVolumeChange: function () {},
        onActivateModule: function(){

        },
        onDeactivateModule: function () {

        }
    }
};

