const fs = require('fs');

// Read about.html for correct header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// Extract header (up to breadcrumb)
const headerEnd = aboutHtml.indexOf('<!-- Breadcrumb');
const header = aboutHtml.substring(0, headerEnd);

// Extract footer
const footerStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const footer = aboutHtml.substring(footerStart);

const galleryContent = `
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
                    <li>Galerie Photos</li>
                </ul>
                <h1 class="char-animation">Galerie Photos</h1>
            </div>
        </div>
    </div>

    <!-- Gallery Section -->
    <section class="gallery-section section-padding fix">
        <div class="container">
            <div class="section-title text-center mb-50">
                <span class="wow fadeInUp">Nos Moments Pr\u00e9cieux</span>
                <h2 class="wow fadeInUp" data-wow-delay=".3s">Explorez La Victoire</h2>
            </div>
            
            <!-- Filter Buttons -->
            <div class="filter-controls text-center mb-50 wow fadeInUp" data-wow-delay=".4s">
                <button class="theme-btn current" data-filter="all">Tout voir</button>
                <button class="theme-btn" data-filter="classes">Nos Classes</button>
                <button class="theme-btn" data-filter="activites">Activit\u00e9s</button>
                <button class="theme-btn" data-filter="viescolaire">Vie Scolaire</button>
            </div>

            <div class="row g-4 gallery-container">
                <!-- Nos Classes -->
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item classes wow fadeInUp" data-wow-delay=".2s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-1.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-1.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Salle de Classe</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item classes wow fadeInUp" data-wow-delay=".3s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-2.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-2.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Salle de Jeux</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item classes wow fadeInUp" data-wow-delay=".4s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-3.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-3.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Espace Maternelle</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item classes wow fadeInUp" data-wow-delay=".5s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-5.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-5.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Salle Informatique</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item classes wow fadeInUp" data-wow-delay=".6s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-6.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-6.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Biblioth\u00e8que</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Activit\u00e9s -->
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item activites wow fadeInUp" data-wow-delay=".2s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-7.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-7.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Atelier Cr\u00e9atif</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item activites wow fadeInUp" data-wow-delay=".3s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-8.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-8.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">F\u00eate de Fin d'Ann\u00e9e</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item activites wow fadeInUp" data-wow-delay=".4s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-10.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-10.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Journ\u00e9e Sportive</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Vie Scolaire -->
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item viescolaire wow fadeInUp" data-wow-delay=".2s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-4.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-4.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Cour de R\u00e9cr\u00e9ation</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item viescolaire wow fadeInUp" data-wow-delay=".3s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/gallery/gallery-13.jpg" class="img-popup">
                            <img src="assets/img/gallery/gallery-13.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Temps de Repos</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 gallery-item viescolaire wow fadeInUp" data-wow-delay=".4s">
                    <div class="gallery-image" style="border-radius:15px; overflow:hidden; position:relative;">
                        <a href="assets/img/classes/classes4.jpg" class="img-popup">
                            <img src="assets/img/classes/classes4.jpg" alt="Galerie" style="width:100%; height:300px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; left:0; right:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.7)); color:#fff;">
                                <h5 style="margin:0; color:#fff;">Transport Scolaire</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style>
        .filter-controls .theme-btn {
            margin: 5px;
            padding: 10px 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #f1f1f1;
            color: #333;
            border: none;
        }
        .filter-controls .theme-btn.current {
            background: #FF9C00;
            color: #fff;
        }
        .gallery-item {
            transition: all 0.4s ease-in-out;
        }
        .gallery-item.hide {
            display: none;
            opacity: 0;
            transform: scale(0.8);
        }
        .gallery-item.show {
            display: block;
            opacity: 1;
            transform: scale(1);
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-controls .theme-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active class
                    filterButtons.forEach(btn => btn.classList.remove('current'));
                    this.classList.add('current');

                    const filter = this.getAttribute('data-filter');

                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.classList.contains(filter)) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 400);
                        }
                    });
                });
            });
        });
    </script>
`;

// Assemble final page
let finalHtml = header + galleryContent + '\n' + footer;

// Add Galerie to menu if not present
if (!finalHtml.includes('galerie.html')) {
    finalHtml = finalHtml.replace(
        '<li><a href="contact.html">Contact</a></li>',
        '<li><a href="galerie.html">Galerie</a></li>\\n                                            <li><a href="contact.html">Contact</a></li>'
    );
}

fs.writeFileSync('galerie.html', finalHtml, 'utf8');
console.log('galerie.html updated with interactive filters!');
