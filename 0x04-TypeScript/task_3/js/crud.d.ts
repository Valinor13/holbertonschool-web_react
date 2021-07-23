import { RowID, RowElement } from "./interface";

export class Crud {
    insertRow(row: RowElement): number;
    deleteRow(rowId: RowID): undefined;
    updateRow(rowId: RowID, row: RowElement): RowID;
}