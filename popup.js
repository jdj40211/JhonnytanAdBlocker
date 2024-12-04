let enabled = true;

document.getElementById("toggle").addEventListener("click", () => {
  enabled = !enabled;
  document.getElementById("status").textContent = enabled ? "Enabled" : "Disabled";

  chrome.runtime.sendMessage({ enabled });
});
