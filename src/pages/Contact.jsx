import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
export default function Contact() {
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer />
      <BackToTop targetId={top}/>
    </div>
  )
}