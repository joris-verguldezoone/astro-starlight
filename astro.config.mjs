import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/astro-starlight/',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Langages',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'GO', link: '/langages/GO' },
					],
				}
			],
		}),
	],
});
