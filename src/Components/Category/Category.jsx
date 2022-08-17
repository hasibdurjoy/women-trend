import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCategory from "./AllCategory";

const Category = () => {
  const tabInfo = [
    { name: "All", content: "This is from tab1" },
    { name: "Dress", content: "This is from tab2" },
    { name: "Shoes", content: "This is from tab3" },
    { name: "Bags", content: "This is from tab4" },
    { name: "Jeans", content: "This is from tab5" },
  ];
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Category</h2>
      <Tabs>
        <TabList>
          {tabInfo.map((tabI) => {
            return <Tab>{tabI.name}</Tab>;
          })}
        </TabList>
        {tabInfo.map((tabI) => {
          return (
            <TabPanel>
              <AllCategory />
            </TabPanel>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Category;
