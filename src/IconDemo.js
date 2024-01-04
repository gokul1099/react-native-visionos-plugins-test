import React,{useState} from "react"
import {View,TouchableOpacity,ScrollView,Text} from 'react-native'
import ICON_SETS from "./icon-sets"
import IconListDemo from './IconListDemo'
import IconList from "./IconList"
 const IconDemo=()=>{
    const [currIcon,setCurrIcon] = useState(null)
    const onPress=(icon)=>{
        setCurrIcon(icon)
    }
    return(
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={{flex:1,margin:20,flexDirection:"row"}}>
                    <View style={{flex:0.5}}>
                    {
                        ICON_SETS.map((icon)=>{
                            return(
                                <TouchableOpacity onPress={()=>onPress(icon)}>
                                    <Text>{icon.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                    <View style={{flex:0.5}}>
                        {
                            currIcon && <IconList iconSet={currIcon}/>
                        }
                    </View>
                
                </View>
            </ScrollView>
    )
}

export default IconDemo