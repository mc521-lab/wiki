<script setup lang="ts">
    import { MCWHint } from "@/components";
    import { Wrapper } from "@/modules/Wrapper";
    import { queryItemByRegisterName } from "@/modules/ItemData";
</script>

<template>
    <main class="relative h-fit bg-[#E6EFF4] mt-18 ml-2 p-8 mr-4">
        <div class="top-block"></div>
        <div class="left-block"></div>
        <MCWHint :color="['#CCFFCC', '#55DD55']">
            <template #icon>
                <img :src="Wrapper.b64Img(queryItemByRegisterName('minecraft:iron_pickaxe')?.largeIcon)" class="size-8 -ml-2 mr-2" />
            </template>
            <h3 class="font-bold">全站通知：本 Wiki 开发正在进行中。</h3>
            <p class="text-sm">目前的效果可能与预期不符，不代表最终效果。</p>
        </MCWHint>
        <slot />
    </main>
</template>

<style lang="scss" scoped>
    .top-block {
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #b4bec3;
        clip-path: polygon(-5px 0, calc(100% - 5px) 0, 100% 100%, 0 100%);

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -5px;
            width: 5px;
            height: 5px;
            background: #b4bec3;
        }
    }

    .left-block {
        position: absolute;
        top: 0;
        left: -5px;
        width: 5px;
        height: 100%;
        background-color: #171717;
        clip-path: polygon(0 -5px, 100% 0, 100% 100%, 0 calc(100% - 5px));

        &::before {
            content: "";
            position: absolute;
            top: -5px;
            left: 0;
            width: 5px;
            height: 5px;
            background: #171717;
        }
    }
</style>
