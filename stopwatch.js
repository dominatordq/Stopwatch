/*
 * Author: Dominic Quintana
 * Fun little stopwatch script!
*/

function Stopwatch() {
    this.duration = 0;
    let currentTime;
    let stopTime;

    let status = { start: false };
    // resets duration and status of stopwatch
    this.reset = function() {
        this.duration = 0;
        status.start = false;
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
        this.duration = ((stopTime - currentTime) / 1000) + this.duration;
        console.log(this.duration + ' s');
        status['start'] = false;
    }
}

const sw = new Stopwatch();
sw.reset();
