// // form handling by useref

// import React, { useRef } from 'react'

// function App() {

//    const name = useRef(null);
//    const age = useRef(null);

//    const handleSubmit = (details)=>{
//       details.preventDefault();
//       console.log(name.current.value,age.current.value);
//    }

//   return (
//     <div className='p-4'>
//      <form action="" onSubmit={handleSubmit}>
//       <input className='border-2 mr-2' ref={name} type="text" name="name" placeholder='name'/>
//       <input className='border-2 mr-2' ref={age} type="text" name="age" placeholder='age'/>
//       <input type="submit" value="Submit" />
//      </form>
//     </div>
//   )
// }

// export default App



// // form handling by usestate (controll component)
// import React from 'react'

// function App() {
//   const [val, setVal] = React.useState({name:"",email:""})
//   const handleClick = (e)=>{
//     e.preventDefault();
//     console.log(val);
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handleClick}>
//         <input onChange={(event)=>setVal({...val, name:event.target.value})} type="text"  placeholder='name' />
//         <input onChange={(event)=>setVal({...val, email:event.target.value})} type="email"  placeholder='email' />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }

// export default App



//react hook form handling (usefoem)

import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {register,handleSubmit} = useForm()
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default App

