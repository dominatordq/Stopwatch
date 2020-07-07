/*
 * Author: Dominic Quintana
 * Fun little stopwatch script!
*/

function Stopwatch() {
    let duration = 0;
    let currentTime;
    let stopTime;

    let status = { start: false };
    // resets duration and status of stopwatch
    this.reset = function() {
        duration = 0;
        status.start = false;
        currentTime = null;
        stopTime = null;
    };
    // starts the stopwatch
    this.start = function() {
        // check to see if it is already started first
        if (status.start === true)
            throw new Error('Stopwatch is already started.');
        
        currentTime = Date.now(); // get time of start
        status['start'] = true;
    }
    // pauses the stopwatch
    this.stop = function() {
        // check to see if it is already stopped
        if (status.start === false)
            throw new Error('Stopwatch is already stopped.');

        stopTime = Date.now();
        duration = ((stopTime - currentTime) / 1000) + duration;
        console.log(duration + ' s');
        status['start'] = false;
    }
    // getter for the duration variable
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const sw = new Stopwatch();
sw.reset();
