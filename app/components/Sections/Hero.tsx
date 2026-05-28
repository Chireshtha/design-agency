import '../../Styles/Hero.css';

const Hero = () => {
  return (
    <section id="home"
      className="d-flex flex-column align-items-center justify-content-center text-center text-white hero">
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <h1 className="display-3 fw-bold mb-4">
              Creative Digital Agency
            </h1>
            <p className="lead mb-4">
              We create modern websites and digital experiences for brands.
            </p>
            <button className="btn btn-lg custom-btn-1">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero;