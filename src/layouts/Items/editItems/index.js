/* eslint-disable */

import * as React from "react";
import axios from "axios";
// import swal from "sweetalert";

// @mui material components
import { Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import TextareaAutosize from '@mui/base/TextareaAutosize';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import SaveIcon from "assets/images/save_final.png";

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCode: "",
      description: "",
      localPurchaseAccount: "",
      importPurchaseAccount: "",
      saleAccount: "",
      upc: "",
      itemType: "",
      varietyType: "",
      crop: "",
      category: "",
      subCategory: "",
      brand: "",
      masterPackingUnit: "",
      unitPrice: "",
      sellingPrice: "",
      purchasePrice: "",
      itemStatus: "",
      editItemCode: "",
      itemAvailability: false,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Data = this.Data.bind(this);
  }

  handleDataChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = async (e) => {
    e.preventDefault();
    const { itemAvailability, editItemCode } = this.state;
    console.log(itemAvailability);
    console.log(editItemCode);
    if (editItemCode === "1234") {
      await this.setState({ itemAvailability: true });
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = ({
      itemCode,
      description,
      localPurchaseAccount,
      importPurchaseAccount,
      saleAccount,
      upc,
      itemType,
      varietyType,
      crop,
      category,
      subCategory,
      brand,
      masterPackingUnit,
      unitPrice,
      sellingPrice,
      purchasePrice,
      itemStatus,
    } = this.state);
    const res = await axios.post("http://localhost:8000/api/", data);
    if (res.data.status === 200) {
      console.log(res.data);
      console.log(res.data.message);
    }
  };

  Data = () => {
    const {
      itemCode,
      description,
      localPurchaseAccount,
      importPurchaseAccount,
      saleAccount,
      upc,
      packing,
      itemType,
      varietyType,
      crop,
      category,
      subCategory,
      brand,
      masterPackingUnit,
      unitPrice,
      sellingPrice,
      purchasePrice,
      itemStatus,
      editItemCode,
      itemAvailability,
    } = this.state;
    if (editItemCode === "") {
      console.log("editItemCode null " + editItemCode);
    }
    if (editItemCode !== "") {
      console.log("editItemCode not null " + editItemCode);
    }

    return itemAvailability ? (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={4} py={1} pr={1}>
            <MDTypography fontWeight="light">
              Item Code:
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
          <Grid item xs={8} py={1} pl={1}>
            <MDTypography fontWeight="light">
              Description:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
              name="description"
              value={description}
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item xs={4} py={1} pr={1}>
            <MDTypography fontWeight="light">
              Local Purchase Account:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Local Purchase Account"
              variant="outlined"
              value={localPurchaseAccount}
              name="localPurchaseAccount"
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item xs={4} p={1}>
            <MDTypography fontWeight="light">
              Import Purchase Account:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Import Purchase Account"
              variant="outlined"
              value={importPurchaseAccount}
              name="importPurchaseAccount"
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item xs={4} py={1} pl={1}>
            <MDTypography fontWeight="light">
              Sale Account:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Sale Account"
              variant="outlined"
              name="saleAccount"
              value={saleAccount}
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item py={1} pr={1} xs={3}>
            <MDTypography fontWeight="light">UPC:</MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="UPC"
              variant="outlined"
              name="upc"
              value={upc}
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item py={1} px={1} xs={3}>
            <MDTypography fontWeight="light">Packing:</MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Packing"
              variant="outlined"
              name="packing"
              value={packing}
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item py={1} px={1} xs={3}>
            <MDTypography fontWeight="light">Item Type:</MDTypography>
            <FormControl fullWidth>
              <InputLabel id="item-type-select-label">Item Type</InputLabel>
              <Select
                className="py-2"
                labelId="item-type-select-label"
                id="item-type-select"
                value={itemType}
                name="itemType"
                label="Item Type"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Finished Product</MenuItem>
                <MenuItem value={2}>Semi Finished Product</MenuItem>
                <MenuItem value={3}>Raw Material</MenuItem>
                <MenuItem value={4}>Packing Material</MenuItem>
                <MenuItem value={5}>Consumable</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item py={1} pl={1} xs={3}>
            <MDTypography fontWeight="light">Variety Type:</MDTypography>
            <FormControl fullWidth>
              <InputLabel id="Status-select-label">Variety Type</InputLabel>
              <Select
                className="py-2"
                labelId="Status-select-label"
                id="Status-select"
                value={varietyType}
                name="varietyType"
                label="Variety Type"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>HYBRID</MenuItem>
                <MenuItem value={2}>OP</MenuItem>
                <MenuItem value={3}>MISC</MenuItem>
                <MenuItem value={4}>Packing</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item py={1} pr={1} xs={4}>
            <MDTypography fontWeight="light">Crop:</MDTypography>
            <FormControl fullWidth>
              <InputLabel id="crop-select-label">Crop</InputLabel>
              <Select
                className="p-2 select-2"
                labelId="crop-select-label"
                id="crop-select"
                value={crop}
                label="Crop"
                name="crop"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>FIELD CROPS 1</MenuItem>
                <MenuItem value={2}>FIELD CROPS 2</MenuItem>
                <MenuItem value={3}>VEGITABLES</MenuItem>
                <MenuItem value={4}>MISC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item py={1} px={1} xs={4}>
            <MDTypography fontWeight="light">
              Category:
              <span className="text-danger">*</span>
            </MDTypography>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                className="p-2 select-2"
                labelId="category-select-label"
                id="category-select"
                value={category}
                label="Category"
                name="category"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={6}>BAJRA HYBRID</MenuItem>
                <MenuItem value={56}>BAJRA MULTICUT</MenuItem>
                <MenuItem value={8}>BARSEEM</MenuItem>
                <MenuItem value={84}>BEET</MenuItem>
                <MenuItem value={57}>BHINDI HYB</MenuItem>
                <MenuItem value={4}>BHINDI OP</MenuItem>
                <MenuItem value={9}>BRINJAL</MenuItem>
                <MenuItem value={10}>BROCCOLI</MenuItem>
                <MenuItem value={11}>CABBAGE</MenuItem>
                <MenuItem value={68}>CABBAGE BULK</MenuItem>
                <MenuItem value={80}>CANOLA</MenuItem>
                <MenuItem value={12}>CARROT</MenuItem>
                <MenuItem value={67}>CAULIFLOWER BULK</MenuItem>
                <MenuItem value={13}>CAULIFLOWER HYB</MenuItem>
                <MenuItem value={83}>COTTON SEED</MenuItem>
                <MenuItem value={63}>CUCUMBER BULK</MenuItem>
                <MenuItem value={15}>CUCUMBER HYB</MenuItem>
                <MenuItem value={16}>DHANIYA</MenuItem>
                <MenuItem value={59}>FABRIC</MenuItem>
                <MenuItem value={51}>FERTILIZER </MenuItem>
                <MenuItem value={17}>FREEGROW</MenuItem>
                <MenuItem value={5}>RENCH BEAN</MenuItem>
                <MenuItem value={79}>GUAR BEAN</MenuItem>
                <MenuItem value={18}>HALWA KADU</MenuItem>
                <MenuItem value={19}>HOT PEPPER</MenuItem>
                <MenuItem value={21}>KARELA</MenuItem>
                <MenuItem value={22}>LAUKI </MenuItem>
                <MenuItem value={66}>LAUKI BULK</MenuItem>
                <MenuItem value={23}>LETTUCE</MenuItem>
                <MenuItem value={24}>LUCERENE</MenuItem>
                <MenuItem value={25}>MAIZE</MenuItem>
                <MenuItem value={27}>MATHRAY</MenuItem>
                <MenuItem value={28}>MELON</MenuItem>
                <MenuItem value={55}>MISC.</MenuItem>
                <MenuItem value={52}>MONGRA</MenuItem>
                <MenuItem value={82}>MUSTARD</MenuItem>
                <MenuItem value={30}>ONION</MenuItem>
                <MenuItem value={70}>PACKING MATERIAL</MenuItem>
                <MenuItem value={73}>PADDY HYBRID</MenuItem>
                <MenuItem value={31}>PADDY OP</MenuItem>
                <MenuItem value={32}>PALAK</MenuItem>
                <MenuItem value={81}>PAPAYA</MenuItem>
                <MenuItem value={33}>PEAS</MenuItem>
                <MenuItem value={76}>PEAT</MenuItem>
                <MenuItem value={75}>PLASTIC SEEDLING TRAY</MenuItem>
                <MenuItem value={35}>RADISH</MenuItem>
                <MenuItem value={36}>RICE</MenuItem>
                <MenuItem value={69}>RICE EXPORT</MenuItem>
                <MenuItem value={38}>RIDGE GOURD</MenuItem>
                <MenuItem value={74}>RYEGRASS</MenuItem>
                <MenuItem value={39}>SORGHUM</MenuItem>
                <MenuItem value={40}>SPONGE GOURD</MenuItem>
                <MenuItem value={41}>SQUASH</MenuItem>
                <MenuItem value={42}>SUGARBEET</MenuItem>
                <MenuItem value={43}>SUNFLOWER</MenuItem>
                <MenuItem value={44}>SWEET PEPPER</MenuItem>
                <MenuItem value={45}>TAR</MenuItem>
                <MenuItem value={46}>TINDA</MenuItem>
                <MenuItem value={47}>TOMATO HYB</MenuItem>
                <MenuItem value={58}>TOMATO OP</MenuItem>
                <MenuItem value={48}>TURNIP </MenuItem>
                <MenuItem value={29}>VEGETABLE NET</MenuItem>
                <MenuItem value={60}>WATERMELON BULK</MenuItem>
                <MenuItem value={49}>WATERMELON HYB</MenuItem>
                <MenuItem value={61}>WATERMELON OP</MenuItem>
                <MenuItem value={50}>WHEAT</MenuItem>
                <MenuItem value={72}>WIRE</MenuItem>
                <MenuItem value={78}>ZINC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} py={1} pl={1}>
            <MDTypography fontWeight="light">Sub Category:</MDTypography>
            <FormControl fullWidth>
              <InputLabel id="sub-category-select-label">Sub Category</InputLabel>
              <Select
                className="p-2 select-2"
                labelId="sub=category-select-label"
                id="sub=category-select"
                value={subCategory}
                name="subCategory"
                label="Sub-Category"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>SC 1</MenuItem>
                <MenuItem value={2}>SC 2</MenuItem>
                <MenuItem value={3}>SC 3</MenuItem>
                <MenuItem value={4}>SC 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item py={1} pr={1} xs={4}>
            <MDTypography fontWeight="light">
              Brand:
              <span className="text-danger">*</span>
            </MDTypography>
            <FormControl fullWidth>
              <InputLabel id="brand-select-label">Brand</InputLabel>
              <Select
                className="p-2 select-2"
                labelId="brand-select-label"
                id="brand-select"
                value={brand}
                name="brand"
                label="Brand"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={272}>Advanta</MenuItem>
                <MenuItem value={279}>Afson</MenuItem>
                <MenuItem value={213}>Agrich China</MenuItem>
                <MenuItem value={275}>Agroempresa Argentina</MenuItem>
                <MenuItem value={119}>Agroimpex India</MenuItem>
                <MenuItem value={264}>Agropick Argentina</MenuItem>
                <MenuItem value={84}>Alf-Christianson US</MenuItem>
                <MenuItem value={189}>All Lucky Seed China</MenuItem>
                <MenuItem value={86}>Ambika Seed India</MenuItem>
                <MenuItem value={201}>Anhui Jianghuai</MenuItem>
                <MenuItem value={170}>Anhui Guohao China</MenuItem>
                <MenuItem value={239}>Anhui Tunfung</MenuItem>
                <MenuItem value={89}>Anseme Seed Italy</MenuItem>
                <MenuItem value={198}>April Wang China</MenuItem>
                <MenuItem value={225}>Argeto Turkey</MenuItem>
                <MenuItem value={211}>Arrow Seed</MenuItem>
                <MenuItem value={233}>Aus Bangla Agro</MenuItem>
                <MenuItem value={281}>Barkha Seed</MenuItem>
                <MenuItem value={111}>Bharat Agro India</MenuItem>
                <MenuItem value={209}>Bio Motor China</MenuItem>
                <MenuItem value={91}>Biotong Seed Korea</MenuItem>
                <MenuItem value={92}>Birkel Seed</MenuItem>
                <MenuItem value={179}>Boly Seed Hungry</MenuItem>
                <MenuItem value={237}>Brotherton Seed USA</MenuItem>
                <MenuItem value={93}>Canterbury Seed Newzeland</MenuItem>
                <MenuItem value={278}>Carpel Seed</MenuItem>
                <MenuItem value={94}>Chia Tai Seed Thailand</MenuItem>
                <MenuItem value={221}>Civis Seed Hungry</MenuItem>
                <MenuItem value={241}>Classic Hybrid Seed India</MenuItem>
                <MenuItem value={210}>Cnus Vegetable China</MenuItem>
                <MenuItem value={175}>Crystal Crop Sciences India</MenuItem>
                <MenuItem value={254}>Darshan Seeds</MenuItem>
                <MenuItem value={256}>Dayal Seed China</MenuItem>
                <MenuItem value={265}>DLF Seeds Argentina</MenuItem>
                <MenuItem value={258}>Dong Oh Seeds</MenuItem>
                <MenuItem value={97}>Durga Seed India</MenuItem>
                <MenuItem value={262}>Eco Seeds / Robert Yoo</MenuItem>
                <MenuItem value={163}>El Seed Korea</MenuItem>
                <MenuItem value={99}>Farmer Seed India</MenuItem>
                <MenuItem value={234}>Fujian Kingsda Non-Woven</MenuItem>
                <MenuItem value={100}>Furia Seed Italy</MenuItem>
                <MenuItem value={102}>Ganga Seed India</MenuItem>
                <MenuItem value={273}>Genetika Seed Turkey</MenuItem>
                <MenuItem value={240}>Gh Industries China</MenuItem>
                <MenuItem value={257}>Gold Star India</MenuItem>
                <MenuItem value={164}>Green Has Italia</MenuItem>
                <MenuItem value={200}>Griffin Seed International USA</MenuItem>
                <MenuItem value={204}>Gunagdong Jin Hao China</MenuItem>
                <MenuItem value={105}>Harveson Philpine</MenuItem>
                <MenuItem value={215}>Hebei Tuosite Import &amp; Export</MenuItem>
                <MenuItem value={266}>Himalya Seed India(Khtan)</MenuItem>
                <MenuItem value={242}>Hindustan Seed India</MenuItem>
                <MenuItem value={106}>Hollander</MenuItem>
                <MenuItem value={176}>Hollar Seeds USA</MenuItem>
                <MenuItem value={107}>Hoshiar Purani Di Hatti India</MenuItem>
                <MenuItem value={248}>HSIN Seed Korea</MenuItem>
                <MenuItem value={96}>Hungnung Dongbu Korea</MenuItem>
                <MenuItem value={232}>Hybreq</MenuItem>
                <MenuItem value={109}>Innova Seed USA</MenuItem>
                <MenuItem value={244}>Ittehad Chemical</MenuItem>
                <MenuItem value={249}>Jai Devi Seed India</MenuItem>
                <MenuItem value={110}>Jaya Net Malaysia</MenuItem>
                <MenuItem value={191}>Jewellery Seed China</MenuItem>
                <MenuItem value={252}>Jhanak Seeds</MenuItem>
                <MenuItem value={247}>Jindal Crop India</MenuItem>
                <MenuItem value={212}>Jiuquan Honglide China</MenuItem>
                <MenuItem value={171}>JK Agri Genetics India</MenuItem>
                <MenuItem value={192}>Kiran International India</MenuItem>
                <MenuItem value={280}>Kissan Seed Sahiwal</MenuItem>
                <MenuItem value={199}>Koregon CO Korea</MenuItem>
                <MenuItem value={186}>Lihe Seeds China</MenuItem>
                <MenuItem value={113}>Local</MenuItem>
                <MenuItem value={157}>Malav Seeds India</MenuItem>
                <MenuItem value={246}>Malee Hybrid Seeds</MenuItem>
                <MenuItem value={245}>MCFP</MenuItem>
                <MenuItem value={271}>Metro Seed</MenuItem>
                <MenuItem value={263}>Mirae n Seed / Robert Yoo</MenuItem>
                <MenuItem value={114}>MSN Agro Overseas India</MenuItem>
                <MenuItem value={180}>Muneer China</MenuItem>
                <MenuItem value={208}>Nantong NTEC Monofilament</MenuItem>
                <MenuItem value={116}>Nickerson Zwan Holland</MenuItem>
                <MenuItem value={188}>Ningxia Taijin Seeds China</MenuItem>
                <MenuItem value={117}>Nong Wo Bio China</MenuItem>
                <MenuItem value={243}>Nunhems India Pvt. Ltd</MenuItem>
                <MenuItem value={120}>One King Seeds Co China</MenuItem>
                <MenuItem value={222}>Oregro International USA</MenuItem>
                <MenuItem value={202}>Packing Material Company</MenuItem>
                <MenuItem value={122}>Pahuja Seeds india</MenuItem>
                <MenuItem value={123}>Pangs Agro Seeds China</MenuItem>
                <MenuItem value={260}>Patel Seed (Seed One Global)</MenuItem>
                <MenuItem value={230}>Pindstrub Mosebrug</MenuItem>
                <MenuItem value={253}>Pinto Piga Chilli</MenuItem>
                <MenuItem value={269}>Plant Asia Seed</MenuItem>
                <MenuItem value={126}>Proline Seed India</MenuItem>
                <MenuItem value={223}>Rachna Coding</MenuItem>
                <MenuItem value={182}>Rachna Rice</MenuItem>
                <MenuItem value={128}>Rachna Seed</MenuItem>
                <MenuItem value={184}>Raj Dhani Seed India</MenuItem>
                <MenuItem value={166}>Rajvans Seeds India</MenuItem>
                <MenuItem value={131}>Rama Krishna Seeds India</MenuItem>
                <MenuItem value={268}>Raunak Seeds</MenuItem>
                <MenuItem value={132}>Richardson Seeds USA</MenuItem>
                <MenuItem value={133}>RK Seed India</MenuItem>
                <MenuItem value={136}>Royal Seed India</MenuItem>
                <MenuItem value={261}>S &amp; W Seed USA</MenuItem>
                <MenuItem value={207}>Safal Seeds Biotech India</MenuItem>
                <MenuItem value={172}>Sakata Seed Japan</MenuItem>
                <MenuItem value={187}>Sativa Seed Italy</MenuItem>
                <MenuItem value={255}>Sawera Seeds</MenuItem>
                <MenuItem value={138}>Seed Export USA</MenuItem>
                <MenuItem value={259}>Seed Vision South Africa</MenuItem>
                <MenuItem value={274}>Shandong Huasheng China</MenuItem>
                <MenuItem value={228}>Shantou Jinhan China</MenuItem>
                <MenuItem value={267}>Shishin Seed Korea</MenuItem>
                <MenuItem value={197}>Shouguang Kaixuan China</MenuItem>
                <MenuItem value={140}>Sky Goods China</MenuItem>
                <MenuItem value={270}>Solanum Network Korea</MenuItem>
                <MenuItem value={141}>South Pacific Seeds Newzeland</MenuItem>
                <MenuItem value={142}>Speciality Seeds USA</MenuItem>
                <MenuItem value={277}>SPS Idaho Seed USA</MenuItem>
                <MenuItem value={250}>Stock Lost / Short</MenuItem>
                <MenuItem value={155}>Suba &amp; Unico Italy</MenuItem>
                <MenuItem value={217}>Suntech Seed Taiwan</MenuItem>
                <MenuItem value={227}>Suntex China</MenuItem>
                <MenuItem value={276}>Tan Loc Phat</MenuItem>
                <MenuItem value={251}>Team Seeds India</MenuItem>
                <MenuItem value={218}>Tiandi Agricultural China</MenuItem>
                <MenuItem value={235}>Tianjin Kernel </MenuItem>
                <MenuItem value={194}>Tinpata Quality Seeds Bnagladesh</MenuItem>
                <MenuItem value={146}>Townsend Seed Newzeland</MenuItem>
                <MenuItem value={206}>Uniking Seed China</MenuItem>
                <MenuItem value={195}>VNR Seed India</MenuItem>
                <MenuItem value={203}>Winall Hi Tech Bangladesh</MenuItem>
                <MenuItem value={149}>Winall Hi-Tech Seed China</MenuItem>
                <MenuItem value={282}>Wrighstson Seeds Argentina</MenuItem>
                <MenuItem value={151}>Wright Son Seeds Newzeland</MenuItem>
                <MenuItem value={196}>Wuhan Hanyan Seed China</MenuItem>
                <MenuItem value={224}>Xian Youb</MenuItem>
                <MenuItem value={152}>Xiyu Seeds China</MenuItem>
                <MenuItem value={220}>YYS / Robert Yoo</MenuItem>
                <MenuItem value={236}>Zim Chemical</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item py={1} px={1} xs={4}>
            <MDTypography fontWeight="light">Master Packing Unit:</MDTypography>
            <FormControl fullWidth>
              <InputLabel id="master-packing-unit-select-label">Master Packing Unit</InputLabel>
              <Select
                className="p-2 select-2"
                labelId="master-packing-unit-select-label"
                id="master-packing-unit-select"
                value={masterPackingUnit}
                name="masterPackingUnit"
                label="master-packing-unit"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Tin</MenuItem>
                <MenuItem value={2}>Bag</MenuItem>
                <MenuItem value={4}>Kg</MenuItem>
                <MenuItem value={5}>PKT</MenuItem>
                <MenuItem value={6}>CBD</MenuItem>
                <MenuItem value={9}>PPL</MenuItem>
                <MenuItem value={10}>CTN</MenuItem>
                <MenuItem value={11}>LTR</MenuItem>
                <MenuItem value={12}>BTL</MenuItem>
                <MenuItem value={13}>CAN</MenuItem>
                <MenuItem value={14}>Bulk</MenuItem>
                <MenuItem value={15}>PC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} py={1} pl={1}>
            <MDTypography fontWeight="light">
              Unit Price:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Unit Price"
              variant="outlined"
              value={unitPrice}
              name="unitPrice"
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item py={1} pr={1} xs={4}>
            <MDTypography fontWeight="light">
              Selling Price(SP):
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Selling Price"
              variant="outlined"
              value={sellingPrice}
              name="sellingPrice"
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item py={1} px={1} xs={4}>
            <MDTypography fontWeight="light">
              Purchase Price(MP):
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Purchase Price"
              variant="outlined"
              value={purchasePrice}
              name="PurchasePrice"
              required
              onChange={this.handleDataChange}
            />
          </Grid>
          <Grid item xs={4} py={1} pl={1}>
            <MDTypography fontWeight="light">
              Item Status:
              <span className="text-danger">*</span>
            </MDTypography>
            <FormControl fullWidth>
              <InputLabel id="item-status-select-label">Item Status</InputLabel>
              <Select
                className="py-2"
                labelId="item-status-select-label"
                id="item-status-select"
                value={itemStatus}
                label="Item Status"
                onChange={this.handleDataChange}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={2}>InActive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} py={1}>
            <MDTypography fontWeight="light">Notes:</MDTypography>
            <textarea
              className="form-control py-1 px-2 col-3"
              name="notes"
              onChange={this.handleChange}
            />
          </Grid>
          <button type="submit" className="btn btn-sm rounded-3 d-flex align-content-center col-12">
            <img
              className="my-2 rounded-3 align-content-end mx-auto"
              mx="auto"
              src={SaveIcon}
              alt=""
              width="120"
              height="40"
            />
          </button>
        </Grid>
      </form>
    ) : (
      <form onSubmit={this.handleChange}>
        <Grid container>
          <Grid item xs={12} py={1} pr={1}>
            <MDTypography fontWeight="light">
              Edit Item Code:
              <span className="text-danger">*</span>
            </MDTypography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Edit Item Code"
              variant="outlined"
              name="editItemCode"
              value={editItemCode}
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
    );
  };

  render() {
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
                  Edit Item
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <this.Data />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    );
  }
}

export default EditItem;
