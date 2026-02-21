import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props) {

    // console.log(props.informacion.strCategoryThumb);

    const [ocultar, setocultar] = useState(false)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setocultar(true)}>

            <Text>{props.informacion.strCategory}</Text>

            <Image
                style={styles.img}
                source={{ uri: props.informacion.strCategoryThumb }}
            />

            <Modal
                visible={ocultar}
                transparent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>

                        <Text style={{ fontSize: 40 }}>{props.informacion.strCategory}</Text>
                        <Image
                            width={350}
                            height={250}
                            source={{ uri: props.informacion.strCategoryThumb }}

                        />
                        <Text>{props.informacion.strCategoryDescription}</Text>

                        <Button title='cerrar' onPress={() => setocultar(false)} />

                    </View>

                </View>

            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        alignItems:'center',
        width: "90%",
        backgroundColor: "#405e5cff",
        padding: 40,
        borderRadius:20
    },

    modal: {
        backgroundColor: "#a0e9bb67",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        backgroundColor: "#603535ff",
        margin: 5
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
})