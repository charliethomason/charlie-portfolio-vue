import Galleries from '../templates/galleries/galleries.vue';
import Collection from '../templates/galleries/collection.vue';

const routes = [
	{ path: '/', component: Galleries },
	{ path: '/inktober2022', component: Collection },
	{ path: '/inktober2021', component: Collection },
	{ path: '/inktober2020', component: Collection },
	{ path: '/birdsofchicagoland', component: Collection },
	{ path: '/birds', component: Collection },
	{ path: '/movies', component: Collection },
	{ path: '/other', component: Collection }
];

export default routes;