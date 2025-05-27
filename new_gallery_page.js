let October = document.getElementById('october');
let preview_container = document.getElementById('preview_container');
let close_button = document.getElementById('close');

October.addEventListener('click', () => {
    preview_container.classList.add('show');
});

close_button.addEventListener('click', () => {
    preview_container.classList.remove('show');
});