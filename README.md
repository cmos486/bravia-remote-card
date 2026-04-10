# Bravia Remote Card

[![HACS Badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![HA Version](https://img.shields.io/badge/Home%20Assistant-2024.1%2B-blue.svg)](https://www.home-assistant.io/)
[![GitHub Release](https://img.shields.io/github/v/release/cmos486/bravia-remote-card)](https://github.com/cmos486/bravia-remote-card/releases)

Custom Home Assistant Lovelace card that replicates the **Sony RMF-TX500E** remote control.

<p align="center">
  <img src="https://raw.githubusercontent.com/cmos486/bravia-remote-card/main/images/preview.png" alt="Bravia Remote Card" width="280">
</p>

## Prerequisites

> **This card requires the [Bravia REST API](https://github.com/cmos486/Bravia-REST-API) integration.**
>
> Without it, the card will not have a `remote.*` entity to send commands to.
> Install and configure [Bravia REST API](https://github.com/cmos486/Bravia-REST-API) first, then install this card.

## Installation

### HACS (recommended)

1. Open **HACS** in Home Assistant
2. Go to **Frontend** → **+ Explore & Download Repositories**
3. Search for **Bravia Remote Card**
4. Click **Install**
5. Refresh your browser

### Manual

1. Download `bravia-remote-card.js` from the [latest release](https://github.com/cmos486/bravia-remote-card/releases)
2. Copy it to `config/www/bravia-remote-card.js`
3. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/bravia-remote-card.js`
   - Type: JavaScript Module

## Configuration

```yaml
type: custom:bravia-remote-card
entity: remote.kd_65xh9096  # Your remote entity from Bravia REST API
style: physical              # or "grid"
```

### Options

| Option   | Type   | Default    | Description                                          |
|----------|--------|------------|------------------------------------------------------|
| `entity` | string | *required* | Entity ID of your Bravia REST API remote entity      |
| `style`  | string | `physical` | Card style: `physical` or `grid`                     |

## Styles

### Physical Remote

Faithful replica of the Sony RMF-TX500E with realistic button layout, dark theme, circular D-pad, volume/channel rockers, and color-coded buttons.

```yaml
type: custom:bravia-remote-card
entity: remote.kd_65xh9096
style: physical
```

### Grid Layout

Modern flat design with MDI icons, themed to match your Home Assistant dashboard. Compact and ideal for dashboards.

```yaml
type: custom:bravia-remote-card
entity: remote.kd_65xh9096
style: grid
```

## Button Mapping

All buttons use `remote.send_command` with standard IRCC command names from the [Bravia REST API](https://github.com/cmos486/Bravia-REST-API):

| Button       | Command       |
|--------------|---------------|
| Power        | `PowerOff`    |
| Input        | `Input`       |
| Netflix      | `Netflix`     |
| D-Pad        | `Up` / `Down` / `Left` / `Right` / `Confirm` |
| Home         | `Home`        |
| Back         | `Return`      |
| Volume +/-   | `VolumeUp` / `VolumeDown` |
| Channel +/-  | `ChannelUp` / `ChannelDown` |
| Mute         | `Mute`        |
| Guide        | `EPG`         |
| Color buttons| `Red` / `Green` / `Yellow` / `Blue` |
| Play/Pause   | `Play` / `Pause` |
| Rewind / FF  | `Rewind` / `Forward` |
| Stop         | `Stop`        |

## Notes

- Commands use the IRCC protocol via `remote.send_command`
- Some app buttons (YouTube, Prime, Disney+) may not be available on all TV models
- Available commands depend on your specific TV model — check the `available_commands` attribute on your remote entity
- The card includes a visual editor accessible from the HA card configuration UI

## Related

- **[Bravia REST API](https://github.com/cmos486/Bravia-REST-API)** — Home Assistant integration for Sony Bravia TVs (required)

## License

MIT
