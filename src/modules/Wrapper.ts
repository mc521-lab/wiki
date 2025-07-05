export class Wrapper {
    static getHeaderPageName(path: string): string {
        const _p = path.split("/");
        if (_p.length < 3) return "主页";
        return _p.pop() ?? "Placeholder:未知页面";
    }

    static b64Img(url: string | undefined) {
        return url ? `data:image/png;base64,${url}` : "";
    }
}
