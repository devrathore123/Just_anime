import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';
import { animeList } from '../data/anime';
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {animeList.map(anime => (
          <VideoCard key={anime.id} id={anime.id} title={anime.title} thumbnail={anime.thumbnail} />
        ))}
      </div>
    </div>
  );
}