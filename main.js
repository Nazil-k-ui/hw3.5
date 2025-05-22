// const user = {
//     id: 101,
//     name: "user",
//     age: 28,
//     job: "Frontend Developer",
//     skills: {
//       programming: ["JavaScript", "TypeScript", "React"],
//       softSkills: ["communication", "teamwork"],
//     },
//     contacts: {
//       email: "user@example.com",
//       phone: "+996555123456",
//     },
//   };
  
  
//   const { name, age, job } = user;
//   console.log(name, age, job); 
  
//   const { programming } = user.skills;
//   console.log(programming[0]); 
  
//   const { softSkills } = user.skills;
//   const [...allSoftSkills] = softSkills;
//   console.log(allSoftSkills); 
  
//   console.log(user.address?.city || "Адрес не указан"); 

const users = [
    { name: "user1", age: 29, address: { city: "Bishkek" } },
    { name: "user2", age: 23 },
    { name: "user3", age: 35, address: { city: "Madrid" } },
  ];
  
  const updatedUsers = users.map(user => {
    return {
      ...user,
      city: user.address?.city ?? "Город не указан"
    };
  });
  
  console.log(updatedUsers);
  