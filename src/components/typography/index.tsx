import React, {ComponentProps, useMemo} from 'react';
import {StyleProp, TextStyle} from 'react-native';

import {Text} from 'react-native-paper';

import {foundation} from 'styles/colors';
import _styles, {fontStyles} from './styles';

type TextProps = {
  defaultStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  color?: string;
  underline?: boolean;
  bold?: boolean;
} & Omit<ComponentProps<typeof Text>, 'style'>;

const BaseText: React.FC<TextProps> = ({
  defaultStyle,
  style,
  color = foundation.black,
  underline = false,
  bold = false,
  children,
}) => {
  const customStyle = useMemo<StyleProp<TextStyle>>(
    () => [defaultStyle, _styles(color, underline, bold).base, style],
    [defaultStyle, color, underline, bold, style],
  );

  return <Text style={customStyle}>{children}</Text>;
};

export const H1: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.H1} {...props} />;
};

export const H2: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.H2} {...props} />;
};

export const H3: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.H3} {...props} />;
};

export const H4: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.H4} {...props} />;
};

export const Paragraph: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.paragraph} {...props} />;
};

export const SmallParagraph: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.smallParagraph} {...props} />;
};

export const TextLink: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.textLink} {...props} />;
};

export const FormTitle: React.FC<TextProps> = (props: TextProps) => {
  return <BaseText defaultStyle={fontStyles.formTitle} {...props} />;
};
