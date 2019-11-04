import React from 'react';
import styled from 'styled-components';

import { Btn } from '../Btn/Btn';

const FormWrapper = styled.div`
   box-sizing: border-box;
   padding: 20px 0;

   p:first-of-type {
      font-style: italic; 
      text-align: center; 
   }

   .Form {
   }
      
   .InputWrapper {
      padding: 10px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 1fr;


      @media (min-width: 992px) {
         grid-template-columns: 100px 1fr;
      }

      Label {
         font-weight: bold;
         display: block;
         margin-bottom: 8px;
      }

      .InputElement {
         outline: none;
         border: 1px solid #ccc;
         background-color: white;
         font: inherit;
         padding: 6px 10px;
         display: block;
         width: 100%;
         box-sizing: border-box; 
         
         :focus {
            outline: none;
            background-color: #eee;
         }
      }
   }

`;

export const SendMailForm = (props) => (
   <FormWrapper>
      <p>Leave your messsage here, and also your email if you want response. I will shortly replay to your message.</p>

      <div className='Form'>
         <div className='InputWrapper'>
            <label>e-mail:</label>
            <input
               className='InputElement'
               type='text'
            />
         </div>

         <div className='InputWrapper'>
            <label>message:</label>
            <textarea
               className='InputElement'
               rows="12"
               spellCheck="false"
            />
         </div>

         <Btn className='Center'>Send</Btn>

      </div>
   </FormWrapper>
)
