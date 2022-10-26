import React, {useState} from 'react';

import LogInView from './view';

const LogIn = ({navigation})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const submitAction = () => {
    //     setData({
    //       name,
    //       email,
    //       password,
    //     });
    //   };

  return (
    <LogInView viewProps={{
        // submitAction,
        navigation,
        email,
        password,
        setEmail,
        setPassword
     }} />
  )
}
export default LogIn;