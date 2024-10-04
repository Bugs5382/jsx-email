import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text
} from 'jsx-email';

interface LinearLoginCodeEmailProps {
  validationCode?: string;
}

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px'
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0'
};

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149'
};

const buttonContainer = {
  padding: '27px 0 27px'
};

const reportLink = {
  fontSize: '14px',
  color: '#b4becc'
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px'
};

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149'
};

const baseUrl = 'https://jsx.email/assets/demo/';

export const previewProps = {
  validationCode: 'tt226-5398x'
} as LinearLoginCodeEmailProps;

export const templateName = 'Linear Login Code';

export const Template = ({ validationCode }: LinearLoginCodeEmailProps) => (
  <Html>
    <Head />
    <Preview>Your login code for Linear</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`${baseUrl}linear-logo.png`} width="42" height="42" alt="Linear" style={logo} />
        <Heading style={heading}>Your login code for Linear</Heading>
        <Section style={buttonContainer}>
          <Button
            width={152}
            height={40}
            backgroundColor="#5e6ad2"
            borderRadius={3}
            textColor="#fff"
            fontSize={15}
            href="https://linear.app"
          >
            Login to Linear
          </Button>
        </Section>
        <Text style={paragraph}>
          This link and code will only be valid for the next 5 minutes. If the link does not work,
          you can use the login verification code directly:
        </Text>
        <code style={code}>{validationCode}</code>
        <Hr style={hr} />
        <Link href="https://linear.app" style={reportLink}>
          Linear
        </Link>
      </Container>
    </Body>
  </Html>
);