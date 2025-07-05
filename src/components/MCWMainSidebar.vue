<script setup lang="ts">
    defineProps<{
        title: string;
    }>();
</script>

<template>
    <div class="mcw-main-sidebar">
        <p class="mcw-main-sidebar--title">{{ $props.title }}</p>
        <slot name="image"></slot>
    </div>
</template>

<style lang="scss" scoped>
    .mcw-main-sidebar {
        width: 100%;
        height: 100%;
        background-color: #f8f9fa;
        border: 2px solid #bbbbbb;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .mcw-main-sidebar--title {
            width: 100%;
            text-align: center;
            background-color: #bcd4f5;
            padding: 4px 0;
        }

        :deep(.mcw-main-sidebar--image) {
            width: 90%;
            margin: 0 auto;
        }
    }
</style>
