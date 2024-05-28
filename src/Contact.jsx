import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
        
      <form action="#" method="POST">
        <div className="titles">
          <h2>Contact</h2>
        </div>
       
        <p className="contact-text">
        Please contact me directly at {' '}
          <a href="mailto:Alejandrov02430@gmail.com">Alejandrov02430@gmail.com</a> or through this form: 
        </p>
        <input type="email" id="email" name="email" placeholder="Your email" required />
        <textarea id="message" name="message" placeholder="Your message..." required></textarea>
        <button type="submit" className="github-btn">
  Send
</button>
      </form>
      
    </section>
  );
};

export default Contact;
