import Homepage from '../components/pages/homepage.vue';
import Galleries from '../components/pages/galleries.vue';
import Collection from '../components/pages/collection.vue';

const routes = [
	{ path: '/', component: Homepage },
	{ path: '/art', component: Galleries },
	{ path: '/art/inktober2022', component: Collection },
	{ path: '/art/inktober2021', component: Collection },
	{ path: '/art/inktober2020', component: Collection },
	{ path: '/art/birdsofchicagoland', component: Collection },
	{ path: '/art/birds', component: Collection },
	{ path: '/art/movies', component: Collection },
	{ path: '/art/other', component: Collection }
];

export default routes;