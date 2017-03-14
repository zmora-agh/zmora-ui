/*
 *
 * ContestsPage reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  contests: [{
    id: '1',
    name: 'EAIiIB',
    childContests: [
      {
        id: '1.1',
        name: 'Informatyka',
        childContests: [
          {
            id: '1.1.1',
            name: 'PWiR',
            date: '27.05.2017 16:00',
            description: 'To jest zadanie z PWiR',
            owner: 'Piotr Matyasik',
            childContests: [],
          },
          {
            id: '1.1.2',
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

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default contestsPageReducer;
