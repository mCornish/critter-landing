$(document).ready(function() {

    track($('[data-hook=beta-link]'), 'Beta link click');
    track($('[data-hook=gs-link]'), 'G&S link click');
    track($('[data-hook=twitter-link]'), 'Twitter click');
    track($('[data-hook=gs-link2]'), 'G&S Show link click');
    track($('[data-hook=beta-submit]'), 'Beta sign up');

    var playerEl = document.getElementById('yt-player');
    var player = youtube({el: playerEl, id: 'B-9ssjy33J4'});

    player.on('play', mixpanel.track('Video play'));
    // These other video events don't work due to Google error. I'll leave them for now anyway.
    player.on('pause', mixpanel.track('Video pause'));
    player.on('ended', mixpanel.track('Video finished'));
    player.on('error', mixpanel.track('Video error'));
});

function track(el, name) {
    $(el).on('click', function() {
        console.log('track: ' + name);
        mixpanel.track(name);
    });
}