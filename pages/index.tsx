import Link from "next/link";
import { client } from '../libs/client';
import type { Event } from '../types/article';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { useEffect } from 'react';

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

export function useInstagramEmbbed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "//www.instagram.com/embed.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);

    if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process()
    }
  })
}

export default function Home({ articles }: Props) {

  const restartVideo = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.play();
  }
  useInstagramEmbbed();

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

      {/* タイムライン */}
      <div className="container mx-auto px-10 pt-10">
        <h1 className="text-2xl font-semibold">
          SNS
        </h1>
        <div className="flex justify-center space-x-5 pt-10">
        <Link href="https://line.me/R/ti/p/@590qfaot">
          <img src="/LINE_APP_Android.png" alt="LINE" className="h-7 w-7" /></Link>

        <Link href="https://twitter.com/niigataflic">
          <img src="/logo.svg" alt="X" className="h-7 w-7" /></Link>

        <Link href="https://www.facebook.com/profile.php?id=100087655291578">
          <img src="/Facebook_Logo_Secondary.png" alt="Facebook" className="h-7 w-7" /></Link>

        <Link href="https://www.instagram.com/niigata_money_literacy/">
          <img src="/Instagram_Glyph_White.svg" alt="Instagram" className="h-7 w-7" /></Link>
        </div>
      </div>

      <div className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* Twitterの埋め込みコード */}
        <div className="rounded-lg" style={{ height: '600px', overflowY: 'scroll' }}>
          <TwitterTweetEmbed
            tweetId="1735878475461087728"
            placeholder={<p>Loading...</p>}
          />
        </div>

        {/* Instagramの埋め込みコード */}
        <div className="mx-auto rounded-lg" style={{ width: "100%", height: '600px', overflowY: 'scroll' }}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/Ckf5Z5CLtMp/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            width: '100%',
          }}
          >
          </blockquote>

        </div>

        {/* Facebookの埋め込みコード */}
        <div  className="mx-auto rounded-lg"  style={{ width: '100%', height: '600px', overflowY: 'scroll' }}>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0LYmLibsTSd74ayNa6TkcDuBWFXe8FvEpJpXYJQZvbNS4AEuQZRHWhJ37GKMkFjYbl%26id%3D100087655291578&show_text=true&width=500" width="100%" height="674"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
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
        </Link>
        <div className="px-6 pt-4 pb-2">
          <Link href={`event/${article.id}`}>
            {article.url && (
              <span className="inline-block bg-gray-200 bg-opacity-75 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-white shadow-md mr-2 mb-2">{article.tag}</span>
              )}
          </Link>
          <Link href={`${article.url}`}>
            {article.url && (
              <span className="inline-block bg-sky-500 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-white shadow-md m-3 ">参加申込</span>
              )}
          </Link>
        </div>
      </div>
      ))}
      </div>
    </>
  )
}