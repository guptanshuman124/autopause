chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getTabId") {
      sendResponse({ tabId: sender.tab.id });
    }
  });