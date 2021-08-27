import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import GraphVizExtension from "./extension";

export default () => {
  const editor = useEditor({
    extensions: [StarterKit, GraphVizExtension],
    content: `
    <h2>一个简单的 graphviz 编辑器</h2>
    <react-component>
    digraph { A -> B -> C }
    </react-component>
    <p>
      Did you see that? That’s a React component. We are really living in the future.
    </p>
    `
  });

  return <EditorContent editor={editor} />;
};
