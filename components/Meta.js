import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
      <meta name='facebook-domain-verification' content='f5h503kxss15uukmtdqr0599hvqtjs' />
      <meta name='google-site-verification' content='ydlJnBpDKIqGjDkATbLUH2fFY53fYrnNEMAMoLpseq4' />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Monir Hossain' />
      <meta name='description' content={description} />
      <title>{title}</title>

      <script async src='https://www.googletagmanager.com/gtag/js?id=G-JSMGQ06M5V'></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JSMGQ06M5V');
            `,
        }}
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Freelance Website Developer - Monir Hossain',
  keywords: 'WordPress Website, WordPress Themes, WooCommerce Website, Online shop, eCommerce Website Developer ',
  description:
    'Freelance WordPress developer specializing in completely custom WordPress website development for web development agencies, designers, small businesses &amp; more.',
};

export default Meta;
