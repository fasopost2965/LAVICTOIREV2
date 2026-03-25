const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const admissionsContent = `
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
                    <li>Inscriptions & Admissions</li>
                </ul>
                <h1 class="char-animation">Admissions</h1>
            </div>
        </div>
    </div>

    <!-- Admissions Steps Section -->
    <section class="admissions-section section-padding fix">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                    <div class="section-title text-start mb-30">
                        <span class="sub-title sub-bg-1">Processus d'Admission</span>
                        <h2>Rejoindre l'École <span>La Victoire</span></h2>
                    </div>
                    <p>Un processus transparent et accompagné, du premier contact à l'intégration de votre enfant dans notre communauté éducative.</p>
                    
                    <div class="admission-steps mt-40">
                        <div class="step-item d-flex gap-4 mb-30">
                            <div class="step-num" style="width:50px; height:50px; background:#FF9C00; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; flex-shrink:0;">1</div>
                            <div class="step-text">
                                <h4 style="margin-bottom:8px;">Pré-inscription en ligne</h4>
                                <p>Remplissez le formulaire de pré-inscription. Nous vous recontactons sous 24h ouvrables.</p>
                            </div>
                        </div>
                        <div class="step-item d-flex gap-4 mb-30">
                            <div class="step-num" style="width:50px; height:50px; background:#FF9C00; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; flex-shrink:0;">2</div>
                            <div class="step-text">
                                <h4 style="margin-bottom:8px;">Visite de l'école</h4>
                                <p>Découvrez nos locaux modernes, nos classes connectées et rencontrez notre équipe pédagogique.</p>
                            </div>
                        </div>
                        <div class="step-item d-flex gap-4 mb-30">
                            <div class="step-num" style="width:50px; height:50px; background:#FF9C00; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; flex-shrink:0;">3</div>
                            <div class="step-text">
                                <h4 style="margin-bottom:8px;">Entretien d'orientation</h4>
                                <p>Un moment d'échange pour mieux connaître votre enfant et le placer dans le niveau le plus adapté.</p>
                            </div>
                        </div>
                        <div class="step-item d-flex gap-4 mb-30">
                            <div class="step-num" style="width:50px; height:50px; background:#FF9C00; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; flex-shrink:0;">4</div>
                            <div class="step-text">
                                <h4 style="margin-bottom:8px;">Constitution du dossier</h4>
                                <p>Remise des documents administratifs nécessaires (voir liste ci-contre).</p>
                            </div>
                        </div>
                        <div class="step-item d-flex gap-4">
                            <div class="step-num" style="width:50px; height:50px; background:#59C3CF; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; flex-shrink:0;"><i class="fas fa-heart"></i></div>
                            <div class="step-text">
                                <h4 style="margin-bottom:8px;">Bienvenue à La Victoire !</h4>
                                <p>Confirmation officielle de l'inscription et début d'un parcours exceptionnel pour votre enfant.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 wow fadeInRight" data-wow-delay=".5s">
                    <div class="docs-required-box" style="background:#f9f5ff; padding:40px; border-radius:20px; border:2px dashed #59C3CF;">
                        <h3 style="margin-bottom:25px;"><i class="fas fa-clipboard-list me-2" style="color:#FF9C00;"></i>Dossier d'Inscription</h3>
                        <p style="margin-bottom:20px;">Voici les documents à préparer pour finaliser l'inscription de votre enfant :</p>
                        <ul style="list-style:none; padding:0;">
                            <li style="margin-bottom:15px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#59C3CF;"></i> Copie du livret de famille</li>
                            <li style="margin-bottom:15px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#59C3CF;"></i> 4 photos d'identité récentes de l'enfant</li>
                            <li style="margin-bottom:15px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#59C3CF;"></i> Copie du carnet de vaccination & santé</li>
                            <li style="margin-bottom:15px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#59C3CF;"></i> Certificat de scolarité (si vient d'une autre école)</li>
                            <li style="margin-bottom:15px; display:flex; align-items:center; gap:10px;"><i class="fas fa-check-circle" style="color:#59C3CF;"></i> Bulletins scolaires antérieurs (pour le cycle primaire)</li>
                        </ul>
                        <div class="mt-30" style="padding-top:20px; border-top:1px solid #ddd;">
                            <p style="font-size:14px; font-style:italic; color:#666;">Note : D'autres documents pourront vous être demandés selon le cycle choisi.</p>
                        </div>
                    </div>
                    
                    <div class="cta-box mt-30" style="background:#FF9C00; padding:30px; border-radius:20px; color:#fff;">
                        <h4 style="color:#fff; margin-bottom:10px;">Une question ?</h4>
                        <p style="margin-bottom:15px;">Notre secrétariat est à votre écoute pour vous aider dans vos démarches.</p>
                        <a href="tel:0638915302" style="color:#fff; font-weight:800; font-size:22px; display:block;"><i class="fas fa-phone-alt me-2"></i> 06 38 91 53 02</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Multi-step Form Section -->
    <section class="registration-form-section section-padding fix" style="background-image: url('assets/img/program/clsss-bg.png'); background-color: #f3f9f9;">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span class="sub-title sub-bg-1">Pré-inscription En Ligne</span>
                <h2>Inscrire mon <span>enfant</span></h2>
                <p>Réponse garantie sous 24h · Sans engagement</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="form-wizard" style="background:#fff; border-radius:30px; padding:50px; box-shadow:0 20px 60px rgba(0,0,0,0.05);">
                        <!-- Step Progress -->
                        <div class="step-progress-bar mb-50" style="display:flex; justify-content:space-between; position:relative;">
                            <div class="line" style="position:absolute; top:20px; left:0; width:100%; height:2px; background:#eee; z-index:1;"></div>
                            <div class="line-active" id="form-line-active" style="position:absolute; top:20px; left:0; width:0%; height:2px; background:#FF9C00; z-index:2; transition:width 0.3s;"></div>
                            
                            <div class="step-point active" id="sc1" style="position:relative; z-index:3; text-align:center;">
                                <div class="dot" style="width:40px; height:40px; background:#fff; border:3px solid #eee; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; margin:0 auto 10px; transition:all 0.3s;">1</div>
                                <span style="font-size:12px; font-weight:700; text-transform:uppercase;">Parent</span>
                            </div>
                            <div class="step-point" id="sc2" style="position:relative; z-index:3; text-align:center;">
                                <div class="dot" style="width:40px; height:40px; background:#fff; border:3px solid #eee; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; margin:0 auto 10px; transition:all 0.3s;">2</div>
                                <span style="font-size:12px; font-weight:700; text-transform:uppercase;">Enfant</span>
                            </div>
                            <div class="step-point" id="sc3" style="position:relative; z-index:3; text-align:center;">
                                <div class="dot" style="width:40px; height:40px; background:#fff; border:3px solid #eee; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; margin:0 auto 10px; transition:all 0.3s;">3</div>
                                <span style="font-size:12px; font-weight:700; text-transform:uppercase;">Message</span>
                            </div>
                        </div>

                        <!-- Step 1: Parent -->
                        <div class="form-step-panel active" id="fp1">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Prénom du parent *</label>
                                        <input type="text" class="form-control" id="fPr" placeholder="Ex: Mohammed" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Nom du parent *</label>
                                        <input type="text" class="form-control" id="fNo" placeholder="Ex: Alaoui" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Téléphone / WhatsApp *</label>
                                        <input type="tel" class="form-control" id="fTe" placeholder="Ex: 06 00 00 00 00" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Email</label>
                                        <input type="email" class="form-control" id="fEm" placeholder="Ex: contact@email.com" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-12 text-center mt-30">
                                    <button class="theme-btn" onclick="nextStep(2)">Suivant : Votre enfant <i class="fas fa-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2: Child -->
                        <div class="form-step-panel" id="fp2" style="display:none;">
                            <div class="row g-4">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Prénom de l'enfant *</label>
                                        <input type="text" class="form-control" id="fCh" placeholder="Ex: Nour" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Âge de l'enfant</label>
                                        <input type="number" class="form-control" id="fAg" placeholder="Ex: 4" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Cycle souhaité *</label>
                                        <select class="form-control" id="fCy" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                            <option value="">Sélectionnez...</option>
                                            <option>La Crèche (0-3 ans)</option>
                                            <option>La Maternelle (3-6 ans)</option>
                                            <option>Le Primaire (6-12 ans)</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Année scolaire souhaitée</label>
                                        <select class="form-control" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                            <option>2025-2026</option>
                                            <option>2026-2027</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center mt-30">
                                    <button class="theme-btn style-2 me-3" onclick="nextStep(1)"><i class="fas fa-arrow-left me-2"></i> Retour</button>
                                    <button class="theme-btn" onclick="nextStep(3)">Suivant : Message <i class="fas fa-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </div>

                        <!-- Step 3: Message -->
                        <div class="form-step-panel" id="fp3" style="display:none;">
                            <div class="row g-4">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Questions ou précisions (optionnel)</label>
                                        <textarea class="form-control" id="fMs" placeholder="Dites-nous en plus sur vos attentes..." style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd; height:120px;"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label style="display:block; margin-bottom:8px; font-weight:700;">Comment nous avez-vous connus ?</label>
                                        <select class="form-control" style="width:100%; padding:15px; border-radius:10px; border:1px solid #ddd;">
                                            <option value="">Sélectionnez...</option>
                                            <option>Bouche à oreille</option>
                                            <option>Facebook / Instagram</option>
                                            <option>Google / Internet</option>
                                            <option>Autre</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center mt-30">
                                    <button class="theme-btn style-2 me-3" onclick="nextStep(2)"><i class="fas fa-arrow-left me-2"></i> Retour</button>
                                    <button class="theme-btn" onclick="submitForm()">Envoyer la demande <i class="fas fa-paper-plane ms-2"></i></button>
                                </div>
                            </div>
                        </div>

                        <!-- Success Message -->
                        <div class="form-success-panel" id="form-success" style="display:none; text-align:center; padding:30px;">
                            <div class="icon mb-30" style="width:80px; height:80px; background:#59C3CF; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:40px; margin:0 auto;">
                                <i class="fas fa-check"></i>
                            </div>
                            <h3>Demande envoyée !</h3>
                            <p class="mt-20">Merci pour votre confiance. Notre équipe va étudier votre demande et vous recontactera par téléphone sous **24 heures**.</p>
                            <div class="mt-30">
                                <a href="index.html" class="theme-btn">Retour à l'accueil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style>
        .step-point.active .dot {
            background: #FF9C00 !important;
            border-color: #FF9C00 !important;
            color: #fff !important;
            box-shadow: 0 5px 15px rgba(255,156,0,0.3);
        }
        .step-point.done .dot {
            background: #59C3CF !important;
            border-color: #59C3CF !important;
            color: #fff !important;
        }
        .step-point.active span {
            color: #FF9C00;
        }
    </style>

    <script>
        let currentS = 1;
        function nextStep(step) {
            // Validation simple
            if (step === 2 && currentS === 1) {
                const pr = document.getElementById('fPr').value.trim();
                const te = document.getElementById('fTe').value.trim();
                if (!pr || !te) { alert("Veuillez remplir les champs obligatoires (Prénom et Téléphone)"); return; }
            }
            if (step === 3 && currentS === 2) {
                const ch = document.getElementById('fCh').value.trim();
                const cy = document.getElementById('fCy').value;
                if (!ch || !cy) { alert("Veuillez remplir les informations sur votre enfant"); return; }
            }

            // Hide all steps
            document.querySelectorAll('.form-step-panel').forEach(p => p.style.display = 'none');
            // Show target step
            document.getElementById('fp'+step).style.display = 'block';
            
            // Update UI
            currentS = step;
            updateStepUI();
        }

        function updateStepUI() {
            // Update dots
            for(let i=1; i<=3; i++) {
                const pt = document.getElementById('sc'+i);
                pt.classList.remove('active', 'done');
                if (i < currentS) pt.classList.add('done');
                if (i === currentS) pt.classList.add('active');
            }
            // Update line
            document.getElementById('form-line-active').style.width = ((currentS - 1) / 2 * 100) + '%';
        }

        function submitForm() {
             document.querySelectorAll('.form-step-panel').forEach(p => p.style.display = 'none');
             document.querySelector('.step-progress-bar').style.display = 'none';
             document.getElementById('form-success').style.display = 'block';
             // Scroll to top of form
             document.querySelector('.form-wizard').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
`;

