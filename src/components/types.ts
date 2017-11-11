import { DataTableRow } from './row/row.component';
import { DataTableColumn } from './column/column.component';


export type RowCallback = (item: any, row: DataTableRow, index: number) => string;

export type CellCallback = (item: any, row: DataTableRow, column: DataTableColumn, index: number) => string;

// export type HeaderCallback = (column: DataTableColumn) => string;


export interface DataTableTranslations {
    indexColumn: string;
    selectColumn: string;
    expandColumn: string;
    paginationLimit: string;
    paginationRange: string;
}

export var defaultTranslations = <DataTableTranslations>{
    indexColumn: 'index',
    selectColumn: 'select',
    expandColumn: 'expand',
    paginationLimit: 'Limit',
    paginationRange: 'Results'
};

export interface SearchParam {
    column: string;
    term: string;
}

export interface DataTableParams {
    offset?: number;
    limit?: number;
    sortBy?: string;
    sortAsc?: boolean;
    search?: SearchParam[];
}
