export interface CMSMetadataItem {
    visitAddr: string;
    importAddr: string;
    name?: string;
    isRoot?: boolean;
    meta?: object;
}

export const CMSMetadata: CMSMetadataItem[] = [
    { visitAddr: "/", importAddr: "/Root.vue", isRoot: true, meta: { serverType: "__general__", home: true } },
    { visitAddr: "/w/Zhucheng:Wiki", importAddr: "/w/Zhucheng/Wiki.vue", meta: { serverType: "zhucheng", home: true } },
    { visitAddr: "/w/Diaoyu:Wiki", importAddr: "/w/Diaoyu/Wiki.vue", meta: { serverType: "diaoyu", home: true } },
    { visitAddr: "/w/Fuben:Wiki", importAddr: "/w/Fuben/Wiki.vue", meta: { serverType: "fuben", home: true } },
    { visitAddr: "/w/Mota:Wiki", importAddr: "/w/Mota/Wiki.vue", meta: { serverType: "mota", home: true } },
    { visitAddr: "/w/Huodong:Wiki", importAddr: "/w/Huodong/Wiki.vue", meta: { serverType: "huodong", home: true } },
{
    "visitAddr": "/w/General:附魔:列表",
    "importAddr": "/w/General/附魔/列表.vue",
    "meta": {
        "serverType": "__general__"
    }
},
{
    "visitAddr": "/w/General:附魔:简介",
    "importAddr": "/w/General/附魔/简介.vue",
    "meta": {
        "serverType": "__general__"
    }
},
];
