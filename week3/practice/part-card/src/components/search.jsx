
const Search = ({search, handleSearchChange, handleSearch}) => {

  return (
    <div>
      <input 
        type="text" 
        placeholder="검색어를 입력하세요" 
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;