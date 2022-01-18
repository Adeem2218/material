import React, { Component } from "react";
// import MaterialTable from "material-table";
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, Card, Grid } from "@mui/material";

class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DashboardLayout>
        <DashboardNavbar>
          <MDBox pt={4} pb={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Card>
                  <MDBox mx={2}>
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                        mb={2}
                        variant="gradient"
                        bgColor="info"
                        borderRadius="lg"
                        coloredShadow="dark"
                      />
                    </Box>
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </DashboardNavbar>
      </DashboardLayout>
    );
  }
}

export default Testing;
