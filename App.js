import { StyleSheet, Text, View } from 'react-native';
import StripeApp from './src/StripeApp';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <StripeProvider
      publishableKey={process.env.STRIPE_PUBLISHABLE_KEY}
    >
      <StripeApp />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
