import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/apiContext";

import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchReasultsVideoCard from "../components/SearchReasultsVideoCard";
import Loading from "../components/Loading";

function SearchResults() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading, loading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res, "ji");
      setResult(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)]">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item) => {
              if (item?.type !== "video") return false;
              let video = item.video;
              return (
                <SearchReasultsVideoCard key={video.videoId} video={video} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
