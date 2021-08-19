import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import GraphVizExtension from './extension'


export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      GraphVizExtension,
    ],
    content: `
    <h2>一个简单的 graphviz 编辑器</h2>
    <react-component>
    digraph D {   A [shape=diamond]   B [shape=box]   C [shape=circle]   A -> B [style=dashed, color=grey]   A -> C [color="black:invis:black"]   A -> D [penwidth=5, arrowhead=none] }
    </react-component>
    <p>
      Did you see that? That’s a React component. We are really living in the future.
    </p>
    `,
  })

  return (
    <EditorContent editor={editor} />
  )
}