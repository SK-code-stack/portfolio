export const fadeIn  = (direction, delay) =>{

    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0, 
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0, 
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }

}
export const fadeUp = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };
 export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.5,
      },
    },
  };

 export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };  

 export const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };
  
 export const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };
  
export const fadeSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };
  