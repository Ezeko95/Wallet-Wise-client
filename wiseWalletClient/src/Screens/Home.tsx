
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { VictoryPie, VictoryTheme } from "victory-native";
import Home from '../components/home/Home'
import { Colors } from '../enums/Colors'


// const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR
  }
})

export default HomeScreen;
