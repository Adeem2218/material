/* eslint-disable */
import * as React from "react";
import { Box, Card, Grid, Tab, Tabs, TabsContext } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import ListItems from "layouts/Items/data/itemsTableData";

import AddItem from "./addItem";
import EditItem from "./editItems";
import DeleteItem from "./deleteItem";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = async (event, newValue) => {
    await this.setState({ value: newValue });
  };

  render() {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={4} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox>
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={this.state.value}>
                      <MDBox
                        mx={2}
                        mt={-4}
                        py={2}
                        px={2}
                        mb={0}
                        variant="gradient"
                        bgColor="info"
                        borderRadius="lg"
                        coloredShadow="dark"
                      >
                        <Tabs
                          selectionFollowsFocus
                          onChange={this.handleChange}
                          aria-label="lab API tabs example"
                          sx={{
                            background: "primary",
                          }}
                        >
                          <Tab label="Items" value="1" />
                          <Tab label="Add New Item" value="2" />
                          <Tab label="Edit Item" value="3" />
                          <Tab label="Delete Item" value="4" />
                        </Tabs>
                      </MDBox>
                      <TabPanel value="1">
                        <ListItems />
                      </TabPanel>
                      <TabPanel value="2">
                        <MDBox>
                          <AddItem />
                        </MDBox>
                      </TabPanel>
                      <TabPanel value="3">
                        <MDBox>
                          <EditItem />
                        </MDBox>
                      </TabPanel>
                      <TabPanel value="4">
                        <MDBox>
                          <DeleteItem />
                        </MDBox>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    );
  }
}

export default Items;
