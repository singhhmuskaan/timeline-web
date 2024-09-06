import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [
        // laravel(['resources/js/app.jsx']),
        // react({
        //     jsxRuntime: 'classic' // Add this line
        //   }
        // ),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react(),
    ],
});
