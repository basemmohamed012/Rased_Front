import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2 className="text-red-500 text-center mt-40 font-bold text-[20px]">حدث خطأ في تحميل البيانات!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
