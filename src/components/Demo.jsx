import React from "react";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setallArticles] = useState([]);

  const [getsummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    // if there is an article response store in localstorage
    // we have to update it back in case of lose connection or
    // page lost
    if (articlesFromLocalStorage) {
      setallArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getsummary({
      articleUrl: article.url,
    });

    let updatedAllArticle = [...allArticles];

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary,
      };
      //updating/storing article links history
        updatedAllArticle = [newArticle, ...allArticles];
        // this is for single article to update it's state individually
        setArticle(newArticle);

        // this is for all article to update their state together
        // keeping previous history as well
      setallArticles(updatedAllArticle);
      console.log(newArticle);
    }
    // storing aricle data in local storage
    localStorage.setItem("articles", JSON.stringify(updatedAllArticle));
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="flex relative justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn transition duration-300 ease-in-out peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>
              {/* browse url history */}
              <div className=" flex flex-col gap-1 max-h-60 overflow-y-auto">
                  {allArticles.map((item, index) => (
                      <div key={`link-${index}`}
                          onClick={() => setArticle(item)}
                      className="link_card">
                          <div className="copy_btn">
                              <img src={copy}
                                  alt="copy_icon"
                              className="w-[40%] h-[40%] object-contain"/>
                          </div>
                          <p className="font-lexend text-blue-400 text-[12px] truncate">{item.url}</p>
                      </div>
                  ))}
              </div>
      </div>
          {/* display result */}
          <div className="my-10 max-w-full flex justify-center items-center">
              {isFetching ? (
                  <img src={loader}alt="loader" className="w-20 h-20 object-contain" /> 
              ) : error ? (
                  <p className="font-lexend text-center">Well, that's an error
                      <br />
                      <span className="text-red-600 font-lexend">
                          {error?.data?.error}
                          </span>
                  </p>
                      
              ) :(
                          article.summary && (
                              <div className=" flex flex-col gap-3">
                                  <h2 className="font-lexend font-bold text-xl">Article
                                  <span className=" ml-2 orange_gradient font-lexend">
                                         Summary
                                  </span>
                                  </h2>
                                  
                              </div>
                )
              )}
          </div>
    </section>
  );
};

export default Demo;
