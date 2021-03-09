export const DynamicAssets = {
    srcs: [
        "/assets/js/toastr.min.js",
    ],


    loadedScriptsPage: false,
    loadedScriptsSidebar: false,

    loadScriptPage() {

        const to_be_loaded = this.srcs;

        let isFound = false;
        const scripts = document.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; ++i) {
            // eslint-disable-next-line no-console
            if (scripts[i].getAttribute("src") != null && scripts[i].getAttribute("src").includes("loader")
            ) {
                isFound = true;
            }
        }
        // eslint-disable-next-line no-console
        if (!isFound) {
            for (let i = 0; i < to_be_loaded.length; i++) {
                const node = document.createElement("script");
                node.src = to_be_loaded[i];
                node.type = "text/javascript";
                node.async = false;
                node.charset = "utf-8";
                document.getElementById("scripts_page").appendChild(node);
            }
        }

        this.loadedScriptsPage = true;
    }
};
