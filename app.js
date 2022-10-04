const navigationLink = document.querySelector('.nav-links');        // NAVIGATION TOGGLE
const toggler = document.querySelector('.mobile-toggle');

toggler.addEventListener('click', function () {
    const isVisible = navigationLink.getAttribute('data-visible');

    if (isVisible === 'false'){
        navigationLink.setAttribute('data-visible', true);
        toggler.setAttribute('aria-expanded', true);
    } else {
        navigationLink.setAttribute('data-visible', false);
        toggler.setAttribute('aria-expanded', false);
    }
})

const observer = new IntersectionObserver((entries) => {    // SCROLL ANIMATION 
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));