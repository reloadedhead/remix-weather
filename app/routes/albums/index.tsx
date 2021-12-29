import { useLoaderData } from "remix";

export const loader = () => fetch("https://itunes.apple.com/us/rss/topalbums/limit=50/json");

export default function Posts() {
  const albums = useLoaderData<unknown>();
  console.log(albums);
  return (
    <div>
      <h1>Albums</h1>
    </div>
  );
}