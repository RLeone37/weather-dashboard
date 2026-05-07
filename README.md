# Weather Dashboard

A full-screen, real-time weather dashboard built with vanilla HTML/CSS/JavaScript. Designed for always-on display on a monitor or TV.

## Features

- **Tile grid** — auto-rotating image tiles showing radar, satellite, lightning, tropical outlooks, fire maps, drought monitor, and more from NOAA/NWS public feeds
- **Weather header bar** — live conditions for North Port, FL pulled from the NWS API every 10 minutes, showing:
  - Temperature and heat index (feels like)
  - Sky condition
  - Wind direction, speed, and gusts
  - Dew point
  - Barometric pressure with trend (↑↓→)
  - Precipitation (last 1hr / 6hr)
  - 24-hour high / low
  - Visibility
- **Alerts ticker** — scrolling severe weather alerts from NOAA (tornado warnings, severe thunderstorm warnings, hurricane advisories) for the Tampa Bay and South Florida regions
- **Full-screen tile zoom** — double-click any tile to expand; right-click to advance to the next image source

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Day  MM/DD/YYYY    WEATHER DASHBOARD         HH:MM:SS TZ  │  ← Top bar
├─────────────────────────────────────────────────────────────┤
│  N.PORT FL ◆ 88°F/FEELS 98°F ◆ PARTLY CLOUDY ◆ WIND ...   │  ← Weather bar
├─────────────────────────────────────────────────────────────┤
│  ◆ TORNADO WARNING (2)  ◆ SEVERE THUNDERSTORM (1)  ◆ ...   │  ← Alerts ticker
├──────────┬──────────┬──────────┬──────────────────────────-─┤
│  Tile 1  │  Tile 2  │  Tile 3  │  Tile 4                    │
│          │          │          │                             │
├──────────┼──────────┼──────────┼─────────────────────────── ┤
│  ...     │          │          │                             │
└─────────────────────────────────────────────────────────────┘
```

## Configuration

Edit `config.js` to customize:

| Variable | Description |
|---|---|
| `topBarCenterText` | Title shown in the header center |
| `layout_cols` / `layout_rows` | Grid dimensions (default 4×3) |
| `aIMG` | Tile definitions — `[title, url1, url2, ...]` |
| `tileDelay` | Rotation interval per tile in milliseconds |
| `aURL` | Quick-launch menu links |

## Data Sources

- **Weather observations** — [api.weather.gov](https://www.weather.gov/documentation/services-web-api) (NWS, no API key required)
- **Radar / satellite imagery** — NOAA/NWS public image feeds
- **Lightning** — Blitzortung / LightningMaps
- **Tropical** — NOAA National Hurricane Center
- **Fire outlook** — NIFC
- **Drought** — USDM (University of Nebraska)

## Usage

Open `index.html` directly in a browser — no build step or server required.
