import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';

import { LanguageContext } from '../../contexts/LanguageContext';
import { Btn } from '../Btn/Btn';
import { sendMessageToEmail } from '../../utils/api';

const Response = styled.div`
   display: ${props => props.display ? 'block' : 'none'};
   flex-direction: column;
   padding-top: 100px;
   h3 {
      font-style: italic;
      text-align: center;
   }
`;

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

export const SendMailForm = (props) => {
   let content;
   const [formState, setFormState] = useState('form');

   const inputEmail = useRef(null);
   const inputMessage = useRef(null);

   const { translations:trans } = useContext(LanguageContext).translations;

   const onSendMessage = async () => {
      const email = inputEmail.current.value || '';
      const message = inputMessage.current.value || 'prazna poruka';

      let response = await sendMessageToEmail(email, message);
      if (response) {
         response.json()
            .then(res => {
               setFormState('success')
            })
            .catch(err => {
               setFormState('error');
            });
      } else {
         setFormState('error');
      }


   };

   const onTryAgain = () => {
      setFormState('form');
   }

   switch (formState) {
      case 'form':
         content = (
            <FormWrapper>
               <div>{trans.leaveYourMsg}</div>
               <div>{trans.emaiReqlResponse}</div>
               <br />

               <div className='Form'>
                  <div className='InputWrapper'>
                     <label>e-mail:</label>
                     <input
                        className='InputElement'
                        type='text'
                        ref={inputEmail}
                     />
                  </div>

                  <div className='InputWrapper'>
                     <label>{trans.message}:</label>
                     <textarea
                        className='InputElement'
                        rows="10"
                        spellCheck="false"
                        ref={inputMessage}
                     />
                  </div>

                  <Btn
                     className='Center'
                     onClick={onSendMessage}
                  >{trans.send}</Btn>

               </div>
            </FormWrapper>
         );
         break;

      case 'error':
         content = (
            <Response display='false'>
               <h3 className='Center'>{trans.errorSendingMsg}</h3>
               <Btn
                  className='Center'
                  onClick={onTryAgain}
               >{trans.tryAgin}</Btn>
            </Response>
         );
         break;


      default:
         content = (
            <Response display='false'>
               <h3 className='Center'>{trans.messageSuccessSend}</h3>
               <h3 className='Center'>{trans.quickReplay}</h3>
            </Response>
         )
         break;
   }


   return (
      <>
         {content}
      </>
   )
}