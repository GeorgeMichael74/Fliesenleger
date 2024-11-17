import React from 'react';
import "./Kontakt.css";
import email from '../../assets/email.png';
import phone_1 from '../../assets/phone_1.png';
import message from '../../assets/message.png';
import location from '../../assets/location.png';


const Kontakt = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Versendung....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "baa7a261-1e10-4179-9eaf-4c7b1bd37f5f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email wurde erfolgreich Versendet");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

   return (
      <div className="contact" id='kontakt'>
         <div className="contact-col">
            <h3>Senden Sie uns eine Nachricht <img src={email} alt="" /></h3>
            <p>
               Sie können uns gerne über das Kontaktformular erreichen oder
               unsere Kontaktinformationen unten finden. Ihr Feedback, Ihre
               Fragen und Vorschläge sind uns wichtig, da wir bestrebt sind,
               unseren Kunden einen außergewöhnlichen Service zu bieten.
            </p>
            <ul>
                <li><img src={message} alt="" />contact@fliesenlegerhaus.de</li>
                <li><img src={phone_1} alt="" />+49 1521 8222217</li>
                <li><img src={location} alt="" />77 Massarstraße<br/>54662 Speicher</li>
            </ul>
         </div>

         <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Ihr Name</label>
                <input type="text" name="name" placeholder="Geben Sie Ihren Namen ein" required/>
                <label htmlFor="">Telefonnummer</label>
                <input type="tel" name="phone" placeholder="Geben Sie Ihre Handynummer ein" required/>
                <label htmlFor="">Schreiben Sie hier Ihre Nachrichten</label>
                <textarea name="message" rows="6" placeholder="Geben Sie Ihre Nachricht ein" required></textarea>
                <button type="submit" className="btn dark-btn">Einsenden</button>
            </form>
            <span>{result}</span>
         </div>
      </div>
   );
};

export default Kontakt;
