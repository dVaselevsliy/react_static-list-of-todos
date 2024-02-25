import todosFromServer from './api/todos';

export const TodoInfo = ({ todosFromServer }) => (
<>
  {todosFromServer.map(todo => (
        <article
            className={`TodoInfo ${todo.completed && "TodoInfo--completed"}`}
          >
          <h2 className="TodoInfo__title">{todo.title}</h2>
        </article>
    ))}
  </>
);
