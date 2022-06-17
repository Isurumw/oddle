export const trimmedText = (text: string, shouldTrim: boolean) => {
  return text.slice(0, shouldTrim ? 8 : text.length);
};

export const timeDescription = (curHr = new Date().getHours()) => {
  if (curHr > 3 && curHr <= 12) {
    return 'Good morning!';
  } else if (curHr > 12 && curHr <= 15) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
};
