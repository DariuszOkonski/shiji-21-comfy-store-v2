import React from 'react';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <React.Fragment>
          <span className='loading loading-spinner'></span>
          sending...
        </React.Fragment>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
