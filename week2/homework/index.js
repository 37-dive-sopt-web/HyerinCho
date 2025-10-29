import { renderTable } from './scripts/render-table.js';
import { handleResetButton, handleApplyButton, handleDeleteButton } from './scripts/button-controller.js';
import { handleCheckAll, handleRowCheckboxChange } from './scripts/checkbox-controller.js';
import { initLocalStorage, getLocalStorage } from './scripts/local-storage.js';
import { searchFilter } from './scripts/search-filter.js';

const tbody = document.querySelector('.table-body');
const checkAll = document.querySelector('.check-all');
const resetBtn  = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.delete-btn');
const applyBtn = document.querySelector('.apply-btn');

// 초기 렌더링: 로컬스토리지 초기화 후 데이터 테이블 출력
initLocalStorage();
const data = getLocalStorage();
renderTable(data, tbody);

// 체크박스 관련 이벤트 등록
handleCheckAll(checkAll, tbody);
handleRowCheckboxChange(checkAll, tbody);

// 버튼 핸들러 등록
handleResetButton(resetBtn, tbody)
handleApplyButton(applyBtn, tbody, searchFilter);
handleDeleteButton(deleteBtn, checkAll, tbody);