const fs = require('fs');

// 1. Get correct Header & Footer from about.html
const aboutHtml = fs.readFileSync('about.html', 'utf8');
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const articles = [
    { id: 1, date: '12 Mars 2026', title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !', summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
    { id: 2, date: '20 F\u00e9vrier 2026', title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2', summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
    { id: 3, date: '15 Janvier 2026', title: 'Inscriptions 2026-2027 : C\'est Parti !', summary: 'Lancement de notre nouvelle campagne d\'inscriptions pour la rentr\u00e9e scolaire.', image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=800&q=80' }
];

const newsItems = articles.map(art => `
                <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".${art.id * 2}s">
                    <div class="news-card-items">
                        <div class="news-image">
                            <img src="${art.image}" alt="news-image" style="height:250px; width:100%; object-fit:cover;">
                            <div class="news-layer-wrapper">
                                <div class="news-layer-image" style="background-image: url('${art.image}');"></div>
                                <div class="news-layer-image" style="background-image: url('${art.image}');"></div>
                                <div class="news-layer-image" style="background-image: url('${art.image}');"></div>
                                <div class="news-layer-image" style="background-image: url('${art.image}');"></div>
                            </div>
                        </div>
                        <div class="news-content">
                            <a href="news-details-${art.id}.html"><span class="catagory">Actualit\u00e9s</span></a>
                            <h3>
                                <a href="news-details-${art.id}.html" class="underline">${art.title}</a>
                            </h3>
                            <p>${art.summary}</p>
                            <ul class="author-items">
                                <li><i class="far fa-user"></i> Admin</li>
                                <li class="calendar"><i class="far fa-calendar-alt"></i> ${art.date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
`).join('');

const newsBody = `
    <!-- Breadcrumb Section start -->
    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/breadcrumb-bg.png');"> 
        <div class="sun-shape">
            <img src="assets/img/sun.png" alt="shape-image">
        </div>
        <div class="cloud-shape float-bob-x">
            <img src="assets/img/cloud.png" alt="shape-image">
        </div>
        <div class="perashute-shape float-bob-y">
            <img src="assets/img/perasute.png" alt="shape-image">
        </div>
        <div class="tree-shape">
            <img src="assets/img/tree.png" alt="shape-image">
        </div>
        <div class="bottom-shape">
            <img src="assets/img/breadcrumb-shape.png" alt="img">
        </div>
        <div class="container">
            <div class="page-heading">
                <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                    <li>
                        <a href="index.html">Accueil</a>
                    </li>
                    <li>Blog</li>
                </ul>
                <h1 class="char-animation">Blog & Actualit\u00e9s</h1>
            </div>
        </div>
    </div>

    <!-- News Section Start -->
    <section class="news-section section-padding">
        <div class="container">
            <div class="section-title text-center mb-60">
                <span class="sub-title wow fadeInUp">Actualit\u00e9s</span>
                <h2 class="wow fadeInUp" data-wow-delay=".3s">Derni\u00e8res du Blog</h2>
            </div>
            <div class="row g-4">
                ${newsItems}
            </div>
        </div>
    </section>
`;

fs.writeFileSync('news.html', header + newsBody + footer, 'utf8');
console.log('news.html updated with FULL Breadcrumb Heading successfully!');
