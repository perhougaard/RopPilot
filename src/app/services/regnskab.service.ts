import { Injectable } from '@angular/core';
import { IRegnskabPost } from '../models/regnskabpost.model';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalculateService } from './calculate.service';
import { IRegnskab } from '../models/regnskab.model';
import { GlobalErrorHandler } from '../utils/global.error.handler';

@Injectable({
  providedIn: 'root'
})
export class RegnskabService {
  
  constructor(private http: HttpClient, private calculateService: CalculateService, private globalErrorHandler: GlobalErrorHandler) { }
  private regnskabPostFile = 'regnskabposter.json';
  private mockDataUrl = `assets/${this.regnskabPostFile}`;

  regnskabPoster$ = this.http.get<IRegnskabPost[]>(this.mockDataUrl)
  .pipe(
    tap(data => console.log('Regnskabposter blev indlæst', data)),
    catchError(this.globalErrorHandler.handleError)
  );

  getRegnskab(): Observable<IRegnskab> {
    return this.http.get<IRegnskab>(`assets/${this.regnskabPostFile}`)
  }

 
  save(dataItem: IRegnskabPost, regnskabsPoster: IRegnskabPost[]) {
    this.calculateService.calculate(dataItem, regnskabsPoster);
    console.log('Regnskabspost gemmes', dataItem);
  }
}

