import Head from 'next/head';
import { FC } from 'react';

import { config } from '../config/config';

type Meta =
  | { name: string; content: string }
  | { property: string; content: string };

type Props = {
  description?: string;
  meta?: Meta[];
  keywords?: string[];
  title?: string;
  image?: string;
};
const defaultDescription =
  'User verification using decentralised identity and custom conditions. Gates enables dapps, metaverse games, and NFT projects to seamlessly verify users via custom conditions..';
const twitterHandle = '0xjont';

const SEO: FC<Props> = ({
  description,
  meta = [],
  keywords = [],
  title,
  image,
}) => {
  const metaTitle = `gates.wtf`;
  const metaDescription = description || defaultDescription;

  let metaImage = `https://gates.wtf/meta-image.png`;

  const metaContent = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:image',
      content: metaImage,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'image',
      content: metaImage,
    },
    {
      name: 'twitter:creator',
      content: twitterHandle,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:image',
      content: metaImage,
    },

    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },

    ...meta,
  ];

  if (keywords.length > 0) {
    metaContent.push({
      name: 'keywords',
      content: keywords.join(', '),
    });
  }

  return (
    <Head>
      <title key="title">{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaContent.map((m) => (
        <meta {...m} key={'name' in m ? m.name : m.property} />
      ))}

      <meta charSet="utf-8" />
    </Head>
  );
};

export default SEO;
