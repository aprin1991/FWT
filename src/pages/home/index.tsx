import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "src/components/header";
import { CircleLoading } from "src/icons";
import { services } from "src/services/fetch.service";
import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(20);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<String>("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageQuery = +searchParams.get("page") - 1;
  useEffect(() => {
    getCharacters();
    pageQuery && setPage(pageQuery);
  }, []);
  useEffect(() => {
    getCharacters();
  }, [page, search, searchParams.get("page")]);

  const getCharacters = async () => {
    setLoading(true);
    const { data } = await services.fetch({
      endPoint: "v1/public/characters",
      body: {
        offset: (pageQuery ? pageQuery : page) * pageLimit,
        limit: pageLimit,
        ...(search && { name: search }),
      },
    });
    if (data) {
      setTotalItems(data.data.total > 200 ? 200 : data.data.total);
      setPageLimit(data.data.limit);
      setCharacters(data.data.results);
    }
    setLoading(false);
  };
  const handleSearch = (search: String) => {
    setPage(0);
    setSearch(search);
  };
  const handleChangePage = (page) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate({
      pathname: "/",
      search: `?page=${page + 1}`,
    });
    setPage(page);
  };
  const pageCount = Math.ceil(totalItems / pageLimit);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="flex flex-wrap">
        {loading ? (
          <div className="h-screen w-screen flex justify-center items-center">
            {CircleLoading}
          </div>
        ) : characters.length > 0 ? (
          characters?.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))
        ) : (
          <p className="w-full h-96 text-white text-lg flex justify-center items-center">
            Not Found !!
          </p>
        )}

        {pageCount > 2 && (
          <Pagination
            currentPage={page}
            changePage={(i: number) => handleChangePage(i)}
            pageCount={pageCount}
          />
        )}
      </div>
    </>
  );
};

export default Home;
