import Homepage from '../components/pages/homepage.vue';
import Galleries from '../components/pages/galleries.vue';
import Collection from '../components/pages/collection.vue';
import Multimedia from '../components/pages/multimedia.vue';

const routes = [
	{ path: '/', component: Homepage },
	{ path: '/art', component: Galleries, meta: { id: 'art', title: 'Art' } },
	{ path: '/art/:name', component: Collection, meta: { id: 'art', title: 'Art '} },
	{ path: '/photo', component: Galleries, meta: { id: 'photo', title: 'Photo' } },
	{ path: '/photo/:name', component: Collection, meta: { id: 'photo', title: 'Photo ' }  },
	{ path: '/multimedia', component: Multimedia, meta: { id: 'multimedia', title: 'Multimedia' } }
];

export default routes;