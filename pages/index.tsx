import Link from "next/link";
import { client } from '../libs/client';
import type { Article } from '../types/article';
import styles from '../styles/Home.module.css';

// MicroCMS
type Props = {
  articles: Array<Article>;
};

// SSG
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default function Home({ articles }: Props) {

  const restartVideo = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.play();
  }

  return (
    <>
      {/* メインビジュアル */}
      <video
        src="main-visual.mov"
        autoPlay
        muted
        playsInline
        style={{ width: '100vw' }}
        onEnded={(e) => restartVideo(e.target as HTMLVideoElement)}>
      </video>

      {/* トピックス */}
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        Topics
      </h1>

      {/* トピックスのコンテンツ */}
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  {articles.map(article => (
    <div className="rounded-lg overflow-hidden shadow-lg bg-opacity-50 border border-neutral-600" key={article.id}>
      <Link href={`event/${article.id}`}>
        <img
          className="w-full"
          src={article.eye_catch.url}
          alt="Sunset in the mountains"
        />
          <div className="px-6 py-4">{article.title}</div>
        <div className="px-6 pt-4 pb-2">
          {article.tag && (
            <span className="inline-block bg-gray-200 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-white shadow-md mr-2 mb-2">
              {article.tag}
            </span>
          )}
        </div>
      </Link>
    </div>
  ))}
</div>


    </>
  )
}