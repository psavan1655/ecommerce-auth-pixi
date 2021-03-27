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
  // CTextarea,
  CLabel,
  CRow,
  CDataTable,
  CSwitch,
  CInputFile
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import CKEditor from "ckeditor4-react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';
const fields = ['imageName',"description", "status", "delete"];

class Content extends Component{
  constructor(props) {
    super(props);
    this.updateContent1 = this.updateContent1.bind(this);
    this.state = {
      formValues: {
        description: "",
        image: "",
        imageName: '',
        status: true,
        id: ''
      },
      formErrors: {
        description: "",
        image: "",
      },
      formValidity: {
        image: false,
      },
      description: '',
      isSubmitting: false,
      detailsArray: [],
      data: {},
      path: REACT_APP_API_URL + 'api/content/podian'
    };
  }

  //GET DETAILS
  async UNSAFE_componentWillMount(){
    try{
      const getDetails = await axios.get(this.state.path)
      if(getDetails.data.success===true){
        console.log(getDetails)
       if(getDetails.data.data.length !==0){
         this.setState({
          data: getDetails.data.data[0],
         });
         const fetchedDetails = JSON.parse(getDetails.data.data[0].details)
         console.log('fetched array of Carousel-->',fetchedDetails.detailsArray)
         if(fetchedDetails.detailsArray !== undefined){
           this.setState({
             detailsArray: fetchedDetails.detailsArray
           });
         }
        }
       }
    } catch(err){
      console.log(err)
    }
   }

     /*****************************************************************************/

  updateContent1(newContent) {
    this.setState({
      description: newContent,
    });
  }

  /*****************************************************************************/

  //onchange first editor
  onChangeMember1(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log("onchange-->", newContent);
    this.setState({
      description: newContent,
    });
  }

  //*****************************************************************************/

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

   //onsubmit click function
   handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    console.log(this.state.isSubmitting);
    const { formValues, formValidity } = this.state;

    const formData = {
      ...formValues,
      description: this.state.description,
    };

    console.log(formData)
    if(formData.id === ''){
      const newFormValues = {
        ...formData,
        id: uuidv4()
      }
      console.log('if working-->',newFormValues, newFormValues.description)
      console.log(newFormValues.description === "");
      if (newFormValues.description === "") {
        alert("add description!");
        this.setState({ isSubmitting: false})
      } else {
        console.log('ss')
        if (Object.values(formValidity).every(Boolean)) {
          console.log(
            "data-->",
            newFormValues,
            this.state.description
          );
          const details = {
            detailsArray: [
              ...this.state.detailsArray, 
              newFormValues
            ],
          };
  
          const data = {
            data: {
              ...this.state.data,
              details: JSON.stringify(details),
            },
          };
  
          console.log(data);
  
          try{
            const resp = await axios.put(this.state.path, data)
            console.log('testimonila resp -->',resp)
            if(resp.data.success===true){
              this.setState({ 
                detailsArray: details.detailsArray,
                isSubmitting: false 
              });
            }
          }catch(err){
            console.log('error while testimonial data-->', err)
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
      }
    } else {
      console.log('else working-->',formValues)
      const id = formData.id;
      const prevArray = this.state.textArray;
      for (let i = 0; i < prevArray.length; i++) {
        if (prevArray[i].id === id) {
          console.log('updated formsvalue-->', formValues)
          const newObj = formValues;
          prevArray[i] = newObj;
          const newArray = prevArray;
          console.log("updated array-->", newArray);
          //integrate put API here if got a new array
          const detail = {
            detailsArray: newArray
          }
    
          const data = {
            data: {
              ...this.state.data,
              details: JSON.stringify(detail)
            }
          }
    
          console.log(data)
    
          try{
            const resp = await axios.put(this.state.path, data)
            console.log('testimonila resp -->',resp)
            if(resp.data.success===true){
              this.setState({ 
                detailsArray: detail.detailsArray,
                isSubmitting: false 
              });
            }
          }catch(err){
            console.log('error while testimonial data-->', err)
          }
        }
      }
    }

  };

  //ON STATUS CHANGE
  changeStatus = async (item) => {
    const prevArray = this.state.detailsArray;
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
        const detail = {
          detailsArray: newArray
        }
  
        const data = {
          data: {
            ...this.state.data,
            details: JSON.stringify(detail)
          }
        }
  
        console.log(data)
  
        try{
          const resp = await axios.put(this.state.path, data)
          console.log('testimonila resp -->',resp)
          if(resp.data.success===true){
            this.setState({ 
              detailsArray: detail.detailsArray,
              isSubmitting: false 
            });
          }
        }catch(err){
          console.log('error while testimonial data-->', err)
        }
      }
    }
  };

  changeStatus = async (item) => {
    const prevArray = this.state.detailsArray;
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


        // const detail = {
        //   detailsArray: newArray
        // }
  
        // const data = {
        //   data: {
        //     ...this.state.data,
        //     details: JSON.stringify(detail)
        //   }
        // }
  
        // console.log(data)
  
        // try{
        //   const resp = await axios.put(this.state.path, data)
        //   console.log('testimonila resp -->',resp)
        //   if(resp.data.success===true){
        //     this.setState({ 
        //       detailsArray: detail.detailsArray,
        //       isSubmitting: false 
        //     });
        //   }
        // }catch(err){
        //   console.log('error while testimonial data-->', err)
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
                Home<small> Why Pod</small>
              </CCardHeader>
              <CForm
                className="form-horizontal"
                onSubmit={(e) => this.handleChange(e)}
              >
                <CCardBody>
                  <CFormGroup row>
                    <CCol xs="12" md="9">
                      <CKEditor
                        name="description"
                        data={this.state.description}
                        activeClass="p10"
                        description={this.state.description}
                        onChange={(e) => this.onChangeMember1(e)}
                      />
                      <div className="invalid-feedback">
                        {this.state.formErrors.image}
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
                  items={this.state.detailsArray}
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
                        <CButton variant="ghost" color="danger" onClick={()=> this.delete(item)}>
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
    )
  }
}

export default Content;
