import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }), 
        Markdown({
            headEnabled: true,
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            markdownItSetup(md) {
                // add code syntax highlighting with Prism
                md.use(prism)
            },
        })
    ]
})
