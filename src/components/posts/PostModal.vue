<template>
	<!-- 팝업 -->
	<!-- props emit 말고 v-model로 팝업을 여는 방법-->
	<AppModal v-model="show" title="게시글">
		<template #default>
			<div class="row g-3">
				<div class="col-3">제목:</div>
				<div class="col-9">{{ title }}</div>
				<div class="col-3">내용:</div>
				<div class="col-9">{{ content }}</div>
				<div class="col-3">등록일:</div>
				<div class="col-9">{{ createdAt }}</div>
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
</template>

<script setup>
// import AppModal from '@/components/app/AppModal.vue';
import { computed } from 'vue';
const props = defineProps({
	// v-model
	modelValue: Boolean,
	title: String,
	content: String,
	createdAt: [String, Number],
});
const emit = defineEmits(['update:modelValue']);
const show = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});
const closeModal = () => {
	show.value = false;
};
</script>

<style lang="scss" scoped></style>
