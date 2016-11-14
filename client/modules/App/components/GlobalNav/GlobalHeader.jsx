import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import AppModel, { getAppTitle } from '../AppModel/AppModel';

//
// Material-ui
//
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
// import DropDownMenu from 'material-ui/DropDownMenu';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import { darkWhite, white } from 'material-ui/styles/colors';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

// App Bar specific
// responsive? https://github.com/callemall/material-ui/issues/3614s
import AppBar from 'material-ui/AppBar';
// import ActionHome from 'material-ui/svg-icons/action/home';
// import FontIcon from 'material-ui/FontIcon';
import NavLogo from '../../nav-logo.svg';
// import SvgIcon from 'material-ui/SvgIcon';

const FontAwesome = require('react-fontawesome'); // example <FontAwesome name='rocket'/>


// Import Style
import styles2 from './GlobalHeader.css';

// Import Redux selectors
import { getCurrentAppId } from '../../AppReducer';

// Import Actions
import { setCurrentAppId } from '../../AppActions';
// import { switchLanguage } from 'modules/Intl/IntlActions';


// globalHeaderTitle 192,231,241
const styles = {
  logo: {
    button: {
      padding: '.1rem',
      width: 45,
      height: 45
    },
    icon: {
      width: 38,
      height: 38,
    },
  },
  globalHeaderTitle: {
    fontWeight: 300,
    color: 'rgb(192,231,241)',
    fontWeight: 500,
    letterSpacing: '.25px',
  },
  appSelector: {
    color: white,
    padding: 12,
    left: 12.
  },
  paperPopup: {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
  },
  actionMenu: {
    lineHeight: '48px',
    height: 48,
  },
  exampleImageInput: {
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

// components
const brandingLogo = (
  <IconButton tooltip="MEDfx Corporation" iconStyle={styles.logo.icon} style={styles.logo.button}>
    <img src={NavLogo} alt="Logo" />
  </IconButton>
);

const brandingName = (
  <FormattedMessage id="globalHeaderTitle"/>
);

// const appTitle = (props) => (
//   <a className={styles2['app-selector']} href="#" onClick={() => props.setCurrentAppId(2)}>
//     { props.currentAppId }
//     <FormattedMessage id="globalHeaderAppName"/>
//     <FontAwesome name='caret-down' style={{paddingLeft: 8, position: 'relative', top: -4, fontSize: '.6em'}}/>
//     {/*<FontAwesome name='chevron-down' style={{paddingLeft: 6, position: 'relative', top: -5, fontSize: '.5em'}}/>*/}
//   </a>
// );


// import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

// Correct spacing issue with material-ui menus anchored on AppBar components. Fixes vertical centering
const MenuItemFixer = (text) => (
  <div style={styles.actionMenu}>{text}</div>
);

const ActionsMenu = (props) => (
  <div style={{height: 49, top: -1}}>
    <FlatButton
      label="Marcus Welby | CLINIC"
      labelPosition="before"
      labelStyle={{color: darkWhite, top: -1}}
      style={{height: 49, top: -8}}
      /*icon={<NavigationArrowDropDown />}*/
      />
    <IconMenu
      {...props}
      iconButtonElement={<IconButton><MoreVertIcon  hoverColor={'white'} /></IconButton>}
      iconStyle={{color: darkWhite}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem> <div style={styles.actionMenu}>English</div> </MenuItem>
      <MenuItem> <div style={styles.actionMenu}>French</div> </MenuItem>
      <Divider />
      <MenuItem> <div style={styles.actionMenu}>Sign out</div> </MenuItem>
    </IconMenu>
  </div>
);

import {Tabs, Tab} from 'material-ui/Tabs';


export class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      appChooserPopupVisible: false,
    };
    console.log("step 2: Construct GlobalHeader: appManager=" + Object.keys(props.appManager) + " currentAppId=" + props.currentAppId);
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAppChooserPopup() {

  }

  // App Chooser Popup machinery
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      appChooserPopupVisible: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      appChooserPopupVisible: false,
    });
  };

  // <a className={styles2['app-selector']} href="#" onClick={() => this.props.setCurrentAppId(2)}>
  appTitle = () => {
    return (
    <a className={styles2['app-selector']} href="#" onClick={this.handleTouchTap}>
      { getAppTitle(this.props.currentAppId) }
      {/* <FormattedMessage id="globalHeaderAppName"/> */}
      <FontAwesome name='caret-down' style={{paddingLeft: 8, position: 'relative', top: -4, fontSize: '.6em'}}/>
      {/*<FontAwesome name='chevron-down' style={{paddingLeft: 6, position: 'relative', top: -5, fontSize: '.5em'}}/>*/}
    </a>
  )};


