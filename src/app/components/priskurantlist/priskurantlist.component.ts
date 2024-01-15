import { Component } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { EMPTY, catchError } from 'rxjs';
import { PriskurantService } from 'src/app/services/priskurant.service';
import { GlobalErrorHandler } from 'src/app/utils/global.error.handler';

@Component({
  selector: 'app-priskurantlist',
  templateUrl: './priskurantlist.component.html',
  styleUrls: ['./priskurantlist.component.css']
})
export class PriskurantlistComponent {
  constructor(private priskurantService: PriskurantService, private globalErrorHandler: GlobalErrorHandler) { }

  groups: GroupDescriptor[] = [{ field: "Priskurant" }, { field: "PriskurantAfsnit" }, { field: "PriskurantGruppe" }];
  priskurantPoster$ = this.priskurantService.priskurantPoster$
    .pipe(
      catchError(() => {
        this.globalErrorHandler.handleError
        return EMPTY;
      })
    );
}
