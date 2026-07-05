import { Helmet as ReactHelmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

const Helmet = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const meta = {
    title: t.seo.title,
    description: t.seo.description,
    keywords: t.seo.keywords,
    author: 'Kevin',
    url: 'https://kevin.dev',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portfolio%20dark%20theme%20modern&image_size=landscape_16_9'
  };

  return (
    <ReactHelmet>
      <html lang={language} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      
      <link rel="canonical" href={meta.url} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
    </ReactHelmet>
  );
};

export default Helmet;