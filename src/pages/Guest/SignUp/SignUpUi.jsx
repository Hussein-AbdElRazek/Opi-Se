import React from 'react'
import { Link, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import FormikContainer from '../../../components/inputs/FormikContainer';
import LoopOnInputs from '../../../components/inputs/LoopOnInputs';
import { signUpInitialValues, signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';

const SignUpUi = (props) =>
{
  const { handleSignUp, isLoadingSignUp } = props;
  return (
    <>
      <>
        <Typography color="primary" variant="h4" textAlign="center" mb={3}>Sign Up</Typography>
        <FormikContainer
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUp}
        >
          <LoopOnInputs
            inputs={signUpInputs}
            disabled={isLoadingSignUp} />
          <Box sx={{ width: "100%" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoadingSignUp}
              fullWidth
            >
              Sign Up
            </LoadingButton>
          </Box>

          <Typography variant="body2" mt={2}>
            {"Have an account already? "}
            <Link component={NavLink} to="/user/login">
              Login
            </Link>
          </Typography>
        </FormikContainer>
      </ >
    </>
  )
}

export default SignUpUi