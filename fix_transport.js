const fs = require('fs');
let html = fs.readFileSync('transport.html', 'utf8');

// 1. Fix Button 1
html = html.replace('<a href="program-details.html" class="theme-btn theme-two w-100 mb-3 wow fadeInLeft" data-wow-delay=".5s">Contactez-nous pour les tarifs</a>', '<a href="contact.html" class="theme-btn w-100 mb-3 wow fadeInLeft" data-wow-delay=".5s" style="background-color:#FF9C00;">Contactez-nous pour les tarifs</a>');
// Also fix Button 2 link
html = html.replace('<a href="program-details.html" class="theme-btn w-100 wow fadeInLeft" data-wow-delay=".7s"> Inscrire votre enfant <i class="icon-arrow-icon"></i></a>', '<a href="contact.html" class="theme-btn w-100 wow fadeInLeft" data-wow-delay=".7s"> Inscrire votre enfant <i class="icon-arrow-icon"></i></a>');

// 2. Filter Social Icons
const orgIcons = `                                    <li>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </li>`;
const newIcons = `                                    <li>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </li>`;
html = html.replace(orgIcons, newIcons);

// 3. Main Image -> Slide
const orgImageDiv = `<div class="details-image img-custom-anim-right">
                                    <img src="assets/img/program/program-details.jpg" alt="img">
                                </div>`;
const sliderDiv = `<div id="transportCarousel" class="carousel slide details-image img-custom-anim-right mb-4" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#transportCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#transportCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#transportCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="border-radius: 20px; overflow: hidden; height: 450px;">
    <div class="carousel-item active" style="height: 100%;">
      <img src="assets/img/program/program-details.jpg" class="d-block w-100 h-100" style="object-fit:cover;" alt="slide 1">
    </div>
    <div class="carousel-item" style="height: 100%;">
      <img src="assets/img/classes/classes4.jpg" class="d-block w-100 h-100" style="object-fit:cover;" alt="slide 2">
    </div>
    <div class="carousel-item" style="height: 100%;">
      <img src="assets/img/classes/classes1.jpg" class="d-block w-100 h-100" style="object-fit:cover;" alt="slide 3">
    </div>
  </div>
</div>`;
html = html.replace(orgImageDiv, sliderDiv);

// 4. Remove the fake text list (the second ul block with remaining lorem)
// This ul appears after "Respect strict des horaires de passage</li></ul>"
// It's a `<ul class="list wow fadeInRight" data-wow-delay=".6s">` containing 4 list elements.
html = html.replace(/<ul class="list wow fadeInRight" data-wow-delay="\.6s">[\s\S]*?<\/ul>/, '');

fs.writeFileSync('transport.html', html, 'utf8');
console.log('transport.html successfully updated with final user fixes!');
