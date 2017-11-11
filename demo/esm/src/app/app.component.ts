import { Component } from '@angular/core';
import persons from './data';
import { DataTableResource, DataTableRow } from '../../lib/datatable.module';

@Component({
  selector: 'my-app',
  template: `
  <div style="margin: auto; max-width: 1000px; margin-bottom: 50px;">
  <data-table id="persons-grid"
      headerTitle="Employees"
      [items]="items"
      [itemCount]="itemCount"
      (reload)="reloadItems($event)"
      (rowClick)="rowClick($event)"
      (rowDoubleClick)="rowDoubleClick($event)"
      [rowTooltip]="rowTooltip"
      [expandableRows]="true"
      [selectOnRowClick]="true"
      (rowExpanded)="rowExpand($event)"
      (rowCollapsed)="rowCollapsed($event)"
      >
      <template #dataTableExpand let-item="item">
        <div [textContent]="norm.description" style="padding: 5px; color: gray"></div>
    </template>
      <data-table-column
          [property]="'name'"
          [header]="'Name'"
          [sortable]="true"
          [resizable]="true">
      </data-table-column>
      <data-table-column
      [resizable]="true"
          [property]="'date'"
          [header]="'Date'"
          [sortable]="true">
          <template #dataTableCell let-item="item">
              <span>{{item.date | date:'yyyy-MM-dd'}}</span>
          </template>
      </data-table-column>
      <data-table-column
      [filter]="true"
      [resizable]="true"
          property="phoneNumber"
          header="Phone number"
          width="150px">
      </data-table-column>
      <data-table-column
      [resizable]="true"
          [property]="'jobTitle'"
          [header]="'Job title'"
          [visible]="false">
      </data-table-column>
      <data-table-column
          [property]="'active'"
          [header]="'Active'"
          [width]="100"
          [resizable]="true">
          <template #dataTableHeader let-item="item">
              <span style="color: rgb(232, 0, 0)">Active</span>
          </template>
          <template #dataTableCell let-item="item">
              <span style="color: grey">
              <span class="glyphicon glyphicon-ok" *ngIf="item.active"></span>
              <span class="glyphicon glyphicon-remove" *ngIf="!item.active"></span>
              </span>
          </template>
      </data-table-column>
  </data-table>
</div>

  `
})
export class AppComponent {
  itemResource = new DataTableResource(persons);
  items: any = [];
  itemCount = 0;

    norm: any = {
        description: "Fellow Expandable"
    };

    rowCollapsed(row: DataTableRow) {
        console.log(row.item.name + " Collapsed")
    }

    rowExpand(row: DataTableRow) {
        
        console.log(row.item.name + " Expanded")
    }
  constructor() {
      this.itemResource.count().then(
        (count: any) => this.itemCount = count
      );
  }

  reloadItems(params: any) {
      console.log(params);
      this.itemResource.query(params).then((items: any) => this.items = items);
  }

  // special properties:

  rowClick(rowEvent: any) {
    //   console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent: any) {
    //   alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item: any) { return item.jobTitle; }
}
