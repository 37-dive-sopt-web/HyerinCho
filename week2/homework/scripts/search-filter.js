const getText = (elements) => (elements?.value ?? "").trim().toLowerCase();
const getRaw  = (elements) => (elements?.value ?? "").trim();
const getInt  = (elements) => {
  const number = parseInt(getRaw(elements), 10);
  return Number.isFinite(number) ? number : null;
};

export const createSearchFilter = (els) => {
  const {
    nameEl,
    englishNameEl,
    githubEl,
    genderEl,
    roleEl,
    groupEl,
    ageEl,
  } = els;

  // 반환: 매 호출 시점의 입력값을 읽어서 필터링
  return (data) => {
    const name            = getText(nameEl);
    const englishName     = getText(englishNameEl);
    const github          = getText(githubEl);
    const gender          = getRaw(genderEl);
    const role            = getRaw(roleEl);
    const codeReviewGroup = getInt(groupEl);
    const age             = getInt(ageEl);

    return data.filter((item) => {
      const matchName   = !name || item.name.toLowerCase().includes(name);
      const matchEng    = !englishName || item.englishName.toLowerCase().includes(englishName);
      const matchGithub = !github || item.github.toLowerCase().includes(github);
      const matchGender = !gender || gender === item.gender;
      const matchRole   = !role || role === item.role;
      const matchGroup  = codeReviewGroup === null || item.codeReviewGroup === codeReviewGroup;
      const matchAge    = age === null || item.age === age;

      return (
        matchName &&
        matchEng &&
        matchGithub &&
        matchGender &&
        matchRole &&
        matchGroup &&
        matchAge
      );
    });
  };
};