import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Diapositiva del Héroe',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
        name: 'subtitle',
        title: 'Subtítulo',
        type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Imagen de Fondo',
        type: 'image',
        options: {
            hotspot: true,
        },
    }),
  ],
}) 