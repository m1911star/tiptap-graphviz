import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { MODE } from './extension';
import dynamic from 'next/dynamic';
const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

export default (props) => {
  const mode = props.node.attrs.mode;
  const content = props.node.textContent;
  const previewer = React.useRef(null);
  const toggleMode = React.useCallback(() => {
    const newMode = mode === MODE.EDIT ? MODE.PREVIEW : MODE.EDIT;
    props.updateAttributes({
      mode: newMode
    });
  }, [props, mode]);
  return (
    <NodeViewWrapper className="react-component-with-content" contentEditable={mode === MODE.EDIT}>
      <span className="label" onClick={toggleMode} contentEditable={false}>{mode === MODE.PREVIEW ? '编辑' : '预览'}</span>
      <div hidden={mode === MODE.PREVIEW}><NodeViewContent className="content" /></div>
      <div hidden={mode === MODE.EDIT} id="preview" className="content" ref={previewer}>
        <Graphviz dot={content}/>
      </div>
    </NodeViewWrapper>
  )
}
