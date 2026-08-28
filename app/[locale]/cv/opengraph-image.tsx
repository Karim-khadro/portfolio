import {getContent} from '@/content';
import {routing, type Locale} from '@/i18n/routing';
import {ogContentType, ogSize, renderOgImage} from '@/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Karim Khadro — CV';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function CvOpengraphImage({params}: {params: {locale: Locale}}) {
  const {cv} = getContent(params.locale);

  // The CV card wears the navy + mint skin, like the page itself.
  return renderOgImage({
    title: cv.headline,
    subtitle: cv.location,
    accent: '#64ffda'
  });
}
