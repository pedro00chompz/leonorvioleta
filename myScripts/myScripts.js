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
                $(".subDivs").not("." + target).hide();
                // Show the selected subdivisions
                $("." + target).show();
            }
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
