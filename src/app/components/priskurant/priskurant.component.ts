import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PriskurantService } from '../../services/priskurant.service';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { GroupDescriptor, SortDescriptor } from "@progress/kendo-data-query";
import { GridSize, GroupKey } from '@progress/kendo-angular-grid';
import { GlobalErrorHandler } from "../../utils/global.error.handler";
import { IPriskurantPost } from 'src/app/models/priskurantpost.model';

@Component({
  selector: 'app-priskurant',
  templateUrl: './priskurant.component.html',
  styleUrls: ['./priskurant.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriskurantComponent {
  constructor(private priskurantService: PriskurantService, private globalErrorHandler: GlobalErrorHandler) {}

  @Input() groups!: GroupDescriptor[];
  @Input() priskurantPoster$!: Observable<IPriskurantPost[]>;
  sort: SortDescriptor[] = [{field: 'Priskurant', dir: 'desc'}, {field: 'AfsnitNummer', dir: 'desc'}];
  expandedGroupKeys: GroupKey[] = [];
  initiallyExpanded = false;
  gridSize: GridSize = "none";
  errorMessage = '';
}