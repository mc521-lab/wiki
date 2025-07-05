import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:matchAll(.*)*",
            component: () => import("@/controls/PageWrapper.vue"),
        },
    ],
});

export default router;
export { CMSMetadata } from "./CMSMetadata";
