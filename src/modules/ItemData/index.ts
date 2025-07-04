import VanillaItems from "./minecraft-items.json";

const DataProviders = [VanillaItems];

export interface Item {
    registerName: string; // 注册名称
    type: string; // 项目类型
    maxStackSize: string; // 最大堆叠数量
    maxDurability: string; // 最大耐久度
    TagList: string[]; // 包含的标签数组
    CreativeTabName: string; // 创造模式选项卡名称
    name: string; // 项目名称
    englishName: string; // 英文名称
    largeIcon: string; // 大图标路径
    smallIcon: string; // 小图标路径
}

export const queryItemByName = (itemName: string): Item | null => {
    for (const DataProvider of DataProviders) {
        for (const item of DataProvider as Item[]) {
            if (item.name == itemName) return item;
        }
    }
    return null;
};

export const queryItemByRegisterName = (registerName: string): Item | null => {
    for (const DataProvider of DataProviders) {
        for (const item of DataProvider as Item[]) {
            if (item.registerName == registerName) return item;
        }
    }
    return null;
};
