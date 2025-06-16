import {Pressable, Text, View, Button, StyleSheet} from "react-native";
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

  const currentMovie = movieData[movieIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <Movie movieData={currentMovie} image={images[currentMovie.image]} />

      <View style={styles.buttonContainer}>
        {movieData.map((movie, index) => (
          <Pressable
            key={index}
            onPress={() => setMovieIndex(index)}
            style={({ pressed }) => [
              styles.movieButton,
              pressed && { opacity: 0.75 },
              movieIndex === index && styles.movieButtonActive,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                movieIndex === index && styles.buttonTextActive,
              ]}
            >
              {movie.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  movieButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  movieButtonActive: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonTextActive: {
    color: "#fff",
  },
});
//     const opacityToggle = () => {
//         const [activeButton, setActiveButton] = useState(null);
//
//         const buttonPress = (buttonId) => {
//             setActiveButton(buttonId);
//         };
//
//         const renderButton = (buttonId, text, setMovieIndex) => {
//             const isActive = activeButton === buttonId;
//
//             return (
//                 <TouchableOpacity
//                     key={buttonId}
//                     onPress={() => buttonPress(buttonId)}
//                     style={[
//                         styles.button,
//                         isActive ? styles.activeButton : styles.inactiveButton,
//                     ]}
//                 >
//                     <Text>{text}</Text>
//                 </TouchableOpacity>
//             )
//         };
//
//         return (
//             <View style={styles.container}>
//                 {renderButton(1, "Button 1", 0)}
//                 {renderButton(2, "Button 2", 1)}
//                 {renderButton(3, "Button 3", 2)}
//             </View>
//         )
// //     };
// };
//
//
// //     const myButtons = () => {
// //         const [isPressed, setIsPressed] = useState(false);
// //         const buttonStyle = isPressed ? style.Pressed : style.unPressed;
// //     };
//
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Movie movieData={movieData[movieIndex]} image={images[movieData[movieIndex].image]}/>
// //       <View
// //         style={{
// //             marginTop: 0,
// //             marginHorizontal: 10,
// //             alignItems: "center",
// //             flexDirection: "row", gap: 20,
// //         }}
// //     >
// //       <Button title="First Movie" onPress={() => setMovieIndex((0))}/>
// //       <Button title="Second Movie" onPress={() => setMovieIndex((1))}/>
// //       <Button title="Third Movie" onPress={() => setMovieIndex((2))}/>
// //           </View>
// // {/*       <Button title="Switch movie" onPress={() => setMovieIndex((movieIndex + 1) % movieData.length)}/> */}
// //     </View>
// //   );
// // }
// //
// const styles = StyleSheet.create ({
//     unPressed: {
//         color: 'blue'
//     },
//     Pressed: {
//         color: 'red'
//     },
// });