<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Sidebar from './layout/Sidebar.vue';
import Readme from './README.md';
import { Head } from '@vueuse/head';
import { useDocs } from './docs';
import { useRoute } from 'vue-router';
import { computed, onMounted } from '@vue/runtime-core';

const route = useRoute();

const doc = computed(() => {
    const category = route.params.category;
    const doc = route.params.doc;

    return category ? `${category}/${doc}` : doc;
});

const docs = useDocs();
</script>

<template>
    <div id="foo" class="flex">
        <Sidebar />
        <div class="flex-1 container xl:pl-32 w-[1000px] overflow-x-hidden">
            <div class="fixed right-0 top-0">
                <svg
                    width="429"
                    height="697"
                    xmlns="http://www.w3.org/2000/svg"
                    class="-mr-16 blur-lg"
                >
                    <defs>
                        <linearGradient
                            x1="99.777%"
                            y1="49.777%"
                            x2=".223%"
                            y2="49.777%"
                            id="a"
                        >
                            <stop stop-color="#FFA84B" offset="0%" />
                            <stop stop-color="#FF6D7F" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M349.314 12.557c37.107 0 67.187 30.08 67.187 67.188 0 37.106-30.08 67.187-67.187 67.187s-67.188 30.082-67.188 67.19c0 37.106 30.081 67.187 67.188 67.187s67.187 30.08 67.187 67.187-30.08 67.188-67.187 67.188-67.188-30.081-67.188-67.188c0-37.106-30.08-67.187-67.187-67.187-37.108 0-67.19 30.08-67.19 67.187s-30.08 67.188-67.187 67.188c-37.106 0-67.187 30.082-67.187 67.189 0 37.107 30.08 67.187 67.187 67.187h-2.487c37.106 0 67.187 30.081 67.187 67.188s30.081 67.187 67.188 67.187c37.106 0 67.187-30.08 67.187-67.187s-30.08-67.188-67.187-67.188"
                        stroke="url(#a)"
                        stroke-width="25"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            <nav
                class="flex justify-between pt-8 pb-4 mb-16 border-b border-gray-800"
            >
                <div
                    class="bg-gray-200 w-2/3 rounded-[12px] focus-within:ring flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 -2.5 24 24"
                        width="24"
                        fill="currentColor"
                        class="absolute ml-3 pointer-events-none"
                    >
                        <path
                            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                        ></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        class="bg-transparent pl-12 pr-4 py-2 w-full outline-none border-none text-gray-500"
                    />
                </div>
                <div></div>
            </nav>
            <main class="relative pb-32">
                <component :is="docs[doc]" v-if="doc in docs" />
                <div
                    class="flex space-x-6 border-t border-gray-900 pt-12 mt-24"
                >
                    <button
                        class="bg-gradient-to-r from-orange to-red-500 text-white px-8 h-[35px] text-sm rounded-[13px] flex items-center"
                    >
                        ← read previous step
                    </button>
                    <button
                        class="bg-gradient-to-r from-orange to-red-500 text-white h-[35px] p-[2px] text-sm rounded-[13px] flex items-center"
                    >
                        <div
                            class="bg-white px-8 h-full rounded-[11px] flex items-center"
                        >
                            read next step →
                        </div>
                    </button>
                </div>
            </main>
        </div>
    </div>
</template>
