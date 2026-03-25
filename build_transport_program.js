const fs = require('fs');

const phiContent = fs.readFileSync('philosophie.html', 'utf8');
const programContent = fs.readFileSync('program-details.html', 'utf8');

// Extract Header and Footer from philosophie.html
const headerPart = phiContent.split('<!-- Work Process Section Start -->')[0];
const footerPart = '\n    <!-- Footer Section Start -->\n' + phiContent.split('<!-- Footer Section Start -->')[1];

// Extract the program-details Section
let middleSection = programContent.split('<!-- program-details Section start -->')[1].split('<!-- footer Section start -->')[0];

// --- MODIFICATIONS IN MIDDLE SECTION ---

// 1. Sidebar (details-list-area)
middleSection = middleSection.replace('Classes includes:', 'Informations Navettes :');
middleSection = middleSection.replace('Age', 'Zones desservies');
middleSection = middleSection.replace('3-5 year', 'Tétouan et périphérie');
middleSection = middleSection.replace('Duration:', 'Fréquence :');
middleSection = middleSection.replace('9:00-11:00', 'Quotidienne (A/R)');
middleSection = middleSection.replace('Lessons:', 'Horaires :');
middleSection = middleSection.replace('15', 'Adaptés aux cycles');
middleSection = middleSection.replace('Students:', 'Places :');
middleSection = middleSection.replace('50', 'Limitées');
middleSection = middleSection.replace('Certifications:', 'Sécurité :');
middleSection = middleSection.replace('Yes', 'Conforme aux normes');
middleSection = middleSection.replace('Language', 'Accompagnatrices :');
middleSection = middleSection.replace('English', 'Présentes (Aller/Retour)');

