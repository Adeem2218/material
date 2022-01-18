/* eslint-disable */
import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { Component } from "react";

class data extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      { Header: "ItemCode", accessor: "itemCode", align: "left" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "UPC", accessor: "upc", align: "left" },
      { Header: "Packing", accessor: "packing", align: "center" },
      { Header: "Item Type", accessor: "itemType", align: "center" },
      { Header: "Crop", accessor: "crop", align: "center" },
      { Header: "Category", accessor: "category", align: "center" },
      { Header: "Brand", accessor: "brand", align: "center" },
      { Header: "Master Unit", accessor: "masterPackingUnit", align: "center" },
      { Header: "Unit Price", accessor: "unitPrice", align: "center" },
      { Header: "Selling Price", accessor: "sellingPrice", align: "center" },
      { Header: "Purchase Price", accessor: "purchasePrice", align: "center" },
      { Header: "Item Status", accessor: "itemStatus", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ];
    const rows = [
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 2",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael 2
          </MDTypography>
        ),
        upc: "upc2",
        packing: "packing2",
        itemType: "raw",
        crop: "crop 2",
        category: "cat 2",
        brand: "brand 2",
        masterPackingUnit: "masterPackingUnit 2",
        unitPrice: "unitPrice 2",
        sellingPrice: "sellingPrice 2",
        purchasePrice: "purchasePrice 2",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        itemCode: "code 1",
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            John Michael
          </MDTypography>
        ),
        upc: "123",
        packing: "123",
        itemType: "raw",
        crop: "crop 1",
        category: "cat 1",
        brand: "brand 1",
        masterPackingUnit: "12",
        unitPrice: "12345",
        sellingPrice: "sell1",
        purchasePrice: "purchase1",
        itemStatus: "available",

        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ];

    return (
      <MDBox pt={2} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                mb={0}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Items List
                </MDTypography>
              </MDBox>
              <MDBox px={2}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  canSearch={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    );
  }
}

export default data;
