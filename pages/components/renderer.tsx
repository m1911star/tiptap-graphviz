import React from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { MODE } from './extension';

export default (props) => {
  console.log(props)
  const mode = props.node.attrs.mode;
  const content = props.node.textContent;
  const previewer = React.useRef(null);
  const toggleMode = React.useCallback(() => {
    const newMode = mode === MODE.EDIT ? MODE.PREVIEW : MODE.EDIT;
    props.updateAttributes({
      mode: newMode
    });
  }, [props, mode]);
  React.useEffect(() => {
    console.log(previewer);
    if (!previewer.current) return; 
    try {
      d3.select('#preview').graphviz().renderDot(content);
    } catch (e) {
      // TODO: 处理异常
      console.log(e);
    }
  }, [previewer, mode, content]);
  return (
    <NodeViewWrapper className="react-component-with-content" contentEditable={mode === MODE.EDIT}>
      <span className="label" onClick={toggleMode} contentEditable={false}>{mode === MODE.PREVIEW ? '编辑' : '预览'}</span>
      <div hidden={mode === MODE.PREVIEW}><NodeViewContent className="content" /></div>
      <div hidden={mode === MODE.EDIT} id="preview" className="content" ref={previewer}></div>
    </NodeViewWrapper>
  )
}