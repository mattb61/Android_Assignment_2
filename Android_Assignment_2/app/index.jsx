import {Text, View, Button} from "react-native";
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Movie movieData={movieData[movieIndex]} image={images[movieData[movieIndex].image]}/>
      <Button title="Switch movie" onPress={() => setMovieIndex((movieIndex + 1) % movieData.length)}/>
    </View>
  );
}
