import React, {useState} from 'react';

import SignUpView from './view';

const SignUp = ({navigation})=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState();

    const submitAction = () => {
        setData({
          name,
          email,
          password,
        });
      };
    
  return (
    <SignUpView viewProps={{
        navigation,
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        submitAction,
     }} />
  )
}
export default SignUp;