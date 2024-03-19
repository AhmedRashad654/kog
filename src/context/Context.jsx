import { createContext, useContext, useState } from "react";
const ContextUser = createContext();

function ContextProvider( { children } ) {
  const [ userDashboaerd, setUserDashboard ] = useState( [] );
  const [ direction, setDirection ] = useState( 'EN' );
  const [ contact, setContact ] = useState( [] );
  const [ servicesDashboaed, setServicesDashboard ] = useState( [] );
  const [ allPartner, setAllPartner ] = useState( [] );
  const [ allSlider, SetAllSlider ] = useState( [] );
  const [ formAdmin, setFormAdmin ] = useState( [] );
  const [ noForm, setNoForm ] = useState();
  const [ noquestion, setNoQuestion ] = useState();
       async function getAllUserDashboard() {
         try {
           let request = await fetch(
             "https://kog.pythonanywhere.com/api/v1/accounts/users/"
           );
           let response = await request.json();
           setUserDashboard(response);
         } catch (error) {
           console.log(error);
         }
  }

  function english() {
    setDirection( "EN" );
    document.body.style.direction='ltr'
  }
  function arabic() {
    setDirection( "AR" );
    document.body.style.direction = "rtl";
  }
  async function getAllServicesDashboard() {
    try {
      let request =await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/services/"
      );
      let response = await request.json();
      setServicesDashboard( response );
    } catch ( error ) {
      console.log( error );
    }
  }
  async function getAllContact() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/contacts/"
      );
      let response = await request.json();
      setContact( response );
    } catch ( error ) {
      console.log( error );
    }
  }
  async function getAllPartner() {
    let request = await fetch(
      "https://kog.pythonanywhere.com/api/v1/home/partners/"
    );
    let response = await request.json();
    setAllPartner( response );
  }
  async function getAllSlider() {
    try {
      let request = await fetch( "https://kog.pythonanywhere.com/api/v1/home/sliders" );
      let response = await request.json();
      SetAllSlider( response );
    } catch ( error ) {
      console.log( error );
    }
  }
  async function getFormAdmin() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/forms/"
      );
      let response = await request.json();
      setFormAdmin( response );
    } catch ( error ) {
      console.log( error );
    }
  }
  async function valueIdForm(id) {
    setNoForm(id);
  }
  async function addchoice(id) {
    setNoQuestion(id);
  }
    return (
      <ContextUser.Provider
        value={{
          userDashboaerd,
          getAllUserDashboard,
          english,
          arabic,
          direction,
          getAllServicesDashboard,
          servicesDashboaed,
          contact,
          getAllContact,
          allPartner,
          getAllPartner,
          allSlider,
          getAllSlider,
          formAdmin,
          getFormAdmin,
          valueIdForm,
          noForm,
          addchoice,
          noquestion,
        }}
      >
        {children}
      </ContextUser.Provider>
    );
}

function useUser() {
    const context = useContext( ContextUser );
    if ( context === undefined ) {
        throw new Error( 'proplem in context' );
    }
    return context
}
export {useUser , ContextProvider}