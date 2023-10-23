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

    $(document).ready(function () {
        $("div[data-target]").click(function () {
            let target = $(this).data("target");

            $("." + target).toggleClass("visible");

            // Hide all other subdivisions
            $(".subDivs")
                .not("." + target)
                .removeClass("visible");

            // Get the position of the parent container (navbar)
            const parentContainer = $(this).closest(".navbarMobileOptions");
            const parentOffset = parentContainer.offset();

            // Adjust the position of the dropdown menu
            $("." + target).css({
                top: parentOffset.top + parentContainer.outerHeight(),
                left: parentOffset.left,
            });
        });
    });
};

// Flower Desktop Animation

/*

document.addEventListener("DOMContentLoaded", function () {
  // Function to animate an SVG path
  function animateSVGPath(selector) {
    const flowerPath = document.querySelector(selector);

    anime.set(flowerPath, {
      strokeDashoffset: anime.setDashoffset(flowerPath),
      strokeDasharray: anime.setDashoffset(flowerPath),
    });

    const timeline = anime.timeline({
      easing: "easeInOutQuad",
      duration: 1500,
      autoplay: true,
    });

    timeline.add({
      targets: flowerPath,
      strokeDashoffset: [anime.setDashoffset(flowerPath), 0],
      duration: 9000,
    });
  }

  animateSVGPath(".flowerPathOuter");
  animateSVGPath(".flowerPathCenter");
});

 */

//Work

//Work Mobile

$(document).ready(function () {
    $(".plusButtonWork").click(function () {
        let hiddenInfoWork = $(this).nextAll(".hiddenInfoWork:first");

        hiddenInfoWork.toggle();

        // Check if the current SVG has the fill color "#101010"
        if ($(this).find('path').attr('fill') === "#101010") {
            // Change the SVG to the second one
            $(this).find('path').attr('fill', '#E474AB');
            $(this).find('path').attr('d', 'M10.1421 11.5563L5.89941 7.31371L1.65677 11.5563L0.24256 10.1421L4.4852 5.89949L0.24256 1.65685L1.65677 0.242641L5.89941 4.48528L10.1421 0.242641L11.5563 1.65685L7.31363 5.89949L11.5563 10.1421L10.1421 11.5563Z');
        } else {
            // Change the SVG back to the first one
            $(this).find('path').attr('fill', '#101010');
            $(this).find('path').attr('d', 'M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z');
        }

    });
});


// Gallery

//Gallery Mobile
