const handleCheckAll = (checkAll, tbody) => {
  checkAll.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    const rowCheckboxes = tbody.querySelectorAll('input.row-check');
    rowCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });
}

const handleRowCheckboxChange = (checkAll, tbody) => {
  tbody.addEventListener('change', (event) => {
    if (event.target.classList?.contains('row-check')) {
      const boxes = Array.from(tbody.querySelectorAll('input.row-check'));
      const allChecked = boxes.length > 0 && boxes.every((cb) => cb.checked);
      const someChecked = boxes.some((cb) => cb.checked);

      checkAll.checked = allChecked;
      checkAll.indeterminate = !allChecked && someChecked;
    }
  });
}

export {
  handleCheckAll,
  handleRowCheckboxChange
}
