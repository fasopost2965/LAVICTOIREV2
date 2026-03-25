const fs = require('fs');

let html = fs.readFileSync('history.html', 'utf8');

// ─── 1. Page title & breadcrumb ──────────────────────────────────────────────
html = html.replace(/<title>[^<]*<\/title>/,
    '<title>Notre Philosophie - &Eacute;cole Priv&eacute;e La Victoire T&eacute;touan</title>');

html = html.replace(
    /<ul class="breadcrumb-items wow fadeInUp"[^>]*>[\s\S]*?<\/ul>/,
    `<ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li><a href="index.html">Accueil</a></li>
                        <li>Notre Philosophie</li>
                    </ul>`
);
html = html.replace(/<h1 class="char-animation">[\s\S]*?<\/h1>/,
    '<h1 class="char-animation">Notre Philosophie</h1>');

// ─── 2. Fix "Choose Us" section remaining English ─────────────────────────────
// Already done mostly - just verify choose button text
html = html.replace(
    /Start Your\s*Learning/g,
    'Inscrivez votre enfant'
);

// ─── 3. Fix timeline section heading (still English!) ────────────────────────
html = html.replace(
    /Safe, Fun &amp; <span>Educational<\/span> – Just <br> What Your Child Needs/g,
    'Nos <span>Engagements</span> envers chaque famille'
);
html = html.replace(
    /Safe, Fun &\s*<span>Educational<\/span>[^<]*<br>[^<]*What Your Child Needs/g,
    'Nos <span>Engagements</span> envers chaque famille'
);

// Fix description paragraph in timeline (lorem ipsum remnant)
html = html.replace(
    /nsectetur, adipisci velit, sed quia non numquam eius[\s\S]*?modi tempora incidunt\.\s*\n/g,
    '\n'
);
// Also fix the section title area description
html = html.replace(
    /L'&Eacute;cole La Victoire a &eacute;t&eacute; fond&eacute;e avec une vision claire[^<]*/,
    `L'&Eacute;cole La Victoire a ouvert ses portes en 2024 avec une vision claire : faire de T&eacute;touan un centre d'excellence &eacute;ducative, trilingue et ancr&eacute; dans les valeurs islamiques. Nos engagements guident chaque d&eacute;cision p&eacute;dagogique.`
);

// ─── 4. Replace date timeline with 4 value pillars ───────────────────────────
// Replace the entire "company-history-section" with an engagements section
const histSectionStart = html.indexOf('<!-- Company History Section Start -->');
const histSectionEnd = html.indexOf('</section>', histSectionStart) + 10;

