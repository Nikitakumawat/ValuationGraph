import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const Wrapper = (props) => (
  <div
    {...props}
    style={{
      height: "500px",
      width: "100%",
      minWidth: "1000px",
    }}
  />
);

function ScatterPlot({ data }) {
  return (
    <>
      <Wrapper>
        <ResponsiveScatterPlot
          data={data}
          margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
          xScale={{ type: "linear", min: 0, max: "auto" }}
          xFormat=">-.2f"
          yScale={{ type: "linear", min: 0, max: "auto" }}
          yFormat=">-.2f"
          blendMode="multiply"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Exit Valuation $(USD)",
            legendPosition: "middle",
            legendOffset: 46,
          }}
          colors={{ scheme: 'category10' }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "$(USD)",
            legendPosition: "middle",
            legendOffset: -60,
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 130,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: "left-to-right",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Wrapper>
    </>
  );
}

export default ScatterPlot;
