const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const digitaleContent = `
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
                    <li>\u00c9ducation Digitale</li>
                </ul>
                <h1 class="char-animation">L'\u00c9cole Connect\u00e9e</h1>
            </div>
        </div>
    </div>

    <!-- Digital Overview Section -->
    <section class="digital-overview section-padding fix">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                    <div class="section-title text-start mb-30">
                        <span class="sub-title sub-bg-1">Modernit\u00e9 & Innovation</span>
                        <h2>Une \u00e9cole r\u00e9solument <span>digitale</span></h2>
                    </div>
                    <p>Le digital est au c\u0153ur de notre projet p\u00e9dagogique \u2014 une v\u00e9ritable infrastructure moderne au service des familles et des apprentissages, pour pr\u00e9parer les enfants au monde de demain.</p>
                    
                    <div class="digital-features mt-40">
                        <div class="feature-item d-flex gap-4 mb-30" style="background:#fff; padding:25px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid #eee;">
                            <div class="icon" style="font-size:30px; color:#FF9C00;"><i class="fas fa-file-signature"></i></div>
                            <div class="text">
                                <h4 style="margin-bottom:8px;">Inscriptions 100% en ligne</h4>
                                <p style="font-size:14px;">Une proc\u00e9dure d'admission enti\u00e8rement num\u00e9ris\u00e9e, simple, rapide et s\u00e9curis\u00e9e pour toutes les familles.</p>
                            </div>
                        </div>
                        <div class="feature-item d-flex gap-4 mb-30" style="background:#fff; padding:25px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid #eee;">
                            <div class="icon" style="font-size:30px; color:#FF9C00;"><i class="fas fa-credit-card"></i></div>
                            <div class="text">
                                <h4 style="margin-bottom:8px;">Gestion de Scolarit\u00e9 Digitale</h4>
                                <p style="font-size:14px;">R\u00e8glement s\u00e9curis\u00e9 en ligne avec g\u00e9n\u00e9ration automatique des re\u00e7us et suivi des paiements.</p>
                            </div>
                        </div>
                        <div class="feature-item d-flex gap-4" style="background:#fff; padding:25px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid #eee;">
                            <div class="icon" style="font-size:30px; color:#FF9C00;"><i class="fas fa-chalkboard-user"></i></div>
                            <div class="text">
                                <h4 style="margin-bottom:8px;">Salles Connect\u00e9es</h4>
                                <p style="font-size:14px;">Tableaux intelligents, vid\u00e9oprojecteurs et Wi-Fi haut d\u00e9bit dans chaque salle pour un apprentissage interactif.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                    <div class="digital-img-box" style="position:relative;">
                        <img src="https://images.unsplash.com/photo-1571260899304-42ea04696dfc?w=600&q=80&auto=format" alt="Digital School" style="width:100%; border-radius:30px; box-shadow:0 30px 60px rgba(0,0,0,0.1);">
                        <div class="floating-badge" style="position:absolute; bottom:-30px; left:-30px; background:#59C3CF; color:#fff; padding:30px; border-radius:20px; box-shadow:0 15px 30px rgba(89,195,207,0.3);">
                            <h3 style="color:#fff; margin-bottom:5px;">100%</h3>
                            <p style="margin-bottom:0; font-size:14px;">Classes \u00c9quip\u00e9es</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Parent Panel Section -->
    <section class="parent-panel-section section-padding fix" style="background-color: #f3f9f3;">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6 order-2 order-lg-1 wow fadeInLeft" data-wow-delay=".3s">
                    <div class="panel-mockup" style="background:#fff; border-radius:20px; padding:30px; box-shadow:0 20px 50px rgba(0,0,0,0.1); border-top:10px solid #FF9C00;">
                        <div class="mockup-header d-flex justify-content-between align-items-center mb-30" style="border-bottom:1px solid #eee; padding-bottom:15px;">
                            <div class="user d-flex align-items-center gap-3">
                                <div class="avatar" style="width:40px; height:40px; background:#eee; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#999;"><i class="fas fa-user"></i></div>
                                <div><h5 style="margin:0;">Espace Parents</h5><span style="font-size:12px; color:#999;">Connect\u00e9 : Mohammed Alaoui</span></div>
                            </div>
                            <div class="status"><span class="badge" style="background:#d4f7db; color:#28a745; border-radius:5px; padding:5px 10px; font-size:12px;">\u25cf Session Active</span></div>
                        </div>
                        <div class="mockup-body">
                            <div class="item d-flex justify-content-between mb-3" style="padding:15px; background:#f9f9f9; border-radius:10px;">
                                <span><i class="fas fa-calendar-check me-2" style="color:#FF9C00;"></i> Pr\u00e9sences & Absences</span>
                                <span style="color:#28a745; font-weight:700;">OK</span>
                            </div>
                            <div class="item d-flex justify-content-between mb-3" style="padding:15px; background:#f9f9f9; border-radius:10px;">
                                <span><i class="fas fa-graduation-cap me-2" style="color:#FF9C00;"></i> Notes & R\u00e9sultats</span>
                                <span style="color:#59C3CF; font-weight:700;">Consulter</span>
                            </div>
                            <div class="item d-flex justify-content-between mb-3" style="padding:15px; background:#f9f9f9; border-radius:10px;">
                                <span><i class="fas fa-message me-2" style="color:#FF9C00;"></i> Messagerie Enseignants</span>
                                <span class="badge" style="background:#FF9C00; color:#fff; border-radius:50%; width:20px; height:20px; display:inline-flex; align-items:center; justify-content:center; font-size:10px;">2</span>
                            </div>
                            <div class="item d-flex justify-content-between" style="padding:15px; background:#f9f9f9; border-radius:10px;">
                                <span><i class="fas fa-bus me-2" style="color:#FF9C00;"></i> Suivi Transport Scolaire</span>
                                <span style="font-size:12px; color:#555;">En route</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 wow fadeInRight" data-wow-delay=".5s">
                    <div class="section-title text-start mb-30">
                        <span class="sub-title sub-bg-1">Le Panel Parental</span>
                        <h2>Suivez le parcours de <span>votre enfant</span> en temps r\u00e9el</h2>
                    </div>
                    <p>Notre application d\u00e9di\u00e9e permet aux parents de rester connect\u00e9s \u00e0 la vie scolaire de leurs enfants, o\u00f9 qu'ils soient.</p>
                    <ul style="list-style:none; padding:0; margin-top:30px;">
                        <li style="margin-bottom:15px; display:flex; gap:12px;"><i class="fas fa-check-circle" style="color:#59C3CF; margin-top:5px;"></i> <div><strong>Suivi p\u00e9dagogique :</strong> Acc\u00e8s aux notes, bulletins et évaluations.</div></li>
                        <li style="margin-bottom:15px; display:flex; gap:12px;"><i class="fas fa-check-circle" style="color:#59C3CF; margin-top:5px;"></i> <div><strong>Communication directe :</strong> Échanges simplifiés avec l'administration et les professeurs.</div></li>
                        <li style="margin-bottom:15px; display:flex; gap:12px;"><i class="fas fa-check-circle" style="color:#59C3CF; margin-top:5px;"></i> <div><strong>Agenda scolaire :</strong> Restez informé des devoirs, sorties et événements à venir.</div></li>
                        <li style="display:flex; gap:12px;"><i class="fas fa-check-circle" style="color:#59C3CF; margin-top:5px;"></i> <div><strong>Notifications :</strong> Recevez des alertes instantanées sur votre smartphone.</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Specs Section -->
    <section class="tech-specs-section section-padding fix">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span class="sub-title sub-bg-1">\u00c9quipements Technologiques</span>
                <h2>Le Best-of de la <span>Technologie</span></h2>
                <p>Nous investissons continuellement dans les meilleurs outils pour favoriser l'\u00e9veil et la curiosit\u00e9.</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                    <div class="tech-card" style="text-align:center; padding:40px; background:#fff; border-radius:20px; border:1px solid #eee; height:100%;">
                        <div class="icon mb-25" style="font-size:50px; color:#FF9C00;"><i class="fas fa-display"></i></div>
                        <h4>Tableaux Intelligents</h4>
                        <p style="font-size:14px;">Toutes nos classes de primaire sont \u00e9quip\u00e9es de tableaux interactifs de derni\u00e8re g\u00e9n\u00e9ration.</p>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                    <div class="tech-card" style="text-align:center; padding:40px; background:#fff; border-radius:20px; border:1px solid #eee; height:100%;">
                        <div class="icon mb-25" style="font-size:50px; color:#FF9C00;"><i class="fas fa-wifi"></i></div>
                        <h4>Fibre Optique & Wi-Fi</h4>
                        <p style="font-size:14px;">Une connexion haut d\u00e9bit s\u00e9curis\u00e9e irrigue tout l'\u00e9tablissement pour les usages p\u00e9dagogiques.</p>
                    </div>
                </div>
                <div class="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="tech-card" style="text-align:center; padding:40px; background:#fff; border-radius:20px; border:1px solid #eee; height:100%;">
                        <div class="icon mb-25" style="font-size:50px; color:#FF9C00;"><i class="fas fa-laptop-code"></i></div>
                        <h4>Ateliers Robotique</h4>
                        <p style="font-size:14px;">Initiation au codage et \u00e0 la robotique p\u00e9dagogique pour d\u00e9velopper la logique d\u00e8s le plus jeune \u00e2ge.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// Assemble final page
let finalHtml = header + digitaleContent + '\n' + footer;

// Clean up literal /n or \\n before writing
finalHtml = finalHtml.replace(/\\n/g, '\n').replace(/\/n/g, '');

// Add link to "L'Ecole" dropdown
const submenuRegex = /(<ul class="submenu">[\s\S]*?<li><a href="restauration\.html">Restauration & Services<\/a><\/li>)/;
const newLink = '$1\n                                                    <li><a href="digitale.html">\u00c9cole Digitale</a></li>';

if (finalHtml.includes('restauration.html') && !finalHtml.includes('digitale.html')) {
    finalHtml = finalHtml.replace(submenuRegex, newLink);
}

fs.writeFileSync('digitale.html', finalHtml, 'utf8');
console.log('digitale.html created successfully!');

// Now update ALL other pages' menus
const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    if (!html.includes('digitale.html')) {
        html = html.replace(submenuRegex, newLink);
        // Ensure no literal /n or \\n in existing files too
        html = html.replace(/\\n/g, '\n').replace(/\/n/g, '');
        fs.writeFileSync(file, html, 'utf8');
        console.log('Added Digitale link and cleaned /n in: ' + file);
    }
});
