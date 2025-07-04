<script setup lang="ts">
    defineProps<{
        color: string;
        percentage?: number;
        useColor?: boolean;
        innerClass?: string;
    }>();
</script>

<template>
    <div
        class="mcw-frame"
        :class="[innerClass, useColor ?? true ? 'load' : '']"
        :style="{
            '--color-mcwframe': color,
            '--percentage': `${percentage ?? 80}%`,
        }">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .mcw-frame {
        width: 100%;
        height: 100%;
        border: 3px solid transparent;
        transition: all 0.15s;
        &.load {
            border-color: color-mix(
                in srgb,
                var(--color-mcwframe) var(--percentage),
                white
            );
        }
    }
</style>
