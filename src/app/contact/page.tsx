

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-bg">
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-header">
              <h1 className="contact-title">Contact Us</h1>
            </div>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-textarea"></textarea>
              </div>
              <div className="form-group full-width button-container">
                <button className="btn">Button</button>
              </div>
              <div className="contact-email">asfaqasim144@gmail.com</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
