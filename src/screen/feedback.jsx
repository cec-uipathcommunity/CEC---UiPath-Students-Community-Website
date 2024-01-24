// GoogleForm.js
import React from 'react';
import Iframe from 'react-iframe';
const styles=
`/* GoogleForm.css */
.google-form-container {
  position: relative;
  padding-bottom: 75%; /* Adjust the aspect ratio as needed */
  height: 0;
  overflow: hidden;
}

.google-form-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;

const GoogleForm = () => {
  return (<>
  <style>{styles}</style>
  <div className="google-form-container">
      <Iframe
        url="https://docs.google.com/forms/d/e/1FAIpQLScbprmM6ATaO_rE2WHXp9GbEbGm_p6QPtzyZlTFEoL_W1JHlg/viewform?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="google-form-iframe"
      />
    </div></>
    
  );
};

export default GoogleForm;
