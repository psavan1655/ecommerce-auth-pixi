import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInputFile,
  CLabel,
  CRow,
  CDataTable,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';
const fields = ["imageName", "status", "delete"];

class NewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        imageName: "",
        image: "",
        id: "",
        status: true,
      },
      formErrors: {
        image: "",
      },
      formValidity: {
        image: false,
      },
      isSubmitting: false,
      carouselImagesArray: [],
      path: REACT_APP_API_URL + "api/content/home",
      data: {},
    };
  }

  //FETCH CAROUSEL IMAGES
  async UNSAFE_componentWillMount() {
    try {
      const getCarouselIMages = await axios.get(this.state.path);
      if (getCarouselIMages.data.success === true) {
        console.log(getCarouselIMages);
        if (getCarouselIMages.data.data.length !== 0) {
          this.setState({
            data: getCarouselIMages.data.data[0],
          });
          const fetchedCarousel = JSON.parse(
            getCarouselIMages.data.data[0].slider
          );
          console.log(
            "fetched array of Carousel-->",
            fetchedCarousel.carouselImagesArray
          );
          if (fetchedCarousel.carouselImagesArray !== undefined) {
            this.setState({
              carouselImagesArray: fetchedCarousel.carouselImagesArray,
            });
          }
        }
      }
    } catch (err) {
      alert('something went wrong please reload the page')
      console.log(err);
    }
  }

  //INPUT ONCHANGE METHOD
  handleChange = (e) => {
    const { formValues } = this.state;
    this.setState({ formValues });
    this.handleValidation(e.target);

    //IMAGR TO STRING
    if (e.target.name === "image") {
      var files = e.target.files[0];
      //IMAGE TO BASE64
      var reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = function () {
        formValues[e.target.name] = reader.result;
        formValues["imageName"] = files.name;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    } else {
      formValues[e.target.name] = e.target.value;
    }
  };

  //FORM VALIDATION
  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`;

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      console.log("formvalues-->", formValues, "id-->", formValues.id);

      //ADD NEW ID TO FORM DATA
      if (formValues.id === "") {
        console.log("if is working");
        //ADD A NEW ID TO NEW DATA
        const newFormValue = {
          ...formValues,
          id: uuidv4(),
        };

        const carouselImages = {
          carouselImagesArray: [
            ...this.state.carouselImagesArray,
            newFormValue,
          ],
        };

        console.log("carousel images-->", carouselImages);
        const data = {
          data: {
            ...this.state.data,
            slider: JSON.stringify(carouselImages),
          },
        };

        console.log("updating data-->", data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({ 
              carouselImagesArray: carouselImages.carouselImagesArray,
              isSubmitting: false 
            });
            const form = document.getElementById("form");
            form.reset();
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
        }
      } else {
        console.log("data has an id-->", formValues);
      }
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  //ON STATUS CHANGE
  changeStatus = async (item) => {
    const prevArray = this.state.carouselImagesArray;
    console.log(item.id, prevArray.length);
    for (let i = 0; i < prevArray.length; i++) {
      if (prevArray[i].id === item.id) {
        const newObj = {
          ...prevArray[i],
          status: !item.status,
        };
        prevArray[i] = newObj;
        const newArray = prevArray;
        console.log("updated array-->", newArray);
        //integrate put API here if got a new array

        const carouselImages = {
          carouselImagesArray: newArray,
        };

        console.log("carousel images-->", carouselImages);
        const data = {
          data: {
            ...this.state.data,
            slider: JSON.stringify(carouselImages),
          },
        };

        console.log("updating data-->", data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({ isSubmitting: false });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert("something went wrong!");
        }
      }
    }
  };

  //ON DELETE
  delete = async (item) => {
    const prevArray = this.state.carouselImagesArray;
    console.log(item.id, prevArray.length);
    for (let i = 0; i < prevArray.length; i++) {
      if (prevArray[i].id === item.id) {
        prevArray.splice(i, 1);
        const newArray = prevArray;
        console.log("updated array-->", newArray);
        //integrate put API here if got a new array

        const carouselImages = {
          carouselImagesArray: newArray,
        };

        console.log("carousel images-->", carouselImages);
        const data = {
          data: {
            ...this.state.data,
            slider: JSON.stringify(carouselImages),
          },
        };

        console.log("updating data-->", data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({
              carouselImagesArray: carouselImages.carouselImagesArray,
              isSubmitting: false 
            });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert("something went wrong!");
        }
      }
    }
  };

  render() {
    return (
      <>
        {/* FORM FOR ABOUT PAGE */}
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>
                Home Slider
                <small> Admin Panel</small>
              </CCardHeader>
              <CForm
                id="form"
                className="form-horizontal"
                onSubmit={(e) => this.handleChange(e)}
              >
                <CCardBody>
                  <CFormGroup row>
                    <CLabel col md="3" htmlFor="file-input">
                      Slider Image
                    </CLabel>
                    <CCol xs="12" md="9">
                      <CInputFile
                        type="file"
                        name="image"
                        className={`form-control-file ${
                          this.state.formErrors.image ? "is-invalid" : ""
                        }`}
                        placeholder="Pick a image"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.image}
                      </div>
                    </CCol>
                  </CFormGroup>
                </CCardBody>
                <CCardFooter>
                  <CButton
                    size="sm"
                    color="primary"
                    onClick={(e) => this.handleSubmit(e)}
                    disabled={this.state.isSubmitting}
                  >
                    <CIcon name="cil-scrubber" />{" "}
                    {this.state.isSubmitting ? "Please wait..." : "Submit"}
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCard>
          </CCol>
        </CRow>

        {/* DATA TABLE FETCHED */}
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>Striped Table</CCardHeader>
              <CCardBody>
                <CDataTable
                  items={this.state.carouselImagesArray}
                  fields={fields}
                  striped
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"primary"}
                          checked={item.status}
                          size={"sm"}
                          onChange={() => this.changeStatus(item)}
                        />
                      </td>
                    ),
                    delete: (item) => (
                      <td>
                        <CButton
                          variant="ghost"
                          color="danger"
                          onClick={() => this.delete(item)}
                        >
                          <CIcon name="cil-x" />
                        </CButton>
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

const Carousel = () => {
  return <NewCarousel />;
};

export default Carousel;
