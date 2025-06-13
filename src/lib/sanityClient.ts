import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config = {
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2024-06-13', // use a UTC date string
    useCdn: true, // `true` if you want to use the CDN, `false` if you want to ensure fresh data
    token: import.meta.env.SANITY_API_READ_TOKEN,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function imageUrlFor(source: SanityImageSource) {
    return builder.image(source);
} 