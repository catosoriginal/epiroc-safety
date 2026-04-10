
async function loadhtml(src) {
    try {
        const response = await fetch(src);
        const html = await response.text();
        document.body.innerHTML += html;
    } catch (error) {
        console.error('Error loading html:', error);
    }
}

async function connectscript(src) {
    try {
    const script = document.createElement("script");
    script.type = "module"
    script.src = src
    document.body.appendChild(script)
    script.name = src
} catch (error) {
    console.error(` ${src} Error while connecting default script: \n${error || "No Error Gived."}`);
}}

async function connectstylesheet(href) {
    try {
    const StyleSheet = document.createElement("link");
    StyleSheet.rel = "stylesheet";
    StyleSheet.type = "text/css";
    StyleSheet.href = href;
    StyleSheet.name = href;
    document.head.appendChild(StyleSheet)
} catch (error) {
    console.error(` ${href} Error while connecting default stylehseet: \n${error || "No Error Gived."}`);
}}


console.log("Default module loaded", import.meta.url);
console.info("Contact me on mail: catosoriginal@proton.me");

imoirt/epiroc-safety/cdn/assets/pageelements/footer/footer.html