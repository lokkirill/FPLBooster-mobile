import React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function ProfileBackground(props) {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 574 201" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1="99.129%"
          x2="-2.589%"
          y1="60.341%"
          y2="43.735%"
        >
          <Stop offset="0%" stopColor="#963CFF" />
          <Stop offset="100%" stopColor="#37003C" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#prefix__a)"
        fillRule="evenodd"
        d="M0 52.273c39.997 20.1 84.334 37.4 128.55 48.823l-27.954 28.08c65.753 21.165 144.054 31.248 216.802 31.248l-39.954 40.133c12.93.732 15.63.336 28.743.336 94.656 0 185.857-19.386 267.813-54.356v-99.26c-67.658 36.861-154.368 63.357-234.518 71.8l46.937-47.154c-35.838 6.676-61.51 7.86-99.273 7.86-43.625 0-83.162-4.445-124.156-13.292l29.27-29.403C126.402 34.805 58.22 23.138 0 0v52.273z"
        filter="url(#prefix__b)"
      />
    </Svg>
  )
}

export default ProfileBackground
