module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/dynamic-imports-demo/clientlibs",

    libs: [
        {
            name: "clientlib-dependencies",
            allowProxy: true,
            categories: ["dynamic-imports-demo.dependencies"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/clientlib-dependencies/*.js",
                ],
                css: [
                    "dist/clientlib-dependencies/*.css"
                ]
            }
        },
        {
            name: "clientlib-site",
            allowProxy: true,
            categories: ["dynamic-imports-demo.site"],
            dependencies: ["dynamic-imports-demo.dependencies"],
            serializationFormat: "xml",
            cssProcessor : ["default:none", "min:none"],
            jsProcessor: ["default:none", "min:none"],
            assets: {
                js: [
                    "dist/clientlib-site/*.js",
                ],
                css: [
                    "dist/clientlib-site/*.css"
                ],
                resources: [
                    {src: "dist/clientlib-site/resources/images/*.*", dest: "images/"}, 
                    {src: "dist/clientlib-site/resources/fonts/*.*", dest: "fonts/"}, 
                ]
            }
        },
        {
            name: 'clientlib-dynamic-modules',
            categories: ['dynamic-imports-demo.dynamic-modules'],
            serializationFormat: "xml",
            allowProxy: true,
            dependencies: [],
            assets: {
                resources: [
                    "dist/clientlib-dynamic-modules/resources/*.js"
                ]
            },
        }
    ]
};
