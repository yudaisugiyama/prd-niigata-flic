import Link from "next/link";
import { client } from '../../libs/client';

// SSG
export const getServerSideProps = async () => {
    const data = await client.get({ endpoint: 'supports', contentId: 'j6t9hbmm3' });
  
    return {
      props: {
        articles: data,
      },
    };
  };


export default function ArticleId({ articles }) {
  const htmlContent = (
    <div dangerouslySetInnerHTML={{ __html: articles.supports }} />
  );

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-semibold">Support</h1>
      <div className="mx-auto py-8">
        <main className="border rounded-lg p-8">
          {htmlContent}
        </main>
      </div>
    </div>
  );
}