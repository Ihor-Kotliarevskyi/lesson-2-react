import axios from "axios";
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

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {
  const handleOrder = (data: { name: string; text: string }) => {
    console.log("Order received from:", data);
  };

  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
    setIsLoading(true);
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setIsLoading(false);
    setArticles(response.data.hits);
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
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    </>
  );
}
