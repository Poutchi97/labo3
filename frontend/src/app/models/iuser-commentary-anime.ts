export interface IUserCommentaryAnime {
    commentary: ICommentary[];


}

interface ICommentary {
    id_user: number;
    id_anime: number;
    comment: string;
}