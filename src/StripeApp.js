import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import axios from 'axios'

const StripeApp = () => {
    const [email, setEmail] = useState('')
    const [cardDetails, setCardDetails] = useState()

    const { confirmPayment, loading } = useConfirmPayment()

    const fetchPaymentIntentClientSecret = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(`${process.env.API_URL}/create-payment-intent`, config)
    }

    const handlePay = async () => {

        if (!cardDetails?.complete || !email) {
            Alert.alert('Please enter Complete card details and Email')
            return
        }

        const billingDetails = {
            email: email,
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize='none'
                placeholder="Email ID"
                keyboardType='email-address'
                onChangeText={(value) => setEmail(value.nativeEvent.text)}
                style={styles.input}
            />
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={(cardDetails) => {
                    setCardDetails(cardDetails)
                }}
            />
            <TouchableOpacity
                onPress={handlePay}
                disabled={loading}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    Pay
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default StripeApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        gap: 20
    },
    input: {
        backgroundColor: '#efefef',
        borderRadius: 8,
        fontSize: 14,
        height: 50,
        padding: 10,
    },
    card: {
        backgroundColor: '#efefef',
        borderRadius: 8,
    },
    cardContainer: {
        height: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbe1ff',
        height: 50,
        borderRadius: 8,
    },
    buttonText: {
        color: '#4965ff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
