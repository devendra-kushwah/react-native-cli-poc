import React, { useState } from 'react';

import LogInView from './view';

const Home = ({navigation})=> {
    const [email, setEmail] = useState('');

  return (
    <LogInView viewProps={{
        navigation,
        email,
        setEmail,
     }} />
  )
}
export default Home;