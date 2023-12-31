const sr = ScrollReveal ({
    distance: '40px',
    duration:1050,
    delay:100,
    reset:true,
});

// Home Page
sr.reveal(
    '.hero-text, .service-quality-text, .services-items-section h2, .clients-reviews-section h2',

    {origin:'top'}
);

sr.reveal(
    '.services-quality-items:nth-child(2), .services-items:nth-child(5)',

    {origin:'bottom'}
);

sr.reveal(
    '.services-quality-items:nth-child(1), .services-items:nth-child(1), .services-items:nth-child(3), .contact-info-left', 
    
    {origin:'left'}   
);

sr.reveal(
    '.services-quality-items:nth-child(3), .services-items:nth-child(2), .services-items:nth-child(4), .contact-map-right',

    {origin:'right'}
);

// About Us Page
sr.reveal(
    '.how-we-operate-section h2, .company-history-head, .work-team-section h2, .mission-and-values-head, .mission-div, .core-values-head ',

    {origin:'top'}
);

sr.reveal(
    'div.how-we-operate-text, .company-history-row-left:nth-child(1), .company-history-row-right:nth-child(1), .work-team-items:nth-child(1), .work-team-items:nth-child(3), .core-values-left ',

    {origin:'left'}
);

sr.reveal(
    'div.how-we-operate-img, .company-history-row-right:nth-child(2), .company-history-row-left:nth-child(2), .work-team-items:nth-child(2), .work-team-items:nth-child(4), .core-values-right',

    {origin:'right'}  
);

// Services Page
sr.reveal(
    '.service-categories-section h2',

    {origin:'top'}    
);

sr.reveal(
    '.welding-category, .cutting-category, .drilling-category, .additional-services-list:nth-child(1)',

    {origin:'left'}
);

sr.reveal(
    '.machining-category, .fabrication-category, .threading-category, .additional-services-list:nth-child(2)',
    
    {origin:'right'}
);

// Project Gallery Page
sr.reveal(
    '.project-gallery-items h2',

    {origin:'top'}
);

sr.reveal(
    '.gallery-items:nth-child(1), .gallery-items:nth-child(4), .gallery-items:nth-child(7), .gallery-items:nth-child(9)',
    
    {origin:'left'}
);

sr.reveal(
    '.gallery-items:nth-child(3), .gallery-items:nth-child(6), .gallery-items:nth-child(9), .gallery-items:nth-child(12)',
    
    {origin:'right'}
);