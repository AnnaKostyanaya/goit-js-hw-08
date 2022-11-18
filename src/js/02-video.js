import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedDuration = localStorage.getItem("videoplayer-current-time");
console.log(savedDuration);

player.on('timeupdate', throttle(function (data) {
    const durationData = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.setCurrentTime(savedDuration).then(function (seconds) {
    localStorage.removeItem('videoplayer-current-time');
}
).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


var callback = function () {
    localStorage.removeItem('videoplayer-current-time');
};
player.off('ended', callback);
