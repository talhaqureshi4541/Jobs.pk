let currentIndex = 0;
        const totalItems = 10; // Total number of items
        const slideContainer = document.querySelector('.sec_1_slider .slide');
        const itemsVisible = 5; // Number of items visible at once

        // Function to move the slide
        function moveSlide(direction) {
            if (direction === 'next') {
                currentIndex++;
                if (currentIndex >= totalItems) {
                    currentIndex = 0; // Reset to the first item
                    setTimeout(() => {
                        slideContainer.style.transition = 'none'; // Disable transition temporarily
                        slideContainer.style.transform = `translateX(0%)`; // Jump to the first slide
                        setTimeout(() => {
                            slideContainer.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                        }, 50); // Delay to allow the jump
                    }, 500); // Allow the final item to be fully shown before jumping
                }
            } else if (direction === 'prev') {
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = totalItems - itemsVisible; // Loop to the last visible items
                    slideContainer.style.transition = 'none';
                    slideContainer.style.transform = `translateX(-${(totalItems - itemsVisible) * 10}%)`;
                    setTimeout(() => {
                        slideContainer.style.transition = 'transform 0.5s ease-in-out';
                        moveSlide('prev');
                    }, 50);
                }
            }
            slideContainer.style.transform = `translateX(-${currentIndex * 10}%)`;
        }

        // Auto-scroll functionality
        setInterval(() => {
            moveSlide('next');
        }, 3000); // Auto-slide every 3 seconds

        

function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
