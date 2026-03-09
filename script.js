// Contoh 1: Interaksi Tombol di Halaman Index
// Kita mencari elemen dengan ID 'promoBtn'
const promoButton = document.getElementById('promoBtn');
const messageArea = document.getElementById('messageArea');

// Menambahkan 'event listener' (pendengar klik)
if (promoButton) { // Cek apakah tombol ada (supaya tidak error di halaman lain)
    promoButton.addEventListener('click', function() {
        // Mengubah properti CSS display agar elemen muncul
        messageArea.classList.remove('hidden');
        
        // Mengganti teks tombol agar tidak bisa diklik dua kali
        promoButton.textContent = "Promo Sudah Dilihat";
        promoButton.disabled = true;
    });
}

// Contoh 2: Interaksi Form di Halaman About
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        const email = emailInput.value;

        // Validasi sederhana menggunakan Regex
        if (email.includes('@') && email.includes('.')) {
            alert("Terima kasih! Email " + email + " telah加入 langganan kami.");
            emailInput.value = ""; // Mengosongkan input
        } else {
            alert("Mohon masukkan alamat email yang valid!");
        }
    });
}

// Contoh 3: Efek Global (Console Log saat halaman dimuat)
console.log("Website telah dimuat dengan sukses!");