class Section extends React.Component {
    render(){
   
        return (
            <section>
            <h1>Contact</h1>
            <form>
              <ul>
                <li>
                  <label className="a" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li>
                  <label className="a" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="@gmail.com"
                    required
                  />
                </li>
                <li>
                  <label className="a" htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </li>
              </ul>
              <button className="b" type="submit">Submit</button>
            </form>
          </section>
        )
    }
}
