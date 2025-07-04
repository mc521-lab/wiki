export interface CMSMetadataItem {
    visitAddr: string;
    importAddr: string;
    name?: string;
    isRoot?: boolean;
    meta?: object;
}

export const CMSMetadata: CMSMetadataItem[] = [
    {
        visitAddr: "/",
        importAddr: "Root.vue",
        isRoot: true,
        meta: {
            serverType: "__general__",
        },
    },
    {
        visitAddr: "/w/Zhucheng:Wiki",
        importAddr: "w/Zhucheng_Wiki.vue",
        meta: {
            serverType: "zc",
        },
    },
    {
        visitAddr: "/w/Diaoyu:Wiki",
        importAddr: "w/Diaoyu_Wiki.vue",
        meta: {
            serverType: "diaoyu",
        },
    },
    {
        visitAddr: "/w/Fuben:Wiki",
        importAddr: "w/Fuben_Wiki.vue",
        meta: {
            serverType: "fuben",
        },
    },
    {
        visitAddr: "/w/Mota:Wiki",
        importAddr: "w/Mota_Wiki.vue",
        meta: {
            serverType: "mota",
        },
    },
    {
        visitAddr: "/w/Huodong:Wiki",
        importAddr: "w/Huodong_Wiki.vue",
        meta: {
            serverType: "huodong",
        },
    },
];
