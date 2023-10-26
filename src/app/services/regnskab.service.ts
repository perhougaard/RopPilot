import { Injectable } from '@angular/core';
import { IRegnskabPost } from '../models/regnskabpost.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CalculateService } from './calculate.service';

@Injectable({
  providedIn: 'root'
})
export class RegnskabService {
  
  constructor(private http: HttpClient, private calculateService: CalculateService) { }
  private regnskabPostFile = 'regnskabposter.json';
  regnskabPoster: IRegnskabPost[] = [];
  
  getAllRegnskabPoster(): Observable<IRegnskabPost[]> {
    return this.http.get<IRegnskabPost[]>(`assets/${this.regnskabPostFile}`)
    .pipe(
      tap(data => console.log('Regnskabposter blev indlæst', data))
      );
    }
    
  save(dataItem: IRegnskabPost, regnskabsPoster: IRegnskabPost[]) {
    this.calculateService.calculate(dataItem, regnskabsPoster);
    console.log('Regnskabspost gemmes', dataItem);
  }
}

