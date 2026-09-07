```javascript
const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

signalButton.addEventListener("click", function () {
  domeStatus.textContent =
    "Kairova status: online — signal confirmed. Next crew may proceed.";
});
```
