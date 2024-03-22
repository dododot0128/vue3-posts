<template>
	<!-- <Transition name="slide">
		<div v-if="show" :class="typeStyle" class="alert app-alert" role="alert">
			{{ message }}
		</div>
	</Transition> -->

	<div class="app-alert">
		<transition-group name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				:class="typeStyle(type)"
				class="alert"
				role="alert"
			>
				{{ message }}
			</div>
		</transition-group>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');

// 팝업이 한개일 때
// import { computed } from 'vue';
// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: 'error',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });
// const typeStyle = computed(() =>
// 	props.type === 'error' ? 'alert-danger' : 'alert-primary',
// );
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}
/* slide 라는 네임이 있는 효과 */
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}

/* 이름이 없는 효과 
.v-enter-from,
.v-leave-to {
	opacity: 0;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}
.v-enter-to,
.v-leave-from {
	opacity: 1;
}

*/
</style>
