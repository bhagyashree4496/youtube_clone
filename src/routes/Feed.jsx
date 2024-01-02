import React, { useContext, useEffect } from "react";

import { Context } from "../context/apiContext";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
function Feed() {
  const { loading, searchResults } = useContext(Context);

  // useEffect(() => {
  //   document.getElementById("root").classList.remove("custom-h");
  // }, []);
  return (
    <div className="grow w-screen lg:w-[calc(100%-240px)] h-full overflow-y-auto bg-black flex justify-center items-center">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Feed;
