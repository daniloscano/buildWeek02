const displayRoomDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id');

    const details = rooms[pageId];

    const detailsTitle = document.querySelector('.details-title');

    detailsTitle.innerText = details.title;
};

document.addEventListener('DOMContentLoaded', () => {
    displayRoomDetails();
});