// import React from "react";
// import { useFormik } from "formik";
// // import { useContext } from "react";

// function TextInput({ name, validation }) {
//   const formik = useFormik();
//   const { handleChange, handleBlur } = formik;

//   return (
//     <div className="flex flex-col w-[22em] mb-2">
//       <label htmlFor={validation}>{name}</label>
//       <input
//         type="text"
//         id={validation}
//         name={validation}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2"
//       />
//     </div>
//   );
// }

// export default TextInput;


// TRY ____________________________ :

// import React from "react";
// import { Field, ErrorMessage } from "formik";

// function TextInput({ name, validation }) {
//   return (
//     <div className="flex flex-col w-[22em] mb-2">
//       <label htmlFor={validation}>{name}</label>
//       <Field
//         type="text"
//         id={validation}
//         name={validation}
//         className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2"
//       />
//       <ErrorMessage
//         name={validation}
//         component="div"
//         className="text-[12px] text-red-500 pt-2"
//       />
//     </div>
//   );
// }

// export default TextInput;

// <div className="flex flex-col w-[22em] mb-2">
//   <label htmlFor={name}>{name}</label>
//   <Field
//     type="text"
//     id={name}
//     name={name} // Use the 'name' prop here
//     className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2"
//   />
//   <ErrorMessage
//     name={name}
//     component="div"
//     className="text-[12px] text-red-500 pt-2"
//   />
// </div>
