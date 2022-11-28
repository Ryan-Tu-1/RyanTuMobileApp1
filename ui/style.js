import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    label:{
        color:"purple"
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
        backgroundColor:'green',
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        color:'#fff',
        fontFamily: "Cursive",
        textAlign:'center'
    },
    addContactButton:{
        backgroundColor:'green',
        padding:5
    },
    addContactButtonText:{
        color:'#fff',
        fontFamily: "Cursive",
        textAlign:'center'
    },
    deleteContactButton:{
        backgroundColor:'red',
        padding:5
    },
    deleteContactButtonText:{
        color:'#fff',
        fontFamily: "Cursive",
        textAlign:'center'
    },
    saveButton:{
        backgroundColor:'green',
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: "Cursive"
    },
    cancelButton:{
        backgroundColor:'red',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: "Cursive",
    },  
    textInput:{
        backgroundColor:'#fff',
        borderColor:'green',
        borderWidth:2,
        borderWidth:3,
        margin:2.5,
        padding:2.5,
        fontWeight:2.5,
        fontFamily: "Cursive",
        textAlign:2.5,
        color:'black', 
        Width:50   
    },

    



}); 

export default theme; 