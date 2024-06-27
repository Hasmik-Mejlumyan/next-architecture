import React from 'react';
import { IMessageItemProps } from '../types';

const MessageItem = ({ item }: IMessageItemProps) => {
  return (
    !!item.id && (
      <div key={item.id} className="mt-0.5 w-[100%]">
        <div className={`flex flex-col justify-center ${item.owner ? 'items-end' : 'items-start'} `}>
          <div className="text-heading-5 mt-[0.3vw] max-w-[27.273rem] break-words rounded-t-xl bg-secondary-light-200 p-[0.909rem] text-left font-medium">
            {item.owner ? (
              <div className="my_comment_box">
                <p className="my_comment">{item.message}</p>
              </div>
            ) : (
              item.message
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MessageItem;
