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

export interface FilePickerProps {
  onFileSelected: (file: any) => void;
  multiple?: boolean;
  type?: string;
  label?: string;
  disabled?: boolean;
  style?: any;
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
