(function(){
    import(
        /* webpackChunkName: 'carousel-alert' */
        '../../../../base/js/alert'
    ).then(function(Alert){
        Alert.default('alert from carousel');
    })
})();