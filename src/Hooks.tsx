import React from 'react';
import AppContext from './AppContext'
interface User {
  name: string,
  login: string,
  avatar_url: string
}

const Hooks: React.FC = () => {

  const [user, setUser] = React.useState<User>();
  const [users, setUsers] = React.useState<[User]>();
  
  // Não precisamos trabalhar com tipagem aqui
  const names = React.useMemo(() => 
    users?.map(user => user.name).join(", ")
  ,[users])

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    async function loadData() {
      const response = await fetch("http://api.github.com/users/Talismar");
      const data = await response.json()
      console.log(data);
      
      setUser(data);
    }
  
    loadData()
    .catch(() => console.log("EROOR"));
  }, [])
  

  inputRef.current?.focus()

  return <>
    {user?.name}
    {/* {JSON.stringify(user)} */}
    {/* {users?.map((u, i) => <p>Talismar</p>)} */}
    <input type="text" ref={inputRef}/>

    <AppContext/>
  </>;
}

export default Hooks;