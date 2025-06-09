import React from "react";
import { View, StyleSheet } from "react-native";
import LogoEiraSalud from "../../../assets/images/logoEiraSalud.svg";

const Logo = ({ size = 120 }: { size?: number }) => {
  return (
    <View style={styles.logoWrapper}>
      <LogoEiraSalud width={size} height={size} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    margin:10,
  },
});