// Assemble final page
let finalHtml = header + admissionsContent + '\n' + footer;

// Add Inscriptions to menu if not present, and update link
const menuRegex = /<li><a href="index\.html">Accueil<\/a><\/li>/;
const navItem = '<li><a href="index.html">Accueil</a></li>\n                                            <li><a href="admissions.html">Inscriptions</a></li>';

if (finalHtml.includes('index.html') && !finalHtml.includes('admissions.html')) {
    finalHtml = finalHtml.replace(menuRegex, navItem);
}

// Ensure "Inscriptions" in the header as well (the CTA button)
finalHtml = finalHtml.replace(/href="contact\.html" class="theme-btn">Inscriptions/g, 'href="admissions.html" class="theme-btn">Inscriptions');

fs.writeFileSync('admissions.html', finalHtml, 'utf8');
console.log('admissions.html created successfully!');

// Now update ALL other pages' menus
const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Add to menu
    if (!html.includes('admissions.html')) {
        html = html.replace(menuRegex, navItem);
    }
    
    // Update CTA button link
    html = html.replace(/href="contact\.html" class="theme-btn">Inscriptions/g, 'href="admissions.html" class="theme-btn">Inscriptions');
    
    fs.writeFileSync(file, html, 'utf8');
    console.log('Admissions link added to: ' + file);
});
