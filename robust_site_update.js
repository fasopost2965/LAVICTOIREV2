const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html', 'digitale.html', '404.html', 'news.html'
];

const newMainMenu = `                                    <ul>
                                        <li><a href="index.html">Accueil</a></li>
                                        <li class="has-dropdown">
                                            <a href="about.html">L'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                            <ul class="submenu">
                                                <li><a href="about.html">&Agrave; propos</a></li>
                                                <li><a href="philosophie.html">Notre Philosophie</a></li>
                                                <li><a href="restauration.html">Restauration & Services</a></li>
                                                <li><a href="digitale.html">\u00c9cole Digitale</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <a href="classes.html">Cycles <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                            <ul class="submenu">
                                                <li><a href="cycle-creche.html">La Cr&egrave;che</a></li>
                                                <li><a href="cycle-maternelle.html">La Maternelle</a></li>
                                                <li><a href="cycle-primaire.html">Le Primaire</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="equipe.html">Notre &Eacute;quipe</a></li>
                                        <li><a href="galerie.html">Galerie</a></li>
                                        <li><a href="transport.html">Transport</a></li>
                                        <li><a href="news.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>`;

const newFooter = `
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3>L'\u00c9tablissement</h3>
                            </div>
                            <div class="widget-content">
                                <ul class="list-area">
                                    <li><a href="about.html">\u00c0 propos</a></li>
                                    <li><a href="philosophie.html">Philosophie</a></li>
                                    <li><a href="equipe.html">Notre \u00c9quipe</a></li>
                                    <li><a href="galerie.html">Galerie Photos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3>Offre Scolaire</h3>
                            </div>
                            <div class="widget-content">
                                <ul class="list-area">
                                    <li><a href="cycle-creche.html">La Cr\u00e8che</a></li>
                                    <li><a href="cycle-maternelle.html">La Maternelle</a></li>
                                    <li><a href="cycle-primaire.html">Le Primaire</a></li>
                                    <li><a href="admissions.html">Inscriptions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div class="single-footer-widget">
                            <div class="widget-head">
                                <h3>Services & Aide</h3>
                            </div>
                            <div class="widget-content">
                                <ul class="list-area">
                                    <li><a href="transport.html">Transport Scolaire</a></li>
                                    <li><a href="restauration.html">Restauration</a></li>
                                    <li><a href="digitale.html">\u00c9cole Digitale</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
`;

const articles = [
    { id: 1, date: '12 Mars 2026', title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !', summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80' },
    { id: 2, date: '20 F\u00e9vrier 2026', title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2', summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80' },
    { id: 3, date: '15 Janvier 2026', title: 'Inscriptions 2026-2027 : C\'est Parti !', summary: 'Lancement officiel de la campagne et pr\u00e9sentation des innovations pr\u00e9vues.', image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=600&q=80' }
];

const newsItems = articles.map(art => `
                <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".${art.id * 2}s">
                    <div class="news-card-items style-2">
                        <div class="news-image">
                            <img src="${art.image}" alt="news-img">
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

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // 1. RE-ORDER MENU & FIX Corruptions
    // Find <nav id="mobile-menu"> and its closing </nav>
    const navStart = html.indexOf('<nav id="mobile-menu">');
    if (navStart !== -1) {
        let navEnd = html.indexOf('</nav>', navStart);
        if (navEnd !== -1) {
            navEnd += 6; // Include </nav>
            const oldNav = html.substring(navStart, navEnd);
            html = html.substring(0, navStart) + '<nav id="mobile-menu">\n' + newMainMenu + '\n                                </nav>' + html.substring(navEnd);
            console.log('SUCCESS: Menu Replaced in ' + file);
        }
    }

    // 2. RE-ORDER FOOTER
    const footerMark = 'data-wow-delay=".2s">';
    const footerStart = html.indexOf(footerMark);
    if (footerStart !== -1) {
        const divEndMatch = html.indexOf('</div>', footerStart);
        if (divEndMatch !== -1) {
            const nextDivStart = divEndMatch + 6;
            // Find the end of all footer widgets (before footer bottom)
            const footerBottomMark = 'class="footer-bottom"';
            const footerBottomStart = html.indexOf(footerBottomMark);
            if (footerBottomStart !== -1) {
                // Find where the last widget </div> ends before the bottom
                const searchArea = html.substring(nextDivStart, footerBottomStart);
                const lastWidgetEnd = html.lastIndexOf('</div>', footerBottomStart);
                if (lastWidgetEnd > nextDivStart) {
                    html = html.substring(0, nextDivStart) + newFooter + '\n                ' + html.substring(lastWidgetEnd + 6);
                    console.log('SUCCESS: Footer Replaced in ' + file);
                }
            }
        }
    }

    // 3. BLOG CONTENT (only for news.html)
    if (file === 'news.html') {
        const rowStart = html.indexOf('<div class="row g-4">');
        if (rowStart !== -1) {
            const rowEnd = html.indexOf('<div class="page-nav-wrap"', rowStart);
            if (rowEnd !== -1) {
                html = html.substring(0, rowStart) + '<div class="row g-4">' + newsItems + '</div>\n                    ' + html.substring(rowEnd);
                console.log('SUCCESS: Blog Content Replaced in news.html');
            }
        }
    }

    // FINAL CLEANUP: Fix any residual <av> or corrupted nav tags
    html = html.replace(/<av>/g, '</nav>');

    fs.writeFileSync(file, html, 'utf8');
});

console.log('Global robust update complete!');
