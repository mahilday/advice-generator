import { useEffect, useState } from "react";
import useLoading from "./useLoading";

type SlipType = {
  id: number;
  advice: string;
};

const useGetAdvice = () => {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const [advice, setAdvice] = useState<SlipType | null>(null);

  const getAdvice = async () => {
    startLoading();
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const adviceResp = await res.json();
      setTimeout(() => {
        setAdvice(adviceResp.slip);
        stopLoading();
      }, 800);
    } catch (error) {
      console.log("Something went wrong: ", error);
      stopLoading();
    }
  };

  useEffect(() => {
    getAdvice();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getAdvice,
    isLoading,
    advice,
  };
};

export default useGetAdvice;
