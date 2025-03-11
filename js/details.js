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
        image.alt = details.images[imgCount].alt;
        imgCount+=1;
    });

    const detailsType = document.querySelector('.room-type');
    detailsType.innerText = details.roomType;

    const detailsDesc = document.querySelector('.room-desc');
    detailsDesc.innerText = details.roomDesc;

    const hostPreviewName = document.querySelector('.host-preview-name');
    hostPreviewName.innerText = details.hostDetails.name;

    const hostPreviewDesc = document.querySelector('.host-preview-desc');
    hostPreviewDesc.innerText = details.hostDetails.hostDesc;

    const roomSpaceStatic = document.querySelector('.room-space-static');
    roomSpaceStatic.innerText = details.roomInfo.space;

    const roomDescription = document.querySelector('.room-description');
    roomDescription.innerText = details.roomInfo.description;

    const roomSpace = document.querySelector('.room-space');
    roomSpace.innerText = details.roomInfo.space;

    const roomGuest = document.querySelector('.room-guest');
    roomGuest.innerText = details.roomInfo.guest;

    const roomExtraInfo = document.querySelector('.room-extra-info');
    roomExtraInfo.innerText = details.roomInfo.extraInfo;
    
    const roomIdNumber = document.querySelector('.room-id-number');
    roomIdNumber.innerText = details.roomInfo.idNumber;

    details.services.forEach(service => {
        const servicesContent = document.querySelector('.services-content');

        const serviceContainer = document.createElement('div');
        serviceContainer.classList.add('col-6');

        const serviceRow = document.createElement('div');
        serviceRow.classList.add('row');

        const serviceIcon = document.createElement('div');
        serviceIcon.classList.add('col-2', 'service-icon');
        serviceIcon.innerHTML = service.serviceIcon;

        const serviceDescContainer = document.createElement('div');
        serviceDescContainer.classList.add('col-10');

        const serviceDescription = document.createElement('p');
        serviceDescription.classList.add('service-desc','fs-6', 'mb-0', 'pt-2');
        serviceDescription.innerText = service.serviceDesc;

        serviceDescContainer.appendChild(serviceDescription);
        serviceRow.append(serviceIcon, serviceDescContainer);
        serviceContainer.appendChild(serviceRow);

        servicesContent.appendChild(serviceContainer);
    })
};

document.addEventListener('DOMContentLoaded', () => {
    displayRoomDetails();
});