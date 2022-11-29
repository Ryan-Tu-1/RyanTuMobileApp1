import { Text, View,Pressable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import {deleteUserAsync} from '../services/user.service'; 
import theme from '../style';

export default function Delete(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(r=>{
          if(r.status == 204){
            navigation.navigate("Index",{op:'delete',data:u}); 
            alert("Successful in deleting");
          }
        })
    }
    //JSX
    return (
      <View>
        <Text>Are you sure you want to delete this person?</Text>
        <Text style={theme.label}>Name:</Text>
        <Text>{u.firstName} {u.lastName}</Text>
        <Text style={theme.label}>Age:</Text>
        <Text>{u.age}</Text>
        <Text style={theme.label}>Email:</Text>
        <Text>{u.email}</Text>
        <Text style={theme.label}>Phone:</Text>
        <Text>{u.phone}</Text>
        <Text style={theme.label}>Department:</Text>
        <Text>{u.department}</Text>
        <Text style={theme.label}>Address:</Text>
        <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}`}</Text>
        <Pressable style={theme.deleteContactButton} onPress={submit}>
                <Text style={theme.deleteContactButtonText}>Delete</Text>
        </Pressable>    
      </View>
    ); 
  }