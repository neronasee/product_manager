import React from 'react';
import { Tab } from 'semantic-ui-react';

function generateTabs(tabs) {
  return tabs.map(tab => {
    return { menuItem: tab.name, render: () => <Tab.Pane>{tab.component}</Tab.Pane> };
  });
}

function TabLayout({ tabs }) {
  return <Tab panes={generateTabs(tabs)} />;
}

export default TabLayout;
