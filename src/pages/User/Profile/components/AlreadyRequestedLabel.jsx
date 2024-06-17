import React from 'react'
import { Btn } from '../../../../components/inputs'
import recommendationItemClasses from '../../Home/RecommendationList/RecommendationListUi.module.css'
import ActionsLayout from './ActionsLayout'
const AlreadyRequestedLabel = () =>
{
    return (
        <ActionsLayout>
            <Btn
                className={recommendationItemClasses.actionLabel}
                disabled={true}
            >
                Request Sent
            </Btn>
        </ActionsLayout>
    )
}

export default AlreadyRequestedLabel