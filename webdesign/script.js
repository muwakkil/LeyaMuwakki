document.getElementById('toggleButton').addEventListener('click', function() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    imageWrappers.forEach(wrapper => {
        wrapper.classList.toggle('show-description');
    });
    // Toggle button text
    if (this.textContent === 'Show Descriptions') {
        this.textContent = 'Hide Descriptions';
    } else {
        this.textContent = 'Show Descriptions';
    }
});