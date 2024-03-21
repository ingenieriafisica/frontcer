interface NoticiasInterface {
    id: string;
    title: string;
    content: string;
    images?: string[];
    publishDate: Date;
    isPublished: boolean;
}

export class News implements NoticiasInterface {
    id: string;
    title: string;
    content: string;
    images?: string[];
    publishDate: Date;
    isPublished: boolean;

    constructor(id: string,title:string,content:string, publishDate:Date,isPublished: boolean,images?:string[],) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.images = [];
        this.publishDate = publishDate;
        this.isPublished = true;
    }
}
