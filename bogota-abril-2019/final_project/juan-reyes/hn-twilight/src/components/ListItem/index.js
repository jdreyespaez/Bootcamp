import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const ListItem = () => {
  return (
    <Item>
      <ExternalLink>
        <Title>
          The First Title<Host>(domain.com)</Host>
        </Title>
      </ExternalLink>
      <Description>
        1234 points by{' '}
        <CommentLink href="#" target="_blank">
          Jhon Smith
          </CommentLink>
        1 Hour Ago
          {' | '}
        <CommentLink href="#" target="_blank">
          12 Comments
          </CommentLink>
      </Description>
    </Item >
  );
};

export default ListItem;