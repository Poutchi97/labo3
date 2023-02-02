export interface IGetOneResult {
    id: string;
    attributes: IAttributes;
    commentary?: string[];
}


interface IAttributes {
    startDate: string;
    endDate?: string;
    synopsis: string;
    titles: ITitle;
    averageRating?: string;
    posterImage: IPosterImage;
    userCount?: number;
    status: string;
    episodeCount: number;
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
    ja_jp?: string;
}

