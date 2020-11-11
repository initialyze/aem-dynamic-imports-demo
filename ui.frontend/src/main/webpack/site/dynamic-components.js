//register the className of each dynamic component to it's own js chunk, and initialization call
const dynamicComponents = {
    "cmp-carousel": async () => {
        await import(/* webpackChunkName: 'cmp-carousel' */ "../components/content/carousel/js/carousel.js").then(obj => obj.default.init())},

    "helloworld": async () => {
        await import(/* webpackChunkName: 'cmp-helloworld' */ "../components/content/helloworld/ts/helloworld.js").then(obj => obj.default.init())},
}

const alreadyLoadedScripts = {};

//  Dynamic Components Loader
//
//  Loops through dynamic components registered, if found on page, loads their chunk dynamically.
const DynamicComponents = {
    init: function () {
        //loop through each registered dynamic component
        Object.keys(dynamicComponents).forEach(function(component){
            const componentContext = document.querySelector(`.${component}`);

            //if component found on page
            if(componentContext) {

                //check if script not already loaded
                if (!alreadyLoadedScripts[component]) {

                    //record script state
                    alreadyLoadedScripts[component] = true;

                    //execute the dynamic import & init script registered
                    dynamicComponents[component]();
                }
            }
        });
    } 
};

export default DynamicComponents;