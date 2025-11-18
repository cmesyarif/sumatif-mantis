// Edit running text here
const announcements = [
    "📢 SAS dilaksanakan tanggal 1 s/d 8 Des 2025",
    "🎯 Batas akhir kirim soal tanggal 29 Nov 2025",
    "🎓 Pembagian rapor tanggal 20 Des 2025",
];

const runBox = document.querySelector(".running-items");
runBox.innerHTML = announcements.map(a => `<span>${a}</span>`).join("");


// Reload iframe manual
const buttons = document.querySelectorAll('.reloadBtn');
const iframe = document.getElementById('liveSheet');

if (!iframe) {
  console.warn('iframe #liveSheet tidak ditemukan');
} else {
  // pastikan ada transition (opsional, tapi berguna)
  if (!iframe.style.transition) {
    iframe.style.transition = 'opacity 250ms ease';
  }

  // handler untuk setiap tombol
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // mulai fade-out
      iframe.style.opacity = '0';

      // siapkan handler load yg hanya dijalankan sekali
      const onLoad = () => {
        iframe.style.opacity = '1';
        iframe.removeEventListener('load', onLoad);
      };
      iframe.addEventListener('load', onLoad);

      // reload iframe — tambahkan cache-buster supaya pasti reload
      const src = iframe.getAttribute('src') || '';
      const cacheBuster = `_cb=${Date.now()}`;
      const newSrc = src.includes('?') ? `${src}&${cacheBuster}` : `${src}?${cacheBuster}`;
      iframe.setAttribute('src', newSrc);
    });
  });
}

// Ketika tombolnya hanya satu (pake id="reloadBtn")
// document.getElementById("reloadBtn").addEventListener("click", () => {
//     const iframe = document.getElementById("liveSheet");

//     // fade-out
//     iframe.style.opacity = "0";

//     setTimeout(() => {
//     iframe.src = iframe.src; // reload iframe

//     // fade-in setelah iframe selesai load
//     iframe.onload = () => {
//         iframe.style.opacity = "1";
//     };
//     }, 100);
// });

// // Auto-reload iframe 
// setInterval(() => {
//     const f = document.getElementById("liveSheet");
//     f.src = f.src; // reload iframe
// }, 5000); // refresh tiap 5 detik