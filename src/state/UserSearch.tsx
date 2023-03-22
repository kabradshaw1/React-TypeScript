import { useState } from 'react';

const users = [
  { name: 'sam', age: 3},
  { name: 'bill', age: 3},
  { name: 'mark', age: 3}
]
const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser)
  }

  return (
    <div>
      <h3>User Search</h3>
      <input/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
      </div>
    </div>
  )
};

export default UserSearch;
