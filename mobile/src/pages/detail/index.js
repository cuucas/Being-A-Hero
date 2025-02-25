import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logo from '../../assets/logo.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';



export default function Detail(){

	const route = useRoute();
	const incident = route.params.incident

	const navigation = useNavigation();
	const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', 
								{style: 'currency',
								 currency: 'BRL'
								}).format(incident.value)}`


	function navigateBack() {
		navigation.goBack()
	}

	function sendMail() {
		MailComposer.composeAsync({
			subject: `Herói do caso:${incident.title}`,
			recipients: [incident.email],
			body: message,

		})
	}

	function sendZap() {
		Linking.openURL(`Whatsapp://send?phone=21972255586&text=${message}`)

	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logo}/>
				<TouchableOpacity onPress={navigateBack}>
					<Feather name='arrow-left' size={28} color='#e82041'/>
				</TouchableOpacity>
					
				
				</View>
				<View style={styles.incident}>
					<Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
							<Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

							<Text style={styles.incidentProperty}>CASO:</Text>
							<Text style={styles.incidentValue}>{incident.title}</Text>

							<Text style={styles.incidentProperty}>VALOR:</Text>
							<Text style={styles.incidentValue}>
							{Intl.NumberFormat('pt-BR', 
								{style: 'currency',
								 currency: 'BRL'
								}).format(incident.value)}
							</Text>


		</View>
		<View style={styles.contactBox}>
			<Text style={styles.heroTitle}>Salve o Dia!</Text>
			<Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

			<Text style={styles.heroDescription}>Entre em contato:</Text>
			<View style={styles.actions}>
				<TouchableOpacity style={styles.action} onPress={sendZap}>
					<Text style={styles.actionText}>Whatsapp</Text>
					</TouchableOpacity>
			
			
			
				<TouchableOpacity style={styles.action} onPress={sendMail}>
					<Text style={styles.actionText}>E-Mail</Text>
					</TouchableOpacity>
			</View>
		

	</View>
</View>
		
);
}