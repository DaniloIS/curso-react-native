import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

// import { Container } from './styles';

const SwitchComponent = () => {
  const [status, setStatus] = useState(false)

  return (
    <View>
      <Switch 
        value={status}
        onValueChange={() => setStatus(!status)}
      />
      <Text>{status ? 'Ativo' : 'Inativo'}</Text>
    </View>
  )
}

export default SwitchComponent;