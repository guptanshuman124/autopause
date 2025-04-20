autopause = false;
priority = null;

// Get the tab ID once on load
chrome.runtime.sendMessage({ action: "getTabId" }, (response) => {
    if (response && response.tabId !== undefined) {
        tabId = response.tabId;
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "prioritizeTab") {
        priority = message.tabId;
    }

    if (document.hidden && tabId !== null && tabId !== priority) {
        const video = document.querySelector('video');
        if (video && !video.paused) {
          video.pause();
          autopause = true;
        }
    }
});

document.addEventListener('visibilitychange', function () {
    const video = document.querySelector('video');

    if (!video) {
        return;
    }

    if (document.hidden) {
        if (tabId !== null && tabId !== priority) {
          if (!video.paused) {
            video.pause();
            autopause = true;
          }
        }
    } else {
        if (autopause) {
          video.play();
          autopause = false;
        }
    }
});
