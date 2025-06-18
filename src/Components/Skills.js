import React from 'react'
import useTheme from '../Context/Theme';


export default function Skills() {
        const { darkMode } = useTheme();

        const list = [
          { name: 'HTML', icon: require('../images/html.png') },
          { name: 'CSS', icon: require('../images/css-3.png') },
          { name: 'JavaScript', icon: require('../images/js.png') },
          { name: 'jQuery', icon: require('../images/jquery.png') },
          { name: 'React JS', icon: require('../images/react.png') },
          { name: 'Tailwind CSS', icon: require('../images/tailwind.png') },
          { name: 'Bootstrap', icon: require('../images/bootstrap.png') },
          { name: 'Node JS', icon: require('../images/node.png') },
          { name: 'Express JS', icon: require('../images/express.png') },
          { name: 'PHP', icon: require('../images/php.png') },
          { name: 'MySQL', icon: require('../images/mysql.png') },
          { name: 'MongoDB', icon: require('../images/mongo.png') },
          { name: 'Python', icon: require('../images/python.png') },
          { name: 'Django', icon: require('../images/django.png') },
          { name: 'Designing', icon: require('../images/design.png') },
          { name: 'Git', icon: require('../images/git.png') },
          { name: 'GitHub', icon: require('../images/github.png') },
          { name: 'Kotlin', icon: require('../images/kotlin.png') },
          { name: 'Android', icon: require('../images/android.png') },
          { name: 'Firebase', icon: require('../images/firebase.png') },
          { name: 'PostgreSQL', icon: require('../images/pos.png') },
        ];

  
  return (
    <>
    <div className='pt-20  -mt-24 mb-8  z-50 h-full' id='skills'>
        <h1 className={` font-custom  bg-gradient-to-b text-5xl flex justify-center ${
              darkMode ? 'from-zinc-200 via-zinc-400 to-zinc-50' : 'from-zinc-300 via-zinc-900 to-zinc-300'
            } bg-clip-text font-light tracking-wide text-transparent transition-all duration-1000`}>Tech<h1 className='color_animate '>&nbsp;Stack</h1></h1>
        <div className="  h-auto py-16 flex items-center justify-center">
          <div className="w-[70%] mx-auto">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {list.map(({ name, icon }, index) => (
                   <div
                   key={index}
                   className="bg-custom-mylight dark:bg-custom-myblack px-4 py-2 rounded-md myshadow flex items-center gap-2"
                 >
                   <img src={icon} alt="" className='h-6 ' />
                   <h1 className='text-sm text-custom-myblack dark:text-custom-mylight'>
                   {name}
                   </h1>
                 </div>
              ))}
            </div>
          </div>
      </div>


    </div>
    </>
  )
}
