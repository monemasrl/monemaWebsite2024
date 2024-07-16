"use client";
import { useState, useEffect } from "react";
import style from "./form.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

function SuccessMessage({ status }: { status: string | null }) {
  const t = useTranslations("FormContatti");
  return (
    <AnimatePresence>
      {status === "ok" && (
        <motion.div
          className={style.success}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div dangerouslySetInnerHTML={{ __html: t("success") }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function Form() {
  const t = useTranslations("FormContatti");
  const [nome, setNome] = useState<string>("");
  const [errorNome, setErrorNome] = useState<string>("");
  const [cognome, setCognome] = useState<string>("");
  const [errorCognome, setErrorCognome] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");
  const [errorMessaggio, setErrorMessaggio] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (nome.length < 3 && nome.length > 0) {
      setErrorNome(t("err_nome"));
    } else {
      setErrorNome("");
    }
    if (cognome.length < 3 && cognome.length > 0) {
      setErrorCognome(t("err_cognome"));
    } else {
      setErrorCognome("");
    }

    if (mail.length < 6 && mail.length > 0) {
      setErrorMail(t("err_email"));
    } else if (mail.length > 0 && !mail.includes("@")) {
      setErrorMail(t("err_email"));
    } else {
      setErrorMail("");
    }

    if (messaggio.length < 10 && messaggio.length > 0) {
      setErrorMessaggio(t("err_messaggio"));
    } else {
      setErrorMessaggio("");
    }

    //controllo sul submit del form netlify
    if (
      nome.length < 3 ||
      cognome.length < 3 ||
      mail.length < 3 ||
      !mail.includes("@") ||
      messaggio.length < 10
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [nome, mail, messaggio, cognome]);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__formcontatti.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <form
      className={`${style.form} ${style.form__contatti}`}
      name="contatti"
      onSubmit={handleFormSubmit}
    >
      <SuccessMessage status={status} />
      <input type="hidden" name="form-name" value="contatti" />
      <p className={style.form__contatti__txt}>
        Hai bisogno di fare una valutazione, vuoi sapere quanto potrebbe costare
        la realizzazione del tuo progetto? Contattaci!
      </p>
      <p>
        {" "}
        <input
          onChange={(e) => {
            setNome(e.target.value);
          }}
          type="text"
          placeholder="Nome"
          name="nome"
          id="nome"
          required
        />
      </p>
      <p>
        <input
          onChange={(e) => {
            setCognome(e.target.value);
          }}
          type="text"
          name="cognome"
          placeholder="Cognome"
          id=""
          required
        />
      </p>
      <p>
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          id="youremail"
          required
        />
      </p>

      <p>
        <textarea
          onChange={(e) => {
            setMessaggio(e.target.value);
          }}
          placeholder="Messaggio"
          name="message"
          id="yourmessage"
          required
        ></textarea>
      </p>
      <div style={{ height: "20px" }}>
        {errorNome && <p className={style.error}>{errorNome}</p>}
        {errorCognome && <p className={style.error}>{errorCognome}</p>}
        {errorMail && <p className={style.error}>{errorMail}</p>}
        {errorMessaggio && <p className={style.error}>{errorMessaggio}</p>}
      </div>
      <p>
        <button disabled={submit ? false : true} type="submit">
          Invia
        </button>
      </p>
    </form>
  );
}

export default Form;
