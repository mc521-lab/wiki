<script setup lang="ts">
    import { MCWMain, MCWCard } from "@/components";
    import { CatgButtons, DescCard } from "@/controls";
</script>

<template>
    <MCWMain class="flex flex-col gap-2">
        <CatgButtons currentTab="__general__" />
        <div class="grid grid-cols-3 gap-2">
            <MCWCard class="h-[24vh] col-span-2"></MCWCard>
            <DescCard />
        </div>
    </MCWMain>
</template>

<style lang="scss" scoped></style>

