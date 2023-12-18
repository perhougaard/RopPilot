import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridSize, RowClassArgs } from '@progress/kendo-angular-grid';
import { IRegnskabPost } from 'src/app/models/regnskabpost.model';
import { RegnskabService } from 'src/app/services/regnskab.service';
import { CellClickEvent, CellCloseEvent } from '@progress/kendo-angular-treelist';
import { EMPTY, catchError } from 'rxjs';
import { GlobalErrorHandler } from "../../utils/global.error.handler";

@Component({
  selector: 'app-regnskab',
  templateUrl: './regnskab.component.html',
  styleUrls: ['./regnskab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RegnskabComponent {

  constructor(private regnskabService: RegnskabService, private globalErrorHandler: GlobalErrorHandler) {}
  errorMessage = '';
  gridSize: GridSize = "none";

  regnskabPoster$ = this.regnskabService.regnskabPoster$.pipe(
    catchError(() => {
      this.globalErrorHandler.handleError
      return EMPTY;
    })
  );

  public rowCallback = (context: RowClassArgs) => {
    if (context.dataItem.Funktion == 'afsnit') {
        return { afsnitRow: true };
    }
    return { afsnitRow: false };
  };

  public cellClickHandler({ sender, columnIndex, dataItem, isEdited }: CellClickEvent): void {
    if (!isEdited && dataItem.Funktion != "afsnit") {
        sender.editCell(dataItem, columnIndex, this.createFormGroup(dataItem));
    }
  }

  public cellCloseHandler(e: CellCloseEvent): void {
    const {formGroup, dataItem} = e;
    if (! formGroup.valid)
    {
      e.preventDefault();
    } else if (formGroup.dirty) {
      Object.assign(dataItem, formGroup.value);
      // this.regnskabService.save(dataItem, this.regnskabPoster$);
    }
  }

  public createFormGroup(item: any): FormGroup {
    const group = new FormGroup({
      'Maengde': new FormControl(item.Maengde),
      'Faktor': new FormControl(item.Faktor),
      'Pris': new FormControl(item.Pris),
      'Enhed': new FormControl(item.Enhed)
    });
    return group;
  }
}