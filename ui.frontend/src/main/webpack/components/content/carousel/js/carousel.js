(function(){
    // Selectors
    const selectors = {
        carouselContainer: '.carousel .cmp-carousel',
        carouselActions: '.cmp-carousel__actions',
        carouselIndicators: '.cmp-carousel__indicators',
    }

    let carousels = document.querySelectorAll(selectors.carouselContainer);
    carousels.forEach((carousel)=> {
        // Check IF carousel present
        if(carousel) {
            // Importing alert.js external module
            import(
                /* webpackChunkName: 'carousel-alert' */
                '../../../../base/js/alert'
            ).then(function(Alert){
                Alert.default('Carousel script tag initiated...');
                const actionsContainer = carousel.querySelector(selectors.carouselActions);
                const indicatorsContainer = carousel.querySelector(selectors.carouselIndicators);
                if(actionsContainer){
                    actionsContainer.style.display = "none";
                }
                if(indicatorsContainer) {
                    indicatorsContainer.classList.add('mt-20');
                }
            }).catch(function(Error){
                if(typeof(Error) == String) {
                    console.log('alert error => ', Error);
                }else {
                    console.log(JSON.stringify('alert error => ', Error));
                }

            });
        }
    });
})();