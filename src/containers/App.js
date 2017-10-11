import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as ItemsActions from '../actions/items'

function mapStateToProps(state) {
  return {
    votes: state.items.votesList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
