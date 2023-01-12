const data = require("../src/data/ro.json");
const { createFile } = require("./utils");

const { code4ro_map } = data;
const toInt = (str) => +str?.replace("%", "");

const statuses = {
  "Proiectare finalizată": 1,
  "Proiectare în desfășurare": 2,
  "Începe în martie 2022": 3,
  "Începe în martie 2023": 4,
  "Începe în martie 2024": 5,
};

const highways = code4ro_map.map((highway) => ({
  files: [],
  data: {
    slug: highway.slug,
    color: highway.color,
    title: highway.title,
    description: highway.description,
    position: {
      left: toInt(highway.mobile_btn.left),
      top: toInt(highway.mobile_btn.top),
    },
    position_desktop: {
      left: toInt(highway.btn.left),
      top: toInt(highway.btn.top),
    },
  },
}));

// let statuses = [];
let segments = [];
let projects = [];
for (const { highway_segments } of code4ro_map) {
  console.log("segments", segments);
  segments = [
    ...segments,
    ...highway_segments.map(({ projects, ...segment }) => {
      // console.log("segmentSlug", segment);
      return {
        files: [
          {
            url: [
              `https://code-for-map.s3.eu-west-2.amazonaws.com/${segment.segment_visual}.svg`,
            ],
            field: "image",
          },
        ],
        data: {
          slug: segment.segmentSlug,
          status: statuses[segment.status],
          icon_left: segment.icon_left,
          description: segment.description,
          title: segment.title,
          position: {
            top: toInt(segment.btn.top),
            left: toInt(segment.btn.left),
          },
        },
      };
    }),
  ];
  // for (const { status } of highway_segments) {
  //   if (!statuses.includes(status)) {
  //     statuses = [...statuses, status];
  //   }
  // }

  for (const { projects: segment_projects } of highway_segments) {
    projects = [...projects, ...segment_projects];
    // console.log("highway_segments", highway_segments);
  }
}

// statuses = statuses.map((status, index) => ({
//   files: [],
//   data: {
//     title: status,
//   },
// }));

// const statusIds = {};
// for (const [index, sts] of statuses.entries()) {
//   statusIds[sts] = index + 1;
// }

// statuses = statuses.map((status, index) => ({
//   [status]: index,
// }));

console.log("highways", highways.length);
console.log("segments", segments.length);
console.log("projects", projects.length);
// console.log("statuses", statuses.length);
// createFile("./statuses.json", JSON.stringify(statusIds));
createFile("./highways.json", JSON.stringify({ data: highways }));
createFile("./segments.json", JSON.stringify({ data: segments }));
createFile("./projects.json", JSON.stringify(projects));
