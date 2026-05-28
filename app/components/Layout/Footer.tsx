import '../../Styles/Footer.css'

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="bg-footer text-white text-center py-4">
            <p className="mb-0">
                &copy; {year} Brighture Innovations. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
