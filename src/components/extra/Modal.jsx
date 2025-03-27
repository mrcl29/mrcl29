import * as motion from "motion/react-client";

const ContactInfo = ({ text }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.7 }} // Inicia con opacidad 0 y escala un poco más pequeña
    animate={{ opacity: 1, scale: 1 }} // Aparece con opacidad 1 y escala 1
    transition={{ duration: 0.6, ease: "easeInOut" }} // Duración de 0.5 segundos con una transición suave
    className="bg-white text-black p-4 rounded-2xl font-medium text-left w-130 border-3 border-black">
      <p
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
    </motion.div>
  );
};

export default ContactInfo;
