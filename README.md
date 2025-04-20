# 🎬 YouTube AutoPause Extension

A lightweight Chrome extension that automatically pauses YouTube videos when the tab is unfocused and resumes playback when the tab regains focus. Designed for multitaskers who want to manage video playback seamlessly across multiple tabs.

## 🚀 Features

- ⏸️ **Auto Pause**  
  Automatically pauses the currently playing YouTube video when you switch to a different tab or window.

- ▶️ **Auto Resume**  
  Instantly resumes playback when you return to the same tab.

- ⭐ **Priority Tab Mode** *(Optional)*  
  Select a tab to **bypass** the autopause behavior. Ideal when you want to keep background music, podcasts, or livestreams playing while working in other tabs.

## 📦 How It Works

1. The extension listens for tab visibility changes.
2. When a YouTube video is detected:
   - If the tab becomes inactive, the video is paused.
   - If the tab becomes active again, the video resumes.
3. If a tab is marked as "prioritized," it is excluded from the pause/resume behavior.

## 🔧 Manual Installation

Since this extension is not yet on the Chrome Web Store, you can install it manually by following these steps:

1. Clone or download this repository as a ZIP file.
2. Extract the contents to a folder on your computer.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** using the toggle in the top-right corner.
5. Click **"Load unpacked"** and select the extracted folder.
6. You're good to go! 🎉

## 🧠 Why Use This?

- No more missing parts of a video when switching tabs.
- Prevents multiple videos from playing simultaneously.
- Great for productivity, especially when watching tutorials or lectures.

## 🛠️ Tech Stack

- JavaScript
- Chrome Extensions API
- UI built with HTML/CSS

## 📌 Notes

- Only works on YouTube tabs.
- If a video is manually paused by the user, it won’t resume automatically upon tab re-focus.
- One prioritized tab at a time is supported for simplicity.

## 📄 License

MIT License

---

> Built with ❤️ to make YouTube multitasking smarter.
