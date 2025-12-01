import type Article from "../types/article";

interface ArticlesProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticlesProps) {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
