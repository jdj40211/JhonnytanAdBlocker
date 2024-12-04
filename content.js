const observer = new MutationObserver(() => {
    
    document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-image-overlay').forEach(ad => ad.remove());
    
    
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  
    
    document.querySelectorAll('.ytp-ad-module').forEach(ad => ad.remove());
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  