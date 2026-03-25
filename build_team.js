const fs = require('fs');

// 1. Read the original team.html (exact template)
let teamHtml = fs.readFileSync('team.html', 'utf8');

// 2. Read about.html for the correct La Victoire header & footer
const aboutHtml = fs.readFileSync('about.html', 'utf8');

// === EXTRACT HEADER from about.html ===
// From start to just before the breadcrumb
const aboutBreadcrumbStart = aboutHtml.indexOf('<!-- Breadcrumb');
const aboutHeader = aboutHtml.substring(0, aboutBreadcrumbStart);

// === EXTRACT FOOTER from about.html ===
const aboutFooterStart = aboutHtml.indexOf('<!-- Footer Section Start -->');
const aboutFooter = aboutHtml.substring(aboutFooterStart);

// === EXTRACT BREADCRUMB + TEAM SECTION from team.html ===
const teamBreadcrumbStart = teamHtml.indexOf('<!-- Breadcrumb');
const teamFooterStart = teamHtml.indexOf('<!-- footer Section');
if (teamFooterStart === -1) {
    console.log('Could not find footer marker in team.html, trying alternate...');
}
const teamContent = teamHtml.substring(teamBreadcrumbStart, teamFooterStart);

// === ASSEMBLE ===
let finalHtml = aboutHeader + teamContent + '\n' + aboutFooter;

// === LOCALIZE BREADCRUMB ===
finalHtml = finalHtml.replace('<a href="index-2.html">Home</a>', '<a href="index.html">Accueil</a>');
finalHtml = finalHtml.replace(/Our Teachers/g, 'Notre \u00c9quipe');

// === REPLACE NAMES with Moroccan fictitious names ===
// The template has 8 team members. We replace them in order.
const replacements = [
    { old: 'James Miller',   newName: 'Youssef El Amrani',    newRole: 'Enseignant - Primaire' },
    { old: 'Robert Lewis',   newName: 'Fatima Zahra Benali',  newRole: 'Enseignante - Maternelle' },
    { old: 'Abraham Michal', newName: 'Omar Tazi',            newRole: 'Enseignant - Primaire' },
    { old: 'Sarah Taylor',   newName: 'Khadija Moussaoui',    newRole: 'Enseignante - Maternelle' },
    { old: 'Olivia Brown',   newName: 'Houda El Idrissi',     newRole: 'Enseignante - Primaire' },
    { old: 'James David',    newName: 'Ahmed Chraibi',        newRole: 'Enseignant - Primaire' },
    { old: 'Sophia Smith',   newName: 'Sanae Belhaj',         newRole: 'Enseignante - Cr\u00e8che' },
    { old: 'Emily Johnson',  newName: 'Imane Alaoui',         newRole: 'Enseignante - Maternelle' },
    { old: 'Daniel Carter',  newName: 'Nadia Fassi Fihri',    newRole: 'Assistante de Direction' },
];

replacements.forEach(r => {
    // Replace the name in the <a> tag
    finalHtml = finalHtml.replace(new RegExp(r.old, 'g'), r.newName);
});

// Replace all "Online Teacher" role labels with the correct role for each member
// We do this by finding each team-content block and replacing sequentially
const allRoles = [
    'Enseignant - Primaire',
    'Enseignante - Maternelle',
    'Enseignant - Primaire',
    'Enseignante - Maternelle',
    'Enseignante - Primaire',
    'Enseignant - Primaire',
    'Enseignante - Cr\u00e8che',
    'Enseignante - Maternelle',
    'Assistante de Direction',
];

let roleIndex = 0;
finalHtml = finalHtml.replace(/>Online Teacher</g, () => {
    const role = allRoles[roleIndex] || 'Enseignant(e)';
    roleIndex++;
    return '>' + role + '<';
});

// Remove team-details.html links (replace with #)
finalHtml = finalHtml.replace(/href="team-details\.html"/g, 'href="#"');

// Remove pagination
finalHtml = finalHtml.replace(/<div class="pagination-wrap">[\s\S]*?<\/div>/, '');

// Remove social icons we don't want (keep only facebook + instagram)
finalHtml = finalHtml.replace(/<li><a href="#"><i class="fab fa-linkedin-in"><\/i><\/a><\/li>/g, '');
finalHtml = finalHtml.replace(/<li><a href="#"><i class="fab fa-twitter"><\/i><\/a><\/li>/g, '');

// Add equipe.html link to nav if not present
if (!finalHtml.includes('equipe.html')) {
    finalHtml = finalHtml.replace(
        '<li><a href="transport.html">Transport Scolaire</a></li>',
        '<li><a href="transport.html">Transport Scolaire</a></li>\n                                                    <li><a href="equipe.html">Notre \u00c9quipe</a></li>'
    );
}

// Now we need to add the admin section AFTER the existing team section
// Find the closing of team-section-two
const teamSectionEnd = finalHtml.indexOf('<!-- Footer Section Start -->');

const adminSection = `
    <!-- Personnel Administratif Section -->
    <div class="team-section-two section-padding fix" style="background-color: #f9f5ff;">
        <div class="container">
            <div class="section-title text-center mb-5">
                <span class="wow fadeInUp">Organisation & Support</span>
                <h2 class="wow fadeInUp" data-wow-delay=".3s">Personnel Administratif</h2>
            </div>
            <div class="row g-4">
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team-01.jpg" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Nadia Fassi Fihri</a></h2>
                            <p>Assistante de Direction</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team-02.jpg" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Sara El Mansouri</a></h2>
                            <p>R\u00e9ceptionniste</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team-03.jpg" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Rachid Bouazza</a></h2>
                            <p>Agent de S\u00e9curit\u00e9</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team-04.jpg" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Aicha Ziani</a></h2>
                            <p>Agent d\u2019Entretien</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team1.png" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Halima Ouazzani</a></h2>
                            <p>Agent d\u2019Entretien</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                    <div class="team-box">
                        <div class="team-image">
                            <img src="assets/img/team/team2.png" alt="team-image">
                        </div>
                        <div class="social-profile">
                            <ul class="social-icon">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <a href="#" class="share-btn"><i class="fas fa-share-alt"></i></a>
                        </div>
                        <div class="team-content">
                            <h2><a href="#">Zineb Lahlou</a></h2>
                            <p>Agent d\u2019Entretien</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

`;

// Insert admin section just before footer
finalHtml = finalHtml.substring(0, teamSectionEnd) + adminSection + finalHtml.substring(teamSectionEnd);

fs.writeFileSync('equipe.html', finalHtml, 'utf8');
console.log('equipe.html rebuilt from exact team.html template + La Victoire header/footer!');
