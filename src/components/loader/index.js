import React from "react";
import { ActivityIndicator } from "react-native";

const Loader = ({color = "#00b9ad", size ="large"}) => (
    <ActivityIndicator color={color} size={size} />
);

export default Loader;
