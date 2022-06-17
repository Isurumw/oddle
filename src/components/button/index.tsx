import React, {ComponentProps, useMemo} from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Button as DefaultButton} from 'react-native-paper';

import _styles from './styles';

export type ButtonType = 'small' | 'medium' | 'large';
export type ButtonMode = 'outlined' | 'contained' | 'text';

export type ButtonProps = {
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  active?: boolean;
  mode?: ButtonMode;
  uppercase?: boolean;
} & Omit<
  ComponentProps<typeof DefaultButton>,
  'style' | 'contentStyle' | 'labelStyle' | 'disabled' | 'mode' | 'uppercase'
>;

const Button: React.FC<ButtonProps> = ({
  type,
  style,
  contentStyle,
  labelStyle,
  disabled = false,
  active = false,
  mode,
  uppercase,
  children,
  ...props
}) => {
  const customStyle = useMemo(
    () => _styles(active, disabled, mode, type),
    [active, disabled, mode, type],
  );

  return (
    <DefaultButton
      mode={mode}
      disabled={disabled}
      uppercase={uppercase}
      style={[customStyle.container, style]}
      contentStyle={[customStyle.container, contentStyle]}
      labelStyle={[customStyle.label, labelStyle]}
      {...props}>
      {children}
    </DefaultButton>
  );
};

export default Button;
