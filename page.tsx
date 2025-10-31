"use client";

import {
  ButtonSuccess,
  ButtonWarning,
  ButtonDanger,
  ButtonSuccessOutline,
  ButtonDangerOutline,
  ButtonInfoOutline,
} from "@/components/button";

const TestButton = () => {
  return (
    <div className="m-10 flex flex-wrap gap-3 p-5 bg-white">
      <ButtonSuccess onClick={() => alert("Success button clicked!")}>
        Success Button
      </ButtonSuccess>

      <ButtonWarning onClick={() => alert("Warning button clicked!")}>
        Warning Button
      </ButtonWarning>

      <ButtonDanger onClick={() => alert("Danger button clicked!")}>
        Danger Button
      </ButtonDanger>

      <ButtonSuccessOutline onClick={() => alert("Success Outline clicked!")}>
        Success Outline Button
      </ButtonSuccessOutline>

      <ButtonDangerOutline onClick={() => alert("Danger Outline clicked!")}>
        Danger Outline Button
      </ButtonDangerOutline>

      <ButtonInfoOutline onClick={() => alert("Info Outline clicked!")}>
        Outline Info Button
      </ButtonInfoOutline>
    </div>
  );
};

export default TestButton;
