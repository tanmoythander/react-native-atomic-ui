/**
 * Rich Text Components - Advanced text display and editing
 * Requires peer dependencies:
 * - react-native-webview (for RichText display)
 * - @10play/tentap-editor (for RichTextInput, custom fork)
 *
 * Installation:
 * npm install react-native-webview
 * npm install github:starburst997/10tap-editor#jd
 *
 * Usage:
 * import { RichText, RichTextInput } from 'react-native-atomic-ui/rich-text';
 */

export interface RichTextProps {
  html: string;
  onLinkPress?: (url: string) => void;
  style?: any;
  testID?: string;
}

export interface RichTextInputProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  style?: any;
  testID?: string;
}

// Component implementations would go here
// These are placeholders for library structure
export function RichText() {
  throw new Error(
    'RichText requires peer dependency: react-native-webview\n' +
    'Install it with: npm install react-native-webview'
  );
}

export function RichTextInput() {
  throw new Error(
    'RichTextInput requires peer dependency: @10play/tentap-editor\n' +
    'Install it with: npm install github:starburst997/10tap-editor#jd'
  );
}
