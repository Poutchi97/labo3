export class Link {

    public title: string;
    public url?: string;
    public children?: Link[];
    public isVisible?: boolean;
    public queryParams?: any;

    constructor(title: string, url?: string, children?: Link[], isVisible?: boolean, queryParams?: any) {
        this.title = title;
        this.url = url;
        this.children = children;
        this.isVisible = isVisible;
        this.queryParams = queryParams;
    }
}
