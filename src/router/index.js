import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: '/',
		redirect: '/overview-drawing'
	},
	{
		path: '/',
		component: () => import("@/layout/Layout.vue"),
		children: [{
			path: '/1',
			name: "1",
			meta: { title: '1', id: 1 },
			component: () => import("../views/1.vue")
		}, {
			path: "/2",
			name: "2",
			meta: { title: '2', id: 2 },
			component: () => import("../views/2.vue")
		},
		 {
			path: "/map",
			name: "map",
			meta: { title: 'map', id: 6 },
			component: () => import("../views/map.vue")
		},
		 {
			path: "/speed",
			name: "Speed",
			meta: { title: 'Speed', id: 8 },
			component: () => import("../views/Speed.vue")
		},
		 {
			path: "/session",
			name: "Session",
			meta: { title: 'Session', id: 6 },
			component: () => import("../views/Session.vue")
		},
		 {
			path: "/error",
			name: "Error",
			meta: { title: 'Error', id: 6 },
			component: () => import("../views/Error.vue")
		},
		 {
			path: "/api",
			name: "Api",
			meta: { title: 'Api', id: 6 },
			component: () => import("../views/Api.vue")
		},
		 {
			path: "/probe",
			name: "probe",
			meta: { title: 'probe', id: 6 },
			component: () => import("../views/probe.vue")
		},
		{
			path: "/overview-drawing",
			name: "overview-drawing",
			meta: { title: '总览图', id: 5 },
			component: () => import("../views/overview-drawing.vue")
		},]
	},

	// 登录页面
	{
		path: "/login",
		name: "Login",
		meta: { title: 'Login' },
		component: () => import("@/views/Login.vue")
	},
	{
		path: "/register",
		name: "Register",
		meta: { title: 'Register' },
		component: () => import("@/views/Register.vue")
	},

	{
		path: '/:pathMatch(.*)',
		name: '404',
		meta: { title: '404界面' },
		component: () => import("../views/404.vue")
	}
]

const router = createRouter({ history: createWebHashHistory(), routes });

router.beforeEach((to, from, next) => {
	/* 每次更改路由前就会修改浏览器上方的网页名字 */
	document.title = `墨雨千秋|${to.meta.title}`;
	next();/* 更改后放行路由 */
});

export default router;