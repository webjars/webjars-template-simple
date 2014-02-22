requirejs.config({
    paths: { "WEBJAR_ID": webjars.path("WEBJAR_ID", "MAIN_JS") },
    shim: { "WEBJAR_ID": [ "DEP_ID" ] }
});
