import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/index';
import Modal from '../Modal';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <div>
        <button
          onClick={() => this.props.deleteStream(id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button '>
          Cancel
        </Link>
      </div>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure to delete this Stream?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title} `;
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title='Delete Stream'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
