export const primary = {
  midnight: '#0C1E42',
  satin: '#2E3C57',
  stone: '#939BAB',
  tin: '#D5D8DF',
  marble: '#EBEEF2',
  aluminum: '#F7F7F7',
  dustyPink: '#F88286',
  paleStrawberry: '#FFF1F2',
  leave: '#7ED321',
  darkGreen: '#0A3040',
  darkBlue: '#062B58',
  systemBlue: '#0A84FF',
  transparent: '#0000',
};

export const foundation = {
  pewter: '#5C677C',
  watermelon: '#D0021B',
  watermelon10: '#FFEFED',
  white: '#FFFFFF',
  tin: '#D6D6D6',
  black: '#000000',
  aluminum: '#F7F7F7',
  stone: '#939BAB',
  satin: '#2E3C57',
  grape: '#1C0056',
  grape10: '#7F50E3',
  lightBlue: '#D7E9FF',
  yellow: '#F5A623',
  kiwi: '#16AD77',
  bloodRed: '#DB1515',
  charcoal: '#515151',
};

export const addAlpha = (color: string, opacity: number) => {
  const _opacity = Math.round(
    Math.min(Math.max(opacity <= 0 ? 0.1 : opacity, 0), 1) * 255,
  );
  return color + _opacity.toString(16).toUpperCase();
};
