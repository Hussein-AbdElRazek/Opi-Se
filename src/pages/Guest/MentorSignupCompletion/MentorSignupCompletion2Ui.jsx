import React from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import StepTitle from './components/StepTitle'
import { HeaderText } from '../../../components/ui'
import ActionsContainer from './components/ActionsContainer'
import { Btn, OutlinedBtn } from '../../../components/inputs'
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrowRight.svg'
import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrowLeft.svg'
import AddExperienceCard from './components/AddExperienceCard'
import ExperienceModal from './components/ExperienceModal'
import ExperienceCard from './components/ExperienceCard'

const MentorSignupCompletion2Ui = (props) =>
{
    const {
        openExperienceModal,
        closeAddExperienceModal,
        isExperienceModalOpened,
        experienceList,
        updateExperience,
        experienceModalInitialValues,
        onDelete,
        handleSignup,
        isLoadingSignup,
    } = props;

    return (
        <div>
            <Navbar />

            <Layout >
                <StepTitle step={2} />

                <HeaderText>
                    We need to get a sense of your education, experience.
                    <br />
                    It’s quickest to import your information.
                </HeaderText>
                <div className='center-y flex-wrap'>
                    <AddExperienceCard
                        onClick={openExperienceModal(experienceList.length)}
                        haveExpList={experienceList.length}
                    />

                    {experienceList.map(
                        (item, index) =>
                            <ExperienceCard
                                key={index}
                                index={index}
                                onEdit={openExperienceModal}
                                {...item}
                            />
                    )}
                </div>

                <ActionsContainer>
                    <Btn
                        size="small"
                        endIcon={
                            <ArrowRightIcon
                                fill={'var(--primary)'}
                            />}
                        onClick={handleSignup}
                        isLoading={isLoadingSignup}
                    >
                        Finish
                    </Btn>
                    <OutlinedBtn
                        size="small"
                        startIcon={
                            <ArrowLeftIcon
                                fill={'var(--secondary)'}
                            />}
                        to={'/mentor/signup/1'}
                    >
                        Back
                    </OutlinedBtn>
                </ActionsContainer>

                {isExperienceModalOpened &&
                    <ExperienceModal
                        onClose={closeAddExperienceModal}
                        onSubmit={updateExperience}
                        initialValues={experienceModalInitialValues}
                        onDelete={onDelete}
                    />}
            </Layout >
        </div>
    )
}

export default MentorSignupCompletion2Ui