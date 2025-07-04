<script setup lang="ts">
    import { MCWButtonBase } from "@/components";
    import type { IMCWFrameColor } from "@/modules/StaticKey";

    const { currentTab } = defineProps<{
        currentTab: string;
    }>();

    const DefaultColor = ["#EBEBEB", "#202122"];

    function colorWrapper(primary: [string, string]): IMCWFrameColor {
        return {
            default: DefaultColor as IMCWFrameColor["default"],
            primary: primary as IMCWFrameColor["primary"],
        };
    }
</script>

<template>
    <div class="grid grid-cols-6">
        <MCWButtonBase class="h-12" :color="colorWrapper(['#34881B', '#FFF'])" :tab="true" :pressed="currentTab === '__general__'" @click="$router.push('/')">
            <img src="/global/categories/sc.png" alt="sc" class="size-6" />
            <span class="text-sm ml-2">通用指南</span>
        </MCWButtonBase>
        <MCWButtonBase class="h-12" :color="colorWrapper(['#78ad20', '#FFF'])" :tab="true" :pressed="currentTab === 'zc'" @click="$router.push('/w/Zhucheng:Wiki')">
            <img src="/global/categories/zc.png" alt="zc" class="size-6" />
            <span class="text-sm ml-2">主城</span>
        </MCWButtonBase>
        <MCWButtonBase class="h-12" :color="colorWrapper(['#0072AE', '#FFF'])" :tab="true" :pressed="currentTab === 'diaoyu'" @click="$router.push('/w/Diaoyu:Wiki')">
            <img src="/global/categories/diaoyu.png" alt="diaoyu" class="size-6" />
            <span class="text-sm ml-2">钓鱼</span>
        </MCWButtonBase>
        <MCWButtonBase class="h-12" :color="colorWrapper(['#FF8731', '#FFF'])" :tab="true" :pressed="currentTab === 'fuben'" @click="$router.push('/w/Fuben:Wiki')">
            <img src="/global/categories/fuben.png" alt="fuben" class="size-6" />
            <span class="text-sm ml-2">副本</span>
        </MCWButtonBase>
        <MCWButtonBase class="h-12" :color="colorWrapper(['#7249D4', '#FFF'])" :tab="true" :pressed="currentTab === 'mota'" @click="$router.push('/w/Mota:Wiki')">
            <img src="/global/categories/mota.png" alt="mota" class="size-6" />
            <span class="text-sm ml-2">魔塔</span>
        </MCWButtonBase>
        <MCWButtonBase class="h-12" :color="colorWrapper(['#07B059', '#FFF'])" :tab="true" :pressed="currentTab === 'huodong'" @click="$router.push('/w/Huodong:Wiki')">
            <img src="/global/categories/huodong.png" alt="huodong" class="size-6" />
            <span class="text-sm ml-2">活动</span>
        </MCWButtonBase>
    </div>
</template>
