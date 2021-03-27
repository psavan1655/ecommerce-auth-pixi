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
  CLabel,
  CRow,
  CDataTable,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';
const fields = ["aboutText", "status", "delete"];

export default class AboutUsText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        aboutText: "",
        id: "",
        status: true,
      },
      formErrors: {
        aboutText: "",
      },
      formValidity: {
        aboutText: false,
      },
      isSubmitting: false,
      path: REACT_APP_API_URL + "api/content/about",
      data: {},
      textArray: [],
    };
  }

  async UNSAFE_componentWillMount() {
    try {
      const getAboutContent = await axios.get(this.state.path);
      if (getAboutContent.data.success === true) {
        // console.log('fetched data-->', getAboutContent.data)
        if (getAboutContent.data.data.length !== 0) {
          this.setState({
            data: getAboutContent.data.data[0],
          });
          const fetchedText = JSON.parse(getAboutContent.data.data[0].text);
          console.log(
            "fetched array of Carousel-->",
            fetchedText,
            fetchedText.textArray
          );
          if (fetchedText.textArray !== undefined) {
            this.setState({
              textArray: fetchedText.textArray,
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
    console.log(this.state.isSubmitting);
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      console.log("data-->", formValues);

      if (formValues.id === "") {
        const newFormValues = {
          ...formValues,
          id: uuidv4(),
        };

        const text = {
          textArray: [...this.state.textArray, newFormValues],
        };

        console.log(this.state.data);

        const data = {
          data: {
            ...this.state.data,
            text: JSON.stringify(text),
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
              textArray: text.textArray,
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

  changeStatus = async (item) => {
    const prevArray = this.state.textArray;
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
        const text = {
          textArray: newArray,
        };

        console.log(this.state.data);

        const data = {
          data: {
            ...this.state.data,
            text: JSON.stringify(text),
          },
        };

        console.log(data);

        try {
          const resp = await axios.put(this.state.path, data);
          console.log("testimonila resp -->", resp);
          if (resp.data.success === true) {
            this.setState({
              textArray: text.textArray,
            });
          }
        } catch (err) {
          console.log("error while testimonial data-->", err);
          alert("something went wrong!");
        }
      }
    }
  };

  delete = async (item) => {
    const prevArray = this.state.textArray;
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

        // const text = {
        //   textArray: newArray,
        // };

        // console.log(this.state.data);

        // const data = {
        //   data: {
        //     ...this.state.data,
        //     text: JSON.stringify(text),
        //   },
        // };

        // console.log(data);

        // try {
        //   const resp = await axios.put(this.state.path, data);
        //   console.log("testimonila resp -->", resp);
        //   if (resp.data.success === true) {
        //     this.setState({
        //       textArray: text.textArray,
        //     });
        //   }
        // } catch (err) {
        //   console.log("error while testimonial data-->", err);
        //   alert("something went wrong!");
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
                About Us
                <small> Admin Panel</small>
              </CCardHeader>
              <CForm
                id='form'
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
                        name="aboutText"
                        id="textarea-input"
                        rows="5"
                        placeholder="Content..."
                        className={`form-control ${
                          this.state.formErrors.aboutText ? "is-invalid" : ""
                        }`}
                        onChange={this.handleChange}
                        value={this.state.formValues.aboutText}
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.aboutText}
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
                  items={this.state.textArray}
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
