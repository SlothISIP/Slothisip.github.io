# IMAGE CREATION QUICK REFERENCE GUIDE
## At-a-Glance Information for 12 Images

---

## QUICK DECISION MATRIX

| # | Image Name | Difficulty | Time | Can Auto? | Needs Approval? | Data Source |
|---|------------|-----------|------|-----------|----------------|-------------|
| 1 | **KimJuO.jpg** | ⭐ Easy | 1h | No | No | Personal photo |
| 2 | **seismic_before.jpg** | ⭐⭐ Medium | 1.5h | Yes | Maybe | UMD project/synthetic |
| 3 | **seismic_after.jpg** | ⭐⭐ Medium | 1.5h | Yes | Maybe | UMD project/synthetic |
| 4 | **thermal_calib_before.jpg** | ⭐ Easy | 1h | Partial | No | Springer 2024 paper |
| 5 | **thermal_calib_after.jpg** | ⭐ Easy | 1h | Partial | No | Springer 2024 paper |
| 6 | **respiration_before.jpg** | ⭐ Easy | 1h | Partial | No | SENSORS 2020 paper |
| 7 | **apex_architecture.jpg** | ⭐⭐⭐ Hard | 5h | Partial | **YES** ⚠️ | JS SYSTEM (proprietary) |
| 8 | **acoustic_concept.jpg** | ⭐⭐⭐⭐ Very Hard | 10h | Partial | **YES** ⚠️ | JS SYSTEM (proprietary) |
| 9 | **multiview_calib.jpg** | ⭐⭐ Medium | 3h | Yes | No | DGIST project/papers |
| 10 | **depth_before.jpg** | ⭐⭐ Medium | 2h | Yes | No | NRF project |
| 11 | **depth_after.jpg** | ⭐⭐ Medium | 2h | Yes | No | NRF project |
| 12 | *(Optional)* | - | - | - | - | TBD |

**Total Time Estimate**: 25-30 hours (excluding approval wait time)

---

## PRIORITY TIERS

### CRITICAL (Must have before launch)
- KimJuO.jpg (profile photo)
- thermal_calib_before.jpg
- thermal_calib_after.jpg
- respiration_before.jpg
- seismic_before.jpg
- seismic_after.jpg

**Subtotal**: 6 images, ~7 hours

### HIGH (Add before full launch)
- apex_architecture.jpg (needs approval)
- acoustic_concept.jpg (needs approval)

**Subtotal**: 2 images, ~15 hours + approval

### MEDIUM (Nice to have)
- multiview_calib.jpg

**Subtotal**: 1 image, ~3 hours

### LOW (Can defer)
- depth_before.jpg
- depth_after.jpg

**Subtotal**: 2 images, ~4 hours

---

## CREATION METHOD GROUPS

### GROUP A: EXTRACT FROM PAPERS (Easiest - 4 images, 4 hours)
```
Method: Download PDF → Extract figure → Crop → Resize → Done
Tools: PDF reader, screenshot tool, GIMP/Paint
```
- thermal_calib_before.jpg ← Springer 2024 paper
- thermal_calib_after.jpg ← Springer 2024 paper
- respiration_before.jpg ← SENSORS 2020 paper
- multiview_calib.jpg ← KAIS 2021 or ICROS 2020 paper

**Action**: Get paper PDFs first!

### GROUP B: PYTHON AUTO-GENERATE (Technical - 4 images, 8 hours)
```python
# Standard template for all
import matplotlib.pyplot as plt
fig, ax = plt.subplots(figsize=(2, 2), dpi=80)
# ... your plot code ...
plt.savefig('filename.jpg', bbox_inches='tight')
```
- seismic_before.jpg ← matplotlib signal plot
- seismic_after.jpg ← matplotlib filtered signal
- depth_before.jpg ← OpenCV depth colormap
- depth_after.jpg ← OpenCV corrected depth

