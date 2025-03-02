import { Helmet } from 'react-helmet-async';
import socialPreview from '../assets/junk-fm-helmet-preview-color.png';

interface PageHelmetProps {
  title?: string; // Page title
  description?: string; // Meta description
  keywords?: string[]; // Array for keywords to easily combine defaults and additional ones
  url?: string; // Page URL (for OG tags)
  image?: string; // Image for sharing (OG and Twitter)
}

// Default keywords
const defaultKeywords = [
  '80s cover band',
  '90s cover band',
  '2000s cover band',
  'acoustic cover band',
  'best Minneapolis cover band',
  'best Twin Cities cover bands',
  'Blink-182 tribute',
  'Bruno Mars cover band',
  'classic rock cover band',
  'corporate event entertainment',
  'cover band Minneapolis',
  'cover bands in Minnesota',
  'dance cover band',
  'destination wedding band',
  'event band for hire',
  'funk rock cover band',
  'Green Day tribute band',
  'high-energy cover band',
  'Junk FM',
  'Junk FM band',
  'Junk FM cover band',
  'Junk FM Minneapolis',
  'Junk FM Twin Cities',
  'live music for corporate events',
  'Minneapolis band for weddings',
  'Minneapolis best live band',
  'Minneapolis event entertainment',
  'Minneapolis live band',
  'Minneapolis party band',
  'Minnesota band for hire',
  'Minnesota wedding entertainment',
  'Minnesota wedding music',
  'MN corporate band',
  'MN event music',
  'MN wedding band',
  'modern pop cover band',
  'party band Minneapolis',
  'pop punk cover band',
  'pop rock wedding band',
  'private event music',
  'rock and pop cover band',
  'rock wedding band',
  'St. Paul live music',
  'top Minneapolis wedding bands',
  'Twin Cities best cover bands',
  'Twin Cities live music',
  'Twin Cities wedding band',
  'wedding band for hire',
  'wedding entertainment Twin Cities',
  'wedding music Minneapolis',
  'wedding reception live music',
];

const defaultDescription = 'Junk FM - Destroying your favorite songs since 2010';

export function PageHelmet({
  title,
  description,
  keywords = [], // Default to an empty array
  url = 'https://junkfm.com',
  image = socialPreview,
}: PageHelmetProps) {
  // Combine default and additional keywords
  const combinedKeywords = [...defaultKeywords, ...keywords];

  return (
    <Helmet>
      <title>{title ? `Junk FM | ${title}` : 'Junk FM'}</title>
      <meta name="description" content={description || defaultDescription} />
      {combinedKeywords.length > 0 && (
        <meta name="keywords" content={combinedKeywords.join(', ')} />
      )}
      <meta name="author" content="Junk FM" />
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || 'Junk FM'} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Junk FM"} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
