<script setup lang="ts">
    import { computed } from "vue";
    import { MCWAside, MCWBackground } from "@/components";
    import useMetaStore from "@/modules/stores/MetaStore";

    const metaStore = useMetaStore();
    const serverType = computed(() => metaStore.getMeta.serverType ?? "__general__");
</script>

<template>
    <MCWBackground :server-type="serverType" />
    <div class="grid grid-cols-[10.5vw_89.5vw] h-screen">
        <MCWAside />
        <RouterView />
    </div>
</template>

