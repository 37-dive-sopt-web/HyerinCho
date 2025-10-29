export const searchFilter = (data) => {
  const nameEl = document.querySelector(".name-filter");
  const englishNameEl = document.querySelector(".english-name-filter");
  const githubEl = document.querySelector(".github-filter");
  const genderEl = document.querySelector(".gender-filter");
  const roleEl = document.querySelector(".role-filter");
  const groupEl = document.querySelector(".code-review-group-filter");
  const ageEl = document.querySelector(".ages-filter");

  const name = (nameEl?.value || "").trim().toLowerCase();
  const englishName = (englishNameEl?.value || "").trim().toLowerCase();
  const github = (githubEl?.value || "").trim().toLowerCase();
  const gender = genderEl?.value || "";
  const role = roleEl?.value || "";
  const codeReviewGroup = parseInt(groupEl?.value || "", 10);
  const age = parseInt(ageEl?.value || "", 10);

  return data.filter((item) => {
    const matchName = !name || item.name.toLowerCase().includes(name);
    const matchEng  = !englishName || item.englishName.toLowerCase().includes(englishName);
    const matchGithub = !github || item.github.toLowerCase().includes(github);
    const matchGender =
      !gender ||
      (gender === "1" && item.gender === "male") ||
      (gender === "2" && item.gender === "female");

    const matchRole =
      !role ||
      (role === "1" && item.role === "YB") ||
      (role === "2" && item.role === "OB");
    const matchGroup = !Number.isFinite(codeReviewGroup) || item.codeReviewGroup === codeReviewGroup;
    const matchAge   = !Number.isFinite(age) || item.age === age;

    return (
      matchName &&
      matchEng && 
      matchGender && 
      matchRole && 
      matchGroup && 
      matchAge && 
      matchGithub
    );
  });
};