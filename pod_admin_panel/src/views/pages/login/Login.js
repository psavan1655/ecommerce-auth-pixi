import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        username: "",
        password: "",
        // status: true,
        // id: ''
      },
      formErrors: {
        username: "",
        password: "",
      },
      formValidity: {
        // username: false,
        // password: false,
      },
      isSubmitting: false
    };
  }

  //INPUT ONCHANGE METHOD
  handleChange = (e) => {
    const { formValues } = this.state;
    this.setState({ formValues });
    this.handleValidation(e.target);
    formValues[e.target.name] = e.target.value;
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
    console.log(this.props)
    event.preventDefault();
    this.setState({ isSubmitting: true });
    console.log(this.state.isSubmitting);
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      console.log(formValues)
      if (formValues.username === "admin" && formValues.password === "admin") {
        //route to home page
        console.log('route ')
        this.props.history.push('/admin/home/carousel')
      } else {
        alert("username or paswword is wrong!");
      }

      // if(formValues.id === ''){
      // const newFormValues = {
      //   ...formValues,
      //   id: uuidv4()
      // }
      // console.log("data-->", newFormValues);

      // const imageObj = {
      //   ...this.state.imageArray,
      //   imageArray: [newFormValues],
      // };

      // const data = {
      //   data: {
      //     ...this.state.data,
      //     image: JSON.stringify(imageObj),
      //   },
      // };
      // console.log(data);

      // try {
      //   const resp = await axios.put(this.state.path, data);
      //   console.log("testimonila resp -->", resp);
      //   if (resp.data.success === true) {
      //     const form = document.getElementById("form");
      //     form.reset();
      //     this.setState({
      //       imageArray: imageObj.imageArray,
      //       isSubmitting: false
      //     });
      //   }
      // } catch (err) {
      //   console.log("error while testimonial data-->", err);
      // }
      // }
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

  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onChange={(e)=>this.handleChange(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          name="username"
                          type="text"
                          placeholder="Username"
                          onChange={(e)=>this.handleChange(e)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={(e)=>this.handleChange(e)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" className="px-4" onClick={(e) => this.handleSubmit(e)}>
                            Login
                          </CButton>
                        </CCol>
                        {/* <CCol xs="6" className="text-right">
                          <CButton
                            color="link"
                            className="px-0"
                            active
                            tabIndex={-1}
                            onClick={(e) => this.handleChange(e)}
                          >
                            Forgot Password
                          </CButton>
                        </CCol> */}
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard> */}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Login;
