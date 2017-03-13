/**
*
* ProblemView
*
*/

import React from 'react';
import Text from 'material-ui/Text';

function ProblemView() {
  return (
    <div style={{ padding: 24 }}>
      <Text type="display1" component="h1" gutterBottom>Zadanie 1</Text>
      <Text type="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex rutrum, at pretium nunc rutrum. Morbi feugiat arcu enim, quis euismod quam interdum non. Donec dignissim eros nec quam gravida, non consectetur turpis dignissim. Mauris non velit eu est gravida sagittis. Nulla consectetur commodo justo ac tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In elit mauris, malesuada eget nisl ac, semper faucibus lacus. Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa.
      </Text>
      <Text type="headline" component="h2" gutterBottom>Opis wejścia</Text>
      <Text type="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex rutrum, at pretium nunc rutrum. In elit mauris, malesuada eget nisl ac, semper faucibus lacus. Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa.
      </Text>
      <Text type="headline" component="h2" gutterBottom>Opis wyjścia</Text>
      <Text type="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex tellus, a egestas velit suscipit non. Aliquam erat volutpat. Integer sed ex eleifend, iaculis orci semper, commodo lectus. Sed varius tellus nec ex Phasellus arcu orci, porta non risus a, mattis gravida quam. Maecenas gravida lacus tellus, id pellentesque lorem tristique fermentum. Fusce sed rhoncus diam, a vulputate massa.
      </Text>
    </div>
  );
}

ProblemView.propTypes = {

};

export default ProblemView;
