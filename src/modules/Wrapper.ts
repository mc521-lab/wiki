import { useRoute } from "vue-router";

export class Wrapper {
    static getHeaderPageName() {
        const _name = useRoute().path.split("/").pop();
        return _name === "" ? "首页" : _name;
    }
    static b64Img(url: string | undefined) {
        return url ? `data:image/png;base64,${url}` : "";
    }
}
