import React, { useRef } from 'react';
import { View, SafeAreaView, Linking, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Avatar, Paragraph, Caption, Text } from 'react-native-paper';
import { useState } from 'react';

import { Form } from '@unform/mobile';

import { Input } from '../../components/Input';

import { Container, UrlContainer, SubmitButton, SubmitButtonText, LinkText, LinkContainer, ImageContainer, InfoFile } from './styles';

import { useAuth } from '../../contexts/auth';
import { useLink } from '../../contexts/links';

import axios from 'axios';

import api from '../../services/api';

const Home = () => {

  const { user } = useAuth();
  const { links } = useLink();

  const formRef = useRef(null);

  const [link, setLink] = useState('');

  async function shortnerUrl(data) {

    console.log(links
      
      
      )

    const api_key = '947fcb7883e636e0d59354b4d23feecca7f99'

    const { url } = data;

    const name = Math.random().toString(36).substring(7);

    if(url.includes('http://') || url.includes('https://')) {
      const res = await axios.get(`https://cutt.ly/api/api.php?key=${api_key}&short=${url}&name=${name}`)
      console.log(res.data.url.shortLink)
      setLink(res.data.url.shortLink)
      const ress = await api.post('/url', { original: url, curta: res.data.url.shortLink, idUsuario: user.id, data: new Date() } )
      console.log(ress.data);
    }
  }

  
  const renderLinks = ({ item }) => {

    console.log(item)

    return(


    <TouchableOpacity 
    onPress={() => Linking.openURL(item.curta)}
      style={{}}>
          <ImageContainer>
            <InfoFile>
            <Text>{item.curta}</Text>
            <Caption style={{ marginLeft: 12 }}>há {formatDistance(parseISO(item.data), new Date(), {
            locale: pt
          })}</Caption>
            </InfoFile>
          </ImageContainer>
    </TouchableOpacity>
    )};


  return (
    <View>
      <SafeAreaView>
      </SafeAreaView>
      
      <Container>
      <UrlContainer>
      <Form ref={formRef} onSubmit={shortnerUrl}>
          <Input 
            autoCorrect={false}
            name="url"
            placeholder="Url"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </Form>
        <SubmitButton title="shortner" onPress={() => formRef.current?.submitForm()}>
            <SubmitButtonText>SHORTEN URL</SubmitButtonText>
          </SubmitButton>
        </UrlContainer>
          <LinkText onPress={() => Linking.openURL(link)}>{link}</LinkText>
      </Container>

      <View style={{ flex: 1, minHeight: 300 }}>
      <FlatList data={links} keyExtractor={link => String(link.id)} renderItem={renderLinks} />
      </View> 
    </View>
  )
}

export default Home;