import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoList = ({ todosFromServer }) => (
  <>
    {todosFromServer.map(todo => (
      <section className="TodoList" key={todo.id}>
        <TodoInfo todo={todo} />
        <UserInfo user={todo.userId} />
      </section>
    ))}
  </>
);
