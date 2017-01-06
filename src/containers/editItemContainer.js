import { connect } from 'react-redux';
import EditSingleItem from '../components/EditSingleItem';

const mapStateToProps = (state, ownProps) => {
  const item = state.todos.filter(element => element.id === ownProps.id)[0];
  return {
    item
  }
};

const EditItemContainer = connect(mapStateToProps)(EditSingleItem);

export default EditItemContainer;
