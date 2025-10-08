import React from "react";

const Installation = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div>
        <h1>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <h2>
          <span>({})</span> Apps Found
        </h2>
      </div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Installation;
