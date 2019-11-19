import React from 'react';

import { SendMailForm } from '../../components/SendMailForm/SendMailForm';
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';


const Contact = (props) => {
   return (
      <>
      {((props.location.aboutProps && !props.location.aboutProps.hideContactInfo) ||
         (!props.location.aboutProps)) &&  <ContactInfo />}

         <SendMailForm />
      </>
   );
};

export default Contact;