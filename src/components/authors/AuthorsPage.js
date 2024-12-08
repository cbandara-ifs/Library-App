import React from "react";
import { connect } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class AuthorsPage extends React.Component {
  componentDidMount() {
    const { actions, authors } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("loading courses failed " + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.props.authors.map(author => (
          <div key={author.firstName}>{author.firstName}</div>
        ))}
      </>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
