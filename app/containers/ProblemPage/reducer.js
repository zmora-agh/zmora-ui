/**
 * Created by maxmati on 3/20/17.
 */

import { fromJS } from 'immutable';


const initialState = fromJS({
  content: {
    title: 'Zadanie 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex rutrum, at pretium nunc rutrum. Morbi feugiat arcu enim, quis euismod quam interdum non. Donec dignissim eros nec quam gravida, non consectetur turpis dignissim. Mauris non velit eu est gravida sagittis. Nulla consectetur commodo justo ac tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In elit mauris, malesuada eget nisl ac, semper faucibus lacus. Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa',
    input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex rutrum, at pretium nunc rutrum. In elit mauris, malesuada eget nisl ac, semper faucibus lacus. Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa.',
    output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa.',
  },
  examples: [
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
    {
      input: 'foo\nbar\nbaz',
      output: '1\n2\n666',
      reason: 'Szatan czyste zło',
    },
  ],
  submits: [
    { id: 123, created: '11 minutes ago', status: 'ANS' },
    { id: 124, created: '11 minutes ago', status: 'ANS' },
  ],
});

function contestsPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default contestsPageReducer;
