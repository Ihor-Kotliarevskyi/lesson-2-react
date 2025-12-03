import ClickCounter from "./ClickCounter";
import ClickCounterXYZ from "./ClickCounterXYZ";
import Form from "./Form";
import FormAction from "./FormAction";
import OrderForm from "./OrderForm";
import SearchForm from "./SearchForm";
import { useState } from "react";
import type Article from "../types/article";
import ArticleList from "./ArticleList";
import { Loader } from "./Loader";
import { fetchArticles } from "../services/articleService";
import OrderFormWithID from "./OrderFormWithID";

export default function App() {
  const handleOrder = (data: { name: string; text: string }) => {
    console.log("Order received from:", data);
  };

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setArticles([]);
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ClickCounter />
      <br></br>
      <ClickCounterXYZ />
      <br></br>
      <Form />
      <br></br>
      <FormAction />
      <br></br>
      <OrderForm onSubmit={handleOrder} />
      <br></br>
      <div>
        <SearchForm onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {isError && (
          <strong>Whoops, something went wrong! Please try again!</strong>
        )}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
      <br></br>
      <OrderFormWithID />
    </>
  );
}
