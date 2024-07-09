document.addEventListener('DOMContentLoaded', () => {
    const creationDate = new Date();
    document.getElementById('creation-date').textContent = creationDate.toLocaleString();
});

function navigate(url) {
    window.location.href = url;
}