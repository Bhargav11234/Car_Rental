// import { useEffect, useState } from 'react';
// import axios from "axios";
// import "./admin.css"
// import { BASE_URL } from "./../../utils/config";

// import SideNavBar from './sidenavbar';


// function Admin() {
//   const [bookings,setBookings]=useState([])
//   useEffect(()=>{
//      axios.get(`${BASE_URL}/booking/b`,bookings)
//     //  .then(console.log(users))
//     //  .then(console.log(bookings))
//     //  .then(console.log(bookings.data))
//      .then(bookings=>setBookings(bookings))
//      .catch(err=>console.log(err))
//      console.log(bookings[0].firstname);
//   },[])
//   return (
//     <>
//     <SideNavBar/>
//     <h2 style={{textAlign:"Center"}} className='mt-30'>Bookings of User</h2>
//     {/* <div className='mt-20 mb-20 d-flex justify-content-center align-items-center'>
//       <div className='w-50'> */}
   
//     {/* <table className='table'>
      // <thead>
      //   <tr>
      //     <th>
      //       firstName
      //     </th>
      //     <th>
      //       lastName
      //     </th>
      //     <th>
      //       email
      //     </th>
      //     <th>
      //     phoneNumber
      //     </th>
      //     <th>
      //     fromAddress
      //     </th>
      //     <th>
      //     toAddress
      //     </th>
      //     <th>
      //     persons
      //     </th>
      //     <th>
      //     luggages
      //     </th>
      //     <th>
      //     journeyDate
      //     </th>
      //     <th>
      //     journeyTime
      //     </th>
      //     <th>
      //     notes
      //     </th>
      //   </tr>
      //   </thead>
//         <tbody>
//           { */}
          
//           <p>
//           {
            
//             bookings.map(bookings=>{
//              return <tr>
//                 {/* { console.log(bookings.firstname)} */}
//                 <td>{bookings.firstname}</td>
//                 {/* <td>{bookings.email}</td> */}
//                 <td>{bookings.role}</td>
//               </tr>
//             })
//           }
//           </p>
//         {/* </tbody>
      
//     </table> */}
//     {/* </div> */}
//     {/* </div> */}

//     </>
//   );
// }

// export default Admin;


import { useEffect, useState } from 'react';
import axios from "axios";
import "./admin.css"
import { BASE_URL } from "./../../utils/config";

import SideNavBar from './sidenavbar';

function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/booking/b`)
      .then(response => {
        setBookings(response.data);
        console.log(response.data); // Ensure data is fetched correctly
      })
      .catch(err => console.log(err));
  }, []);

  // You can't access bookings[0] here as bookings is still an empty array

  return (
    <>
      <SideNavBar />
      <h2 style={{ textAlign: "center" }} className='mt-30'>Bookings of User</h2>
      <div className='mt-20 mb-20 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <table className='table'>
      <thead>
        <tr>
          <th>
            firstName
          </th>
          <th>
            lastName
          </th>
          <th>
            email
          </th>
          <th>
          phoneNumber
          </th>
          <th>
          fromAddress
          </th>
          <th>
          toAddress
          </th>
          <th>
          persons
          </th>
        
          <th>
          journeyDate
          </th>
          <th>
          journeyTime
          </th>
          
        </tr>
        </thead>
        <tbody>
  {bookings.map((booking, index) => (
    <tr key={index}>
      <td>{booking.firstName}</td>
      <td>{booking.lastName}</td>
      <td>{booking.email}</td>
      <td>{booking.phoneNumber}</td>
      <td>{booking.fromAddress}</td>
      <td>{booking.toAddress}</td>
      <td>{booking.persons}</td>
      <td>{booking.journeyDate}</td>
      <td>{booking.journeyTime}</td>
     
     
    </tr>
  ))}
</tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default Admin;
