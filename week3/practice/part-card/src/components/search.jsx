/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Search = ({search, handleSearchChange, handleSearch}) => {

  return (
    <div css={searchContainerStyle}>
      <input 
        type="text" 
        placeholder="검색어를 입력하세요" 
        value={search}
        onChange={handleSearchChange}
        css={inputStyle}
      />
      <button css={buttonStyle} onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;

const searchContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top:20px;
`;

const inputStyle = css`
width: 400px;
  padding: 10px 20px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  background-color: #FFFFFF;
`;

const buttonStyle = css`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #2491ff;
  color: #FFFFFF;
  cursor: pointer;
  :active {
    background-color: #0b61cc;
  }
`;