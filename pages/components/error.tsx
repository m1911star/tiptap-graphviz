import React from "react";

class CustomErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  
  static getDerivedStateFromError(error: any) {
    // 更新 state，下次渲染可以展示错误相关的 UI
    return { error: error };
  }
  
  render() {
    if (this.state.error) {
      // 渲染出错时的 UI
      return <p>预发错误</p>;
    }
    return this.props.children;
  }
}

export default CustomErrorBoundary;
