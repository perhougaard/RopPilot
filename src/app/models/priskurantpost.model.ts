export interface IPriskurantPost {
    PriskurantAfsnit?: string;
    PriskurantAfsnitNummer?: string;
    PriskurantGruppe?: string;
    PriskurantGruppeNummer?: string;
    PostId: string;
    Enhed: string;
    Tekst: string;
    LangTekst: string;
    Pris?: number;
    Listepris?: number;
    Type?: number;
    Loebenummer: number;
    Beskrivelse: string;
}