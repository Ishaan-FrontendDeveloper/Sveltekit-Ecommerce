import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my-custom-theme.ts';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
      themes: {
        custom: [myCustomTheme],
        preset: [
          {name:"skeleton",enhancements:true},
          {name:"seafoam",enhancements:true},
          {name:"wintry",enhancements:true}
        ],
             },
		}),
	],
} satisfies Config;
