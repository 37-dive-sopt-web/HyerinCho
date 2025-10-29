export const renderTable = (datas, tbody) => {
  const tableHTML = datas
    .map(
      ({
        id,
        name,
        englishName,
        github,
        gender,
        role,
        codeReviewGroup,
        age,
      }) => `
        <tr class="dd">
          <td><input type="checkbox" class="row-check" data-id="${id}"/></td>
          <td>${name}</td>
          <td>${englishName}</td>
          <td>
            <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">
                ${github}
            </a>
          </td>
          <td>${gender === "male" ? "남자" : "여자"}</td>
          <td a>${role}</td>
          <td>${codeReviewGroup}</td>
          <td>${age}세</td>
        </tr>
      `
    )
    .join("");

  tbody.innerHTML = tableHTML;
};