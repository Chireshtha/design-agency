'use client'
import { useState } from 'react'
import Validation from '../../components/Form/Validation'
import '../../Styles/Contact.css'

const Contact = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false)

  const handleInput = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const ValidationErrors = Validation(values);
    setErrors(ValidationErrors);

    if(!ValidationErrors.name && !ValidationErrors.email && !ValidationErrors.message){
      setSuccess(true);
      setValues({
        name:'',
        email:'',
        message:'',
      })
      setTimeout(()=>{
        setSuccess(false);
      },5000);
    }
    else{
      setSuccess(false);
    }
  }


  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <form
            onSubmit={handleSubmit}
            className="p-4 rounded-4 shadow"
          >
            <input className="form-control mb-3" placeholder="Name" name='name' value={values.name} onChange={handleInput} />
            {errors.name && (<p className='text-danger'>{errors.name}</p>)}
            <input className="form-control mb-3" placeholder="Email" type='email' name='email' value={values.email} onChange={handleInput} />
            {errors.email && (<p className='text-danger'>{errors.email}</p>)}

            <textarea className="form-control mb-3" placeholder="Message" name='message' value={values.message} rows={4} onChange={handleInput} />
            {errors.message && (<p className='text-danger'>{errors.message}</p>)}


            <button type='submit' className="btn custom-btn-2 w-100">
              Send Message
            </button>
            {success && <div className='btn btn-success custom-btn-3 d-flex align-items-center justify-content-center mt-2 text-center position-absolute'>Message Sent</div>}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
