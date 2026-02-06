import type { ViewStyle, StyleProp } from 'react-native';

/**
 * FilePicker - Advanced component for file selection
 * Requires peer dependency: @react-native-documents/picker
 *
 * Installation:
 * npm install @react-native-documents/picker
 *
 * Usage:
 * import { FilePicker } from 'react-native-atomic-ui/file-picker';
 */

export interface SelectedFile {
  uri: string;
  name: string;
  type: string;
  size: number;
}

export interface FilePickerProps {
  onFileSelected: (file: SelectedFile) => void;
  multiple?: boolean;
  type?: string;
  label?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

// Component implementation would go here
// This is a placeholder for library structure
export function FilePicker() {
  throw new Error(
    'FilePicker requires peer dependency: @react-native-documents/picker\n' +
      'Install it with: npm install @react-native-documents/picker'
  );
}
