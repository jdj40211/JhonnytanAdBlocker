chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.googlevideo.com/*&adformat=*",
          resourceTypes: ["xmlhttprequest", "media"]
        }
      }
    ],
    removeRuleIds: [2] 
  });
  