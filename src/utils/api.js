
export const sendMessageToEmail = async (emailFrom, message) => {
   try {
      const formData = new FormData();
      formData.append('email', emailFrom);
      formData.append('message', message);
      // console.log(formData);
      
      let response = await fetch('http://localhost:8000', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
         // body: formData
         body: JSON.stringify({email: emailFrom, message: message})
      });

      return response;

   } catch (err) {
      console.log(err)
   }
};

export const awakeBackend = async () => {
   try {
      fetch('http://localhost:8000');
   } catch(err) {
      console.log(err);
   }
}

export const getPersonsAsync = async () => {
   try {
      // let persons = await fetch('https://persons-vezba.herokuapp.com/');
      let persons = await fetch('http://localhost:8000');
      persons = await persons.json();
      return persons;
   } catch(err) {
      console.log(err);
   }
};