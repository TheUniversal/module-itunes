/* global Application: true */
'use strict';

var osa = require('osa');

function sendPlaybackCommand(command) {
    var itunes = Application('iTunes');

    if (command === 'play') {
        itunes.play();
    } else if (command === 'pause') {
        itunes.pause();
    } else if (command === 'stop') {
        itunes.stop();
    } else if (command === 'next') {
        itunes.nextTrack();
    } else if (command === 'previous') {
        itunes.previousTrack();
    }

    return itunes.playerState();
}

function onResponse(callback) {
    return function (err, result, log) {
        callback(err, result);
    }
}

module.exports.onPlaybackCommand = function (command, callback) {
    osa(sendPlaybackCommand, command, onResponse(callback));
};
