<script setup lang="ts">
    defineProps<{
        serverType: string;
    }>();

    const vaildServerType = ["__general__", "zhucheng", "fuben", "mota", "huodong", "diaoyu"];
</script>

<template>
    <div class="mcw-root" :class="`server-${serverType && vaildServerType.includes(serverType) ? serverType : '__general__'}`"></div>
</template>

<style lang="scss" scoped>
    .mcw-root {
        width: 100vw;
        height: 100vh;
        background-size: 196px 196px, 196px 196px;
        background-repeat: repeat-x, repeat;
        background-position: 0 0, 0 196px;
        position: fixed;
        z-index: -1;

        &.server-__general__ {
            background-image: url("/global/backgrounds/top.png"), url("/global/backgrounds/deeper.png");
            filter: hue-rotate(-30deg) saturate(1.15);
        }

        &.server-zhucheng {
            // 主城
            background-image: url("/global/backgrounds/top.png"), url("/global/backgrounds/deeper.png");
            filter: saturate(1);
        }

        &.server-dipi {
            // 生存 / 资源主世界 / 地皮
            background-image: url("/global/backgrounds/top.png"), url("/global/backgrounds/deeper.png");
        }

        &.server-fuben {
            // 副本
            background-image: url("/global/backgrounds/top2.png"), url("/global/backgrounds/deeper.png");
        }

        &.server-mota {
            // 魔塔
            background-image: url("/global/backgrounds/top2.png"), url("/global/backgrounds/deeper.png");
            filter: hue-rotate(-120deg);
        }

        &.server-huodong {
            // 活动
            background-image: url("/global/backgrounds/top4.png"), url("/global/backgrounds/deeper.png");
        }

        &.server-diaoyu {
            // 钓鱼
            background-image: url("/global/backgrounds/top2.png"), url("/global/backgrounds/deeper.png");
            filter: hue-rotate(180deg);
        }
    }
</style>
