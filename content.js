// Función para simular la reproducción de anuncios y ocultar overlays publicitarios
const simulateAdPlayback = () => {
    const videoPlayer = document.querySelector('video');
    if (videoPlayer) {
      console.log("Simulating ad playback...");
      videoPlayer.currentTime = videoPlayer.duration; // Salta el anuncio
    }
  };
  
  // Observador para detectar anuncios y actuar sobre ellos
  const observer = new MutationObserver(() => {
    // Salta anuncios de video (botón "Omitir anuncio")
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      console.log("Skipping ad...");
      skipButton.click();
    }
  
    // Elimina overlays y banners publicitarios
    document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-module').forEach(ad => ad.remove());
  
    // Salta anuncios en reproducción detectando el estado "ad-showing"
    const videoAd = document.querySelector('.ad-showing');
    if (videoAd) {
      console.log("Hiding video ad...");
      simulateAdPlayback();
    }
  });
  
  // Inicia el observador en todo el cuerpo del documento
  observer.observe(document.body, { childList: true, subtree: true });
  