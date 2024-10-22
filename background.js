chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const videoUrl = details.url;
      console.log('Intercepted video URL:', videoUrl);
  
      // Store the intercepted URL for download
      chrome.storage.local.set({ videoUrl: videoUrl });
    },
    { urls: ["*://*.youtube.com/*videoplayback*"] },  // Filters YouTube video streams
    ["blocking"]
  );
  