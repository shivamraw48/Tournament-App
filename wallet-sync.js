// wallet-sync.js

function updateWalletDisplays() {
    const newBalance = localStorage.getItem("walletBalance") || "0";
    const walletSpans = document.querySelectorAll("#walletBalance");
  
    walletSpans.forEach(span => {
      const current = span.textContent;
      if (current !== newBalance) {
        showWalletPopup(newBalance);
      }
      span.textContent = newBalance;
    });
  }
  
  function showWalletPopup(balance) {
    const popup = document.createElement("div");
    popup.textContent = `💰 Wallet Updated: ₹${balance}`;
    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.right = "30px";
    popup.style.padding = "15px 20px";
    popup.style.backgroundColor = "#4caf50";
    popup.style.color = "white";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    popup.style.zIndex = "9999";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.3s ease";
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.style.opacity = "1";
    }, 100);
  
    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => popup.remove(), 300);
    }, 2500);
  }
  
  // Check for updates every 1 second
  setInterval(updateWalletDisplays, 1000);
  