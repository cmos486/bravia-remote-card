import { LitElement, html, css, nothing, TemplateResult, CSSResultGroup } from 'lit';

/* ================================================================
   Types
   ================================================================ */

interface CardConfig {
  type: string;
  entity: string;
  style?: 'physical' | 'grid';
}

interface GridBtn {
  cmd: string;
  icon?: string;
  text?: string;
  label: string;
  cls?: string;
}

/* ================================================================
   Grid layout definition
   ================================================================ */

const GRID: (GridBtn | null)[][] = [
  [
    { cmd: 'PowerOff', icon: 'mdi:power', label: 'Power', cls: 'power' },
    { cmd: 'Input', icon: 'mdi:video-input-hdmi', label: 'Input' },
    { cmd: 'Home', icon: 'mdi:home', label: 'Home' },
    { cmd: 'Mute', icon: 'mdi:volume-off', label: 'Mute' },
  ],
  [
    { cmd: 'Netflix', icon: 'mdi:netflix', label: 'Netflix', cls: 'netflix' },
    { cmd: 'YouTube', icon: 'mdi:youtube', label: 'YouTube', cls: 'youtube' },
    { cmd: 'Prime', text: 'P', label: 'Prime', cls: 'prime' },
    { cmd: 'Disney', text: 'D+', label: 'Disney+', cls: 'disney' },
  ],
  [
    null,
    { cmd: 'Up', icon: 'mdi:chevron-up', label: '' },
    null,
    { cmd: 'VolumeUp', icon: 'mdi:volume-plus', label: 'Vol +' },
  ],
  [
    { cmd: 'Left', icon: 'mdi:chevron-left', label: '' },
    { cmd: 'Confirm', icon: 'mdi:circle-outline', label: 'OK' },
    { cmd: 'Right', icon: 'mdi:chevron-right', label: '' },
    { cmd: 'VolumeDown', icon: 'mdi:volume-minus', label: 'Vol −' },
  ],
  [
    null,
    { cmd: 'Down', icon: 'mdi:chevron-down', label: '' },
    null,
    { cmd: 'ChannelUp', icon: 'mdi:arrow-up-bold', label: 'CH +' },
  ],
  [
    { cmd: 'Return', icon: 'mdi:arrow-u-left-top', label: 'Back' },
    { cmd: 'Options', icon: 'mdi:dots-vertical', label: 'Options' },
    { cmd: 'EPG', icon: 'mdi:television-guide', label: 'Guide' },
    { cmd: 'ChannelDown', icon: 'mdi:arrow-down-bold', label: 'CH −' },
  ],
  [
    { cmd: 'Display', icon: 'mdi:information-outline', label: 'Info' },
    { cmd: 'Teletext', icon: 'mdi:text-box-outline', label: 'Text' },
    { cmd: 'Subtitle', icon: 'mdi:subtitles-outline', label: 'Subs' },
    null,
  ],
  [
    { cmd: 'Red', icon: 'mdi:square-rounded', label: '', cls: 'clr-red' },
    { cmd: 'Green', icon: 'mdi:square-rounded', label: '', cls: 'clr-green' },
    { cmd: 'Yellow', icon: 'mdi:square-rounded', label: '', cls: 'clr-yellow' },
    { cmd: 'Blue', icon: 'mdi:square-rounded', label: '', cls: 'clr-blue' },
  ],
  [
    { cmd: 'Rewind', icon: 'mdi:rewind', label: 'Rew' },
    { cmd: 'Play', icon: 'mdi:play-pause', label: 'Play' },
    { cmd: 'Forward', icon: 'mdi:fast-forward', label: 'FF' },
    { cmd: 'Stop', icon: 'mdi:stop', label: 'Stop' },
  ],
];

/* ================================================================
   Main Card
   ================================================================ */

class BraviaRemoteCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass: any;
  _config!: CardConfig;

  /* ── HA lifecycle ── */

  static getConfigElement(): HTMLElement {
    return document.createElement('bravia-remote-card-editor');
  }

  static getStubConfig(): object {
    return { entity: '', style: 'physical' };
  }

  setConfig(config: CardConfig): void {
    if (!config.entity) throw new Error('Please define an entity');
    this._config = { style: 'physical', ...config };
  }

  getCardSize(): number {
    return this._config?.style === 'grid' ? 8 : 12;
  }

  /* ── Commands ── */

  private _send(cmd: string): void {
    if (!this.hass || !this._config.entity) return;
    this.hass.callService('remote', 'send_command', {
      entity_id: this._config.entity,
      command: cmd,
    });
  }

  private _click(e: Event): void {
    const cmd = (e.currentTarget as HTMLElement).dataset.cmd;
    if (cmd) this._send(cmd);
  }

  /* ── Physical style ── */

  private _pb(cmd: string, content: TemplateResult | string, cls = ''): TemplateResult {
    return html`<button class="btn ${cls}" data-cmd=${cmd} @click=${this._click}>${content}</button>`;
  }

  private _renderPhysical(): TemplateResult {
    const b = (cmd: string, content: TemplateResult | string, cls = '') => this._pb(cmd, content, cls);
    const i = (name: string) => html`<ha-icon icon=${name}></ha-icon>`;

    return html`
      <ha-card>
        <div class="remote-body">

          <!-- Power / Input / Mic -->
          <div class="row top-row">
            ${b('PowerOff', i('mdi:power'), 'pwr')}
            ${b('Input', i('mdi:video-input-hdmi'), '')}
            ${b('GoogAssistant', i('mdi:microphone'), '')}
          </div>

          <!-- Apps -->
          <div class="row app-row">
            ${b('Netflix', html`<span class="atxt">NETFLIX</span>`, 'app netflix')}
            ${b('YouTube', i('mdi:youtube'), 'app youtube')}
            ${b('Prime', html`<span class="atxt">prime</span>`, 'app prime')}
            ${b('Disney', html`<span class="atxt">D+</span>`, 'app disney')}
          </div>

          <!-- D-Pad -->
          <div class="dpad-wrap">
            <div class="dpad">
              <button class="dp up" data-cmd="Up" @click=${this._click}>
                ${i('mdi:chevron-up')}
              </button>
              <button class="dp left" data-cmd="Left" @click=${this._click}>
                ${i('mdi:chevron-left')}
              </button>
              <button class="dp ctr" data-cmd="Confirm" @click=${this._click}>
                OK
              </button>
              <button class="dp right" data-cmd="Right" @click=${this._click}>
                ${i('mdi:chevron-right')}
              </button>
              <button class="dp down" data-cmd="Down" @click=${this._click}>
                ${i('mdi:chevron-down')}
              </button>
            </div>
          </div>

          <!-- Back / Home / Options -->
          <div class="row">
            ${b('Return', i('mdi:arrow-u-left-top'), '')}
            ${b('Home', i('mdi:home'), '')}
            ${b('Options', i('mdi:dots-vertical'), '')}
          </div>

          <!-- Info / Teletext / Guide -->
          <div class="row">
            ${b('Display', i('mdi:information-outline'), 'sm')}
            ${b('Teletext', i('mdi:text-box-outline'), 'sm')}
            ${b('EPG', i('mdi:television-guide'), 'sm')}
          </div>

          <!-- Volume / Mute / Channel -->
          <div class="vol-ch">
            <div class="rocker">
              ${b('VolumeUp', i('mdi:plus'), 'rock-t')}
              <span class="rock-lbl">VOL</span>
              ${b('VolumeDown', i('mdi:minus'), 'rock-b')}
            </div>
            ${b('Mute', i('mdi:volume-off'), 'rnd')}
            <div class="rocker">
              ${b('ChannelUp', i('mdi:chevron-up'), 'rock-t')}
              <span class="rock-lbl">CH</span>
              ${b('ChannelDown', i('mdi:chevron-down'), 'rock-b')}
            </div>
          </div>

          <!-- Color buttons -->
          <div class="row clr-row">
            ${b('Red', html``, 'clr red')}
            ${b('Green', html``, 'clr green')}
            ${b('Yellow', html``, 'clr yellow')}
            ${b('Blue', html``, 'clr blue')}
          </div>

          <!-- Media -->
          <div class="row">
            ${b('Rewind', i('mdi:rewind'), '')}
            ${b('Forward', i('mdi:fast-forward'), '')}
            ${b('Play', i('mdi:play-pause'), '')}
            ${b('Stop', i('mdi:stop'), '')}
          </div>

        </div>
      </ha-card>
    `;
  }

  /* ── Grid style ── */

  private _renderGrid(): TemplateResult {
    return html`
      <ha-card>
        <div class="grid">
          ${GRID.map(row => row.map(btn => {
            if (!btn) return html`<div class="ge"></div>`;
            return html`
              <button
                class="gb ${btn.cls ? `g-${btn.cls}` : ''}"
                data-cmd=${btn.cmd}
                @click=${this._click}
              >
                ${btn.icon
                  ? html`<ha-icon icon=${btn.icon}></ha-icon>`
                  : html`<span class="gt">${btn.text}</span>`}
                ${btn.label
                  ? html`<span class="gl">${btn.label}</span>`
                  : nothing}
              </button>
            `;
          }))}
        </div>
      </ha-card>
    `;
  }

  /* ── Main render ── */

  render(): TemplateResult {
    if (!this._config || !this.hass) return html``;
    return this._config.style === 'grid'
      ? this._renderGrid()
      : this._renderPhysical();
  }

  /* ── Styles ── */

  static styles: CSSResultGroup = css`
    :host { display: block; }
    ha-card { overflow: hidden; }

    /* ============================================================
       PHYSICAL STYLE
       ============================================================ */

    .remote-body {
      max-width: 280px;
      margin: 0 auto;
      padding: 30px 22px;
      background: linear-gradient(165deg, #3a3a3a 0%, #1a1a1a 100%);
      border-radius: 38px 38px 46px 46px;
      box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.07),
        inset 0 -2px 0 rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;
    }

    /* ── Rows ── */
    .row {
      display: flex;
      gap: 12px;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .top-row { margin-bottom: 2px; }

    /* ── Base button ── */
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      cursor: pointer;
      background: linear-gradient(180deg, #3d3d3d 0%, #2b2b2b 100%);
      color: #ccc;
      border-radius: 10px;
      min-width: 56px;
      min-height: 44px;
      padding: 8px 14px;
      font-family: inherit;
      font-size: 13px;
      box-shadow:
        0 3px 8px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: transform 0.1s, box-shadow 0.1s;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:active {
      transform: translateY(1px);
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }
    .btn ha-icon { --mdc-icon-size: 22px; }
    .btn.sm { min-width: 48px; min-height: 38px; padding: 6px 10px; }
    .btn.sm ha-icon { --mdc-icon-size: 20px; }

    /* ── Power ── */
    .pwr {
      background: linear-gradient(180deg, #c62828 0%, #8e1a1a 100%);
      border-radius: 50%;
      width: 46px; height: 46px;
      min-width: 46px; min-height: 46px;
      padding: 0;
      color: #fff;
      box-shadow:
        0 3px 10px rgba(198, 40, 40, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    /* ── App buttons ── */
    .app-row { gap: 8px; }
    .app {
      flex: 1;
      min-height: 36px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 11px;
      color: #fff;
      padding: 6px 4px;
      letter-spacing: 0.5px;
    }
    .app.netflix  { background: #e50914; }
    .app.youtube  { background: #c4302b; }
    .app.prime    { background: #00a8e1; }
    .app.disney   { background: #1a3064; }
    .app ha-icon  { --mdc-icon-size: 20px; }
    .atxt { font-size: 11px; font-weight: 700; }

    /* ── D-Pad ── */
    .dpad-wrap {
      position: relative;
      width: 176px;
      height: 176px;
      margin: 4px 0;
    }
    .dpad {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(150deg, #383838 0%, #252525 100%);
      box-shadow:
        0 5px 16px rgba(0, 0, 0, 0.45),
        inset 0 1px 0 rgba(255, 255, 255, 0.06),
        inset 0 -2px 0 rgba(0, 0, 0, 0.3);
      position: relative;
    }
    .dp {
      position: absolute;
      border: none;
      outline: none;
      cursor: pointer;
      background: transparent;
      color: #aaa;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.1s, background 0.1s;
      -webkit-tap-highlight-color: transparent;
      font-family: inherit;
    }
    .dp:active { color: #fff; background: rgba(255, 255, 255, 0.08); }
    .dp ha-icon { --mdc-icon-size: 30px; }

    .dp.up {
      top: 6px; left: 50%; transform: translateX(-50%);
      width: 58px; height: 48px;
      border-radius: 29px 29px 14px 14px;
    }
    .dp.down {
      bottom: 6px; left: 50%; transform: translateX(-50%);
      width: 58px; height: 48px;
      border-radius: 14px 14px 29px 29px;
    }
    .dp.left {
      left: 6px; top: 50%; transform: translateY(-50%);
      width: 48px; height: 58px;
      border-radius: 29px 14px 14px 29px;
    }
    .dp.right {
      right: 6px; top: 50%; transform: translateY(-50%);
      width: 48px; height: 58px;
      border-radius: 14px 29px 29px 14px;
    }
    .dp.ctr {
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 62px; height: 62px;
      border-radius: 50%;
      background: linear-gradient(150deg, #484848 0%, #353535 100%);
      color: #ddd;
      font-weight: 700;
      font-size: 14px;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .dp.ctr:active {
      background: linear-gradient(150deg, #555 0%, #444 100%);
      color: #fff;
    }

    /* ── Volume / Channel ── */
    .vol-ch {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .rocker {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .rock-lbl {
      font-size: 9px;
      color: #777;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding: 2px 0;
    }
    .rock-t {
      border-radius: 12px 12px 4px 4px !important;
      min-width: 54px; min-height: 38px;
    }
    .rock-b {
      border-radius: 4px 4px 12px 12px !important;
      min-width: 54px; min-height: 38px;
    }
    .rnd {
      border-radius: 50% !important;
      width: 48px; height: 48px;
      min-width: 48px; min-height: 48px;
      padding: 0;
    }

    /* ── Color buttons ── */
    .clr-row { gap: 18px; }
    .clr {
      width: 30px; height: 30px;
      min-width: 30px; min-height: 30px;
      border-radius: 50% !important;
      padding: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .clr.red    { background: #f44336 !important; }
    .clr.green  { background: #4caf50 !important; }
    .clr.yellow { background: #ffeb3b !important; }
    .clr.blue   { background: #2196f3 !important; }

    /* ============================================================
       GRID STYLE
       ============================================================ */

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      padding: 16px;
    }

    .gb {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      background: var(--secondary-background-color, #e8e8e8);
      color: var(--primary-text-color, #333);
      border-radius: 12px;
      padding: 12px 6px;
      min-height: 52px;
      font-family: inherit;
      font-size: 12px;
      transition: transform 0.1s, opacity 0.1s;
      -webkit-tap-highlight-color: transparent;
    }
    .gb:active { transform: scale(0.93); opacity: 0.8; }
    .gb ha-icon {
      --mdc-icon-size: 24px;
      color: var(--primary-text-color, #333);
    }

    .gl {
      font-size: 10px;
      opacity: 0.7;
      line-height: 1.2;
    }
    .gt {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
    .ge {
      /* empty grid cell */
    }

    /* Power */
    .g-power { color: var(--error-color, #f44336); }
    .g-power ha-icon { color: var(--error-color, #f44336); }

    /* Apps */
    .g-netflix  { background: #e50914; color: #fff; }
    .g-netflix ha-icon  { color: #fff; }
    .g-youtube  { background: #c4302b; color: #fff; }
    .g-youtube ha-icon  { color: #fff; }
    .g-prime    { background: #00a8e1; color: #fff; }
    .g-prime .gt { color: #fff; }
    .g-prime .gl { color: rgba(255,255,255,0.85); }
    .g-disney   { background: #1a3064; color: #fff; }
    .g-disney .gt { color: #fff; }
    .g-disney .gl { color: rgba(255,255,255,0.85); }

    /* Color buttons */
    .g-clr-red    { background: #f44336; color: #fff; }
    .g-clr-red ha-icon    { color: #fff; }
    .g-clr-green  { background: #4caf50; color: #fff; }
    .g-clr-green ha-icon  { color: #fff; }
    .g-clr-yellow { background: #ffeb3b; color: #333; }
    .g-clr-yellow ha-icon { color: #333; }
    .g-clr-blue   { background: #2196f3; color: #fff; }
    .g-clr-blue ha-icon   { color: #fff; }
  `;
}

