import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToDoList from "../ToDoList/ToDoList";
import OngoingTask from "../OngoingTask/OngoingTask";
import Complete from "../Complete/Complete";

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
        <TabPanel><ToDoList/></TabPanel>
        <TabPanel><OngoingTask/></TabPanel>
        <TabPanel><Complete/></TabPanel>
      </Tabs>
    </div>
  );
};

export default PreviousTask;
