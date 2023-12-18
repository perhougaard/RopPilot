import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PriskurantService } from '../../services/priskurant.service';
import { EMPTY, catchError, tap } from 'rxjs';
import { GroupDescriptor, SortDescriptor } from "@progress/kendo-data-query";
import { GridSize, GroupKey } from '@progress/kendo-angular-grid';
import { GlobalErrorHandler } from "../../utils/global.error.handler";

@Component({
  selector: 'app-priskurant',
  templateUrl: './priskurant.component.html',
  styleUrls: ['./priskurant.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriskurantComponent {
  constructor(private priskurantService: PriskurantService, private globalErrorHandler: GlobalErrorHandler) {}

  groups: GroupDescriptor[] = [{field: "Priskurant"}, { field: "PriskurantAfsnit" }, {field: "PriskurantGruppe"}];
  sort: SortDescriptor[] = [{field: 'Priskurant', dir: 'desc'}, {field: 'AfsnitNummer', dir: 'desc'}];
  expandedGroupKeys: GroupKey[] = [];
  initiallyExpanded = false;
  gridSize: GridSize = "none";
  errorMessage = '';

  priskurantPoster$ = this.priskurantService.priskurantPoster$
    .pipe(
      catchError( () => {
        this.globalErrorHandler.handleError
        return EMPTY;
      })
    );
}