import React from "react";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const { user, children } = this.props;
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  }
}
export default ProtectedRoute;
