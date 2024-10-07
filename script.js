// Öffne Modals
document.querySelectorAll('.open-modal').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let modalId = item.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Schließe Modals
document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', event => {
        item.closest('.modal').style.display = 'none';
    });
});

// Schließe Modal, wenn man außerhalb klickt
window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
