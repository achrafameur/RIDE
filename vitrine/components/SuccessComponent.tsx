const SuccessComponent: React.FC = () => {
  return (
    <div className="divInscription">
      <p>
        <span style={{ color: "#C00000" }}>▷</span> Depuis 2008, RIDE, agence de
        location de voitures de luxe propose ses services partout en France{" "}
        <br></br>
        (Paris, Monaco, Nice, Cannes, Saint-Tropez,Courchevel, Saint-Moritz...).{" "}
        <br></br>
        Notre expérience est à votre service pour répondre à toutes vos demandes
      </p>
      <hr className="ligne"></hr>
      <h3 className="titre">INSCRIPTION</h3>
      <div className="divGris">
        <p className="textSuccess">
          Votre demande d’inscription a bien été prise en compte.<br></br>
          Vous allez recevoir une confirmation par mail, en attendant vous
          pouvez télécharger l’application.
        </p>
        <br></br>
        <div className="d-flex" style={{ justifyContent: "space-around" }}>
          <img
            src="/images/App_Store.png"
            style={{ width: "160px", height: "44px" }}
          />
          <img
            src="/images/Google_play.png"
            style={{ width: "160px", height: "44px" }}
          />
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default SuccessComponent;
