import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridSize, RowClassArgs } from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs';
import { IRegnskabPost } from 'src/app/models/regnskabpost.model';
import { RegnskabService } from 'src/app/services/regnskab.service';
import { CellClickEvent, CellCloseEvent } from '@progress/kendo-angular-treelist';

@Component({
  selector: 'app-regnskab',
  templateUrl: './regnskab.component.html',
  styleUrls: ['./regnskab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegnskabComponent implements OnInit {

  constructor(private regnskabService: RegnskabService) {
  }
  public regnskabPoster: IRegnskabPost[] = [];
  public gridSize: GridSize = "none";
  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.regnskabService.getAllRegnskabPoster().subscribe({
      next: (regnskabPoster: IRegnskabPost[]) => { this.regnskabPoster = regnskabPoster}
    });
  }

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
      this.regnskabService.save(dataItem, this.regnskabPoster);
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