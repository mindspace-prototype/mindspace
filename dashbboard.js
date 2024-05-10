document.addEventListener("DOMContentLoaded", function() {
    // Cache the back-to-top button element
    const backToTopButton = document.querySelector(".back-to-top");

    // Function to scroll to the top with smooth behavior
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Function to handle scroll event with throttling
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    }

    // Throttle the scroll event listener
    let throttleTimeout;
    function throttleScroll() {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(function() {
                throttleTimeout = null;
                handleScroll();
            }, 200); // Adjust the throttle interval as needed
        }
    }

    // Event listener for scrolling
    window.addEventListener("scroll", throttleScroll);

    // Event listener for clicking back-to-top button
    backToTopButton.addEventListener("click", function() {
        scrollToTop();
        // Add focus to an element after scrolling to improve accessibility
        document.querySelector("h1").focus(); // Example: focus on the page heading
    });
});

