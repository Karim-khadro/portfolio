import type {MetadataRoute} from 'next';

/** Replaces both conflicting CRA manifests (manifest.json + site.webmanifest). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karim Khadro — développeur web & IA pour PME',
    short_name: 'Karim Khadro',
    description:
      'Sites internet, applications web et intégration de l’IA pour les petites entreprises de la région de Liège.',
    start_url: '/fr',
    display: 'standalone',
    background_color: '#faf8f5',
    theme_color: '#0f5f5c',
    // Only files that actually exist — the old manifests pointed at a
    // logo192.png that had been deleted.
    icons: [{src: '/favicon.ico', sizes: 'any', type: 'image/x-icon'}]
  };
}
