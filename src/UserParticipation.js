// import React, { useState } from 'react';

// const UserParticipation = () => {
// const [options, setOptions] = useState([
//     { id: 1, text: 'JavaScript', votes: 0 },
//     { id: 2, text: 'Java', votes: 0 },
//     { id: 3, text: 'Python', votes: 0 },
//     { id: 4, text: 'C#', votes: 0 },
//   ]);
// const [selectedOption, setSelectedOption] = useState(null);
//   const handleVote = (optionId) => {
//     if (selectedOption === optionId) {
//       // User has already voted for this option, so remove the vote
//       const updatedOptions = options.map((option) => {
//         if (option.id === optionId) {
//           return {
//             ...option,
//             votes: option.votes - 1,
//           };
//         }
//         return option;
//       });
//       setOptions(updatedOptions);
//       setSelectedOption(null);
//     } else {
//       const updatedOptions = options.map((option) => {
//         if (option.id === optionId) {
//           return {
//             ...option,
//             votes: option.votes + 1,
//           };
//         } else if (option.id === selectedOption) {
//           return {
//             ...option,
//             votes: option.votes - 1,
//           };
//         }
//         return option;
//       });
//       setOptions(updatedOptions);
//       setSelectedOption(optionId);
//     }
//   };
// }
