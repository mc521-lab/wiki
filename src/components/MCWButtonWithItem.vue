<script setup lang="ts">
    import { ref } from "vue";
    import { MCWButtonBase } from ".";

    defineProps<{
        text: string;
        imageUrl?: string;
    }>();

    const isHover = ref(false);
    const isActive = ref(false);
</script>

<template>
    <div role="button" class="mcw-button-with-item" @mouseenter="isHover = true" @mouseleave="isHover = false" @mousedown="isActive = true" @mouseup="isActive = false">
        <div class="mcw-button-with-item--image" :class="{ 'mcw-button-with-item--image-hover': isHover, 'mcw-button-with-item--image-active': isActive }">
            <slot />
        </div>
        <MCWButtonBase class="w-full row-span-3 pointer-events-none" :color="{ default: ['#EBEBEB', '#202122'], primary: ['#D3D3D3', '#202122'] }" :pressed="isActive">
            {{ text }}
        </MCWButtonBase>
    </div>
</template>

<style lang="scss" scoped>
    .mcw-button-with-item {
        height: 144px;
        width: calc(var(--spacing) * 32) /* 8rem = 128px */;
        display: grid;
        grid-template-rows: repeat(10, minmax(0, 1fr));
        cursor: pointer;

        .mcw-button-with-item--image {
            --color: #c8cacb;
            background-color: var(--color);
            border: 2px solid color-mix(in srgb, var(--color) 50%, black);
            border-bottom: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            grid-row: span 7 / span 7;
            transition: all 0.15s;
            height: 100%;

            &.mcw-button-with-item--image-hover {
                --color: #b3b5b6;
            }
            &.mcw-button-with-item--image-active {
                height: calc(105% + 1px);
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background-color: color-mix(in srgb, var(--color) 80%, black);
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 6px;
                background-color: color-mix(in srgb, var(--color) 70%, white);
            }
        }
    }
</style>
