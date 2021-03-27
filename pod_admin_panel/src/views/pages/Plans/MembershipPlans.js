import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import CKEditor from "ckeditor4-react";
// import ClassicEditor from '@ckeditor'
import axios from "axios";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/';

class MembershipPlans extends Component {
  constructor(props) {
    super(props);
    this.updateContent1 = this.updateContent1.bind(this);
    this.updateContent2 = this.updateContent2.bind(this);
    this.updateContent3 = this.updateContent3.bind(this);
    this.state = {
      isSubmitting: false,
      content1: "",
      content2: "",
      content3: "",
      path: REACT_APP_API_URL + "api/content/plan",
      data: {},
      mebmbershiPlansArray: []
    };
  }

  async UNSAFE_componentWillMount(){
    try{
      const getMembershipPlans = await axios.get(this.state.path)
      if(getMembershipPlans.data.success===true){
        console.log('fetched resp-->',getMembershipPlans.data)
       if(getMembershipPlans.data.data.length !==0){
         this.setState({
          data: getMembershipPlans.data.data[0],
         });
         const fetchedCarousel = JSON.parse(getMembershipPlans.data.data[0].membershipPlan)
         console.log('fetched array of Carousel-->',fetchedCarousel.mebmbershiPlansArray)
         if(fetchedCarousel.mebmbershiPlansArray !== undefined){
           this.setState({
             mebmbershiPlansArray: fetchedCarousel.mebmbershiPlansArray,
             content1: fetchedCarousel.mebmbershiPlansArray[0].content,
             content2: fetchedCarousel.mebmbershiPlansArray[1].content,
             content3: fetchedCarousel.mebmbershiPlansArray[2].content
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
      content1: newContent,
    });
  }

  updateContent2(newContent) {
    this.setState({
      content2: newContent,
    });
  }

  updateContent3(newContent) {
    this.setState({
      content3: newContent,
    });
  }

  /*****************************************************************************/

  //onchange first editor
  onChangeMember1(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log("onchange-->", newContent);
    this.setState({
      content1: newContent,
    });
  }

  //onchange second editor
  onChangeMember2(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log("onchange-->", newContent);
    this.setState({
      content2: newContent,
    });
  }

  //onchange third editor
  onChangeMember3(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log("onchange-->", newContent);
    this.setState({
      content3: newContent,
    });
  }

  //*****************************************************************************/

  //ON SUBMIT FORM
  handleSubmit = async (event) => {
    this.setState({ isSubmitting: true });

    const membershipPlan1 = {membershipPlan: 'membershipPlan1',content: this.state.content1};
    const membershipPlan2 = {membershipPlan: 'membershipPlan2',content: this.state.content2};
    const mebmbershiPlan3 = {membershipPlan: 'membershipPlan3',content: this.state.content3};


    const membershipPlans = {
      mebmbershiPlansArray: [
        ...this.state.mebmbershiPlansArray,
        membershipPlan1,
        membershipPlan2,
        mebmbershiPlan3
      ]
    }

    const data = {
      data: {
        ...this.state.data,
        membershipPlan : JSON.stringify(membershipPlans) 
      },
    };

    console.log(data)

    try {
      const resp = await axios.put(this.state.path, data);
      console.log("testimonila resp -->", resp);
      if (resp.data.success === true) {
        window.location.reload();
        this.setState({ isSubmitting: false });
      }
    } catch (err) {
      console.log("error while testimonial data-->", err);
    }
  };

  //ON STATUS CHANGE
  // changeStatus = async (item) => {
  //   const prevArray = this.state.textArray;
  //   console.log(item.id, prevArray.length);
  //   for (let i = 0; i < prevArray.length; i++) {
  //     if (prevArray[i].id === item.id) {
  //       const newObj = {
  //         ...prevArray[i],
  //         status: !item.status,
  //       };
  //       prevArray[i] = newObj;
  //       const newArray = prevArray;
  //       console.log("updated array-->", newArray);
  //       //integrate put API here if got a new array
  //     }
  //   }
  // };

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>
                Membership Plan 1<small> Admin Panel</small>
              </CCardHeader>
              <CCardBody>
                <CKEditor
                  data={this.state.content1}
                  activeClass="p10"
                  content={this.state.content}
                  onChange={(e) => this.onChangeMember1(e)}
                />
              </CCardBody>

              <CCardHeader>
                Membership Plan 2<small> Admin Panel</small>
              </CCardHeader>
              <CCardBody>
                <CKEditor
                  data={this.state.content2}
                  activeClass="p10"
                  content={this.state.content}
                  onChange={(e) => this.onChangeMember2(e)}
                />
              </CCardBody>

              <CCardHeader>
                Membership Plan 3<small> Admin Panel</small>
              </CCardHeader>
              <CCardBody>
                <CKEditor
                  data={this.state.content3}
                  activeClass="p10"
                  content={this.state.content}
                  onChange={(e) => this.onChangeMember3(e)}
                />
              </CCardBody>
              <CCardFooter>
                <CButton
                  size="sm"
                  onClick={() => this.handleSubmit()}
                  color="primary"
                  disabled={this.state.isSubmitting}
                >
                  <CIcon name="cil-scrubber" />{" "}
                  {this.state.isSubmitting ? "Please wait..." : "Submit"}
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default MembershipPlans;
