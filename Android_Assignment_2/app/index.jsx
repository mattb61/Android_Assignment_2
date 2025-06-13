import {TouchableOpacity, Text, View, Button, StyleSheet} from "react-native";
import {useState} from "react";
import Movie from "./components/Movie.jsx";

const FotR = require("../assets/images/FotR.jpg");
const TTT = require("../assets/images/TTT.jpg");
const TRotK = require("../assets/images/TRotK.jpg");

const images = {"FotR": FotR, "TTT": TTT, "TRotK": TRotK};

import movieData from "../assets/movies.json";
console.log(movieData);

export default function Index() {

    const [movieIndex, setMovieIndex] = useState(0);
    const opacityToggle = () => {
        const [activeButton, setActiveButton] = useSate(null);

        const buttonPress = (buttonId) => {
            setActiveButton(buttonId);
        };

        const renderButton = (buttonId, text) => {
            const isActive = activeButton == buttonId;
            return (
                <TouchableOpacity
                    key={buttonId}
                    onPress={() => buttonPress(buttonId)}
                    style={[
                        styles.button,
                        isActive ? styles.activeButton : styles.inactiveButton
                    ]}
                >
                    <Text>{text}</Text>
                </TouchableOpacity>
             }

        return (
            <View style={styles.container}>
                {renderButton(1, "Button 1")}
                {renderButton(1, "Button 2")}
                {renderButton(1, "Button 3")}
            </View>
        );
    };


//     const myButtons = () => {
//         const [isPressed, setIsPressed] = useState(false);
//         const buttonStyle = isPressed ? style.Pressed : style.unPressed;
//     };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Movie movieData={movieData[movieIndex]} image={images[movieData[movieIndex].image]}/>
//       <View
//         style={{
//             marginTop: 0,
//             marginHorizontal: 10,
//             alignItems: "center",
//             flexDirection: "row", gap: 20,
//         }}
//     >
//       <Button title="First Movie" onPress={() => setMovieIndex((0))}/>
//       <Button title="Second Movie" onPress={() => setMovieIndex((1))}/>
//       <Button title="Third Movie" onPress={() => setMovieIndex((2))}/>
//           </View>
// {/*       <Button title="Switch movie" onPress={() => setMovieIndex((movieIndex + 1) % movieData.length)}/> */}
//     </View>
//   );
// }
//
const styles = StyleSheet.create ({
    unPressed: {
        color: 'blue',
    },
    Pressed: {
        color: 'red'
    }
})
