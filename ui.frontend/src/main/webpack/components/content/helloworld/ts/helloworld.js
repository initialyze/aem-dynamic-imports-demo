const HelloWorldComponent = {
    jsHelloWorld: () => {
        const jsString = "Hello World";
        console.log(`${jsString} component loaded ...`);
    },
    init() {
        this.jsHelloWorld();
    }
};
export default HelloWorldComponent;
