const observer = new IntersectionObserver(entries => {
    console.log('entries: ', entries);
}, {
    threshold: [1]
});

observer.observe(document.getElementById('box'));
observer.observe(document.getElementById('box2'));