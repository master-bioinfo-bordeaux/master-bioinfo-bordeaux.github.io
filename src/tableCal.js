/************************************
 * Jean-Christophe Taveau
 * Calendar
 * 2015
 ************************************/
 
 function TableCal() {
    this.cells = new Array(TableCal.NROWS);
    for (var row = 0; row < TableCal.NROWS; row++) {
        this.cells[row] = new Array(5);
    }
    this.reset();
}

TableCal.NROWS = 22;
TableCal.NCOLS = 5;

TableCal.prototype.reset = function() {
    for (var i=0; i < TableCal.NROWS; i++) {
        for (var j = 0; j < TableCal.NCOLS; j++) {
            this.cells[i][j] = 0;
        }
    }
}
