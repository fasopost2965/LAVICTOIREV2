const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const articles = [
    { id: 1, date: '12 Mars 2026', title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !', summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
    { id: 2, date: '20 F\u00e9vrier 2026', title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2', summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
    { id: 3, date: '15 Janvier 2026', title: 'Inscriptions 2026-2027 : C\'est Parti !', summary: 'Lancement officiel de la campagne et pr\u00e9sentation des innovations pr\u00e9vues.', image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80' }
];

const newsItems = articles.map(art => `
                <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".${art.id * 2}s">
                    <div class="news-card-items style-2">
                        <div class="news-image">
                            <img src="${art.image}" alt="news-img" style="height:250px; width:100%; object-fit:cover; border-top-left-radius:20px; border-top-right-radius:20px;">
                            <div class="post-date">
                                <h3>${art.date.split(' ')[0]}</h3>
                                <span>${art.date.split(' ')[1]}</span>
                            </div>
                        </div>
                        <div class="news-content">
                            <p>${art.date}</p>
                            <h3>
                                <a href="news-details-${art.id}.html">${art.title}</a>
                            </h3>
                            <p>${art.summary}</p>
                            <a href="news-details-${art.id}.html" class="link-btn">En savoir plus <i class="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
`).join('');

const newsBody = `
    <!-- Breadcrumb Section start -->
    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/breadcrumb-bg.png');">
        <div class="container text-center">
            <h1 class="char-animation">Blog & Actualit\u00e9s</h1>
        </div>
    </div>

    <section class="news-section section-padding">
        <div class="container">
            <div class="row g-4">
                ${newsItems}
            </div>
        </div>
    </section>
`;

fs.writeFileSync('news.html', header + newsBody + footer, 'utf8');
console.log('news.html rebuilt successfully!');
