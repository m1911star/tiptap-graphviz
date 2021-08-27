import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { MODE } from './extension';
import dynamic from 'next/dynamic';
import CustomErrorBoundary from './error';
const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

const Renderer =  (props: { node: { attrs: { mode: any; }; textContent: any; }; updateAttributes: (arg0: { mode: MODE; }) => void; }) => {
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
        <CustomErrorBoundary>
          <Graphviz dot={content}/>
        </CustomErrorBoundary>
      </div>
    </NodeViewWrapper>
  )
}

export default Renderer;
