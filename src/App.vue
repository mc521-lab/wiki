<script setup lang="ts">
    import { computed } from "vue";
    import { MCWAside, MCWBackground } from "@/components";
    import useMetaStore from "@/modules/stores/MetaStore";

    const metaStore = useMetaStore();
    const serverType = computed(() => metaStore.getMeta.serverType ?? "__general__");
</script>

<template>
    <MCWBackground :server-type="serverType" />
    <div class="flex flex-row overflow-x-hidden">
        <MCWAside class="w-[10.5vw]" />
        <RouterView class="flex-1 min-h-screen" />
    </div>
</template>

