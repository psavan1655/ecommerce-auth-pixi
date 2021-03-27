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
  CTextarea,
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

const fields = ["imageName", "description", "status", "delete"];

class NewClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        description: "",
        image: "",
        id: '',
        status: true,
        imageName: ''
      },
      formErrors: {
        description: "",
        image: "",
      },
      formValidity: {
        description: false,
        image: true,
      },
      isSubmitting: false,
      data: {},
      clientsArray: [],
      path: REACT_APP_API_URL + "api/content/home",
    };
  }

  async UNSAFE_componentWillMount() {
    try {
      const getClients = await axios.get(this.state.path);
      if (getClients.data.success === true) {
        console.log(getClients.data.data[0]);
        if (getClients.data.data.length !== 0) {
          this.setState({
            data: getClients.data.data[0],
          });
          const fetchedTestimonials = JSON.parse(
            getClients.data.data[0].clients
          );
          console.log(
            "fetched array of testimonials-->",
            fetchedTestimonials.clientsArray
          );
          if (fetchedTestimonials.clientsArray !== undefined) {
            this.setState({
              clientsArray: fetchedTestimonials.clientsArray,
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

    //IMAGR TO STRING
    if (e.target.name === "image") {
      var files = e.target.files[0];
      //IMAGE TO BASE64
      var reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = function () {
        console.log(reader.result);
        formValues[e.target.name] = reader.result;
        formValues['imageName'] = files.name
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

  //FROM ONSUBMIT
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    console.log(this.state.isSubmitting);
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      console.log("data-->", formValues);

      if(formValues.id === ''){
        //ADD A NEW ID TO NEW DATA
        const newFormValues = {
          ...formValues,
          id: uuidv4()
        }
        console.log(this.state.clientsArray);
        const clients = {
          clientsArray: [...this.state.clientsArray, newFormValues],
        };
  
        console.log("clients array-->", clients);
  
        const data = {
          data: {
            ...this.state.data,
            clients: JSON.stringify(clients),
          },
        };
        console.log("data-->", data);
  
        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            const form = document.getElementById("form");
            form.reset();
            this.setState({
              clientsArray: clients.clientsArray,
            });
            this.setState({ isSubmitting: false });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
        }
      } else {
        console.log('data got an id ', formValues)
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
    const prevArray = this.state.clientsArray;
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

        const clients = {
          clientsArray: newArray,
        };
  
        console.log("clients array-->", clients);
  
        const data = {
          data: {
            ...this.state.data,
            clients: JSON.stringify(clients),
          },
        };
        console.log("data-->", data);
  
        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({
              clientsArray: clients.newArray
            })
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
        }
      }
    }
  };

  delete = async (item) => {
    const prevArray = this.state.clientsArray;
    console.log(item.id, prevArray.length);
    for (let i = 0; i < prevArray.length; i++) {
      if (prevArray[i].id === item.id) {
        prevArray.splice(i,1)
        // const newObj = {
        //   ...prevArray[i],
        //   status: !item.status,
        // };
        // prevArray[i] = newObj;
        const newArray = prevArray;
        console.log("updated array-->", newArray);
        //integrate put API here if got a new array

        // const clients = {
        //   clientsArray: newArray,
        // };
  
        // console.log("clients array-->", clients);
  
        // const data = {
        //   data: {
        //     ...this.state.data,
        //     clients: JSON.stringify(clients),
        //   },
        // };
        // console.log("data-->", data);
  
        // try {
        //   const resp = await axios.put(this.state.path, data);
        //   console.log("testimonila resp -->", resp);
        //   if (resp.data.success === true) {
        //     this.setState({
        //       clientsArray: clients.newArray
        //     })
        //   }
        // } catch (err) {
        //   console.log("error while testimonial data-->", err);
        // }
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
                Clients
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
                      <CLabel htmlFor="textarea-input">Textarea</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea
                        name="description"
                        id="textarea-input"
                        rows="5"
                        placeholder="Content..."
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
                      File input
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
                  items={this.state.clientsArray}
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
                        <CButton variant="ghost" color="danger" onClick={() => this.delete(item)}>
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

const Client = () => {
  return <NewClient />;
};

export default Client;
