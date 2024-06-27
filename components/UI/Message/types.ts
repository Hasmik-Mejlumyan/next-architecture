interface IMessageItem {
  id: number;
  message: string;
  owner: boolean;
}

export interface IMessageItemProps {
  item: IMessageItem;
}

export interface IMessageProps {
  messageList: IMessageItem[];
}
