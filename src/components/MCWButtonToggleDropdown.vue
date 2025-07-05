<script setup lang="ts">
    import type { IMCWFrameColor } from "@/modules/StaticKey";
    import { MCWButtonBase } from ".";

    defineProps<{
        open: boolean;
        color: IMCWFrameColor;
    }>();
</script>

<template>
    <MCWButtonBase :pressed="open">
        <slot></slot>
    </MCWButtonBase>
</template>

<style lang="scss" scoped></style>
