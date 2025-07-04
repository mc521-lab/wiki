<script setup lang="ts">
    import MCWFrame from "./MCWFrame.vue";

    const AsideFrameColor = "#232324";
</script>

<template>
    <aside class="flex flex-col items-center gap-4 p-4">
        <img src="/global/brand/logo.png" alt="Logo" class="scale-85 rounded-sm border-4 border-white/35 mb-4 cursor-pointer" @click="$router.push('/')" />
        <div class="aside-block">
            <MCWFrame :color="AsideFrameColor" use-color :percentage="93.3" inner-class="p-2"> 参与贡献 </MCWFrame>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .aside-block {
        width: 100%;
        background: #232324;
        border: 2px solid black;
        font-size: 0.75rem;
        color: #b3b3b3;
    }
</style>
