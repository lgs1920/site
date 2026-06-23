# LGS1920 Studio

Replay the World Outdoors.

LGS1920 Studio is a browser-based geospatial editor for turning outdoor routes into ready-to-share map stories. It helps users load route files, organize journeys, style tracks, manage points of interest, direct the map camera, add visual overlays, and export the final scene as screenshots, video, or journey reports.

## What It Is For

LGS1920 Studio is built for route storytelling and outdoor visual production:

- prepare a journey from GeoJSON, GPX, or KML data
- inspect and style tracks
- add or edit points of interest
- choose between 2D, 3D, and Columbus scene views
- focus the camera on journeys, tracks, POIs, or coordinates
- create orbit and panorama movement
- add visible widgets such as text, credits, compass, elevation profile, and journey statistics
- review distance, elevation, duration, speed, slope, date, time, coordinate, and altitude context
- generate PDF reports or ZIP-packaged HTML reports with route metadata, statistics, POIs, and map captures
- capture snapshots and record video with the composed overlays
- keep editor state and loaded content in local browser storage with offline-friendly PWA behavior

## Main Workflow

1. Open the Studio.
2. Import a route file.
3. Select the active journey and inspect its tracks.
4. Add or refine points of interest.
5. Choose the scene mode and camera framing.
6. Add widgets and overlays.
7. Generate a journey report when you need a document package.
8. Check the capture area.
9. Export a screenshot or record a video.

## User Guide

The user guide is organized around final-user tasks:

- [Overview](/user-guide/)
- [First steps](/user-guide/getting-started/first-steps/)
- [Import source data](/user-guide/getting-started/import-source-data/)
- [Journeys and tracks](/user-guide/workflows/journeys-and-tracks/)
- [Points of interest](/user-guide/workflows/points-of-interest/)
- [Scene and camera](/user-guide/workflows/scene-and-camera/)
- [Widgets and overlays](/user-guide/workflows/widgets-and-overlays/)
- [Journey reports](/user-guide/workflows/journey-reports/)
- [Snapshots and video](/user-guide/workflows/snapshots-and-video/)
- [Object reference](/user-guide/reference/objects/)
- [Action reference](/user-guide/reference/actions/)

## Main Objects

| Object | Role |
| --- | --- |
| Journey | Story-level container for route content, camera state, POIs, and export behavior. |
| Track | Visible path geometry inside a journey. |
| POI | Point marker for starts, stops, landmarks, viewpoints, or narrative moments. |
| Widget | Visual overlay such as compass, text, credits, elevation profile, or statistics. |
| Camera target | Object or coordinate used for focus, orbit, or panorama movement. |
| Journey report | PDF or ZIP-packaged HTML document generated from journey metadata, statistics, POIs, coordinates, altitude data, and map captures. |
| Capture area | Final output frame used for screenshots and video recording. |

## Public Pages

- [Launch Studio](https://studio.lgs1920.fr)
- [User guide](/user-guide/)
- [Changelog](/changelog/)
- [Licensing](/licensing/)
- [Full license](/license/)
- [Contributor License Agreement](/contributor-license-agreement/)

## License

The public version of LGS1920 Studio is distributed under the PolyForm Noncommercial License 1.0.0.

Commercial use requires a separate agreement from LGS1920.

For licensing, product, or contribution questions:

```text
contact@lgs1920.fr
```
