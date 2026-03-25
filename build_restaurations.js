const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const restaurationContent = `
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
                    <li><a href="index.html">Accueil</a></li>
                    <li>Restauration & Services</li>
                </ul>
                <h1 class="char-animation">Vie au Quotidien</h1>
            </div>
        </div>
    </div>

    <!-- Restauration Section -->
    <section class="restau-section section-padding fix">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span class="sub-title sub-bg-1">Bien manger \u00e0 l'\u00e9cole</span>
                <h2>Restauration <span>Saine & Conviviale</span></h2>
                <p>Un r\u00e9fectoire agr\u00e9able et une mini-\u00e9picerie pour accompagner les \u00e9l\u00e8ves tout au long de la journ\u00e9e.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="restau-card" style="background:#fff; border-radius:30px; overflow:hidden; border:2px solid #eee; height:100%;">
                        <div class="restau-img">
                            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80&auto=format" alt="R\u00e9fectoire scolaire" style="width:100%; height:250px; object-fit:cover;">
                        </div>
                        <div class="restau-body" style="padding:30px;">
                            <h3 style="margin-bottom:15px;"><i class="fas fa-bowl-food me-2" style="color:#FF9C00;"></i>Salle de R\u00e9fectoire</h3>
                            <p>Un espace de repas agr\u00e9able, calme et propre o\u00f9 les \u00e9l\u00e8ves d\u00e9jeunent dans de bonnes conditions. L'\u00e9cole encourage la convivialit\u00e9 et le bon comportement \u00e0 table.</p>
                            <ul style="list-style:none; padding:0; margin-top:20px;">
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Espace lumineux et bien ventil\u00e9</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Tables adapt\u00e9es \u00e0 l'\u00e2ge des enfants</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Encadrement permanent pendant le repas</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Nettoyage et d\u00e9sinfection quotidiens</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div class="restau-card" style="background:#fff; border-radius:30px; overflow:hidden; border:2px solid #eee; height:100%;">
                        <div class="restau-img">
                            <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&q=80&auto=format" alt="Mini \u00e9picerie \u00e9cole" style="width:100%; height:250px; object-fit:cover;">
                        </div>
                        <div class="restau-body" style="padding:30px;">
                            <h3 style="margin-bottom:15px;"><i class="fas fa-store me-2" style="color:#FF9C00;"></i>Mini-\u00c9picerie Scolaire</h3>
                            <p>Une mini-\u00e9picerie interne o\u00f9 les \u00e9l\u00e8ves peuvent acheter des snacks et boissons sains pendant les pauses, dans un cadre supervis\u00e9 et accessible.</p>
                            <ul style="list-style:none; padding:0; margin-top:20px;">
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Produits sains et adapt\u00e9s aux enfants</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Accessible pendant les r\u00e9cr\u00e9ations</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Supervision permanente du personnel</li>
                                <li style="margin-bottom:10px;"><i class="fas fa-check-circle me-2" style="color:#59C3CF;"></i> Tarifs accessibles, paiement simple</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hygiene & Security Section -->
    <section class="hygiene-section section-padding fix" style="background-color: #f9f5ff;">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span class="sub-title sub-bg-1">S\u00e9curit\u00e9 & Sant\u00e9</span>
                <h2>Votre enfant en toute <span>s\u00e9curit\u00e9</span></h2>
                <p>Un environnement s\u00fbr, propre et surveill\u00e9 \u2014 parce que la s\u00e9curit\u00e9 de vos enfants est notre priorit\u00e9 absolue.</p>
            </div>
            
            <div class="row g-4">
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div class="service-card" style="background:#fff; padding:30px; border-radius:20px; text-align:center; height:100%; border:1px solid #eee;">
                        <div class="icon mb-20" style="font-size:40px; color:#FF9C00;"><i class="fas fa-video"></i></div>
                        <h4>Vid\u00e9osurveillance</h4>
                        <p style="font-size:14px;">Cam\u00e9ras dans toutes les salles de classe et espaces communs.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="service-card" style="background:#fff; padding:30px; border-radius:20px; text-align:center; height:100%; border:1px solid #eee;">
                        <div class="icon mb-20" style="font-size:40px; color:#FF9C00;"><i class="fas fa-shield-alt"></i></div>
                        <h4>Acc\u00e8s Contr\u00f4l\u00e9</h4>
                        <p style="font-size:14px;">Entr\u00e9e unique s\u00e9curis\u00e9e. Sortie autoris\u00e9e uniquement avec un parent.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div class="service-card" style="background:#fff; padding:30px; border-radius:20px; text-align:center; height:100%; border:1px solid #eee;">
                        <div class="icon mb-20" style="font-size:40px; color:#FF9C00;"><i class="fas fa-hands-wash"></i></div>
                        <h4>Hygi\u00e8ne Stricte</h4>
                        <p style="font-size:14px;">Nettoyage professionnel quotidien et d\u00e9sinfection r\u00e9guli\u00e8re.</p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div class="service-card" style="background:#fff; padding:30px; border-radius:20px; text-align:center; height:100%; border:1px solid #eee;">
                        <div class="icon mb-20" style="font-size:40px; color:#FF9C00;"><i class="fas fa-first-aid"></i></div>
                        <h4>Infirmerie</h4>
                        <p style="font-size:14px;">Espace infirmerie \u00e9quip\u00e9 et personnel form\u00e9 aux premiers secours.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// Assemble final page
let finalHtml = header + restaurationContent + '\n' + footer;

// Add link to "L'Ecole" dropdown
const submenuRegex = /(<ul class="submenu">\s*<li><a href="about\.html">&Agrave; propos<\/a><\/li>)/;
const newLink = '$1\\n                                                    <li><a href="restauration.html">Restauration & Services</a></li>';

if (finalHtml.includes('about.html') && !finalHtml.includes('restauration.html')) {
    finalHtml = finalHtml.replace(submenuRegex, newLink);
}

fs.writeFileSync('restauration.html', finalHtml, 'utf8');
console.log('restauration.html created successfully!');

// Now update ALL other pages' menus
const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    if (!html.includes('restauration.html')) {
        html = html.replace(submenuRegex, newLink);
        fs.writeFileSync(file, html, 'utf8');
        console.log('Added Restauration link to: ' + file);
    }
});
