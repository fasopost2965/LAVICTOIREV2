const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html', 'digitale.html', '404.html'
];

const newMainMenu = 
'                                    <ul>\n' +
'                                        <li><a href="index.html">Accueil</a></li>\n' +
'                                        <li class="has-dropdown">\n' +
'                                            <a href="about.html">L\'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>\n' +
'                                            <ul class="submenu">\n' +
'                                                <li><a href="about.html">&Agrave; propos</a></li>\n' +
'                                                <li><a href="philosophie.html">Notre Philosophie</a></li>\n' +
'                                                <li><a href="restauration.html">Restauration & Services</a></li>\n' +
'                                                <li><a href="digitale.html">\u00c9cole Digitale</a></li>\n' +
'                                                <li><a href="faq.html">FAQ</a></li>\n' +
'                                            </ul>\n' +
'                                        </li>\n' +
'                                        <li class="has-dropdown">\n' +
'                                            <a href="classes.html">Cycles <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>\n' +
'                                            <ul class="submenu">\n' +
'                                                <li><a href="cycle-creche.html">La Cr&egrave;che</a></li>\n' +
'                                                <li><a href="cycle-maternelle.html">La Maternelle</a></li>\n' +
'                                                <li><a href="cycle-primaire.html">Le Primaire</a></li>\n' +
'                                            </ul>\n' +
'                                        </li>\n' +
'                                        <li><a href="equipe.html">Notre &Eacute;quipe</a></li>\n' +
'                                        <li><a href="galerie.html">Galerie</a></li>\n' +
'                                        <li><a href="transport.html">Transport</a></li>\n' +
'                                        <li><a href="news.html">Blog</a></li>\n' +
'                                        <li><a href="contact.html">Contact</a></li>\n' +
'                                    </ul>';

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

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // 1. Update Main Menu
    html = html.replace(/<nav id="mobile-menu">[\s\S]*?<\/nav>/, (match) => {
        return '<nav id="mobile-menu">\n' + newMainMenu + '\n                                </nav>';
    });

    // 2. Update Footer
    // We target the row containing footer widgets (after the first col-xl-4)
    const footerWidgetsRegex = /(<div class="col-xl-4 col-lg-6 col-md-8 wow fadeInUp" data-wow-delay="\.2s">[\s\S]*?<\/div>)\s*<div class="col-xl-2[\s\S]*?(?=<p class="footer-bottom)/;
    
    if (footerWidgetsRegex.test(html)) {
        html = html.replace(footerWidgetsRegex, '$1' + newFooter + '\n                ');
    }

    fs.writeFileSync(file, html, 'utf8');
    console.log('Restructured Page: ' + file);
});
