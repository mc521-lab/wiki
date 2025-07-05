<script setup lang="ts">
    import { MCWFrame, MCWAsideBlock } from ".";

    const AsideFrameColor = "#232324";
</script>

<template>
    <aside class="flex flex-col items-center gap-4 p-4">
        <img src="/global/brand/logo.png" alt="Logo" class="scale-85 rounded-sm border-4 border-white/35 mb-4 cursor-pointer" @click="$router.push('/')" />
        <MCWAsideBlock>
            <MCWFrame :color="AsideFrameColor" use-color :percentage="93.3" inner-class="p-2">参与贡献</MCWFrame>
        </MCWAsideBlock>
    </aside>
</template>

<style lang="scss" scoped>
    :deep(.mcw-aside-block:last-child) {
        // 让最后一个 AsideBlock 如果要滑出页面时挂在距离顶部有 8 单位高度上
        position: sticky;
        top: calc(8 * var(--spacing));
    }
</style>
