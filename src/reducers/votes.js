import { ADD_VOTE_SUCCESS } from '../actions/votes';

const initialState = {
  votesList: [],
};

export default function reducer(state = initialState, action) {
  let list;

  console.log(action);
  switch (action.type) {
  case ADD_VOTE_SUCCESS:
    list = state.votesList.concat([action.voteData]).sort((a, b) => b.time - a.time);

    return {
      ...state,
      votesList: list,
    };
  default:
    return state;
  }
}