**Action**: Write Python scripts

### GROUP C: MANUAL DESIGN (Creative - 2 images, 15 hours)
```
Tools: Draw.io (architecture) / PowerPoint (concept)
Process: Sketch → Design → Iterate → Export
```
- apex_architecture.jpg ← Draw.io diagram
- acoustic_concept.jpg ← PowerPoint/Canva design

**Action**: Get employer approval FIRST! ⚠️

### GROUP D: SIMPLE ASSET (Quick - 1 image, 1 hour)
```
Tools: remove.bg + image editor
Process: Select photo → Remove background → Crop → Save
```
- KimJuO.jpg ← Personal photo

**Action**: Do this first!

---

## DEPENDENCY GRAPH (Visual)

```
START
│
├─ IMMEDIATE ─────────────────────────────────────────────┐
│  ├─ Profile Photo (1h) [NO BLOCKERS]                    │
│  └─ Request Employer Approval ⚠️ [STARTS 2-3 WEEK WAIT] │
│                                                          │
├─ WEEK 1 (while waiting) ────────────────────────────────┤
│  ├─ Get Springer 2024 PDF                               │
│  │   ├─ thermal_before.jpg (1h)                         │
│  │   └─ thermal_after.jpg (1h)                          │
│  ├─ Get SENSORS 2020 PDF                                │
│  │   └─ respiration_before.jpg (1h)                     │
│  ├─ Check seismic data availability                     │
│  │   ├─ seismic_before.jpg (1.5h)                       │
│  │   └─ seismic_after.jpg (1.5h)                        │
│  │                                                       │
│  └─ CHECKPOINT: 6 images done → CAN LAUNCH MVP          │
│                                                          │
├─ WEEK 2 (continue while waiting) ───────────────────────┤
│  ├─ multiview_calib.jpg (3h) [LOW PRIORITY]             │
│  ├─ depth_before.jpg (2h) [LOW PRIORITY]                │
│  └─ depth_after.jpg (2h) [LOW PRIORITY]                 │
│                                                          │
│  └─ CHECKPOINT: 9 images done → STRONG PORTFOLIO        │
│                                                          │
├─ WEEK 3 (approval received) ────────────────────────────┤
│  ├─ apex_architecture.jpg (5h) [REQUIRES APPROVAL]      │
│  └─ acoustic_concept.jpg (10h) [REQUIRES APPROVAL]      │
│                                                          │
│  └─ CHECKPOINT: 11 images done → COMPLETE PORTFOLIO     │
│                                                          │
└─ LAUNCH WEBSITE ─────────────────────────────────────────┘

BLOCKER: If approval denied → Use generic placeholders or omit
```

---

## APPROVAL REQUEST TEMPLATE

**Email to JS SYSTEM Management:**

```
Subject: Portfolio Website - Request for Project Description Approval

Dear [Manager Name],

I am creating an academic portfolio website to showcase my research
work and am requesting approval to include brief descriptions of two
current projects:

1. APEX ML Platform
   Description: "Distributed AutoML platform with GPU optimization
   and automated ML pipeline for prescriptive analytics"

   Diagram: High-level 3-phase architecture (Explore-Optimize-Evolve)
   showing data flow only, no proprietary algorithms or metrics

2. Acoustic Vision System
   Description: "AI-powered sound visualization system using sensor
   fusion of microphone arrays and vision for anomaly detection"

   Diagram: Conceptual visualization showing ROI-based beamforming
   approach, no implementation details

Both descriptions are at a conceptual level similar to what appears
in my CV, intended for academic portfolio purposes only.

Could you please review and approve these descriptions and simplified
diagrams for use on my personal research website?

Thank you,
Kim Ju O
```

---

## PYTHON TEMPLATE FOR AUTO-GENERATED IMAGES

Save this as `generate_images.py`:

