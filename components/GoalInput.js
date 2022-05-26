import { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
	const [enteredGoalInput, setEnteredGoalInput] = useState('');

	const goalInputHandler = (enteredGoal) => {
		setEnteredGoalInput(enteredGoal);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoalInput);
		setEnteredGoalInput('');
	};

	return (
		<Modal animationType='slide' visible={visible}>
			<View style={styles.inputContainer}>
				<Image
					source={require('../assets/images/goal.png')}
					style={styles.image}
				/>
				<TextInput
					style={styles.inputText}
					placeholder='Enter your course goal'
					// placeholderTextColor='#ccc'
					onChangeText={goalInputHandler}
					value={enteredGoalInput}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} color='#f31282' />
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#311b6b',
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	inputText: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		borderRadius: 3,
		backgroundColor: '#e4d0ff',
		width: '100%',
		padding: 8,
		color: '#120438',
	},
	button: {
		marginTop: 20,
		width: '30%',
		marginHorizontal: 10,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

export default GoalInput;
