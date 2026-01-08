# REALISTIC IMAGE CREATION WORKFLOW
## Kim Ju O's Academic Portfolio - 12 Images Implementation Plan

**Document Purpose**: Provide realistic assessment of creating 12 images for the portfolio website, considering Kim Ju O's actual situation as an industry researcher with proprietary project constraints.

---

## EXECUTIVE SUMMARY

**Current Situation**:
- Industry researcher at JS SYSTEM (2025-Present)
- Recent Master's graduate from Keimyung University (2020-2025)
- 2 SCI publications (Springer 2024, MDPI 2020)
- 2 proprietary projects requiring employer approval (APEX ML, Acoustic Vision)
- 3 academic projects with existing data/papers

**Image Breakdown by Feasibility**:
- **Easy/Quick (4 images)**: Can be done in 1-3 hours total
- **Medium (4 images)**: Require 4-8 hours with existing data
- **Hard (2 images)**: Need employer approval, 3-5 hours each
- **Very Hard (2 images)**: Design-intensive, 5-10 hours each

**Critical Path**: Employer approval for proprietary projects blocks 2 images

**Total Realistic Time**: 25-40 hours spread over 2-3 weeks (accounting for approval delays)

---

## IMAGE-BY-IMAGE ANALYSIS

### 1. PROFILE PHOTO (images/KimJuO.jpg)
**Specs**: 400x400px, circular crop, professional look

**Difficulty**: EASY
**Time**: 30 minutes - 1 hour
**Priority**: CRITICAL (must have before deployment)

**Prerequisites**:
- Professional or semi-professional photo
- Tools: remove.bg (free), GIMP/Photoshop/PowerPoint

**Best Approach**:
1. Select best existing professional photo (graduation, conference, work ID)
2. Use remove.bg to remove background (free online tool)
3. Crop to 400x400px square
4. Save as KimJuO.jpg

**Roadblocks**:
- Low risk - everyone has usable photos
- Worst case: Take new photo with smartphone + good lighting

**Can Auto-Generate?**: No (needs human photo)
**Needs Approval?**: No

---

### 2-3. SEISMIC DETECTION (Seongwoo Instruments 2023)
**Files**:
- `images/seismic_before.jpg` (raw signal)
- `images/seismic_after.jpg` (filtered signal)

**Specs**: 160x160px each, before/after comparison

**Difficulty**: MEDIUM
**Time**: 2-3 hours total (both images)
**Priority**: CRITICAL

**Prerequisites**:
- Access to seismic data from UMD project (2023)
- Python: matplotlib, numpy, scipy
- Understanding of signal processing (✓ has expertise)

**Best Approach**:
```python
# Option A: Use actual seismic data from 2023 project
import matplotlib.pyplot as plt
import numpy as np
from scipy import signal

# Plot raw noisy seismic signal
fig, ax = plt.subplots(figsize=(2, 2), dpi=80)
# ... plot raw signal with noise
plt.savefig('seismic_before.jpg', bbox_inches='tight')

# Plot filtered signal (40% SNR improvement mentioned in CV)
# Apply digital filter designed during project
# ... plot filtered signal
plt.savefig('seismic_after.jpg', bbox_inches='tight')
```

**Roadblocks**:
- RISK: May not have access to original seismic data (project ended 2024.03)
- FALLBACK: Generate synthetic seismic signal + noise
- RISK: Seongwoo Instruments data may be proprietary
  - SOLUTION: Request approval or use synthetic data

**Can Auto-Generate?**: YES (Python matplotlib)
**Needs Approval?**: MAYBE (if using real data from Seongwoo Instruments)

**Dependency**: Check if project data is available first

---

### 4-5. THERMAL CAMERA CALIBRATION (Springer 2024 Paper)
**Files**:
- `images/thermal_calib_before.jpg` (uncalibrated thermal image)
- `images/thermal_calib_after.jpg` (calibrated thermal image)

**Specs**: 160x160px each, thermal imaging visualization

**Difficulty**: EASY-MEDIUM
**Time**: 1-2 hours total
**Priority**: CRITICAL (published paper)

**Prerequisites**:
- Access to Springer 2024 paper figures ✓
- Paper title: "Calibrating a Three-Viewpoints Thermal Camera with Few Correspondences"
- Python: OpenCV, matplotlib (if regenerating)

**Best Approach** (RECOMMENDED):
1. Download published Springer 2024 paper PDF
2. Extract Figure 1 or Figure 2 (likely shows before/after calibration)
3. Crop to before/after sections
4. Resize to 160x160px each
5. Done!

