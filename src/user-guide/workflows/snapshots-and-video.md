
## Snapshot Workflow

Use snapshots when you need a still image of the current map composition. The snapshot should include the visible scene and the overlays that are part of the final output.

When a replay crop zone is active, Studio can also capture a replay snapshot from that zone. Replay snapshots capture the replay scene as a still image and do not wait for the widget-mount workflow used by video recording.

When the output needs journey metadata, statistics, POI tables, coordinates, altitude data, and multiple map captures, use the journey report workflow instead of a single snapshot.

## Video Workflow

Use video when camera movement, orbit, panorama, or timed visual progression matters. Check the crop ratio, output quality, and frame rate before recording. Studio supports 15, 30, 45, and 60 FPS presets, with quality presets ranging from medium to ultra high.

For replay video, the draft recording is followed by a deferred high-quality MP4 render. The replay and video controls can be linked so camera movement, clip timing, and overlay visibility stay synchronized. The final frame is prepared from the replay state before recording is closed.

<div class="guide-screenshot-placeholder" role="img" aria-label="Screenshot placeholder for video capture controls">
    <wa-icon variant="regular" name="image"></wa-icon>
    <strong>Screenshot placeholder</strong>
    <span>Video capture area with crop zone, recording controls, and visible widgets inside the frame.</span>
</div>

## Final Checklist

Before capture:

1. Hide panels that should not be part of the output.
2. Confirm the capture area and aspect ratio.
3. Check that widgets are inside the safe visual area.
4. Run camera movement once before recording.
5. Confirm export settings before starting the recorder.
6. Keep the browser tab active while recording.
7. Review the exported media before changing the scene.
8. For replay video, review the draft before waiting for the deferred HQ export to finish.
