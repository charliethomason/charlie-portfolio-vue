import Galleries from '../templates/galleries/galleries.vue';
import Books from '../templates/galleries/books.vue';
import BookGalleria from '../templates/galleries/book-galleria.vue';
import Birds from '../templates/galleries/birds.vue';
import Movies from '../templates/galleries/movies.vue';
import Other from '../templates/galleries/other.vue';

const routes = [
	{ path: '/', component: Galleries },
	{ path: '/books', component: Books },
	{ path: '/books/:id', component: BookGalleria },
	{ path: '/birds', component: Birds },
	{ path: '/movies', component: Movies },
	{ path: '/other', component: Other }
];

export default routes;