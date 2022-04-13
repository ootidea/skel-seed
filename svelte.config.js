import postcssOKLabFunction from '@csstools/postcss-oklab-function'
import adapter from '@sveltejs/adapter-auto'
import autoprefixer from 'autoprefixer'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [postcssOKLabFunction({ subFeatures: { displayP3: false } }), autoprefixer()],
    },
  }),

  kit: {
    adapter: adapter(),
  },
}

export default config
