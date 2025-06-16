import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Validar que las variables de entorno requeridas estén presentes
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
    throw new Error(
        'Las variables de entorno PUBLIC_SANITY_PROJECT_ID y PUBLIC_SANITY_DATASET son requeridas. ' +
        'Por favor, configúralas en tu archivo .env'
    );
}

const config = {
    projectId,
    dataset,
    apiVersion: '2024-06-13', // Usar fecha UTC
    useCdn: true, // Usar CDN para mejor performance
    token: import.meta.env.SANITY_API_READ_TOKEN, // Opcional
    perspective: 'published', // Solo contenido publicado por defecto
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function imageUrlFor(source: SanityImageSource) {
    if (!source) {
        console.warn('imageUrlFor called with empty source');
        return builder.image({ _ref: 'image-missing' });
    }
    return builder.image(source);
} 