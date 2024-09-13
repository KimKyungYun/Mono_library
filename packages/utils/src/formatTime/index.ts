const formatTime = (time:number | null | undefined = 0) => {
  const validTime = time ?? 0;
  const hour = Math.trunc(validTime) || 0;
  const minute = Math.floor(((validTime - hour)) * 60) || 0;
  const fullTime = `${hour !== 0 ? `${hour}시간` : ''}${minute !== 0 ? ` ${minute}분` : ''}` || '0분';

  return {
    fullTime,
    hour,
    minute,
  };
};

export default formatTime;
