import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9738836b-c671-4122-82e7-81dab4466f63");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a massage <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In voluptatem labore repellat eius sed ut aspernatur porro 
            eum, aliquam sunt quaerat, alias vel minima reprehenderit, 
            inventore culpa molestiae animi rerum?</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@GHreatStack.dev</li>
            <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
            <li> <img src={location_icon} alt="" /> Some place in the earth, #2341</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Numper</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your messages here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact