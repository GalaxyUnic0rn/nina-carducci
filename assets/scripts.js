$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

      // Ajout de la classe 'active-category' au clic sur un tag
      $('.tags-bar').on('click', '.nav-link', function() {
        $('.nav-link').removeClass('active-category');
        $(this).addClass('active-category');
    });
});
