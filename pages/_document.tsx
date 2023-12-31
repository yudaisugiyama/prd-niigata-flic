import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <Html lang="jp">
            {/* HeadにGoogle Analyticsのスクリプトコードを埋め込み */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-01K2DFY8Z7"></script>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VEG33L98SB', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
            <Head />
        <body>
            {children}
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}