
import { fromJS } from 'immutable';

const initialState = fromJS({
  avatar: 'http://www.material-ui.com/images/uxceo-128.jpg',
  events: [
    { id: 1, text: 'New exercise in contest PWiR' },
    { id: 2, text: 'Your exercise have been rated' },
    { id: 3, text: 'New contest available' },
  ],
});

function rightMenuReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rightMenuReducer;
