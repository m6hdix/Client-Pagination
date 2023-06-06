import { useEffect, useState } from "react";
import usePagination from "./hooks/usePagination";
import Pagination from "./components/Pagination";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
function App() {
  const [data, loading] = usePagination(url, 3);
  const [page, setPage] = useState(1);
  const [programmer, setProgrammer] = useState([]);
  useEffect(() => {
    if (loading) return;
    setProgrammer(data[page - 1]);
  }, [loading, page]);

  return (
    <div className="container mx-auto ">
      {loading && (
        <span className="loading loading-bars loading-lg absolute top-1/2 left-1/2"></span>
      )}
      {!loading && (
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full mt-5 gap-y-5">
          {programmer.map((programmer) => {
            return (
              <div key={programmer.id} className="card w-96 glass shadow-xl">
                <figure className="px-10 pt-10  ">
                  <img
                    src={programmer.imageUrl}
                    alt="Shoes"
                    className="rounded-xl w-48"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{programmer.name}</h2>
                  <p className="whitespace-nowrap">{programmer.skills}</p>
                  <a href={`mailto:${programmer.email}`}>{programmer.email}</a>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      {programmer.mobile}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!loading && (
        <Pagination pages={data.length} setPage={setPage} activePage={page} />
      )}
    </div>
  );
}

export default App;
