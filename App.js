import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff' }}>
      <View style={{ padding:16 }}>
        <Text style={{ fontSize:22, fontWeight:'600', marginBottom:8 }}>Benvenuto 👋</Text>
        <Text style={{ color:'#666', marginBottom:16 }}>
          Base Expo pronta da iPhone: lista con stato in memoria volatile (per TestFlight va benissimo).
        </Text>

        <View style={{ flexDirection:'row', gap:8, alignItems:'center', marginBottom:16 }}>
          <TextInput
            style={{ flex:1, borderWidth:1, borderColor:'#ddd', padding:10, borderRadius:8 }}
            placeholder="Titolo…"
            value={text}
            onChangeText={setText}
          />
          <Button title="Aggiungi" onPress={() => {
            if (text.trim().length === 0) return;
            setItems([{ id: Date.now().toString(), title: text }, ...items]); setText('');
          }} />
        </View>

        <FlatList
          data={items}
          keyExtractor={(i)=>i.id}
          renderItem={({ item }) => (
            <View style={{ paddingVertical:10, borderBottomWidth:1, borderBottomColor:'#eee' }}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
