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
      <p className="text-gray-500">{articles.publishedAt}</p>
      {htmlContent}
    </main>


  );
}