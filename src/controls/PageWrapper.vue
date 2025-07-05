<script setup lang="ts">
    import { ref, shallowRef, watch, type Component } from "vue";
    import { useRoute } from "vue-router";
    import { useMetaStore } from "@/modules/stores";
    import { CMSMetadata } from "@/modules/router";
    import { Wrapper } from "@/modules/Wrapper";
    import { MCWAsideBlock, MCWMain } from "@/components";

    const route = useRoute();
    const metaStore = useMetaStore();
    const currentComponent = shallowRef<Component | null>(null);
    const isLoading = ref(true);

    // 懒加载所有页面组件
    const viewModules = import.meta.glob("../views/**/*.vue");

    function normalizePath(path: string) {
        return decodeURIComponent(path);
    }

    function getPageName() {
        const _name = (decodeURIComponent(Wrapper.getHeaderPageName(route.path)) ?? "未知页面")
            .replace("General", "通用指南")
            .replace("Zhucheng", "主城")
            .replace("Diaoyu", "钓鱼")
            .replace("Fuben", "副本")
            .replace("Mota", "魔塔")
            .replace("Huodong", "活动");
        const _splited = _name.split(":");
        const _end = _splited.pop();
        if (_splited.length > 1) {
            return _splited.join("-") + `: ${_end}`;
        } else if (_splited.length === 1) {
            return _splited[0] + `: ${_end}`;
        } else {
            return _end;
        }
    }

    async function loadPage() {
        isLoading.value = true;
        setTimeout(async function () {
            try {
                const pageId = normalizePath(route.path);
                const page = CMSMetadata.find((p) => normalizePath(p.visitAddr) === pageId);

                const fullPath = page ? `../views${page.importAddr}` : null;

                if (!fullPath || !(fullPath in viewModules)) {
                    console.warn(`页面模块 "${fullPath}" 未找到，加载 404 页`);
                    const fallback = Object.keys(viewModules).find((key) => key.endsWith("/404.vue"));
                    if (fallback) {
                        const mod = (await viewModules[fallback]()) as { default: Component };
                        currentComponent.value = mod.default;
                    } else {
                        currentComponent.value = null;
                    }
                    isLoading.value = false;
                    return;
                }

                const mod = (await viewModules[fullPath]()) as { default: Component };
                currentComponent.value = mod.default;
                metaStore.setMeta(page?.meta ?? {});

                isLoading.value = false;
            } catch (error) {
                // 加载 500 页
                const fallback = Object.keys(viewModules).find((key) => key.endsWith("/500.vue"));
                if (fallback) {
                    const mod = (await viewModules[fallback]()) as { default: Component };
                    currentComponent.value = mod.default;
                } else {
                    currentComponent.value = null;
                }
                isLoading.value = false;
            }
        }, 250);
    }

    // 路由变化时触发加载
    watch(
        () => route.path,
        (newPath, oldPath) => {
            if (newPath !== oldPath) {
                loadPage();
            }
        },
        { immediate: true }
    );

    const $window = window;
</script>

<template>
    <div class="w-full h-full relative">
        <Transition name="fade" mode="out-in">
            <MCWMain class="top-0 left-0 absolute flex flex-col gap-2" v-if="isLoading">
                <h2 class="mcw-h2 mt-0!">{{ getPageName() }}</h2>
                <p class="mcw-p">页面加载中…… 请稍等，如果长时间未加载，请<a href="#" class="underline" @click="$window.location.reload()">刷新</a>页面。</p>
            </MCWMain>
        </Transition>
        <Transition name="fade" mode="out-in">
            <div class="w-full h-full absolute top-0 left-0" v-if="!isLoading">
                <MCWMain class="flex flex-col gap-2">
                    <h2 class="mcw-h2 mt-0!" v-if="!metaStore.getMeta.home">
                        {{ getPageName() }}
                    </h2>
                    <component :is="currentComponent" />
                </MCWMain>
                <MCWAsideBlock></MCWAsideBlock>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.25s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: scale(0.98);
    }
</style>
