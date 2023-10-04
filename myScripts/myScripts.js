window.onload = function () {
  function initializeSVGAnimation() {
    const svgObject = document.getElementById("animated-svg");

    if (svgObject) {
      const svgDoc = svgObject.contentDocument;

      if (svgDoc) {
        const pathElement = svgDoc.getElementById("path-id");

        anime({
          targets: pathElement,
          stroke: "#FF0000",
          duration: 4000,
          easing: "easeOutExpo",
        });
      }
    }
  }

  document
    .getElementById("animated-svg")
    .addEventListener("load", initializeSVGAnimation);
};
