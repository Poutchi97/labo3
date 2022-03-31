export interface IGetOneResult {
    id: string;
    attributes: IAttributes;
}


interface IAttributes {
    createdAt?: string;
    updatedAt?: string;
    synopsis: string;
    titles: ITitle;
    averageRating?: string;
    posterImage: IPosterImage;
}


interface IPosterImage {
    tiny?: string;
    large?: string;
    small?: string;
    medium?: string;
    original?: string;
}

interface ITitle {
    en_jp: string;
    ja_jp: string;
}

