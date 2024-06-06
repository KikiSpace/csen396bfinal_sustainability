import React, { useRef, useState, useMemo } from "react";
import { scaleTime, scaleLinear } from "@visx/scale";
import { Brush } from "@visx/brush";
import { Bounds } from "@visx/brush/lib/types";
import BaseBrush, {
  BaseBrushState,
  UpdateBrush,
} from "@visx/brush/lib/BaseBrush";
import { PatternLines } from "@visx/pattern";
import { Group } from "@visx/group";
import { LinearGradient } from "@visx/gradient";
import { max, extent } from "@visx/vendor/d3-array";
import { BrushHandleRenderProps } from "@visx/brush/lib/BrushHandle";
import AreaChart from "./AreaChart";

// Initialize some variables
const wasteData = [
  { "year": 1989.0, "volume": 8.7 },
  { "year": 1989.4, "volume": 7.4 },
  { "year": 1989.8, "volume": 7.1 },
  { "year": 1990.2, "volume": 6.8 },
  { "year": 1990.6, "volume": 6.9 },
  { "year": 1991.0, "volume": 9.2 },
  { "year": 1991.4, "volume": 8.3 },
  { "year": 1991.8, "volume": 8.8 },
  { "year": 1992.2, "volume": 7.5 },
  { "year": 1992.6, "volume": 4.8 },
  { "year": 1993.0, "volume": 9.0 },
  { "year": 1993.4, "volume": 6.4 },
  { "year": 1993.8, "volume": 5.1 },
  { "year": 1994.2, "volume": 8.2 },
  { "year": 1994.6, "volume": 7.3 },
  { "year": 1995.0, "volume": 4.6 },
  { "year": 1995.4, "volume": 9.4 },
  { "year": 1995.8, "volume": 5.8 },
  { "year": 1996.2, "volume": 7.6 },
  { "year": 1996.6, "volume": 4.7 },
  { "year": 1997.0, "volume": 8.5 },
  { "year": 1997.4, "volume": 6.1 },
  { "year": 1997.8, "volume": 5.9 },
  { "year": 1998.2, "volume": 7.2 },
  { "year": 1998.6, "volume": 4.3 },
  { "year": 1999.0, "volume": 9.1 },
  { "year": 1999.4, "volume": 6.9 },
  { "year": 1999.8, "volume": 5.0 },
  { "year": 2000.2, "volume": 8.8 },
  { "year": 2000.6, "volume": 7.0 },
  { "year": 2001.0, "volume": 4.4 },
  { "year": 2001.4, "volume": 9.6 },
  { "year": 2001.8, "volume": 5.2 },
  { "year": 2002.2, "volume": 7.8 },
  { "year": 2002.6, "volume": 4.5 },
  { "year": 2003.0, "volume": 8.9 },
  { "year": 2003.4, "volume": 6.0 },
  { "year": 2003.8, "volume": 5.5 },
  { "year": 2004.2, "volume": 7.4 },
  { "year": 2004.6, "volume": 4.2 },
  { "year": 2005.0, "volume": 9.5 },
  { "year": 2005.4, "volume": 6.2 },
  { "year": 2005.8, "volume": 5.3 },
  { "year": 2006.2, "volume": 8.3 },
  { "year": 2006.6, "volume": 7.1 },
  { "year": 2007.0, "volume": 4.8 },
  { "year": 2007.4, "volume": 9.3 },
  { "year": 2007.8, "volume": 6.5 },
  { "year": 2008.2, "volume": 5.6 },
  { "year": 2008.6, "volume": 7.7 },
  { "year": 2009.0, "volume": 4.9 },
  { "year": 2009.4, "volume": 8.6 },
  { "year": 2009.8, "volume": 6.3 },
  { "year": 2010.2, "volume": 5.7 },
  { "year": 2010.6, "volume": 7.4 },
  { "year": 2011.0, "volume": 4.2 },
  { "year": 2011.4, "volume": 9.0 },
  { "year": 2011.8, "volume": 6.4 },
  { "year": 2012.2, "volume": 5.1 },
  { "year": 2012.6, "volume": 8.2 },
  { "year": 2013.0, "volume": 7.3 },
  { "year": 2013.4, "volume": 4.6 },
  { "year": 2013.8, "volume": 9.4 },
  { "year": 2014.2, "volume": 5.8 },
  { "year": 2014.6, "volume": 7.6 },
  { "year": 2015.0, "volume": 4.7 },
  { "year": 2015.4, "volume": 8.5 },
  { "year": 2015.8, "volume": 6.1 },
  { "year": 2016.2, "volume": 5.9 },
  { "year": 2016.6, "volume": 7.2 },
  { "year": 2017.0, "volume": 4.3 },
  { "year": 2017.4, "volume": 9.1 },
  { "year": 2017.8, "volume": 6.9 },
  { "year": 2018.2, "volume": 5.0 },
  { "year": 2018.6, "volume": 8.8 },
  { "year": 2019.0, "volume": 7.0 },
  { "year": 2019.4, "volume": 4.4 },
  { "year": 2019.8, "volume": 9.6 },
  { "year": 2020.2, "volume": 5.2 },
  { "year": 2020.6, "volume": 7.8 },
  { "year": 2021.0, "volume": 4.5 },
  { "year": 2021.4, "volume": 8.9 },
  { "year": 2021.8, "volume": 6.0 },
  { "year": 2022.2, "volume": 5.5 },
  { "year": 2022.6, "volume": 7.4 },
  { "year": 2023.0, "volume": 4.2 }
];


