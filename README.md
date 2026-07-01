# LGS1920 Studio

Turn outdoors moments into shared stories.

LGS1920 Studio is a browser-based editor for creating outdoor journeys, points of interest, camera views, overlays, and final exports. **Privacy comes first**: journey files can stay local, remain private, or synchronize in real time when the chosen browser setup supports it. When the browser supports it, you can also share exported URLs directly from the **native share menu** to **social networks**.

We use the word journey on purpose. It is not only a track on a map: it is a personal and physical path, a way to meet nature, people, and places, and to keep that experience visible in the final result.

It was also a journey through code, with a lot of discovery and learning across different domains.

## What You Can Do

LGS1920 Studio is organized around common journey-editing tasks:

- open GeoJSON, GPX, or KML data and turn it into a journey
- import and export journey tracks without leaving the browser
- review tracks and adjust how they appear on the map
- add or edit points of interest
- switch between 2D and 3D scene views
- focus the camera on a journey, a track, a POI, or a coordinate
- create orbit and panorama movement when the scene needs motion
- add visible widgets such as text, credits, compass, elevation profile, and journey statistics
- inspect the main scene buttons, drawers, dialogs, and widget surfaces through the user guide
- check distance, elevation, duration, speed, slope, date, time, coordinate, and altitude context while editing
- export PDF reports or ZIP-packaged HTML reports with route metadata, statistics, POIs, and map captures
- capture screenshots and record video with the same overlays used in the editor
- export videos that are ready to post on your social channels
- **Share exported URLs directly from the browser's native share flow when available**
- keep your data local in the browser with offline-friendly PWA behavior, privacy by default, and optional real-time synchronization in supported setups

## Typical Workflow

1. Open the Studio.
2. Import a journey file.
3. Check the active journey and its tracks.
4. Add or refine points of interest.
5. Choose the scene mode and camera framing.
6. Add widgets and overlays that help the scene read clearly.
7. Generate a journey report when you need a document package.
8. Review the capture area.
9. Export a screenshot or record a video.

## User Guide

The user guide is organized around the same tasks you perform in the Studio:

- [Overview](/user-guide/)
- [Start a session](/user-guide/getting-started/first-steps/)
- [Import a route](/user-guide/getting-started/import-source-data/)
- [Use map layers](/user-guide/workflows/use-map-layers/)
- [Edit journeys and tracks](/user-guide/workflows/journeys-and-tracks/)
- [Use POIs](/user-guide/workflows/points-of-interest/)
- [Change colors and appearance](/user-guide/workflows/appearance/)
- [Set camera and scene](/user-guide/workflows/scene-and-camera/)
- [Use widgets](/user-guide/workflows/widgets-and-overlays/)
- [Export](/user-guide/workflows/export/)
- [Fix common problems](/user-guide/workflows/common-problems/)
- [Shortcuts](/user-guide/workflows/shortcuts/)

## Main Objects

| Object | Role |
| --- | --- |
| Journey | Main container for route content, camera state, POIs, and export behavior. |
| Track | Visible path geometry inside a journey. |
| POI | Point marker for starts, stops, landmarks, viewpoints, or narrative moments. |
| Widget | Visual overlay such as compass, text, credits, elevation profile, or statistics. |
| Camera target | Object or coordinate used for focus, orbit, or panorama movement. |
| Journey report | PDF or ZIP-packaged HTML document built from journey metadata, statistics, POIs, coordinates, altitude data, and map captures. |
| Capture area | Final output frame used for screenshots and video recording. |

## Public Pages

- [Open Studio](https://studio.lgs1920.fr)
- [GitHub repository](https://github.com/lgs1920/studio)

## Cesium And Tokens

The Studio uses Cesium for map and 3D scene rendering. If your setup needs Cesium Ion resources, use your own Cesium Ion access token and keep it private.

Useful references:

- [Cesium](https://cesium.com/)
- [Cesium Ion](https://cesium.com/platform/cesium-ion/)
- [Cesium Ion Access Tokens](https://cesium.com/learn/ion/cesium-ion-access-tokens/)

Route imports, exports, screenshots, and video generation remain local to your browser session unless your setup explicitly syncs them.

## License

The public version of LGS1920 Studio is distributed under the PolyForm Noncommercial License 1.0.0.

For other usage terms or contribution questions:

```text
contact@lgs1920.fr
```
