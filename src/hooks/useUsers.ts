// import { useQuery } from "react-query";
// import axios from "axios";

// export const useUsers = (activePage: number) => {
//   return useQuery(
//     // Add activePage as a dependency
//     ["users", activePage],
//     async () => {
//       const { data } = await axios.get(
//         // Change page number to the activePage param received
//         `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${activePage}`
//         // `https://reqres.in/api/users?page=${activePage}`
//       );

//       return data;
//     },
//     // This tells React-Query that this is Query is part of
//     // a paginated component
//     { keepPreviousData: true }
//   );
// };
