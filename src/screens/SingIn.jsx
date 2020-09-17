import React, { useRef } from 'react'
import { TouchableOpacity, SafeAreaView, StatusBar, } from 'react-native';
import { Form } from '@unform/mobile';

import { Input } from '../components/Input';

import { useAuth } from '../../src/contexts/auth';

import {
  Container,
  HeaderBackground,
  PanelLogin,
  Footer,
  SubmitButton,
  SubmitButtonText,
} from './styles';


const SingIn = () => {
  const formRef = useRef(null);

  const { singIn } = useAuth();

  const handleSingIn = (data) => {
    singIn(data);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#862623" />
      <HeaderBackground imageStyle={{ borderBottomLeftRadius: 100 }} source={require('./bg.png')}>
        <SafeAreaView>

        </SafeAreaView>
      </HeaderBackground>
      
      <PanelLogin>
        <Form ref={formRef} onSubmit={handleSingIn}>
          <Input 
            autoCorrect={false}
            name="login"
            placeholder="Login"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <Input 
            secureTextEntry
            returnKeyType="send"
            name="senha" 
            placeholder="Password"
            autoCapitalize="none"
          />
          <TouchableOpacity />
          <SubmitButton title="Sign in" onPress={() => formRef.current?.submitForm()}>
            <SubmitButtonText>SING IN</SubmitButtonText>
          </SubmitButton>
        </Form>
      </PanelLogin>
      <Footer />
    </Container>
  )
}

export default SingIn;