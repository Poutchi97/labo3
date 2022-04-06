export interface IAnimeCreating {
    id: string;
    attributes: IAttributes;
}
interface IAttributes {
    en_jp: string;
    ja_jp?: string;
    synopsis: string;
    startDate: string;
    endDate?: string;
    episodeCount: number;
    status: string;
    originalImage: string;

}


