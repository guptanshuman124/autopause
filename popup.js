var currentTabId = null;
var prioritizeTabId = null;

// Function to update the button state
function updateButtonState() {
  const button = document.getElementById("prioritize-btn");

  if (prioritizeTabId !== null && currentTabId === prioritizeTabId) {
    button.innerText = "Unprioritize Tab";
    button.classList.add("clicked");
  } else {
    button.innerText = "Prioritize Tab";
    button.classList.remove("clicked");
  }
}

// Get the current tab ID and check if it is prioritized
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length > 0) {
    currentTabId = tabs[0].id;

    // Check if the current tab is prioritized
    chrome.storage.local.get("prioritizedTabId", (result) => {
      prioritizeTabId = result.prioritizedTabId || null;
      updateButtonState();
    });
  } else {
    console.error("No active tab found.");
  }
});

// Add event listener for the prioritize button
document.getElementById("prioritize-btn").addEventListener("click", () => {
  const button = document.getElementById("prioritize-btn");

  chrome.storage.local.get("prioritizedTabId", (result) => {
    const storedTabId = result.prioritizedTabId;

    if (storedTabId === currentTabId) {
      // Unset prioritized tab
      chrome.storage.local.remove("prioritizedTabId", () => {
        chrome.tabs.query({}, (tabs) => {
          tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, { action: "prioritizeTab", tabId: null });
          });
        });

        prioritizeTabId = null;
        updateButtonState();
      });
    } else {
      // Set new prioritized tab
      chrome.storage.local.set({ prioritizedTabId: currentTabId }, () => {
        chrome.tabs.query({}, (tabs) => {
          tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, { action: "prioritizeTab", tabId: currentTabId });
          });
        });

        prioritizeTabId = currentTabId;
        updateButtonState();
      });
    }
  });
});

document.addEventListener("mouseleave",()=>{
  window.close();
});