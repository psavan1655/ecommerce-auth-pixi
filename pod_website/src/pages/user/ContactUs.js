import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import axios from "axios";

function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });

  const { name, address, email, phone, subject, details } = values;

  const contactPost = (formData) => {
    return axios({
      url: "http://127.0.0.1:3000/api/content/contact",
      method: "post",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Application/json",
      },
      data: JSON.stringify(formData["data"]),
    })
      .then((res) => {
        return console.log(JSON.stringify(formData["data"]));
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    contactPost({ name, address, email, phone, subject, details })
      .then(() => {
        setValues({
          ...values,
          name: "",
          address: "",
          email: "",
          phone: "",
          subject: "",
          details: "",
        });
      })
      .catch(console.log("Error in sending response"));
  };

  return (
    <React.Fragment>
      <Header />

      <section id='contact-us'>
        <div className='contact-us-wrapper'>
          <div className='container h-100'>
            <div className='row align-items-center'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-7'>
                <ScrollAnimation animateIn='fadeInDown'>
                  <div className='contact-us-title'>
                    <h4>ContactUs</h4>
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-5'>
                <ScrollAnimation animateIn='fadeIn'>
                  <form onSubmit={onSubmit} className='mt-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control custom-input'
                        id='name'
                        placeholder='Name'
                        onChange={handleChange("name")}
                        value={name}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control custom-input'
                        id='address'
                        placeholder='Address'
                        onChange={handleChange("address")}
                        value={address}
                      />
                    </div>
                    <div className='row'>
                      <div className='form-group col-md-6 padding-right'>
                        <input
                          type='email'
                          className='form-control custom-input'
                          id='email'
                          placeholder='Email'
                          onChange={handleChange("email")}
                          value={email}
                        />
                      </div>
                      <div className='form-group col-md-6 padding-left'>
                        <input
                          type='tel'
                          maxLength={10}
                          className='form-control custom-input'
                          id='phone'
                          placeholder='Phone'
                          onChange={handleChange("phone")}
                          value={phone}
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control custom-input'
                        id='subject'
                        placeholder='Subject'
                        onChange={handleChange("subject")}
                        value={subject}
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        className='form-control custom-textarea'
                        id='details'
                        rows={4}
                        placeholder='Type your message here...'
                        defaultValue={""}
                        onChange={handleChange("details")}
                        value={details}
                      />
                    </div>
                    <input
                      type='submit'
                      className='btn contact-submit-btn pull-right'
                    />
                  </form>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
