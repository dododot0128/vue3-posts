<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my4" />
		<!-- <p>{{ $route.params }}</p>
		<p>{{ $route.query.searchText }}</p>
		<p>{{ $route.hash }}</p> -->
		<div class="row">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전 글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음 글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
// import { useRoute, useRouter } from 'vue-router';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	// id: Number,
	id: [String, Number],
});
// const route = useRoute();
const router = useRouter();
// const id = route.params.id;

/**
 * ref
 * 장 ) 객체 할당 가능
 * 단) form.value.title, form.value.content 처럼 .value를 붙여줘야 함
 * 장)일관성
 *
 * reactive
 * 단) 객체 할당 불가능
 * 장) form.title, form.content
 */
const post = ref({
	title: null,
	content: null,
	createdAt: null,
});
// const form = ref({}); -> post로 변경
// let form = reactive({});
// reactive();

// const fetchPost = () => {
// 	const data = getPostById(props.id);
// 	form.value = { ...data };
// };
const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		// post.value = { ...data };
		setPost(data);
	} catch (error) {
		console.error(error);
	}
};
const setPost = ({ title, content, createdAt }) => {
	// post.value = { ...data };
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

// const form = ref({}); -> post로 변경

fetchPost();

const remove = async () => {
	try {
		if (confirm('삭제 하시겠습니까?') === false) {
			return;
		}
		await deletePost(props.id);
		router.push({
			name: 'PostList',
		});
	} catch (error) {
		console.error(error);
	}
};
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
