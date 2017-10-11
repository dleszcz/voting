import { votesRef } from '../firebase';

export const ADD_VOTE = 'ADD_VOTE';
export const ADD_VOTE_SUCCESS = 'ADD_VOTE_SUCCESS';

export function addVote(title) {
  const id = Math.random().toString(36).substring(7);
  const voteRef = votesRef.child(id);

  voteRef.set({
    id,
    title: title,
    time: new Date().getTime()
  });

  return {
    type: ADD_VOTE
  }
}

export function addVoteSuccess(voteData) {
  return {
    type: ADD_VOTE_SUCCESS,
    voteData: voteData
  }
}