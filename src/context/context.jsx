import React, { useState, useEffect } from "react";
const Context = React.createContext();
import axios from "axios";

function ContextProvider(props) {
  const img_300 = "https://image.tmdb.org/t/p/w300";
  const img_500 = "https://image.tmdb.org/t/p/w500";
  const [trending, setTrending] = useState([]);
  const [allTV, setAllTV] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [searchContent, setSearchContent] = useState([]);
  const [search, setSearch] = useState("");
  const [bookmarkSearch, setBookmarkSearch] = useState([]);
  const [youtubeLinkData, setYoutubeLinkData] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addBookmark = (item, type) => {
    if (bookmarkData.some((marked) => item.id === marked.id)) {
      setBookmarkData((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setBookmarkData((prev) => [...prev, { ...item, type }]);
    }
  };

  const fetchSingleMovieLinkWithVideos = async (id, type) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_SOME_KEY
      }&append_to_response=videos`
    );

    // https://api.themoviedb.org/3/tv/100088?api_key=5f1ab07321793e252ef4842bd0974ac1&append_to_response=videos
    setYoutubeLinkData(data);
  };

  const fetchAll = async (category = "movie", page) => {
    https: if (category === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_SOME_KEY
        }&append_to_response=videos&page=${page}`
      );

      setAllMovies(data.results);
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_SOME_KEY
        }&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}&append_to_response=videos`
      );

      setAllTV(data.results);
    }
  };
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_SOME_KEY
      }&append_to_response=videos`
    );

    setTrending(data.results);
  };

  const fetchSearch = async () => {
    if (category === "bookmark" && bookmarkData.length > 0) {
      if (search) {
        setBookmarkSearch(
          bookmarkData.filter((item) => {
            if (item?.name) {
              return item?.name.toLowerCase().includes(search);
            } else {
              return item?.title.toLowerCase().includes(search);
            }
          })
        );
      } else {
        setBookmarkSearch([]);
      }
    } else {
      if (search) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${
            category === "movie" ? "movie" : "tv"
          }?api_key=${
            import.meta.env.VITE_SOME_KEY
          }&language=en-US&query=${search}&page=1&include_adult=false&append_to_response=videos`
        );

        setSearchContent(data.results);
      } else {
        setSearchContent([]);
      }
    }
  };

  useEffect(() => {
    fetchAll(category, page);

    fetchTrending();
  }, [category]);

  return (
    <Context.Provider
      value={{
        page,
        setPage,
        category,
        setCategory,
        fetchAll,
        fetchTrending,
        bookmarkData,
        trending,
        allMovies,
        allTV,
        img_300,
        img_500,
        addBookmark,
        fetchSearch,
        searchContent,
        setSearch,
        search,
        bookmarkSearch,
        fetchSingleMovieLinkWithVideos,
        youtubeLinkData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
