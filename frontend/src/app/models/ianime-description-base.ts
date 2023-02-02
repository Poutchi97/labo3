export interface IAnimeDescriptionBase {
    id: number;
    synopsis: string;
    en_jp: string;
    ja_jp: string;
    averageRating: string;
    startDate: string;
    endDate?: string;
    ratingRank: string;
    ageRatingGuide: string;
    status: string;
    episodeCount: number;
    tiny: string;
    large: string;
    small: string;
    medium: string;
    original: string;
    commentary?: string;
}