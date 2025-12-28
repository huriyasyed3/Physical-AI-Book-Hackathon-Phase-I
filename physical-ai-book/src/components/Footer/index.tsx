import type {ComponentProps} from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props: ComponentProps<typeof Footer>): JSX.Element {
  return (
    <>
      <Footer {...props} />
    </>
  );
}