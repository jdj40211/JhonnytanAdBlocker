chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*/*ads*",
          resourceTypes: ["script", "image", "stylesheet"]
        }
      }
    ],
    removeRuleIds: [1] 
  });
  