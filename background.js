chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.googlevideo.com/*&adformat=*",
          resourceTypes: ["xmlhttprequest", "media"]
        }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.youtube.com/api/stats/ads*",
          resourceTypes: ["xmlhttprequest"]
        }
      },
      {
        id: 3,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.doubleclick.net/*",
          resourceTypes: ["script", "image"]
        }
      }
    ],
    removeRuleIds: [1, 2, 3] // Limpia reglas existentes antes de agregar nuevas
  });
  