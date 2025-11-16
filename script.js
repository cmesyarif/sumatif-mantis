// Reload iframe manual
document.getElementById("reloadBtn").addEventListener("click", () => {
    const iframe = document.getElementById("liveSheet");

    // fade-out
    iframe.style.opacity = "0";

    setTimeout(() => {
    iframe.src = iframe.src; // reload iframe

    // fade-in setelah iframe selesai load
    iframe.onload = () => {
        iframe.style.opacity = "1";
    };
    }, 100);
});

// // Auto-reload iframe 
// setInterval(() => {
//     const f = document.getElementById("liveSheet");
//     f.src = f.src; // reload iframe
// }, 5000); // refresh tiap 5 detik