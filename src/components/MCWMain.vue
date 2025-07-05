<script setup lang="ts">
    import { MCWHint } from "@/components";
    import { Wrapper } from "@/modules/Wrapper";
</script>

<template>
    <main class="relative h-fit bg-[#E6EFF4] mt-18 ml-2 p-8 mr-4">
        <div class="top-block"></div>
        <div class="left-block"></div>
        <MCWHint :color="['#CCFFCC', '#55DD55']">
            <template #icon>
                <img
                    :src="
                        Wrapper.b64Img(
                            'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADyUlEQVR4XmP8//8/wygYuSHANBr5IzsERhMAw2gCGC0EGEargNFEMEJDYLQKGK0CRjM/w2gVMJoIGEargNFEMBJDYLQNMNoGGM35o22A0TTAMNoGGE0EDKNtgNFEMOJCYLQRONoIHM32IzkEWIa6511cXAb1goY9e/YwDuYwHq0CRquA0SpgJIfAaAkwWgKMlgCjJcBoGhixITBaBYxWAaPZf3QcYBCHAKF+/s6dO/G6/ubNm3jlX716RZHvxcTE8Oon5H7WT5fw6peX4MQrP2PTQ4rGGUargNEqYLQKGMkhMFoCjJYAoyXAaAkwmgZGbAiMVgGjVcBo9h/JITDkzwcg1M++evUqTeN3+fLlFJl/YnkGXv0LdzzBK3/94ZfRcYDRMoz8EBhtA4y2AUbzz0gOgdESYLQEGC0BRkuA0TQwYkNgtAoY4Yl/9JxAChOAp5kY3n0JvQsO4LWB0HqEyMhIvPqfP38+Og4wWoORHwKjVcBoL2A0/4z2AkbTwIgNgdEqYLQKGM3+o1XAaBoYsSEwOg5AIOoJ9fMJrds/ePEtXhumL9yCV57QvgNnZ2e8+gmNE4y2AUbbAKPl/2gbYDQNjHYDR9PAyAyB0TbAaBtgNO+PtgFG08CIDQGWkR73hPr59oZCeIOI0nX7kpKSeNcTULrvgFD8jrYBRtsAo+X/aBtgNA2MjgOMpoGRGQKjbYDRNsBo3h9tA4ymgREbAsN+HIDS+Xxa788f6JQ32gYYbQOMlv+jbYDRNDBiQ2C0ChitAkaz/2gVMJoGRquA0TQwMkNgyI8DDPR8Pq2TDaF9AZTaP9oIHG0Ejhb+o43A0TQw2ggcTQMjMwRG2wCjbYDRvD/aBhhNAyM2BAb9OMBIn89XV1enaeIcbQOMtgFGy//RNsBoGhgdBxhNAyMzBEbbAKNtgNG8P9oGGE0DIzYEBvycwOE+n09pyiJ0fsDofQGjpRdFITDaCBxtBI5modFG4GgaGLEhMFoFjFYBo9l/tAoYTQMjNgRoPg5A6/P2Kb0/n2G0ChjN/qNVwGgaGLEhMNoLGK0CRrP/aBUwmgZGq4DRNDAyQ2C0DTDCUz7F+wJG5/OHdgoaLQFGewGjtf9oL2A0DYz2AkbTwGgvYDQNjMAQGG0EjjYCRzP+SA4BitcDaMrz/KckAEfn8wc2+Y1WAaNVwGgVMJJDYLQEGC0BRkuA0RJgNA2M2BAYrQJGq4DR7D+SQ2DAzwcYTX6j4wCjaWAAQ2C0DTDaBhjNgCM5BEZLgNESYLQEGC0BRtPA6EDQaBoYmSEAAFrBieJX2ULKAAAAAElFTkSuQmCC'
                        )
                    "
                    class="size-8 -ml-2 mr-2" />
            </template>
            <h3 class="font-bold">全站通知：本 Wiki 开发正在进行中。</h3>
            <p class="text-sm">目前的效果可能与预期不符，不代表最终效果。目前未进行响应式适配，屏幕过小会导致内容挤压，请尽量使用电脑访问。</p>
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
