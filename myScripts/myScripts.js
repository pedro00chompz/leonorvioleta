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
    let isHidden = true; // Initially hidden
    $(".plusButtonWork").click(function () {
        let hiddenInfoWork = $(this).nextAll(".hiddenInfoWork:first");

        // Reset the rotation to 0 degrees
        anime({
            targets: this,
            rotate: '0deg',
            duration: 1000,
        });

        // Toggle the hidden state and rotation based on 'isHidden'
        if (isHidden) {
            // Rotate 45 degrees clockwise
            anime({
                targets: this,
                rotate: '45deg',
                duration: 1000,
            });
        } else {

        }

        isHidden = !isHidden; // Toggle the hidden state

        hiddenInfoWork.toggle();

        // Check if the current SVG has the fill color "#101010"
        if ($(this).find('path').attr('fill') === "#101010") {
            // Change the SVG to the second one
            $(this).find('path').attr('fill', '#E474AB');
        } else {
            // Change the SVG back to the first one
            $(this).find('path').attr('fill', '#101010');
        }
    });
});


// Gallery

//Gallery Mobile


// Shop

//Shop Mobile
