import { Text, View } from "react-native";
import {useState} from "react";
import Movie from "./components/Movie.jsx";

const FotR = require("../assets/images/FotR.jpg");
const TTT = require("../assets/images/TTT.jpg");
const TRotK = require("../assets/images/TRotK.jpg");

const images = {"FotR": FotR, "TTT": TTT, "TRotK": TRotK};

import movieData from "../assets/movies.json";
console.log(movieData);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
