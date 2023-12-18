export interface IRegnskab {
    Id: Number;
    Navn: string;
    Firma: IFirma;
}

export interface IFirma {
    Id: Number;
    Navn: string;
    CvrNummer: string;
    PNummer: string;
    Kaldenavn: string;
    Adresse: string;
    Postnummer: string;
    By: string;
}

export interface IByggeplads {
    Id: Number;
    Navn: string;
    Adresse: string;
    Postnummer: string;
    By: string;
}