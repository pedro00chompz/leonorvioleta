window.onload = function () {

  // Navbar

  $(document).ready(function() {
    // When the "WORK" link is clicked
    $("#workLink").click(function() {
      // Toggle the display of the sub-divs
      $(".subDivs").toggle();
    });
  });




  //

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
