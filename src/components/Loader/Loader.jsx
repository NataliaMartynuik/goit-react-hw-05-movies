import { Circles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled'
 
export const Loader = () => {
        return (
            <Wrapper>
                <Circles
                    height="100"
                    width="100"
                    color="#81183d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
            </Wrapper>
        );
    }