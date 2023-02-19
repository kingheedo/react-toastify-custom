import { StyleSheet } from 'aphrodite';

const toastStyles = StyleSheet.create({
  custom_toast_container: {
    width: 'initial',
    padding: 0,
    top: 40
  },
  custom_toast: {
    marginBottom: 0,
    borderRadius: 50,
    maxHeight: 42,
    minHeight: 42,
    padding: '12px 15px'
  },
  custom_body: {
    margin: 0,
    padding: 0,
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: -0.2,
    color: '#E1E4EB'
  }
});

export default toastStyles;