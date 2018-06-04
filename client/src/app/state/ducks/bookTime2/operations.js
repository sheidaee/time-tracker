import { 
    /* bookTimeComplete */
     } from "./actions";

import { axios } from "./../../../utilities";

const bookTime = (
  clockIn,
  clockOut,
  description,
  closeDialogHandler,
  resetFormHandler
) => dispatch => {
  //dispatch(addInit())
  /* {
        clock_in: clockIn,
            clock_out: clockOut,
                description: description
    } */
  axios
    .post(
      `/post_book_time?clock_in=${clockIn}&clock_out=${clockOut}&description=${description}`
    )
    .then(response => {
      console.log(response);
      //dispatch(bookTimeComplete(bookTimeData));
      closeDialogHandler();
      resetFormHandler();
    })
    .catch(error => {
      // dispatch(addFailed(error))
      console.log("error");
      closeDialogHandler();
    });
};

export {    
    bookTime    
};
