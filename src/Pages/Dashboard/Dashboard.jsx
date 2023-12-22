import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewTask from "../AddNewTask/AddNewTask";
import PreviousTask from "../../Components/PreviousTask/PreviousTask";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Previous Task</Tab>
            <Tab>Add New Task</Tab>
          </TabList>
          <TabPanel>
            <PreviousTask />
          </TabPanel>
          <TabPanel>
            <AddNewTask />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
