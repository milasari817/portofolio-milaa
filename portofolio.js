// Menampilkan tahun secara otomatis
const tahun = document.getElementById("tahun");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}

// Animasi elemen ketika masuk ke layar
const elemenAnimasi = document.querySelectorAll(".animasi-muncul");

if ("IntersectionObserver" in window) {
    const pengamat = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("terlihat");
                pengamat.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elemenAnimasi.forEach((elemen) => {
        pengamat.observe(elemen);
    });
} else {
    elemenAnimasi.forEach((elemen) => {
        elemen.classList.add("terlihat");
    });
}
// Mengambil elemen dari halaman login
const formLogin = document.getElementById("formLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");
const pesanLogin = document.getElementById("pesanLogin");

// Ketika tombol Masuk Portofolio ditekan
formLogin.addEventListener("submit", function(event) {

    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Mengambil isi username dan password
    const user = username.value.trim();
    const sandi = password.value;

    // Menghapus pesan sebelumnya
    pesanLogin.className = "pesan-login";
    pesanLogin.textContent = "";

    // Memeriksa kedua kolom kosong
    if (user === "" && sandi === "") {

        pesanLogin.textContent =
            "Username dan password wajib diisi!";

        pesanLogin.classList.add("pesan-salah");
        return;
    }

    // Memeriksa username kosong
    if (user === "") {

        pesanLogin.textContent =
            "Username wajib diisi!";

        pesanLogin.classList.add("pesan-salah");
        username.focus();
        return;
    }

    // Memeriksa password kosong
    if (sandi === "") {

        pesanLogin.textContent =
            "Password wajib diisi!";

        pesanLogin.classList.add("pesan-salah");
        password.focus();
        return;
    }

    // Jika kedua kolom terisi, login berhasil
    pesanLogin.textContent =
        "Login berhasil! Selamat datang di portofolio saya.";

    pesanLogin.classList.add("pesan-berhasil");

    // Pindah ke halaman Tentang Saya
    setTimeout(function() {

        window.location.href = "tentang.html";

    }, 1000);

});