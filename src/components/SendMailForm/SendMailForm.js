import React from 'react';
import styled from 'styled-components';

import { Btn } from '../Btn/Btn';

const FormWrapper = styled.div`
   box-sizing: border-box;
   padding: 20px 0;

   p, div:first-of-type {
      font-style: italic; 
      text-align: center; 
   }
   p, div:nth-child(2) {
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
            background-color: #f7f7f7;
         }
      }
   }

`;

export const SendMailForm = (props) => (
   <FormWrapper>
      {/* <p>Leave your messsage and I will shortly replay to you.</p>
      <p>Email is required only if you want my response</p> */}
      <div>Leave your messsage and I will shortly replay to you.</div>
      <div>E-mail is required only if you want my response.</div>
      <br />


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
