const DynamicComponents = {
    dynamicComponents : {
        "cmp-carousel": import(/* webpackChunkName: 'carousel' */ "../components/content/carousel/js/carousel.js"),
        "helloworld": import(/* webpackChunkName: 'hello-world' */"../components/content/helloworld/ts/helloworld.js")
    },
    init: function () {
        const { dynamicComponents } = this;
        Object.keys(dynamicComponents).forEach(function(component){
            const componentContext = document.querySelector(`.${component}`);
            if(componentContext) {
                dynamicComponents[component]
                .then(
                    function(importedChunck){
                    importedChunck.default.init();
                });
            }
        });
    } 
};

export default DynamicComponents;