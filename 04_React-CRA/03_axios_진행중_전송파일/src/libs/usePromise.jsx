import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps) {
  //대기중 / 완료 / 에러(실패)에 관한 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolve = await promiseCreator();
        setResolved(resolve);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    process();
  }, deps);
  return [loading, resolved, error];
}
