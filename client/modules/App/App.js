import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { getCurrentAppId } from './AppReducer';

//
// Material-ui
//

// temporary workaround https://github.com/callemall/material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// const muiTheme = getMuiTheme(lightBaseTheme);
import MedfxTheme from '../../MedfxTheme';

// default server side userAgent to 'all' (#4) to avoid annoying warning
if (typeof navigator === 'undefined') {
  global.navigator = { userAgent: 'all' };
}
const muiTheme = getMuiTheme(lightBaseTheme, MedfxTheme);

// App Bar specific
// responsive? https://github.com/callemall/material-ui/issues/3614s
import AppBar from 'material-ui/AppBar';
// import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavLogo from './nav-logo.svg';
// import SvgIcon from 'material-ui/SvgIcon';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



const FontAwesome = require('react-fontawesome'); // example <FontAwesome name='rocket'/>


// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import AppManager from './components/AppManager/AppManager'
import GlobalHeader from './components/GlobalNav/GlobalHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { setCurrentAppId, toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

var apps = {
  app1: {
    title: "App Title1!"
  },
  app2: {
    title: "App Title2!"
  }
};

console.log("step 1: init: " + JSON.stringify(apps));

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    //debugger;
    console.log("App: Step 1a: props=: " + Object.keys(this.props));
    console.log("App: Step 1b: foobar: " + this.props.foobar);
    console.log("App: Step 1c: appManager: " + this.props.appManager.getTitle);
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Care Manager"
            titleTemplate="%s - Care Manager App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <MuiThemeProvider muiTheme={muiTheme}>
            <GlobalHeader
              foobar={this.props.foobar} appManager={this.props.appManager} poocurrentAppId={this.props.currentAppId}
              setCurrentAppId={currentAppId => this.props.dispatch(setCurrentAppId(currentAppId))}
          />
          </MuiThemeProvider>
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// App.defaultProps = {
//   appManager: <AppManager />
// };

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    foobar: "it worked!",
    appManager: (<AppManager />),
    currentAppId: getCurrentAppId(store),
  };
}

export default connect(mapStateToProps)(App);
