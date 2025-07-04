<script setup lang="ts">
    import { ref, onMounted, watch, onUnmounted } from "vue";
    import type { Component, WatchHandle } from "vue";
    import { useRoute } from "vue-router";
    import { CMSMetadata } from "@/modules/router/CMSMetadata";
    import { MCWMain, MCWHint } from "@/components";
    import { Wrapper } from "@/modules/Wrapper";
    import useMetaStore from "@/modules/stores/MetaStore";

    const route = useRoute();
    const metaStore = useMetaStore();

    const isLoading = ref(true); // 加载状态
    const currentComponent = ref<Component | null>(null); // 存储动态加载的组件

    const $window = window;

    // 使用 Vite 的 import.meta.glob 来预加载所有视图组件
    const viewModules = import.meta.glob("../views/**/*.vue", { eager: true });

    async function loadPage() {
        const pageId = route.path; // 查找 CMSMetadata 中对应的页面
        const page = CMSMetadata.find((item) => item.visitAddr === pageId);
        if (page) {
            try {
                // 构建完整的模块路径
                const modulePath = `/views/${page.importAddr}`;
                const resolvedPath = Object.keys(viewModules).find((key) => key.includes(modulePath));
                if (resolvedPath && viewModules[resolvedPath]) {
                    // 使用预加载的模块
                    currentComponent.value = (viewModules[resolvedPath] as any).default;
                    // 暴露 Meta
                    metaStore.setMeta(page.meta ?? {});
                } else {
                    throw new Error(`Module not found: ${page.importAddr}`);
                }
            } catch (error) {
                // 加载失败时，加载 500 页面
                const errorModulePath = Object.keys(viewModules).find((key) => key.includes("500.vue"));
                if (errorModulePath) {
                    currentComponent.value = (viewModules[errorModulePath] as any).default;
                }
                metaStore.setMeta({
                    serverType: "diyu",
                    error,
                });
            }
        } else {
            // 如果没有找到对应的页面，直接加载 404 页面
            const notFoundModulePath = Object.keys(viewModules).find((key) => key.includes("404.vue"));
            if (notFoundModulePath) {
                currentComponent.value = (viewModules[notFoundModulePath] as any).default;
            }
        }
        isLoading.value = false;
    }

    let handle: null | WatchHandle = null;
    onMounted(() => {
        handle = watch(
            () => route.path,
            async () => {
                isLoading.value = true;
                currentComponent.value = null;
                await loadPage();
            },
            { immediate: true }
        );
    });
    onUnmounted(() => {
        handle?.();
    });
</script>

<template>
    <div class="w-full h-full relative">
        <Transition name="fade" mode="out-in">
            <MCWMain class="top-0 left-0 absolute flex flex-col gap-2" v-if="isLoading">
                <h1 class="text-2xl font-bold">{{ Wrapper.getHeaderPageName() }}</h1>
                <hr />
                <p class="">页面加载中…… 请稍等，如果长时间未加载，请<a href="#" class="underline" @click="$window.location.reload()">刷新</a>页面。</p>
            </MCWMain>
        </Transition>
        <Transition name="fade" mode="out-in">
            <div class="w-full h-full absolute top-0 left-0" v-if="!isLoading">
                <component :is="currentComponent" />
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.25s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
