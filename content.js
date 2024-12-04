
const removeAds = () => {
    
    document.querySelectorAll('ytd-promoted-sparkles-web-renderer, ytd-display-ad-renderer').forEach((ad) => ad.remove());

    document.querySelectorAll('#masthead-ad, .ytd-video-masthead-ad-v3-renderer').forEach((ad) => ad.remove());
  };
  
  
  const observer = new MutationObserver(() => removeAds());
  observer.observe(document.body, { childList: true, subtree: true });
  
  removeAds();
  