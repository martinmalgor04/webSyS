import { sanityClient } from './sanityClient';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Tipos para la homepage
export interface HeroSlide {
  title: string;
  subtitle: string;
  image: any;
}

export interface Product {
  title: string;
  description: string;
  logo: any;
  color: {
    hex: string;
  };
}

export interface ClientLogo {
  name: string;
  logo: any;
}

export interface HomepageData {
  heroCarousel: HeroSlide[];
  products: Product[];
  clientLogos: ClientLogo[];
}

// Función principal para obtener datos de la homepage con manejo de errores
export async function getHomepageData(): Promise<HomepageData> {
  const query = `*[_type == "homepage" && _id == "homepage"][0]{
    heroCarousel[]{
      title,
      subtitle,
      image
    },
    "products": products[]->{
      title,
      description,
      logo,
      color
    },
    "clientLogos": clientLogos[]->{
      name,
      logo
    }
  }`;

  try {
    const data = await sanityClient.fetch(query);
    
    // Validar y transformar los datos
    return {
      heroCarousel: data?.heroCarousel || [],
      products: data?.products || [],
      clientLogos: data?.clientLogos || []
    };
  } catch (error) {
    console.error('Error fetching homepage data from Sanity:', error);
    
    // Retornar datos por defecto en caso de error
    return {
      heroCarousel: [],
      products: [],
      clientLogos: []
    };
  }
}