const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 30;
const PATTERN_ID = "brush_pattern";
const GRADIENT_ID = "brush_gradient";
export const accentColor = "#f6acc8";
export const background = "#584153";
export const background2 = "#af8baf";
const selectedBrushStyle = {
  fill: `url(#${PATTERN_ID})`,
  stroke: "white",
};

// accessors
const getYear = (d: { year: number; volume: number }) => d.year;
const getVolume = (d: { year: number; volume: number }) => d.volume;

export type BrushProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  compact?: boolean;
};

function BrushChart({
  compact = false,
  width,
  height,
  margin = {
    top: 20,
    left: 50,
    bottom: 20,
    right: 20,
  },
}: BrushProps) {
  const brushRef = useRef<BaseBrush | null>(null);
  const [filteredData, setFilteredData] = useState(wasteData);

  const onBrushChange = (domain: Bounds | null) => {
    if (!domain) return;
    const { x0, x1, y0, y1 } = domain;
    const filtered = wasteData.filter((d) => {
      const x = getYear(d);
      const y = getVolume(d);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });
    setFilteredData(filtered);
  };

  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = compact
    ? chartSeparation / 2
    : chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;

  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(
    bottomChartHeight - brushMargin.top - brushMargin.bottom,
    0
  );

  const yearScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, xMax],
        domain: extent(filteredData, getYear) as [number, number],
      }),
    [xMax, filteredData]
  );
  const volumeScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, max(filteredData, getVolume) || 0],
        nice: true,
      }),
    [yMax, filteredData]
  );
  const brushYearScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [0, xBrushMax],
        domain: extent(wasteData, getYear) as [number, number],
      }),
    [xBrushMax]
  );
  const brushVolumeScale = useMemo(
    () =>
      scaleLinear({
        range: [yBrushMax, 0],
        domain: [0, max(wasteData, getVolume) || 0],
        nice: true,
      }),
    [yBrushMax]
  );

  const initialBrushPosition = useMemo(
    () => ({
      start: { x: brushYearScale(getYear(wasteData[0])) },
      end: { x: brushYearScale(getYear(wasteData[10])) },
    }),
    [brushYearScale]
  );

  const handleClearClick = () => {
    if (brushRef?.current) {
      setFilteredData(wasteData);
      brushRef.current.reset();
    }
  };

  const handleResetClick = () => {
    if (brushRef?.current) {
      const updater: UpdateBrush = (prevBrush) => {
        const newExtent = brushRef.current!.getExtent(
          initialBrushPosition.start,
          initialBrushPosition.end
        );

        const newState: BaseBrushState = {
          ...prevBrush,
          start: { y: newExtent.y0, x: newExtent.x0 },
          end: { y: newExtent.y1, x: newExtent.x1 },
          extent: newExtent,
        };

        return newState;
      };
      brushRef.current.updateBrush(updater);
    }
  };

  return (
    <div style={{ textAlign: "center" }}> {/* Center the div */}
      <svg width={width} height={height}>
        <LinearGradient
          id={GRADIENT_ID}
          from={background}
          to={background2}
          rotate={45}
        />
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={`url(#${GRADIENT_ID})`}
          rx={14}
          opacity={0.0} // Adjust the opacity for transparency
        />
        <AreaChart
          hideBottomAxis={compact}
          data={filteredData}
          width={width}
          margin={{ ...margin, bottom: topChartBottomMargin }}
          yMax={yMax}
          xScale={yearScale}
          yScale={volumeScale}
          gradientColor={background2}
          renderLabel={true} // Render labels for the top chart
        />
        <AreaChart
          hideBottomAxis
          hideLeftAxis
          data={wasteData}
          width={width}
          yMax={yBrushMax}
          xScale={brushYearScale}
          yScale={brushVolumeScale}
          margin={brushMargin}
          top={topChartHeight + topChartBottomMargin + margin.top}
          gradientColor={background2}
          renderLabel={false} // Do not render labels for the bottom chart
        >
          <PatternLines
            id={PATTERN_ID}
            height={8}
            width={8}
            stroke={accentColor}
            strokeWidth={1}
            orientation={["diagonal"]}
          />
          <Brush
            xScale={brushYearScale}
            yScale={brushVolumeScale}
            width={xBrushMax}
            height={yBrushMax}
            margin={brushMargin}
            handleSize={8}
            innerRef={brushRef}
            resizeTriggerAreas={["left", "right"]}
            brushDirection="horizontal"
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            onClick={() => setFilteredData(wasteData)}
            selectedBoxStyle={selectedBrushStyle}
            useWindowMoveEvents
            renderBrushHandle={(props) => <BrushHandle {...props} />}
          />
        </AreaChart>
      </svg>
      <div style={{ marginTop: "-20px" }}> {/* Add margin to separate the buttons from the chart */}
        <button onClick={handleClearClick}>Clear</button>&nbsp;
        {/* <button onClick={handleResetClick}>Reset</button> */}
      </div>
    </div>
  );
}

function BrushHandle({ x, height, isBrushActive }: BrushHandleRenderProps) {
  const pathWidth = 8;
  const pathHeight = 15;
  if (!isBrushActive) {
    return null;
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path
        fill="#f2f2f2"
        d="M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12"
        stroke="#999999"
        strokeWidth="1"
        style={{ cursor: "ew-resize" }}
      />
    </Group>
  );
}

export default BrushChart;
