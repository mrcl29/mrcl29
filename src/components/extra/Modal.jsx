import * as motion from "motion/react-client";

const Modal = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.2 }} // Inicia con opacidad 0 y escala un poco más pequeña
      animate={{ opacity: 1, scale: 1 }} // Aparece con opacidad 1 y escala 1
      transition={{ duration: 0.4, ease: "easeInOut" }} // Duración de 0.6 segundos con una transición suave
      className="bg-white text-black p-4 rounded-2xl font-medium text-left w-full max-w-lg border-3 border-black mx-auto"
    >
      <p
        className="text-sm sm:text-xl md:text-sm lg:text-base"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
    </motion.div>
  );
};

export default Modal;
