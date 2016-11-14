import Spacing from 'material-ui/styles/spacing';
import { white, cyan500 } from 'material-ui/styles/colors';
// import ColorManipulator from 'material-ui/utils/colorManipulator';


// find properties to override here https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
// or here ./node_modules/material-ui/styles/getMuiTheme.js

export default {
  fontFamily: '"Source Sans Pro", sans-serif',
  palette: {
    primary1Color: cyan500,
  },
  appBar: {
    height: 50,
    textColor: white,
  },
};

/*
 appBar: {
 color: palette.primary1Color,
 textColor: palette.alternateTextColor,
 height: spacing.desktopKeylineIncrement,
 titleFontWeight: _typography2.default.fontWeightNormal,
 padding: spacing.desktopGutter
 },

 primary2Color: cyan700,
 primary3Color: Colors.lightBlack,
 accent1Color: Colors.pinkA200,
 accent2Color: Colors.grey100,
 accent3Color: Colors.grey500,
 textColor: Colors.deepPurpleA700,
 alternateTextColor: Colors.white,
 canvasColor: Colors.white,
 borderColor: Colors.grey300,
 disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
 pickerHeaderColor: Colors.cyan500,
 */
