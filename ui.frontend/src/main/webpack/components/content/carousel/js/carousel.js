const CarouselComponent = {
    // Selectors
    selectors : {
        carouselContainer: '.carousel .cmp-carousel',
        carouselActions: '.cmp-carousel__actions',
        carouselIndicators: '.cmp-carousel__indicators',
    },
    init: function() {
        const { selectors } = this;
        let carousels = document.querySelectorAll(selectors.carouselContainer);
        carousels.forEach((carousel)=> {
            if(carousel) {
                console.log('Carousel component loaded ...');
                /*
                 *  Custom Carousel code will go here
                */
            }
        });
    }
};

export  default CarouselComponent;