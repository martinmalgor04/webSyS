import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroCarousel',
      title: 'Carrusel del Héroe',
      type: 'array',
      of: [{type: 'heroSlide'}],
    }),
    defineField({
        name: 'products',
        title: 'Sección de Productos',
        type: 'array',
        of: [{type: 'reference', to: {type: 'product'}}],
    }),
    defineField({
        name: 'clientLogos',
        title: 'Sección de Logos de Clientes',
        type: 'array',
        of: [{type: 'reference', to: {type: 'clientLogo'}}],
    }),
  ],
  preview: {
    select: {},
    prepare: () => ({title: 'Contenido de la Página de Inicio'}),
  }
}) 