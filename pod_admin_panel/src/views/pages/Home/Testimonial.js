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
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CRow,
  CDataTable,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';
const fields = ["clientName", "description", "status", "delete"];

class NewTestimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        clientName: "",
        description: "",
        image: "",
        status: true,
        id: ''
      },
      formErrors: {
        clientName: "",
        description: "",
        image: "",
      },
      formValidity: {
        clientName: false,
        description: false,
        image: false,
      },
      isSubmitting: false,
      path: REACT_APP_API_URL + "api/content/home",
      testimonialsArray: [],
      data: {},
    };
  }

  async UNSAFE_componentWillMount() {
    try {
      const getTstimonials = await axios.get(this.state.path);
      if (getTstimonials.data.success === true) {
        console.log(getTstimonials);
        if (getTstimonials.data.data.length !== 0) {
          this.setState({
            data: getTstimonials.data.data[0],
          });
          const fetchedTestimonials = JSON.parse(
            getTstimonials.data.data[0].testimonials
          );
          console.log(
            "fetched array of testimonials-->",
            fetchedTestimonials.testimonialsArray
          );
          if (fetchedTestimonials.testimonialsArray !== undefined) {
            this.setState({
              testimonialsArray: fetchedTestimonials.testimonialsArray,
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
      let files = e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = function () {
        formValues[e.target.name] = reader.result;
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
      console.log("data-->", formValues, this.state.testimonialsArray);

      if(formValues.id === ''){
        //ADD A NEW ID TO NEW DATA
        const newFormValues = {
          ...formValues,
          id: uuidv4()
        }

        const testimonials = {
          testimonialsArray: [
            ...this.state.testimonialsArray, 
            newFormValues
          ],
        };
  
        const data = {
          data: {
            ...this.state.data,
            testimonials: JSON.stringify(testimonials),
          },
        };
  
        console.log(data);
  
        try {
          const addtestimonial = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", addtestimonial);
          if (addtestimonial.data.success === true) {
            this.setState({
              isSubmitting: false ,
              testimonialsArray: testimonials.testimonialsArray,
            });
            const form = document.getElementById("form");
            form.reset();
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert('something went wrong!')
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
    const prevArray = this.state.testimonialsArray;
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

        const testimonials = {
          testimonialsArray: newArray
        };
  
        const data = {
          data: {
            ...this.state.data,
            testimonials: JSON.stringify(testimonials),
          },
        };
  
        console.log(data);
  
        try {
          const addtestimonial = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", addtestimonial);
          if (addtestimonial.data.success === true) {
            this.setState({ 
              testimonialsArray: testimonials.testimonialsArray,
              isSubmitting: false 
            });
            // window.location.reload();
            const form = document.getElementById("form");
            form.reset();
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert('something went wrong!')
        }
      }
    }
  };

  //ON DELETE
  delete = async (item) => {
    const prevArray = this.state.testimonialsArray;
    console.log(item.id, prevArray.length);
    for (let i = 0; i < prevArray.length; i++) {
      if (prevArray[i].id === item.id) {
        prevArray.splice(i, 1)
        // const newObj = {
        //   ...prevArray[i],
        //   status: !item.status,
        // };
        // prevArray[i] = newObj;
        const newArray = prevArray;
        console.log("updated array-->", newArray);
        //integrate put API here if got a new array

        // const testimonials = {
        //   testimonialsArray: newArray
        // };
  
        // const data = {
        //   data: {
        //     ...this.state.data,
        //     testimonials: JSON.stringify(testimonials),
        //   },
        // };
  
        // console.log(data);
  
        // try {
        //   const addtestimonial = await axios.put(this.state.path, data);
        //   console.log("testimonila resp -->", addtestimonial);
        //   if (addtestimonial.data.success === true) {
        //     this.setState({ isSubmitting: false });
        //     window.location.reload();
        //     const form = document.getElementById("form");
        //     form.reset();
        //   }
        // } catch (err) {
        //   console.log("error while testimonial data-->", err);
        //   alert('something went wrong!')
        // }
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
                Testimonial
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
                      <CLabel htmlFor="text-input">Client Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="clientName"
                        placeholder="Name"
                        className={`form-control ${
                          this.state.formErrors.clientName ? "is-invalid" : ""
                        }`}
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.formValues.clientName}
                      />
                      <CFormText>Enter client's name</CFormText>
                      <div className="invalid-feedback">
                        {this.state.formErrors.clientName}
                      </div>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">
                        Client's Testimonial
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea
                        name="description"
                        id="textarea-input"
                        rows="5"
                        placeholder="Testimonial"
                        className={`form-control ${
                          this.state.formErrors.description ? "is-invalid" : ""
                        }`}
                        onChange={this.handleChange}
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.description}
                      </div>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CLabel col md="3" htmlFor="file-input">
                      Client Image
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
                  items={this.state.testimonialsArray}
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

const Testimonial = () => {
  return <NewTestimonial />;
};

export default Testimonial;
