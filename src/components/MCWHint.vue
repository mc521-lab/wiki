<script setup lang="ts">
    withDefaults(
        defineProps<{
            color: [string, string];
        }>(),
        {
            color: () => ["#CCEEFF", "#99DDFF"],
        }
    );
</script>

<template>
    <section class="mcw-hint py-2 pl-8 w-[80%] mx-auto mb-2 flex gap-2 items-center" :style="{ '--mcw-hint-color': color[0], '--mcw-hint-color-left': color[1] }">
        <slot name="icon" />
        <div>
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .mcw-hint {
        background-color: var(--mcw-hint-color);
        position: relative;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 100%;
            background-color: var(--mcw-hint-color-left);
        }
    }
</style>
