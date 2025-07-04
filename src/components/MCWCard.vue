<script setup lang="ts">
    import MCWFrame from "./MCWFrame.vue";

    defineProps<{
        color?: string;
        innerClass?: string;
    }>();
</script>

<template>
    <div class="mcw-card w-full" :style="{ '--mcw-card-color': color ?? '#F6F9FA' }">
        <MCWFrame :color="color ?? '#F6F9FA'" :inner-class="innerClass + 'h-full w-full p-2'" use-color>
            <slot />
        </MCWFrame>
    </div>
</template>

<style lang="scss" scoped>
    .mcw-card {
        background-color: var(--mcw-card-color);
        border: 2px solid color-mix(in srgb, var(--mcw-card-color) 75%, black);
    }
</style>
