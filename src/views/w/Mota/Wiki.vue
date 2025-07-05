<script setup lang="ts">
    import { MCWCard } from "@/components";
    import { CatgButtons, DescCard } from "@/controls";
</script>

<template>
    <CatgButtons currentTab="mota" />
    <div class="grid grid-cols-3 gap-2">
        <MCWCard class="h-[24vh] col-span-2"></MCWCard>
        <DescCard />
    </div>
</template>

<style lang="scss" scoped></style>
