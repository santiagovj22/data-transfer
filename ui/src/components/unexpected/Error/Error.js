import React from "react";
import { Message, Icon } from "semantic-ui-react";

export default function Error() {
  return (
    <Message icon>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Your page died</Message.Header>
        Contact the administrator
      </Message.Content>
    </Message>
  );
}
