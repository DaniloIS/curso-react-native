import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../Button';
import { Input } from '../../Input';

const Hooks = () => {
  const [name, setName] = useState('')
  const [view, setView] = useState('')

  const inputTextRef = useRef(null)

  const focusInput = () => inputTextRef.current.focus()

  const submit = () => { 
    setView(name)
    setName('')
  }

  const lengthName = useMemo(() => {
    return view.length
  }, [view])
  
  return (
    <View>
      <Input placeholder='Nome...' value={name} onChange={setName} inputRef={inputTextRef} />
      <Button label='Enviar' onClick={submit}/>
      <Text>{view}</Text>
      <Text>{lengthName}</Text>
      <Button label='Focus' onClick={focusInput} />
    </View>
  )
}

export { Hooks };