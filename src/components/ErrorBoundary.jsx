import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError() {

    return { hasError: true };
  }

  componentDidCatch(error, info) {

    console.error("Error caught by Error Boundary:", error, info);

    this.setState({ errorInfo: info });
  }

  render() {
    if (this.state.hasError) {

      return (
        <div>
          <h1>Something went wrong. Please try again later.</h1>
          <details>
            <summary>Click for more details</summary>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
