/**
*
* MemberAvatar
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';
import Text from 'material-ui/Text';
// eslint-disable-next-line no-unused-vars
import { Card, CardContent } from 'material-ui/Card';

function MemberAvatar(props) {
  const StyledMemberAvatar = styled.div`
    background: url(${() => props.bgUrl}) no-repeat;
    background-size: 100% 42%;
    padding-bottom: 30px;
    background-color: ${() => props.bgColor};
    padding-top: 40px;
  `;

  return (
    <Card raised>
      <StyledMemberAvatar bgUrl={props.bgUrl}>
        <Avatar
          alt="memberPhoto"
          src={props.avatarUrl}
          style={{ margin: '0 auto', width: 120, height: 120, border: 5, borderStyle: 'solid', borderColor: 'white' }}
        />
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <Text type="display2" style={{ color: 'white', fontSize: 34 }}>{props.name}</Text>
          <Text type="display1" style={{ color: 'white', fontSize: 22 }}>{props.description}</Text>
        </div>
      </StyledMemberAvatar>
    </Card>
  );
}

MemberAvatar.propTypes = {
  bgColor: React.PropTypes.string.isRequired,
  avatarUrl: React.PropTypes.string.isRequired,
  bgUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default MemberAvatar;
