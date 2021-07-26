import React from "react";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ITimeline } from "../model/types";
import WorkIcon from "./WorkIcon";
import SchoolIcon from "./SchoolIcon";

const Timeline = ({ timeline }: { timeline: ITimeline[] }) => {
  return (
    <div className="mx-8">
      <div className="text-center">TIMELINE</div>
      <VerticalTimeline>
        {timeline.map((tl) => {
          let isWorkIcon = tl.icon === "work";
          let showButton =
            tl.buttonText !== undefined &&
            tl.buttonText !== null &&
            tl.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={tl.id}
              date={tl.date}
              dateClassName="text-indigo-600"
              contentStyle={{
                background: "rgba(186, 10, 254, 100)",
                color: "#ffff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(186, 10, 254, 100)",
              }}
              iconStyle={
                isWorkIcon
                  ? { background: "#ca0afe" }
                  : { background: "#ee00ff" }
              }
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{tl.title}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {tl.location}
              </h5>
              <p id="description">{tl.description}</p>
              {showButton && (
                <Link href="/">
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  >
                    {tl.buttonText}
                  </a>
                </Link>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