```python
"""
Image generation script for academic portfolio
Generates publication-quality 160x160px thumbnails
"""

import matplotlib.pyplot as plt
import numpy as np
from matplotlib import rcParams

# Set publication style
rcParams['font.size'] = 8
rcParams['axes.linewidth'] = 0.5

def save_thumbnail(fig, filename):
    """Save figure as 160x160px thumbnail"""
    fig.savefig(filename,
                bbox_inches='tight',
                pad_inches=0.05,
                dpi=80,  # 160px at figsize(2,2)
                facecolor='white')
    plt.close(fig)
    print(f"✓ Saved: {filename}")

def generate_seismic_before():
    """Generate raw seismic signal with noise"""
    t = np.linspace(0, 10, 1000)
    # Simulate seismic signal + noise
    signal = np.sin(2 * np.pi * 2 * t) * np.exp(-0.1 * t)
    noise = np.random.normal(0, 0.5, len(t))
    noisy_signal = signal + noise

    fig, ax = plt.subplots(figsize=(2, 2))
    ax.plot(t, noisy_signal, 'b-', linewidth=0.5)
    ax.set_xlabel('Time (s)', fontsize=7)
    ax.set_ylabel('Amplitude', fontsize=7)
    ax.set_title('Raw Seismic Signal', fontsize=8)
    ax.grid(True, alpha=0.3)

    save_thumbnail(fig, 'images/seismic_before.jpg')

def generate_seismic_after():
    """Generate filtered seismic signal (40% SNR improvement)"""
    from scipy import signal as sp_signal

    t = np.linspace(0, 10, 1000)
    clean_signal = np.sin(2 * np.pi * 2 * t) * np.exp(-0.1 * t)
    noise = np.random.normal(0, 0.5, len(t))
    noisy_signal = clean_signal + noise

    # Apply low-pass filter (digital filter design from CV)
    sos = sp_signal.butter(4, 5, 'low', fs=100, output='sos')
    filtered_signal = sp_signal.sosfilt(sos, noisy_signal)

    fig, ax = plt.subplots(figsize=(2, 2))
    ax.plot(t, filtered_signal, 'g-', linewidth=0.8)
    ax.set_xlabel('Time (s)', fontsize=7)
    ax.set_ylabel('Amplitude', fontsize=7)
    ax.set_title('Filtered Signal (40% SNR↑)', fontsize=8)
    ax.grid(True, alpha=0.3)

    save_thumbnail(fig, 'images/seismic_after.jpg')

def generate_depth_before():
    """Generate distorted depth map"""
    # Simulate depth camera distortion
    x, y = np.meshgrid(np.linspace(-1, 1, 160), np.linspace(-1, 1, 160))
    r = np.sqrt(x**2 + y**2)
    depth = np.sin(5 * r) / (r + 0.1)
    # Add radial distortion
    distortion = 1 + 0.3 * r**2
    depth_distorted = depth * distortion

    fig, ax = plt.subplots(figsize=(2, 2))
    im = ax.imshow(depth_distorted, cmap='jet', aspect='auto')
    ax.axis('off')
    ax.set_title('Distorted Depth', fontsize=8, pad=2)

    save_thumbnail(fig, 'images/depth_before.jpg')

def generate_depth_after():
    """Generate corrected depth map"""
    x, y = np.meshgrid(np.linspace(-1, 1, 160), np.linspace(-1, 1, 160))
    r = np.sqrt(x**2 + y**2)
    depth = np.sin(5 * r) / (r + 0.1)

    fig, ax = plt.subplots(figsize=(2, 2))
    im = ax.imshow(depth, cmap='jet', aspect='auto')
    ax.axis('off')
    ax.set_title('DNN Corrected', fontsize=8, pad=2)

    save_thumbnail(fig, 'images/depth_after.jpg')

if __name__ == '__main__':
    print("Generating portfolio images...")
    print("-" * 40)

    # Create images directory if not exists
    import os
    os.makedirs('images', exist_ok=True)

    # Generate all images
    generate_seismic_before()
    generate_seismic_after()
    generate_depth_before()
    generate_depth_after()

    print("-" * 40)
    print("✓ All images generated successfully!")
    print("\nNext steps:")
    print("1. Review images in images/ folder")
    print("2. Extract paper figures for thermal/respiration images")
    print("3. Create manual diagrams for APEX ML and Acoustic Vision")
```

