import Link from 'next/link';
interface Props {
  id: string;
  title: string;
  thumbnail: string;
}
export default function VideoCard({ id, title, thumbnail }: Props) {
  return (
    <Link href={`/watch/${id}`}> 
      <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="p-2 font-semibold text-center">{title}</div>
      </div>
    </Link>
  );
}