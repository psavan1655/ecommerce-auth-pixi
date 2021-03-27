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
  CLabel,
  CRow,
  CDataTable,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';
const fields = ["planName", "planPrice", "status", "delete"];

class Plans extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        planName: '',
        planPrice: '',
        id: '',
        status: true
      },
      formErrors: {
        planName: '',
        planPrice: ''
      },
      formValidity: {
        planName: false,
        planPrice: false
      },
      isSubmitting: false,
      data: {},
      plansArray: [],
      path: REACT_APP_API_URL + 'api/content/plan'
    };
    console.log('state-->',this.state)
  }

  async UNSAFE_componentWillMount(){
    try{
      const getPlans = await axios.get(this.state.path)
      if(getPlans.data.success===true){
        console.log('fetched resp-->',getPlans.data)
       if(getPlans.data.data.length !==0){
         this.setState({
          data: getPlans.data.data[0],
         });
         const fetchedCarousel = JSON.parse(getPlans.data.data[0].plans)
         console.log('fetched array of Carousel-->',fetchedCarousel.plansArray)
         if(fetchedCarousel.plansArray !== undefined){
           this.setState({
             plansArray: fetchedCarousel.plansArray,
           });
         }
        }
       }
    } catch(err){
      console.log(err)
    }
   }

  //INPUT ONCHANGE METHOD
  handleChange = (e) => {
    const { formValues } = this.state;
    formValues[e.target.name] = e.target.value;
    this.setState({ formValues });
    this.handleValidation(e.target);
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
      console.log("data-->", formValues);

      if(formValues.id === ''){
        const newFormValues = {
          ...formValues,
          id: uuidv4()
        }

        const plans = { 
          plansArray: [
            ...this.state.plansArray,
            newFormValues
          ]
        }
  
        const data = {
          data: {
            ...this.state.data,
            plans: JSON.stringify(plans)
          }
        }
  
        try{
          const resp = await axios.put(this.state.path, data)
          console.log('testimonila resp -->',resp)
          if(resp.data.success===true){
            const form = document.getElementById("form");
            form.reset();
            this.setState({
              plansArray: plans.plansArray,
              isSubmitting: false 
            });
          }
        }catch(err){
          console.log('error while testimonial data-->', err)
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
    const prevArray = this.state.plansArray;
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

        const plans = { 
          plansArray: newArray
        }
  
        const data = {
          data: {
            ...this.state.data,
            plans: JSON.stringify(plans)
          }
        }
  
        try{
          const resp = await axios.put(this.state.path, data)
          console.log('testimonila resp -->',resp)
          if(resp.data.success===true){
            const form = document.getElementById("form");
            form.reset();
            this.setState({
              plansArray: plans.plansArray,
              isSubmitting: false 
            });
          }
        }catch(err){
          console.log('error while testimonial data-->', err)
        }
      }
    }
  };

  delete = async (item) => {
    const prevArray = this.state.plansArray;
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

        // const plans = { 
        //   plansArray: newArray
        // }
  
        // const data = {
        //   data: {
        //     ...this.state.data,
        //     plans: JSON.stringify(plans)
        //   }
        // }
  
        // try{
        //   const resp = await axios.put(this.state.path, data)
        //   console.log('testimonila resp -->',resp)
        //   if(resp.data.success===true){
        //     const form = document.getElementById("form");
        //     form.reset();
        //     this.setState({
        //       plansArray: plans.plansArray,
        //       isSubmitting: false 
        //     });
        //   }
        // }catch(err){
        //   console.log('error while testimonial data-->', err)
        // }
      }
    }
  };
  
  render(){
    return(
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
                onSubmit={(e)=>this.handleChange(e)}
              >
            <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Plan Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      name="planName"
                      placeholder="Plan Name"
                      className={`form-control ${
                        this.state.formErrors.clientName ? "is-invalid" : ""
                      }`}
                      onChange={(e)=>this.handleChange(e)}
                      value={this.state.formValues.clientName}
                    />
                    <CFormText>Enter plan's name</CFormText>
                    <div className="invalid-feedback">
                      {this.state.formErrors.clientName}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Plan Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      name="planPrice"
                      placeholder="Price"
                      className={`form-control ${
                        this.state.formErrors.clientName ? "is-invalid" : ""
                      }`}
                      onChange={(e)=>this.handleChange(e)}
                      value={this.state.formValues.clientName}
                    />
                    <CFormText>Enter plan's price</CFormText>
                    <div className="invalid-feedback">
                      {this.state.formErrors.clientName}
                    </div>
                  </CCol>
                </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton size="sm" color="primary" onClick={(e)=>this.handleSubmit(e)} disabled={this.state.isSubmitting}>
                <CIcon name="cil-scrubber" /> {this.state.isSubmitting ? "Please wait..." : "Submit"}
              </CButton>
            </CCardFooter>
              </CForm>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>Plans</CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.state.plansArray}
                fields={fields}
                striped
                itemsPerPage={10}
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
                        onChange={()=> this.changeStatus(item)}
                      />
                    </td>
                  ),
                  delete: () => (
                    <td>
                      <CButton variant="ghost" color="danger">
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

export default Plans;
