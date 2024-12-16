import { useEffect, useState } from "react";

export const useGetStatusFromResponse = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }

    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  });

  return { isError, setIsError, isSuccess, setIsSuccess };
};
