import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { submitSignup } from '../../actions/singupAction'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      mobileno:'',
      username:'',
      password:'',

      formErrors: { name: '', email:'',mobileno:'',password:'',username:'' },
      nameValid: false,
      emailValid: false,
      mobilenoValid:false,
      usernameValid:false,
      passwordValid:false,

      formValid: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };


  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let mobilenoValid = this.state.mobilenoValid;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;


    switch (fieldName) {
      case 'name':
      nameValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.name = nameValid ? '' : ' * Invalid Name :Name contain characters only.';
        break;
     
        case 'email':
        emailValid = value.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        fieldValidationErrors.email = emailValid ? '' : '* Invalid email : Please enter valid email-ID.'
        break;

        case 'mobileno':
        mobilenoValid = value.match(/^[0-9]{10}$/);
        fieldValidationErrors.mobileno = mobilenoValid ? '' : 'Invalid Mobile number ';
        break;

        case 'username':
        usernameValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.username = usernameValid ? '' : ' * Invalid username :username contain characters only.';
        break;
     

        case 'password':
          passwordValid = value.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
          fieldValidationErrors.password = passwordValid ? '' : "*Please enter secure and strong password."
          break;   
         

        default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      mobilenoValid:mobilenoValid,
      usernameValid:usernameValid,
      passwordValid:passwordValid,

    }, this.validateForm);
  }
  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state. emailValid && this.state.usernameValid &&this.state.mobilenoValid && this.state.passwordValid});
  }
  errorClass(error) {
    if (error) {
      return (error.length === 0 ? '' : 'brder-red');
    }
    else {
      return ('');
    }

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    const SignupDetails ={
      name:this.state.name,
      email : this.state.email,
      mobileno:this.state.mobileno,
      password :this.state.password,
      username :this.state.username

    }
    this.props.submitSignup(SignupDetails);
  }



  render() {
    return (
      <div>
        {this.props.msg ?
        <center><div className="bg-color">{this.props.msg}</div></center>
      :''}
      <div className="div-align">
      
        <h3>Registration page</h3>
        <form method="" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <label><span className="errorMsg">*</span> Name</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.name)}`}
            name="name"
            value={this.state.name}
            onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.name}</div>


          <label><span className="errorMsg">*</span> Email</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.email)}`} name="email" value={this.state.email} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.email}</div>

          <label><span className="errorMsg">*</span>Mobile Number:</label>
            <input type="number" required className={` ${this.errorClass(this.state.formErrors.mobileno)}`} name="mobileno" value={this.state.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.mobileno}</div>

            <label><span className="errorMsg">*</span> UserName</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.username)}`}
            name="username"
            value={this.state.username}
            onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.username}</div>

            <label><span className="errorMsg">*</span>Password</label>
            <input type="password" required className={`${this.errorClass(this.state.formErrors.password)}`} name="password" value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.passwordValid}</div>


          <button type="submit" className="button" value="Register" >Signup</button>
        </form>
      <div className="errorMsg">{this.props.error}</div>
      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { error,msg } = state.SignupReducers;
  return { error,msg};
};

export default withRouter(connect(mapStateToProps, { submitSignup })(Signup));
