import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// export function Footer() {
//   return (
//     <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
//       <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
//       <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
//     </div>
//   );
// }
//
// export default Footer;

function getApps() {
  return {
    app1: {
      title: "App Title1"
    },
    app2: {
      title: "App Title2"
    }
  }
}

const apps = getApps();


export class AppManager extends Component {
  constructor(props) {
    super(props);
    console.log("Step 0. did we get here?");
    this.state = { isMounted: false };
    this.title = <span>defaultState</span>;
    console.log("!!!! AppManager: " + JSON.stringify(this.state));
  }

  componentDidMount() {
    this.setState( {isMounted: true} ); // eslint-disable-line
  }

  // get title() {
  //   return <div>AppTitleGotten</div>;
  // }
  //
  // set title(value) {
  //   this.title = value;
  // }
  getTitle() {
    return "hello??";
  }

  // AppManagerTitle 192,231,241

  render() {
    return (
      <div>
        AppManager: no default rendering
      </div>
    );
  }
}

// AppManager.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(AppManager);
