import usersFromServer from './api/users';


export const UserInfo = ({ usersFromServer }) => (
  <>
      {usersFromServer.map(user => (
        <a
        className="UserInfo" href={`mailto: ${user.email}`}>
            {user.name}
          </a>
      ))}
    </>
  );
