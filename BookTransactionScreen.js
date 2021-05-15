import React from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
import *as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component{
constructor(){
super()
this.state={
hasCameraPermissions:null,
scanned:false,
scannedBookId:'',
scannedStudentId:'',
buttonState='normal'
}

}
getCameraPermissions=async()=>{
const{status}=await Permissions.askAsync(Permissions.CAMERA);
this.setState({
hasCameraPermissions:status==="granted",
buttonState:id,
scanned:false
});
}
handleBarCodeScanned=async({type,data})=>{
const{buttonState}=this.state
if(buttonState==="BookId"){
this.setState({
scanned:true,
scannedData:data,
buttonState:'normal'
});

}    
else if(buttonState==="StudentId"){
this.setState({
scanned:true,
scannedData:data,
buttonState:'normal'
});
}
}

render(){
const hasCameraPermissions=this.state.hasCameraPermissions;
const scanned=this.state.scanned;
const buttonState=this.state.buttonState;

if(buttonState==="normal"&& hasCameraPermissions){
return(
<BarCodeScanner
onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
style={StyleSheet.absoluteFillObject}
/>
)
}
else if(buttonState==="normal"){
return(
<View style={styles.conatiner}>
<View>
<Image
source={require("../assets/booklogo.jpg")}
style={{width:200,height:200}}>
<Text style={{textAlign:'center',fontSize:30}}>wily</Text>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputBox}
placeholder="Book Id"
value={this.state.scannedBookId}/>
<TouchableOpacity
styles={styles.scanButton}
onPress={()=>{
this.getCameraPermissions("BookId")
}}>

<Text style={styles.buttonText}>scan</Text>

</TouchableOpacity>
</View>
<View style={syles.inputView}>
<TextInput
style={styles.inputBox}
placeholder="Student Id"
value={this.state.scannedStudentId}/>
<TouchableOpacity
style={styles.scanButton}
onPress={()=>{
this.getCameraPermissions

}}>

<Text style={styles.buttonText}>Scan Qr Code</Text>
</TouchableOpacity>
</View>
</View>
)

}
}

const styles=styleSheet.create({
constainer:{
flex:1,
justifyConetnt:'center',
alignItems:'center'
},

displayText:{
fontSize:15,
textDecorationLine:'underline'

},
scanButton:{
backgroundColor:'yellow',
padding:10,
margin:10

},

buttonText:{
fontSize:20,
textAlign:'center',
marginTop:10
},

inputView:{
flexDirection:'row',
margin:20

},

inputBox:{
width:200,
height:40,
borderWidth:1.5,
borderRightWidth:0,
fontSize:20
},

scanButton:{
backgroundColor:"grey",
width:50,
borderWidth:1.5,
borderLeftWidth:0
},

});
