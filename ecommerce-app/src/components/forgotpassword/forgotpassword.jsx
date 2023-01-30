//import { forgotPasswordInSchema } from "../../Schemas";
import { useFormik } from "formik";
import { useContext } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as Yup from "yup";

export const forgotPasswordInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
  });


const ForgotPassword = (props) => {


    
    const initialValues = {
        email: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: forgotPasswordInSchema,
            onSubmit: (values, action) => {
                submitHandler(values, action)
            },
        });


    const submitHandler = (values, action) => {

        

        console.log('emeil:', values.email)

        //create token and send mail start
        let token = '';

        async function getTokenAndSendMail() {
            try {
                let res = await axios.post('http://localhost:2000/getToken', { email: values.email })
                token = res.data.token;

                //add code for email send for reset password link start
                let mailData = {
                    from_email: "hhmakwana99@gmail.com",
                    to_email: values.email,
                    token: token
                }
                const url = 'http://localhost:2000/sendforgotmail';
                axios.post(url, mailData).catch(
                    function (error) {
                        // toast.error(error, {
                        //     position: toast.POSITION.TOP_RIGHT
                        // });
                        console.log(error);
                    });
                //add code for email send for reset password link end

                
                

                // toast.success('Reset Password Link Sent To Your email.', {
                //     position: toast.POSITION.TOP_RIGHT
                // })
                return res;
            }
            catch (err) {
                console.error(err);
            }
        }

        getTokenAndSendMail()
            .then(res => {
             console.log(res)
            }).catch((error)=>{
                console.log(error)
            })

        //create token and send mail end
      
    }


    const emailInputHasError = touched.email && errors.email;

    let emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>

            <form onSubmit={handleSubmit}>
                <div className='control-group'>
                    <div className={emailInputClasses}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        {emailInputHasError ? (
                            <p className="error-text">{errors.email}</p>
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


export default ForgotPassword;