import React from 'react';

import { SendMailForm } from '../../components/SendMailForm/SendMailForm';
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';


const Contact = (props) => (
   <>
      <ContactInfo />       

      <SendMailForm />
   </>
)

export default Contact;