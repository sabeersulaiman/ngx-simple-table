import {
  Component, Input, Inject, forwardRef, Output, EventEmitter, OnDestroy
} from '@angular/core';
import { DataTable } from '../index';


@Component({
  selector: '[dataTableRow]',
  styleUrls: ['./row.component.scss'],
  templateUrl: './row.component.html'
})
export class DataTableRow implements OnDestroy {

  @Input() item: any;
  @Input() index: number;

  expanded: boolean;

  // row selection:

  private _selected: boolean;

  @Output() selectedChange = new EventEmitter();

  get selected() {
      return this._selected;
  }

  set selected(selected) {
      this._selected = selected;
      this.selectedChange.emit(selected);
  }

  // other:

  get displayIndex() {
      if (this.dataTable.pagination) {
          if(this.dataTable.displayParams.offset)
              return this.dataTable.displayParams.offset + this.index + 1;
          else return 0 + this.index + 1;
      } else {
          return this.index + 1;
      }
  }

  getTooltip() {
      if (this.dataTable.rowTooltip) {
          return this.dataTable.rowTooltip(this.item, this, this.index);
      }
      return '';
  }

  constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}

  ngOnDestroy() {
      this.selected = false;
  }

  public _this = this; // FIXME is there no template keyword for this in angular 2?

  tryExpansion() {
      this.expanded = !this.expanded;
  }

  SelectionTrigger() {
      this.selected = !this.selected;
  }
}
