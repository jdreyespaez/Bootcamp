import React from 'react';
import { connect } from 'react-redux';
import { fetchSurfers } from '../../actions';


class SurferList extends React.Component {
  componentDidMount() {
    this.props.fetchSurfers();
  }

  render() {
    console.log(this.props.surfers);
    return <div>La lista de surfers</div>
  }
}

const mapStateToProps = (state) => {
  return { surfers: Object.values(state.surfers) };
}

export default connect(mapStateToProps, { fetchSurfers })(SurferList);