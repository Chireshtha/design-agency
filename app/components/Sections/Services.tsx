import services from '../../Data/servicedata'
import '../../Styles/Service.css'

const Services = () => {
  return (
    <section id="services" className="container py-5">
      <div className='row'>
        <h2 className="text-center mb-5">Our Services</h2>
      </div>

      <div className="row">
        {services.map((s, i) => (
          <div className="col-lg-3 col-md-6 col-12 mb-4" key={i}>
            <div className="card p-1 text-light shadow-sm h-100 text-center border-0 service-card" style={{backgroundColor:s.bg}}>
              <div className='card-body p-2 '>
                <img className='img-fluid img-service' src={s.image} alt={s.title} />
                <h5 className='card-title py-2'>{s.title}</h5>
                <p className='card-text text-start px-2 pb-2'>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
