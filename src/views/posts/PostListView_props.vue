<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		/>
		<!-- <form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select" name="" id="">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form> -->
		<hr />

		<AppGrid :items="posts" col-class="col-4">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:created-at="item.createdAt"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				></PostItem>
			</template>
		</AppGrid>
		<!-- <div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div> -->
		<!-- <nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: !(params._page > 1) }">
					<a
						class="page-link"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li
					class="page-item"
					:class="{ active: params._page === page }"
					v-for="page in pageCount"
					:key="page"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>
				<li
					class="page-item"
					:class="{ disabled: !(params._page < pageCount) }"
				>
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav> -->

		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		/>
		<!-- 팝업 -->
		<AppModal :show="show" title="게시글" @close="closeModal">
			<template #default>
				<div class="row g-3">
					<div class="col-3">제목:</div>
					<div class="col-9">{{ modalTitle }}</div>
					<div class="col-3">내용:</div>
					<div class="col-9">{{ modalContent }}</div>
					<div class="col-3">등록일:</div>
					<div class="col-9">{{ modalCreatedAt }}</div>
				</div>
			</template>
			<template #actions>
				<button
					type="button"
					class="btn btn-secondary"
					data-bs-dismiss="modal"
					@click="closeModal"
				>
					닫기
				</button>
				<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
			</template>
		</AppModal>

		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
		<!-- <AppCard>
			<PostDetailView :id="posts[0].id"></PostDetailView>
		</AppCard> -->
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/views/posts/PostFilter.vue';
// import AppPagination from '@/components/App/AppPagination.vue';
// import AppModal from '@/components/app/AppModal.vue';
// import AppCard from '@/components/App/AppCard.vue';
// import AppGrid from '@/components/App/AppGrid.vue';
import { getPosts } from '@/api/posts';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});

// 페이징 관련 pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

// const fetchPosts = () => {
// 	posts.value = getPosts();
// 	// local api
// };

// const fetchPosts = () => {
// 	// posts.value = getPosts();
// 	const response = getPosts();
// 	console.log(response);
// };
const fetchPosts = async () => {
	// 구조분해 할당으로 받음
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.error(error);
	}
};

watchEffect(fetchPosts);
// 위에서 반응형 상태가 변경되었을 때 해당 콜백 함수를 다시 실행 fetchPosts
// fetchPosts();

const goPage = id => {
	// router.push(`/posts/${id}`);
	// http://localhost:3002/posts/4?searchText=hello#world
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: 'hello',
		// },
		// hash: '#world',
	});
};

//modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
const closeModal = () => {
	show.value = false;
};
</script>

<style lang="scss" scoped></style>
