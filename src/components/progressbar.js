import React from "react";
import { Steps } from "rsuite";

const Progressbar = ({ step }) => {
  return (
    <>
      {(() => {
        switch (step) {
          case 1:
            return (
              <Steps current={1}>
                <Steps.Item title="DA DEPT" />
                <Steps.Item title="FSO DEPT" />
                <Steps.Item title="C4 DEPT" />
                <Steps.Item title="C5 DEPT" />
              </Steps>
            );
          case 2:
            return (
              <Steps current={2}>
                <Steps.Item title="DA DEPT" />
                <Steps.Item title="FSO DEPT" />
                <Steps.Item title="C4 DEPT" />
                <Steps.Item title="C5 DEPT" />
              </Steps>
            );
          case 3:
            return (
              <Steps current={3}>
                <Steps.Item title="DA DEPT" />
                <Steps.Item title="FSO DEPT" />
                <Steps.Item title="C4 DEPT" />
                <Steps.Item title="C5 DEPT" />
              </Steps>
            );
          case 4:
            return (
              <Steps current={4}>
                <Steps.Item title="DA DEPT" />
                <Steps.Item title="FSO DEPT" />
                <Steps.Item title="C4 DEPT" />
                <Steps.Item title="C5 DEPT" />
              </Steps>
            );
        }
      })()}
    </>
  );
};

export default Progressbar;
