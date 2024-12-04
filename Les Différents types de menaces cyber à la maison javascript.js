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

  // Fonction pour afficher la diapositive en cours et mettre à jour les indicateurs
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
      slideIndex = 1; // Si on dépasse la dernière, revenir à la première
    }
    if (n < 1) {
      slideIndex = slides.length; // Si on est avant la première, revenir à la dernière
    }
    
    // Masque toutes les diapositives
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Désactive toutes les "dots" (indicateurs)
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Affiche la diapositive en cours et active l'indicateur correspondant
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Option : Diaporama automatique
  let autoIndex = 0;
  function autoSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Masque toutes les diapositives
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    autoIndex++;
    if (autoIndex > slides.length) {
      autoIndex = 1; // Si on dépasse la dernière, revenir à la première
    }

    // Affiche la diapositive en cours
    slides[autoIndex - 1].style.display = "block";
    dots[autoIndex - 1].className += " active";

    setTimeout(autoSlides, 5000); // Change de diapositive toutes les 5 secondes
  }

  // Décommenter la ligne suivante pour activer le défilement automatique
  // autoSlides();
</script>
