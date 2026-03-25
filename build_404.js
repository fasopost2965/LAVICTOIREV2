const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const errorContent = `
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
                    <li>Erreur 404</li>
                </ul>
                <h1 class="char-animation">Page non trouv\u00e9e</h1>
            </div>
        </div>
    </div>

    <!-- Error Section Start -->
    <section class="error-section section-padding fix">
        <div class="container">
            <div class="error-content text-center">
                <div class="error-img wow fadeInUp" data-wow-delay=".3s">
                    <img src="assets/img/error.png" alt="Error Image">
                </div>
                <div class="error-info wow fadeInUp" data-wow-delay=".5s">
                    <h2>Oups ! Page introuvable.</h2>
                    <p>Il semble que vous vous soyez \u00e9gar\u00e9 dans la cour de r\u00e9cr\u00e9ation. <br> La page que vous recherchez n'existe plus ou a \u00e9t\u00e9 d\u00e9plac\u00e9e.</p>
                    <a href="index.html" class="theme-btn mt-4">
                        Retour \u00e0 l'accueil <i class="icon-arrow-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
`;

// Assemble final page and clean characters
let finalHtml = header + errorContent + footer;
finalHtml = finalHtml.replace(/\\n/g, '\n').replace(/\/n/g, '');

fs.writeFileSync('404.html', finalHtml, 'utf8');
console.log('404.html created successfully!');
