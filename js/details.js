const displayRoomDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id');

    const details = rooms[pageId];

    const detailsTitle = document.querySelector('.details-title');
    detailsTitle.innerText = details.title;

    const detailsImages = document.querySelectorAll('.details-images');
    let imgCount = 0;
    detailsImages.forEach(image => {
        image.src = details.images[imgCount].src;
        imgCount+=1;
    });

    const detailsType = document.querySelector('.room-type');
    detailsType.innerText = details.roomType;

    const detailsDesc = document.querySelector('.room-desc');
    detailsDesc.innerText = details.roomDesc;
};

document.addEventListener('DOMContentLoaded', () => {
    displayRoomDetails();
});