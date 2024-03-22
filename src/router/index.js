import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

// import NotFoundView from '@/views/NotFoundView.vue';
// import NestedView from '@/views/nested/NestedView.vue';
// import NestedOneView from '@/views/nested/NestedOneView.vue';
// import NestedTwoView from '@/views/nested/NestedTwoView.vue';
// import NestedHomeView from '@/views/nested/NestedHomeView.vue';
// import MyPage from '@/views/MyPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		// user/a
		// user/b -> PostDetailView
		// user/c
		// 달라지는 값을 : 을 써서 구분 PostDetailView
		// props: true
		// props: route => {
		// 	return {
		// 		id: parseInt(route.params.id),
		// 		// id 값은 숫라 parseInt
		// 	};
		// },
		props: true,
		// props: route => ({
		// 	id: parseInt(route.params.id),
		// 	// id 값은 숫라 parseInt
		// }), // 하나의 객체를 리턴할 때
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	// history: createWebHistory('/'),
	history: createWebHashHistory(),
	routes,
});

export default router;
