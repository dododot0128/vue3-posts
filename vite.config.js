import { fileURLToPath, URL } from 'url';
import Components from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dirs: ['src/components/app'], // 자동으로 가져오기를 원하는 디렉토리
			dts: true,
		}),
	],
	// 기본 모드가 devlopment
	// mode: 'devlopment',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
