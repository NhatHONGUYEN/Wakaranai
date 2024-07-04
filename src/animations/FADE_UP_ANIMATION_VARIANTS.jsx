export default {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      staggerChildren: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 2,
    },
  },
};
