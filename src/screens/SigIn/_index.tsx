import React, { useState }  from "react";
import {View, Text, TextInput} from 'react-native'

import { styles } from "./style";

export function SigIn(){
    const [text, setText] = useState('Ola');
    

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>

            <TextInput 
                style={styles.input}
                // onChangeText={(value) => setText(value)}    
                onChangeText={setText}    
            />


            <Text>
                Você digitou: {text}
            </Text>
        </View>
    );
}