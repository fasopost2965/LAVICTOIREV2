const fs = require('fs');

const phiContent = fs.readFileSync('philosophie.html', 'utf8');
const teamContent = fs.readFileSync('team-details.html', 'utf8');

// The main content of philosophie.html to strip out is from "Work Process Section Start" to "Footer Section Start"
const headerPart = phiContent.split('<!-- Work Process Section Start -->')[0];
const footerPart = '    <!-- Footer Section Start -->\n' + phiContent.split('<!-- Footer Section Start -->')[1];

// The Team details section to extract
let teamSection = teamContent.split('<!-- team details Section start -->')[1].split('<!-- footer Section start -->')[0];

// Adapt the Team details section for the drivers
teamSection = teamSection.replace('Learning Teacher', 'Service de Navettes');
teamSection = teamSection.replace('AbrahamÂ McGraw', 'Nos Chauffeurs & Accompagnatrices');
teamSection = teamSection.replace('Kindergarten is an early childhood educational environment where most young children, typically aged 4 to 6, engage in foundational learning experiences. The focus is on fostering social, emotional, cognitive, and physical development through a mix of structured activities and play.',
    'Notre équipe de transport dédiée (composée de deux chauffeurs professionnels et de nos accompagnatrices bienveillantes) assure le trajet quotidien de vos enfants dans les meilleures conditions de confort et de sécurité. Nos navettes desservent la majorité des quartiers de Tétouan.');
teamSection = teamSection.replace('assets/img/team/team-details.jpg', 'assets/img/choose/choose2.jpg');

// Clean up progress bars and list items, keep them simple
const listStart = teamSection.indexOf('<div class="progress-wrap">');
const listEnd = teamSection.indexOf('</ul>\n                            </div>', listStart) + '</ul>\n                            </div>'.length;

const replacementStats = `
                                <ul class="list-area mt-4" style="list-style: none; padding-left: 0;">
                                    <li style="margin-bottom: 15px; font-size: 18px;"><i class="fas fa-check-circle" style="color: var(--theme-color); margin-right: 10px;"></i> <b>Sécurité :</b> Véhicules récents et conformes aux normes</li>
                                    <li style="margin-bottom: 15px; font-size: 18px;"><i class="fas fa-check-circle" style="color: var(--theme-color); margin-right: 10px;"></i> <b>Encadrement :</b> Présence d'une accompagnatrice à bord</li>
                                    <li style="margin-bottom: 15px; font-size: 18px;"><i class="fas fa-check-circle" style="color: var(--theme-color); margin-right: 10px;"></i> <b>Ponctualité :</b> Respect strict des horaires de ramassage</li>
                                    <li style="margin-bottom: 15px; font-size: 18px;"><i class="fas fa-check-circle" style="color: var(--theme-color); margin-right: 10px;"></i> <b>Communication :</b> Lien constant avec les parents</li>
                                </ul>
                                <div class="choose-button mt-4 wow fadeInUp">
                                    <a href="contact.html" class="theme-btn">Nous contacter pour les tarifs <i class="icon-arrow-icon"></i></a>
                                </div>
                            </div>
`;
teamSection = teamSection.substring(0, listStart) + replacementStats + teamSection.substring(listEnd);


// Now build the gallery section
const gallerySection = `
    <!-- Gallery Section Start -->
    <div class="gallery-section section-padding pt-0 fix mt-5">
        <div class="container">
            <div class="section-title text-center">
                <span class="sub-title wow fadeInUp">Notre Flotte en Images</span>
                <h2 class="char-animation">Le transport <span>scolaire</span></h2>
            </div>
            <div class="row g-4 mt-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <img src="assets/img/classes/classes1.jpg" class="img-fluid rounded shadow-sm w-100" style="height:250px; object-fit:cover;" alt="Navette">
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <img src="assets/img/classes/classes4.jpg" class="img-fluid rounded shadow-sm w-100" style="height:250px; object-fit:cover;" alt="Trajet en bus">
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <img src="assets/img/choose/choose2.jpg" class="img-fluid rounded shadow-sm w-100" style="height:250px; object-fit:cover;" alt="Accompagnatrice">
                </div>
            </div>
        </div>
    </div>
`;


let newHtml = headerPart + '    <!-- team details Section start -->\n' + teamSection + gallerySection + footerPart;

// Fix Title and breadcrumbs
newHtml = newHtml.replace('<title>Notre Philosophie - &Eacute;cole Priv&eacute;e La Victoire T&eacute;touan</title>', '<title>Transport Scolaire - &Eacute;cole Priv&eacute;e La Victoire T&eacute;touan</title>');
newHtml = newHtml.replace('<li>Notre Philosophie</li>', '<li>Transport Scolaire</li>');
newHtml = newHtml.replace('<h1 class="char-animation">Notre Philosophie</h1>', '<h1 class="char-animation">Transport Scolaire</h1>');

fs.writeFileSync('transport.html', newHtml, 'utf8');
console.log('transport.html successfully rebuilt!');