middleSection = middleSection.replace('This course Free $49.00', 'Contactez-nous pour les tarifs');
middleSection = middleSection.replace('Enroll Your Kid', 'Inscrire votre enfant');
// Remove discount img
middleSection = middleSection.replace(/<div class="discount-img[\s\S]*?<\/div>/, '');

// 2. Main Content (details-content)
middleSection = middleSection.replace('Color Day Creative Festival With Creative Design', 'Service de Transport Scolaire');
middleSection = middleSection.replace('Kindergarten', 'Transport');
middleSection = middleSection.replace('Savannah Nguyen', 'Secteur Tétouan');

// Remove class-list (30 Classes, 3.4 Review)
middleSection = middleSection.replace(/<ul class="class-list">[\s\S]*?<\/ul>/, '');

middleSection = middleSection.replace('Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.', 'Notre service de transport scolaire est conçu pour offrir confort, sécurité et ponctualité à vos enfants. Nous desservons la majorité des quartiers de Tétouan grâce à des navettes modernes.');
middleSection = middleSection.replace('The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.', 'Chaque trajet est supervisé par une accompagnatrice qualifiée qui veille au bon déroulement du voyage et à la sécurité des élèves lors des montées et descentes.');

middleSection = middleSection.replace('Requirements for The Classes', 'Nos Engagements');
middleSection = middleSection.replace('Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.', 'Nous mettons un point d\'honneur à respecter les standards les plus stricts en matière de sûreté et d\'encadrement.');

// Replace the two lists text
middleSection = middleSection.replace('Ut viverra bibendum lorem', 'Véhicules climatisés et confortables');
middleSection = middleSection.replace('Safety and health care.', 'Contrôle technique rigoureux des véhicules');
middleSection = middleSection.replace('Designated areas for reading.', 'Accompagnatrices formées pour assister les enfants');
middleSection = middleSection.replace('Variety of age-appropriate books.', 'Respect strict des horaires de passage');


// 3. Authors / Chauffeurs Section
const authorTemplate = `
                            <div class="program-author-items mt-4">
                                <div class="thumb img-custom-anim-bottom">
                                    <img src="assets/img/program/author.png" alt="chauffeur" style="width:200px; height:200px; object-fit:cover; border-radius:50%;">
                                </div>
                                <div class="content">
                                    <span class="wow fadeInUp">Chauffeur Professionnel</span>
                                    <h3 class="wow fadeInUp" data-wow-delay=".3s">Mourad Salimi</h3>
                                    <p class="mb-3 wow fadeInUp" data-wow-delay=".5s">
                                        Mourad possède une grande expérience dans la conduite sécurisée et veille chaque jour à ce que le trajet des enfants se passe dans la bonne humeur et la ponctualité.
                                    </p>
                                    <div class="progress-wrap program-progress mt-0">
                                        <div class="pro-items mb-3 wow fadeInUp" data-wow-delay=".6s">
                                            <div class="pro-head mb-1">
                                                <h4 class="title">Ponctualité</h4>
                                                <span class="point">100%</span>
                                            </div>
                                            <div class="ber-box">
                                                <div class="progress">
                                                    <div class="progress-value" style="width: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pro-items wow fadeInUp" data-wow-delay=".8s">
                                            <div class="pro-head mb-0">
                                                <h4 class="title">Sécurité</h4>
                                                <span class="point">100%</span>
                                            </div>
                                            <div class="ber-box style-2">
                                                <div class="progress progress-2">
                                                    <div class="progress-value style-two" style="width: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
`;

const author2Template = `
                            <div class="program-author-items mt-4">
                                <div class="thumb img-custom-anim-bottom">
                                    <img src="assets/img/choose/choose2.jpg" alt="chauffeur" style="width:200px; height:200px; object-fit:cover; border-radius:50%;">
                                </div>
                                <div class="content">
                                    <span class="wow fadeInUp">Chauffeur Professionnel</span>
                                    <h3 class="wow fadeInUp" data-wow-delay=".3s">Mouhamed</h3>
                                    <p class="mb-3 wow fadeInUp" data-wow-delay=".5s">
                                        Toujours souriant et prudent, Mouhamed assure le ramassage scolaire avec un très grand sens des responsabilités et une bienveillance remarquée par les parents.
                                    </p>
                                    <div class="progress-wrap program-progress mt-0">
                                        <div class="pro-items mb-3 wow fadeInUp" data-wow-delay=".6s">
                                            <div class="pro-head mb-1">
                                                <h4 class="title">Ponctualité</h4>
                                                <span class="point">100%</span>
                                            </div>
                                            <div class="ber-box">
                                                <div class="progress">
                                                    <div class="progress-value" style="width: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pro-items wow fadeInUp" data-wow-delay=".8s">
                                            <div class="pro-head mb-0">
                                                <h4 class="title">Sécurité</h4>
                                                <span class="point">100%</span>
                                            </div>
                                            <div class="ber-box style-2">
                                                <div class="progress progress-2">
                                                    <div class="progress-value style-two" style="width: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
`;

// Replace the original program-author-items with the two new ones
middleSection = middleSection.replace(/<div class="program-author-items">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, authorTemplate + author2Template);

// 4. Remove programs-box
middleSection = middleSection.replace(/<div class="programs-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '</div></div>');


let newHtml = headerPart + '\n    <!-- program-details Section start -->\n' + middleSection + footerPart;

// Update Title & Breadcrumbs in the headerPart logic
newHtml = newHtml.replace('<title>Notre Philosophie - &Eacute;cole Priv&eacute;e La Victoire T&eacute;touan</title>', '<title>Transport Scolaire - &Eacute;cole Priv&eacute;e La Victoire T&eacute;touan</title>');
newHtml = newHtml.replace('<li>Notre Philosophie</li>', '<li>Transport Scolaire</li>');
newHtml = newHtml.replace('<h1 class="char-animation">Notre Philosophie</h1>', '<h1 class="char-animation">Transport Scolaire</h1>');

fs.writeFileSync('transport.html', newHtml, 'utf8');
console.log('transport.html successfully rebuilt with program-details layout and correct local header/footer!');
