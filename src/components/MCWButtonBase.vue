<script setup lang="ts">
    import { computed, ref } from "vue";
    import type { IMCWFrameColor } from "@/modules/StaticKey";
    import { MCWFrame } from ".";

    interface Props {
        size?: number;
        color?: IMCWFrameColor;
        primary?: boolean;
        pressed?: boolean;
        tab?: boolean;
    }

    const props = withDefaults(defineProps<Props>(), {
        text: "按钮",
        size: 12,
        color: () => ({
            default: ["#EBEBEB", "#202122"],
            primary: ["#CCCCCC", "#202122"],
        }),
    });

    const isPressed = ref(false);
    const isHovered = ref(false);

    const genColor = (defaultColor: [string, string] | undefined, pressedColor: [string, string]) => {
        return isPressed.value || isHovered.value || props.primary || props.pressed ? pressedColor : defaultColor ?? pressedColor;
    };

    // 计算按钮样式
    const buttonStyle = computed(() => {
        const style: Record<string, string> = {
            "--color-mcwbutton": genColor(props.color.default, props.color.primary)[0],
            "--color-mcwbutton-text": genColor(props.color.default, props.color.primary)[1],
        };

        // 如果size是数字，则使用自定义尺寸
        if (typeof props.size === "number") {
            const baseSize = props.size;
            const shadowHeight = Math.max(4, baseSize * 0.2);

            style["--shadow-height"] = `${shadowHeight}px`;
            style["--shadow-bottom"] = `-${shadowHeight}px`;
        }

        return style;
    });

    // 计算按钮类名
    const buttonClasses = computed(() => {
        const classes = ["mcw-button"];

        if (typeof props.size === "string") {
            classes.push(`mcw-button--${props.size}`);
        } else {
            classes.push("mcw-button--custom");
        }

        return classes;
    });
</script>

<template>
    <div
        class="mcw-button"
        :class="buttonClasses"
        :style="buttonStyle"
        @mouseenter="isHovered = true"
        @mousedown="isPressed = true"
        @mouseup="isPressed = false"
        @mouseleave="
            isPressed = false;
            isHovered = false;
        "
        @touchstart="isPressed = true"
        @touchend="isPressed = false"
        tabindex="-1">
        <div
            class="content"
            :class="{
                activated: isPressed || pressed,
                udl: pressed && tab,
            }">
            <MCWFrame :color="color.primary[0]" :use-color="isPressed || isHovered || (pressed ?? false) || primary" inner-class="flex items-center justify-center">
                <slot></slot>
            </MCWFrame>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<style lang="scss" scoped>
    .mcw-button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        border: none;
        background: none;
        padding: 0;
        border-bottom: 2px solid color-mix(in srgb, var(--color-mcwbutton) 30%, black);

        &:hover {
            filter: brightness(1.1);
        }

        .content {
            position: relative;
            z-index: 1;
            background: var(--color-mcwbutton);
            color: var(--color-mcwbutton-text);
            border: 2px solid color-mix(in srgb, var(--color-mcwbutton) 30%, black);
            border-bottom: none;
            font-size: var(--font-size);
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
            transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            height: calc(100% - 6px);
            transition: all 0.15s;

            &.activated {
                transform: translateY(6px);
            }

            &.udl:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 64px;
                height: 2px;
                background: var(--color-mcwbutton-text);
            }
        }

        .bottom {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 6px;
            background: color-mix(in srgb, var(--color-mcwbutton) 80%, black);
            z-index: 0;
            transition: background 0.15s;
            border: 2px solid color-mix(in srgb, var(--color-mcwbutton) 30%, black);
            border-top: none;
            border-bottom: none;
        }
    }
</style>
