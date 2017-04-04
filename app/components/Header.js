import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
	return(
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#f8f8f8',
		height: 60,
		paddingTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20
	}
})

export default Header;