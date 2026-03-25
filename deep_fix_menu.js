const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // 1. Fix the corrupted <av> or broken nav
    // We target the block from <nav id="mobile-menu"> to the next </div>
    const navBlockRegex = /<nav id="mobile-menu">[\s\S]*?(<\/nav>|<av>)/;
    
    const newNavContent = 
`<nav id="mobile-menu">
                                    <ul>
                                        <li><a href="index.html">Accueil</a></li>
                                        <li class="has-dropdown">
                                            <a href="about.html">L'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                            <ul class="submenu">
                                                <li><a href="about.html">&Agrave; propos</a></li>
                                                <li><a href="philosophie.html">Notre Philosophie</a></li>
                                                <li><a href="restauration.html">Restauration & Services</a></li>
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
                                        <li><a href="galerie.html">Galerie</a></li>
                                        <li><a href="equipe.html">Notre &Eacute;quipe</a></li>
                                        <li><a href="transport.html">Transport</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>`;

    html = html.replace(navBlockRegex, newNavContent);
    
    // Double safeguard for any remaining <av>
    html = html.replace(/<av>/g, '</nav>');

    // 2. Fix the CTA Button (ensure it's only once)
    html = html.replace(/<div class="header-right[^>]*>[\s\S]*?<\/div>/, (match) => {
        return '<div class="header-right d-flex justify-content-end align-items-center">\n' +
               '                            <a href="admissions.html" class="theme-btn border-radius-none">Inscriptions <i class="icon-arrow-icon"></i></a>\n' +
               '                            <div class="header__hamburger my-auto d-xl-none">\n' +
               '                                <div class="sidebar__toggle">\n' +
               '                                    <i class="fal fa-bars"></i>\n' +
               '                                </div>\n' +
               '                            </div>\n' +
               '                        </div>';
    });

    fs.writeFileSync(file, html, 'utf8');
    console.log('Deep Fixed: ' + file);
});
