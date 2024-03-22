<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<!-- <form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form> -->
		<!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> 
		단일 팝업 -->
		<AppAlert :items="alerts" :message="alertMessage" :type="alertType" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
// import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		// 위에 ID가 있어서 그대로 id
		// post.value = { ...data };
		setForm(data);
		// 수정
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};
const setForm = ({ title, content }) => {
	// post.value = { ...data };
	form.value.title = title;
	form.value.content = content;
};

// const form = ref({}); -> post로 변경

fetchPost();
const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		// router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};

const goDetailPage = () =>
	router.push({
		name: 'PostDetail',
		params: { id },
	});

// alert
// 단일 알럿
// const showAlert = ref(false);
// const alertMessage = ref('');
// const alertType = ref('');
// const vAlert = (message, type = 'error') => {
// 	showAlert.value = true;
// 	alertMessage.value = message;
// 	alertType.value = type;
// 	setTimeout(() => {
// 		showAlert.value = false;
// 	}, 2000);
// };
//여러개 알럿
const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	// showAlert.value = true;
	// alertMessage.value = message;
	// alertType.value = type;
	setTimeout(() => {
		// showAlert.value = false;
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
