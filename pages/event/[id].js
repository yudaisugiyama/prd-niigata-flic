import Link from "next/link";
import { client } from '../../libs/client';

// SSG
export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'blogs', contentId: id });
  
    return {
      props: {
        articles: data,
      },
    };
  };


export default function ArticleId({ articles }) {
  const htmlContent = (
    <div dangerouslySetInnerHTML={{ __html: articles.body }} />
  );

  return (
    <main className="text-left py-8 mx-8">
      <h1 className="text-3xl font-bold">{articles.title}</h1>
      <p className="text-gray-500">{articles.publishedAt}</p>
      <Link href={articles.url}>
      <span className="inline-block bg-gray-200 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-white shadow-md m-3">参加申込</span>
      </Link>
      {htmlContent}
    </main>


  );
}