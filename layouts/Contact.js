import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mleqlpwb");
  if (state.succeeded) {
    return <p className="mt-30">We'll be in touch shortly!</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
