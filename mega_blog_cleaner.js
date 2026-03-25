const fs = require('fs');

// 1. Get correct Header & Footer from about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

// 2. Prepare News Details Template
let detailsTemplate = fs.readFileSync('news-details.html', 'utf8');

// Fix Header/Footer in template
const detailsHeaderEnd = detailsTemplate.indexOf('<!-- Breadcrumb');
const detailsFooterStart = detailsTemplate.indexOf('<!-- footer Section start -->');
if (detailsFooterStart === -1) {
    // Try lowercase or other comment
    const altFooterStart = detailsTemplate.indexOf('<footer');
    detailsTemplate = header + detailsTemplate.substring(detailsHeaderEnd, altFooterStart) + footer;
} else {
    detailsTemplate = header + detailsTemplate.substring(detailsHeaderEnd, detailsFooterStart) + footer;
}

// Translate sidebar in detailsTemplate
detailsTemplate = detailsTemplate.replace(/<h3>Categories<\/h3>/g, '<h3>Cat\u00e9gories</h3>');
detailsTemplate = detailsTemplate.replace(/<h3>Recent Post<\/h3>/g, '<h3>Articles R\u00e9cents</h3>');
detailsTemplate = detailsTemplate.replace(/<h3>Tags<\/h3>/g, '<h3>Mots-cl\u00e9s</h3>');

// Replace category items with relevant ones
const categoriesRegex = /<div class="news-widget-categories">[\s\S]*?<\/div>/;
const newCategories = `
                                    <div class="news-widget-categories">
                                        <ul>
                                            <li><a href="news.html">Vie de l'\u00c9cole</a> <span>(3)</span></li>
                                            <li><a href="news.html">P\u00e9dagogie</a> <span>(2)</span></li>
                                            <li><a href="news.html">\u00c9v\u00e9nements</a> <span>(5)</span></li>
                                            <li><a href="news.html">Inscriptions</a> <span>(1)</span></li>
                                        </ul>
                                    </div>
`;
detailsTemplate = detailsTemplate.replace(categoriesRegex, newCategories);

// Remove search form if redundant or translate
detailsTemplate = detailsTemplate.replace(/placeholder="Search here"/g, 'placeholder="Rechercher..."');

fs.writeFileSync('news-details.html', detailsTemplate, 'utf8');

// 3. Re-generate Articles
const articles = [
    {
        id: 1,
        date: '12 Mars 2026',
        title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !',
        summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais.',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
        content: `
            <p>Le 12 mars 2026 restera une date marquante. Nos \u00e9l\u00e8ves ont particip\u00e9 avec brio \u00e0 la <strong>Dict\u00e9e P.G.L.</strong>, un \u00e9v\u00e9nement international d\u00e9di\u00e9 \u00e0 la ma\u00eetrise du fran\u00e7ais.</p>
            <p>Cette comp\u00e9tition valorise la richesse de la francophonie et la solidarit\u00e9 internationale.</p>
            <blockquote>"Voir nos \u00e9l\u00e8ves s'investir avec autant de passion est notre plus grande fiert\u00e9." \u2014 Direction P\u00e9dagogique.</blockquote>
        `
    },
    {
        id: 2,
        date: '20 F\u00e9vrier 2026',
        title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2',
        summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        content: `
            <p>Nos \u00e9l\u00e8ves de <strong>CE2</strong> ont transform\u00e9 la cour en laboratoire scientifique. Une approche concr\u00e8te pour comprendre le monde qui nous entoure.</p>
            <p>Exp\u00e9riences, observations et d\u00e9couvertes \u00e9taient au rendez-vous pour stimuler la curiosit\u00e9 naturelle de nos enfants.</p>
        `
    },
    {
        id: 3,
        date: '15 Janvier 2026',
        title: 'Inscriptions 2026-2027 : C\'est Parti !',
        summary: 'Lancement officiel de la campagne et pr\u00e9sentation des innovations pr\u00e9vues pour la rentr\u00e9e.',
        image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80',
        content: `
            <p>L'ouverture officielle des inscriptions pour l'ann\u00e9e scolaire 2026-2027 est annonc\u00e9e. D\u00e9couvrez nos nouveaut\u00e9s : tableaux interactifs, nouveaux programmes et activit\u00e9s.</p>
            <p>Nous invitons les parents \u00e0 visiter nos locaux et \u00e0 rencontrer notre \u00e9quipe lors de nos journ\u00e9es Portes Ouvertes.</p>
        `
    }
];

articles.forEach(art => {
    let content = detailsTemplate;
    content = content.replace(/<h1>.*?<\/h1>/, `<h1>${art.title}</h1>`);
    content = content.replace(/<span class="date">.*?<\/span>/, `<span class="date"><i class="fal fa-calendar-alt"></i> ${art.date}</span>`);
    
    // Surgical replacement of the main content area
    const bodyStartMark = '<div class="news-details-content">';
    const bodyStart = content.indexOf(bodyStartMark);
    if (bodyStart !== -1) {
        const bodyEnd = content.indexOf('</div>', bodyStart);
        content = content.substring(0, bodyStart + bodyStartMark.length) + art.content + content.substring(bodyEnd);
    }
    
    // Image replacement
    content = content.replace(/<img src="assets\/img\/news\/news-details\.jpg" alt="img">/, `<img src="${art.image}" alt="img" style="width:100%; border-radius:20px;">`);
    
    fs.writeFileSync(`news-details-${art.id}.html`, content, 'utf8');
    console.log(`Updated Detail Page: news-details-${art.id}.html`);
});

// 4. Fix news.html (Listing page)
let newsHtml = fs.readFileSync('news.html', 'utf8');
newsHtml = header + newsHtml.substring(newsHtml.indexOf('<!-- Breadcrumb'), newsHtml.indexOf('<!-- Footer')) + footer;

// Translate listing buttons
newsHtml = newsHtml.replace(/En savoir plus/g, 'Lire la suite');

fs.writeFileSync('news.html', newsHtml, 'utf8');
console.log('news.html cleaned and synchronized.');
