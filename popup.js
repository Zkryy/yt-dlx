// Fade in the popup when opened
document.body.style.opacity = 1;

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve video info from local storage
  chrome.storage.local.get(['title', 'thumbnail_url'], function(data) {
    document.getElementById('video-title').textContent = data.title || "No video detected";
    document.getElementById('thumbnail').src = data.thumbnail_url || "";
  });

  // Download button functionality
  document.getElementById('downloadBtn').addEventListener('click', function() {
    const resolution = document.getElementById('resolution').value;
    const format = document.getElementById('format').value;

    chrome.storage.local.get('videoId', function(data) {
      const videoId = data.videoId;
      const downloadUrl = `https://www.youtube.com/watch?v=${videoId}`;  // Replace with actual stream URL logic

      // Start the download
      chrome.downloads.download({
        url: downloadUrl,  // Replace with real video stream URL
        filename: `video_${resolution}.${format}`,
        saveAs: true
      });
    });
  });
});

// Fade out and close when the extension is closed
window.onbeforeunload = function() {
  document.body.style.opacity = 0;
  return null;
};
