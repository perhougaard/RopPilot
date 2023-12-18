import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRegnskab } from 'src/app/models/regnskab.model';
import { RegnskabService } from 'src/app/services/regnskab.service';

@Component({
  templateUrl: './opstilling.component.html',
  styleUrls: ['./opstilling.component.css']
})
export class OpstillingComponent implements OnInit {
  constructor(private regnskabService: RegnskabService) {}

  sub!: Subscription;
  regnskab: IRegnskab | undefined;

  ngOnInit(): void {
    this.sub = this.regnskabService.getRegnskab().subscribe({
      next: (regnskab: IRegnskab) => { this.regnskab = regnskab }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}