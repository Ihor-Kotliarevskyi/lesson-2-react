import axios from "axios";
import type Article from "../types/article";

interface ArticlesHttpResponse {
  hits: Article[];
}

export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `https://hn.algolia.com/a_pi/v1/search?query=${topic}`
  );
  return response.data.hits;
};

const myKey = import.meta.env.VITE_API_KEY;
console.log(myKey);