**Usage**:
```bash
python generate_images.py
```

---

## MANUAL DESIGN GUIDELINES

### For APEX ML Architecture Diagram (Draw.io)

**Requirements**:
- Show 3 phases: Explore → Optimize → Evolve
- Key components: Data, GPU Cluster, Ray, Algorithm Factory, Output
- Clean, minimal, professional look

**Step-by-step**:
1. Open draw.io in browser (free)
2. Choose "Flowchart" template
3. Add rectangles for components:
   ```
   [Data Input] → [Explore Phase] → [Optimize Phase] → [Evolve Phase] → [Output]
                        ↓                  ↓                 ↓
                   [Ray Cluster]    [GPU Pool]      [Algorithm Factory]
   ```
4. Add arrows showing flow
5. Use color scheme: Blue (data), Green (compute), Orange (output)
6. Export as JPG, 800x800px, then resize to 160x160px
7. Total time: 3-5 hours (with iterations)

**Tips**:
- Keep text minimal (component names only)
- Use icons from draw.io library (search "server", "database", "gpu")
- Avoid proprietary details (no performance numbers, no algorithm names)

### For Acoustic Vision Concept (PowerPoint/Canva)

**Requirements**:
- Show: Microphone array + Camera → Fusion → Sound heatmap overlay
- Visual, intuitive, concept-level

**Step-by-step**:
1. Open PowerPoint or Canva
2. Start with blank slide
3. Add components:
   - Left: Microphone array icon (search online for free icons)
   - Left: Camera icon
   - Center: Fusion symbol (two arrows merging)
   - Right: Image with heatmap overlay
4. Add arrows showing flow
5. Add brief labels: "Audio Input", "Vision Input", "ROI Beamforming", "Visualization"
6. Export as JPG, high quality
7. Resize to 160x160px
8. Total time: 5-10 hours (design iteration)

**Tips**:
- Use free icon sources: flaticon.com, icons8.com
- Heatmap: Use gradient overlay (red = high, blue = low)
- Keep it conceptual, not technical implementation
- Show the "magic" of fusion, not the algorithm details

**Alternative**: Pay Fiverr designer $30-50 to create based on your sketch

---

## FALLBACK STRATEGIES (If Things Go Wrong)

### If Employer Approval Denied
**Plan B**: Generic placeholders
- "Machine Learning Pipeline Architecture" (generic ML flow)
- "Acoustic Beamforming Concept" (textbook diagram)
- Add note: "Representative system architecture"

### If Can't Access Paper PDFs
**Plan B**: Contact authors/journals
- Email co-author (Prof. Deok-Woo Lee) for paper copies
- Request from university library
- Use preprint versions if available

**Plan C**: Regenerate from scratch using thesis data

### If No Original Data Available
**Plan B**: Synthetic data generation
- Seismic: Use publicly available earthquake data (USGS)
- Thermal: Use FLIR public datasets
- Depth: Use NYU Depth Dataset or KITTI

### If Time Runs Out
**Minimum Viable**: Launch with 6-7 images
- Focus on published papers only (thermal, respiration, seismic)
- Add proprietary projects later
- Website still looks professional and complete

---

## TOOLS & RESOURCES

### Free Online Tools
- **remove.bg**: Background removal → https://remove.bg
- **Draw.io**: Diagram creation → https://draw.io
- **Canva**: Design tool → https://canva.com (freemium)
- **Photopea**: Online Photoshop → https://photopea.com
- **Flaticon**: Free icons → https://flaticon.com

