import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRegnskabPost } from 'src/app/models/regnskabpost.model';
import { RegnskabService } from 'src/app/services/regnskab.service';


@Component({
  selector: 'app-regnskabsummer',
  templateUrl: './regnskabsummer.component.html',
  styleUrls: ['./regnskabsummer.component.css']
})
export default class RegnskabsummerComponent implements OnInit {
  public total: number = 0;  
  // public regnskabPoster: IRegnskabPost[] = [];
  public regnskabSumLinjer: RegnskabSumLinje[] = [];
  sub!: Subscription;
  
  constructor(private regnskabService: RegnskabService) {
  }
  ngOnInit(): void {
    this.regnskabSumLinjer = [
      {tekst: "Subtotal", beloeb: 4200 },
      {tekst: "Procenttillæg for 2022: 2%", beloeb: 84 },
      {tekst: "Manuel tillæg: 10%", beloeb: 428.40 },
      {tekst: "Total", beloeb: 4712.4 }
    ]
    // this.sub = this.regnskabService.getAllRegnskabPoster().subscribe({
    //   next: (regnskabPoster: IRegnskabPost[]) => { this.regnskabPoster = regnskabPoster}
    // });
  }
  
  // regnskabsum = this.regnskabPoster.find(r => r.ParentId == null);
}

export interface RegnskabSumLinje {
  tekst: string;
  beloeb: number;
}