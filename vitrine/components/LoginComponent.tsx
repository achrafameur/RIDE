const LoginComponent: React.FC = () => {
  return (
    <div className="divLogin">
      <h3 className="titre">CONNEXION</h3>
      <form className="row g-3 needs-validation">
        <div className="col-md-12">
          <label className="form-label">Identifiant</label>
          <input
            type="text"
            className="form-control inputs"
            id="validationCustom01"
            placeholder="Entrer votre identifiant"
            required
          />
        </div>
        <br></br>
        <div className="col-md-12">
          <label className="form-label">Mot de Passe</label>
          <input
            type="password"
            className="form-control inputs"
            placeholder="Entrer votre mot de passe"
            id="validationCustom02"
            required
          />
        </div>
        <div className="col-md-12">
          <button
            type="submit"
            style={{
              backgroundColor: "#C00000",
              color: "white",
              border: "none",
              width: "100%",
              height: 60,
            }}
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
