// import axios from 'axios';
// axios
import { posts } from '.';

// const posts = [
// 	{
// 		id: 1,
// 		title: '제목1',
// 		content: '내용1 내용1 내용1',
// 		createdAt: '2024-03-13',
// 	},
// 	{
// 		id: 2,
// 		title: '제목2',
// 		content: '내용2 내용2 내용2',
// 		createdAt: '2024-03-14',
// 	},
// 	{
// 		id: 3,
// 		title: '제목3',
// 		content: '내용3 내용3 내용3',
// 		createdAt: '2024-03-15',
// 	},
// 	{
// 		id: 4,
// 		title: '제목4',
// 		content: '내용4 내용4 내용4',
// 		createdAt: '2024-03-16',
// 	},
// 	{
// 		id: 5,
// 		title: '제목5',
// 		content: '내용5 내용5 내용5',
// 		createdAt: '2024-03-17',
// 	},
// ];

// export function getPosts(params) {
// 	// return posts;
// 	return axios.get('http://localhost:5000/posts', { params });
// }

// export function getPostById(id) {
// 	// const numberID = id;
// 	// return posts.find(item => item.id === id);
// 	return axios.get(`http://localhost:5000/posts/${id}`);
// }

// export function createPost(data) {
// 	return axios.post('http://localhost:5000/posts', data);
// }
// export function updatePost(id, data) {
// 	return axios.put(`http://localhost:5000/posts/${id}`, data);
// }
// export function deletePost(id) {
// 	return axios.delete(`http://localhost:5000/posts/${id}`);
// }

// export function getPosts(params) {
// 	// return posts;
// 	return posts.get('/', { params });
// }

// export function getPostById(id) {
// 	// const numberID = id;
// 	// return posts.find(item => item.id === id);
// 	return posts.get(`/${id}`);
// }

// export function createPost(data) {
// 	return posts.post('', data);
// }
// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }
// export function deletePost(id) {
// 	return posts.delete(`/${id}`);
// }

// import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// 	// put : 전체 수정
// }

export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
	// patch : 부분 수정
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
