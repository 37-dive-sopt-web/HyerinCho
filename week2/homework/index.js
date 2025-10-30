import { renderTable } from './scripts/render-table.js';
import { 
  handleResetButton,
  handleApplyButton, 
  handleDeleteButton, 
  handleAddButton 
} from './scripts/button-controller.js';
import { handleCheckAll, handleRowCheckboxChange } from './scripts/checkbox-controller.js';
import { initLocalStorage, getLocalStorage } from './scripts/local-storage.js';
import { searchFilter } from './scripts/search-filter.js';
import { handleOpenModal, handleCloseModal, closeModalAction } from './scripts/modal-controller.js';

const tbody = document.querySelector('.table-body');
const checkAll = document.querySelector('.check-all');
const resetBtn  = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.delete-btn');
const applyBtn = document.querySelector('.apply-btn');

// 모달 관련 요소
const openModalBtn = document.querySelector('.open-modal-btn');
const submitBtn = document.querySelector('.submit-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');

// 모달 안 input들
const nameInput = document.querySelector(".add-name");
const engNameInput = document.querySelector(".add-english-name");
const githubInput = document.querySelector(".add-github");
const genderInput = document.querySelector(".add-gender");
const roleInput = document.querySelector(".add-role");
const codeReviewGroupInput = document.querySelector(".add-code-review-group");
const ageInput = document.querySelector(".add-age");

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
handleAddButton(
  submitBtn,
  tbody,
  {
    nameInput,
    engNameInput,
    githubInput,
    genderInput,
    roleInput,
    codeReviewGroupInput,
    ageInput,
  },
  () => closeModalAction(modal) // 네가 만든 닫기 로직 재사용
);

// 모달 함수
handleOpenModal(modal, openModalBtn);
handleCloseModal(modal, closeModalBtn);