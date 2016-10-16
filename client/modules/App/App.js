import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavLogo from './nav-logo.svg';
// import SvgIcon from 'material-ui/SvgIcon';

const FontAwesome = require('react-fontawesome'); // example <FontAwesome name='rocket'/>


// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

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
            <AppBar
              title="Title"
              iconElementLeft={
                <div>
                  <IconButton tooltip="MEDfx Corporation" iconStyle={{ width: 38, height: 38 }} style={{ padding: '.1rem', width: 45, height: 45 }}>
                    <img src={NavLogo} alt="Logo" />
                  </IconButton>
                  <FontAwesome name="rocket" />
                  <FlatButton
                    href="https://github.com/callemall/material-ui"
                    secondary
                    icon={<FontIcon className="fa fa-paw" />}
                    style={{ margin: 12 }}
                  />
                  {/* <IconButton tooltip="SVG Icon">
                    <ActionHome />
                  </IconButton> */}
                </div>
              }
              iconClassNameRight="muidocs-icon-navigation-expand-more"
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

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
