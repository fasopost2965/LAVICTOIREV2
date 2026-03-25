const fs = require('fs');

// 1. Get correct Header & Footer from about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const articles = [
    { id: 1, date: '12 Mars 2026', title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !', summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais. Nos \u00e9l\u00e8ves ont port\u00e9 haut les couleurs de l\'excellence acad\u00e9mique.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
    { id: 2, date: '20 F\u00e9vrier 2026', title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2', summary: 'Les sciences sortent des classes ! D\u00e9couvrez comment nos \u00e9l\u00e8ves de CE2 apprennent la m\u00e9thode scientifique dans la cour de l\'\u00e9cole.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
    { id: 3, date: '15 Janvier 2026', title: 'Inscriptions 2026-2027 : C\'est Parti !', summary: 'Lancement de notre nouvelle campagne d\'inscriptions. D\u00e9couvrez les nouveaut\u00e9s, les \u00e9quipements digitaux et le projet p\u00e9dagogique pour l\'ann\u00e9e prochaine.', image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80' }
];

const newsItems = articles.map(art => `
                        <div class="news-card-items style-2 wow fadeInUp" data-wow-delay=".2s" style="margin-bottom:40px;">
                            <div class="news-image">
                                <img src="${art.image}" alt="news-img" style="height:350px; width:100%; object-fit:cover; border-radius:20px;">
                                <div class="post-date">
                                    <h3>${art.date.split(' ')[0]}</h3>
                                    <span>${art.date.split(' ')[1]}</span>
                                </div>
                            </div>
                            <div class="news-content">
                                <ul class="post-meta">
                                    <li><i class="fal fa-calendar-alt"></i> ${art.date}</li>
                                    <li><i class="fal fa-user"></i> Administration</li>
                                </ul>
                                <h3>
                                    <a href="news-details-${art.id}.html">${art.title}</a>
                                </h3>
                                <p>${art.summary}</p>
                                <a href="news-details-${art.id}.html" class="theme-btn mt-3">Lire l'article <i class="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
`).join('');

const sidebar = `
                            <div class="main-sidebar">
                                <div class="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                                    <div class="wid-title">
                                        <h3>Rechercher</h3>
                                    </div>
                                    <div class="search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Rechercher...">
                                            <button type="submit"><i class="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
                                    <div class="wid-title">
                                        <h3>Cat\u00e9gories</h3>
                                    </div>
                                    <div class="news-widget-categories">
                                        <ul>
                                            <li><a href="news.html">Vie de l'\u00c9cole</a> <span>(3)</span></li>
                                            <li><a href="news.html">P\u00e9dagogie</a> <span>(2)</span></li>
                                            <li><a href="news.html">\u00c9v\u00e9nements</a> <span>(5)</span></li>
                                            <li><a href="news.html">Inscriptions</a> <span>(1)</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
                                    <div class="wid-title">
                                        <h3>Articles R\u00e9cents</h3>
                                    </div>
                                    <div class="recent-post-area">
                                        ${articles.slice(0, 2).map(art => `
                                        <div class="recent-items">
                                            <div class="recent-thumb">
                                                <img src="${art.image}" alt="img" style="width:70px; height:70px; border-radius:10px; object-fit:cover;">
                                            </div>
                                            <div class="recent-content">
                                                <p><i class="fal fa-calendar-alt"></i> ${art.date}</p>
                                                <h6>
                                                    <a href="news-details-${art.id}.html">${art.title.substring(0, 30)}...</a>
                                                </h6>
                                            </div>
                                        </div>`).join('')}
                                    </div>
                                </div>
                            </div>
`;

const newsBody = `
    <!-- Breadcrumb Section start -->
    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/breadcrumb-bg.png');">
        <div class="container text-center">
            <h1 class="char-animation">Actualit\u00e9s & Blog</h1>
        </div>
    </div>

    <!-- News Section Start -->
    <section class="news-standard-section section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-8 col-lg-7">
                    <div class="news-standard-wrapper">
                        ${newsItems}
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    ${sidebar}
                </div>
            </div>
        </div>
    </section>
`;

fs.writeFileSync('news.html', header + newsBody + footer, 'utf8');
console.log('news.html redesigned with sidebar successfully!');
