import React from 'react'
import VectorAndText from '../../../../../../components/common/VectorAndText'
import noQuizzesImg from '../../../../../../assets/images/noData.png'

const NoQuizzesYet = () =>
{
    return (
        <div
            style={{ height: "calc(100vh - 200px" }}
        >
            <VectorAndText
                img={noQuizzesImg}
                h="No Quizzes yet"
                p={
                    <>
                        The mentor hasn’t yet uploaded Quiz. Stay turned
                        <br />
                        They will be uploaded soon
                    </>
                }
            />
        </div>
    )
}

export default NoQuizzesYet