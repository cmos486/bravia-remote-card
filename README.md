# Bravia Remote Card

Custom Home Assistant Lovelace card that replicates the **Sony RMF-TX500E** remote control.

Two visual styles available: a realistic physical remote replica and a modern grid layout.

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
entity: remote.kd_65xh9096
style: physical
```

### Options

| Option   | Type   | Default    | Description                              |
|----------|--------|------------|------------------------------------------|
| `entity` | string | *required* | Entity ID of your Sony Bravia remote     |
| `style`  | string | `physical` | Card style: `physical` or `grid`         |

## Styles

### Physical Remote

Faithful replica of the Sony RMF-TX500E with realistic button layout, dark theme, circular D-pad, volume/channel rockers, and color-coded buttons.

```yaml
type: custom:bravia-remote-card
entity: remote.sony_bravia
style: physical
```

### Grid Layout

Modern flat design with MDI icons, themed to match your Home Assistant dashboard. Compact and ideal for dashboards.

```yaml
type: custom:bravia-remote-card
entity: remote.sony_bravia
style: grid
```

## Button Mapping

All buttons use `remote.send_command` with standard IRCC command names:

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

## Requirements

- Home Assistant with the **Sony Bravia** integration configured
- A `remote.*` entity from the Bravia integration

## Notes

- Commands use the IRCC protocol via `remote.send_command`
- Some app buttons (YouTube, Prime, Disney+) may not be available on all TV models
- Available commands depend on your specific TV model — check the `available_commands` attribute on your remote entity
- The card includes a visual editor accessible from the HA card configuration UI

## License

MIT
