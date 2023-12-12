function sumTable() {
    let tableRowsElements = document.querySelectorAll('table tr');

    let totalSum = 0;

    for (let i = 1; i < tableRowsElements.length; i++) {
        //връща колекция от 2-те td
        let cells = tableRowsElements[i].children;
        let cellPrice = Number(cells[1].textContent);
        totalSum += cellPrice;
    }

    document.getElementById('sum').textContent = totalSum.toFixed(2);

}