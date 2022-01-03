import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Bla die bla" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
