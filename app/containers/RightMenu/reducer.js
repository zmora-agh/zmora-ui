
import { fromJS } from 'immutable';

const initialState = fromJS({
  open: false,
  avatar: 'http://www.material-ui.com/images/uxceo-128.jpg',
  events: [
    { id: 1, text: 'New exercise in contest PWiR' },
    { id: 2, text: 'Your exercise have been rated' },
    { id: 3, text: 'New contest available' },
  ],
  username: 'Mateusz Nowotyński',
});

function rightMenuReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rightMenuReducer;