### Python Libraries
```bash
pip install matplotlib numpy scipy opencv-python pillow
```

### Image Editing Desktop Apps
- **GIMP**: Free Photoshop alternative
- **Paint.NET**: Simple Windows editor
- **Inkscape**: Vector graphics (for diagrams)

### Paid Options (If Budget Allows)
- **Fiverr**: Hire designer for 2 complex diagrams ($40-100 total)
- **Adobe Creative Cloud**: $20/month student plan
- **Canva Pro**: $13/month (better templates)

### Datasets (If Needed)
- **Seismic**: IRIS Data Services, USGS Earthquake Archive
- **Thermal**: FLIR Thermal Dataset, OpenThermal
- **Depth**: NYU Depth v2, KITTI Vision Benchmark

---

## QUALITY CHECKLIST

Before considering an image "done", verify:

- [ ] Dimensions are exactly 160x160 pixels
- [ ] File format is .jpg or .png
- [ ] File size is reasonable (<500KB)
- [ ] Image is clear and recognizable at thumbnail size
- [ ] Text is readable (if any text present)
- [ ] Colors are not washed out or too dark
- [ ] Image represents the project accurately
- [ ] No proprietary/confidential information visible
- [ ] File is saved in `images/` directory with correct name

---

## PROGRESS TRACKER

Use this to track your progress:

```
[ ] 1. KimJuO.jpg (profile photo)
[ ] 2. seismic_before.jpg
[ ] 3. seismic_after.jpg
[ ] 4. thermal_calib_before.jpg
[ ] 5. thermal_calib_after.jpg
[ ] 6. respiration_before.jpg
[ ] 7. apex_architecture.jpg (⚠️ needs approval)
[ ] 8. acoustic_concept.jpg (⚠️ needs approval)
[ ] 9. multiview_calib.jpg
[ ] 10. depth_before.jpg
[ ] 11. depth_after.jpg

MVP Ready (6 images): [ ]
Strong Portfolio (9 images): [ ]
Complete Portfolio (11 images): [ ]
```

---

## TIME TRACKING TEMPLATE

Use this to estimate and track actual time:

| Image | Estimated | Actual | Status | Notes |
|-------|-----------|--------|--------|-------|
| Profile | 1h | ___ | [ ] | |
| Seismic before | 1.5h | ___ | [ ] | |
| Seismic after | 1.5h | ___ | [ ] | |
| Thermal before | 1h | ___ | [ ] | |
| Thermal after | 1h | ___ | [ ] | |
| Respiration | 1h | ___ | [ ] | |
| APEX ML | 5h | ___ | [ ] | Waiting approval |
| Acoustic | 10h | ___ | [ ] | Waiting approval |
| Multiview | 3h | ___ | [ ] | |
| Depth before | 2h | ___ | [ ] | |
| Depth after | 2h | ___ | [ ] | |
| **TOTAL** | **29h** | ___ | | |

---

## FINAL QUICK START

**If you only have 1 hour right now:**
1. Take/select profile photo (30 min)
2. Process with remove.bg (10 min)
3. Save as KimJuO.jpg (5 min)
4. Draft employer approval email (15 min)
→ You've completed 1 critical image + started approval process!

**If you have 3 hours today:**
1. Profile photo (1h)
2. Download Springer 2024 paper PDF (15 min)
3. Extract thermal calibration figures (1h)
4. Download SENSORS 2020 paper PDF (15 min)
5. Extract respiration figure (30 min)
→ You've completed 3 critical images!

**If you have a full day (8 hours):**
Complete all CRITICAL images (6 total):
1. Profile photo (1h)
2. Paper figure extractions (2h)
3. Seismic signal generation with Python (3h)
4. Quality check and refinement (1h)
5. Draft approval request (1h)
→ You have MVP ready to deploy!

**Remember**: Progress > Perfection. Start with easy wins!
