import { IImage } from "./iimage";

export interface IAnimeDatas {
    data: IData;
}

export interface IData {
    id: string;
    attributes: IAttributes;
}

export interface IAttributes {
    titles: ITitles;
    posterImage: IPosterImage;
}

export interface IPosterImage {
    tiny: string;
    large: string;
}
export interface ITitles {
    en: string;
    ja_jp: string;
}
