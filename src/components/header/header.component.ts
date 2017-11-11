import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from '../index';


@Component({
  selector: 'data-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {

    columnSelectorOpen = false;

    _closeSelector() {
        this.columnSelectorOpen = false;
    }

    constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}
}
