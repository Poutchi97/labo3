export interface IGetOneResult {
    id: string;
    attributes: IAttributes;
}


interface IAttributes {
    startDate: string;
    endDate?: string;
    synopsis: string;
    titles: ITitle;
    averageRating?: string;
    posterImage: IPosterImage;
    userCount: string;
    status: string;
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