**Alternative Approach** (if paper figures are low quality):
1. Use original data from Master's thesis (2020-2025)
2. Regenerate figures with Python/OpenCV
3. Save as high-quality JPGs

**Roadblocks**:
- LOW RISK: Published paper = publicly available figures
- If paper not yet published online: Use thesis figures
- If no access to original data: Extract from paper PDF only

**Can Auto-Generate?**: PARTIALLY (can extract from PDF, or regenerate with Python)
**Needs Approval?**: NO (published paper = public domain for author's own use)

**Dependency**: Need DOI/URL of Springer 2024 paper

---

### 6. UWB RESPIRATION DETECTION (MDPI SENSORS 2020 + Master's Thesis)
**Files**:
- `images/respiration_before.jpg` (UWB radar signal)
- Optional: `images/respiration_after.mp4` (animated anomaly detection)

**Specs**: 160x160px, signal visualization

**Difficulty**: EASY-MEDIUM
**Time**: 1-2 hours (static image), 3-5 hours (if adding animation)
**Priority**: CRITICAL (for SENSORS 2020 paper entry)

**Prerequisites**:
- MDPI SENSORS 2020 paper figures ✓
- Paper title: "Detection of Abnormal Respiration from Multiple-Input Respiratory Signals"
- Master's thesis data (2020-2025)

**Best Approach**:
1. Extract Figure from SENSORS 2020 paper
2. Show UWB radar respiratory signal waveform
3. Resize to 160x160px
4. Save as respiration_before.jpg

**For Animation** (OPTIONAL, HIGH IMPACT):
```python
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Create animated plot showing:
# - Normal breathing pattern (green)
# - Transition to abnormal pattern (red highlight)
# Export as MP4 or GIF
```

**Roadblocks**:
- LOW RISK: 2020 paper = definitely published and accessible
- Animation adds time but high visual impact for portfolio

**Can Auto-Generate?**: YES (Python matplotlib)
**Needs Approval?**: NO (published paper + thesis)

**Recommendation**: Start with static image, add animation later if time permits

---

### 7. APEX ML ARCHITECTURE DIAGRAM
**Files**: `images/apex_architecture.jpg`

**Specs**: 160x160px, system architecture diagram

**Difficulty**: HARD (approval required) + MEDIUM (design)
**Time**: 3-5 hours (after approval)
**Priority**: HIGH (current flagship project)

**Prerequisites**:
- **CRITICAL**: Employer approval from JS SYSTEM ⚠️
- Diagram tool: Draw.io (free), PowerPoint, or Python (diagrams library)
- Understanding of APEX ML architecture (✓ designed it himself)

**Best Approach**:
1. **FIRST**: Request approval from JS SYSTEM management
   - Prepare 2-3 sentence public description
   - Show simplified architecture diagram proposal
   - Get written approval for portfolio use

2. **AFTER APPROVAL**: Create simplified architecture diagram showing:
   - 3-Phase Pipeline: Explore → Optimize → Evolve
   - Key components: Ray, GPU Cluster, Algorithm Factory
   - NO proprietary details (algorithms, data, performance metrics)

3. Create diagram:
```
Option A: Draw.io (recommended for clean look)
- Use flowchart shapes
- Show data flow with arrows
- Keep it high-level

Option B: Python diagrams library
from diagrams import Diagram
from diagrams.onprem.compute import Server
# ... create architecture diagram
```

**Roadblocks**:
- **BLOCKER**: Employer approval required (proprietary project)
- **TIMELINE**: Approval may take 1-2 weeks
- **RISK**: Approval may be denied or require heavy redaction
- **FALLBACK**: If denied, omit from portfolio or replace with generic ML pipeline

**Can Auto-Generate?**: PARTIALLY (Python diagrams library)
**Needs Approval?**: YES - CRITICAL BLOCKER ⚠️

**Critical Path Item**: Start approval process IMMEDIATELY

---

### 8. ACOUSTIC VISION SYSTEM CONCEPT
**Files**: `images/acoustic_concept.jpg`

**Specs**: 160x160px, concept visualization

**Difficulty**: HARD (approval) + VERY HARD (design)
**Time**: 5-10 hours (after approval)
**Priority**: HIGH (current flagship project)

**Prerequisites**:
- **CRITICAL**: Employer approval from JS SYSTEM ⚠️
- Design skills: PowerPoint, Illustrator, or Canva
- Technical understanding: ROI Beamforming, YOLOv8 + MiDaS fusion

**Best Approach**:
1. **FIRST**: Request employer approval (same as APEX ML)

2. **AFTER APPROVAL**: Create concept visualization showing:
   - Microphone array capturing sound
   - Camera capturing visual scene
   - Fusion: Sound source localization overlaid on image
   - Heatmap showing acoustic activity
   - NO proprietary algorithms or performance data

3. Design approach:
```
Recommended: PowerPoint or Canva
- Start with template or blank slide
- Use shapes and icons (search "microphone icon", "camera icon")
- Add arrows showing data flow
- Overlay heatmap visualization
- Export as JPG
```

**Roadblocks**:
- **BLOCKER**: Employer approval (proprietary, currently in development)
- **SKILL GAP**: Requires visual design skills (not coding)
- **TIME**: Most time-consuming single image
- **RISK**: Approval may be denied (system not yet commercialized)
- **FALLBACK**: If denied, omit from portfolio or describe conceptually only

**Can Auto-Generate?**: PARTIALLY (can generate heatmap with Python, but needs manual design composition)
**Needs Approval?**: YES - CRITICAL BLOCKER ⚠️

**Critical Path Item**: Start approval process IMMEDIATELY

**Design Alternatives**:
- Hire freelancer designer on Fiverr ($20-50, 2-3 days)
- Use AI image generators with text prompt (DALL-E, Midjourney) then edit
- Simplify to basic flowchart in Draw.io

---

### 9. MULTI-VIEW CAMERA CALIBRATION (DGIST Project 2020-2021)
**Files**: `images/multiview_calib.jpg`

**Specs**: 160x160px, geometry visualization

**Difficulty**: MEDIUM
**Time**: 2-3 hours
**Priority**: MEDIUM

**Prerequisites**:
- DGIST project data/papers (2020-2021)
- Domestic publications: KAIS 2021, ICROS 2020
- Tools: Python (OpenCV), PowerPoint, or Draw.io

**Best Approach**:
1. Check for existing figures in domestic publications:
   - "Thermal Camera Calibration using Improved Probability Maps" (KAIS 2021)
   - "Edge and Corner Detection for Multiple Thermal Camera Calibration" (ICROS 2020)

2. Extract figure showing:
   - Multiple camera viewpoints
   - Extrinsic parameter relationships
   - Calibration geometry

3. Alternative: Create geometric diagram showing:
   - 3 cameras with non-overlapping views
   - Coordinate systems
   - Transformation relationships

**Roadblocks**:
- RISK: Domestic papers may be in Korean only
- RISK: May not have access to original figures
- SOLUTION: Recreate simple geometry diagram

**Can Auto-Generate?**: YES (Python OpenCV for geometry, or Draw.io diagram)
**Needs Approval?**: NO (commissioned research project, completed 2021)

**Time-Saving Tip**: Extract from existing papers first; only recreate if necessary

---

### 10-11. DEPTH CAMERA CALIBRATION (NRF Project 2020-2022)
**Files**:
- `images/depth_before.jpg` (distorted depth map)
- `images/depth_after.jpg` (corrected depth map)

**Specs**: 160x160px each, depth visualization (colormap)

**Difficulty**: MEDIUM
**Time**: 2-4 hours total
**Priority**: LOW (academic project, lower priority)

**Prerequisites**:
- NRF project data (2020-2022)
- Master's thesis or related papers
- Tools: Python (OpenCV, matplotlib with depth colormaps)

**Best Approach**:
1. Locate depth camera calibration data from NRF project
2. Generate before/after visualization:

```python
import cv2
import matplotlib.pyplot as plt

# Load distorted depth map
depth_raw = cv2.imread('raw_depth.png', cv2.IMREAD_UNCHANGED)

# Apply DNN-based calibration (from thesis)
depth_corrected = apply_dnn_calibration(depth_raw)

# Visualize with colormap
plt.figure(figsize=(2, 2))
plt.imshow(depth_raw, cmap='jet')
plt.axis('off')
plt.savefig('depth_before.jpg', bbox_inches='tight', dpi=80)

plt.figure(figsize=(2, 2))
plt.imshow(depth_corrected, cmap='jet')
plt.axis('off')
plt.savefig('depth_after.jpg', bbox_inches='tight', dpi=80)
```

**Roadblocks**:
- RISK: May not have access to original depth camera data
- FALLBACK: Use publicly available depth datasets (NYU Depth, KITTI)
- Apply generic distortion + correction for demonstration

**Can Auto-Generate?**: YES (Python matplotlib with colormaps)
**Needs Approval?**: NO (NRF academic project)

**Priority Note**: Low priority - can defer if time-constrained

---

### 12. PLACEHOLDER OR ADDITIONAL PROJECT IMAGE
**Status**: Not clearly specified in requirements

**Options**:
A. Leave as 11 images (acceptable)
B. Add generic research interest visualization
C. Add profile banner/header image
D. Add publication timeline visualization

**Recommendation**: Defer until first 11 images complete

---

## DEPENDENCY GRAPH

```
Timeline View (Critical Path):

Week 0 (Immediate):
├─ START: Request employer approval for APEX ML & Acoustic Vision ⚠️
├─ Profile photo (30min-1hr) [CRITICAL]
└─ Collect paper PDFs (Springer 2024, SENSORS 2020)

Week 1 (While waiting for approval):
├─ Extract thermal calibration images from Springer 2024 (1-2hrs) [CRITICAL]
├─ Extract respiration image from SENSORS 2020 (1-2hrs) [CRITICAL]
├─ Generate seismic detection images (2-3hrs) [CRITICAL]
│   └─ Check data availability first
└─ WAITING: Employer approval response

Week 2 (Continue with non-proprietary):
├─ Multi-view calibration image (2-3hrs) [MEDIUM]
├─ Depth calibration images (2-4hrs) [LOW]
└─ WAITING: Employer approval response

Week 3 (After approval received):
├─ APEX ML architecture diagram (3-5hrs) [HIGH]
└─ Acoustic Vision concept (5-10hrs) [HIGH]

BLOCKER: If approval denied, skip proprietary images or create generic versions
```

**Parallel Track Dependencies**:
- Profile photo: INDEPENDENT (can do anytime)
- Seismic images: DEPENDS ON data availability check
- Thermal calibration: DEPENDS ON Springer 2024 paper access
- Respiration: DEPENDS ON SENSORS 2020 paper access
- APEX ML: BLOCKED by employer approval
- Acoustic Vision: BLOCKED by employer approval
- Multi-view: INDEPENDENT
- Depth camera: INDEPENDENT but LOW priority

---

## CATEGORIZED BY CREATION METHOD

### A. EXTRACT FROM EXISTING PAPERS (Easiest)
**Time: 2-4 hours total**

1. Thermal calibration before/after → Springer 2024 paper
2. Respiration signal → SENSORS 2020 paper
3. Multi-view calibration → KAIS 2021 or ICROS 2020

**Process**:
- Download paper PDFs
- Extract figures (use PDF tools or screenshot)
- Crop and resize to 160x160px
- Done!

### B. AUTO-GENERATE WITH PYTHON (Technical but straightforward)
**Time: 5-10 hours total**

4. Seismic before/after → matplotlib signal plots
5. Depth before/after → OpenCV depth colormaps
6. (Optional) Respiration animation → matplotlib animation

**Required Skills**: Python, matplotlib, numpy (Kim Ju O has these ✓)

**Sample Script Template**:
```python
import matplotlib.pyplot as plt
import numpy as np

def create_publication_figure(data, title, filename):
    """
    Standardized figure creation for portfolio
    160x160px, high DPI, clean look
    """
    fig, ax = plt.subplots(figsize=(2, 2), dpi=80)
    ax.plot(data)
    ax.set_title(title, fontsize=10)
    ax.axis('off')  # Clean look for thumbnail
    plt.tight_layout()
    plt.savefig(filename, bbox_inches='tight', pad_inches=0)
    plt.close()

# Use this template for all auto-generated images
```

### C. MANUAL DESIGN (Most time-consuming)
**Time: 8-15 hours total**

7. APEX ML architecture → Draw.io or PowerPoint
8. Acoustic Vision concept → PowerPoint or Canva

**Required Skills**: Visual design, diagram creation
**Difficulty**: Harder if no design experience

**Tool Recommendations**:
- **Draw.io** (free, web-based): Best for architecture diagrams
- **PowerPoint**: Best for concept visualizations with icons
- **Canva** (freemium): Best for polished designs with templates
- **Python diagrams library**: For code-based architecture diagrams

### D. SIMPLE ASSET (Quick win)
**Time: 30min-1hr**

9. Profile photo → remove.bg + crop

---

## REALISTIC TIME ESTIMATES

### Optimistic Scenario (Everything goes smoothly)
- Profile photo: 30 min
- Paper extractions (3 images): 2 hours
- Python generations (4 images): 5 hours
- Manual designs (2 images): 8 hours
- **Total: 15.5 hours**

### Realistic Scenario (Normal development)
- Profile photo: 1 hour
- Paper extractions: 3 hours (finding papers, quality issues)
- Python generations: 8 hours (data issues, refinement)
- Manual designs: 12 hours (learning tools, iterations)
- Approval waiting time: 1-2 weeks
- **Total: 24 hours + approval delay**

### Pessimistic Scenario (Roadblocks hit)
- Profile photo: 2 hours (need new photo shoot)
- Paper extractions: 5 hours (can't access papers, need to regenerate)
- Python generations: 12 hours (no original data, create synthetic)
- Manual designs: 15 hours (learning curve, multiple iterations)
- Approval denied: Need to create generic versions (+5 hours)
- Approval waiting time: 3-4 weeks
- **Total: 34 hours + long approval delay**

---

## RISK ASSESSMENT MATRIX

| Image | Difficulty | Time | Risk Level | Blocker? |
|-------|-----------|------|------------|----------|
| Profile photo | Easy | 1hr | LOW | No |
| Seismic before | Medium | 1.5hr | MEDIUM | Maybe (data access) |
| Seismic after | Medium | 1.5hr | MEDIUM | Maybe (data access) |
| Thermal before | Easy | 1hr | LOW | No (published) |
| Thermal after | Easy | 1hr | LOW | No (published) |
| Respiration | Easy | 1hr | LOW | No (published) |
| APEX ML arch | Hard | 5hr | HIGH | YES (approval) |
| Acoustic concept | Very Hard | 10hr | HIGH | YES (approval) |
| Multi-view calib | Medium | 3hr | LOW | No |
| Depth before | Medium | 2hr | LOW | No |
| Depth after | Medium | 2hr | LOW | No |

**Critical Risks**:
1. **Employer approval delay/denial** (affects 2 images)
2. **Data access issues** (affects 2-4 images)
3. **Design skill gap** (affects 2 images)

**Mitigation Strategies**:
1. Start approval process immediately
2. Have fallback synthetic data ready
3. Consider hiring designer for 2 complex diagrams ($40-100 total)

---

## ACTIONABLE RECOMMENDATIONS

### IMMEDIATE ACTIONS (Do Today)
1. **Request employer approval** for APEX ML and Acoustic Vision
   - Draft 2-3 sentence public descriptions
   - Specify it's for academic portfolio only
   - Emphasize high-level architecture only, no proprietary details

2. **Secure paper access**:
   - Download Springer 2024 paper PDF
   - Download SENSORS 2020 paper PDF
   - Locate domestic publications (KAIS, ICROS)

3. **Profile photo**:
   - Select or take professional photo
   - Process with remove.bg
   - Save as KimJuO.jpg

### WEEK 1 PRIORITIES (5 CRITICAL images)
Complete these while waiting for approval:
1. Profile photo ✓
2. Thermal calibration before/after (from Springer paper)
3. Respiration signal (from SENSORS paper)
4. Seismic before/after (generate or extract)

**Goal**: Have 5 images ready before starting HTML integration

### WEEK 2 (3 MEDIUM priority images)
1. Multi-view calibration
2. Depth camera before/after

**Goal**: Have 8 images ready

### WEEK 3 (2 HIGH priority images - AFTER APPROVAL)
1. APEX ML architecture diagram
2. Acoustic Vision concept

**Goal**: All 10-11 images complete

### EFFICIENCY TIPS

1. **Batch similar work**:
   - Extract all paper figures in one session
   - Generate all Python plots in one session
   - Create all manual diagrams in one session

2. **Quality threshold**:
   - Aim for "good enough" not "perfect"
   - 160x160px thumbnails hide imperfections
   - Can always update later

3. **Use templates**:
   - Create standardized Python plotting function
   - Use Draw.io template for architecture diagrams
   - Reuse color schemes across images

4. **Leverage existing work**:
   - Check Master's thesis for figures
   - Check presentation slides from conferences
   - Check project reports from employers

5. **Consider outsourcing**:
   - If design skill gap is blocking, hire Fiverr designer for 2 complex diagrams
   - Cost: $20-50 per diagram
   - Time saved: 10-15 hours of learning curve

---

## FALLBACK STRATEGIES

### If Employer Approval is Denied

**Option 1: Generic Placeholder Images**
- Create generic ML pipeline diagram (not APEX ML specific)
- Create generic acoustic beamforming concept (not your system)
- Add disclaimer: "Representative concept, not actual system"

**Option 2: Omit Proprietary Projects**
- Remove APEX ML and Acoustic Vision entries from portfolio
- Focus on 5 other projects (all publishable)
- Still strong portfolio with 2 SCI papers + 3 academic projects

**Option 3: Text-Only Description**
- Keep project entries in portfolio
- Use placeholder images or icons
- Detailed text descriptions only (already approved for CV)

**Recommendation**: Start with Option 1 (generic placeholders) to maintain completeness

### If Paper Data is Inaccessible

**For Seismic Detection**:
- Use publicly available seismic datasets (IRIS, USGS)
- Generate synthetic seismic signal + noise
- Apply standard filtering techniques

**For Thermal/Depth Calibration**:
- Use publicly available thermal/depth datasets
- Demonstrate generic calibration concept
- Credit original research in caption

### If Time Runs Short

**Minimum Viable Portfolio (7 images)**:
1. Profile photo (required)
2. Thermal calibration before/after (2 images, easiest)
3. Respiration signal (1 image, easy)
4. Seismic before/after (2 images, can generate)
5. Multi-view calibration (1 image, straightforward)

**This gives**: 5 projects represented with 7 images in ~10 hours

**Defer to later**: APEX ML, Acoustic Vision, Depth calibration

---

## TOOLS CHECKLIST

### Free Tools (Required)
- **remove.bg**: Background removal for profile photo
- **Python + matplotlib**: Signal plots and visualizations
- **Draw.io**: Architecture diagrams
- **PowerPoint**: Concept diagrams (if you have Office)
- **GIMP**: Image editing (free Photoshop alternative)

### Freemium Tools (Optional)
- **Canva**: Professional-looking designs with templates
- **Figma**: UI/UX design tool (overkill but powerful)

### Paid Tools (Optional)
- **Adobe Illustrator**: Professional vector graphics ($20/mo)
- **Adobe Photoshop**: Advanced image editing ($20/mo)
- **Fiverr designer**: $20-50 per custom diagram

### Python Libraries
```bash
pip install matplotlib numpy scipy opencv-python pillow
```

---

## SUCCESS METRICS

### Minimum Viable Product (MVP)
- 7 images covering 5 major projects
- Profile photo present
- All images 160x160px, acceptable quality
- Deployment-ready

**Time to MVP**: 10-15 hours

### Complete Version
- 10-11 images covering all 7 projects
- High-quality, professional appearance
- Animated elements (optional)
- Employer-approved proprietary content

**Time to Complete**: 25-40 hours

### Polish Version (Future Enhancement)
- Dedicated project pages for major projects
- Videos or animated demos
- Interactive visualizations
- Additional supporting materials

**Time to Polish**: +20-40 hours (future work)

---

## FINAL RECOMMENDATION

### Critical Path Strategy

**Phase 1: No Blockers (Week 1)**
Focus on 5 images that require no approvals:
1. Profile photo (1hr)
2. Thermal before/after from Springer paper (2hrs)
3. Respiration from SENSORS paper (1hr)
4. Seismic before/after - generate synthetic if needed (3hrs)

**Output**: 6 images in 7 hours → Enough to launch MVP website

**Phase 2: Waiting for Approval (Week 2)**
Complete medium-priority images:
5. Multi-view calibration (3hrs)
6. Depth before/after (4hrs)

**Output**: 9 images total → Strong portfolio

**Phase 3: After Approval (Week 3)**
Add proprietary projects:
7. APEX ML architecture (5hrs)
8. Acoustic Vision concept (10hrs)

**Output**: 11 images → Complete portfolio

### Pragmatic Approach

**If time-constrained**: Deploy with Phase 1 images (7 hours, 6 images)
**If approval delayed**: Deploy with Phase 1+2 images (14 hours, 9 images)
**When approval received**: Add Phase 3 images (25 hours, 11 images)

**This staged approach ensures the website can go live quickly while allowing for incremental enhancement.**

---

## CONCLUSION

**Total Realistic Effort**: 25-40 hours spread over 2-3 weeks

**Main Bottleneck**: Employer approval for 2 proprietary project images

**Recommended Path**:
1. Start approval process today
2. Complete 6-7 non-blocked images in Week 1 (7-10 hours)
3. Launch MVP website with partial content
4. Add remaining images as they become available

**Key Success Factor**: Don't let perfect be the enemy of good. A portfolio with 7 solid images is far better than no portfolio while waiting for perfect 11-image set.

**Next Step**: Review this document with stakeholder (Kim Ju O) and select which approach fits timeline and priorities.
