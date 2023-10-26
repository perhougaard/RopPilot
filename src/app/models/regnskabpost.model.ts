export interface IRegnskabPost {
    Id: Number;
    PostId: string;
    Linjenummer: number;
    Enhed: string;
    Tekst: string;
    Maengde: number;
    Pris: number;
    Faktor: number;
    Linjetotal: number;
    Funktion: string,
    Prissaetning: Date;
    ParentId: number;
}