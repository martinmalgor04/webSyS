import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["homepage"])

export default defineConfig({
  name: 'default',
  title: 'Mi Proyecto Web',

  projectId: 'pl01ag7y',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            // Singleton for Homepage
            S.listItem()
              .title("Homepage")
              .id("homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
              ),

            S.divider(),

            // Regular document types
            S.documentTypeListItem("product").title("Productos"),
            S.documentTypeListItem("clientLogo").title("Logos de Clientes"),
            S.documentTypeListItem("post").title("Posts"),
            S.documentTypeListItem("author").title("Autores"),
            S.documentTypeListItem("page").title("Páginas"),
          ]),
    }),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from being created
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly allowed
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
}) 