import galleryItem from './gallery-items.js';

const refs = {
	ulGallery: document.querySelector('.js-gallery'),
	modalOpen: document.querySelector('.js-lightbox'),
	modalClose: document.querySelector('.lightbox__button'),
	lightBox: document.querySelector('.lightbox__image'),
	lightBoxOverlay: document.querySelector('.lightbox__content')
};

//! создали динамически разметку за одну операцию ------------------------
galleryItem.forEach((el, index) => (el.index = index));

const markUpEl = galleryItem
	.map(
		(el) =>
			`<li class="gallery__item"><a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} data-position=${el.index} alt=${el.description}/></a></li>`
	)
	.join(' ');

refs.ulGallery.insertAdjacentHTML('beforeend', markUpEl);

let activeSlide = 0;

//! Открывает модалку---------------------------------------------

refs.ulGallery.addEventListener('click', (event) => {
	event.preventDefault();

	refs.modalOpen.classList.add('is-open');
	refs.lightBox.src = event.target.getAttribute('data-source');
	activeSlide = event.target.dataset.position;
	console.log(activeSlide);
	console.log(`ссылка на большую фотку ${event.target.getAttribute('data-source')}`);
});

//! закрывает модалку---------------------------------------------

refs.modalClose.addEventListener('click', (event) => {
	refs.modalOpen.classList.remove('is-open');
});

refs.lightBoxOverlay.addEventListener('click', (event) => {
	if (event.target.nodeName !== 'IMG') {
		refs.modalOpen.classList.remove('is-open');
	}
});

// ! Cлушатели кнопок -------------------------------------------------

function escapeClose() {
	if (event.key === 'Escape') {
		refs.modalOpen.classList.remove('is-open');
	}
}

function moveLeft() {
	if (event.key === 'ArrowLeft') {
		
		// refs.lightBox.src = galleryItem[].original;
		console.log((Number(activeSlide) -= 1));
	}
}

function moveRight() {
	if (event.key === 'ArrowRight') {
		refs.lightBox.src = galleryItem[Number(activeSlide) += 1].original;
	}
}

window.addEventListener('keyup', escapeClose);
window.addEventListener('keyup', moveLeft);
window.addEventListener('keyup', moveRight);
