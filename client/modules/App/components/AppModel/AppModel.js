import React from 'react';
import { FormattedMessage } from 'react-intl';

// consider using global context
// https://facebook.github.io/react/docs/context.html

// write test/reducer_spec.js like test.
// see http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/
const appModelData = {
  apps: [
    {id: 1, title: 'Care Manager', statusTmp: 'active', editingTmp: false},
    {id: 2, title: 'Referrals Manager', statusTmp: 'active', editingTmp: false},
    {id: 3, title: 'Admin', statusTmp: 'active', editingTmp: false},
  ],
  currentId: 1,
};

export function AppModel() {
  return (appModelData
  );
}

export function getAppTitle(id) {
  let title;
  AppModel().apps.map(
    function(listValue){
      if (listValue.id == id) {
        title = listValue.title;
      }
    }
  );
  return title;
}

export default AppModel;
