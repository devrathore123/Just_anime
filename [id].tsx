import { useRouter } from 'next/router';
import { animeList } from '../../data/anime';
import Navbar from '../../components/Navbar';
export default function Watch() {
  const router = useRouter();
  const { id } = router.query;
  const anime = animeList.find(a => a.id === id);
  if (!anime) return <div>Anime not found.</div>;

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{anime.title}</h1>
        <p className="mb-4">{anime.description}</p>
        <video controls className="w-full rounded">
          <source src={anime.videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}