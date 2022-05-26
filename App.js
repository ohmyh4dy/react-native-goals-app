import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
	const [courseGoalsList, setCourseGoalsList] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const cancelAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	const addGoalHandler = (enteredGoalInput) => {
		setCourseGoalsList((prevCourseGoalsList) => [
			...prevCourseGoalsList,
			{ id: Math.random().toString(), text: enteredGoalInput },
		]);
		cancelAddGoalHandler();
	};

	const deleteGoalHandler = (id) => {
		setCourseGoalsList((prevCourseGoalsList) =>
			prevCourseGoalsList.filter((courseGoal) => courseGoal.id !== id)
		);
	};

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add A New Goal'
					color='#5e0acc'
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={cancelAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoalsList}
						renderItem={({ item }) => {
							return (
								<GoalItem
									text={item.text}
									id={item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});

export default App;
