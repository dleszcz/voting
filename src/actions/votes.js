import { votesRef } from '../firebase';

export const ADD_VOTE = 'ADD_VOTE';
export const ADD_VOTE_SUCCESS = 'ADD_VOTE_SUCCESS';

export function addVote(title) {
  const id = Math.random().toString(36).substring(7);
  const itemRef = votesRef.child(id);

  itemRef.set({
    id,
    title: title,
    time: new Date().getTime()
  });

  return {
    type: ADD_VOTE
  }
}

export function addVoteSuccess(itemData) {
  return {
    type: ADD_VOTE_SUCCESS,
    itemData: itemData
  }
}