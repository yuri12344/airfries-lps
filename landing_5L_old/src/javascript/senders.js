document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
      let height = document.body.scrollHeight;
      console.log("Sending height: ", height); // Debugging
      parent.postMessage({ frameHeight: height }, "*");
    }, 500);
  });