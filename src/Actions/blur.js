
export const BLUR_FILTER= "blurfilter";

export const blurFilter =(value) => {
  return({
      type:BLUR_FILTER,
      payload:value
  })
};
