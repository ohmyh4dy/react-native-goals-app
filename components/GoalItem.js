import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, id, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDeleteItem.bind(this, id)}
				android_ripple={{ color: '#210644' }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: '#5e0acc',
		borderRadius: 5,
		margin: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: '#FFF',
		padding: 8,
	},
});

export default GoalItem;
