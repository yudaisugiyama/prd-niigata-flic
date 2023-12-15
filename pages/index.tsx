import Link from "next/link";
import { client } from '../libs/client';
import type { Event } from '../types/article';

// MicroCMS
type Props = {
  articles: Array<Event>;
};

// SSG
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'events' });

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

      <div style={{ width: '50%', margin: '30px', float: 'left' }}>
        {/* Twitterタイムラインの埋め込みコード */}
        <a className="twitter-timeline" href="https://twitter.com/niigataflic?ref_src=twsrc%5Etfw">Tweets by niigataflic</a> <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>

      {/* トピックス */}
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-semibold">
        Topics
      </h1>

      {/* トピックスのコンテンツ */}
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {articles.slice(0,3).map(article => (
      <div className="rounded-lg overflow-hidden shadow-lg bg-opacity-50 border border-neutral-600" key={article.id}>
        <Link href={`event/${article.id}`}>
          <img
            className="w-full hover:bg-gray-100 hover:shadow-lg hover:scale-105 focus:outline-none focus:bg-gray-100 focus:shadow-lg focus:scale-105 active:bg-gray-200"
            src={article.eye_catch.url}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">{article.title}</div>
          <div className="px-6 pt-4 pb-2">
            {article.tag && (
            <span className="inline-block bg-gray-200 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-white shadow-md mr-2 mb-2">{article.tag}</span>
            )}
          </div>
        </Link>
      </div>
      ))}
      </div>
    </>
  )
}