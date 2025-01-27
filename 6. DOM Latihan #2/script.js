// Ambil elemen link login dan section
const loginLink = document.getElementById('navLoginHref');
const secA = document.getElementById('secA');

// Event listener untuk klik login
loginLink.addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah link default behavior

    // Cek apakah form sudah ada
    if (secA.querySelector('.login-form')) return;

    // Membuat form login
    const form = document.createElement('form');
    form.classList.add('login-form');  // Menambahkan kelas CSS untuk form

    // Membuat tombol close (X)
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';  // HTML untuk simbol X

    // Event listener untuk menutup form
    closeBtn.addEventListener('click', function() {
        secA.innerHTML = '';  // Menghapus form saat tombol close diklik
    });

    // Membuat input username
    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'Username';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.classList.add('form-control', 'mb-3');

    // Membuat input password
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.classList.add('form-control', 'mb-3');

    // Membuat tombol submit
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'btn-primary', 'w-100');
    submitButton.textContent = 'Login';

    // Menambahkan elemen ke dalam form
    form.appendChild(closeBtn);
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    // Menambahkan form ke dalam section#secA
    secA.innerHTML = '';  // Menghapus konten lama jika ada
    secA.appendChild(form);
});
