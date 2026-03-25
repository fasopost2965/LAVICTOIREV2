const fs = require('fs');

// 1. Get correct Header & Footer from about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

// 2. Read news-grid.html as source
let gridHtml = fs.readFileSync('news-grid.html', 'utf8');

// 3. Define Articles
const articles = [
    { id: 1, date: '12 Mars 2026', title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !', summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
    { id: 2, date: '20 F\u00e9vrier 2026', title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2', summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
    { id: 3, date: '15 Janvier 2026', title: 'Inscriptions 2026-2027 : C\'est Parti !', summary: 'Lancement de notre nouvelle campagne d\'inscriptions pour la rentr\u00e9e scolaire.', image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80' }
];

const newsItems = articles.map(art => `
                <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".${art.id * 2}s">
                    <div class="news-card-items mt-0">
                        <div class="news-image">
                            <img src="${art.image}" alt="news-image" style="height:250px; width:100%; object-fit:cover;">
                            <div class="news-layer-wrapper">
                                <a href="news-details-${art.id}.html"><span class="catagory">Actualit\u00e9s</span></a>
                                <h2>
                                    <a href="news-details-${art.id}.html" class="underline">${art.title}</a>
                                </h2>
                                <p>${art.summary}</p>
                                <ul class="author-items">
                                    <li><i class="far fa-user"></i> Admin</li>
                                    <li class="calendar"><i class="far fa-calendar-alt"></i> ${art.date}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
`).join('');

// 4. Assemble the page
// Replace everything between start of Breadcrumb and end of News Grid Row
const breadcrumbStartMatch = '<!-- Breadcrumb Section start -->';
const gridRowStartMatch = '<div class="row g-4">';
const gridRowEndMatch = '</div>\n                    <div class="page-nav-wrap"'; // Approximation for end of articles row

let finalHtml = header;
finalHtml += `
    <!-- Breadcrumb Section start -->
    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/breadcrumb-bg.png');">
        <div class="container text-center">
            <h1 class="char-animation">Blog & Actualit\u00e9s</h1>
        </div>
    </div>

    <!-- News Section Start -->
    <section class="news-section section-padding">
        <div class="container">
            <div class="row g-4">
                ${newsItems}
            </div>
        </div>
    </section>
`;
finalHtml += footer;

fs.writeFileSync('news.html', finalHtml, 'utf8');
console.log('news.html recreated from Grid template successfully!');
