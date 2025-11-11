import { renderTable } from './scripts/render-table.js';
import { 
  handleResetButton,
  handleApplyButton, 
  handleDeleteButton, 
  handleAddButton 
} from './scripts/button-controller.js';
import { handleCheckAll, handleRowCheckboxChange } from './scripts/checkbox-controller.js';
import { initLocalStorage, getLocalStorage } from './scripts/local-storage.js';
import { createSearchFilter } from './scripts/search-filter.js';
import { handleOpenModal, handleCloseModal, closeModalAction } from './scripts/modal-controller.js';

// 모달 입력 DOM 묶음
const modalInputs = {
  nameInput: document.querySelector(".add-name"),
  engNameInput: document.querySelector(".add-english-name"),
  githubInput: document.querySelector(".add-github"),
  genderInput: document.querySelector(".add-gender"),
  roleInput: document.querySelector(".add-role"),
  codeReviewGroupInput: document.querySelector(".add-code-review-group"),
  ageInput: document.querySelector(".add-age"),
};

// 검색 필터 DOM 묶음
const filterInputs = {
  nameEl: document.querySelector(".name-filter"),
  englishNameEl: document.querySelector(".english-name-filter"),
  githubEl: document.querySelector(".github-filter"),
  genderEl: document.querySelector(".gender-filter"),
  roleEl: document.querySelector(".role-filter"),
  groupEl: document.querySelector(".code-review-group-filter"),
  ageEl: document.querySelector(".ages-filter"),
};

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

// 초기 렌더링: 로컬스토리지 초기화 후 데이터 테이블 출력
initLocalStorage();
const data = getLocalStorage();
renderTable(data, tbody);

// 체크박스 관련 이벤트 등록
handleCheckAll(checkAll, tbody);
handleRowCheckboxChange(checkAll, tbody);

// 필터 함수 생성(여기서 DOM 객체 묶음을 캡처)
const searchFilter = createSearchFilter(filterInputs);

// 버튼 핸들러 등록
handleResetButton(resetBtn, tbody)
handleApplyButton(applyBtn, tbody, searchFilter);
handleDeleteButton(deleteBtn, checkAll, tbody);
handleAddButton(submitBtn, tbody, modalInputs, () => closeModalAction(modal));


// 모달 함수
handleOpenModal(modal, openModalBtn);
handleCloseModal(modal, closeModalBtn);