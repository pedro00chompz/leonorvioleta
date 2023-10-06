window.onload = function () {
  // Navbar

  $(document).ready(function () {
    // When a link is clicked
    $("div[data-target]").click(function () {
      let target = $(this).data("target");

      // Check if the subdivisions are visible
      if ($("." + target).is(":visible")) {
        // If visible, hide them
        $("." + target).hide();
      } else {
        // If hidden, show them
        // Hide all other subdivisions
        $(".subDivs")
          .not("." + target)
          .hide();
        // Show the selected subdivisions
        $("." + target).show();
      }
    });
  });

  // Index Flower Desktop Animation
  const flowerPath = document.querySelector("#indexFlowerDesktop path");

  // Define the starting and ending paths
  const startPath = "M100,100"; // Replace with your starting path
  const endPath = "M100,100 L50,50 L150,150"; // Replace with your ending path

  anime({
    targets: flowerPath,
    d: [
      { value: startPath },
      { value: endPath, duration: 2000 }, // Adjust the duration as needed
    ],
    easing: "linear",
    autoplay: true,
  });
};