// way to base rendering on what url we're on
// {
//   context.router.isActive('/', true)
// ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
// : null
// }

// Way to manually do html of App Selector dropdown
//   const languageNodes = props.intl.enabledLanguages.map(
//     lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
//   );
// which is like:
//  {/*Header.js: lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>*/}

render() {
    // console.log("step 5: GlobalHeader: appManager keys=" + Object.keys(this.props.appManager));
    // console.log("step 6: GlobalHeader: appManager.props keys=" + Object.keys(this.props.appManager.props));
    console.log("step 7: this.props.currentAppId=" + this.props.currentAppId);
    console.log("step 8: AppModel.apps=" + AppModel().apps + " getAppTitle=" + getAppTitle(2));

    return (
      <div>
      <AppBar
        iconElementLeft={ brandingLogo }
        title={
          <span>
            { brandingName }
            { this.appTitle() }
          </span>
        }
        titleStyle={styles.globalHeaderTitle}
        iconElementRight={ <ActionsMenu /> }
      >
        {/* Fixed 400x50 div to place centered controls */}
        <span style={{width: 400, height: 50, position: 'absolute', margin: '0px 0 0 -200px', left: '50%'}}>
          {/*<div style={{position: 'absolute', margin: 'auto', textAlign: 'center'}}>Hello</div> */}
          {/*<div style={{position: 'relative', top: '50%', left: '50%', transform: 'perspective(1px) translate(-50%, -50%)'}}>Hello</div>*/}
          {/*<div style={{position: 'relative', width: 'auto', top: '50%', left: '50%', transform: 'perspective(1px) translate(-50%, -50%)'}}><h3>besthellocenteringtext</h3></div>*/}
          <span style={{position: 'relative', margin: 'auto'}}>
            {/*<FontAwesome name='tachometer'/>*/}
            <Tabs>
              <Tab label="DASHBOARD">
                {/*<span>
                  <FontAwesome name='tachometer' />
                  <FormattedMessage id="globalHeaderDashboardShortcut" />
                </span>*/}
              </Tab>
              <Tab
                label="REPORTS"
              />
              <Tab
                label="MAILBOX"
              />
            </Tabs>
          </span>
        </span>
        {/*<div style={{position: 'absolute', margin: '0px 0 0 -50px', left: '50%'}}>Hello</div>

         /*
         anchorOrigin: {"horizontal":"right","vertical":"top"}
         targetOrigin: {"horizontal":"right","vertical":"top"}
         animation popover-animation-from-top

        */}
      </AppBar>
        <Popover
          open={this.state.appChooserPopupVisible}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            {AppModel().apps.map((listValue) => {
              return <MenuItem onTouchTap={() => {
                if (listValue.id != this.props.currentAppId) {
                  this.props.setCurrentAppId(listValue.id);
                }
                this.state.appChooserPopupVisible=false;
              }} >
                {MenuItemFixer(listValue.title)}
              </MenuItem>;
            })}
          </Menu>
        </Popover>
      </div>
    );
  }
}

GlobalHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  setCurrentAppId: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    currentAppId: getCurrentAppId(store),
  };
}

export default connect(mapStateToProps)(GlobalHeader);

/*
Consider way to bi-directionally wire props:
https://github.com/reactjs/redux/issues/1159
 // Which action creators does it want to receive by props?
 function mapDispatchToProps(dispatch) {
 return {
 handlePrev: (date) => dispatch(prevWeek(date)),
 handleNext: (date) => dispatch(nextWeek(date)),
 }
 }

 export default connect(
 mapStateToProps,
 mapDispatchToProps
 )(WeekBar)
 */
