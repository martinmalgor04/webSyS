import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clientLogo',
  title: 'Logo de Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Cliente',
      type: 'string',
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}) 