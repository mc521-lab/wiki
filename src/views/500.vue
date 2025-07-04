<script setup lang="ts">
    import { MCWMain } from "@/components";
    import { Wrapper } from "@/modules/Wrapper";

    const $window = window;
</script>

<template>
    <MCWMain class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">{{ Wrapper.getHeaderPageName() }}</h1>
        <hr />
        <span>加载此页面时发生错误。您可以尝试<a href="#" class="underline" @click="$window.location.reload()">刷新</a>页面，如果问题仍然存在，请向管理员反馈。</span>
    </MCWMain>
</template>
