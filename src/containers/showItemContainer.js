import { connect } from 'react-redux';
import ShowSingleItem from '../components/showSingleItem';

const mapStateToProps = (state, ownProps) => {
  const item = state.todos.filter(element => element.id === ownProps.id)[0];
  return {
    item
  }
};

const ShowItemContainer = connect(mapStateToProps)(ShowSingleItem);

export default ShowItemContainer;
