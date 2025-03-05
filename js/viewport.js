(function (window, document, displayVar) {
  const baseWidth = 768;
  //TẠO VIEWPORT
  let viewportMeta;
  const windowWidth = window.innerWidth;

  window[displayVar] = (windowWidth < baseWidth) ? "mobile" : "desktop";
  if (window[displayVar] === "desktop") {
    viewportMeta = "width=960, user-scalable=no, initial-scale=1.0";
  } else {
    let scale = 1;
    if (windowWidth !== baseWidth) {
      scale = windowWidth / baseWidth;
    }
    viewportMeta = `width=${baseWidth}, user-scalable=no, initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=${scale}`;
  }
  const metaElement = document.createElement("meta");
  metaElement.name = "viewport";
  metaElement.setAttribute("content", viewportMeta);
  document.head.appendChild(metaElement);

})(window, document, "DISPLAY");