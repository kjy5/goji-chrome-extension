/**
 * Extract detected brand data
 */
extractBrandData().then((data) => {
  console.log(data);
}, (error) => {
  console.log(error);
});
console.log("tried");

/**
 * Inject tab
 */
fetch(chrome.runtime.getURL("components/tab.html"))
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);

    // Set Goji tab icon
    document.getElementById("goji-tab-icon").src = chrome.runtime.getURL("icons/goji-icon.png");
  });

// Add click behavior
// gojiTabElement.addEventListener("click", function handleClick() {
//   present(chrome.runtime.getURL("components/websitestatus.html"));
// });

/**
 * Present the Goji website status popup window
 * @param {string} mylink resolved URL to popup HTML document
 * @returns {void} returns early if the window is not in focus
 */
function present(mylink) {
  // Exit early if the window is not in focus
  if (!window.focus) {
    return;
  }

  // Extract the HTML document url
  var href;
  if (typeof mylink == "string") {
    href = mylink;
  } else {
    href = mylink.href;
  }

  // Present popup
  window.open(
    href,
    "Goji Store Score",
    "width=400,height=600,scrollbars=yes,location=0"
  );
}
