import { NgModule } from '@angular/core';
import { DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader } from './components';
import { } from './services';
import { DataTable } from './index';
import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export * from './components/types';
export * from './tools/data-table-resource';

export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
export const DATA_TABLE_DIRECTIVES = [ DataTable, DataTableColumn ];


@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        DataTable, DataTableColumn,
        DataTableRow, DataTablePagination, DataTableHeader,
        PixelConverter, Hide, MinPipe
    ],
    exports: [ DataTable, DataTableColumn ]
})
export class DataTableModule { }