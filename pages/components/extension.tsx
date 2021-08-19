import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import Component from './renderer'

export enum MODE {
  PREVIEW,
  EDIT
}

export default Node.create({
  name: 'reactComponent',

  group: 'block',

  content: 'block*',

  addAttributes() {
    return {
      mode: {
        default: MODE.EDIT,
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'react-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})