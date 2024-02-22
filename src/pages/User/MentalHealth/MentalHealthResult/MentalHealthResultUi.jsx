import VectorAndText from "../../../../components/common/VectorAndText";
import mentalHealthTestImg from '../../../../assets/images/mentalHealthTest.png'
import { Btn } from "../../../../components/inputs";
import classes from './MentalHealthResultUi.module.css'
import { CircularProgress } from "@mui/material";
import { HeaderText, Paragraph } from "../../../../components/ui";
const MentalHealthResultUi = (props) =>
{
    const {
        score,
        suggestion
    } = props;

    // Split the text by "\\n" 
    const lines = suggestion?.split("\\n") || [];

    // Map over the array of lines to create <li> elements
    const listItems = lines.map((line, index) => (
        <li key={index}>{line}</li>
    ));

    return (
        <div>

            {/* test data section */}
            {(score && suggestion) && (
                <>
                    <div
                        className={`center-x center-y ${classes.content}`}
                    >
                        {/* Score section */}
                        <div
                            className={`${classes.card} ${classes.scoreParent} space-between center-y`}
                        >
                            <div
                                className={classes.scoreInfo}
                            >
                                <HeaderText>
                                    Your Mental Health Score
                                </HeaderText>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </Paragraph>
                            </div>
                            {/* CircularProgress */}
                            <div
                                className={`${classes.score} center-x center-y`}
                            >
                                <CircularProgress
                                    className={classes.progress}
                                    thickness={5}
                                    sx={{
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                    }}
                                    variant="determinate"
                                    value={score}
                                    size={150}
                                />

                                <CircularProgress
                                    className={classes.progressBG}
                                    thickness={5}
                                    variant="determinate"
                                    value={100}
                                    size={150}
                                />
                                <h4>{score} %</h4>
                            </div>

                        </div>
                        <div
                            className={`${classes.card} ${classes.suggestion} center-x`}
                        >
                            <HeaderText>
                                Suggestions for you
                            </HeaderText>
                            <ul>
                                {listItems}
                            </ul>

                        </div>
                    </div>

                    <div
                        className={`${classes.btn} ${classes.newTestBtn}`}
                    >
                        <Btn
                            to="questions"
                        >
                            Start a new test
                        </Btn>
                    </div>
                </>
            )}

            {/* ----------------- */}

            {/* no test data section */}
            {(!score || !suggestion) && (
                <>
                    <VectorAndText
                        isBig={true}
                        img={mentalHealthTestImg}
                        h="Mental Health Test"
                        p={
                            <>
                                You can know your mental health score and get some suggestions
                                <br />
                                Start a test and take your time answering the questions


                            </>
                        }
                    />
                    <div
                        className={classes.btn}
                    >
                        <Btn
                            to="questions"
                        >
                            Start a test
                        </Btn>
                    </div>
                </>
            )}
        </div>
    )
}

export default MentalHealthResultUi