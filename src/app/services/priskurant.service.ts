import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { IPriskurantPost } from "../models/priskurantpost.model";
import { GlobalErrorHandler } from "../utils/global.error.handler";

@Injectable({
  providedIn: 'root'
})
export class PriskurantService {
  constructor(private http: HttpClient, private globalErrorHandler: GlobalErrorHandler) { }
  private priskurantPostFile = 'poster.json';
  private mockDataUrl = `assets/${this.priskurantPostFile}`;

  priskurantPoster$ = this.http.get<IPriskurantPost[]>(this.mockDataUrl)
    .pipe(
      tap(data => console.log('Priskurantposter blev indlæst ' + data.length)),
      catchError(this.globalErrorHandler.handleError)
    );
}
