<script setup lang="ts">
    import { MCWMain } from "@/components";
    import { Wrapper } from "@/modules/Wrapper";
</script>

<template>
    <MCWMain class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">{{ Wrapper.getHeaderPageName() }}</h1>
        <hr />
        此页面目前没有内容。您可以在其他页面内搜索此页面标题，搜索相关日志，但是您没有权限创建此页面。
    </MCWMain>
</template>
