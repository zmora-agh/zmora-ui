/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Paper from 'material-ui/Paper';
import Text from 'material-ui/Text';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Paper style={{ padding: '3em 2em', textAlign: 'justify' }}>
        <Text type="title" gutterBottom>Home page</Text>
        <Text type="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur, tellus non venenatis congue, nisi metus efficitur augue, id elementum dui est sed felis. Suspendisse sagittis ultrices ante quis auctor. Curabitur ullamcorper libero a turpis lacinia, sit amet vehicula dolor sagittis. Suspendisse pretium placerat euismod. Cras porta blandit molestie. Ut pharetra maximus nisl sit amet finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id sem non purus rutrum viverra. Duis cursus urna ac metus faucibus ornare. Aliquam erat volutpat. Maecenas vitae ultricies libero. Suspendisse tempus lobortis arcu in dictum. Quisque rhoncus ut orci in lacinia. Quisque iaculis rutrum nisi sit amet vehicula. Proin varius velit leo, ut congue dolor euismod in. Mauris eu nibh eget erat rutrum finibus.

          Morbi ut maximus turpis, id dignissim lacus. Pellentesque varius sodales pellentesque. Donec at ligula elit. Nunc sed arcu ac risus convallis convallis sit amet vel ante. Suspendisse vel libero semper, congue enim vitae, convallis nibh. Quisque accumsan risus id rhoncus gravida. Sed id augue vitae neque eleifend sagittis. Aliquam erat volutpat. Duis turpis arcu, auctor ut lacus id, dictum auctor orci. Fusce consectetur eu risus et gravida. Mauris tempor tempor eros in pellentesque. Morbi id commodo ante, vitae aliquam ante. Duis efficitur ipsum quis risus molestie, ut facilisis metus laoreet.

          Ut urna turpis, dignissim in semper at, mollis quis est. Vivamus laoreet ultricies purus, sit amet dignissim elit ultrices non. Sed vestibulum, tellus ac porta fringilla, neque neque porta tortor, et porttitor urna justo at ipsum. Nunc lobortis viverra tellus nec faucibus. Aenean elementum orci pharetra, faucibus leo ac, commodo ligula. Cras et erat quis lacus gravida malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque augue, volutpat vitae consequat nec, feugiat faucibus eros. Suspendisse dictum, enim nec posuere eleifend, dui quam ornare urna, eget blandit ipsum neque in ligula. Donec accumsan metus maximus nibh fermentum, eget fringilla erat dignissim. Cras efficitur euismod eros, vel faucibus turpis malesuada ut. Vivamus aliquam erat luctus urna aliquet, ut consequat metus faucibus. In varius nisl nec quam faucibus, eu laoreet urna mollis. Curabitur vestibulum mi ullamcorper rhoncus sagittis.

          Sed ligula nulla, gravida euismod nibh tempor, egestas ultrices enim. Curabitur commodo quam sagittis, molestie nisl eget, auctor velit. Nullam vulputate lobortis mauris, vitae molestie ante venenatis sed. Nam euismod lorem nunc, vitae congue nisi pretium non. Aliquam id mattis ante, at sodales mauris. Morbi sed ultricies sapien, in sodales magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus porttitor, velit vel bibendum maximus, est nisi sagittis risus, eu posuere arcu erat eu ex. Nullam quis arcu in felis consectetur congue. Integer vulputate ipsum arcu, ut egestas tortor efficitur aliquam. Nullam porta, urna id tempor vulputate, mauris purus ultricies urna, ac varius leo odio sed ante. Quisque vel ipsum quis risus lacinia condimentum in quis erat.

          Curabitur id turpis et dolor mattis pellentesque. Nunc sodales eget nisi ut blandit. Nam malesuada, diam ut porta ornare, ex massa blandit ex, molestie egestas purus elit quis eros. Nam ipsum mauris, dapibus elementum ante vel, scelerisque scelerisque leo. Sed tempus nulla eu bibendum placerat. Cras et blandit elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut rutrum volutpat tincidunt. Morbi justo metus, lobortis vel gravida nec, blandit ac nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel vulputate nibh, ac efficitur erat. Quisque vitae neque tristique felis elementum lacinia. Etiam congue eros elementum efficitur pharetra. Suspendisse elit est, scelerisque et congue id, tristique at purus. Vivamus pretium sapien erat, et pretium quam tempor quis.
        </Text>
      </Paper>
    );
  }
}
