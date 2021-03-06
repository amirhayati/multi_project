import React,{useState} from 'react'
import {Text,StyleSheet,View,Dimensions,ImaPlatformge,TouchableOpacity,UIManager,LayoutAnimation} from 'react-native'
import Stars from 'react-native-stars'
import { Item } from 'native-base'



const Rait_sq =(props) => {
    return(
        <View style={[styles.sec2,]}>
            <View style={styles.sec2_part}>
                <Stars
                    half={true}
                    default={props.item.value}
                    default={3}
                    update={(val)=>{this.setState({stars: val})}}
                    spacing={2}
                    starSizeW={43}
                    starSizeH={7}
                    count={5}
                    fullStar={require('../../assets/img/full_sq.png')}
                    emptyStar={require('../../assets/img/empty_sq.png')}
                    halfStar={require('../../assets/img/half_sq_c.png')}
                />
                <Text style={[styles.text_size11,styles.text_color_gray]}>
                    {props.item.survey}
                </Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    sec2:{
        paddingTop:5,
        paddingBottom:10
    },
    sec2_part:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: 8
    },
    text_size13:{
        fontSize:17,
        color:'#333',
        marginLeft:5,
        fontFamily:'B Nazanin',
    },
    text_size11:{
        fontSize:10,
        marginLeft:5,
        fontFamily:'IRANSansMobile_Light',
        textAlign:'right',
    },
    text_color_lightGray:{
        color:'#bbb'
    },
    text_color_gray:{
        color:'#888'
    },
})

export default React.memo(Rait_sq)

