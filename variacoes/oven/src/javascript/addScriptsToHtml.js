let iframe4 = document.getElementById("product-iframe-page");

const addScripts = () => {
  let script = iframe4.contentDocument.createElement("script");
  script.src = "./javascript/slider.js";
  script.type = "text/javascript";
  iframe4.contentDocument.body.appendChild(script);

  script = iframe4.contentDocument.createElement("script");
  script.src = "./javascript/imagesAnimation.js";
  script.type = "text/javascript";
  iframe4.contentDocument.body.appendChild(script);

  script = iframe4.contentDocument.createElement("script");
  script.src = "./javascript/senders.js";
  script.type = "text/javascript";
  iframe4.contentDocument.body.appendChild(script);

  script = iframe4.contentDocument.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js";
  script.type = "text/javascript";
  iframe4.contentDocument.body.appendChild(script);
};


iframe4.addEventListener("load", function () {
  let doc = iframe4.contentDocument || iframe4.contentWindow.document;

  if (doc.readyState === "complete") {
    addScripts();
  } else {
    doc.addEventListener("load", addScripts);
  }
});
