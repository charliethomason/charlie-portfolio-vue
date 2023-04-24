import Homepage from '../components/pages/homepage.vue';
import Galleries from '../components/pages/galleries.vue';
import Collection from '../components/pages/collection.vue';

const routes = [
	{ path: '/', component: Homepage },
	{ path: '/art', component: Galleries, meta: { id: 'art', title: 'Art' } },
	{ path: '/art/:name', component: Collection, meta: { id: 'art', title: 'Art '} },
	{ path: '/photo', component: Galleries, meta: { id: 'photo', title: 'Photo' } },
	{ path: '/photo/:name', component: Collection, meta: { id: 'photo', title: 'Photo ' }  }
];

export default routes;