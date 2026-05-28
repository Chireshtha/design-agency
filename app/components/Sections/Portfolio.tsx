import projects from '../../Data/portfoliodata'
import '../../Styles/Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-portfolio py-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>

        <div className="row">
          {projects.map((p, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card shadow-sm h-100 card-portfolio">
                <div className='card-body'>
                <img src={p.image} alt={p.title} className='img-fluid portfolio-img'/>
                <h5 className="mt-3 text-center">{p.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;