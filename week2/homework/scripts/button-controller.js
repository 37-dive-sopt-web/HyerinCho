import { renderTable } from './render-table.js';
import { 
  getLocalStorage,
  setLocalStorage
} from './local-storage.js';

// 초기화 버튼 클릭 시 기본 데이터로 복원
const handleResetButton = (resetButton, tbody) => {
  resetButton.addEventListener("click", () => {
    const data = getLocalStorage();
    
    renderTable(data, tbody);
  })
}

//적용 버튼 클릭 시 필터링된 데이터만 렌더링 
const handleApplyButton = (applyButton, tbody, filterFn) => {
  applyButton.addEventListener("click", () => {
    const data = getLocalStorage();
    const filtered = filterFn ? filterFn(data) : data;

    renderTable(filtered, tbody)

    tbody.querySelectorAll("input[type='checkbox']").forEach(check => (check.checked = false));
  })
}

// 선택 삭제 버튼 클릭 시 체크된 행 삭제 및 반영
const handleDeleteButton = (deleteButton, checkAll, tbody) => {
  deleteButton.addEventListener("click", () => {
    const checkedData = Array.from(tbody.querySelectorAll("input.row-check:checked"))
      .map(checked => Number(checked.dataset.id))
      .filter(number => Number.isFinite(number));

    const data = getLocalStorage();
    const deletedData = data.filter(item => !checkedData.includes(item.id))

    setLocalStorage(deletedData);
    renderTable(deletedData, tbody);

    if (checkAll) {
      checkAll.checked = false;
      checkAll.indeterminate = false;
    }
  })
}

export {
  handleResetButton,
  handleApplyButton,
  handleDeleteButton,
}