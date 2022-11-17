import errorImage from '../images/error.webp';
import { WrapperError } from './Error.styled'

export const ErrorView = () => {
  return (
    <WrapperError role="alert">
      <img src={errorImage} width="600" alt="error" />
    </WrapperError>
  );
}