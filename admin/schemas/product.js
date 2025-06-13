import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
        name: 'logo',
        title: 'Logo del Producto (Tango)',
        type: 'image',
    }),
    defineField({
        name: 'description',
        title: 'Descripción',
        type: 'text',
    }),
    defineField({
        name: 'color',
        title: 'Color de Fondo',
        type: 'color',
    }),
  ],
}) 