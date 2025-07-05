<script setup lang="ts">
    import { MCWCard, MCWButtonBase } from "@/components";

    const $env = import.meta.env;

    function openLink(url: string) {
        window.open(url, "_blank");
    }
</script>

<template>
    <MCWCard inner-class="flex flex-col justify-center items-center">
        <img src="/global/brand/wikilogo.png" class="h-24 mx-auto" />
        <br />
        <p class="mcw-p mb-0! text-sm">
            欢迎来到这个全公开的，可自由编辑的 Wiki，君庭阁中文 Wiki！<br />这里致力于为玩家呈现服务器中的每一处细节。<br />任何人都可以为 Wiki 做出贡献！
        </p>
        <br />
        <p class="mcw-p mb-0! text-sm text-center">
            {{ $env["MCW_PAGES_COUNT"] ?? "?" }} 个页面 · {{ $env["MCW_FILES_COUNT"] ?? "?" }} 个文件 · {{ $env["MCW_CONTRIBUTORS"] ?? 1 }} 位贡献者
        </p>
        <br />
        <div class="grid grid-cols-4 gap-2 w-full">
            <MCWButtonBase class="h-12" :color="{ primary: ['#009FD4', '#FFFFFF'] }" primary @click="openLink('https://space.bilibili.com/354529617')">
                <i class="icon-[mingcute--bilibili-line] size-6" />
            </MCWButtonBase>
            <MCWButtonBase class="h-12" :color="{ primary: ['#ff9600', '#FFFFFF'] }" primary @click="openLink('https://huya.com/ccjun6')">
                <!-- 虎牙 Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 48 48">
                    <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M36.495 14.143c8.681 9.38 6.688 18.158 2.032 22.234c-2.847 2.492-7.11 3.919-11.935 4.278c-9.112.677-18.77-1.863-20.777-11.023c-.806-3.678-.363-8.764 4.068-13.49c.007-3.586.93-5.806 2.636-8.474a14 14 0 0 1 6.628 2.203c2.339-.735 4.115-.868 6.372-.582c1.186-.919 1.837-1.562 3.143-2.047c4.19 1.772 5.994 3.938 7.833 6.9" />
                        <path d="M18.857 32.391c1.943 2.417 11.815 1.56 14.092-1.254" />
                        <path
                            d="M32.73 31.382c.223 1.427-.005 2.722-.592 3.853c-1.063-.31-2.258-1.063-2.837-2.14m-6.381.675c-.418 1.048-1.217 1.894-2.362 2.504c-.823-1.003-1.361-2.287-1.402-3.584M5.857 29.814c1.416-.861 3.266-1.382 5.388-1.575c-1.573 1.66-2.94 3.422-3.83 5.424m2.125 2.578c1.424-1.985 3.34-3.374 5.699-4.017c-1.227 1.975-1.685 4.424-1.545 6.673m28.639-9.461c-.752-1.066-1.707-2.064-3.203-3.18c1.195-.17 2.155-.084 3.349.233m-3.74 9.695c-.3-1.716-1.072-3.864-2.619-5.48a9.53 9.53 0 0 1 5.089 2.182M30.174 20.278c.086 1.717-5.602 5.454-7.11 4.671s-1.854-7.648-.432-8.583c1.422-.934 7.455 2.195 7.542 3.912" />
                        <path
                            d="M25.724 28.984c7.56-.66 11.817-.87 12.804-4.93c1.227-5.046-5.582-12.697-14.321-11.934c-6.277.547-12.65 4.821-12.52 11.765c.109 5.845 4.485 5.933 14.037 5.1" />
                    </g>
                </svg>
            </MCWButtonBase>
            <MCWButtonBase class="h-12" :color="{ primary: ['#35C1FC', '#FFFFFF'] }" primary @click="openLink('https://qm.qq.com/q/nHPvrHlHH2')">
                <i class="icon-[mingcute--qq-fill] size-6" />
            </MCWButtonBase>
            <MCWButtonBase class="h-12" :color="{ primary: ['#010409', '#FFFFFF'] }" primary @click="openLink('https://github.com/mc521-lab')">
                <i class="icon-[mingcute--github-line] size-6" />
            </MCWButtonBase>
        </div>
    </MCWCard>
</template>
