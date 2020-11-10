const DynamicComponents = {
    dynamicComponents : {
        "cmp-carousel": import(/* webpackChunkName: 'carousel' */ "../components/content/carousel/js/carousel.js"),
        "helloworld": import(/* webpackChunkName: 'hello-world' */"../components/content/helloworld/ts/helloworld.js")
    },
    init: function () {
        const { dynamicComponents } = this;
        Object.keys(dynamicComponents).forEach(function(dynamicComponent){
            const componentContext = document.querySelector(`.${dynamicComponent}`);
            if(componentContext) {
                dynamicComponents[dynamicComponent]
                .then(function(component){
                    component.default.init();
                });
            }
        });
    } 
};

export default DynamicComponents;