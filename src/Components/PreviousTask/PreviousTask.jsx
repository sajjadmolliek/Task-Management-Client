import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PreviousTask = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>To-do List</Tab>
          <Tab>Ongoing Task</Tab>
          <Tab>Complete Task</Tab>
        </TabList>
        <TabPanel>To-do List</TabPanel>
        <TabPanel>Ongoing Task</TabPanel>
        <TabPanel>Complete Task</TabPanel>
      </Tabs>
    </div>
  );
};

export default PreviousTask;
