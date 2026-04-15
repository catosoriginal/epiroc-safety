
document.addEventListener("DOMContentLoaded", () => {
    
    const codeinput = document.querySelector("#codeinput");
    const verifyworkbutton = document.querySelector("#verifyworkbutton");
    const verifystatus = document.querySelector("#verifystatus");

    const cachedcorrectcode = "40f6fe3133fea13a4fff078ca841f5b8a3da96ea8bc7f4de56d4ffcef2856823"; // safe because cant decrypt sha256
    
    async function sha256(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }

    verifyworkbutton.addEventListener("click", () => {
        const inputHash = await sha256(codeinput.value);
        if (inputHash === cachedcorrectcode) {
            verifystatus.textContent = "Owner confirmed!";
            verifystatus.style.color = "green";
        } else {
            verifystatus.textContent = "The code is incorrect: Owner not verified";
            verifystatus.style.color = "red";
        }
    })
})