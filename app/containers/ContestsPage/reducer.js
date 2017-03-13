/*
 *
 * ContestsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  EXPAND_CONTEST_ROW,
  HIDE_CONTEST_ROW,
} from './constants';

const initialState = fromJS({
  contests: [{
    id: '1',
    expanded: true,
    name: 'EAIiIB',
    childContests: [
      {
        id: '1.1',
        expanded: true,
        name: 'Informatyka',
        childContests: [
          {
            id: '1.1.1',
            expanded: true,
            name: 'PWiR',
            date: '27.05.2017 16:00',
            description: 'To jest zadanie z PWiR',
            owner: 'Piotr Matyasik',
            childContests: [],
          },
          {
            id: '1.1.2',
            expanded: true,
            name: 'Języki i metody programowania 2',
            date: '27.05.2017 16:00',
            description: 'To jest zadanie z C++',
            owner: 'Krzysztof Kutt',
            childContests: [],
          },
        ],
      },
    ],
  }],
});

function findNodeById(contests, id) {
  let i;
  for (i = 0; i < contests.length; i += 1) {
    const node = contests[i];
    if (node.id === id) {
      return node;
    }
    const childNode = findNodeById(node.childContests, id);
    if (childNode !== null) {
      return childNode;
    }
  }
  return null;
}

function changeExpandedInNode(contests, id, expand) {
  findNodeById(contests, id).expanded = expand;
}

function changeExpand(state, id, expand) {
  const stateContests = state.get('contests').toJS();
  changeExpandedInNode(stateContests, id, expand);
  return state.merge({ contests: stateContests });
}

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case EXPAND_CONTEST_ROW:
      return changeExpand(state, action.value, true);
    case HIDE_CONTEST_ROW:
      return changeExpand(state, action.value, false);
    default:
      return state;
  }
}

export default contestsPageReducer;
