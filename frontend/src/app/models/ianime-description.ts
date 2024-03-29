export interface IAnimeDescription {
    id: number;
    attributes: IAttribute;
}

interface IAttribute {
    synopsis: string;
    titles: ITitles;
    averageRating: string;
    startDate: string;
    endDate?: string;
    ratingRank: string;
    ageRatingGuide: string;
    status: string;
    posterImage: IPosterImages;
    episodeCount: number;
    commentary?: string;
}

interface ITitles {
    en_jp: string;
    ja_jp: string;


}

interface IPosterImages {
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;

}
