import React from 'react';

import { PersonalData } from '../../utils/constants';

export const ContactInfo = (props) => (
   <>
      <h1>Contact Info</h1>
      <label>mobile/viber: </label>
      <span>{PersonalData.phone}</span>
      <br />

      <label>mail: </label>
      <span>{PersonalData.email}</span>
      <br />
      <hr />
   </>
)
