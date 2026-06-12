# Chronoflow ⏱️

A minimalist, distraction-free focus timer engineered for reliability, precision, and mobile-first usability.

Built as a single-file web application with **zero dependencies**, **zero backend**, and **instant deployment support**.

🚀 **[Live Demo](https://pomodoro-timer-3rup.vercel.app//)**

---

## Overview

**Chronoflow** is a lightweight productivity timer designed for deep work sessions, structured focus cycles, and intentional breaks.

Unlike traditional productivity apps, Chronoflow prioritizes:

- ⚡ **Reliability** over complexity
- 🎯 **Performance** over visual clutter
- 🔐 **Privacy** over cloud services
- 📱 **Mobile-first** interaction
- ⏰ **Long-running accuracy**

The entire application runs locally in the browser and requires **no account, server, or external database**.

---

## ✨ Key Features

### 🎯 Precision Time Tracking

Chronoflow uses **timestamp-based calculations** instead of relying solely on JavaScript intervals.

**Benefits:**
- Accurate countdowns
- Resistant to browser throttling
- Survives tab switches
- Resistant to device sleep states
- Handles delayed execution gracefully

### 🔄 Automatic Focus & Break Cycles

Built-in session presets:

| Duration | Focus | Break |
|----------|-------|-------|
| Quick   | 10 min | 2 min |
| Standard | 25 min | 5 min |
| Extended | 50 min | 10 min |

Cycles automatically transition between work and break periods.

### 💾 Session Persistence

All timer state is stored **locally in browser**.

The application restores:
- Current mode (work/break)
- Active session status
- Remaining time
- Selected preset
- Session statistics

Even after:
- Browser refresh
- Accidental page close
- Device restart
- Temporary disconnection

### 📱 Mobile Optimized

Designed primarily for smartphones with:
- Touch-friendly controls
- Responsive layout (360px - 2560px)
- Safe-area support (notches, dynamic islands)
- Minimal battery consumption
- Wake Lock support (prevents screen sleep)

### 🔊 Native Audio Feedback

No external audio files required.

Notification sounds are **generated using the Web Audio API**:
- ✅ Smaller application size
- ✅ No media downloads
- ✅ Offline compatibility
- ✅ Instant playback

### 📳 Haptic Feedback

Supported devices receive vibration patterns for:
- Session completion
- Break start
- Break end

### 🎨 Visual Progress Ring

Radial progress indicator displays:
- Remaining time
- Session completion percentage
- Current phase status

All animations are **hardware accelerated** and respect `prefers-reduced-motion`.

### 🌍 Offline First

Chronoflow functions **entirely offline** after the first load.

No internet connection required to:
- Start sessions
- Pause sessions
- Switch presets
- Restore state

### 🔒 Privacy Focused

Chronoflow collects:
- ❌ No analytics
- ❌ No telemetry
- ❌ No tracking
- ❌ No cookies
- ❌ No personal data

Everything remains **on your device**.

---

## 🛠️ Technical Architecture

**Frontend:**
- HTML5
- CSS3 (with CSS variables, media queries)
- Vanilla JavaScript (ES6+)
- Module pattern (IIFE)

**Storage:**
- LocalStorage (browser persistence)

**APIs:**
- Web Audio API (sound generation)
- Wake Lock API (screen management)
- Notifications API (system notifications)
- Vibration API (haptic feedback)

**Deployment:**
Compatible with:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Cloudflare Pages
- ✅ Any static web host

---

## 🚀 Quick Start

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/derouachadam036-a11y/Pomodoro-timer-.git
   cd Pomodoro-timer-
   ```

2. **Deploy to Vercel (recommended):**
   ```bash
   vercel
   ```

3. **Or serve locally:**
   ```bash
   npx http-server
   # Open http://localhost:8080
   ```

### Deployment

#### Vercel (One-click)

```bash
vercel
```

Your app is live in seconds! 🎉

#### Netlify

1. Fork the repository
2. Connect to Netlify
3. Deploy!

#### GitHub Pages

```bash
git push origin main
```

Enable GitHub Pages from `Settings` → `Pages` → `Deploy from branch: main`

#### Manual Deployment

Simply upload `index.html` to any static hosting.

---

## ⌨️ Keyboard Shortcuts

| Action | Key |
|--------|-----|
| Start/Pause | `Space` |
| Reset | `R` |
| Adjust Time | Click buttons |
| Change Preset | Click preset buttons |

---

## 🌐 Browser Support

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome/Edge | ✅ Latest 2 | ✅ Latest 2 |
| Firefox | ✅ Latest 2 | ✅ Latest 2 |
| Safari | ✅ Latest 2 | ✅ Latest 2 |
| Samsung Internet | - | ✅ Latest 2 |

---

## ♿ Accessibility

- **WCAG 2.1 Level AA** compliant
- Full keyboard navigation
- Screen reader compatible
- High contrast support
- `prefers-reduced-motion` respected
- Semantic HTML with ARIA labels

---

## 📊 Performance Goals

### Minimal Footprint
- Single-file architecture
- No build step
- No frameworks
- No package manager
- No runtime dependencies
- **~32 KB uncompressed** (gzipped: ~9 KB)

### Fast Startup
- Instant loading
- No hydration
- No server rendering
- No network requests after load

### Battery Efficiency
- Lightweight rendering
- Efficient update loops (500ms intervals)
- Reduced background activity

---

## 🎓 Development

### Local Setup

```bash
# Start development server
npx http-server

# Or with Python
python -m http.server 8000
```

### Code Structure

- `index.html` - Complete application (HTML + CSS + JS)
- Single-file architecture with IIFE module pattern
- All styles and scripts embedded

### Code Quality

- ✅ Module pattern (IIFE) for scope management
- ✅ Comprehensive error handling
- ✅ Input validation for all presets
- ✅ CSP (Content Security Policy) enabled
- ✅ Logging with prefixed console output
- ✅ Type-safe comparisons

### Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📋 Roadmap

### Planned Features

- [ ] Custom focus durations
- [ ] Long break cycles
- [ ] Daily statistics
- [ ] Weekly reports
- [ ] Session history export
- [ ] Theme customization (dark/light toggle)
- [ ] Advanced PWA support
- [ ] Multiple timers
- [ ] Background modes

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `<style>`:

```css
:root {
  --focus: #6366f1;      /* Primary accent */
  --pause: #10b981;      /* Break phase color */
  --bg: #08090d;         /* Background */
  --text: #f4f4f5;       /* Text color */
}
```

### Adjust Preset Durations

Edit `PRESETS` in the script:

```javascript
const PRESETS = {
  25: { work: 25 * 60, break: 5 * 60, color: '#6366f1', glow: 'rgba(99,102,241,0.06)' },
  // Add your own:
  30: { work: 30 * 60, break: 5 * 60, color: '#f59e0b', glow: 'rgba(245,158,11,0.06)' }
};
```

---

## 🔧 Improvements in v2.0

### Code Optimization
- ✅ Refactored to IIFE module pattern
- ✅ Removed global variables pollution
- ✅ Added input validation
- ✅ Improved error handling
- ✅ Added logging system with prefix

### Bug Fixes
- ✅ Fixed preset validation
- ✅ Added clamp function for time adjustments
- ✅ Fixed notification permission flow
- ✅ Improved wake lock management
- ✅ Better state recovery after crashes

### Security
- ✅ Added CSP meta tag
- ✅ Input validation for all user actions
- ✅ Type checking for presets
- ✅ Safe error handling

### Accessibility
- ✅ Better ARIA labels
- ✅ Improved keyboard shortcuts (Space + R)
- ✅ Better focus management
- ✅ Screen reader optimizations

---

## 📄 License

MIT License - Free for personal and commercial use.

See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

Independent project focused on creating fast, reliable, privacy-friendly productivity tools for the web.

---

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/derouachadam036-a11y/Pomodoro-timer-/issues)
- **Discussions:** [GitHub Discussions](https://github.com/derouachadam036-a11y/Pomodoro-timer-/discussions)

---

## 🙏 Credits

Built with ❤️ for focused work and deep productivity.

Inspired by the Pomodoro Technique by Francesco Cirillo.
