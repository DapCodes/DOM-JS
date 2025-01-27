const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb'); // Perbaiki selector menjadi '.thumb'

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('thumb')) { // Gunakan classList.contains
        // Ganti src gambar jumbo dengan thumbnail yang diklik
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        // Hapus efek fade setelah 500ms
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        // Hapus kelas active dari semua thumbnail
        thumbs.forEach(function (thumb) {
            thumb.classList.remove('active');
        });

        // Tambahkan kelas active pada thumbnail yang diklik
        e.target.classList.add('active');
    }
});
