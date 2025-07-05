<script setup lang="ts">
    defineProps<{
        hasSidebar?: boolean;
    }>();
</script>

<template>
    <div class="mcw-main-content w-full h-full flex gap-4" :class="{ 'justify-end': hasSidebar }">
        <div class="mcw-main-content--main" :class="{ 'w-full': !hasSidebar, 'w-3/4': hasSidebar }">
            <slot></slot>
        </div>
        <div class="mcw-main-content--sidebar ml-auto w-1/4" v-if="hasSidebar">
            <slot name="sidebar"></slot>
        </div>
    </div>
</template>
