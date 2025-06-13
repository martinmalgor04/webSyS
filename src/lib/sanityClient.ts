import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config = {
    projectId: 'pl01ag7y',
    dataset: 'production',
    apiVersion: '2024-06-13', // use a UTC date string
    useCdn: false, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function imageUrlFor(source: SanityImageSource) {
    return builder.image(source);
} 