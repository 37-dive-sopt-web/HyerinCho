import Card from "./components/card/card";
import Header from "./components/header/header"
import styles from "./app.module.css"
import { members } from "./datas/member";
import Search from "./components/search";
import useSearch from "./hooks/use-search";

const App = () => {
  const { search, filteredMembers, handleSearchChange, handleSearch }  = useSearch(members);

  return (
    <>
      <Header/>
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
        />
      <section className={styles.cardSection}>
        {filteredMembers.map(({id, name, github, englishName})=>(
            <Card 
              key={id} 
              name={name} 
              github={github} 
              englishName={englishName}
            />
        ))}
      </section>
    </>
  );
}

export default App;