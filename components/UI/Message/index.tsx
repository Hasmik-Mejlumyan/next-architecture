import React from 'react';
import MessageItem from '@/components/UI/Message/MessageItem';
import { IMessageProps } from '@/components/UI/Message/types';

const Message = ({ messageList }: IMessageProps) => {
  return (
    <div className="flex w-[100%] flex-col justify-end overflow-y-auto rounded-[0.625rem] bg-white p-4">
      <div className={'max-h-[40vw]'}>
        {messageList.map(messageItem => (
          <MessageItem key={messageItem.id} item={messageItem} />
        ))}
      </div>
    </div>
  );
};

export default Message;
