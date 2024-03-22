<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<!-- <routerLink class="nav-link" active-class="active" to="/nested/one"
					>nested one</routerLink
				> -->
				<!-- 히스토리를 쌓음-->
				<routerLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
					>nested one</routerLink
				>
				<!-- 히스토리를 쌓지 않음 -->
			</li>
			<li class="nav-item">
				<!-- <routerLink class="nav-link" active-class="active" to="/nested/two"
					>nested Two</routerLink
				> -->
				<routerLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedTwo', replace: true }"
					>nested two</routerLink
				>
			</li>
		</ul>
		<hr class="my-4" />
		<routerView></routerView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
