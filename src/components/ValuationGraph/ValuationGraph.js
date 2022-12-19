import { useEffect, useState } from "react";
import jsonData from "../../data.json";
import ScatterPlot from "../Graphs/ScatterPlot";

function ValuationGraph() {
  const [commonValuationData, setCommonValuationData] = useState([]);
  const [seriesAPreferredValuationData, setSeriesAPreferredValuationData] =
    useState([]);
  const [seriesA1PreferredValuationData, setSeriesA1PreferredValuationData] =
    useState([]);
  const [newRoundValuationData, setNewRoundValuationData] = useState([]);

  const loadData = (data) => {
    let commonArray = [];
    let seriesAArray = [];
    let seriesA1Array = [];
    let newRoundArray = [];

    const common = data.valuations.filter(
      (currentValue) => currentValue.class === "Common"
    );
    const seriesA = data.valuations.filter(
      (currentValue) => currentValue.class === "Series A Preferred"
    );
    const seriesA1 = data.valuations.filter(
      (currentValue) => currentValue.class === "Series A1 Preferred"
    );
    const newRound = data.valuations.filter(
      (currentValue) => currentValue.class === "New Round"
    );

    commonArray = common.map((currentValue) => {
      return { x: currentValue.valuationPrice, y: currentValue.pricePerShare };
    });
    seriesAArray = seriesA.map((currentValue) => {
      return { x: currentValue.valuationPrice, y: currentValue.pricePerShare };
    });
    seriesA1Array = seriesA1.map((currentValue) => {
      return { x: currentValue.valuationPrice, y: currentValue.pricePerShare };
    });
    newRoundArray = newRound.map((currentValue) => {
      return { x: currentValue.valuationPrice, y: currentValue.pricePerShare };
    });

    setCommonValuationData(commonArray);
    setNewRoundValuationData(newRoundArray);
    setSeriesA1PreferredValuationData(seriesA1Array);
    setSeriesAPreferredValuationData(seriesAArray);
  };

  useEffect(() => {
    loadData(jsonData);
  }, []);

  return (
    <div style={{ height: "70vh", width: "80vw", margin: "auto"}}>
      {commonValuationData &&
      commonValuationData.length &&
      seriesAPreferredValuationData &&
      seriesAPreferredValuationData.length &&
      seriesA1PreferredValuationData &&
      seriesA1PreferredValuationData.length &&
      newRoundValuationData &&
      newRoundValuationData.length ? (
        <ScatterPlot
          data={[
            {
              id: "Common",
              data: commonValuationData,
            },
            {
              id: "Series A Preferred",
              data: seriesAPreferredValuationData,
            },
            {
              id: "Series A1 Preferred",
              data: seriesA1PreferredValuationData,
            },
            {
              id: "New Round",
              data: newRoundValuationData,
            },
          ]}
        />
      ) : null}
    </div>
  );
}

export default ValuationGraph;
