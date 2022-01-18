// /* eslint-disable */
import * as React from "react";
import axios from "axios";
import { Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import { SnackbarProvider, useSnackbar } from "notistack";
import SaveIcon from "assets/images/save_final.png";

class DeleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCode: "",
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDataChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/", this.state);
    if (res.data.status === 200) {
      // const varient = "success";
      // // variant could be success, error, warning, info, or default
      // enqueueSnackbar("This is a success message!", { varient });
    }
  };

  render() {
    const { itemCode } = this.state;
    return (
      <MDBox pt={2} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card onSubmit={this.saveItem}>
              <MDBox
                // mx={2}
                // mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Delete Item
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <form onSubmit={this.handleChange}>
                  <Grid container>
                    <Grid item xs={12} py={1} pr={1}>
                      <MDTypography fontWeight="light">
                        Delete Item Code:
                        <span className="text-danger">*</span>
                      </MDTypography>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Item Code"
                        variant="outlined"
                        name="itemCode"
                        value={itemCode}
                        required
                        onChange={this.handleDataChange}
                      />
                    </Grid>
                    <Grid item xs={12} py={1} pr={1}>
                      <button
                        type="submit"
                        className="btn btn-sm rounded-3 d-flex align-content-center p-0  "
                      >
                        <img
                          className="my-2 rounded-3 align-content-end mx-auto btn"
                          mx="auto"
                          src={SaveIcon}
                          alt=""
                          width="105"
                          height="45"
                        />
                      </button>
                    </Grid>
                  </Grid>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    );
  }
}

export default DeleteItem;
