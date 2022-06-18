import { Button, SafeAreaView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  AspectRatio, Box, FlatList, Spinner, HStack, Image, NativeBaseProvider, ScrollView, Stack } from "native-base";
import { Services } from '../service/Services';
import moment from 'moment'

const All = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    Services('general')
    .then(data => {
      setNewsData(data)
  })
    .catch(error => {
      alert(error);
    })
  }, [])
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Trending News</Text>
        </View>  
      
      <SafeAreaView > 
        {newsData.length > 1 ? (
           <FlatList 
           data={newsData} 
           renderItem={({item}) => (
             <Box alignItems="center" style={styles.newsCont}>
           <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
           borderColor: "coolGray.600",
           backgroundColor: "gray.700"
         }}  >
             <Box>
               <AspectRatio w="100%" ratio={16 / 9}>
                 <Image source={{ uri: item.urlToImage}} alt="image" />
               </AspectRatio>
             </Box>
             <Stack p="4" space={3} style={styles.stac}>
               <Stack space={2}>
                 <Text size="md" ml="-1" style={styles.title}>
                   {item.title}
                 </Text>
                 <Text fontSize="xs" _light={{
                 color: "violet.500"
               }} _dark={{
                 color: "violet.400"
               }} fontWeight="500" ml="-0.5" mt="-1">
                   {item.source.name}
                 </Text>
               </Stack>
               <Text style={styles.descr}>
                 {item.description}
               </Text>
               <HStack alignItems="center" space={4} >
                 <HStack alignItems="center" >
                 <Text color="coolGray.600" _dark={{
                   color: "warmGray.200"
                 }} fontWeight="400">
                     {moment(item.publishedAt).startOf('hour').fromNow()}
                   </Text> 
                       
                 </HStack>
                
               </HStack>
             </Stack>
           </Box>
         </Box>
       )}
           keyExtractor={(item, index) => 'key' + index} />
        ) : (
          <View style={styles.Spinner}>
             <Spinner color="emerald.500" size="lg" />
          </View>
          
        )}     
     
      </SafeAreaView>   
    </View>
    </NativeBaseProvider>
  )
}

export default All

const styles = StyleSheet.create({
  container:{
    textAlign: 'center',
    padding: 45,
    backgroundColor: '#bdbdbd',
    
  },
  text: {
    fontSize: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  newsCont:{
    padding: 20,
    
  },
  Newviwe: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  descr:{
    fontSize: 16,
    marginTop: 10,
  },
  stac:{
    backgroundColor: '#e0e0e0',
  },
  btn:{
    display: 'flex',
justifyContent: 'flex-end',
  },
  spinner: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
height: 800,
  },
})