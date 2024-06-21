import React from 'react'
import { ItemCard } from '../../../../components/common'
import { LoopOnInputs } from '../../../../components/inputs'
import { experienceInputs } from '../inputsData/experienceInputsData'
import { experienceValidationSchema } from '../inputsData/experienceValidationSchema'
import { Button } from '@mui/material'
import classes from '../styles/ExperienceModal.module.css'

const ExperienceModal = ({ onClose, onSubmit, onDelete, initialValues }) =>
{
    return (
        <ItemCard
            type="add"
            title="Add Experience"
            addBtnTitle="Save"
            initialValues={initialValues}
            validationSchema={experienceValidationSchema}
            onSubmit={onSubmit}
            onClose={onClose}
            AdditionalAction={
                <div className={classes.deleteBtnContainer}>
                    <Button onClick={onDelete} className={classes.deleteBtn}>
                        Delete Experience
                    </Button>
                </div>
            }
        >
            <LoopOnInputs
                inputs={experienceInputs}
            />
        </ItemCard>
    )
}

export default ExperienceModal