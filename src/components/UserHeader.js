import React from "react";
import { connect } from "react-redux";

import { userFetch } from "../actions";

class UserHeader extends React.Component {
  renderedUser() {
    const { user } = this.props;

    return user ? <div className="header">{user.name}</div> : null;
  }

  render() {
    return this.renderedUser();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { userFetch })(UserHeader);
