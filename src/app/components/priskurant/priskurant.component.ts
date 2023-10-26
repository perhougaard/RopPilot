import { Component, OnInit } from '@angular/core';
import { PriskurantService } from '../../services/priskurant.service';
import { IPriskurantPost } from '../../models/priskurantpost.model';
import { Subscription } from 'rxjs';
import { DataResult, GroupDescriptor, SortDescriptor, process } from "@progress/kendo-data-query";
import { GridSize, GroupKey } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-priskurant',
  templateUrl: './priskurant.component.html',
  styleUrls: ['./priskurant.component.css']
})
export class PriskurantComponent implements OnInit {
  constructor(private priskurantService: PriskurantService) {}

  public groups: GroupDescriptor[] = [{field: "Priskurant"}, { field: "PriskurantAfsnit" }, {field: "PriskurantGruppe"}];
  public sort: SortDescriptor[] = [{field: 'Priskurant', dir: 'desc'}, {field: 'AfsnitNummer', dir: 'desc'}];
  public expandedGroupKeys: GroupKey[] = [];
  priskurantPoster: IPriskurantPost[] = [];
  public initiallyExpanded = false;
  sub!: Subscription;
  public gridSize: GridSize = "none";
  
  ngOnInit(): void {
    this.sub = this.priskurantService.getAllPriskurantPoster().subscribe({
      next: (priskurantPoster: IPriskurantPost[]) => { this.priskurantPoster = priskurantPoster}
    });
  }
}