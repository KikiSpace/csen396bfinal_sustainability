import React from "react";
import { Group } from "@visx/group";
import { AreaClosed } from "@visx/shape";
import { AxisLeft, AxisBottom, AxisScale } from "@visx/axis";
import { LinearGradient } from "@visx/gradient";
import { curveMonotoneX } from "@visx/curve";

const axisColor = "#fff";
const axisBottomTickLabelProps = {
  textAnchor: "middle" as const,
  fontFamily: "Arial",
  fontSize: 10,
  fill: axisColor,
};
const axisLeftTickLabelProps = {
  dx: "-0.25em",
  dy: "0.25em",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end" as const,
  fill: axisColor,
};

// accessors
const getYear = (d: { year: number; volume: number }) => d.year;
const getVolume = (d: { year: number; volume: number }) => d.volume;

export default function AreaChart({
  data,
  gradientColor,
  width,
  yMax,
  margin,
  xScale,
  yScale,
  hideBottomAxis = false,
  hideLeftAxis = false,
  renderLabel = false,
  top,
  left,
  children,
}: {
  data: { year: number; volume: number }[];
  gradientColor: string;
  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  width: number;
  yMax: number;
  margin: { top: number; right: number; bottom: number; left: number };
  hideBottomAxis?: boolean;
  hideLeftAxis?: boolean;
  renderLabel?: boolean;
  top?: number;
  left?: number;
  children?: React.ReactNode;
}) {
  if (width < 10) return null;
  return (
    <Group left={left || margin.left} top={top || margin.top}>
      <LinearGradient
        id="gradient"
        from={gradientColor}
        fromOpacity={1}
        to={gradientColor}
        toOpacity={0.2}
      />
      <AreaClosed<{ year: number; volume: number }>
        data={data}
        x={(d) => xScale(getYear(d)) || 0}
        y={(d) => yScale(getVolume(d)) || 0}
        yScale={yScale}
        strokeWidth={1}
        stroke="url(#gradient)"
        fill="url(#gradient)"
        curve={curveMonotoneX}
        // fillOpacity={0.} // Adjust the fill opacity for transparency
        // strokeOpacity={0.9} // Adjust the stroke opacity for transparency
      />
      {!hideBottomAxis && (
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={width > 520 ? 10 : 5}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={axisBottomTickLabelProps}
        />
      )}
      {!hideLeftAxis && (
        <AxisLeft
          scale={yScale}
          numTicks={5}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={axisLeftTickLabelProps}
        />
      )}
      {/* Conditionally render x-axis and y-axis labels */}
      {renderLabel && (
        <>
          <text
            x={width / 2}
            y={yMax + margin.bottom - 5}
            textAnchor="middle"
            fontFamily="Arial"
            fontSize={12}
            fill={axisColor}
          >
            Year
          </text>
          <text
            x={-yMax / 2}
            y={-margin.left + 15}
            textAnchor="middle"
            fontFamily="Arial"
            fontSize={12}
            fill={axisColor}
            transform="rotate(-90)"
          >
            Volume of Waste (in millions)
          </text>
        </>
      )}
      {children}
    </Group>
  );
}
