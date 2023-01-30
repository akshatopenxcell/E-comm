import { useFormik } from "formik";
import { useContext} from "react";

import { useHistory, useParams } from "react-router-dom";

import axios from 'axios';
import * as Yup from "yup";


const passwordRegEx = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
export const resetPasswordInSchema = Yup.object({
 
    password: Yup.string().min(6).required().matches(passwordRegEx,"Password must include numeric, Uppercase, lowercase, special character"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });


const ResetPassword = (props) => {


    const history= useHistory();
   
    const params= useParams();
    const {token} = params;

    // //get email from provided token start
    // var base64Url = token.split('.')[1];
    // var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    // }).join(''));

    // const payload= JSON.parse(jsonPayload);
    // const emailFromToken= payload.email;

    //get email from provided token end



    const initialValues = {
        password: "",
        confirm_password: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: resetPasswordInSchema,
            onSubmit: (values, action) => {
                submitHandler(values, action)
            },
        });

    


    const submitHandler = (values, action) => {

       


       
       
        //redirect to login page
        history.push('/Login')

    }


    const passwordInputHasError = touched.password && errors.password;
    const confirmpasswordInputHasError = touched.confirm_password && errors.confirm_password;

    let passwordInputClasses = passwordInputHasError ? 'form-control invalid' : 'form-control';
    let confirmpasswordInputClasses = confirmpasswordInputHasError ? 'form-control invalid' : 'form-control';


    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Reset Password</h2>

            <form onSubmit={handleSubmit}>

                <div className='control-group'>

                    <div className={passwordInputClasses}>
                        <label htmlFor='password' >Password</label>
                        <input type='password' id='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        {passwordInputHasError ? (
                            <p className="error-text">{errors.password}</p>
                        ) : null}
                    </div>

                    <div className={confirmpasswordInputClasses}>
                        <label htmlFor='confirm_password'>Confirm Password</label>
                        <input type='password' id='confirm_password'
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        {confirmpasswordInputHasError ? (
                            <p className="error-text">{errors.confirm_password}</p>
                        ) : null}
                    </div>
                </div>

                <div className='control-group'>
                    <div className='form-actions'>
                        <button className="submitbtnsignin" >submit</button>
                    </div>
                </div>

            </form>
        </>
    )

}


export default ResetPassword;