const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html'
];

const newMenu = 
'                                    <ul>\n' +
'                                        <li><a href="index.html">Accueil</a></li>\n' +
'                                        <li class="has-dropdown">\n' +
'                                            <a href="about.html">L\'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>\n' +
'                                            <ul class="submenu">\n' +
'                                                <li><a href="about.html">&Agrave; propos</a></li>\n' +
'                                                <li><a href="philosophie.html">Notre Philosophie</a></li>\n' +
'                                                <li><a href="restauration.html">Restauration & Services</a></li>\n' +
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
'                                        <li><a href="galerie.html">Galerie</a></li>\n' +
'                                        <li><a href="equipe.html">Notre &Eacute;quipe</a></li>\n' +
'                                        <li><a href="transport.html">Transport</a></li>\n' +
'                                        <li><a href="contact.html">Contact</a></li>\n' +
'                                    </ul>';

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // 1. Restore the broken <nav> tags if they were corrupted
    html = html.replace(/<av>/g, '</nav>').replace(/<nav id="mobile-menu">[\s\S]*?<\/nav>/, (match) => {
        return '<nav id="mobile-menu">\n' + newMenu + '\n                                </nav>';
    });

    // 2. Fix the Right-hand CTA Button
    html = html.replace(/<div class="header-right[^>]*>[\s\S]*?<\/div>/, (match) => {
        return match.replace(/<a href="[^"]*" class="theme-btn[^>]*>([\s\S]*?)<\/a>/, 
            '<a href="admissions.html" class="theme-btn border-radius-none">Inscriptions <i class="icon-arrow-icon"></i></a>');
    });

    // 3. Final cleanup of any escaped newlines or literal /n
    html = html.replace(/\\n/g, '\n').replace(/\/n/g, '');

    fs.writeFileSync(file, html, 'utf8');
    console.log('Restored and Fixed: ' + file);
});
