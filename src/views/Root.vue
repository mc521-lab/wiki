<script setup lang="ts">
    import { MCWCard, MCWButtonWithItem } from "@/components";
    import { CatgButtons, DescCard } from "@/controls";
</script>

<template>
    <CatgButtons currentTab="__general__" />
    <div class="grid grid-cols-3 gap-2">
        <MCWCard class="h-fit col-span-2" inner-class="flex justify-center items-center">
            <section class="grid grid-cols-7 grid-rows-2 gap-x-4 gap-y-2">
                <MCWButtonWithItem text="附魔" @click="$router.push('/w/General:附魔:简介')">
                    <img src="/pages/Root/fumo.webp" class="size-16" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="公会" @click="$router.push('/w/General:公会:简介')">
                    <img src="/pages/Root/gonghui.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="称号" @click="$router.push('/w/General:称号:简介')">
                    <img src="/pages/Root/chenghao.webp" class="size-22 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="阶级" @click="$router.push('/w/General:阶级:简介')">
                    <img src="/pages/Root/jieji.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="精灵" @click="$router.push('/w/General:精灵:简介')">
                    <img src="/pages/Root/jingling.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="领地" @click="$router.push('/w/General:领地:简介')">
                    <img src="/pages/Root/lingdi.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="商城" @click="$router.push('/w/General:商城:简介')">
                    <img src="/pages/Root/shangcheng.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="市场" @click="$router.push('/w/General:市场:简介')">
                    <img src="/pages/Root/shichang.webp" class="size-22 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="战令" @click="$router.push('/w/General:战令:简介')">
                    <img src="/pages/Root/zhanling.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
                <MCWButtonWithItem text="职业" @click="$router.push('/w/General:职业:简介')">
                    <img src="/pages/Root/zhiye.webp" class="size-20 translate-y-0.5" />
                </MCWButtonWithItem>
            </section>
        </MCWCard>
        <DescCard />
        <div></div>
        <div></div>
        <MCWCard></MCWCard>
    </div>
</template>

<style lang="scss" scoped></style>

