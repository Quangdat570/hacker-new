import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import Hit from "./components/hit/Hit";
import HitList from "./components/PostList/HitList";
import { getNews} from "./services/new.services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"
import SearchForm from "./components/SearchForm/SearchForm";


function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("REACT");
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState({
    
    totalPage:0,
    hits:[],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    getNews({query, page}).then((data) => {

      setData({
        hits: data.hits,
        totalPage: data.nbPages,
        
      });
      setLoading(false);
    });
  },[setQuery, page, getNews]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => {
    if ( page === 0) return;
    else setPage(page -1);
  }
  return (
    <div className={styles.container}>
      
      <h2 className={styles.h2}>search hacker news</h2>
      <form action="" className={styles.form}>
        <input type="text" name="" id="" className={styles.input}
        onChange={(e) => setQuery(e.target.value)}/>
        {loading ? <div className={styles.load}>Loading...</div> : (posts.filter((value) => {
          if(setQuery === "") {
            return value
          } else if (value.title.toLowerCase().includes(setQuery.toLowerCase())) {
            return value
          }
        })
        .map((data) => <HitList hits={data.hits}/>)
        )}
      </form>
      <div className={styles.button}>
        <button onClick={prevPage} className={styles.buttons}>Prev</button>
        <p className={styles.p}>{page} of {data.totalPage}</p>
        <button onClick={nextPage} className={styles.buttons}>Next</button>
      </div>
      {loading ? <div className={styles.load}>Loading...</div> : <HitList hits={data.hits} />}
    </div>
  );
}

export default App;
