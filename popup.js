document.getElementById("prioritize-btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTabId = tabs[0].id;
      chrome.storage.local.get("prioritizedTabId", (result) => {
        const storedTabId = result.prioritizedTabId;
        
        if (storedTabId === currentTabId) {
          // Unset prioritized tab
          chrome.storage.local.remove("prioritizedTabId", () => {
            // alert("This tab is no longer prioritized.");
            chrome.tabs.query({}, (tabs) => {
              tabs.forEach((tab) => {
                chrome.tabs.sendMessage(tab.id, { action: "prioritizeTab", tabId: null });
              });
            });
          });
        } else {
          // Set new prioritized tab
          chrome.storage.local.set({ prioritizedTabId: currentTabId }, () => {
            // alert("This tab is now prioritized and will not be auto-paused.");
            chrome.tabs.query({}, (tabs) => {
              tabs.forEach((tab) => {
                chrome.tabs.sendMessage(tab.id, { action: "prioritizeTab", tabId: currentTabId });
              });
            });
          });
        }
      });
    });
  });