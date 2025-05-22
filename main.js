const user = {
    id: 101,
    name: "user",
    age: 28,
    job: "Frontend Developer",
    skills: {
      programming: ["JavaScript", "TypeScript", "React"],
      softSkills: ["communication", "teamwork"],
    },
    contacts: {
      email: "user@example.com",
      phone: "+996555123456",
    },
  };
  
  
  const { name, age, job } = user;
  console.log(name, age, job); 
  
  const { programming } = user.skills;
  console.log(programming[0]); 
  
  const { softSkills } = user.skills;
  const [...allSoftSkills] = softSkills;
  console.log(allSoftSkills); 
  
  console.log(user.address?.city || "Адрес не указан"); 
  