import galleryItem from './gallery-items.js';

const refs = {
	gallery: document.querySelector('.gallery'),
	ulGallery: document.querySelector('.js-gallery'),
	modalOpen: document.querySelector('.js-lightbox'),
	modalClose: document.querySelector('.lightbox__button'),
	lightBox: document.querySelector('.lightbox__image'),
	lightBoxOverlay: document.querySelector('.lightbox__content')
};

galleryItem.map((el) => {
	refs.gallery.insertAdjacentHTML(
		'beforeend',
		`<li class="gallery__item"><a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} alt=${el.description}/></a></li>`
	);
});

refs.ulGallery.addEventListener('click', (event) => {
	event.preventDefault();

	refs.modalOpen.classList.add('is-open');
	refs.lightBox.src = event.target.getAttribute('data-source');

	console.log(`ссылка на большую фотку ${event.target.getAttribute('data-source')}`);
});

refs.modalClose.addEventListener('click', (event) => {
	refs.modalOpen.classList.remove('is-open');
});

refs.lightBoxOverlay.addEventListener('click', (event) => {
	refs.modalOpen.classList.remove('is-open');

	console.log(`got it`);
});

// const ulGallery = document.querySelector('.js-gallery');

// const lightBox = document.querySelector('.lightbox__image');
// console.log(lightBox);

// const modalOpen = document.querySelector('.js-lightbox');

// const gallery = document.querySelector('.gallery');
// const modalClose = document.querySelector('.lightbox__button');

// console.log(modalClose);
