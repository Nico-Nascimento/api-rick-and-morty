function createErrorContainer(message) {
  container.innerHTML = `<div id="errorContainer">
  <span>${message}</span>
</div>`;
}

function renderError(message) {
  createErrorContainer(message);
}