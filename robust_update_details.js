const fs = require('fs');

// 1. Get correct Header & Footer from about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const articles = [
    {
        id: 1,
        date: '12 Mars 2026',
        title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
        content: `
            <div class="news-details-content">
                <p>Le 12 mars 2026 restera une date marquante. Nos \u00e9l\u00e8ves ont particip\u00e9 avec brio \u00e0 la <strong>Dict\u00e9e P.G.L.</strong>, un \u00e9v\u00e9nement international d\u00e9di\u00e9 \u00e0 la ma\u00eetrise du fran\u00e7ais.</p>
                <p>Cette comp\u00e9tition valorise la richesse de la francophonie et la solidarit\u00e9 internationale.</p>
                <blockquote>"Voir nos \u00e9l\u00e8ves s'investir avec autant de passion est notre plus grande fiert\u00e9." \u2014 Direction P\u00e9dagogique.</blockquote>
            </div>
        `
    },
    {
        id: 2,
        date: '20 F\u00e9vrier 2026',
        title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        content: `
            <div class="news-details-content">
                <p>Nos \u00e9l\u00e8ves de <strong>CE2</strong> ont transform\u00e9 la cour en laboratoire scientifique. Une approche concr\u00e8te pour comprendre le monde qui nous entoure.</p>
                <p>Exp\u00e9riences, observations et d\u00e9couvertes \u00e9taient au rendez-vous pour stimuler la curiosit\u00e9 naturelle de nos enfants.</p>
            </div>
        `
    },
    {
        id: 3,
        date: '15 Janvier 2026',
        title: 'Inscriptions 2026-2027 : C\'est Parti !',
        image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80',
        content: `
            <div class="news-details-content">
                <p>L'ouverture officielle des inscriptions pour l'ann\u00e9e scolaire 2026-2027 est annonc\u00e9e. D\u00e9couvrez nos nouveaut\u00e9s : tableaux interactifs, nouveaux programmes et activit\u00e9s.</p>
                <p>Nous invitons les parents \u00e0 visiter nos locaux et \u00e0 rencontrer notre \u00e9quipe lors de nos journ\u00e9es Portes Ouvertes.</p>
            </div>
        `
    }
];

const sidebar = `
                <div class="col-xl-4 col-lg-5">
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
                    </div>
                </div>
`;

articles.forEach(art => {
    const body = `
    <!-- Breadcrumb Section start -->
    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/breadcrumb-bg.png');">
        <div class="container text-center">
            <h1 class="char-animation text-white">${art.title}</h1>
        </div>
    </div>

    <!-- News Details Section Start -->
    <section class="news-details-section section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-8 col-lg-7">
                    <div class="news-details-wrapper">
                        <div class="news-card-items">
                            <div class="news-image">
                                <img src="${art.image}" alt="img" style="width:100%; border-radius:20px;">
                                <div class="post-date">
                                    <h3>${art.date.split(' ')[0]}</h3>
                                    <span>${art.date.split(' ')[1]}</span>
                                </div>
                            </div>
                            <div class="news-content">
                                <ul class="author-items">
                                    <li><i class="fal fa-calendar-alt"></i> ${art.date}</li>
                                    <li><i class="fal fa-user"></i> Admin</li>
                                </ul>
                                ${art.content}
                            </div>
                        </div>
                    </div>
                </div>
                ${sidebar}
            </div>
        </div>
    </section>
    `;
    fs.writeFileSync(`news-details-${art.id}.html`, header + body + footer, 'utf8');
    console.log(`REBUILT Detail Page: news-details-${art.id}.html`);
});

// Also update news-details.html (the generic one) and other files
const filesToClean = ['news-details.html', 'news-grid.html'];
filesToClean.forEach(f => {
    if (fs.existsSync(f)) {
        let h = fs.readFileSync(f, 'utf8');
        // Simple heavy replace of Kidza info
        h = h.replace(/Kidza/g, 'La Victoire');
        h = h.replace(/hellokidza@gmail\.com/g, 'contact@lavictoire.bf');
        h = h.replace(/Germany \u2014 785 15h Street, Office/g, 'Ouagadougou, Burkina Faso');
        fs.writeFileSync(f, h, 'utf8');
    }
});
