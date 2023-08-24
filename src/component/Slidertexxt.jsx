import { motion } from "framer-motion";
const Slidertexxt = ({ images, currentIndex, ref1 }) => {
  return (
    <div className="text-left w-[433px] absolute top-20 left-20">
      <motion.div
        initial={{
          y: ref1.current === "prev" ? -90 : -90,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        key={images[currentIndex].title}
        className="text-[28px]"
      >
        {images[currentIndex].title}
      </motion.div>
      <motion.div
        initial={{
          y: ref1.current === "prev" ? -90 : -90,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        key={images[currentIndex].name}
        className="text-[56px] text-[#ffb500] w-[217px]"
      >
        {images[currentIndex].name}
      </motion.div>
      <motion.div
        initial={{
          y: ref1.current === "prev" ? -90 : -90,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        key={images[currentIndex].description}
        className="text-[18px] text-[#ffb500]"
      >
        {images[currentIndex].description}
      </motion.div>
    </div>
  );
};


export default Slidertexxt;
