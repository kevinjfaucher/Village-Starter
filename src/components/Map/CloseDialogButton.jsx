
import React, { useState } from "react";
  
 function ContactModal({ setShowModal }) {
    return (
      <Overlay onClick={() => setShowModal(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          {/* Modal Content */}
            <CancelButton
              onClick={() => setShowModal(false)}
            >
              Cancel
            </CancelButton>
        </Modal>
      </Overlay>
    );
  }

export default ContactModal;


// import React, { useState } from 'react';

// function CloseDialogBox({ onClose }) {
//     return (
//         <div>
//             <button onClick={onClose}>Close</button>
//         </div>
//     );
// }

// export default CloseDialogBox;