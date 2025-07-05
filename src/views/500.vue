<script setup lang="ts">
    const $window = window;
</script>

<template>
    <span class="mt-4">加载此页面时发生错误。您可以尝试<a href="#" class="underline" @click="$window.location.reload()">刷新</a>页面，如果问题仍然存在，请向管理员反馈。</span>
</template>
