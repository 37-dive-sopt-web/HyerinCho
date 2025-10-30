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

// 추가 버튼 클릭 시 모달 입력값을 로컬스토리지에 추가 및 반영
const handleAddButton = (
  addButton, 
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
  closeModal
) => {
  addButton.addEventListener("click", () => {
    if (
      !nameInput.value.trim() ||
      !engNameInput.value.trim() ||
      !githubInput.value.trim() ||
      !genderInput.value ||
      !roleInput.value ||
      !codeReviewGroupInput.value.trim() ||
      !ageInput.value.trim()
    ) {
      alert("모든 입력 항목을 입력해주세요");
      return;
    }

    const codeReviewGroup = Number(codeReviewGroupInput.value);
    const age = Number(ageInput.value);

    const data = getLocalStorage();

    const newMember = {
      id: Date.now(),
      name: nameInput.value,
      englishName: engNameInput.value,
      github: githubInput.value,
      gender: genderInput.value,
      role: roleInput.value,
      codeReviewGroup,
      age
    };

    data.push(newMember);
    setLocalStorage(data);
    renderTable(data, tbody);
    closeModal();

    // 입력 후 모달 내 입력창 초기화
    nameInput.value = "";
    engNameInput.value = "";
    githubInput.value = "";
    genderInput.value = "";
    roleInput.value = "";
    codeReviewGroupInput.value = "";
    ageInput.value = "";
  })
}

export {
  handleResetButton,
  handleApplyButton,
  handleDeleteButton,
  handleAddButton,
}