import { AriAppleLoginButton } from '@aries-kit/react';
import { AriGoogleLoginButton } from '@aries-kit/react';

export const BasicSocialLogin: React.FC = () => (
    <>
        <AriGoogleLoginButton />
        <AriAppleLoginButton />
    </>
);