const newEngagementsSection = `<!-- Engagements Section -->
<section class="company-history-section fix pt-5">
    <div class="company-history-wrapper section-padding">
        <div class="container">
            <div class="section-title-area">
                <div class="section-title">
                    <span class="sub-title wow fadeInUp">Ce qui nous guide</span>
                    <h2 class="char-animation">Nos <span>Engagements</span> envers chaque famille</h2>
                </div>
                <p class="text-center text-lg-start wow fadeInUp" data-wow-delay=".2s">
                    L'&Eacute;cole La Victoire a ouvert ses portes en <strong>2024</strong> avec une vision claire : cr&eacute;er un &eacute;tablissement priv&eacute; d'excellence &agrave; T&eacute;touan, trilingue, bienveillant et ancr&eacute; dans les valeurs islamiques. Ces quatre piliers fondamentaux guident chaque d&eacute;cision p&eacute;dagogique que nous prenons.
                </p>
            </div>
            <div class="row">
                <!-- Pilier 1 -->
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                    <div class="history-box-items">
                        <div class="dot"></div>
                        <div class="mb-3" style="font-size:38px;color:var(--theme-color,#c9a24a)">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <h3>Excellence P&eacute;dagogique</h3>
                        <p>Un enseignement rigoureux, conforme au programme national, enrichi par une p&eacute;dagogie active et des professeurs passionn&eacute;s et qualifi&eacute;s.</p>
                    </div>
                </div>
                <!-- Pilier 2 -->
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                    <div class="history-box-items">
                        <div class="dot"></div>
                        <div class="mb-3" style="font-size:38px;color:var(--theme-color,#c9a24a)">
                            <i class="fas fa-language"></i>
                        </div>
                        <h3>Trilinguisme D&egrave;s la Cr&egrave;che</h3>
                        <p>L'Arabe, le Fran&ccedil;ais et l'Anglais sont enseign&eacute;s de mani&egrave;re immersive d&egrave;s le plus jeune &acirc;ge, pr&eacute;parant nos &eacute;l&egrave;ves au monde de demain.</p>
                    </div>
                </div>
                <!-- Pilier 3 -->
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                    <div class="history-box-items">
                        <div class="dot"></div>
                        <div class="mb-3" style="font-size:38px;color:var(--theme-color,#c9a24a)">
                            <i class="fas fa-mosque"></i>
                        </div>
                        <h3>&Eacute;ducation Islamique</h3>
                        <p>Nous int&eacute;grons les valeurs morales et spirituelles islamiques dans le quotidien scolaire : Coran, &eacute;thique, respect et solidarit&eacute; fraternelle.</p>
                    </div>
                </div>
                <!-- Pilier 4 -->
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                    <div class="history-box-items">
                        <div class="dot"></div>
                        <div class="mb-3" style="font-size:38px;color:var(--theme-color,#c9a24a)">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3>Bien-&ecirc;tre &amp; Famille</h3>
                        <p>Chaque enfant est unique. Nous valorisons la communication avec les parents, le suivi individualis&eacute; et un environnement o&ugrave; chaque &eacute;l&egrave;ve se sent en s&eacute;curit&eacute; et aim&eacute;.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

html = html.substring(0, histSectionStart) + newEngagementsSection + html.substring(histSectionEnd);

// ─── 5. Fix FAQ section ───────────────────────────────────────────────────────
html = html.replace(
    /<span class="sub-title wow fadeInUp">Our FAQ's<\/span>/,
    '<span class="sub-title wow fadeInUp">Questions fr&eacute;quentes</span>'
);

// Fix lorem ipsum answers remaining in FAQ
const faqFixes = [
    // Q2 answer - horaires
    [
        'Consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum. Viverra lectus nullam sagittis nunc imperdiet.',
        'Cr&egrave;che : 8h–17h | Maternelle : 8h–16h30 | Primaire : 8h–16h. Un service de garde &eacute;tendue est disponible sur demande.'
    ]
];
faqFixes.forEach(([from, to]) => {
    html = html.replace(from, to);
});

// Remove any remaining lorem ipsum
html = html.replace(/Ultrices sagittis orci[\s\S]*?sit amet\./g,
    'Contactez-nous au 06 38 91 53 02 pour toute information compl&eacute;mentaire.');
html = html.replace(/Consectetur adipiscing elit\.[\s\S]*?nunc imperdiet\./g,
    'Pour plus de d&eacute;tails sur nos programmes, consultez notre <a href="cycles.html" style="color:var(--theme-color,#c9a24a);font-weight:700">page Cycles</a>.');

// ─── 6. Fix Learning CTA  ─────────────────────────────────────────────────────
// Fix remaining english text
html = html.replace(
    /Where Every Little[\s\S]*?Big Discoveries/,
    'Donnez &agrave; votre enfant le meilleur <span>d&eacute;part dans la vie</span>'
);
html = html.replace(/Online Admission/g, 'Demander une inscription');

// ─── 7. Write to philosophie.html ─────────────────────────────────────────────
fs.writeFileSync('philosophie.html', html);
fs.unlinkSync('history.html');
console.log('philosophie.html created, history.html deleted');

// ─── 8. Update all links from history.html → philosophie.html on all pages ───
const allPages = ['index.html','about.html','contact.html','cycles.html','faq.html',
    'cycle-creche.html','cycle-maternelle.html','cycle-primaire.html'];

// Also add it to the "La Victoire" dropdown in nav
const faqDropdownItem = '<li><a href="faq.html">FAQ</a></li>';
const philosophieInsert = '<li><a href="philosophie.html">Notre Philosophie</a></li>';

allPages.forEach(file => {
    if (!fs.existsSync(file)) return;
    let c = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace history.html links
    if (c.includes('history.html')) {
        c = c.replaceAll('history.html', 'philosophie.html');
        changed = true;
    }

    // Add "Notre Philosophie" to the La Victoire dropdown if not already there
    if (c.includes(faqDropdownItem) && !c.includes('philosophie.html')) {
        c = c.replace(faqDropdownItem, philosophieInsert + '\n                                                ' + faqDropdownItem);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, c);
        console.log(`Updated: ${file}`);
    }
});

// Also update philosophie.html's own nav
let p = fs.readFileSync('philosophie.html', 'utf8');
if (p.includes(faqDropdownItem) && !p.includes('philosophie.html')) {
    p = p.replace(faqDropdownItem, philosophieInsert + '\n                                                ' + faqDropdownItem);
}
// Highlight active "Notre Philosophie" link
p = p.replace(
    '<a href="philosophie.html">Notre Philosophie</a>',
    '<a href="philosophie.html" class="active">Notre Philosophie</a>'
);
fs.writeFileSync('philosophie.html', p);

console.log('All done!');
