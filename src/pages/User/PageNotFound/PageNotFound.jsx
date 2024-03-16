import VectorAndText from '../../../components/common/VectorAndText'
import noPageFoundImg from '../../../assets/images/404.png'
import { Btn } from '../../../components/inputs'

const PageNotFound = () =>
{
    return (
        <div
        // className='height-100vh'
        >
            <VectorAndText
                isBig={true}
                fullScreen={true}
                img={noPageFoundImg}
                h="Ooops! Page not found"
                p={
                    <>
                        We’re having trouble loading this page.
                    </>
                }
                action={
                    <Btn
                        to="/"
                        size="small"
                    >
                        Return Home
                    </Btn>
                }
            />

        </div>

    )
}
export default PageNotFound