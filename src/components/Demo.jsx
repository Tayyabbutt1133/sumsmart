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
  const [copied, setCopied] = useState("");
  const [summaryCopied, setSummaryCopied] = useState(false);

  const [getsummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
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
      updatedAllArticle = [newArticle, ...allArticles];
      setArticle(newArticle);
      setallArticles(updatedAllArticle);
      console.log(newArticle);
    }
    localStorage.setItem("articles", JSON.stringify(updatedAllArticle));
  };

  // Handle copying URL to clipboard
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  // Handle copying summary to clipboard
  const handleCopySummary = () => {
    navigator.clipboard.writeText(article.summary);
    setSummaryCopied(true);
    setTimeout(() => setSummaryCopied(false), 3000);
  };

  // Handle deleting article from history
  const handleDelete = (urlToDelete) => {
    const filteredArticles = allArticles.filter(
      (item) => item.url !== urlToDelete
    );
    setallArticles(filteredArticles);
    localStorage.setItem("articles", JSON.stringify(filteredArticles));
    
    // If the currently selected article is deleted, reset the article state
    if (article.url === urlToDelete) {
      setArticle({ url: "", summary: "" });
    }
  };

  // Handle clearing all history
  const handleClearHistory = () => {
    setallArticles([]);
    localStorage.removeItem("articles");
    setArticle({ url: "", summary: "" });
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

        {/* Browse URL history with clear all button */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.length > 0 && (
            <div className="flex justify-end mb-2">
              <button
                onClick={handleClearHistory}
                className="px-3 py-1 text-sm text-red-500 hover:text-red-700 font-lexend transition-colors"
              >
                Clear All History
              </button>
            </div>
          )}
          
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              className="link_card"
            >
              <div className="flex items-center justify-center gap-2">
                <div
                  className="copy_btn"
                  onClick={() => handleCopy(item.url)}
                >
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy_icon"
                    className="w-[40%] h-[40%] object-contain"
                  />
                      </div>
                      <p
                className="font-lexend text-blue-400 text-[12px] truncate cursor-pointer"
                onClick={() => setArticle(item)}
              >
                {item.url}
              </p>
                <button
                  onClick={() => handleDelete(item.url)}
                  className="p-1 text-red-500 hover:text-red-700 transition-colors"
                >
                  ×
                </button>
              </div>
             
            </div>
          ))}
        </div>
      </div>

      {/* Display result */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-lexend text-center">
            Well, that's an error
            <br />
            <span className="text-red-600 font-lexend">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-lexend font-bold text-xl">
                Article
                <span className="ml-2 orange_gradient font-lexend">
                  Summary
                </span>
              </h2>
              <div className="summary_box relative">
                <button
                  onClick={handleCopySummary}
                  className="absolute top-2 right-2 p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={summaryCopied ? tick : copy}
                    alt="copy_icon"
                    className="w-[20px] h-[20px] object-contain"
                  />
                </button>
                <p className="font-lexend">{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;