/* ================================================================
   Editor
   ================================================================ */

class BraviaRemoteCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass: any;
  _config!: CardConfig;

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  private _fire(config: CardConfig): void {
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _entityChanged(ev: CustomEvent): void {
    const entity = ev.detail.value;
    if (entity === this._config.entity) return;
    this._fire({ ...this._config, entity });
  }

  private _styleChanged(ev: Event): void {
    const style = (ev.target as HTMLSelectElement).value as 'physical' | 'grid';
    if (style === this._config.style) return;
    this._fire({ ...this._config, style });
  }

  render(): TemplateResult {
    if (!this.hass || !this._config) return html``;
    return html`
      <div class="editor">
        <label for="entity">Entity</label>
        <ha-entity-picker
          id="entity"
          .hass=${this.hass}
          .value=${this._config.entity || ''}
          .includeDomains=${['remote']}
          @value-changed=${this._entityChanged}
          allow-custom-entity
        ></ha-entity-picker>
        <label for="style">Style</label>
        <select id="style" @change=${this._styleChanged}>
          <option value="physical" ?selected=${this._config.style !== 'grid'}>
            Physical Remote
          </option>
          <option value="grid" ?selected=${this._config.style === 'grid'}>
            Grid
          </option>
        </select>
      </div>
    `;
  }

  static styles: CSSResultGroup = css`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    label {
      font-weight: 500;
      color: var(--primary-text-color);
    }
    select {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
    }
  `;
}

/* ================================================================
   Registration
   ================================================================ */

customElements.define('bravia-remote-card', BraviaRemoteCard);
customElements.define('bravia-remote-card-editor', BraviaRemoteCardEditor);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'bravia-remote-card',
  name: 'Bravia Remote Card',
  description: 'Sony Bravia TV remote control card for Home Assistant',
  preview: true,
});
