import { Injectable } from '@angular/core';
import { IRegnskabPost } from '../models/regnskabpost.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
    
  public calculate(dataItem: IRegnskabPost, regnskabsPoster: IRegnskabPost[]) {
    dataItem.Linjetotal = dataItem.Pris * dataItem.Maengde * (dataItem.Faktor ?? 1);
    if (dataItem.ParentId != null)
    {
      this.calculateAfsnit(dataItem.ParentId, regnskabsPoster);
    }

  }

  private calculateAfsnit(id: number, regnskabsPoster: IRegnskabPost[])
  {
    const afsnitRow = regnskabsPoster.find(r => r.Id === id);
    if (afsnitRow != null)
    {
      const childrenRows = regnskabsPoster.filter((regnskabPost) => regnskabPost.ParentId === afsnitRow.Id);
      let sumOfLinjetotal = 0;
      for (const regnskabPost of childrenRows) {
        sumOfLinjetotal += regnskabPost.Linjetotal;
      }
      afsnitRow.Linjetotal = sumOfLinjetotal;
      
      if (afsnitRow.ParentId != null)
      {
        this.calculateAfsnit(afsnitRow.ParentId, regnskabsPoster);
      }
    }

  }
}