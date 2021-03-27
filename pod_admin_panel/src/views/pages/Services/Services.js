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
  CFormText,
  CInput,
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
const fields = ["serviceName", "imageName", "status", "delete"];

class NewServiceImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        serviceName: "",
        image: "",
        imageName: "",
        id: "",
        status: true,
        // hashtag: ''
      },
      formErrors: {
        serviceName: "",
        image: "",
        // hashtag: ''
      },
      formValidity: {
        serviceName: false,
        image: false,
        // hashtag: false
      },
      isSubmitting: false,
      servicesArray: [],
      data: {},
      path: REACT_APP_API_URL + "api/content/service",
    };
  }

  //GET SERVIECES
  async UNSAFE_componentWillMount() {
    try {
      const getServices = await axios.get(this.state.path);
      if (getServices.data.success === true) {
        console.log(getServices);
        if (getServices.data.data.length !== 0) {
          this.setState({
            data: getServices.data.data[0],
          });
          const fetchedCarousel = JSON.parse(getServices.data.data[0].service1);
          console.log(
            "fetched array of Carousel-->",
            fetchedCarousel.servicesArray
          );
          if (fetchedCarousel.servicesArray !== undefined) {
            this.setState({
              servicesArray: fetchedCarousel.servicesArray,
            });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  //INPUT ONCHANGE METHOD
  handleChange = (e) => {
    const { formValues } = this.state;
    this.setState({ formValues });
    this.handleValidation(e.target);

    if (e.target.name === "image") {
      var files = e.target.files[0];

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

  //FORM ONSUBMIT
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      if (formValues.id === "") {
        const newFormValues = {
          ...formValues,
          id: uuidv4(),
        };
        console.log("data-->", newFormValues);

        const services = {
          servicesArray: [...this.state.servicesArray, newFormValues],
        };

        const data = {
          data: {
            ...this.state.data,
            service1: JSON.stringify(services),
          },
        };

        console.log(data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            const form = document.getElementById("form");
            form.reset();
            this.setState({
              servicesArray: services.servicesArray,
              isSubmitting: false,
            });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
        }
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
    const prevArray = this.state.servicesArray;
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

        const services = {
          servicesArray: newArray,
        };

        const data = {
          data: {
            ...this.state.data,
            service1: JSON.stringify(services),
          },
        };

        console.log(data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({
              servicesArray: services.servicesArray,
              isSubmitting: false,
            });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
        }
      }
    }
  };

  //DELETE
  delete = async (item) => {
    const prevArray = this.state.servicesArray;
    console.log(item.id, prevArray.length);
    for (let i = 0; i < prevArray.length; i++) {
      if (prevArray[i].id === item.id) {
        prevArray.splice(i, 1)
        const newArray = prevArray;
        console.log("updated array-->", newArray);
        //integrate put API here if got a new array

        const services = {
          servicesArray: newArray,
        };

        const data = {
          data: {
            ...this.state.data,
            service1: JSON.stringify(services),
          },
        };

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({
              servicesArray: services.servicesArray,
              isSubmitting: false,
            });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert('something went wrong!')
        }
      }
    }
  };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>
                Services
                <small> Admin Panel</small>
              </CCardHeader>
              <CForm
                id="form"
                className="form-horizontal"
                onSubmit={(e) => this.handleChange(e)}
              >
                <CCardBody>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Service Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="serviceName"
                        placeholder="Name"
                        className={`form-control ${
                          this.state.formErrors.serviceName ? "is-invalid" : ""
                        }`}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <CFormText>Enter service's name</CFormText>
                      <div className="invalid-feedback">
                        {this.state.formErrors.serviceName}
                      </div>
                    </CCol>
                  </CFormGroup>

                  {/* <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Service Hashtag</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="hashtag"
                        placeholder="Hashtag"
                        className={`form-control ${
                          this.state.formErrors.hashtag ? "is-invalid" : ""
                        }`}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <CFormText>Enter service's Hashtag</CFormText>
                      <div className="invalid-feedback">
                        {this.state.formErrors.hashtag}
                      </div>
                    </CCol>
                  </CFormGroup> */}

                  <CFormGroup row>
                    <CLabel col md="3" htmlFor="file-input">
                      Service Image
                    </CLabel>
                    <CCol xs="12" md="9">
                      <CInputFile
                        type="file"
                        id="file-input"
                        name="image"
                        className={`form-control-file ${
                          this.state.formErrors.image ? "is-invalid" : ""
                        }`}
                        placeholder="Pick a image"
                        onChange={(e) => this.handleChange(e)}
                        // value={this.state.formValues.image}
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

        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>Striped Table</CCardHeader>
              <CCardBody>
                <CDataTable
                  items={this.state.servicesArray}
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
                          onChange={(e) => this.changeStatus(item)}
                        />
                      </td>
                    ),
                    delete: (item) => (
                      <td>
                        <CButton variant="ghost" color="danger" onClick={()=>this.delete(item)}>
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

const ServicesImages = () => {
  return <NewServiceImages />;
};

export default ServicesImages;
