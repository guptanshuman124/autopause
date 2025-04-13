// Store the state of videos that were playing before switching tabs
let playingVideos = new Set();

// Function to check if a video is playing
function isVideoPlaying(video) {
    return !!(
        video &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
    );
}

// Function to pause all playing videos except prioritized ones
function pausePlayingVideos() {
    const videos = document.querySelectorAll('video');
    playingVideos.clear(); // Clear the previous state
    videos.forEach(video => {
        if (isVideoPlaying(video) && !prioritizedVideos.has(video)) {
            playingVideos.add(video); // Track videos that were playing
            video.pause();
        }
    });
}

// Function to resume only the videos that were playing before
function resumePlayingVideos() {
    playingVideos.forEach(video => {
        if (video.paused) {
            video.play();
        }
    });
    playingVideos.clear(); // Clear the state after resuming
}

// Listen for visibility change (tab switch)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        pausePlayingVideos(); // Pause videos when the tab is hidden
    } else {
        resumePlayingVideos(); // Resume only the videos that were playing
    }
});