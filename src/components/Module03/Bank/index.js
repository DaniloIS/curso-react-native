import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import { Input } from '../../Input';

import styles from './styles';
import { Button } from '../../Button';


const Bank = () => {
  const [student, setStudent] = useState(false)
  const [account, setAccount] = useState(null)
  const [limit, setLimit] = useState(250)
  const [gender, setGender] = useState('M')

  const [name, setName] = useState('')
  const [age, setAge] = useState()

  function handleSubmit() {
    if(!name || !age || !gender || !limit) return

    setAccount({
      name,
      age, 
      gender,
      limit,
      student,
    })

  }

  return (
    <>
      {!account ? 
      <View style={styles.container}>
        <Text>Abra sua conta</Text>
        <Input placeholder='Nome' onChange={setName} />
        <Input placeholder='Idade' onChange={setAge} type='numeric' />
        <Picker selectedValue={gender} onValueChange={item => setGender(item)}>
          <Picker.Item key={1} value={'M'} label={'M'} />
          <Picker.Item key={2} value={'F'} label={'F'} />
        </Picker>
        <View style={{width: '100%'}}>
          <Slider 
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000}
            value={limit}
            onValueChange={setLimit}
          />
        </View>
        <Switch 
          value={student}
          onValueChange={() => setStudent(!student)}
        />
        <Button label='Enviar' onClick={handleSubmit}/>
      </View>
        :
        <View style={styles.container}>
          <Text>Conta</Text>
          <Text>Nome: {account.name}</Text>
          <Text>Idade: {account.age}</Text>
          <Text>Sexo: {account.gender}</Text>
          <Text>Limite: {account.limit}</Text>
          <Text>Estudante: {account.student ? 'Sim' : 'Não'}</Text>
        </View>
      }
    </>
  )
}

export { Bank };