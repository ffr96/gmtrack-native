import { StyleSheet } from "react-native";
import { theme } from './theme';

export const defaultStyles = StyleSheet.create({
  submitButton: {
    display: 'flex',
    backgroundColor: theme.backgroundColors.primary,
    borderRadius: 20,
    color: theme.colors.primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    height: 35,
    width: 120,
  },
  fontTitle: {
    fontSize: 20,
    color: theme.colors.primaryBlack,
  },
  fontSubtitle: {
    fontSize: 16,
    color: theme.colors.secondaryBlack,
    fontWeight: "bold",
  },
  fontSubheading: {
    fontSize: 12,
    color: theme.colors.secondaryBlack,
  },
  defaultTextInput: {
    display: 'flex',
    margin: 5,
    padding: 5,
    borderColor: theme.colors.primaryBlack,
    borderWidth: 2,
    backgroundColor: theme.backgroundColors.secondary,
    color: theme.colors.primaryBlack,
    height: 30,
    width: 200,
    flexShrink: 1
  }
});