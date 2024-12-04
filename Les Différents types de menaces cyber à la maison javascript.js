<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  // Fonction pour changer de slide (Précédent / Suivant)
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Fonction pour aller directement à une slide spécifique
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    
    // Cache tous les slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Désactive toutes les "dots"
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Affiche le slide courant et active la "dot" correspondante
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Option : Diaporama automatique
  let autoIndex = 0;
  function autoSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Cache tous les slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    autoIndex++;
    if (autoIndex > slides.length) {
      autoIndex = 1;
    }

    // Affiche le slide courant
    slides[autoIndex - 1].style.display = "block";
    dots[autoIndex - 1].className += " active";
    setTimeout(autoSlides, 5000); // Change de slide toutes les 5 secondes
  }

  // Décommenter pour activer le défilement automatique :
  // autoSlides();
</script>