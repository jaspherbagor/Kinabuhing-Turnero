const sr = ScrollReveal ({
    distance: '40px',
    duration:1250,
    delay:150,
    reset:true
});

// Home Page
sr.reveal('.hero-text, .service-quality-text, .services-items-section h2, .clients-reviews-section h2', {origin:'top'});

sr.reveal('.services-quality-items:nth-child(2), .services-items:nth-child(5), .carousel-item',{origin:'bottom'});

sr.reveal('.services-quality-items:nth-child(1), .services-items:nth-child(1), .services-items:nth-child(3), .contact-info-left', {origin:'left'});

sr.reveal('.services-quality-items:nth-child(3), .services-items:nth-child(2), .services-items:nth-child(4), .contact-map-right', {origin:'right'});

// About Us Page
sr.reveal('.how-we-operate-section h2, .company-history-head', {origin:'top'});

sr.reveal('', {origin:'bottom'});

sr.reveal('div.how-we-operate-text', {origin:'left'});

sr.reveal('div.how-we-operate-img', {origin:'right'})

