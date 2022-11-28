import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    label:{
        fontWeight:'bold'
    },
    userTile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#000',
        padding:5,
        margin:5
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userTileButton:{
        backgroundColor:'blue',
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    addContactButton:{
        backgroundColor:'green',
        padding:5
    },
    addContactButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    deleteContactButton:{
        backgroundColor:'red',
        padding:5
    },
    deleteContactButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    saveButton:{
        backgroundColor:'blue',
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    cancelButton:{
        backgroundColor:'red',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        color:'#fff',
        textAlign:'center'
    },  
    textInput:{
        backgroundColor:'#fff',
        borderColor:'green',
        borderWidth:2,
        borderWidth:3,
        margin:2.5,
        padding:2.5,
        fontWeight:2.5,
        textAlign:2.5,
        color:'black', 
        Width:50   
    },
    label:{
        color:'green',
    },
    



}); 

export default theme; 