document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to show the next slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Start the slideshow
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Ensure all videos are playing
    slides.forEach(video => {
        video.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
    });

    // Add click event to videos to toggle play/pause
    slides.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
}); 