import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { numberOfClicksSelector } from "./numberOfClicksSelector";
import { incrementByState } from "./incrementByState";

export const CounterButton = () => {
  const clicksData = useRecoilValue(numberOfClicksSelector);
  const [, setClicksData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  return (
    <>
      <p>You have clicked the button {clicksData} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button
        onClick={() =>
          setClicksData((prev) => [
            ...prev,
            { timestamp: Date.now(), amount: incrementBy },
          ])
        }
      >
        Click
      </button>
    </>
  );
};
